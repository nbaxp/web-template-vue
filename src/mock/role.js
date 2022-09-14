import Mock from 'better-mock';
import qs from 'query-string';

import { cloneDeep } from '~/utils';

const list = [
  {
    id: 1,
    name: '超级管理员',
    number: 'super',
    isReadonly: true,
    permissions: [],
  },
  {
    id: 2,
    name: '管理员',
    number: 'admin',
    isReadonly: false,
    children: [],
  },
  {
    id: 3,
    name: '用户',
    number: 'user',
    isReadonly: false,
    children: [],
  },
];

function createItem() {
  return Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    number: Mock.Random.string(),
    isReadonly: Mock.Random.boolean(),
    createdAt: Mock.Random.datetime(),
    modifiedAt: Mock.Random.datetime(),
    rowVersion: Mock.Random.guid(),
  });
}

const resource = 'role';
const prefix = `/api/${resource}`;
const listUrl = `${prefix}([^/]|$)`;
const idUrl = `${prefix}/(.+)`;

export default function useMock() {
  // get:/resource
  Mock.mock(new RegExp(listUrl), 'get', (options) => {
    const { query } = qs.parseUrl(options.url);
    const { parentId = null, name = null, number = null } = query;
    return new Promise((resolve) => {
      const code = 200;
      let items = cloneDeep(list);
      if (parentId) {
        items = items.find((o) => o.id === parseInt(parentId, 10))?.children ?? [];
      } else {
        if (name) {
          items = items.filter((o) => o.name.includes(name));
        }
        if (number) {
          items = items.filter((o) => o.number.includes(number));
        }
      }
      items = cloneDeep(items).map((o) => {
        o.readOnly = true;
        o.hasChildren = o.children && o.children.length;
        return o;
      });
      const total = items.length;
      const data = {
        total,
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
      return { code: 200, data: createItem(), _status: 200 };
    }
    return { code: 400, message: '参数不能为空', _status: 400 };
  });

  // post:/resource
  Mock.mock(new RegExp(listUrl), 'post', (request) => {
    const matches = request.url.match(idUrl);
    if (matches[1]) {
      return { code: 200, message: '已创建', _status: 201 };
    }
    return { code: 400, message: '参数不能为空', _status: 404 };
  });

  // put:/resource/{id}
  Mock.mock(new RegExp(listUrl), 'put', (request) => {
    const matches = request.url.match(idUrl);
    if (matches[1]) {
      return { code: 200, message: '已更新', _status: 204 };
    }
    return { code: 400, message: '参数不能为空', _status: 404 };
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
