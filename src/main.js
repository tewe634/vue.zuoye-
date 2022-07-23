import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
import routes from './router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
 return VueRouterPush.call(this, to).catch((err) => err)
}
new Vue({
router,
  render: h => h(App),
}).$mount('#app')
