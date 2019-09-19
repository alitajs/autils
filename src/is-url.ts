import urlRegex from './url-regexp';

export default function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
