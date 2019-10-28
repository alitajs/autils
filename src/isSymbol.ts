import getType from './getType';

/**
 * 检查 `value` 是否是原始 `Symbol` 或者对象。
 *
 * @since 0.6.1
 * @param value 要检查的值
 * @returns 如果 value 为一个symbol，那么返回 true，否则返回 false
 * @example
 * ```ts
 * isSymbol(Symbol.iterator);
 * // => true
 * isSymbol('abc');
 * // => false
 * ```
 */
export default function isSymbol(
  value: any
): value is Symbol {
  const type = typeof value;
  return type === 'symbol' || (type === 'object' && value !== null && getType(value) === 'Symbol')
}
