<template>
  <div>
    <g-button @click="$toast('点击弹出提示')">展示顶部</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">展示中间</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">展示底部</g-button>
  </div>
</template>

<script>
import Vue from "vue";
import Button from "../../../src/button";
import Toast from "../../../src/toast";
import plugin from "../../../src/plugin.js";
Vue.use(plugin);

export default {
  components: {
    "g-button": Button,
    "g-toast": Toast
  }
};
</script>

