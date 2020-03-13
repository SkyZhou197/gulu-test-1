<template>
  <div>
    <g-button icon="download">下载按钮</g-button>
    <g-button icon="thumbs-up" iconPosition="right">点赞按钮</g-button>
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
