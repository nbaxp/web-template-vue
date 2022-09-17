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
          :key="item.number"
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
            :lazy="true"
            :load="lazyLoad"
            @selection-change="onSelectionChange"
          >
            <el-table-column
              type="selection"
              align="center"
              fixed="left"
            />
            <el-table-column
              v-if="!model.listModel.disableRowIndex"
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
                    :key="item.number"
                  >
                    <el-button
                      v-if="item.rows === 1 || item.rows === 2"
                      type="primary"
                      @click.stop="onClick(item, [row])"
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
          v-if="!model.listModel.disablePagination"
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
    :close-on-click-modal="false"
    :destroy-on-close="true"
    :center="true"
  >
    <template v-if="command === 'detail'">
      <template v-if="model.detailModel.data">
        <app-form
          ref="detailFormRef"
          v-model="model.detailModel"
        >
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
        ref="createFormRef"
        v-model="model.createModel"
        @after="afterCreate"
      />
    </template>
    <template v-else-if="command === 'update'">
      <template v-if="model.updateModel.data">
        <app-form
          ref="updateFormRef"
          v-model="model.updateModel"
          @after="afterUpdate"
        />
      </template>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus';

import log from '~/log';
import request from '~/request';
import { useUserStore } from '~/store';
import { cloneDeep } from '~/utils';

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
const createFormRef = ref(null);
const updateFormRef = ref(null);
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

const lazyLoad = async (row, node, resolve) => {
  if (row.children && row.children.length) {
    resolve(row.children);
  } else {
    const parentId = row.id;
    const data = await queryFormRef.value.load({ parentId });
    resolve(data.items);
  }
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
  if (!model.listModel.disablePage) {
    const pageData = {};
    if (pageModel.pageIndex !== 1) {
      pageData.pageIndex = pageModel.pageIndex;
    }
    if (pageModel.pageSize !== 10) {
      pageData.pageSize = pageModel.pageSize;
    }
    callback(pageData);
  }
};

const afterQuery = (data) => {
  model.listModel.data = data.items;
  if (!model.listModel.disablePage) {
    pageModel.total = data.total;
  }
};

const onSelectionChange = (val) => {
  selection.value = val;
};

const closeDialog = () => {
  dialogModel.visable = false;
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
  // model.detailModel.action = permission.path ?? model.queryModel.action;
  model.detailModel.method = permission.method ?? 'post';
  model.detailModel.mode = 'detail';
  dialogModel.title = permission.name;
  dialogModel.visable = true;
};

const onCreate = async (permission) => {
  model.createModel.data = null;
  model.createModel.action = model.queryModel.action;
  if (permission.path) {
    model.createModel.action = permission.path.startsWith('/')
      ? permission.path
      : `${model.createModel.action}/${permission.path}`;
  }
  model.createModel.method = permission.method ?? 'post';
  model.createModel.mode = 'create';
  dialogModel.title = permission.name;
  dialogModel.visable = true;
};

const afterCreate = async () => {
  closeDialog();
  await query();
};

const onUpdate = async (permission, items) => {
  const { id } = items[0];
  model.updateModel.action = model.queryModel.action;
  if (permission.path) {
    model.updateModel.action = permission.path.startsWith('/')
      ? permission.path
      : `${model.updateModel.action}/${permission.path}`;
  }
  model.updateModel.action = `${model.updateModel.action}/${id}`;
  //
  const data = { id };
  let url = model.queryModel.action;
  const queryPermission = userStore.getButtonPermissions().find((o) => o.command === 'detail');
  if (queryPermission.path) {
    url = queryPermission.path.startsWith('/')
      ? queryPermission.path
      : `${model.queryModel.action}/${queryPermission.path}`;
  }
  const method = queryPermission.method ?? 'post';
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
  model.updateModel.data = result ?? cloneDeep(items[0]);
  model.updateModel.method = permission.method ?? 'post';
  model.updateModel.mode = 'update';
  dialogModel.title = permission.name;
  dialogModel.visable = true;
};

const afterUpdate = async () => {
  closeDialog();
  await query();
};

const onDelete = async (permission, items) => {
  try {
    await ElMessageBox.confirm(`确认删除 ${items.length} 条数据？`, '警告', { type: 'warning' });
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
      type: 'error',
      message: error,
    });
  }
};

const command = ref(null);
const onClick = async (permission, items) => {
  command.value = permission.command;
  if (permission.command === 'detail') {
    await onDetail(permission, items);
  } else if (permission.command === 'create') {
    await onCreate(permission, items);
  } else if (permission.command === 'update') {
    await onUpdate(permission, items);
  } else if (permission.command === 'delete') {
    await onDelete(permission, items);
  } else {
    emit('command', permission, items);
  }
};
</script>
