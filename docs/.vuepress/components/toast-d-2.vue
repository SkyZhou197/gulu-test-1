<template>
  <div>
    <g-button @click="onClickButton">上方弹出</g-button>
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
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>