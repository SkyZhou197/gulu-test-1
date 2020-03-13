---
title: ButtonGroup
---# 组合按钮

## 默认按钮
:::tip 提示 
组合按钮组件 (button-group.vue) 的子元素必须都是 button，如果你想使用它，请最好同时引入按钮组件 (button.vue)。这里也会使用两种组件一起使用的示例，因为它们搭配起来效果更佳。
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