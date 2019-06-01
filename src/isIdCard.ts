import { idCardRegexp } from '../src/regexp/config';

function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}

export default isIdCard;
