<template>
  <div>
    <g-button @click="onClickButton">明天天气</g-button>
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
      this.$toast("明天要下雨", {
        closeButton: {
          text: "关闭",
          callback: () => {}
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>