import { urlRegex } from './regexps';

export function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
