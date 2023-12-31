// src/store/authStore.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    setAuthentication(value: boolean) {
      this.isAuthenticated = value;
    },
  },
});
