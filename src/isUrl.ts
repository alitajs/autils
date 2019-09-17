import urlRegex from './urlRegex';

export default function isUrl(value: any): boolean {
  return urlRegex.test(value);
}
