import idCardRegexp from './idCardRegexp';

export default function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
