import { isBoolean } from '@/index';

describe('isBoolean', () => {
  it('should return `true` for arrays', function() {
    expect(isBoolean(true)).toEqual(true);
    expect(isBoolean(false)).toEqual(true);
  });

  it('should return `false` for non-arrays', function() {
    expect(isBoolean(new Date)).toEqual(false);
    expect(isBoolean(new Error)).toEqual(false);
    expect(isBoolean({ '0': 1, 'length': 1 })).toEqual(false);
    expect(isBoolean(1)).toEqual(false);
    expect(isBoolean(/x/)).toEqual(false);
    expect(isBoolean('a')).toEqual(false);
  });
});
