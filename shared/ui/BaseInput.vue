<template>
  <div class="flex flex-col w-full">
    <span class="text-[13px] font-medium pb-1.5">{{ name }}</span>
    <div class="relative w-full">
      <input 
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
        :placeholder="placeholder"
        class="w-full h-10 pl-5 pr-10 text-[14px] border font-medium border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <button
        v-if="type === 'password'"
        type="button"
        class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        @click="showPassword = !showPassword"
      >
        <EyeOff v-if="showPassword" class="h-4 w-4 text-muted-foreground" />
        <Eye v-else class="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string;
  type?: string;
  placeholder: string;
}>(), {
  type: 'text'
});

const showPassword = ref(false);
</script>