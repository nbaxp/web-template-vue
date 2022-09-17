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
    <app-editor
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
import { findPath } from '~/utils';

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
if (props.schema.url) {
  if (props.schema.parent) {
    watchEffect(async () => {
      const parentValue = model[props.schema.parent];
      if (parentValue) {
        const url = `${props.schema.url}?parent=${parentValue}`;
        selectOptions.value = await getOptions(url);
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
//
onMounted(async () => {
  if (props.schema.url && !props.schema.parent) {
    const { url } = props.schema;
    selectOptions.value = await getOptions(url);
  }
});
</script>
