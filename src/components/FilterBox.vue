<template lang="">
  <div
    v-for="(a, i) in 필터"
    :key="i"
    class="filter-item"
    :class="`${a}`"
    :style="`background-image:url(${this.이미지})`"
  ></div>
  <!-- 동적인 className v-for로 바인딩 성공ㄴ -->
</template>
<script>
export default {
  name: "filterBox",

  data() {
    return {};
  },
  props: {
    이미지: String,
    필터: Array,
  },
  created() {},
};
</script>
<style lang="scss" scope>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
