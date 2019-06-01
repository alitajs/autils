import isNull from '../src/isNull';

describe('test isNull function', () => {
  it('test number', () => {
    expect(isNull(0)).toEqual(false);
  });

  it('test undefined', () => {
    expect(isNull(undefined)).toEqual(false);
  });

  it('test null', () => {
    expect(isNull(null)).toEqual(true);
  });
});
