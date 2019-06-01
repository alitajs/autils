import { emailRegexp } from './regexp/config';

/**
 * 检查`value`是否为邮箱。
 *
 * @since 0.0.5
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isEmail('156148958@qq.com')
 * // => true
 *
 * isEmail('156148958.com')
 * // => false
 */
function isEmail(value: any): boolean {
  return emailRegexp.test(value);
}

export default isEmail;
