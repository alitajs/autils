import { phoneRegexp } from './regexps';

/**
 * 检查`value`是否为手机号。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isPhone('17710067607')
 * // => true
 *
 * isBoolean('11710067607')
 * // => false
 */
export function isPhone(value: any): boolean {
  return phoneRegexp.test(value);
}
