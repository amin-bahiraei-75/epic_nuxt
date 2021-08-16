import Vue from "vue";
import VueRouter from "vue-router";

import Pages from "@/pages";
import Home from "@/pages/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: Pages,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  }
]

export function createRouter() {
  return new VueRouter({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    },
    routes: routes

  });
}
