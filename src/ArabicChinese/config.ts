/**
 * 语言类型 cn 简体中文 hk 繁体中文
 * @hidden
 */
export type ILangType = 'cn' | 'hk';

/**
 * ArabicChinese配置
 * @hidden
 */
export interface IOptions {
  /**
   * '万万'化开关
   * 将'亿'转换为'万万'
   *
   * @default false
   */
  ww?: boolean;
  /**
   * 当前语言
   *
   * @default 'cn'
   */
  lang?: ILangType;
  /**
   * 十的口语化开关
   *
   * @default false
   */
  tenMin?: boolean;
  /**
   * 输出完整金额开关,
   * toMoney使用
   *
   * @default false
   */
  complete?: boolean;
  /**
   * 输出金额前缀字符
   * toMoney使用
   *
   * @default true
   */
  outSymbol?: boolean;
}

export const defaultOptions: IOptions = {
  ww: true,
  lang: 'cn',
  tenMin: false,
  complete: false,
  outSymbol: true
};
