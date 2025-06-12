<template>
  <div class="flex flex-col items-center w-[448px] stroke-1 bg-white rounded-ms shadow-lg">
    <img src="../../../shared/asset/logo.png" class="h-6 mt-7" >
    <h1 class="font-bold text-2xl leading-8 tracking-[-0.6px] mt-6">환영합니다</h1>
    <p class="font-normal text-[14px] leading-5 text-[#71717A] mt-[3.5px]">계정에 로그인하거나 새 계정을 만드세요</p>
    <Tabs :tabs="tabs" @tab-selected="onTabSelected" />
    <div class="w-full px-5 mt-6">
      <LoginForm v-if="currentTab === 'login'" />
      <SignupForm v-else />
    </div>
  </div>
</template>

<script setup lang="ts">

type Tab = { id: string; label: string };

const tabs = ref<Tab[]>([
  { id: 'login', label: '로그인' },
  { id: 'signup', label: '회원가입' }
])
const currentTab = ref<string>(tabs.value[0].id);

function onTabSelected(tabId: string) {
  currentTab.value = tabId;
}
</script>