import idCardRegexp from './idCardRegexp';

/**
 * 检查 `value` 是否是一个身份证号
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @example
 * ```ts
 * isIdCard('123') // => false
 * ```
 */
export default function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
