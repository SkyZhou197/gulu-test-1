---
title: Grid
---

# 网格
网格常用用于区块划分
## 24 格网格

网格系统把一行分为 24 格，你可以通过设置每一列的 **span** 属性来控制它的宽度。

span 的总和必须为 24。

```html
<g-row>
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
  <g-col span="8">
    <div class="col-two">8</div>
  </g-col>
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
</g-row>
<br />
<g-row>
  <g-col span="6">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-two">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-two">6</div>
  </g-col>
</g-row>
```
预览如下:
<ClientOnly>
<grid-d-1></grid-d-1>
</ClientOnly>

## 设置间距

可以在 Row 上设置 gutter，单位为像素 px，表示其包含的所有列的间隙。

```html
<g-row gutter="12">
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
  <g-col span="8">
    <div class="col-two">8</div>
  </g-col>
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
</g-row>
<br />
<g-row gutter="5">
  <g-col span="6">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-two">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="6">
    <div class="col-two">6</div>
  </g-col>
</g-row>
```
预览如下:
<ClientOnly>
<grid-d-2></grid-d-2>
</ClientOnly>

## 设置偏移

与 gutter 不同，offset 属性只能被 Col 接受，与 span 并存。offset 表示该列向右偏移的格子数，所有的 span 和 offset 的和必须为 24。

```html
<g-row>
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="col-two">8</div>
  </g-col>
  <g-col span="8">
    <div class="col-one">8</div>
  </g-col>
</g-row>
<br />
<g-row>
  <g-col span="6">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="3" offset="3">
    <div class="col-two">6</div>
  </g-col>
  <g-col span="4" offset="2">
    <div class="col-one">6</div>
  </g-col>
  <g-col span="2" offset="4">
    <div class="col-two">6</div>
  </g-col>
</g-row>
```
预览如下:
<ClientOnly>
<grid-d-3></grid-d-3>
</ClientOnly>
