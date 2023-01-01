import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

let emitter = mitt();
let app = createApp(App);

app.config.globalProperties.emitter = emitter;
// 글로벌한 변수보관함에 {emitter : emitter}를 추가한 것

import store from "./store.js";

app.use(store).mount("#app");

// 자주 쓰는 라이브러리는 여기에다 등록하라 ex) axios도 여기에
