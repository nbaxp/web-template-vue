import Mock from 'better-mock';

import useList from './list';
import useUser from './user';
import useWebSocket from './web-socket';

export default function useMock() {
  // const debug = process.env.NODE_ENV !== 'production';
  // if (!debug) {
  //   return;
  // }

  // if (import.meta.env.MODE !== 'mock') {
  //   // npm run dev:mock
  //   return;
  // }

  Mock.setup({
    timeout: '200-600',
  });

  useUser();
  useList();
  useWebSocket();
}
