<template>
  <template v-if="disabled">
    <template v-if="schema.multiple">
      <template v-if="type === 'file'">
        <el-link
          v-for="item in model[prop]"
          :key="item"
          class="mr-2"
          >{{ item }}</el-link
        >
      </template>
      <template v-else>
        <el-image
          v-for="item in model[prop]"
          :key="item"
          :src="item"
          :preview-src-list="[item]"
          :preview-teleported="true"
          style="height: 1em"
          class="mr-2"
        />
      </template>
    </template>
    <template v-else>
      <el-link v-if="type === 'file'">{{ model[prop] }}</el-link>
      <el-image
        v-else
        :src="model[prop]"
        :preview-src-list="[model[prop]]"
        :preview-teleported="true"
        style="height: 1em"
      />
    </template>
  </template>
  <el-upload
    v-else
    ref="upload"
    v-model:file-list="fileList"
    :accept="schema.accept"
    :limit="schema.multiple ? schema.limit ?? 5 : 1"
    :action="getAction()"
    :multiple="!!schema.multiple"
    :before-upload="beforeUpload"
    :on-exceed="onExceed"
    :on-success="onUploadSuccess"
    :list-type="type === 'file' ? 'text' : 'picture-card'"
    :headers="getHeaders()"
    class="w-full"
  >
    <template #trigger>
      <el-icon>
        <i-ep-plus />
      </el-icon>
    </template>
    <template #tip>
      <div class="el-upload__tip">
        <div>
          单个文件大小限制：{{ formatBytes(size) }}，上传数量限制：{{ limit
          }}<template v-if="schema.accept">，上传文件类型：{{ schema.accept }}</template>
        </div>
      </div>
    </template>
    <template #file="{ file }">
      <template v-if="type === 'file'">
        <div class="el-upload-list__item-info">
          <a class="el-upload-list__item-name">
            <el-icon class="el-icon--document"><i-ep-document /></el-icon>
            <span class="el-upload-list__item-file-name">{{ file.url }}</span>
          </a>
          <el-icon
            class="el-icon--close"
            @click="onRemove(file)"
            ><i-ep-close
          /></el-icon>
        </div>
      </template>
      <div v-else>
        <img
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="onPreview(file)"
          >
            <el-icon><i-ep-zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="onRemove(file)"
          >
            <el-icon><i-ep-delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <el-dialog v-model="preivewImageVisable">
    <img
      w-full
      :src="previewImageUrl"
      alt="schema.title"
    />
  </el-dialog>
</template>

<script setup>
import { ElMessage } from 'element-plus';

import { baseURL } from '~/request';
import { useUserStore } from '~/store';
import { extensionToMimetype, formatBytes, mimetypeToExension } from '~/utils';

defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  model: {
    type: Object,
    default: null,
  },
  prop: {
    type: String,
    default: null,
  },
  schema: {
    type: Object,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const model = reactive(props.model);
const emit = defineEmits(['update:model']);
watch(model, (value) => {
  emit('update:model', value);
});
//
const type = props.schema.input ?? props.schema.type;
//
const upload = ref(null);
const preivewImageVisable = ref(false);
const previewImageUrl = ref(null);
const limit = computed(() => (props.schema.multiple ? props.schema.limit ?? 5 : 1));
const size = computed(() => props.schema.size ?? 1024 * 1024);
const fileTypes = props.schema.accept?.split(',').map((o) => extensionToMimetype(o)) ?? [];
const fileList = ref([]);
watchEffect(() => {
  if (model[props.prop]) {
    if (props.schema.multiple) {
      fileList.value = model[props.prop].map((o, i) => ({ name: `${props.prop}_${i}`, url: o }));
    } else {
      fileList.value = [{ name: props.prop, url: model[props.prop] }];
    }
  } else {
    fileList.value = [];
  }
});

const onUploadSuccess = (uploadFile, uploadFiles) => {
  fileList.value.find((o) => o.name === uploadFiles.name).url = uploadFile.data;
  if (props.schema.multiple) {
    model[props.prop] = fileList.value.map((o) => o.url);
  } else {
    model[props.prop] = uploadFile.data;
  }
};

const onRemove = (file) => {
  upload.value.handleRemove(file);
  if (props.schema.multiple) {
    model[props.prop] = fileList.value.filter((o) => o.name !== file.name).map((o) => o.url);
  } else {
    model[props.prop] = null;
  }
};

const beforeUpload = (file) => {
  if (props.schema.accept && !fileTypes.some((o) => o === file.type)) {
    ElMessage.error(`当前文件类型 ${mimetypeToExension(file.type) ?? file.type}，可选文件类型 ${props.schema.accept}`);
    return false;
  }
  if (file.size > size.value) {
    ElMessage.error(`当前文件大小 ${formatBytes(file.size)}，已超过 ${formatBytes(size.value)}`);
    return false;
  }
  return true;
};

const onPreview = (file) => {
  previewImageUrl.value = file.url;
  preivewImageVisable.value = true;
};

const onExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `上传最大数量为 ${limit.value}, 本次选择了 ${files.length} 个文件, 总计 ${
      files.length + uploadFiles.length
    } 个文件`,
  );
};

const getHeaders = () => {
  const headers = props.schema.headers ?? {};
  const userStore = useUserStore();
  const { token } = userStore;
  if (token) {
    Object.assign(headers, { Authorization: `Bearer ${token}` });
  }
  return headers;
};

const getAction = () => {
  const url = props.schema.action;
  if (url.startsWith('http') || url.startsWith('/')) {
    return url;
  }
  return `${baseURL}${url}`;
};
</script>
