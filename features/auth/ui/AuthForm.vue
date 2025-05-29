<template>
  <div class="flex flex-col items-center w-[448px] h-[614px] stroke-1 bg-white rounded-ms shadow-lg">
    <img src="../../../shared/asset/logo.png" alt="logo" class="bg-black h-10 mt-7" >
    <p class="font-bold text-2xl leading-8 tracking-[-0.6px] mt-6">환영합니다</p>
    <p class="font-normal text-[14px] leading-5 text-[#71717A] mt-[3.5px]">계정에 로그인하거나 새 계정을 만드세요</p>
    <div class="mx-6 w-full">
      <div class="flex mt-6 bg-[#F4F4F5] w-full h-10 items-center gap-2">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'flex-1 h-full text-center',
          currentTab === tab.id ? 'bg-white text-gray-900' : 'bg-transparent text-gray-600'
        ]"
        @click="currentTab = tab.id"
      > {{  tab.label }} </button>
      </div>
      <div>
        <div v-if="currentTab === 'login'">
          <!-- <LoginForm /> -->
        </div>

        <div v-else-if="currentTab === 'signup'">
          <!-- <SignupForm /> -->
        </div>
      </div>
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
</script>