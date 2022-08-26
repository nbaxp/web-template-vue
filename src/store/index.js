import { createPinia } from 'pinia';

import useAppStore from './app.js';
import useRouterStore from './router.js';
import useUserStore from './user.js';

const pinia = createPinia();

export { useAppStore, useRouterStore, useUserStore };
export default pinia;
