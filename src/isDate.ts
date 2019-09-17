import { getType } from './getType';

/**
 * 检查 `value` 是否是一个日期
 *
 * @since 0.1.1
 * @param value 要检查的值
 * @returns `value` 是日期返回 `true`，否则返回 `false`
 * @example
 * ```
 * isDate(new Date()) // => true
 * ```
 */
export default function isDate(
  value: any
): value is Date {
  return getType(value) === 'Date';
}
