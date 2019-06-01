/**
 * 检查`value`是否为`Promise`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isPromise(null)
 * // => false
 *
 * isPromise(0)
 * // => false
 */
function isPromise(value: any): value is Promise<any> {
  return !!value && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function';
}

export default isPromise;
