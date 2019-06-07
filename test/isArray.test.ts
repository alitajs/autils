import { isArray } from '../src/isArray';

describe('test isArray function', () => {
  it('test number', () => {
    expect(isArray(3)).toEqual(false);
  });

  it('test []', () => {
    expect(isArray([])).toEqual(true);
  });

  it('test [1, 2]', () => {
    expect(isArray([1, 2])).toEqual(true);
  });
});
