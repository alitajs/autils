import idCardRegexp from './id-card-regexp';

export default function isIdCard(value: any): boolean {
  return idCardRegexp.test(value);
}
