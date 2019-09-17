/**
 * 检查 `value` 是否等于 `undefined`。
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是 `undefined` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isUndefined(undefined) // => true
 * isUndefined(void 0) // => true
 * ```
 */
export default function isUndefined(
  value: any
): value is undefined {
  return value === undefined
}
