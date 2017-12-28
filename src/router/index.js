import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '@/components/Introduction'
import Template from '@/components/Template'
import PropsWatchers from '@/components/PropsWatchers'
import ClassStyleBindings from '@/components/ClassStyleBindings'

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
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/propswatchers',
      name: 'PropsWatchers',
      component: PropsWatchers
    },
    {
      path: '/classstylebindings',
      name: 'ClassStyleBindings',
      component: ClassStyleBindings
    }
  ]
})
