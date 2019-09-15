import { idCardRegexp } from './idCardRegexp';

export function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
