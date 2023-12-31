// src/store/dataStore.ts
import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: null,
  }),
  actions: {
    setData(value: any) {
      this.data = value;
    },
  },
});
