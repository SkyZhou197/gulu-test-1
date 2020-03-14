<template>
  <div>
    <g-collapse :selected.sync="selectedTabs">
      <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
      <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
      <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Vue from "vue";
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  },
  data() {
    return {
      selectedTabs: ["one", "two"]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>