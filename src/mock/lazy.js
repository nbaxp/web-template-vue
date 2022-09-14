import Mock from 'better-mock';
import qs from 'query-string';

export default function useMock() {
  Mock.mock('/api/lazy/select1', 'get', () => {
    const data = [
      { value: 'value1', label: 'label1' },
      { value: 'value2', label: 'label2' },
      { value: 'value3', label: 'label3' },
    ];
    return { code: 200, data, _status: 200 };
  });
  Mock.mock('/api/lazy/select2', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { parent = null } = query;
    const data = [
      { value: `${parent}-1`, label: `${parent}-1` },
      { value: `${parent}-2`, label: `${parent}-2` },
      { value: `${parent}-3`, label: `${parent}-3` },
    ];
    return { code: 200, data, _status: 200 };
  });
  Mock.mock('/api/lazy/select3', 'get', (request) => {
    const { query } = qs.parseUrl(request.url);
    const { parent = null } = query;
    const [, parent1, parent2] = parent.match(/value(\d+)-(\d+)/).map((o) => parseInt(o, 10));
    const data = [
      { value: `value${parent1}-${parent2}-1`, label: `label${parent1}-${parent2}-1` },
      { value: `value${parent1}-${parent2}-2`, label: `label${parent1}-${parent2}-2` },
      { value: `value$${parent1}-${parent2}-3`, label: `label${parent1}-${parent2}-3` },
    ];
    return { code: 200, data, _status: 200 };
  });
}
