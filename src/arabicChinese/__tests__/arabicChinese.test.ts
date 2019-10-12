import ArabicChinese from '../arabicChinese';

const testData = [
  ['1', '一'],
  ['-1', '负一'],
  ['001', '一'],
  ['010', '一十'],
  ['0010', '一十'],
  ['12', '一十二'],
  ['123', '一百二十三'],
  ['1234', '一千二百三十四'],
  ['12345', '一万二千三百四十五'],
  ['123456', '一十二万三千四百五十六'],
  ['1234567', '一百二十三万四千五百六十七'],
  ['12345678', '一千二百三十四万五千六百七十八'],
  ['123456789', '一亿二千三百四十五万六千七百八十九'],
  ['1234567890', '一十二亿三千四百五十六万七千八百九十'],
  ['12301230123', '一百二十三亿零一百二十三万零一百二十三'],
  ['123012301230', '一千二百三十亿一千二百三十万一千二百三十'],
  ['1230123012301', '一万二千三百零一亿二千三百零一万二千三百零一'],
  ['12301230123012', '一十二万三千零一十二亿三千零一十二万三千零一十二'],
  ['10000000000000000', '一万万亿']
];

const testData1 = [
  ['0.0', '零'],
  ['1.0', '一'],
  ['1.00', '一'],
  ['0.1', '零点一'],
  ['-0.1', '负零点一'],
  ['00.1', '零点一'],
  ['01.1', '一点一'],
  ['1.10', '一点一'],
  ['10.01', '一十点零一'],
  ['100111.11', '一十万零一百一十一点一一'],
  ['1e16', '一万万亿']
];

describe('arabicChinese encode', () => {
  const arabicChinese = new ArabicChinese();
  it('整数', () => {
    testData.forEach((item) => {
      expect(arabicChinese.encode(item[0])).toEqual(item[1]);
    });
  });

  it('有小数', () => {
    testData1.forEach((item) => {
      expect(arabicChinese.encode(item[0])).toEqual(item[1]);
    });
  });
});

describe('arabicChinese decode', () => {
  const arabicChinese = new ArabicChinese();

  it('整数', () => {
    testData.forEach((item) => {
      expect(arabicChinese.decode(item[1])).toEqual(+item[0]);
    });
  });

  it('有小数', () => {
    testData1.forEach((item) => {
      expect(arabicChinese.decode(item[1])).toEqual(+item[0]);
    });
  });
});
