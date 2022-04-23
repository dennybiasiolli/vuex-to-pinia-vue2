import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'
import Counter from '@/components/Counter.vue'
import TodoList from '@/components/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld,
    props: { msg: 'Welcome to Your Vue.js App' },
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/counter',
    component: Counter,
  },
  {
    path: '/todo-list',
    component: TodoList,
  },
]

export default new VueRouter({
  routes, // short for `routes: routes`
})
