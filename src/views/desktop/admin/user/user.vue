<template>
  <app-list
    ref="listRef"
    v-model="model"
  >
  </app-list>
</template>

<script setup>
import AppList from '~/components/app-list.vue';

const ws = new WebSocket('ws://localhost/ws');
ws.addEventListener('open', () => {
  console.log('websocket open');
  ws.send('hello');
});

ws.addEventListener('close', () => {
  console.log('websocket close');
});

ws.addEventListener('error', () => {
  console.log('websocket error');
});

ws.addEventListener('message', (event) => {
  console.log('Received：', event.data);
});
//
const listRef = ref(null);

const model = {
  action: 'list?a=b',
  method: 'get',
  inline: true,
  disableValidation: true,
  data: null,
  schema: {
    properties: {
      test1: {
        type: 'string',
        title: '字符串',
        rules: [
          {
            required: true,
          },
        ],
      },
    },
  },
  tableData: [],
  tableSchema: {
    properties: {
      id: {
        type: 'string',
        input: 'hidden',
      },
      userName: {
        type: 'string',
        title: '用户名',
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
      },
      modifiedAt: {
        type: 'string',
        title: '修改时间',
        input: 'datetime',
      },
      rowVersion: {
        type: 'string',
        input: 'hidden',
      },
    },
  },
};
</script>
