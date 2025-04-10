import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { icon: "mdi-home" },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/projects",
      meta: { icon: "mdi-format-list-bulleted" },
      name: "Projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      path: "/tasks",
      meta: { icon: "mdi-checkbox-marked-outline" },
      name: "Tasks",
      component: () => import("@/views/TasksView.vue"),
    },
    {
      path: "/flow",
      meta: { icon: "mdi-sitemap" },
      name: "Flow",
      component: () => import("@/views/FlowView.vue"),
    },
    {
      path: "/widgets",
      meta: { icon: "mdi-view-dashboard" },
      name: "Widgets",
      component: () => import("@/views/WidgetsView.vue"),
    },
  ],
});

export default router;
