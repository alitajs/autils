/**
 * 检查 `value` 是否是一个数组
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是数组返回 `true`，否则返回 `false`
 * @example
 * ```
 * isArray(['x']) // => true
 * isArray('x') // => false
 * ```
 */
export function isArray(
  value: any
): value is any[] {
  return Array.isArray(value);
}
