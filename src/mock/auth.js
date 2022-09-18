import Mock from 'better-mock';
import * as jose from 'jose';

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

const roles = [
  {
    name: '用户',
    number: 'user',
  },
  {
    name: '管理员',
    number: 'admin',
    isDefault: true,
    permissions: [
      {
        name: '列表页',
        number: 'list-list',
        type: 'page',
        command: 'list',
        method: 'get',
        children: [
          {
            name: '新建',
            number: 'create-list',
            type: 'button',
            method: 'post',
            command: 'create',
            rows: 0,
          },
          {
            name: '查看',
            number: 'detail-list',
            type: 'button',
            method: 'get',
            command: 'detail',
            rows: 1,
          },
          {
            name: '编辑',
            number: 'update-list',
            type: 'button',
            method: 'put',
            command: 'update',
            rows: 1,
          },
          {
            name: '删除',
            number: 'delete-list',
            type: 'button',
            method: 'delete',
            command: 'delete',
            rows: 2,
          },
        ],
      },
      {
        name: '用户管理',
        number: 'list-user',
        type: 'page',
        command: 'list',
        method: 'get',
        children: [
          {
            name: '新建',
            number: 'create-user',
            type: 'button',
            method: 'post',
            command: 'create',
            rows: 0,
          },
          {
            name: '查看',
            number: 'detail-user',
            type: 'button',
            method: 'get',
            command: 'detail',
            rows: 1,
          },
          {
            name: '编辑',
            number: 'update-user',
            type: 'button',
            method: 'put',
            command: 'update',
            rows: 1,
          },
          {
            name: '删除',
            number: 'delete-user',
            type: 'button',
            method: 'delete',
            command: 'delete',
            rows: 2,
          },
        ],
      },
      {
        name: '角色管理',
        number: 'list-role',
        type: 'page',
        children: [
          {
            name: '新建',
            number: 'create-role',
            type: 'button',
            method: 'post',
            command: 'create',
            rows: 0,
          },
          {
            name: '查看',
            number: 'detail-role',
            type: 'button',
            method: 'get',
            command: 'detail',
            rows: 1,
          },
          {
            name: '编辑',
            number: 'update-role',
            type: 'button',
            method: 'put',
            command: 'update',
            rows: 1,
          },
          {
            name: '删除',
            number: 'delete-role',
            type: 'button',
            method: 'delete',
            command: 'delete',
            rows: 2,
          },
        ],
      },
      {
        name: '权限管理',
        number: 'list-permission',
        type: 'page',
        command: 'list',
        children: [
          // {
          //   name: '新建',
          //   number: 'create-permission',
          //   type: 'button',
          //   method: 'post',
          //   command: 'create',
          //   rows: 0,
          // },
          {
            name: '查看',
            number: 'detail-permission',
            type: 'button',
            method: 'get',
            command: 'detail',
            rows: 1,
          },
          // {
          //   name: '编辑',
          //   number: 'update-permission',
          //   type: 'button',
          //   method: 'put',
          //   command: 'update',
          //   rows: 1,
          // },
          // {
          //   name: '删除',
          //   number: 'delete-permission',
          //   type: 'button',
          //   method: 'delete',
          //   command: 'delete',
          //   rows: 2,
          // },
        ],
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
      avatar: '/web-template-vue/upload/avatar.svg',
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
        })
        .catch((error) => {
          resolve({
            code: 401,
            message: error,
            _satus: 401,
          });
        });
    });
  });
}
