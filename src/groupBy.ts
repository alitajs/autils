export interface GroupByIterator<T, K> {
  (item: T, index: number, data: T[]): K,
}

export function groupBy<T, K extends keyof any>(
  data: T[],
  iterator: GroupByIterator<T, K>,
) {
  return data.reduce<Record<K, T[]>>(
    (res, item, index) => {
      const key = iterator(item, index, data);
      if (!res[key]) {
        res[key] = []
      }
      res[key].push(item);
      return res
    },
    {} as any,
  )
}
