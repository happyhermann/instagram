/* eslint-disable */

<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step = step + 1">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
      <!-- 발행 버튼 -->
      <!-- 스텝2에선 발행 버튼이 되어야함 -->
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    @write="작성한글 = $event"
    :게시물="게시물"
    :step="step"
    :이미지="이미지"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- 이미지 업로드한 걸 HTML에 보여주려면? -->

  <!-- 1. FileReader() : 파일을 글자로 변환해줌
       2. URL.createObjectURL() : 이미지의 가상 URL을 생성해줌   
  -->
</template>

<script>
import Container from "./components/Container.vue";
import instaData from "./data.js";

import axios from "axios";

export default {
  name: "App",
  components: {
    Container,
  },

  data() {
    return {
      게시물: instaData,
      // = 게시물
      더보기: 0,

      step: 0,
      // 현재 페이지 상태
      이미지: "",
      작성한글: "",
    };
  },
  methods: {
    clickTab(num) {
      if (num === 1) {
        this.openTab = 1;
      } else if (num === 2) {
        this.openTab = 2;
      } else {
        this.openTab = 3;
      }
    },

    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      console.log(url);

      this.이미지 = url;

      this.step++;
    },
    publish() {
      // 발행버튼 누르면
      // this.게시물에 {내가 쓴거} 밀어넣기

      var 내게시물 = {
        name: "이치윤",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 36,
        data: "May 15",
        liked: false,
        content: this.작성한글,
        // Container.vue에서 <textrea/>에서 작성한글이 여기에 꽂혀야함

        // 하위 => 상위로 데이터 전달하는 것 => custom event
        filter: "perpetua",
      };
      this.게시물.unshift(내게시물);
      // arr 맨 앞에 밀어넣기
      this.step = 0;
      // 메인페이지로 돌아가게
    },
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((결과) => {
          this.게시물.push(결과.data);
          this.더보기++;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
