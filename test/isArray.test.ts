import { isArray } from '@/isArray';

describe('isArray', () => {
  it('should return `true` for arrays', function() {
    expect(isArray([1, 2, 3])).toEqual(true);
  });

  it('should return `false` for non-arrays', function() {
    expect(isArray(true)).toEqual(false);
    expect(isArray(new Date)).toEqual(false);
    expect(isArray(new Error)).toEqual(false);
    expect(isArray({ '0': 1, 'length': 1 })).toEqual(false);
    expect(isArray(1)).toEqual(false);
    expect(isArray(/x/)).toEqual(false);
    expect(isArray('a')).toEqual(false);
  });
});
