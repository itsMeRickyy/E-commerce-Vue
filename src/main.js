import {createApp} from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/routes";
import {createPinia} from "pinia";
// import {createRouter, createWebHistory} from "vue-router";

// import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
