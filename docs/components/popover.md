---
title: Popover
---

# 弹出层

## 使用
:::tip
1. popover 应当包含一个元素作为触发器，并且弹出消息内容应放在插槽 content 中。
2. 建议配合 按钮组件 来使用该组件。
:::
## 默认样式
popover 组件接受一个 **position** 属性来决定弹出框相对于触发器的位置；有四个可选项：**top、bottom、left、right**。默认为上方 top。
```html
    <g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
```
预览如下:
<ClientOnly>
<popover-d-1></popover-d-1>
</ClientOnly>

## 将触发方式改为 hover
popover 组件还支持设置 **trigger** 属性，有两个值 **click** 和 **hover**。默认为 click。当你设置为 hover 时，鼠标悬浮在触发器上，即可触发弹出层。
:::tip 提示
设置为 hover 时，鼠标无法移入弹出框中
:::

```html
    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">弹出内容</template>
    </g-popover>
```
预览如下:
<ClientOnly>
<popover-d-2></popover-d-2>
</ClientOnly>

## 设置关闭按钮
除了再次点击触发按钮关闭弹出层，你还可以在弹出层中添加一个关闭按钮，并通过解构插槽传出的 **close** 方法来关闭弹出层。
```html
<g-popover>
      <g-button>上方弹出</g-button>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <g-button @click="close">关闭</g-button>
      </template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹出</g-button>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <g-button @click="close">关闭</g-button>
      </template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹出</g-button>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <g-button @click="close">关闭</g-button>
      </template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹出</g-button>
      <template slot="content" slot-scope="{close}">
        弹出内容
        <g-button @click="close">关闭</g-button>
      </template>
    </g-popover>
```
预览如下:

<ClientOnly>
<popover-d-3></popover-d-3>
</ClientOnly>
