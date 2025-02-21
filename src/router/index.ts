import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () => import("@/views/TasksView.vue"),
    },
    {
      path: "/flow",
      name: "flow",
      component: () => import("@/views/FlowView.vue"),
    },
  ],
});

export default router;
