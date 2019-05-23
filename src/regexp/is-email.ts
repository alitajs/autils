import { emailRegexp } from './config';

export { emailRegexp } from './config';
export function isEmail(value: any): boolean {
  return emailRegexp.test(value);
}
