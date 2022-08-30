import Mock from 'better-mock';
import qs from 'query-string';

export default function useTest() {
  Mock.mock(new RegExp('/api/list'), 'get', (options) => {
    // const queryString = new URL(options.url).searchParams;
    const { query } = qs.parseUrl(options.url);
    const { pageIndex = 1, pageSize = 10 } = query;
    return new Promise((resolve) => {
      const code = 200;
      const items = [];
      for (let i = 0; i < pageSize; i += 1) {
        items.push(
          Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            email: Mock.Random.email(),
            emailConfirmed: Mock.Random.boolean(),
            avatar: Mock.Random.dataImage(),
            birthday: Mock.Random.date(),
            rowVersion: Mock.Random.guid(),
          }),
        );
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
}
