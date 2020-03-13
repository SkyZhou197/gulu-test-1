<template>
  <div>
    <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
    <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
    <g-button icon-position="right" :loading="loading3" @click="loading3 = !loading3">按钮</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      loading1: true,
      loading2: false,
      loading3: false
    };
  }
};
</script>
