<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      class="form-checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    >
    <span class="ml-2 font-medium text-[12px]">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  modelValue?: boolean;
  label: string;
}>(), {
  modelValue: false
});
;
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>
