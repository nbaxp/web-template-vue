import Mock from 'better-mock';

import useTest from './test';
import useUser from './user';

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

  useTest();
  useUser();
}
