import isNumber from './isNumber';
import isPromise from './isPromise';
import isString from './isString';
import isArray from './isArray';
import isNull from './isNull';
import isEmail from './isEmail';
import isPhone from './isPhone';
import isUrl from './isUrl';
import isIdCard from './isIdCard';
export {
  idCardRegexp,
  emailRegexp,
  phoneRegexp,
  urlRegex
} from './regexp/config';
export { numberToChinese } from './number/number-to-chinese';
export { urlToList } from './url/tools';

export default {
  isNumber,
  isPromise,
  isString,
  isIdCard,
  isEmail,
  isPhone,
  isArray,
  isUrl,
  isNull
}

