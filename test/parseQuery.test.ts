import { parseQuery } from '@/parseQuery';
import { stringify, parse } from 'qs';

const parameters = {
  page: 1,
  size: 10,
  status: [0, 1],
  data: {
    a: 1,
    b: 2
  }
};
const query = stringify(parameters);

describe('parseQuery', () => {
  it('should return `true` for arrays', function() {
    // expect(parseQuery(query)).toEqual(parse(query));
  });
});
