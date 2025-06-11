<template>
  <div class="flex flex-col space-y-3 mb-6">
    <base-input name="이메일" placeholder="your@email.com" />
    <base-input name="비밀번호" type="password" placeholder="패스워드를 입력해주세요." />
    <div class="flex flex-row justify-between mt-3">
      <base-check label="로그인 상태 유지" />
      <button>
        <span class="text-blue-600 text-[12px] font-medium">비밀번호 찾기</span>
      </button>
    </div>
    <base-button :buttons="buttons" @click="$emit('login')" />
  </div>
</template>

<script setup lang="ts">
import type { ButtonItem } from '@/shared/ui/BaseButton.vue'

const buttons: ButtonItem[] = [
  {
    label: '로그인',
    colorClasses: 'bg-black text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
  },
    {
    label: '구글로 로그인 하기',
    colorClasses: 'bg-white text-black hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
  }
];


</script>