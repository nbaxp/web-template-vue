<template>
  <el-card>
    <el-row>
      <el-col>
        <app-form
          ref="queryFormRef"
          v-model="model.queryModel"
          @before="beforeQuery"
          @after="afterQuery"
        >
          <template #footer>
            <div></div>
          </template>
        </app-form>
      </el-col>
    </el-row>
    <el-row class="mb-5">
      <el-col>
        <el-button
          type="primary"
          @click="queryFormRef.submit()"
          >查询</el-button
        >
        <el-button
          type="primary"
          @click="resetQueryForm"
          >重置</el-button
        >
        <template
          v-for="item in userStore.getButtonPermissions()"
          :key="item.value"
        >
          <el-button
            v-if="item.rows === 0 || item.rows === 2"
            type="primary"
            :disabled="item.rows == 2 && !selection.length"
            @click="onClick(item, selection)"
          >
            {{ item.name }}
          </el-button>
        </template>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-scrollbar>
          <el-table
            :ref="tableRef"
            row-key="id"
            border
            highlight-current-row
            table-layout="auto"
            :data="model.listModel.data"
            @selection-change="onSelectionChange"
          >
            <el-table-column
              type="selection"
              align="center"
              fixed="left"
            />
            <el-table-column
              label="序号"
              type="index"
              align="center"
              fixed="left"
            >
              <template #default="scope">{{
                (pageModel.pageIndex - 1) * pageModel.pageSize + scope.$index + 1
              }}</template>
            </el-table-column>
            <template
              v-for="(item, key) in model.listModel.schema.properties"
              :key="key"
            >
              <template v-if="item.input !== 'hidden'">
                <el-table-column
                  :key="key"
                  :prop="key"
                  :label="item.title ?? key"
                  :sortable="item.sortable"
                  show-overflow-tooltip
                >
                  <template #default="scope">
                    <app-form-input
                      :prop="key"
                      :model="scope.row"
                      :schema="item"
                      :disabled="true"
                    />
                  </template>
                </el-table-column>
              </template>
            </template>
            <slot name="operations">
              <el-table-column
                fixed="right"
                label="操作"
              >
                <template #default="{ row }"
                  ><template
                    v-for="item in userStore.getButtonPermissions()"
                    :key="item.value"
                  >
                    <el-button
                      v-if="item.rows === 1 || item.rows === 2"
                      type="primary"
                      @click="onClick(item, [row])"
                      >{{ item.name }}</el-button
                    >
                  </template>
                </template>
              </el-table-column>
            </slot>
          </el-table>
        </el-scrollbar>
      </el-col>
    </el-row>
    <el-row class="mt-5">
      <el-col>
        <el-pagination
          v-model:currentPage="pageModel.pageIndex"
          v-model:page-size="pageModel.pageSize"
          class="justify-end"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageModel.total"
          @size-change="onPageSizeChange"
          @current-change="onPageIndexChange"
        />
      </el-col>
    </el-row>
  </el-card>
  <el-dialog
    ref="dialogRef"
    v-model="dialogModel.visable"
    :title="dialogModel.title"
  >
    <template v-if="command === 'detail'">
      <template v-if="model.detailModel.data">
        <app-form v-model="model.detailModel">
          <template #footer>
            <el-form-item>
              <el-button
                type="primary"
                @click="closeDialog"
                >关闭</el-button
              >
            </el-form-item>
          </template>
        </app-form>
      </template>
    </template>
    <template v-else-if="command === 'create'">
      <app-form
        ref="editFormRef"
        v-model="model"
        @before="beforeQuery"
        @after="afterQuery"
      />
    </template>
    <template v-else-if="command === 'update'">
      <app-form
        ref="editFormRef"
        v-model="model"
        @before="beforeQuery"
        @after="afterQuery"
      />
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus';
import { cloneDeep } from 'lodash';

import AppFormInput from '~/components/app-form-input.vue';
import log from '~/log';
import { useUserStore } from '~/store';
import request from '~/utils/request';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});
const model = reactive(props.modelValue);
const emit = defineEmits(['update:modelValue', 'command']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
if (!model.detailModel.disabled) {
  model.detailModel.disabled = true;
}
//
const userStore = useUserStore();
const queryFormRef = ref(null);
const tableRef = ref(null);
const selection = ref([]);
const pageModel = reactive({
  pageIndex: 1,
  pageSize: 10,
  total: 0,
});
const dialogModel = reactive({
  visable: false,
  title: null,
});

const query = async () => {
  await queryFormRef.value.submit();
};

onMounted(async () => {
  await query();
});

const resetQueryForm = async () => {
  queryFormRef.value.reset();
  await query();
};

const onPageIndexChange = async () => {
  await query();
};

const onPageSizeChange = async () => {
  pageModel.pageIndex = 1;
  await query();
};

const beforeQuery = (callback) => {
  const pageData = {};
  if (pageModel.pageIndex !== 1) {
    pageData.pageIndex = pageModel.pageIndex;
  }
  if (pageModel.pageSize !== 10) {
    pageData.pageSize = pageModel.pageSize;
  }
  callback(pageData);
};

const afterQuery = (data) => {
  model.listModel.data = data.items;
  pageModel.total = data.total;
};

const onSelectionChange = (val) => {
  selection.value = val;
};

const onDelete = async (permission, items) => {
  try {
    await ElMessageBox.confirm('确认删除选中的数据？', '警告', { type: 'warning' });
    let url = model.queryModel.action;
    if (permission.path) {
      url = permission.path.startsWith('/') ? permission.path : `${model.queryModel.action}/${permission.path}`;
    }
    const method = permission.method ?? 'post';
    const config = {
      url,
      method,
    };
    const data = items.map((o) => o.id);
    if (method === 'get') {
      config.params = data;
    } else {
      config.data = data;
    }
    const response = await request.request(config);
    if (response.status === 204 || (response.status === 200 && response.data.code === 200)) {
      log.debug('删除成功');
      ElMessage({
        type: 'success',
        message: '删除成功',
      });
      await query();
    }
  } catch (error) {
    console.log(error);
    ElMessage({
      type: 'error·',
      message: error,
    });
  }
};

const onDetail = async (permission, items) => {
  const { id } = items[0];
  const data = { id };
  let url = model.queryModel.action;
  if (permission.path) {
    url = permission.path.startsWith('/') ? permission.path : `${model.queryModel.action}/${permission.path}`;
  }
  const method = permission.method ?? 'post';
  const config = {
    url,
    method,
  };
  if (method === 'get') {
    // config.params = data;
    config.url = `${url}/${id}`;
  } else {
    config.data = data;
  }
  const response = await request.request(config);
  const result = response.data.data ?? response.data;
  model.detailModel.data = result ?? cloneDeep(items[0]);
  dialogModel.title = permission.name;
  dialogModel.visable = true;
};

const onCreate = async () => {};

const onUpdate = async () => {};

const command = ref(null);
const onClick = async (permission, items) => {
  command.value = permission.value;
  if (permission.value === 'detail') {
    await onDetail(permission, items);
  } else if (permission.value === 'create') {
    await onCreate(permission, items);
  } else if (permission.value === 'update') {
    await onUpdate(permission, items);
  } else if (permission.value === 'delete') {
    await onDelete(permission, items);
  } else {
    emit('command', permission, items);
  }
};

const closeDialog = () => {
  dialogModel.visable = false;
};
</script>
