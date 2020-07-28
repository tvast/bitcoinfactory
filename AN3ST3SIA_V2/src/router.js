import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

// import starter from './pages/StarterPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: () => import('./pages/Login.vue') },
        { path: 'landing', component: () => import('./pages/Index.vue') },
        { path: 'profile', component: () => import('./pages/Profile.vue') },

        { path: '', component: () => import('./pages/Index.vue') },
        {
          path: '/home', component: () => import('./pages/StarterPage.vue')
        },

        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
