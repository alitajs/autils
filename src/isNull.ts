/**
 * 检查`value`是否为`null`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export function isNull(value: any): boolean {
  return value === null;
}
