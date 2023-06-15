import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homeView.vue'
import Contact from '../views/contacts-view.vue'
import Reviews from '../views/reviews-view.vue'
import License from '../views/license-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/license',
    name: 'license',
    component: License
  }
]

const router = new VueRouter({
  routes
})

export default router
