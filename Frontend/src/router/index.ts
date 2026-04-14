import { createRouter, createWebHistory } from "vue-router";

// import หน้า
import Home from "../Views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/item/:id",
      name: "Detail",
      component: () => import("../Views/Detail.vue"),
    },
  ],
});

export default router;
