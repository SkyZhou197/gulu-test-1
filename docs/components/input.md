---
title: Input
---
# 输入框
用来获取用户输入信息的组件
## 默认样式
文本输入框 默认样式有 **hover** 和 **focus** 的状态。
```html
<g-input></g-input>
```
效果如下：

<ClientOnly>
<input-d-1></input-d-1>
</ClientOnly>

## 常用属性
文本输入框 接受几种常用属性。

1. value ：输入框内的默认文字。
2. disabled ：是否可选中。
3. readonly ：是否只读。
```html
<g-input value="默认"></g-input>
<g-input value="不可选" disabled></g-input>
<g-input value="只读" readonly></g-input>
```
效果如下：

<ClientOnly>
<input-d-2></input-d-2>
</ClientOnly>

## 提示信息
文本输入框可以接受 **error** 来设置错误提示信息
```html
<g-input value="错误提示" error="密码不能少于八位"></g-input>

```
效果如下：

<ClientOnly>
<input-d-3></input-d-3>
</ClientOnly>


