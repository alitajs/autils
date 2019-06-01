import { phoneRegexp } from '../src/regexp/config';

function isPhone(value: any): boolean {
  return phoneRegexp.test(value);
}

export default isPhone;
