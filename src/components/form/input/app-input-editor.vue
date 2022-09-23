<template>
  <ckeditor
    v-model="model"
    :editor="ClassicEditor"
    :config="editorConfig"
    @ready="onReady"
  />
</template>
<script setup>
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

import request from '~/request';

const ckeditor = CKEditor.component;

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  uploadUrl: {
    type: String,
    default: null,
  },
});
const model = ref(props.modelValue ?? '');
const emit = defineEmits(['update:modelValue']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
watch(
  () => props.modelValue,
  (value) => {
    model.value = value ?? '';
  },
);
///
const editorConfig = reactive({
  language: 'zh-cn',
  url: props.uploadUrl,
});

// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/upload-adapter.html
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('file', file);
          try {
            const config = {
              url: editorConfig.url,
              method: 'post',
              // headers: {
              //   'Content-Type': 'multipart/form-data',
              // },
              data: formData,
            };
            if (config.url.startsWith('http') || config.url.startsWith('/')) {
              config.baseURL = '';
            }
            request.request(config).then((o) => {
              const url = o.data.data ?? o.data;
              resolve({ default: url });
            });
          } catch (error) {
            reject(error);
          }
        }),
    );
  }
}
///
const onReady = (editor) => {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
};
</script>
