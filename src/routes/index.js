import Contact from "@/components/Contact.vue";
import Homepage from "@/components/Homepage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: Homepage,
    component: Homepage
  },
  {
    path: '/contact',
    name: Contact,
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
