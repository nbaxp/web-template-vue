import Enumerable from 'linq';
import { defineStore } from 'pinia';

import { useAppStore } from '~/store';

export default defineStore('user', {
  state: () => {
    return {
      token: null,
      name: '昵称',
      avatar: './logo.svg',
      roles: [],
      currentRole: null,
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
      if (this.roles.length) {
        this.currentRole = (
          Enumerable.from(this.roles).firstOrDefault((o) => o.isDefault) ??
          Enumerable.from(this.roles)
            .orderBy((o) => o.value)
            .first()
        ).value;
      }
    },
    getPermissions() {
      const appStore = useAppStore();
      if (appStore.roleSwitchable) {
        return this.roles.find((o) => o.value === this.currentRole)?.permissions ?? [];
      }
      return this.roles
        .map((o) => o.permissions)
        .filter((o) => o)
        .flat();
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
