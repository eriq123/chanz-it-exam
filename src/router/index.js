import Vue from "vue";
import VueRouter from "vue-router";
import exam1 from "../views/exam1.vue";
import exam2 from "../views/exam2.vue";
import exam3 from "../views/exam3.vue";

Vue.use(VueRouter);

const routes = [
  
  { path: '/', redirect: '/exam/1' },
  {
    path: "/exam/1",
    name: "exam1",
    component: exam1
  },
  {
    path: "/exam/2",
    name: "exam2",
    component: exam2
  },
  {
    path: "/exam/3",
    name: "exam3",
    component: exam3
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
