import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import SearchForFood from "./components/SearchForFood.vue";
import SingleRecipe from "./components/SingleRecipe.vue";

import "./assets/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: SearchForFood },
    { path: "/recipe", name: "recipe", component: SingleRecipe },
  ],
});
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
