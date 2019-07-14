/**
 * 检查 `value` 是否是一个函数
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是函数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isFunction(() => {}) // => true
 * isFunction(2) // => false
 * ```
 */
export function isFunction(
  value: any
): value is Function {
  return typeof value === 'function';
}
