import Vue from "vue";
import VueRouter from "vue-router";
import MovieView from "../views/MovieView.vue";
import RandomView from "../views/RandomView.vue";
import WatchListView from "../views/WatchListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/movies",
    name: "movies",
    component: MovieView,
  },
  {
    path: "/random",
    name: "random",
    component: RandomView,
  },
  {
    path: "/watch",
    name: "watch",
    component: WatchListView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
