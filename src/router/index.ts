import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router';
import  store from '../store/index';

Vue.use(VueRouter);

const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  const auth = store.getters["app/isAuthenticated"]
  console.log(auth);
  if (auth===false && from.name==="login" && to.name === "registerUser") {
    next();   
  }
  else if(auth===false &&  to.name !== "login") {
    next("/login");   
  }
  else  {
    console.log(from.name);
    console.log(to.name);
    next();   
  }
});
router.afterEach((to) => {
});