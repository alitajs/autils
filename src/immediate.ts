import delay from './delay';

export async function immediate<T>(value: T): Promise<T>;
export async function immediate<T>(): Promise<void>;

/**
 * 推迟执行
 * @param value
 */
export async function immediate(value?: any) {
  return delay(0, value);
}
