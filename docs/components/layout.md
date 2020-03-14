---
title: Layout 
---

# 布局
布局组件可以快速完成页面的布局
:::tip 默认布局组件共分为五部分：
* g-layout ：布局框架
* g-header ：头部
* g-sider ：滑层
* g-content ：主要内容部分
* g-footer ：尾部
:::
## 默认样式
默认不使用滑层，呈上中下布局。

```html
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-content style="height: 100px; background:deepskyblue;">content</g-content>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
```

效果如下:

<ClientOnly>
<layout-d-1></layout-d-1>
</ClientOnly>

## 外部滑层布局
相当于默认布局旁加上了一个滑层。
```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style="height: 200px; background:#ddd; width:200px; color: black;">sider</g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">header</g-header>
    <g-content style="height: 100px; background:deepskyblue;">content</g-content>
    <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
  </g-layout>
</g-layout>
```
效果如下:
<ClientOnly>
<layout-d-2></layout-d-2>
</ClientOnly>

## 内部滑层布局
滑层位于主要内容区域旁，头尾区域之间。
```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">header</g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</g-sider>
    <g-content style="height: 100px; background:deepskyblue;">content</g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
</g-layout>
```
效果如下:
<ClientOnly>
<layout-d-3></layout-d-3>
</ClientOnly>
