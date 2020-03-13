<template>
  <div>
    <g-input value="默认"></g-input>
    <g-input value="不可选" disabled></g-input>
    <g-input value="只读" readonly></g-input>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  }
};
</script>
