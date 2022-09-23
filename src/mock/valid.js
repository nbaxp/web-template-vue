import Mock from 'better-mock';
import qs from 'query-string';

export default function useMock() {
  Mock.mock('/api/valid/test1', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { remote1 = null } = query;
    if (remote1 !== 'false') {
      return { code: 200, data: true, _status: 200 };
    }
    return { code: 200, data: false, _status: 400 };
  });
  Mock.mock('/api/valid/test2', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { remote2 = null } = query;
    if (remote2 !== 'false') {
      return { code: 200, data: true, _status: 200 };
    }
    return { code: 200, data: false, message: '服务端返回验证失败', _status: 400 };
  });
  Mock.mock('/api/valid/test3', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { remote3 = null } = query;
    if (remote3 !== 'false') {
      return { code: 200, data: true, _status: 200 };
    }
    return { code: 400, data: false, _status: 200 };
  });
  Mock.mock('/api/valid/test4', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { remote4 = null } = query;
    if (remote4 !== 'false') {
      return { code: 200, data: true, _status: 200 };
    }
    return { code: 400, data: false, message: '服务端返回验证失败', _status: 200 };
  });
}
