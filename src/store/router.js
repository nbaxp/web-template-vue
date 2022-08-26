import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export default defineStore('router', {
  state: () => {
    return {
      routes: [],
    };
  },
  actions: {
    init() {
      console.log('router store init');
    },
    add(route) {
      if (!this.routes.find((o) => o.fullPath === route.fullPath)) {
        this.routes.push(route);
      }
    },
    delete(fullPath) {
      if (this.routes.length > 1) {
        this.routes.splice(
          this.routes.findIndex((o) => o.fullPath === fullPath),
          1,
        );
        // if (useRoute().fullPath === fullPath) {
        //   useRouter().push(this.routes.l);
        // }
      }
    },
  },
});
