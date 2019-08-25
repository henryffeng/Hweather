import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hweather from '@/components/Hweather'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hweather',
      component: Hweather
    }
  ]
})
