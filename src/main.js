import 'uno.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/es/components/message/style/css';
import './styles/index.css';

import App from './app.vue';
import useLocale from './locale';
import { useLog } from './log';
import useMock from './mock';
import router from './router';
import store, { useAppStore, useUserStore } from './store';

useMock();
const app = createApp(App);
app.use(store);
useLog();
useAppStore().init();
await useUserStore().init();
app.use(useLocale());
app.use(router);
app.mount('#app');
