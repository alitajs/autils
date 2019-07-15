<h1 align="center">awe-utils</h1>

[![Alita](https://img.shields.io/badge/alitajs-autils-blue.svg)](https://github.com/alitajs/autils)
[![NPM version](https://img.shields.io/npm/v/awe-utils.svg?style=flat)](https://npmjs.org/package/awe-utils)
[![NPM downloads](http://img.shields.io/npm/dm/awe-utils.svg?style=flat)](https://npmjs.org/package/awe-utils)

<h2 align="center">小巧实用的前端工具类库。</h2>

# 特性

* ✏️ TypeScript: 使用 TS 编写，类型友好
* ✨ 源于项目：日常项目的积累
* 🐳 严格测试：使用Jest对每个方法，进行严格的测试

# 使用

1. 安装依赖

`npm install awe-utils` || `yarn add awe-utils`

2. 使用

```
import { numberToChinese } from 'awe-utils';

// 一
console.log(numberToChinese(1));

// 一万
console.log(numberToChinese(10000));
```

# API

## numberToChinese

> 数字转中文工具方法 `numberToChinese(number: number): string`

* 引入版本

0.0.1

* 参数

number(number): 需要转换的数字

* 返回值

(string): 转换后的文本

* 例子


```
numberToChinese(1);
// => 一
```






