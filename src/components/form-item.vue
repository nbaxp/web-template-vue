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
          <form-item
            v-model="model[key]"
            :schema="schema.properties[key]"
            :prefix="key"
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
            <form-item
              v-model="model[key][index]"
              :schema="schema.properties[key].items"
              :prefix="key + '[' + index + ']'"
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
              ><i-ep-minus
            /></el-icon>
          </el-form-item>
        </template>
      </template>
      <template v-else>
        <el-form-item
          :prop="prefix ? prefix + '.' + key : key"
          :label="value.title"
          :rules="value.rules"
          :title="key"
        >
          <el-input
            v-model="model[key]"
            :type="value.inputType ?? 'text'"
            :placeholder="value.placeholder ?? value.title ?? key"
            :disabled="value.disabled"
            :show-password="value.showPassword"
          >
            <template
              v-if="value.prefix"
              #prefix
            >
              <svg-icon
                class="el-input__icon"
                :name="value.prefix"
              />
            </template>
            <template
              v-if="value.suffix"
              #suffix
            >
              <svg-icon
                class="el-input__icon"
                :name="value.suffix"
              />
            </template>
          </el-input>
        </el-form-item>
      </template>
    </template>
  </template>
</template>
<script setup>
import SvgIcon from '~/components/svg-icon.vue';
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
});
const model = reactive(props.modelValue);
const schema = reactive(props.schema);
const emit = defineEmits(['update:modelValue', 'update:schema', 'callback']);
watch(model, (value) => {
  emit('update:modelValue', value);
});
watch(schema, (value) => {
  emit('update:schema', value);
});
//
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
