<template>
  <div>
    <g-layout style="height: 15vh;">
      <g-sider style="width: 15vh;">sider</g-sider>
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-content": Content,
    "g-footer": Footer,
    "g-sider": Sider
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: rgb(0, 255, 191);
}
.content {
  background: rgb(162, 0, 255);
}
.footer {
  background: rgb(0, 255, 255);
}
.sider {
  background: rgb(255, 0, 221);
}
</style> 