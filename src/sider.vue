<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <g-button @click="visible=false">关闭</g-button>
    </div>
  </transition>
</template>
<script>
import Button from "./button";
export default {
  name: "GuluSider",
  data() {
    return {
      visible: true
    };
  },
  methods: {},
  components: {
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>