<template>
  <div>
    <g-button @click="showToast1">展示顶部</g-button>
    <g-button @click="showToast2">展示中间</g-button>
    <g-button @click="showToast3">展示底部</g-button>
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
  },
  methods: {
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast(
        `你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,
        {
          position,
          enableHtml: false,
          closeButton: {
            text: "已充值",
            callback() {
              console.log("他说已经充值智商了");
            }
          },
          autoClose: 3
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>