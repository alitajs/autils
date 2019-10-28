<h1 align="center">autils</h1>

[![Alita](https://img.shields.io/badge/alitajs-autils-blue.svg)](https://github.com/alitajs/autils)
[![NPM version](https://img.shields.io/npm/v/%40alitajs%2Fautils.svg?style=flat)](https://npmjs.org/package/@alitajs/autils)
[![NPM downloads](http://img.shields.io/npm/dm/%40alitajs%2Fautils.svg?style=flat)](https://npmjs.org/package/@alitajs/autils)

<h2 align="center">小巧实用的前端工具类库。</h2>

## ✨ 特性

* ✏️ 使用TypeScript编写，类型友好
* ✨ 源于日常项目的积累，更实用
* 🐳 使用Jest进行严格测试，更稳定
* ⚡️ 支持按需加载，请配合babel-plugin-import使用

## 📦 安装

* npm安装

```
npm install @alitajs/autils --save
```

* yarn 安装(推荐)

```
yarn add @alitajs/autils
```


## 📝 目录

<!-- 工具类!目录 -->
### 工具类
* [ArabicChinese](https://alitajs.github.io/autils/classes/arabicchinese.html) 阿拉伯数字和中文数字互转
* [NumberPrecision](https://alitajs.github.io/autils/classes/numberprecision.html) 解决浮动运算问题，避免小数点后产生多数值和计算精度损失
* [Policy](https://alitajs.github.io/autils/classes/policy.html) 解析权限策略，并提供验证功能
<!-- 工具类i目录 -->

<!-- 工具函数!目录 -->
### 工具函数
* [arrayToObject](https://alitajs.github.io/autils/globals.html#arraytoobject) 转换数组为对象
* [arrayToTree](https://alitajs.github.io/autils/globals.html#arraytotree) 将数组转换为树形结构数据
* [dedent](https://alitajs.github.io/autils/globals.html#dedent) 每一行紧跟前导空白的插入值，为多行时，保持缩进。并移除每一行的公共前导空白。
* [deepClone](https://alitajs.github.io/autils/globals.html#deepclone) 深拷贝
* [delay](https://alitajs.github.io/autils/globals.html#delay) 休眠函数
* [forOwn](https://alitajs.github.io/autils/globals.html#forown) 遍历对象的可枚举属性。若遍历函数返回 `false`，遍历会提前退出。
* [getType](https://alitajs.github.io/autils/globals.html#gettype) 检测 `value` 的类型
* [groupBy](https://alitajs.github.io/autils/globals.html#groupby) 根据迭代函数返回的值对 `data` 进行分组。
* [immediate](https://alitajs.github.io/autils/globals.html#immediate) 推迟执行
* [indent](https://alitajs.github.io/autils/globals.html#indent) 每一行紧跟前导空白的插入值为多行时，保持缩进。
* [isArray](https://alitajs.github.io/autils/globals.html#isarray) 检查 `value` 是否是一个数组
* [isBoolean](https://alitajs.github.io/autils/globals.html#isboolean) 检查 `value` 是否是一个布尔值。
* [isDate](https://alitajs.github.io/autils/globals.html#isdate) 检查 `value` 是否是一个日期
* [isEmail](https://alitajs.github.io/autils/globals.html#isemail) 检查`value`是否为邮箱。
* [isEmptyObject](https://alitajs.github.io/autils/globals.html#isemptyobject) 检查 `obj` 是否是一个空对象
* [isFunction](https://alitajs.github.io/autils/globals.html#isfunction) 检查 `value` 是否是一个函数
* [isIdCard](https://alitajs.github.io/autils/globals.html#isidcard) 检查 `value` 是否是一个身份证号
* [isInteger](https://alitajs.github.io/autils/globals.html#isinteger) 检查 `value` 是否是一个整数。
* [isNaN](https://alitajs.github.io/autils/globals.html#isnan) 检查 `value` 是否是 `NaN`。
* [isNegativeInteger](https://alitajs.github.io/autils/globals.html#isnegativeinteger) 检查 `value` 是否是一个负整数
* [isNil](https://alitajs.github.io/autils/globals.html#isnil) 检查 `value` 是否是 `null` 或 `undefined`
* [isNull](https://alitajs.github.io/autils/globals.html#isnull) 检查 `value` 是否是 `null`
* [isNumber](https://alitajs.github.io/autils/globals.html#isnumber) 检查 `value` 是否是一个数字。
* [isObject](https://alitajs.github.io/autils/globals.html#isobject) 检查 `value` 是否是一个对象
* [isPhone](https://alitajs.github.io/autils/globals.html#isphone) 检查`value`是否为手机号。
* [isPromise](https://alitajs.github.io/autils/globals.html#ispromise) 检查`value`是否为`Promise`。
* [isRegExp](https://alitajs.github.io/autils/globals.html#isregexp) 检查 `value` 是否是一个正则对象。
* [isString](https://alitajs.github.io/autils/globals.html#isstring) 检查 `value` 是否是一个字符串
* [isSymbol](https://alitajs.github.io/autils/globals.html#issymbol) 检查 `value` 是否是原始 `Symbol` 或者对象。
* [isUndefined](https://alitajs.github.io/autils/globals.html#isundefined) 检查 `value` 是否等于 `undefined`。
* [isUrl](https://alitajs.github.io/autils/globals.html#isurl) 检查 `value` 是否是一个Url
* [urlToList](https://alitajs.github.io/autils/globals.html#urltolist) 转换url为数组
<!-- 工具函数i目录 -->

<!-- 工具类型!目录 -->
### 工具类型
* [AnyFunction](https://alitajs.github.io/autils/globals.html#anyfunction) 任意函数类型。
* [AnyObject](https://alitajs.github.io/autils/globals.html#anyobject) 任意对象类型。
* [Defined](https://alitajs.github.io/autils/globals.html#defined) 从 `T` 中排除 `undefined` 类型。
* [TBrand](https://alitajs.github.io/autils/globals.html#tbrand) 名义化类型。
* [TLiteralUnion](https://alitajs.github.io/autils/globals.html#tliteralunion) 字面量联合类型
<!-- 工具类型i目录 -->
