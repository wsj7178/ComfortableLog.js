import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import WaitForConnection from '../views/WaitForConnection.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'WaitForConnection',
    component: WaitForConnection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
