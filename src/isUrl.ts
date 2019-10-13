import urlRegex from './urlRegexp';

/**
 * 检查 `value` 是否是一个Url
 *
 * @since 0.0.6
 * @param value 要检查的值
 * @returns `value` 是字符串返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isUrl('') // => false
 * isUrl('www.baidu.com') // => true
 * ```
 */
export default function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
