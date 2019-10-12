export interface ILang {
  // 单个数字集合
  digits: string;
  // 节权位集合
  unitChars: string;
  // 负
  minus: string;
  // 点
  point: string;
  // ---------
  // toMoney使用
  // 前缀符合 - 人民币
  symbol?: string;
  // 整
  complete?: string;
  // 单位
  units?: string
}
