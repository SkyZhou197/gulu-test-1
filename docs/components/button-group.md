---
title: ButtonGroup
---
# 组合按钮
按钮的组合能够胜任更复杂的设计。

## 默认按钮
:::tip 提示 
组合按钮组件 (button-group.vue) 的子元素必须都是 button，所以我们使用时要同时引入按钮组件(button.vue)
:::
```html
<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>首页</g-button>
    <g-button icon="right" iconPosition="right">下一页</g-button>
</g-button-group>
```
效果如下：

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>