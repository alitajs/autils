import isNumber from '../src/isNumber';

describe('test isNumber function', () => {
  it('test number', () => {
    expect(isNumber(3)).toEqual(true);
  });

  it('test MIN_VALUE', () => {
    expect(isNumber(Number.MIN_VALUE)).toEqual(true);
  });

  it('test Infinity', () => {
    expect(isNumber(Infinity)).toEqual(true);
  });

  it('test string', () => {
    expect(isNumber('3')).toEqual(false);
  });
});
