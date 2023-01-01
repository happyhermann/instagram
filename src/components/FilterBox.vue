<template lang="">
  <div
    @click="fire"
    :class="필터"
    class="filter-item"
    :style="`background-image:url(${this.이미지})`"
  >
    <!-- <slot>
    </slot> -->
    <button @click="fire">버튼</button>
  </div>
</template>
<script>
export default {
  name: "filterBox",

  methods: {
    fire() {
      this.emitter.emit("박스클릭함", this.필터);
      // mitt로 데이터 전송하는 법
      // 1. this.emitter.emit()으로 발사하고
      // 2. this.emitter.on()으로 수신하면 된다.
    },
  },

  data() {
    return {};
  },
  props: {
    이미지: String,
    필터: String,
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
