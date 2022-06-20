import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }, {
    path: '/connect',
    name: 'connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Connection.vue')
=======
>>>>>>> 07e1dd531cf67143646daf4adf3125b04818ace6
>>>>>>> 94e719961f743980b46948d54a1c2e7dc23bbd44
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  },
  {
    path: '/clients',
    name: 'clients',

    component: () => import( '../views/ClientsView.vue')
=======
>>>>>>> 07e1dd531cf67143646daf4adf3125b04818ace6
>>>>>>> 94e719961f743980b46948d54a1c2e7dc23bbd44
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
