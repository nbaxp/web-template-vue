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
        this.currentRole = this.roles.find((o) => o.isDefault || !o.isDefault).value;
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
