---
title: Toast
---

# Toast
吐司组件，设置弹出信息的组件
## $toast
toast 组件接受的所有属性，都通过插件引入的存在于 Vue实例中的 $toast 方法来传递。

该方法接受两个参数， message 为提示内容，toastOptions 为对 toast 组件的所有可操作选项集合。
## 默认
:::tip 基本属性
* autoClose ：必须是数字，表示 toast 自动关闭的时间(秒)。默认为3秒。
* enableHtml ：是否支持提示内容中识别并展示 html标签。默认为 false。
* position ：提示信息位置。可以设置为 top / middle / bottom。默认为 top。
:::
```html
<g-button @click="$toast('点击弹出提示')">展示顶部</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">展示中间</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">展示底部</g-button>
```
预览：

<ClientOnly>
<toast-d-1></toast-d-1>
</ClientOnly>

## 设置关闭
toastOptions 中可以传入一个 closeButton 属性，该属性是一个对象。默认包含两个 key-value 对，分别为 text:"关闭" 和 一个空的回调函数。
```html
<g-button @click="onClickButton">明天天气</g-button>
```
```js
 methods: {
    onClickButton() {
      this.$toast("明天要下雨", {
        closeButton: {
          text: "关闭",
          callback: () => {
          }
        }
      });
    }
  }
```
预览:

<ClientOnly>
<toast-d-2></toast-d-2>
</ClientOnly>

## 支持 HTMl
通过更改 enableHtml 属性的值来支持HTML。

```html
 <g-button @click="onClickButton">明天天气</g-button>
 ```
 ```js
 methods: {
    onClickButton() {
      this.$toast("<strong>明天要下雨</strong>", {
        enableHtml: true,
        closeButton: {
          text: "关闭",
          callback: () => {}
        }
      });
    }
  }
 ```
预览:

 <ClientOnly>
<toast-d-3></toast-d-3>
</ClientOnly>
