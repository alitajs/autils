import { idCardRegexp } from './config';

export { idCardRegexp } from './config';
export function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
