import isString from '@/isString';

describe('isString', () => {
  it('test number', () => {
    expect(isString(3)).toEqual(false);
  });

  it('test ""', () => {
    expect(isString('')).toEqual(true);
  });

  it('test array', () => {
    expect(isString([])).toEqual(false);
  });
});
