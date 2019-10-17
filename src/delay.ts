export async function delay<T>(delayTime: number, value: T): Promise<T>;
export async function delay<T>(delayTime: number): Promise<void>;

/**
 * 休眠函数
 * @param delayTime 休眠时间 以毫秒为单位
 * @param value 延迟后返回的值
 * @example
 * ```
 * sleep(1000).then(() => {
 *   // you code
 * })
 * ```
 */
export default async function delay<T>(delayTime: number, value?: T): Promise<void | T> {
  return new Promise(
    resolve => setTimeout(() => resolve(value), delayTime)
  )
}
