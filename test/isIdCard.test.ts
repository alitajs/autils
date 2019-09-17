import isIdCard from '@/isIdCard';

describe('isIdCard', () => {
  it('test 142701199203224545', () => {
    expect(isIdCard('142701199203224545')).toEqual(true);
  });

  it('test 1427011903224545', () => {
    expect(isIdCard('1427011903224545')).toEqual(false);
  });

  it('test 14270119920322452X', () => {
    expect(isIdCard('14270119920322452X')).toEqual(true);
  });

  it('test 123', () => {
    expect(isIdCard('123')).toEqual(false);
  });
});
