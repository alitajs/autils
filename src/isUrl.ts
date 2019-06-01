import { urlRegex } from './regexp/config';

function isUrl(value: any): boolean {
  return urlRegex.test(value);
}

export default isUrl;
