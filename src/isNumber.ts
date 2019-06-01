/**
 * 检查`value`是否为`number`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isNumber(1)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 */
function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export default isNumber;
