import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: "/restaurateur",
    alias: "/menu",
    name: "menu",
    component: () => import("../views/Restaurateur.vue")
  },
  {
    path: "/restaurateur/displaymenu",
    alias: "/menu",
    name: "menu",
    component: () => import("../components/MenuList.vue")
  },
  {
    path: "/restaurateur/addmenu",
    name: "addmenu",
    component: () => import("../components/MenuAdd.vue")
  },
  {
    path: "/restaurateur/addarticle",
    name: "addarticle",
    //params: true,
    component: () => import("../components/ArticleAdd.vue")
  },
  {
    path: "/restaurateur/displayarticle",
    name: "article",
    //params: true,
    component: () => import("../components/ArticleList.vue")
  },
  {
    path: "/restaurateur/articleofmenu/",
    name: "articleofmenu",
    //params: true,
    component: () => import("../components/ArticlesOfMenu.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
