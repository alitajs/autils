import urlRegex from './urlRegexp';

export default function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
