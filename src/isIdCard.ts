import { idCardRegexp } from './regexps';

export function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
