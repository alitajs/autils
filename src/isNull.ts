/**
 * 检查 `value` 是否是 `null`
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是 `null` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isNull(null) // => true
 * ```
 */
export default function isNull(
  value: any
): value is null {
  return value === null;
}
