<template>
  <div class="px-5 w-full">
      <div class="flex mt-6 bg-[#F4F4F5] w-full h-10 items-center gap-2">
      <button
        v-for="tab in props.tabs"
        :key="tab.id"
        :class="[
          'flex-1 h-8 text-center m-1 duration-300 ease-in-out',
          currentTab === tab.id ? 'bg-white text-gray-900' : 'bg-transparent text-gray-600'
        ]"
        @click="selectTab(tab.id)"
      > {{  tab.label }} </button>
      </div>
    </div>
</template>
<script setup lang="ts">

const currentTab = ref<string>('login');

defineProps<{
  tabs: { id: string; label: string }[];
}>();
const emits = defineEmits(['tabSelected']);

function selectTab(tabId: string) {
  emits('tabSelected', tabId);
  currentTab.value = tabId;
}
</script>