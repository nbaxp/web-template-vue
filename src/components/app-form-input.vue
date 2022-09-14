<template>
  <template v-if="type === 'color'">
    <template v-if="readOnly">
      <span
        :style="{
          display: 'inline-block',
          height: '1em',
          width: '1em',
          background: `${model[prop]}`,
          marginRight: '.5em',
        }"
      ></span>
      <span>{{ model[prop] }}</span>
    </template>
    <el-color-picker
      v-else
      v-model="model[prop]"
      :show-alpha="!!schema.showAlpha"
      :predefine="schema.predefine"
    />
  </template>
  <template v-else-if="type === 'number'">
    <template v-if="readOnly">{{ model[prop] }}</template>
    <el-input-number
      v-else
      v-model="model[prop]"
      :placeholder="placeholder"
      :precision="schema.precision ?? 0"
      :min="schema.min"
      :max="schema.max"
      :step="schema.step"
    />
  </template>
  <template v-else-if="type === 'slider'">
    <template v-if="readOnly">{{ model[prop] }}</template>
    <el-slider
      v-else
      v-model="model[prop]"
      :min="schema.min"
      :max="schema.max"
    />
  </template>
  <template v-else-if="type === 'rate'">
    <template v-if="readOnly">{{ model[prop] }}</template>
    <el-rate
      v-else
      v-model="model[prop]"
      :max="schema.max"
    />
  </template>
  <template v-else-if="type === 'boolean'">
    <el-checkbox
      v-model="model[prop]"
      :disabled="readOnly"
    />
  </template>
  <template v-else-if="type === 'switch'">
    <el-switch
      v-model="model[prop]"
      :disabled="readOnly"
    />
  </template>
  <template v-else-if="type === 'radio-group'">
    <el-tag v-if="readOnly">{{ getSelectDisplay() }}</el-tag>
    <el-radio-group
      v-else
      v-model="model[prop]"
      :disabled="readOnly"
    >
      <el-radio
        v-for="item in selectOptions"
        :key="item"
        :label="item.value"
        >{{ item.label }}</el-radio
      >
    </el-radio-group>
  </template>
  <template v-else-if="type === 'checkbox-group'">
    <template v-if="readOnly">
      <el-tag
        v-for="item in getMultipleSelectDisplay()"
        :key="item"
        class="mr-2"
        >{{ item }}</el-tag
      >
    </template>
    <el-checkbox-group
      v-else
      v-model="model[prop]"
      :disabled="readOnly"
    >
      <el-checkbox
        v-for="item in selectOptions"
        :key="item"
        :label="item.value"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
  </template>
  <template v-else-if="type === 'transfer'">
    <template v-if="readOnly">
      <el-tag
        v-for="item in getMultipleSelectDisplay()"
        :key="item"
        class="mr-2"
        >{{ item }}</el-tag
      >
    </template>
    <el-transfer
      v-else
      v-model="model[prop]"
      :disabled="readOnly"
      :data="selectOptions"
      :props="{ key: 'value' }"
      :filterable="schema.filterable ?? true"
      :titles="schema.titles ?? ['未选', '已选']"
    />
  </template>
  <template v-else-if="type === 'select'">
    <template v-if="readOnly">
      <template v-if="schema.multiple">
        <el-tag
          v-for="item in getMultipleSelectDisplay()"
          :key="item"
          class="mr-2"
          >{{ item }}</el-tag
        >
      </template>
      <el-tag v-else>{{ getSelectDisplay() }}</el-tag>
    </template>
    <el-select
      v-else
      v-model="model[prop]"
      :multiple="!!schema.multiple"
      :placeholder="placeholder"
      :disabled="readOnly"
      clearable
    >
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </template>
  <template v-else-if="type === 'cascader'">
    <template v-if="readOnly">
      <template v-if="schema.multiple">
        <el-tag
          v-for="item in getCascaderDisplay()"
          :key="item"
          class="mr-2"
        >
          {{ item }}
        </el-tag>
      </template>
      <el-tag v-else>{{ getCascaderDisplay() }}</el-tag>
    </template>
    <el-cascader
      v-else
      v-model="cascaderModel"
      :placeholder="placeholder"
      :disabled="readOnly"
      :options="selectOptions"
      :props="{ multiple: !!schema.multiple, checkStrictly: !!schema.checkStrictly }"
      clearable
      @change="onCascaderChange"
    />
  </template>
  <template v-else-if="type === 'date' || type === 'datetime' || type === 'daterange' || type === 'datetimerange'">
    <template v-if="readOnly">{{ getDate() }}</template>
    <el-date-picker
      v-else
      v-model="dateModel"
      :disabled="readOnly"
      :type="type"
      :placeholder="placeholder"
      :start-placeholder="schema.startPlaceholder ?? '开始'"
      :end-placeholder="schema.endPlaceholder ?? '结束'"
      :unlink-panels="!!schema.unlinkPanels"
      :disabled-date="disabledDate"
      clearable
      @change="onDateChange"
    />
  </template>
  <template v-else-if="type === 'image' || type === 'file'">
    <template v-if="readOnly">
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
      :action="schema.action"
      :multiple="!!schema.multiple"
      :before-upload="beforeUpload"
      :on-exceed="onExceed"
      :on-success="onUploadSuccess"
      :list-type="type === 'file' ? 'text' : 'picture-card'"
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
  <template v-else>
    <template v-if="readOnly">
      <template v-if="schema.input === 'password'">********</template>
      <template v-else>{{ model[prop] }}</template>
    </template>
    <template v-else>
      <el-input
        v-model="model[prop]"
        :type="schema.input ?? schema.type === 'string' ? 'text' : schema.type"
        :placeholder="placeholder"
        :show-password="schema.input === 'password'"
        clearable
      >
        <template
          v-if="schema.prefix"
          #prefix
        >
          <svg-icon
            class="el-input__icon"
            :name="schema.prefix"
          />
        </template>
        <template
          v-if="schema.suffix"
          #suffix
        >
          <svg-icon
            class="el-input__icon"
            :name="schema.suffix"
          />
        </template>
      </el-input>
    </template>
  </template>
