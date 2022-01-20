import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("/@/components/HomePage.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("/@/components/AboutPage.vue"),
  }, // Lazy load route component
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
