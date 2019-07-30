import Vue from 'vue'
import Router from 'vue-router'
// THIS NAVI
import Navigation from './views/_Navigation.vue';

// BEFORE LOGIN COMPONENT
import Login from './views/Before/Login.vue'
import Register from './views/Before/Register.vue'

// AFTER LOGIN COMPONENTS
import Dashboard from './views/Dashboard/Dashboard.vue'
import History from './views/Dashboard/History.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/navigation',
      component: Navigation,
      children: [
        {
          path: '/navigation/dashboard',
          component: Dashboard
        },
        {
          path: '/navigation/history',
          component: History
        },
      ]
    }
  ]
})
