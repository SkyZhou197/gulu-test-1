---
title: Button
---# 按钮

:::tip
使用方法
:::
## 默认按钮
在 html 中使用默认的 button 样式。
```html
<g-button>默认按钮</g-button>
```
效果如下：

<ClientOnly>
<button-demos-1></button-demos-1>
</ClientOnly>

## 设置icon/iconPosition
icon 目前支持 right, left, down, setting, download, thumbs-up

iconPosition 默认的位置在左边，通过设置调整位置：left 或 right。

```html
<g-button icon="download">下载按钮</g-button>
<g-button icon="thumbs-up" iconPosition="right">点赞按钮</g-button>
```
效果如下：

<ClientOnly>
<button-demos-2></button-demos-2>
</ClientOnly>

## 设置加载动画

```html
<g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
<g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
<g-button icon-position="right":loading="loading3" @click="loading3 = !loading3">按钮</g-button>
```
```js
new Vue({
    data(){
      return{
        loading1: true,
        loading2: false,
        loading3: false
      }
    }
})
```
效果如下：

<ClientOnly>
<button-demos-3></button-demos-3>
</ClientOnly>

