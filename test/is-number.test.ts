import isNumber from '@/is-number';

describe('isNumber', () => {
  it('should return `true` for numbers', function() {
    expect(isNumber(0)).toEqual(true);
  });

  it('should return `false` for non-numbers', function() {
    expect(isNumber([1, 2, 3])).toEqual(false);
    expect(isNumber(true)).toEqual(false);
    expect(isNumber(new Date)).toEqual(false);
    expect(isNumber(new Error)).toEqual(false);
    expect(isNumber({ a: 1 })).toEqual(false);
    expect(isNumber(/x/)).toEqual(false);
    expect(isNumber('a')).toEqual(false);
  });
});
