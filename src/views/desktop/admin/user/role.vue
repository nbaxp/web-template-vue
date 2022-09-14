<template>
  <app-list
    ref="listRef"
    v-model="model"
  >
  </app-list>
</template>

<script setup>
import AppList from '~/components/app-list.vue';

const listRef = ref(null);

const schema = {
  properties: {
    id: {
      type: 'string',
      input: 'hidden',
    },
    name: {
      type: 'string',
      title: '名称',
      rules: [
        {
          required: true,
        },
      ],
    },
    number: {
      type: 'string',
      title: '编号',
      rules: [
        {
          required: true,
        },
      ],
    },
    isReadonly: {
      type: 'boolean',
      title: '只读',
      readOnly: true,
    },
  },
};

const queryModel = {
  action: 'role',
  method: 'get',
  inline: true,
  disableValidation: true,
  data: null,
  schema,
};
const listModel = {
  data: [],
  schema,
  disableRowIndex: true,
  disablePagination: true,
};
const detailModel = {
  disabled: true,
  data: null,
  schema,
};
const createModel = {
  data: null,
  schema,
};
const updateModel = {
  data: {},
  schema,
};

const model = reactive({
  queryModel,
  listModel,
  detailModel,
  createModel,
  updateModel,
});
</script>
