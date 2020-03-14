# Skyz-Gulu - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/SkyZhou197/gulu-test-1.svg?branch=master)](https://travis-ci.org/SkyZhou197/gulu-test-1)

## 介绍
本项目是完全用 [Vue.js](https://cn.vuejs.org/index.html) 编写的一套前端 UI 框架。

风格较为简洁大方，适合在 pc 端和移动端使用。已从开发者和用户角度出发，对代码进行多次重构，功能优化很多次。

当前版本: **v 1.0.0**

目前使用30多个单元测试用例，全部为通过，集成测试在[Travis CI](https://travis-ci.org/github/SkyZhou197/gulu-test-1)

具体使用方法参考[文档](https://zhouhaomin.top/skyz-gulu/)

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

IE 15 及以上浏览器都支持此样式。

2. 安装 gulu

```
npm i --save skyz-gulu
```

3. 引入 gulu

```
import {Button, ButtonGroup, Icon} from 'skyz-gulu'
import 'skyz-gulu/dist/index.css'
 export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
```


## 变更记录
* 2020-03-02 开始立项
* 2020-03-14 发布 V 1.0.0 版本

## 联系方式
* [个人博客](https://zhouhaomin.top/)

```

```
