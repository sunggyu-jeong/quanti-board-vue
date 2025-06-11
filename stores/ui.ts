export const useUiStore = defineStore('ui', {
  state: () => ({
    currentTab: 'login' as string,
    tabs: [
      { id: 'login', label: '로그인' },
      { id: 'signup', label: '회원가입' },
    ],
  }),
  getters: {
    currentTab: (state) => state.currentTab,
    tabs: (state) => state.tabs,
  },
  actions: {
    setCurrent(tabId: string) {
      this.currentTab = tabId;
    },
  },
});