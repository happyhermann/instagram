<template lang="">
  <div>
    <Post
      :인스타데이터="인스타데이터[i]"
      v-for="(a, i) in 인스타데이터"
      :key="i"
    />
  </div>
</template>
<script>
import Post from "./Post.vue";

export default {
  components: {
    Post,
  },
  props: {
    인스타데이터: Array,
  },
};
</script>
<style lang=""></style>
