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
    test: {
      type: 'number',
    },
    id: {
      type: 'string',
      input: 'hidden',
    },
    userName: {
      type: 'string',
      title: '用户名',
      readOnly: true,
      rules: [
        {
          required: true,
        },
      ],
    },
    password: {
      type: 'string',
      title: '密码',
      input: 'password',
      placeholder: '创建用户或修改密码时填写',
    },
    name: {
      type: 'string',
      title: '姓名',
    },
    email: {
      type: 'string',
      title: '邮箱',
    },
    emailConfirmed: {
      type: 'boolean',
      title: '邮箱已确认',
    },
    avatar: {
      type: 'string',
      title: '头像',
      input: 'image',
    },
    birthday: {
      type: 'string',
      title: '生日',
      input: 'date',
    },
    createdAt: {
      type: 'string',
      title: '创建时间',
      input: 'datetime',
      hideForEdit: true,
    },
    modifiedAt: {
      type: 'string',
      title: '修改时间',
      input: 'datetime',
      hideForEdit: true,
    },
    rowVersion: {
      type: 'string',
      input: 'hidden',
    },
  },
};

const queryModel = {
  action: 'user',
  method: 'get',
  inline: true,
  disableValidation: true,
  data: null,
  schema: {
    properties: {
      userName: schema.properties.userName,
    },
  },
};
const listModel = {
  data: [],
  schema,
};
const detailModel = {
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
