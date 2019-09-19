/**
 * 检查 `value` 是否是一个整数。
 *
 * @since 0.1.1
 * @param value 要检查的值
 * @returns `value` 是整数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isInteger(1) // => true
 * isInteger(1.2) // => false
 * isInteger(-1) // => true
 * ```
 */
export default function isInteger(
  value: any
): value is number {
  return Number.isInteger(value)
}
