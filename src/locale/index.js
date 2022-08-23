import { createI18n } from 'vue-i18n';

import { useAppStore } from '~/store';

import en from './en-US';
import zh from './zh-CN.js';

export default function () {
  const appStore = useAppStore();
  const config = {
    locale: appStore.locale,
    fallbackLocale: 'zh',
    allowComposition: true,
    messages: {
      en,
      zh,
    },
  };
  // config.messages[appStore.locale.current] = appStore.locale.resources;
  return createI18n(config);
}
