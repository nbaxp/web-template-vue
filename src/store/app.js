import { defineStore } from 'pinia';

import settings from '~/config/settings.json';

const debug = process.env.NODE_ENV !== 'production';
if (debug) {
  settings.loglevel = 'debug';
}

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
