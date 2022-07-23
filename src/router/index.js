import one from '@/components/Header/one.vue'
import two from '@/components/Header/two.vue'
import three from '@/components/Header/three.vue'
import four from '@/components/Tbody/four.vue'
import five from '@/components/Tbody/five.vue'
import six from '@/components/Tbody/six.vue'
import seven from '@/components/Footer/seven.vue'
import eigth from '@/components/Footer/eigth.vue'
import nine from '@/components/Footer/nine.vue'
export default [
  {
    path:'/',
    redirect:'/two',
  },
  {
    path:'/one',
    component:one,
    
  },
  {
    path:'/two',
    component:two,
    children:[
      {
        path:'four',
        component:four,
      },
      {
        path:'five',
        component:five,
      },
      {
        path:'six',
        component:six,
        children:[
          {
            name:'seven',
            path:'seven',
            component:seven,
          },
          {
            name:'eigth',
            path:'eigth',
            component:eigth
          },
          {
            name:'nine',
            path:'nine',
            component:nine
          }
        ]
      }
    ]
  },
  {
    path:'/three',
    component:three,
  },
]