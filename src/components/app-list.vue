<template>
  <el-card>
    <el-row>
      <el-col>
        <app-form
          ref="formRef"
          v-model="model"
          @before="before"
          @after="after"
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
          @click="formRef.submit()"
          >查询</el-button
        >
        <el-button
          type="primary"
          @click="reset"
          >重置</el-button
        >
        <template
          v-for="item in userStore.getButtonPermissions()"
          :key="item.value"
        >
          <el-button
            v-if="item.rows === 0 || item.rows === 2"
            type="primary"
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
            :data="model.tableData"
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
              v-for="(item, key) in model.tableSchema.properties"
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
                <template
                  v-for="item in userStore.getButtonPermissions()"
                  :key="item.value"
                >
                  <el-button
                    v-if="item.rows === 1 || item.rows === 2"
                    type="primary"
                    >{{ item.name }}</el-button
                  >
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
          @size-change="onSizeChange"
          @current-change="onIndexChange"
        />
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import AppFormInput from '~/components/app-form-input.vue';
import { useUserStore } from '~/store';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});
const model = reactive(props.modelValue);
const emit = defineEmits(['update:modelValue']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
//
const pageModel = reactive({
  pageIndex: 1,
  pageSize: 10,
  total: 0,
});
//
const userStore = useUserStore();
const formRef = ref(null);
const tableRef = ref(null);

const load = async () => {
  await formRef.value.submit();
};

const reset = async () => {
  formRef.value.reset();
  await load();
};

const onIndexChange = async () => {
  await load();
};

const onSizeChange = async () => {
  pageModel.pageIndex = 1;
  await load();
};

const before = (callback) => {
  const pageData = {};
  if (pageModel.pageIndex !== 1) {
    pageData.pageIndex = pageModel.pageIndex;
  }
  if (pageModel.pageSize !== 10) {
    pageData.pageSize = pageModel.pageSize;
  }
  callback(pageData);
};

const after = (data) => {
  model.tableData = data.items;
  pageModel.total = data.total;
};

onMounted(async () => {
  await load();
});
</script>
