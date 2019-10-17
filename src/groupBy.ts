export interface GroupByIterator<T, K> {
  /**
   * 迭代函数。
   *
   * @param item 数据项
   * @param index 数据项的索引
   * @param data 数据
   * @returns 返回在分组结果中的键
   */
  (item: T, index: number, data: T[]): K,
}

export interface GroupByFormatter<T> {
  (item: T, index: number, data: T[]): any,
}

/**
 * 根据迭代函数返回的值对 `data` 进行分组。
 *
 * @param data 要分组的数据
 * @param iterator 迭代函数
 * @param formatter 格式化函数
 * @returns 返回分组结果
 * @example
 * ```ts
 * groupBy(
 *   [
 *     { module: 'module1', action: 'action1' },
 *     { module: 'module1', action: 'action2' },
 *     { module: 'module2', action: 'action1' }
 *   ],
 *   item => item.module,
 * )
 * // => {
 * // =>   module1: [
 * // =>     { module: 'module1', action: 'action1' },
 * // =>     { module: 'module1', action: 'action2' },
 * // =>   ],
 * // =>   module2: [
 * // =>     { module: 'module2', action: 'action1' }
 * // =>   ]
 * // => }
 * ```
 */
export default function groupBy<T, K extends keyof any>(
  data: T[],
  iterator: GroupByIterator<T, K>,
  formatter?: GroupByFormatter<T>
) {
  return data.reduce<Record<K, T[]>>(
    (res, item, index) => {
      const key = iterator(item, index, data);
      if (!res[key]) {
        res[key] = []
      }
      res[key].push(formatter ? formatter(item, index, data) : item);
      return res
    },
    {} as any,
  )
}
