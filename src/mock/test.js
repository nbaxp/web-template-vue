import Mock from 'better-mock';

export default function useTest() {
  Mock.mock('/api/test', 'get', () => {
    return new Promise((resolve) => {
      resolve({ value: 'test' });
    });
  });
}
