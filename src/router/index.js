import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'

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
]

export default new VueRouter({
  routes, // short for `routes: routes`
})
