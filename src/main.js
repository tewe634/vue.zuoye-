import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// import routes from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/myGoodsList",
    component: MyGoodsList,
  },
  {
    path: "/myGoodsSearch",
    component: MyGoodsSearch,
  },
  {
    path: "/myUserInfo",
    component: MyUserInfo,
  },
];

const router = new VueRouter({
  routes,
});
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
