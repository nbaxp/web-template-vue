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
  <template v-else-if="type === 'editor'">
    <template v-if="readOnly">
      <div v-html="model[prop]"></div>
    </template>
    <app-input-editor
      v-else
      v-model="model[prop]"
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
      :min="schema.min ?? 0"
      :max="schema.max ?? 100"
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
    <el-tag v-if="readOnly">{{ getSelectDisplay }}</el-tag>
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
        v-for="item in getMultipleSelectDisplay"
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
        v-for="item in getMultipleSelectDisplay"
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
    <app-input-select
      :model="model"
      :prop="prop"
      :schema="schema"
      :disabled="readOnly"
      :placeholder="placeholder"
    />
  </template>
  <template v-else-if="type === 'cascader'">
    <app-input-cascader
      :model="model"
      :prop="prop"
      :schema="schema"
      :disabled="readOnly"
      :placeholder="placeholder"
    />
  </template>
  <template v-else-if="type === 'date' || type === 'datetime' || type === 'daterange' || type === 'datetimerange'">
    <app-input-date
      :model="model"
      :prop="prop"
      :schema="schema"
      :disabled="readOnly"
      :placeholder="placeholder"
    />
  </template>
  <template v-else-if="type === 'image' || type === 'file'">
    <app-input-upload
      :model="model"
      :prop="prop"
      :schema="schema"
      :disabled="readOnly"
      :placeholder="placeholder"
    />
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
import cache from '~/cache';
import request from '~/request';

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
// options
const selectOptions = ref(props.schema.options ?? []);

const getSelectDisplay = computed(() => {
  return selectOptions.value.find((o) => o.value === model[props.prop])?.label;
});

const getMultipleSelectDisplay = computed(() => {
  return selectOptions.value.filter((o) => model[props.prop].find((i) => i === o.value)).map((o) => o.label);
});

const getOptions = async (url) => {
  const data = await navigator.locks.request(url, async () => {
    let result = cache.get(url);
    if (!result) {
      const response = await request.get(url);
      result = response.data.data ?? response.data;
      cache.set(url, result, 60 * 1000);
    }
    return result;
  });
  return data ?? [];
};
//
onMounted(async () => {
  if (props.schema.url && !props.schema.parent) {
    const { url } = props.schema;
    selectOptions.value = await getOptions(url);
  }
});
</script>
