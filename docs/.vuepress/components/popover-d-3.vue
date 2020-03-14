<template>
  <div>
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
  </div>
</template>

<script>
import Vue from "vue";
import Popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "g-popover": Popover,
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
</style>