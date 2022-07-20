import Vue from 'vue'
import App from './App.vue'
import {Form,FormItem,Input,Button,Table,TableColumn,Popover,Tag} from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tag)
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
