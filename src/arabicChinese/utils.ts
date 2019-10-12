import isNil from '../is-nil';
import { IOptions } from './config';
import { ILang } from './langs/type';

const REG_NUMBER = /^([+-])?0*(\d+)(\.(\d+))?$/;
const REG_E = /^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i;

export interface INumberResult {
  // 整数部分
  integer: string;
  // 小数部分
  decimal: string | undefined;
  // 负数表示
  minus: boolean;
  // 原有的数值
  num: string;
}

/**
 * 将科学计数法转换为十进制
 * @param number
 * @example
 *   1.23e+3 >> 1230
 *   1.23e-3 >> 0.00123
 */
export function e2ten(number: string) {
  // 1.23e+3
  // >> ['1.23e+3', undefined, '1', '.23', '23', '+3', '+', '3']
  // 1.23e-3
  // >> ['1.23e-3', undefined, '1', '.23', '23', '-3', '-', '3']
  const result = REG_E.exec(number.toString());
  if (!result) return number;

  // 整数
  let integer = result[2];
  // 小数
  let decimal = result[4] || '';
  // 幂的值
  let power = result[5] ? +result[5] : 0;

  // 幂大于0
  // 1.23456e+3 >> integer = '1234' 1.2e+3 >> integer = '1200'
  // 1.23456e+3 >> decimal = '56' 1.2e+3 >> decimal = ''
  if (power > 0) {
    let _integer = decimal.substr(0, power);

    _integer = _integer.length < power
      ? _integer + new Array(power - _integer.length + 1).join('0')
      : _integer;

    decimal = decimal.substr(power);

    integer += _integer;
  // 幂小于0
  // 1.23456e-3 >> integer = '' 1234.2e-3 >> integer = '1'
  // 1.23456e-3 >> decimal = '00123456' 1234.2e-3 >> decimal = '2342'
  } else {
    power = -power;

    let s_start = integer.length - power;

    s_start = s_start < 0 ? 0 : s_start;

    let _decimal = integer.substr(s_start, power);

    // 补0
    _decimal = _decimal.length < power
      ? new Array(power - _decimal.length + 1).join("0") + _decimal
      : _decimal;

    integer = integer.substring(0, s_start);
    decimal = _decimal + decimal;
  }

  integer = integer == '' ? '0' : integer;

  return (result[1] == '-' ? '-' : '') + integer + (decimal ? '.' + decimal : '');
}

/**
 * 解析数字字符串
 * @param number
 */
export function getNumberResult(
  number: string | number
): INumberResult {
  let result = REG_NUMBER.exec(number.toString());

  if (!result && REG_E.test(number.toString())) {
    result = REG_NUMBER.exec(e2ten(number.toString()))
  }

  if (result) {
    return {
      integer: result[2],
      decimal: result[4],
      minus: result[1] === '-',
      num: result.slice(1, 3).join('')
    }
  }
}

/**
 * 数组归一 (按索引覆盖合并数组,并清空被合并的数组)
 * 注意: 会改变被操作的数组
 * @param baseArr
 * @param arrays
 */
export function centerArray<T>(
  baseArr: T[],
  ...arrays: T[][]
) {
  return Object.assign(baseArr, arrays.reduce((p, c) => ({ ...p, ...c.splice(0, c.length) }), {}));
}

/**
 * 检查key是否是对像的属性 (非原型链)
 * @param obj
 * @param key
 */
export function hasOwn(
  obj: object,
  key: string
): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * 获取中文单位的真实数位
 * @param index
 */
export function getDigit(
  index: number
) {
  return index >= 5 ? (index - 4) * 4 + 4 : index;
}

/**
 * 向数组头部插入0
 * @param arr 需要操作的数组
 * @param num 插入零的数量 默认1
 */
export function unshiftZero(
  arr: number[],
  num?: number
) {
  if (num <= 0) return arr;
  if (isNil(num)) {
    num = 1;
  }
  for (; num--;) arr.unshift(0);

  return arr;
}

/**
 * 清除字符串中多余的零
 * @param str 需要处理的字符串
 * @param zero 零字符
 * @param type ^ - 开头, $ - 结尾, nto1 - 多个连续变一个
 */
export function clearZero(
  str: string,
  zero: string,
  type?: '^' | '$' | 'nto1'
): string {
  if (!str) return '';

  const reg0 = ~'*.?+$^[](){}|\\/'.indexOf(zero) ? '\\' + zero : zero;

  const arg_s = new RegExp('^' + reg0 + '+')
    , arg_e = new RegExp(reg0 + '+$')
    , arg_d = new RegExp(reg0 + '{2}', 'g');

  if (type == '^') {
    str = str.replace(arg_s, '');
  }

  if (!type || type == '$') {
    str = str.replace(arg_e, '');
  }

  if (!type || type == 'nto1') {
    str = str.replace(arg_d, '');
  }

  return str;
}

/**
 * 转换整数
 * @param integer 需要转换的整数
 * @param options 转换配置
 * @param lang 转换语言
 */
export function encodeInteger(
  integer: string,
  options: IOptions,
  lang: ILang
): string {
  const { digits, unitChars } = lang;
  integer = getNumberResult(integer).integer;

  const zero = digits.charAt(0);

  let _integer = ''
    , _tenMin = options.tenMin
    , _length = integer.length;

  // 一位整数
  // '1' >> '一'
  if (_length === 1) return digits.charAt(+integer);

  // 4位及以下
  if (_length <= 4) {
    for (let i = 0, n = _length; n--;) {
      let _num = +integer.charAt(i);
      _integer += (_tenMin && _length == 2 && i == 0 && _num == 1)
        ? ''
        : digits.charAt(_num);
      _integer += (_num && n ? unitChars.charAt(n) : '');
      i++;
    }
  } else { // 使用递归
    let d = integer.length / 4 >> 0
      , y = integer.length % 4;

    // '兆', '京'等单位处理
    while (y == 0 || !unitChars.charAt(3 + d)) {
      y += 4;
      d--;
    }

    const _maxLeft = integer.substr(0, y), // 最大单位前的数字
      _other = integer.substr(y); // 剩余数字

    _integer = encodeInteger(_maxLeft, options, lang) + unitChars.charAt(3 + d)
      + (_other.charAt(0) == '0' ? zero : '') // 单位后有0则加零
      + encodeInteger(_other, options, lang)
  }

  // 修整零
  _integer = clearZero(_integer, zero);

  return _integer;
}
