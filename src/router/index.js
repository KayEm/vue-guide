import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '@/components/Introduction'
import Essentials from '@/components/Essentials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/essentials',
      name: 'Essentials',
      component: Essentials
    }
  ]
})
