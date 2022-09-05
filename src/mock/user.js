import Mock from 'better-mock';
import * as jose from 'jose';
import qs from 'query-string';

// const { publicKey, privateKey } = await crypto.subtle.generateKey(
//   {
//     name: 'ECDSA',
//     namedCurve: 'P-256',
//   },
//   true,
//   ['sign', 'verify'],
// );
// const publicJsonWebKey = await window.crypto.subtle.exportKey('jwk', publicKey);
// const privateJsonWebKey = await window.crypto.subtle.exportKey('jwk', privateKey);

const publicJsonWebKey = {
  crv: 'P-256',
  ext: true,
  key_ops: ['verify'],
  kty: 'EC',
  x: '-JaTLMzlNj6a4DFNHbeXfEOimiqmB1SV-lVyW6CZ0Cs',
  y: 'H8FwD_z3eLs5X3l0_JZnuIgSFf1kNbWNAa1yuDfcvJ8',
};

const privateJsonWebKey = {
  crv: 'P-256',
  d: 'E40lOv52Czs0F3Y1TUPWVtZe2nWKuLOM2Igd86mpQSg',
  ext: true,
  key_ops: ['sign'],
  kty: 'EC',
  x: '-JaTLMzlNj6a4DFNHbeXfEOimiqmB1SV-lVyW6CZ0Cs',
  y: 'H8FwD_z3eLs5X3l0_JZnuIgSFf1kNbWNAa1yuDfcvJ8',
};

const publicKey = await window.crypto.subtle.importKey(
  'jwk',
  publicJsonWebKey,
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  true,
  ['verify'],
);
const privateKey = await window.crypto.subtle.importKey(
  'jwk',
  privateJsonWebKey,
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  true,
  ['sign'],
);

const issuer = 'urn:example:issuer';
const audience = 'urn:example:audience';

function createUser() {
  return Mock.mock({
    id: Mock.Random.guid(),
    userName: Mock.Random.first(),
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

const roles = [
  {
    name: '用户',
    value: 'user',
  },
  {
    name: '管理员',
    value: 'admin',
    isDefault: true,
    permissions: [
      {
        name: '用户管理',
        value: '/admin/user',
        type: 'page',
        method: 'get',
        children: [
          {
            name: '新建',
            value: 'create',
            type: 'button',
            method: 'post',
            rows: 0,
          },
          {
            name: '查看',
            value: 'detail',
            type: 'button',
            method: 'get',
            rows: 1,
          },
          {
            name: '编辑',
            value: 'update',
            type: 'button',
            method: 'put',
            rows: 1,
          },
          {
            name: '删除',
            value: 'delete',
            type: 'button',
            method: 'delete',
            rows: 2,
          },
        ],
      },
      {
        name: '角色管理',
        value: '/admin/role',
        type: 'page',
      },
      {
        name: '权限管理',
        value: '/admin/permission',
        type: 'page',
      },
    ],
  },
];

export default function useMock() {
  // /api/user/login
  Mock.mock('/api/user/login', 'POST', (request) => {
    const { userName, password } = JSON.parse(request.body ?? '{}');
    if (!userName) {
      return { code: 400, message: '用户名不能为空' };
    }
    if (!password) {
      return { code: 400, message: '密码不能为空' };
    }
    if (userName === 'admin' && password === '123456') {
      const claims = { user: userName };
      return new Promise((resolve) => {
        new jose.SignJWT(claims)
          .setProtectedHeader({ alg: 'ES256' })
          .setIssuedAt()
          .setIssuer(issuer)
          .setAudience(audience)
          .setExpirationTime('2h')
          .sign(privateKey)
          .then((jwt) => {
            jose.jwtVerify(jwt, publicKey, { issuer, audience }).then((json) => {
              const code = 200;
              const data = { token: jwt, payload: json.payload };
              resolve({
                code,
                data,
              });
            });
          });
      });
    }
    return { code: 400, message: '用户名或密码错误' };
  });

  // /api/user/info
  Mock.mock('/api/user/info', 'POST', (request) => {
    const [, token] = request.headers.Authorization.split(' ');
    console.log(token);
    const code = 200;
    const data = {
      name: '管理员',
      avatar: './upload/avatar.svg',
    };
    return new Promise((resolve) => {
      jose
        .jwtVerify(token, publicKey, {
          issuer,
          audience,
        })
        .then((result) => {
          const { payload } = result;
          if (payload.user === 'admin') {
            data.roles = roles;
          }
          resolve({
            code,
            data,
          });
        });
    });
  });

  // get:/api/user
  Mock.mock(new RegExp('/api/user([^/]|$)'), 'get', (options) => {
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

  // get:/api/user/{id}
  const pattern = new RegExp('/api/user/(.+)');
  Mock.mock(pattern, 'get', (request) => {
    const matches = request.url.match(pattern);
    if (matches[1]) {
      return { code: 200, data: createUser(), _status: 200 };
    }
    return { code: 400, message: '参数不能为空', _status: 400 };
  });

  // delete:/api/user
  Mock.mock(new RegExp('/api/user'), 'delete', (request) => {
    const items = JSON.parse(request.body ?? '[]');
    if (items.length) {
      return { code: 200, message: '删除成功', _status: 204 };
    }
    return { code: 400, message: '参数不能为空', _status: 400 };
  });
}
