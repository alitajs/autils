import { urlRegex } from './urlRegex';

export function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
