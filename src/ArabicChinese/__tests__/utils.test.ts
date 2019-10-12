import {
  e2ten,
  getDigit,
  clearZero,
  centerArray,
  unshiftZero,
  encodeInteger,
  getNumberResult,
  INumberResult
} from '../utils';
import { defaultOptions } from '../config';
import cns from '../langs/cn-s';
import hks from '../langs/hk-s';

describe('e2ten', () => {
  it('1.23e+3', () => {
    expect(e2ten('1.23e+3')).toEqual('1230');
  });

  it('1.23e-3', () => {
    expect(e2ten('1.23e-3')).toEqual('0.00123');
  });

  it('1', () => {
    expect(e2ten('1')).toEqual('1');
  });
});

describe('getNumberResult', () => {
  it('1.23e+3', () => {
    const result: INumberResult = {
      integer: '1230',
      decimal: undefined,
      minus: false,
      num: '1230'
    };
    expect(getNumberResult('1.23e+3')).toEqual(result);
  });
});

describe('clearZero', () => {
  it('00001', () => {
    expect(clearZero('00001', '0', '^')).toEqual('1');
  });

  it('一万零零零一', () => {
    expect(clearZero('一万零零零一', '零', 'nto1')).toEqual('一万零一');
  });

  it('一万零零零一零零零', () => {
    expect(clearZero('一万零零零一零零零', '零')).toEqual('一万零一');
  });
});

describe('unshiftZero', () => {
  it('[]', () => {
    expect(unshiftZero([])).toEqual([0]);
  });

  it('[], 0', () => {
    expect(unshiftZero([], 0)).toEqual([]);
  });

  it('[], 2', () => {
    expect(unshiftZero([], 2)).toEqual([0, 0]);
  });
});

describe('getDigit', () => {
  it('个', () => {
    expect(getDigit(0)).toEqual(0);
  });

  it('十', () => {
    expect(getDigit(1)).toEqual(1);
  });

  it('百', () => {
    expect(getDigit(2)).toEqual(2);
  });

  it('千', () => {
    expect(getDigit(3)).toEqual(3);
  });

  it('万', () => {
    expect(getDigit(4)).toEqual(4);
  });

  it('亿', () => {
    expect(getDigit(5)).toEqual(8);
  });
});

describe('centerArray', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5];
  const arr3 = [6];

  it('base', () => {
    expect(centerArray(arr1, arr2, arr3)).toEqual([6, 5, 3]);
    expect(arr1).toEqual([6, 5, 3]);
    expect(arr2).toEqual([]);
    expect(arr3).toEqual([]);
  });
});

describe('encodeInteger(转换整数)', () => {
  const lang = defaultOptions.lang === 'cn' ? cns : hks;

  const testData = [
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
    ['10000000000000000', '一亿亿'],
    ['100000001100000000', '一十亿零一十一亿'],
  ];

  it('一位整数', () => {
    expect(encodeInteger('1', defaultOptions, lang)).toEqual('一');
  });

  it('四位及四位以下', () => {
    expect(encodeInteger('11', defaultOptions, lang)).toEqual('一十一');
    expect(encodeInteger('120', defaultOptions, lang)).toEqual('一百二十');
    expect(encodeInteger('1234', defaultOptions, lang)).toEqual('一千二百三十四');
  });

  it('四位以上', () => {
    expect(encodeInteger('10000', defaultOptions, lang)).toEqual('一万');
    expect(encodeInteger('10001', defaultOptions, lang)).toEqual('一万零一');

    testData.forEach((item) => {
      expect(encodeInteger(item[0], defaultOptions, lang)).toEqual(item[1]);
    })
  });
});
