---
title: Button
---
# 按钮
按钮，互动功能实现的灵魂。
## 默认按钮
使用默认的 button 样式。
```html
<g-button>默认按钮</g-button>
```
预览如下：

<ClientOnly>
<button-demos-1></button-demos-1>
</ClientOnly>

## 设置icon/iconPosition
icon 目前支持 **right, left, down, setting, download, thumbs-up**

iconPosition 默认的位置在左边，通过设置调整位置：**left** 或 **right**。

```html
<g-button icon="download">下载按钮</g-button>
<g-button icon="thumbs-up" iconPosition="right">点赞按钮</g-button>
```
预览如下：

<ClientOnly>
<button-demos-2></button-demos-2>
</ClientOnly>

## 设置加载动画
 button 可以设置一个加载动画。它接受一个 loading 属性，并且通过组件通信实现动态加载切换。

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
预览如下：

<ClientOnly>
<button-demos-3></button-demos-3>
</ClientOnly>

