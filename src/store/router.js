import { defineStore } from 'pinia';

export default defineStore('router', {
  state: () => {
    return {
      isRefreshing: false,
      routes: [],
      excludes: [],
    };
  },
  actions: {
    init() {
      console.log('router store init');
    },
    add(route) {
      if (!this.routes.find((o) => o.fullPath === route.fullPath)) {
        this.routes.push(route);
      } else {
        const index = this.routes.findIndex((o) => o.fullPath === route.fullPath);
        this.routes[index] = route;
      }
    },
  },
});
