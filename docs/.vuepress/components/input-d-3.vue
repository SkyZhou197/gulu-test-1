<template>
  <div>
    <g-input value="错误提示" error="密码不能少于八位"></g-input>
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
