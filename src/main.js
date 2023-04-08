import "@/assets/bootstrap.bundle.min.js";
import "@/assets/bootstrap.min.css";
import "@/assets/custom_styles.css";
import "material-icons/iconfont/material-icons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
