import isNull from '@/isNull';

describe('isNull', () => {
  it('should return `true` for `null` values', function() {
    expect(isNull(null)).toEqual(true);
  });

  it('should return `false` for non `null` values', function() {
    expect(isNull([1, 2, 3])).toEqual(false);
    expect(isNull(true)).toEqual(false);
    expect(isNull(new Date)).toEqual(false);
    expect(isNull(new Error)).toEqual(false);
    expect(isNull({ a: 1 })).toEqual(false);
    expect(isNull(1)).toEqual(false);
    expect(isNull(/x/)).toEqual(false);
    expect(isNull('a')).toEqual(false);
  });
});
