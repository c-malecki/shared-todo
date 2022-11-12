import { createRouter, createWebHistory } from "vue-router";
import { useAppStore } from "@/stores/app";
import Login from "../views/Login/Login.vue";
import Home from "../views/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});

router.beforeEach((to, from) => {
  const store = useAppStore();
  if (!store.user && to.name !== "Login") {
    return { name: "Login" };
  }
  if (store.user && to.name === "Login") {
    return { name: "Home" };
  }
});

export default router;
