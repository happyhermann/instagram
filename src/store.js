import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
    };
  },
  mutations: {
    // state 수정방법 정의하는 곳
    // 변경하는 법을 미리 여기에 정의를 하자

    이름변경(state) {
      // state는 저 위에 있는 state를 의미한다.
      state.name = "park";
    },
    나이더하기(state, data) {
      state.age += data;
    },
    좋아요(state) {
      console.log(state);
      if (state.좋아요눌렀니 == false) {
        state.likes++;
        state.좋아요눌렀니 = true;
      } else {
        state.likes--;
        state.좋아요눌렀니 = false;
      }
    },
  },
});

export default store;
