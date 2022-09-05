<template>
  <template v-if="type === 'image'">
    <template v-if="disabled">
      <el-image
        :src="model[prop]"
        style="height: 20px"
        :preview-src-list="[model[prop]]"
        preview-teleported
      />
    </template>
    <template v-else>
      <el-input v-model="model[prop]" />
    </template>
  </template>
  <template v-else-if="type === 'boolean'">
    <el-switch
      v-model="model[prop]"
      :disabled="disabled"
    />
  </template>
  <template v-else>
    <template v-if="disabled">{{ model[prop] }}</template>
    <template v-else>
      <el-input v-model="model[prop]">
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
import SvgIcon from '~/components/svg-icon.vue';

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
});
const model = reactive(props.model);
const type = props.schema.input ?? props.schema.type;
const emit = defineEmits(['update:model']);
watch(model, (value) => {
  emit('update:model', value);
});
//
</script>
