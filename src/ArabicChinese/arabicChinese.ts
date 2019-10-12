import isString from '../is-string';
import { IOptions, defaultOptions } from './config';
import cns from './langs/cn-s';
import hks from './langs/hk-s';
import numberToChinese from './numberToChinese';
import chineseToNumber from './chineseToNumber';
import toMoney from './toMoney';

class ArabicChinese {
  private readonly options: IOptions;

  constructor(
    options?: IOptions
  ) {
    this.options = Object.assign({}, defaultOptions, options);
  }

  /**
   * 数字转中文
   * @param num
   * @param options
   */
  encode = (
    num: string | number,
    options?: IOptions
  ): string => {
    const _options = Object.assign({}, this.options, options);
    const lang = _options.lang === 'cn' ? cns : hks;
    return numberToChinese(num, lang, _options);
  };

  /**
   * 中文转数字
   * @param zhNum
   * @param options
   */
  decode = (zhNum: string, options?: IOptions): number => {
    if (!isString(zhNum)) return zhNum;
    const _options = Object.assign({}, this.options, options);
    const lang = _options.lang === 'cn' ? cns : hks;
    return chineseToNumber(zhNum, lang);
  };

  /**
   * 数字转金额
   * @param num
   * @param options
   */
  toMoney = (
    num: string | number,
    options?: IOptions
  ): string => {
    if (!num) return num.toString();
    const _options = Object.assign({}, this.options, options);
    return toMoney(num, _options);
  }
}

export default ArabicChinese;
