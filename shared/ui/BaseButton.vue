<template>
  <div class="flex flex-col w-full space-y-2">
    <template v-for="(btn, idx) in buttons" :key="idx">
      <button
        :type="type"
        :class="[
          'w-full h-10 font-medium rounded-md transition duration-200 border border-gray-300',
          btn.colorClasses
        ]"
        @click="$emit('click', idx)"
      >
        {{ btn.label }}
      </button>
      <div
        v-if="idx < buttons.length - 1"
        class="flex items-center w-full my-2"
      >
        <div class="flex-1 border-t border-gray-200"/>
        <span class="px-2 text-gray-500 text-[13px]">또는</span>
        <div class="flex-1 border-t border-gray-200"/>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
export interface ButtonItem {
  label: string;
  colorClasses: string;
}

withDefaults(defineProps<{
  buttons: ButtonItem[];
  type?: 'button' | 'reset' | 'submit';
}>(), {
  type: 'button'
});
</script>