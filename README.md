<h1 align="center">autils</h1>

[![Alita](https://img.shields.io/badge/alitajs-autils-blue.svg)](https://github.com/alitajs/autils)
[![NPM version](https://img.shields.io/npm/v/%40alitajs%2Fautils.svg?style=flat)](https://npmjs.org/package/@alitajs/autils)
[![NPM downloads](http://img.shields.io/npm/dm/%40alitajs%2Fautils.svg?style=flat)](https://npmjs.org/package/@alitajs/autils)

<h2 align="center">小巧实用的前端工具类库。</h2>

## 特性

* ✏️ TypeScript: 使用 TS 编写，类型友好
* ✨ 源于项目：日常项目的积累
* 🐳 严格测试：使用Jest对每个方法，进行严格的测试

## 使用

1. 安装依赖

* npm安装

```
npm install -D @alitajs/autils
```

* yarn 安装(推荐)

```
yarn add @alitajs/autils
```

2. 使用

```
import { numberToChinese } from '@alitajs/autils';

// 一
console.log(numberToChinese(1));

// 一万
console.log(numberToChinese(10000));
```

## 目录

### 📦 工具函数

* Array

🔖 | 🔖 | 🔖 | 🔖
--- | --- | --- | ---
[arrayToObject](#arrayToObject) | [arrayToTree](#arrayToTree) | [assign](#assign) | [assign](#assign)

## API

### arrayToObject

将数组转换为对象

### arrayToTree

将数组转换为树


### numberToChinese

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






