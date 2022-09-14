import Mock from 'better-mock';
import qs from 'query-string';

function createItem() {
  return Mock.mock({
    id: Mock.Random.guid(),
    createdAt: Mock.Random.datetime(),
    modifiedAt: Mock.Random.datetime(),
    rowVersion: Mock.Random.guid(),
    color: Mock.Random.color(),
    colorRgba: Mock.Random.rgba(),
    input: Mock.Random.string(),
    number: Mock.Random.integer(1, 255),
    numberSlider: Mock.Random.integer(1, 10),
    numberRate: Mock.Random.integer(1, 5),
    boolean: Mock.Random.boolean(),
    booleanSwitch: Mock.Random.boolean(),
    radioGroup: 'value2',
    checkBoxGroup: ['value2', 'value3'],
    transfer: ['value2', 'value3'],
    select: 'value2',
    selectMultiple: ['value2', 'value3'],
    selectLazy1: 'value2',
    selectLazy2: 'value2-2',
    selectLazy3: 'value2-2-2',
    cascader: 'value1.1',
    cascaderMultiple: ['value2', 'value1.1'],
    date: new Date(),
    datetime: new Date(),
    start: new Date(),
    end: new Date(),
    startDatetime: new Date(),
    endDatetime: new Date(),
    file: '/upload/avatar.svg',
    fileMultiple: ['/upload/avatar.svg', '/upload/avatar.svg'],
    image: '/upload/avatar.svg',
    imageMultiple: ['/upload/avatar.svg', '/upload/avatar.svg'],
  });
}

const resource = 'list';
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
        items.push(createItem());
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
      return { code: 200, data: createItem(), _status: 200 };
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
