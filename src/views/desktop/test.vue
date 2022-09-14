<template>
  <div class="w-full h-full overflow-auto">
    <app-form v-model="model" />
  </div>
</template>
<script setup>
import AppForm from '~/components/app-form.vue';
// ws
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

const model = {
  data: null,
  schema: {
    properties: {
      stringProp: {
        type: 'string',
        title: 'type[string]',
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
      rowVersion: {
        type: 'string',
        input: 'hidden',
      },
    },
  },
};
</script>
