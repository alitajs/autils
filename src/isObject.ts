/**
 * 检查 `value` 是否是一个对象
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是对象返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isObject({}) // => true
 * isObject(1) // => false
 * ```
 */
export default function isObject(
  value: any
): value is object {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function')
}
