import { arrayToObject } from '@/arrayToObject';

describe('arrayToObject', () => {
  it('test success', () => {
    expect(arrayToObject([0, 1, 2])).toEqual({
      0: 0,
      1: 1,
      2: 2
    });
  });

  it('test success', () => {
    expect(arrayToObject([{a: 1}, true])).toEqual({
      0: {a: 1},
      1: true
    });
  });
});
