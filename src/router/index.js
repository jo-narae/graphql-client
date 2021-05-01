import Vue from 'vue'
import VueRouter from 'vue-router'

import Agency from '@/views/Agency'
import Artists from '@/views/Artists'
import ArtistDetail from '@/views/ArtistDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'agency',
    component: Agency,
    props: true
  },
  {
    path: '/artists',
    name: 'artists',
    component: Artists,
    props: true
  },
  {
    path: '/artists/:id',
    name: 'artistDetail',
    component: ArtistDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
