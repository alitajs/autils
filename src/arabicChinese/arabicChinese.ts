import { IOptions, defaultOptions } from './config';
import numberToChinese from './numberToChinese';

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
  encode = (num: string | number, options?: IOptions) => {
    if (!num) return num;
    const _options = Object.assign({}, this.options, options);
    return numberToChinese(num, _options)
  };

  decode = (zhNum: string, options?: IOptions) => {

  };
}

export default ArabicChinese;
