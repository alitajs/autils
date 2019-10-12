import nativeRound from './.internal/native-round';

export type IRoundType = 'default' | 'down' | 'up';

/**
 * 对传入的数字按给定的精度返回。
 *
 * @param number 传入的数字
 * @param precision 精度
 * @param type 处理类型 default: 四舍五入 down: 向下取整 up: 向上取整
 * @returns 返回结果
 * @example
 * ```ts
 * round(3.456) // => 3
 * round(3.456, 1) // => 3.5
 * round(3.456, 2) // => 3.46
 * round(345, -2) // => 300
 * ```
 */
function round(
  number: number,
  precision: number = 0,
  type: IRoundType = 'default'
): number {
  if (type === 'default') {
    return nativeRound(Math.round, number, precision)
  }
  if (type === 'down') {
    return nativeRound(Math.floor, number, precision)
  }
  if (type === 'up') {
    return nativeRound(Math.ceil, number, precision)
  }
}


export default round;
