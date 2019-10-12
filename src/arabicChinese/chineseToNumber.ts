import { unshiftZero, getDigit, centerArray } from './utils';
import { ILang } from './langs/type';

/**
 * 中文数字转阿拉伯数字
 * @param zhNum
 * @param lang
 */
export default function chineseToNumber(
  zhNum: string,
  lang: ILang
): number {
  const result = zhNum.split(lang.point);

  let _integer = result[0].replace(lang.minus, '')
    , _decimal = result[1]
    , _minus = !!~result[0].indexOf(lang.minus);

  let unitCharS = lang.unitChars.charAt(1) // 十
    , unitCharW = lang.unitChars.charAt(4) // 万
    , unitCharY = lang.unitChars.charAt(5); // 亿

  // 万万 ==> 亿
  _integer = _integer.replace(new RegExp(unitCharW + '{2}', 'g'), unitCharY);

  const chars = _integer.split('');

  let unitChar = 0, maxUnitChar = 0;
  let rnum_a = [], num_a = [], _num_a = [];

  for (let i = 0; i < chars.length; i++) {
    let chr = chars[i];
    let n = 0, u = 0;
    if (~(n = lang.digits.indexOf(chr))) {
      if (n > 0) _num_a.unshift(n);
    } else if (~(u = lang.unitChars.indexOf(chr))) {
      let digit = getDigit(u);
      if (unitChar > u) { // 正常情况
        unshiftZero(_num_a, digit);
        centerArray(num_a, _num_a);
      } else if (u >= maxUnitChar) { // 后跟大单位
        if (i == 0) _num_a = [1];
        centerArray(rnum_a, num_a, _num_a);
        if (rnum_a.length > 0) unshiftZero(rnum_a, digit);
        maxUnitChar = u;
      } else {
        if (_num_a.length == 0 && unitCharS == chr) _num_a = [1];
        centerArray(num_a, _num_a);
        unshiftZero(num_a, getDigit(u));
        unitChar = u;
      }
    }
  }

  centerArray(rnum_a, num_a, _num_a).reverse();

  if (rnum_a.length == 0) rnum_a.push(0);

  let decimal: number | string = 0;

  if (_decimal) {
    rnum_a.push('.');
    decimal = '0.';
    for (let i = 0; i < _decimal.length; i++) {
      decimal += lang.digits.indexOf(_decimal.charAt(i));
      rnum_a.push(lang.digits.indexOf(_decimal.charAt(i)));
    }
    decimal = +decimal;

  }
  if (_minus) rnum_a.unshift('-');
  return parseFloat(rnum_a.join(''));
}
