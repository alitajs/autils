// cn 简体中文 hk 繁体中文
export type ILang = 'cn' | 'hk';

export interface IOptions {
  // '万万'化开关, 默认: true
  ww?: boolean;
  // 当前语言
  lang?: ILang;
  // 十的口语化开关 默认: false
  tenMin?: boolean;
  // 输出完整金额开关 toMoney使用 默认: false
  complete?: boolean;
  // 输出金额前缀字符 toMoney使用 默认: true
  outSymbol?: boolean;
}

export const defaultOptions: IOptions = {
  ww: true,
  lang: 'cn',
  tenMin: false,
  complete: false,
  outSymbol: true
};
