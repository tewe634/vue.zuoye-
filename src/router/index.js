import Home from '../components/Home.vue';
import Sort from '../components/Sort.vue';
import Order from '../components/Sort.vue';
import My from '../components/Mys.vue';
import Homes from '../view/Homes.vue'
import GameHome from '../view/GameHome.vue'
import MeetHome from '../view/MeetHome.vue'
export default  [
    {
        path:'/',
        redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      children: [
        {
          path: '/',
          redirect:'/home/gamehome'
        },
        {
          path: 'homes',
          component:Homes,
        },
        {
          path: 'gamehome',
          component:GameHome,
        },
        {
          path: 'meethome',
          component:MeetHome,
        }
      ]
    },
    {
      path:'/sort',
      component:Sort
    },
    {
      path:'/order',
      component:Order,
    }, 
    {
      path:'/mys',
      component:My,
    }
]