export interface AuthState {
  loginData: {
    email: string;
    password: string;
  };

  signupData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export const useAuthStore = defineStore('auth', {
  state: (): { authState: AuthState } => ({
    authState: {
      loginData: { email: '', password: '' },
      signupData: { name: '', email: '', password: '', confirmPassword: '' },
    },
  }),

  getters: {
    getLoginData: (state) => state.authState.loginData,
    getSignupData: (state) => state.authState.signupData,
  },

  actions: {
    setLoginField(field: 'email' | 'password', value: string) {
      this.authState.loginData[field] = value;
    },

    setSignupField(
      field: 'name' | 'email' | 'password' | 'confirmPassword',
      value: string
    ) {
      this.authState.signupData[field] = value;
    },

    resetForms() {
      this.authState.loginData = { email: '', password: '' };
      this.authState.signupData = { name: '', email: '', password: '', confirmPassword: '' };
    },
  },
});