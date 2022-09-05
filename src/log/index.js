import log from 'loglevel';

import { useAppStore } from '~/store';

function useLog() {
  const appStore = useAppStore();
  log.setLevel(appStore.loglevel);
  log.debug('set log level');
}
export default log;
export { useLog };
