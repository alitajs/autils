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

### 工具函数

|函数名称|引入版本|描述|
|--|--|--|
|isNull|v0.0.6|检查 value 是否是为`null`|

### 工具类

|函数名称|引入版本|描述|
|--|--|--|
|Policy|v0.3.1|解析`Policy`语法，并提供验证功能|
|ArabicChinese|v0.4.0|阿拉伯数字与中文转换|

## 按需加载

* 安装 `babel-plugin-import`

```
yarn add --dev babel-plugin-import
```

* 配置

```
// .babel.config.js

module.exports = function (api) {
  api.cache(true)

  const plugins = [
    [require.resolve('babel-plugin-import'), {
      libraryName: '@alitajs/autils',
      libraryDirectory: 'es',
      camel2DashComponentName: false
    }]
  ];

  return {
    plugins
  };
}
```
