import { phoneRegexp } from './config';

export { phoneRegexp } from './config';
export function isPhone(value: any): boolean {
  return phoneRegexp.test(value);
}
