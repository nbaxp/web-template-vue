import Mock from 'better-mock';

import useAccount from './auth';
import useLazy from './lazy';
import useList from './list';
import usePermission from './permission';
import useRole from './role';
import useUpload from './upload';
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

  useLazy();
  useUpload();
  useAccount();
  usePermission();
  useRole();
  useUser();
  useList();
  useWebSocket();
}
