/**
 * 转换数组为对象
 *
 * @since 0.1.1
 * @param source
 */
export function arrayToObject(
  source: any[]
) {
  const obj = {};
  for (let i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
}
