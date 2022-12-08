/* eslint-disable */

<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :인스타데이터="인스타데이터" :step="step" :이미지="이미지" />
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
axios.get();

export default {
  name: "App",
  components: {
    Container,
  },

  data() {
    return {
      인스타데이터: instaData,
      step: 0,
      // 현재 페이지 상태
      이미지: "",
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
    more() {
      console.log(this.clicked);

      axios
        .get(`https://codingapple1.github.io/vue/more${this.clicked}.json`)
        .then((결과) => {
          // 요청성공시 실행할 코드
          console.log(결과.data);
          this.인스타데이터.push(결과.data);
        });
      // 일반 함수보다 화살표 함수를 쓰는 이유 : 화살표 함수를 쓰면 this가 재정의되는 것을 막을 수 있음
      // 바깥에 this를 그대로 씀
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
