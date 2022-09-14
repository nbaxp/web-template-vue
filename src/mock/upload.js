import Mock from 'better-mock';

export default function useMock() {
  // Mock.mock(new RegExp('/api/file/upload'), 'get', (request) => {
  //   const id = request.url.match(new RegExp('/api/upload/(.+)'))[1];
  //   return { code: 200, data: Mock.Random.dataImage(`${id * 100}x${id * 100}`), _status: 200 };
  // });
  Mock.mock('/api/upload', 'post', (request) => {
    console.log(request);
    return { code: 200, data: `/upload/avatar.svg`, _status: 200 };
  });
}
