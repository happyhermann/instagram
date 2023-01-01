<template lang="">
  <div>
    <div v-if="step == 0">
      <!-- Vue 3버전부턴 v-if와 v-for 한곳에 못 씀 -->
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="선택한필터"
        class="upload-image"
        :style="`background-image: url(${이미지}) `"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="필터 in 필터들"
          :key="필터"
          :이미지="이미지"
          :필터="필터"
        >
          {{ 필터 }}
          <!-- slot으로 부모 => 자식 데이터 전송 쉽게 가능 -->
          <!-- 1. 자식은 구멍 뚫기 -->
          <!-- 2. <컴포넌트> 태그사이에 데이터 넣기 -->
        </FilterBox>

        <!-- ** slot은 html 태그내에 데이터 바인딩할때만 쓸 수 있음 
          slot은 HTML 태그기 때문에 HTML 태그처럼만 사용가능합니다. 


        -->
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :style="`background-image: url(${이미지}) `"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
        <!-- textarea에 누군가가 입력할때마다 이벤트가 실행되도록 @Input을 달아놓음 -->
        <!-- write라고 작명해서 emit으로 부모에게 보냄 -->
        <!-- 커스텀 이벤트 문법 -->
write!</textarea
        >
      </div>
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  data() {
    return {
      inputText: "",
      필터들: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      선택한필터: "",
    };
  },

  components: {
    Post,
    FilterBox,
  },
  props: {
    게시물: Array,
    step: Number,
    이미지: String,

    // 다양한 컴포넌트를 다루는 중요한 데이터는 App.vue에 저장하는게 맞음
  },
  created() {
    console.log(this.필터);
  },
  mounted() {
    this.emitter.on("박스클릭함", (a) => {
      this.선택한필터 = a;
    });
  },
};
</script>
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
