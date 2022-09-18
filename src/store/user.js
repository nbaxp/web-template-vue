import { defineStore } from 'pinia';

import request from '~/request';
import router from '~/router';
import { useAppStore } from '~/store';

export default defineStore('user', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
      name: '昵称',
      avatar: '/web-template-vue/logo.svg',
      roles: [],
      currentRole: null,
    };
  },
  actions: {
    async init() {
      console.log('user store init');
      if (this.token) {
        await this.setUserInfo();
      }
    },
    async login(token) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      this.token = null;
      localStorage.removeItem('token');
    },
    async setUserInfo() {
      try {
        const response = await request.post('user/info');
        const data = response.data.data ?? response.data;
        this.$patch(data);
        if (this.roles.length) {
          this.currentRole = (this.roles.find((o) => o.isDefault) ?? this.roles[0]).number;
        }
      } catch (error) {
        console.log(error);
        this.logout();
        router.push({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } });
      }
    },
    getButtonPermissions() {
      const appStore = useAppStore();
      if (appStore.roleSwitchable) {
        return (
          this.roles
            .find((o) => o.number === this.currentRole)
            ?.permissions?.find((o) => o.number === router.currentRoute.value.meta?.permission)?.children ?? []
        );
      }
      return (
        this.roles
          .map((o) => o.permissions)
          .flat()
          .find((o) => o?.number === router.currentRoute.value.meta?.permission)?.children ?? []
      );
    },
    hasPermission(permission) {
      if (!permission) {
        return true;
      }
      const appStore = useAppStore();
      if (appStore.roleSwitchable) {
        return this.roles.find((o) => o.number === this.currentRole)?.permissions?.some((o) => o.number === permission);
      }
      return this.roles
        .map((o) => o.permissions)
        .flat()
        .some((o) => o?.number === permission);
    },
  },
});
