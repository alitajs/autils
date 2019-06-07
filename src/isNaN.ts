/**
 * 检查`value`是否为`NaN`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isNaN(NaN)
 * // => true
 *
 * isNull(1)
 * // => false
 */
export function isNaN(value: any): boolean {
  return value !== value;
}
