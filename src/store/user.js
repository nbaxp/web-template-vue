import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => {
    return {
      token: null,
      roles: [],
    };
  },
  actions: {
    init() {
      console.log('user store init');
    },
    isInRole(role) {
      return this.roles.includes(role);
    },
  },
});
