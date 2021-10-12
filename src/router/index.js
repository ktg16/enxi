import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Setting from "../views/Setting";
import Study from "../views/Study";
Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/setting", component: Setting },
    { path: "/", redirect: "/home" },
    { path: "/study", component: Study },
  ],
});

export default router;
