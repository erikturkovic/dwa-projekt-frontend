import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Ponude.vue";
import Profil from "../views/Profil.vue";
import { Auth } from "@/services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ponude",
    name: "ponude",
    component: HomeView,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const javneStranice = ["/login", "/register"];
  const loginTreba = !javneStranice.includes(to.path);
  const korisnikData = Auth.getkorisnikData();

  if (loginTreba && !korisnikData) {
    next("/login");
    return;
  }
  next();
});

export default router;
