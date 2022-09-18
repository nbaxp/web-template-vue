import Mock from 'better-mock';
import qs from 'query-string';

function createUser() {
  return Mock.mock({
    id: Mock.Random.guid(),
    userName: Mock.Random.first(),
    passwordHash: Mock.Random.string(),
    name: Mock.Random.cname(),
    email: Mock.Random.email(),
    emailConfirmed: Mock.Random.boolean(),
    avatar: Mock.Random.dataImage(),
    birthday: Mock.Random.date(),
    createdAt: Mock.Random.datetime(),
    modifiedAt: Mock.Random.datetime(),
    rowVersion: Mock.Random.guid(),
  });
}

const resource = 'user';
const prefix = `/api/${resource}`;
const listUrl = `${prefix}([^/]|$)`;
const idUrl = `${prefix}/(.+)`;

export default function useMock() {
  // get:/resource
  Mock.mock(new RegExp(listUrl), 'get', (options) => {
    // const queryString = new URL(options.url).searchParams;
    const { query } = qs.parseUrl(options.url);
    const { pageIndex = 1, pageSize = 10 } = query;
    return new Promise((resolve) => {
      const code = 200;
      const total = 250;
      const count = pageIndex * pageSize < total ? pageSize : pageIndex * pageSize - total;
      const items = [];
      for (let i = 0; i < count; i += 1) {
        items.push(createUser());
      }
      const data = {
        total: 250,
        pageIndex,
        pageSize,
        items,
      };
      resolve({
        code,
        data,
      });
    });
  });

  // get:/resource/{id}
  Mock.mock(new RegExp(idUrl), 'get', (request) => {
    const matches = request.url.match(idUrl);
    if (matches[1]) {
      return { code: 200, data: createUser(), _status: 200 };
    }
    return { code: 400, message: '参数不能为空', _status: 400 };
  });

  // post:/resource/{id}
  Mock.mock(new RegExp(idUrl), 'post', (request) => {
    const matches = request.url.match(idUrl);
    if (matches[1]) {
      return { code: 200, message: '已创建', _status: 201 };
    }
    return { code: 400, message: '参数不能为空', _status: 404 };
  });

  // put:/resource/{id}
  Mock.mock(new RegExp(idUrl), 'put', (request) => {
    const matches = request.url.match(idUrl);
    if (matches[1]) {
      const { name } = JSON.parse(request.body ?? '{}');
      if (name !== '管理员') {
        return { code: 200, message: '已更新', _status: 204 };
      }
    }
    const errors = {
      name: '服务端返回的验证消息',
    };
    return { code: 400, data: errors, _status: 400 };
  });

  // delete:/resource
  Mock.mock(new RegExp(listUrl), 'delete', (request) => {
    const items = JSON.parse(request.body ?? '[]');
    if (items.length) {
      return { code: 200, message: '删除成功', _status: 204 };
    }
    return { code: 400, message: '参数不能为空', _status: 400 };
  });
}
