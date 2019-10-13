import phoneRegexp from './phoneRegexp';

/**
 * 检查`value`是否为手机号。
 *
 * @since 0.0.6
 * @param value
 * @returns {boolean}
 * @example
 * ```ts
 * isPhone('17710067607')
 * // => true
 * ```
 */
export default function isPhone(value: any): boolean {
  return phoneRegexp.test(value);
}
