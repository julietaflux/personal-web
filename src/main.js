import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Music from "./views/Music.vue";
import "./index.css";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/music",
    component: Music,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
