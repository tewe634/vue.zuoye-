import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Layout from '@/views/Layout'
import Search from '@/views/Search'
import Home from '@/views/Home'
import Play from '@/views/Play'
const routes = [
  {
    path:'/',
    redirect: '/layout',
  },
  {
    path:'/layout',
    component: Layout,
    redirect:'/layout/home',
    children:[
      
      {
        path:'home',
        component: Home,
        meta:{
          title:'主页'
        }
      },
      {
        path:'search',
        component:Search,
        meta:{
          title:'搜索'
        }
      }
    ]
  },
  {
    path:'/play',
    component: Play,
  }
]
export default new VueRouter({
  routes
})
