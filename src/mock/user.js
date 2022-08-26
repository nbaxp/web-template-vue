import Mock from 'better-mock';
import * as jose from 'jose';

const { publicKey, privateKey } = await crypto.subtle.generateKey(
  {
    name: 'ECDSA',
    namedCurve: 'P-256',
  },
  true,
  ['sign', 'verify'],
);
const issuer = 'urn:example:issuer';
const audience = 'urn:example:audience';

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
      avatar: '/upload/avatar.svg',
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
            data.roles = ['admin'];
          }
          resolve({
            code,
            data,
          });
        });
    });
  });
}
