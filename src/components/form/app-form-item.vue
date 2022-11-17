<template>
  <template
    v-for="(value, key) in schema.properties"
    :key="key"
  >
    <template v-if="!value.skip">
      <template v-if="value.type === 'object'">
        <el-form-item
          :label="getLabel(value)"
          :label-width="getLabelWidth(value)"
          class="object"
        >
          <app-form-item
            v-model="model[key]"
            :schema="schema.properties[key]"
            :validate="validate"
            :mode="mode"
            :prefix="key"
            :errors="errors"
          />
        </el-form-item>
      </template>
      <template v-else-if="value.type === 'array' && value.items?.type === 'object'">
        <el-form-item
          :label="getLabel(value)"
          :label-width="getLabelWidth(value)"
        >
          <el-button
            v-if="!model[key].length"
            style="padding: 8px"
            @click="addItem(model[key], value.items.properties)"
          >
            <el-icon>
              <i-ep-plus />
            </el-icon>
          </el-button>
        </el-form-item>
        <template
          v-for="(item, index) in model[key]"
          :key="item"
        >
          <el-form-item>
            <app-form-item
              v-model="model[key][index]"
              :schema="schema.properties[key].items"
              :prefix="key + '[' + index + ']'"
              :validate="validate"
              :errors="errors"
            />
            <el-button
              style="margin-left: 8px; padding: 8px"
              @click="addItem(model[key], value.items.properties)"
            >
              <el-icon>
                <i-ep-plus />
              </el-icon>
            </el-button>
            <el-button
              style="margin-left: 8px; padding: 8px"
              @click="removeItem(model[key], index)"
            >
              <el-icon>
                <i-ep-minus />
              </el-icon>
            </el-button>
          </el-form-item>
        </template>
      </template>
      <template v-else>
        <el-form-item
          v-if="showItem(key, value)"
          :prop="getProp(key)"
          :label="getLabel(value)"
          :label-width="getLabelWidth(value)"
          :rules="validate ? getRules(value) : []"
          :error="errors[getProp(key)]"
          :title="key + ':' + getProp(key) + ':' + JSON.stringify(model[key])"
          :style="itemStyle"
        >
          <app-form-input
            :prop="key"
            :model="model"
            :schema="value"
            :mode="mode"
          />
        </el-form-item>
      </template>
    </template>
  </template>
</template>
<script setup>
import { schemaToModel } from '~/utils';
import { createRules } from '~/validation';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  schema: {
    type: Object,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
  validate: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Object,
    default: null,
  },
  mode: {
    type: String,
    default: 'create',
  },
});
const model = reactive(props.modelValue);
const schema = reactive(props.schema);
const emit = defineEmits(['update:modelValue', 'update:schema']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
// watch(schema, (value) => {
//   emit('update:schema', value);
// });
const itemStyle = {
  width: props.mode === 'query' ? '30%' : null,
};
const getProp = (key) => {
  return props.prefix ? `${props.prefix}.${key}` : key;
};
const getLabel = (value) => {
  return value.title;
};
const getLabelWidth = (value) => {
  return value.labelWidth ?? props.mode === 'query' ? '120px' : 'auto';
};

const getRules = (property) => {
  return createRules(props.schema, property, model);
};

const showItem = (propertyName, propertySchema) => {
  if (propertyName === 'id') {
    return false;
  }
  if (propertySchema.input === 'hidden') {
    return false;
  }
  if (props.mode === 'query') {
    if (propertySchema.hideForQuery) {
      return false;
    }
    if (
      propertySchema.input === 'hidden' ||
      propertySchema.input === 'transfer' ||
      propertySchema.input === 'file' ||
      propertySchema.input === 'image' ||
      propertySchema.input === 'editor'
    ) {
      return false;
    }
  }
  if (props.mode === 'create' || props.mode === 'update') {
    if (propertySchema.hideForEdit) {
      return false;
    }
  }
  return true;
};

const addItem = (items, properties) => {
  if (items.length) {
    items.push(JSON.parse(JSON.stringify(items[items.length - 1])));
  } else {
    items.push(schemaToModel(properties));
  }
};

const removeItem = (items, index) => {
  items.splice(index, 1);
};
</script>
