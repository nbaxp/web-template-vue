import { defineStore } from 'pinia';

import settings from '~/config/settings.json';

export default defineStore('app', {
  state: () => {
    return {
      ...settings,
    };
  },
  actions: {
    init() {
      console.log('app store init');
    },
  },
});
