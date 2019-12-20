import { AnyObject } from './enhanceType';
/**
 * 获取url的参数
 * @param url
 * @returns 返回参数对象
 * @example
 * ```js
 *  getUrlParams('https://www.google.com/search?id=123&name=ding')
 *  // { id: '123', name: 'ding' }
 * ```
 */

export default function getUrlParams(url: string): object {
  const query = url.split('?')[1];
  const paramSrtingArr = query && query.split("&");
  if (!paramSrtingArr) {
    // why return object not undefinde, becasue users get param from params.xxxx.
    // so they do not need write params && params.xxxx
    return {};
  }
  const paramObj:AnyObject = {};
  for (var i = 0; i < paramSrtingArr.length; i++) {
    const pair = paramSrtingArr[i].split("=");
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof paramObj[key] === "undefined") {
      paramObj[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof paramObj[key] === "string") {
      const arr = [paramObj[key], decodeURIComponent(value)];
      paramObj[key] = arr;
      // If third or later entry with this name
    } else {
      paramObj[key].push(decodeURIComponent(value));
    }
  }
  return paramObj;
}
