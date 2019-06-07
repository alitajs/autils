/**
 * 检查`value`是否为`undefined`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
export function isUndefined(value: any): boolean {
  return value === undefined;
}
