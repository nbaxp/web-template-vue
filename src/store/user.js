import { defineStore } from 'pinia';

import { useAppStore } from '~/store';
import request from '~/utils/request';

export default defineStore('user', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
      name: '昵称',
      avatar: './logo.svg',
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
      const response = await request.post('user/info');
      const data = response.data.data ?? response.data;
      this.$patch(data);
      if (this.roles.length) {
        this.currentRole = (this.roles.find((o) => o.isDefault) ?? this.roles[0]).value;
      }
    },
    getButtonPermissions() {
      const currentRoute = useRoute();
      const appStore = useAppStore();
      if (appStore.roleSwitchable) {
        return (
          this.roles
            .find((o) => o.value === this.currentRole)
            ?.permissions?.find((o) => o.value === currentRoute.meta?.permission)?.children ?? []
        );
      }
      return (
        this.roles
          .map((o) => o.permissions)
          .flat()
          .find((o) => o?.value === currentRoute.meta?.permission)?.children ?? []
      );
    },
    hasPermission(permission) {
      if (!permission) {
        return true;
      }
      const appStore = useAppStore();
      if (appStore.roleSwitchable) {
        return this.roles.find((o) => o.value === this.currentRole)?.permissions?.some((o) => o.value === permission);
      }
      return this.roles
        .map((o) => o.permissions)
        .flat()
        .some((o) => o?.value === permission);
    },
  },
});
