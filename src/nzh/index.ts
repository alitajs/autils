import { getNumberResult, encodeInteger, clearZero } from './utils';
import cns from './langs/cn-s';
import hks from './langs/hk-s';
import { defaultOptions, IOptions } from './config';

/**
 * 阿拉伯数字转中文数字
 * @param num 阿拉伯数字/字符串, 科学记数法字符串
 * @param options 转换配置
 * @param options.ww
 */
export function numberToChinese(
  num: number | string,
  options?: IOptions
) {
  const result = getNumberResult(num);
  if (!result) return num;
  options = Object.assign(defaultOptions, options);
  const lang = options.lang === 'cn' ? cns : hks;

  let _integer = result.integer
    , _decimal = result.decimal
    , _minus = result.minus;

  let integer = ''
    , decimal = ''
    , minus = _minus ? lang.minus : '';

  // 转换整数部分
  integer = encodeInteger(_integer, options, lang);

  // 转换小数部分
  if (_decimal) {
    // 去除尾部0
    _decimal = clearZero(_decimal, '0', '$');
    for (let x = 0; x < _decimal.length; x++) {
      decimal += lang.digits.charAt(+_decimal.charAt(x));
    }
    decimal = decimal ? lang.point + decimal : '';
  }

  return minus + integer + decimal;
}

export function chineseToNumber() {


}

export function toMoney(num, options) {

}
