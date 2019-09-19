import numberToChinese from '@/number-to-chinese';

describe('numberToChinese', () => {
  it('test 0', () => {
    expect(numberToChinese(0)).toEqual('零')
  });

  it('test 0.1', () => {
    expect(numberToChinese(0.1)).toEqual('零点一')
  });

  it('test 0.13', () => {
    expect(numberToChinese(0.13)).toEqual('零点一三')
  });

  it('test 1', () => {
    expect(numberToChinese(1)).toEqual('一')
  });

  it('test 11', () => {
    expect(numberToChinese(11)).toEqual('一十一')
  });

  it('test 10000', () => {
    expect(numberToChinese(10000)).toEqual('一万')
  });

  it('test 10001', () => {
    expect(numberToChinese(10001)).toEqual('一万一')
  });

  it('test 10011', () => {
    expect(numberToChinese(10011)).toEqual('一万一十一')
  });

  it('test 12339492835', () => {
    expect(numberToChinese(12339492835)).toEqual('一百二十三亿三千九百四十九万二千八百三十五')
  });
});
