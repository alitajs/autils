import isArray from './isArray';

/**
 * 检查 `obj` 是否是一个空对象
 *
 * @since 0.1.1
 * @param obj 要检查的值
 * @returns `obj` 是空对象返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isEmptyObject({}) // => true
 * isFunction({a: 1}) // => false
 * ```
 */
export default function isEmptyObject(
  obj: object
): boolean {
  if (!obj || typeof obj !== 'object' || isArray(obj)) {
    return false;
  }
  return !Object.keys(obj).length;
}
