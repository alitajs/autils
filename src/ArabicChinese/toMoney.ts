import { getNumberResult, clearZero } from './utils';
import numberToChinese from './numberToChinese';
import { defaultOptions, IOptions } from './config';
import cnb from './langs/cn-b';
import hkb from './langs/hk-b';

export default function toMoney(
  num: string | number,
  options?: IOptions
): string {
  const result = getNumberResult(num);
  if (!result) { return num + ''; }
  options = Object.assign(defaultOptions, options);

  // 获取语言配置
  const lang = options.lang === 'cn' ? cnb : hkb;
  // 零字符文本
  const zero = lang.digits.charAt(0);

  let _num = result.num
    , _decimal = result.decimal || '';

  let symbolStr = options.outSymbol ? lang.symbol : ''
    , integerStr = _decimal ? '' : lang.complete
    , decimalStr = '';

  function getChinese(num) {
    return numberToChinese(num, lang, options);
  }

  if (options.complete) {
    for (let i = 1; i < lang.units.length; i++) {
      decimalStr += getChinese(_decimal.charAt(i - 1) || '0') + lang.units.charAt(i);
    }
    integerStr = getChinese(_num) + lang.units.charAt(0);
  } else {
    // 去除尾部的0
    _decimal = clearZero(_decimal, '0', '$');

    if (_decimal) {
      let mark_0;
      for (let i = 0; i < lang.units.length - 1; i++) {
        if (_decimal.charAt(i) && _decimal.charAt(i) != '0') {
          integerStr += getChinese(_decimal.charAt(i)) + lang.units.charAt(i + 1);
          mark_0 = false;
        }
        if (_decimal.charAt(i) === '0' && !mark_0) {
          // 当整为0时, 小数前无需加零
          if (i != 0 || _num != '0') integerStr += zero;
          mark_0 = true;
        }
      }
    }

    if (_num != '0' || integerStr || !decimalStr) {
      integerStr = getChinese(_num) + lang.units.charAt(0) + integerStr;
    }
  }

  return symbolStr + integerStr + decimalStr;
}
