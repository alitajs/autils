import isInteger from './is-integer';

/**
 * 检查 `value` 是否是一个负整数
 *
 * @since 0.1.1
 * @param value 要检查的值
 * @returns `value` 是负整数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isNegativeInteger(-1) // => true
 * isNegativeInteger(1) // => false
 * ```
 */
export default function isNegativeInteger(
  value: any
): value is number {
  return value < 0 && isInteger(value);
}
