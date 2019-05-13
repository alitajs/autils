# dharma

[![NPM version](https://img.shields.io/npm/v/@jiumao/dharma.svg?style=flat)](https://npmjs.org/package/@jiumao/dharma)
[![NPM downloads](http://img.shields.io/npm/dm/@jiumao/dharma.svg?style=flat)](https://npmjs.org/package/@jiumao/dharma)

> 前端工具库 

# 使用

1. 安装依赖

`npm install @jiumao/dharma` || `yarn add @jiumao/dharma`

2. 使用

```
import { numberToChinese } from '@jiumao/dharma';

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






