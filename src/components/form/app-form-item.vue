<template>
  <template
    v-for="(value, key) in schema.properties"
    :key="key"
  >
    <template v-if="!value.skip">
      <template v-if="value.type === 'object'">
        <el-form-item
          :label="value.title"
          :rules="value.rules"
        >
          <app-form-item
            v-model="model[key]"
            :schema="schema.properties[key]"
            :prefix="key"
            :validate="validate"
            :mode="mode"
          />
        </el-form-item>
      </template>
      <template v-else-if="value.type === 'array' && value.items.type === 'object'">
        <el-form-item
          :label="value.title"
          :rules="value.rules"
        >
          <el-icon
            v-if="!model[key].length"
            class="cursor-pointer mx-2"
            @click="addItem(model[key], value.items.properties)"
          >
            <i-ep-plus />
          </el-icon>
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
            />
            <el-icon
              class="cursor-pointer mx-2"
              @click="addItem(model[key], value.items.properties)"
            >
              <i-ep-plus />
            </el-icon>
            <el-icon
              class="cursor-pointer mx-2"
              @click="removeItem(model[key], index)"
            >
              <i-ep-minus />
            </el-icon>
          </el-form-item>
        </template>
      </template>
      <template v-else>
        <el-form-item
          v-if="showItem(key, value)"
          :prop="prefix ? prefix + '.' + key : key"
          :label="value.title"
          :rules="validate ? value.rules : null"
          :title="key + ':' + JSON.stringify(model[key])"
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
    default: true,
  },
  mode: {
    type: String,
    default: 'query',
  },
});
const model = reactive(props.modelValue);
const schema = reactive(props.schema);
const emit = defineEmits(['update:modelValue', 'update:schema']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
watch(schema, (value) => {
  emit('update:schema', value);
});
//
const showItem = (propertyName, propertySchema) => {
  if (propertyName === 'id') {
    return false;
  }
  if (propertySchema.input === 'hidden') {
    return false;
  }
  if (propertySchema.hideForEdit && (props.mode === 'create' || props.mode === 'update')) {
    return false;
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
