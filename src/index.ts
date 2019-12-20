import arrayToObject from './arrayToObject';
import arrayToTree from './arrayToTree';
import isArray from './isArray';
import isBoolean from './isBoolean';
import isDate from './isDate';
import isEmail from './isEmail';
import isEmptyObject from './isEmptyObject';
import isFunction from './isFunction';
import isIdCard from './isIdCard';
import isInteger from './isInteger';
import isNaN from './isNaN';
import isNegativeInteger from './isNegativeInteger';
import isNil from './isNil';
import isNull from './isNull';
import isNumber from './isNumber';
import isObject from './isObject';
import isPhone from './isPhone';
import isPromise from './isPromise';
import isRegexp from './isRegexp';
import isString from './isString';
import isUndefined from './isUndefined';
import isUrl from './isUrl';
import isSymbol from './isSymbol';

// url utils
import urlToList from './urlToList';

// 工具类
import Policy from './Policy';
import NumberPrecision from './NumberPrecision';
import ArabicChinese from './ArabicChinese';

// Math
import round from './round';

// Regexp
import urlRegexp from './urlRegexp';
import emailRegexp from './emailRegexp';
import phoneRegexp from './phoneRegexp';
import idCardRegexp from './idCardRegexp';

// Utils
import getUrlParams from './getUrlParams';
import deepClone from './deepClone';
import getType from './getType';
import groupBy from './groupBy';
import forOwn from './forOwn';
import {dedent} from './dedent';
import indent from './indent';

// Promise utils
import delay from './delay';
import {immediate} from './immediate';

// 常用的类型定义
import * as enhanceType from './enhanceType'

const dagger = {
  arrayToObject,
  arrayToTree,
  isArray,
  isBoolean,
  isDate,
  isEmail,
  isEmptyObject,
  isFunction,
  isIdCard,
  isInteger,
  isNaN,
  isNegativeInteger,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPhone,
  isPromise,
  isRegexp,
  isString,
  isUndefined,
  isUrl,
  isSymbol,
  urlToList,
  Policy,
  NumberPrecision,
  ArabicChinese,
  round,
  urlRegexp,
  emailRegexp,
  phoneRegexp,
  idCardRegexp,
  getUrlParams,
  deepClone,
  getType,
  groupBy,
  forOwn,
  dedent,
  indent,
  delay,
  immediate,
  enhanceType,
};

export {
  dagger as default,
  arrayToObject,
  arrayToTree,
  isArray,
  isBoolean,
  isDate,
  isEmail,
  isEmptyObject,
  isFunction,
  isIdCard,
  isInteger,
  isNaN,
  isNegativeInteger,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPhone,
  isPromise,
  isRegexp,
  isString,
  isUndefined,
  isUrl,
  isSymbol,
  urlToList,
  Policy,
  NumberPrecision,
  ArabicChinese,
  round,
  urlRegexp,
  emailRegexp,
  phoneRegexp,
  idCardRegexp,
  getUrlParams,
  deepClone,
  getType,
  groupBy,
  forOwn,
  dedent,
  indent,
  delay,
  immediate,
  enhanceType,
}
