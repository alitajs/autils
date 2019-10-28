import { isSymbol } from '@/index';

describe('isSymbol', () => {
  it('test number', () => {
    expect(isSymbol(3)).toEqual(false);
  });

  it('test string', () => {
    expect(isSymbol('')).toEqual(false);
  });

  it('test array', () => {
    expect(isSymbol([])).toEqual(false);
  });

  it('test Symbol', () => {
    expect(isSymbol(Symbol.iterator)).toEqual(true);
  });

  it('test object', () => {
    expect(isSymbol({})).toEqual(false);
  });
});
