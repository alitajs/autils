import isEmptyObject from '@/is-empty-object';

describe('isEmptyObject', () => {
  it('should return `true` for empty object', function() {
    expect(isEmptyObject({})).toEqual(true);
  });

  it('should return `false` for non-arrays', function() {
    expect(isEmptyObject({ a : 1 })).toEqual(false);
  });
});
