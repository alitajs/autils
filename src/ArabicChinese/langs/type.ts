/**
 * 中文数字语言类型
 */
export interface ILang {
  /**
   * 单个数字
   *
   * @example '零一二三四五六七八九'
   * @length 10
   * */
  digits: string;
  /**
   * 节权位
   *
   * @example '个十百千万亿'
   * @length 6
   */
  unitChars: string;
  /** 负 */
  minus: string;
  /** 点 */
  point: string;
  /**
   * 前缀符合 - toMoney使用
   *
   * @example 人民币
   */
  symbol?: string;
  /** 整 - toMoney使用 */
  complete?: string;
  /**
   * 单位 - toMoney使用
   *
   * @example 元角分
   */
  units?: string
}
