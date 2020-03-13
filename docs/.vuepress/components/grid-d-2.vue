<template>
  <div>
    <g-row gutter="10">
      <g-col span="8">
        <div class="col-one">8</div>
      </g-col>
      <g-col span="8">
        <div class="col-two">8</div>
      </g-col>
      <g-col span="8">
        <div class="col-one">8</div>
      </g-col>
    </g-row>
    <br />
    <g-row gutter="10">
      <g-col span="6">
        <div class="col-one">6</div>
      </g-col>
      <g-col span="6">
        <div class="col-two">6</div>
      </g-col>
      <g-col span="6">
        <div class="col-one">6</div>
      </g-col>
      <g-col span="6">
        <div class="col-two">6</div>
      </g-col>
    </g-row>
  </div>
</template>
<script>
import Col from "../../../src/col";
import Row from "../../../src/row";
export default {
  components: {
    "g-col": Col,
    "g-row": Row
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.col-one,
.col-two {
  color: black;
  border: 1px solid grey;
  background: rgba(128, 128, 128, 0.151);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 