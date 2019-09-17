/**
 * 检查 `value` 是否是一个布尔值。
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是布尔值返回 `true`，否则返回 `false`
 * @example
 * ```
 * isBoolean(true) // => true
 * isBoolean(false) // => true
 * isBoolean('true') // => false
 * ```
 */
export default function isBoolean(
  value: any
): value is boolean {
  return typeof value === 'boolean';
}