</template>

<script setup>
import { ElMessage } from 'element-plus';

import SvgIcon from '~/components/svg-icon.vue';
import request from '~/request';
import { extensionToMimetype, findPath, importFunction, mimetypeToExension } from '~/utils';

const props = defineProps({
  prop: {
    type: String,
    default: null,
  },
  model: {
    type: Object,
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
  mode: {
    type: String,
    default: 'query',
  },
});
const model = reactive(props.model);
const emit = defineEmits(['update:model']);
watch(model, (value) => {
  emit('update:model', value);
});
//
const type = props.schema.input ?? props.schema.type;
const placeholder = props.schema.placeholder ?? props.schema.title;
const readOnly = computed(() => {
  if (props.disabled) {
    return true;
  }
  if (props.mode === 'detail') {
    return true;
  }
  if (props.mode === 'update' && props.schema.readOnly) {
    return true;
  }
  return false;
});
// select
const selectOptions = ref(props.schema.options ?? []);
const getSelectDisplay = () => {
  return selectOptions.value.find((o) => o.value === model[props.prop])?.label;
};
const getMultipleSelectDisplay = () => {
  return selectOptions.value.filter((o) => model[props.prop].find((i) => i === o.value)).map((o) => o.label);
};
if (props.schema.url) {
  if (props.schema.parent) {
    watchEffect(async () => {
      const parentValue = model[props.schema.parent];
      if (parentValue) {
        const response = await request.get(`${props.schema.url}?parent=${parentValue}`);
        selectOptions.value = response.data.data ?? response.data;
        if (model[props.prop] && !selectOptions.value.some((o) => o.value === model[props.prop])) {
          model[props.prop] = null;
        }
      } else {
        selectOptions.value = [];
        model[props.prop] = null;
      }
    });
  }
}
// cascade
const cascaderModel = ref([]);
const getCascaderDisplay = () => {
  if (props.schema.multiple) {
    return model[props.prop].map((o) =>
      findPath(selectOptions.value, o)
        .map((i) => i.label)
        .join(' / '),
    );
  }
  return findPath(selectOptions.value, model[props.prop])
    .map((o) => o.label)
    .join(' / ');
};
if (type === 'cascader' && model[props.prop]) {
  if (props.schema.multiple) {
    cascaderModel.value = model[props.prop].map((o) => findPath(selectOptions.value, o).map((i) => i.value));
  } else {
    // cascaderModel.value = [model[props.prop]];
    cascaderModel.value = findPath(selectOptions.value, model[props.prop]).map((o) => o.value);
  }
}

const onCascaderChange = (values) => {
  console.log(cascaderModel.value, values);
  if (props.schema.multiple) {
    model[props.prop] = values;
  } else {
    const [value] = values;
    model[props.prop] = value;
  }
};
// date||datetime||daterange
const dateModel = ref(null);
const getDate = () => {
  if (type === 'date') {
    return new Date(model[props.prop]).toLocaleDateString();
  }
  if (type === 'datetime') {
    return new Date(model[props.prop]).toLocaleString();
  }
  if (type === 'daterange') {
    return `${new Date(model[props.prop]).toLocaleDateString()} - ${new Date(
      model[props.schema.end],
    ).toLocaleDateString()}`;
  }
  // datetimerange
  return `${new Date(model[props.prop]).toLocaleString()} - ${new Date(model[props.schema.end]).toLocaleString()}`;
};
if (type === 'date' || type === 'datetime') {
  if (model[props.prop]) {
    dateModel.value = new Date(model[props.prop]);
  }
}
if ((type === 'daterange' || type === 'datetimerange') && model[props.prop] && model[props.schema.end]) {
  dateModel.value = [new Date(model[props.prop]), new Date(model[props.schema.end])];
}
const onDateChange = (values) => {
  if (Array.isArray(values)) {
    // datarange
    const [start = null, end = null] = values ?? [];
    model[props.prop] = JSON.stringify(start);
    model[props.schema.end] = JSON.stringify(end);
  } else {
    // date||datetime
    model[props.prop] = JSON.stringify(values);
  }
};
let disabledDate = () => false;
// image
const upload = ref(null);
const fileList = ref([]);
const preivewImageVisable = ref(false);
const previewImageUrl = ref(null);
const limit = computed(() => (props.schema.multiple ? props.schema.limit ?? 5 : 1));
const size = computed(() => props.schema.size ?? 1024 * 1024);
if (model[props.prop]) {
  if (props.schema.multiple) {
    fileList.value = model[props.prop].map((o) => ({ name: props.prop, url: o }));
  } else {
    fileList.value = [{ name: props.prop, url: model[props.prop] }];
  }
}
watch(
  fileList,
  (value) => {
    if (props.schema.multiple) {
      model[props.prop] = value.map((o) => o.url);
    } else {
      model[props.prop] = value.length ? value.map((o) => o.url)[0] : null;
    }
  },
  { deep: true },
);
const onRemove = (file) => {
  upload.value.handleRemove(file);
  if (props.schema.multiple) {
    model[props.prop] = fileList.value.map((o) => o.url);
  } else {
    model[props.prop] = null;
  }
};
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};
const fileTypes = props.schema.accept?.split(',').map((o) => extensionToMimetype(o)) ?? [];
const beforeUpload = (file) => {
  console.log(`file.type:${file.type}`);
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
const onUploadSuccess = (uploadFile, uploadFiles) => {
  console.log(fileList.value);
  fileList.value.find((o) => o.name === uploadFiles.name).url = uploadFile.data;
};
//
onMounted(async () => {
  disabledDate = await importFunction(props.schema.disabledDate ?? '()=>false');
  if (props.schema.url && !props.schema.parent) {
    const response = await request.get(props.schema.url);
    selectOptions.value = response.data.data ?? response.data;
  }
});
</script>
