import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import todo from '@/components/todo'
import itemlist from '@/components/item-list'
import developers from '@/components/developers'
import wannaGoProto from '@/components/wannaGoProto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: todo
    },
    {
      path: '/item-list',
      name: 'itemlist',
      component: itemlist
    },
    {
      path: '/developers',
      name: 'developers',
      component: developers
    },
    {
      path: '/wannago',
      name: 'wannago',
      component: wannaGoProto
    }
  ]
})
