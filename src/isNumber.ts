/**
 * 检查 `value` 是否是一个数字。
 *
 * @since 0.1.1
 * @param {*} value 要检查的值
 * @returns {boolean} `value` 是数字返回 `true`，否则返回 `false`
 * @example
 * ```
 * isNumber(1) // => true
 * isNumber(0.1) // => true
 * isNumber(NaN) // => false
 * isNumber(Infinity) // => false
 * ```
 */
export default function isNumber(
  value: any
): value is number {
  return typeof value === 'number';
}
