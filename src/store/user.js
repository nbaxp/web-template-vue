import { defineStore } from 'pinia';

export default defineStore('user', {
  state: () => {
    return {
      token: null,
      name: '昵称',
      avatar: './logo.svg',
      roles: [],
    };
  },
  actions: {
    init() {
      console.log('user store init');
    },
    async login(token) {
      this.token = token;
    },
    logout() {
      this.token = null;
    },
    setUserInfo(data) {
      this.$patch(data);
    },
    isInRole(role) {
      return this.roles.includes(role);
    },
  },
});
