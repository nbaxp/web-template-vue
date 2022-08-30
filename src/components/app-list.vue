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
          <template #footer></template>
        </app-form>
      </el-col>
    </el-row>
    <el-row class="mb-5">
      <el-col>
        <el-button>新建</el-button>
        <el-button>删除</el-button>
      </el-col>
    </el-row>
    <el-table
      :ref="tableRef"
      row-key="id"
      border
      highlight-current-row
      :data="model.tableData"
    >
      <template
        v-for="(item, key) in model.tableSchema.properties"
        :key="key"
      >
        <template v-if="item.input !== 'hidden'">
          <el-table-column
            :key="key"
            :prop="key"
            :label="item.title ?? key"
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
          <el-button>查看</el-button>
          <el-button>编辑</el-button>
          <el-button>删除</el-button>
        </el-table-column>
      </slot>
    </el-table>
    <el-row class="mt-5">
      <el-col>
        <el-pagination
          v-model:currentPage="pageModel.pageIndex"
          v-model:page-size="pageModel.pageSize"
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
const formRef = ref(null);
const tableRef = ref(null);

const load = async () => {
  await formRef.value.submit();
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
