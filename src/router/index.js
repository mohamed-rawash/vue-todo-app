import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "show-todos",
    meta: {
      title: "Shaow Todos",
    },
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
