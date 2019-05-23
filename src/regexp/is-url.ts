import { urlRegex } from './config';

export { urlRegex } from './config';
export function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
