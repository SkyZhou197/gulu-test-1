---
title: Collapse
---
# 手风琴组件
手风琴组件(collapse)，类似手风琴样式来展示内容。
## 使用
:::tip 提示
g-collapse 必须包裹 g-collapse-item
:::
g-collapse-item 必须接受：
* **title** 属性，内容为 标题内容。
* **name** 属性，表示标题的名字，用于切换和默认选取功能。

g-collapse 必须接受:
* **selected** 属性，该属性为一个数组，其中的元素为需要默认展开的标题名字。
## 多项展示
默认可以展开/关闭**所有项**。
```html
<g-collapse :selected.sync="selectedTabs">
    <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
</g-collapse>
```
预览如下:
<ClientOnly>
<collapse-d-1></collapse-d-1>
</ClientOnly>

## 单项展示
collapse 可以接受一个 **single** 属性，表示将只有一项可以作为展示项。默认为 **false**。

```html
<g-collapse :selected.sync="selectedTabs" single>
    <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
</g-collapse>
```
预览如下:
<ClientOnly>
<collapse-d-2></collapse-d-2>
</ClientOnly>
