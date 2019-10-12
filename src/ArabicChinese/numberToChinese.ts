import {
  getNumberResult,
  encodeInteger,
  clearZero
} from './utils';
import { ILang } from './langs/type';
import { defaultOptions, IOptions } from './config';

/**
 * @ignore
 * 阿拉伯数字转中文数字
 * @param num 阿拉伯数字/字符串, 科学记数法字符串
 * @param lang 阿拉伯数字/字符串, 科学记数法字符串
 * @param options 转换配置
 * @param options.ww
 */
export default function numberToChinese(
  num: number | string,
  lang: ILang,
  options?: IOptions
): string {
  const result = getNumberResult(num);
  if (!result) return num.toString();
  options = Object.assign(defaultOptions, options);

  let _integer = result.integer
    , _decimal = result.decimal
    , _minus = result.minus;

  let integer = ''
    , decimal = ''
    , minus = _minus ? lang.minus : '';

  // 转换整数部分
  integer = encodeInteger(_integer, options, lang);

  // 超级大数的万万化
  if (options.ww && lang.unitChars.length > 5) {
    let unitCharW = lang.unitChars.charAt(4)
      , unitCharY = lang.unitChars.charAt(5);
    let lastIndexY = integer.lastIndexOf(unitCharY);
    if (~lastIndexY) {
      integer = integer.substring(0, lastIndexY).replace(new RegExp(unitCharY, 'g'), unitCharW + unitCharW) + integer.substring(lastIndexY);
    }
  }

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
