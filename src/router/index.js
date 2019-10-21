import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Details from '@/components/details'
import qain from '@/components/main'
import Classify from '@/components/classify'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/details',
      component: Details
    },
    {
      path:"/mai",
      component:qain
    },
    {
      path:"/classify",
      component:Classify
    }
  ]
})
