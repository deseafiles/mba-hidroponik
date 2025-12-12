import CaraKami from "@/components/CaraKami.vue";
import Homepage from "@/components/Homepage.vue";
import Product from "@/components/Product.vue";
import TentangKami from "@/components/TentangKami.vue";
import Testimoni from "@/components/Testimoni.vue";
import AboutMe from "@/components/AboutMe.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: Homepage,
    component: Homepage
  },
  {
    path: '/tentang-kami',
    name: TentangKami,
    component: TentangKami
  },
  {
    path: '/cara-kami',
    name: CaraKami,
    component: CaraKami
  },
  {
    path: '/produk-kami',
    name: Product,
    component: Product
  },
  {
    path: '/testimoni',
    name: Testimoni,
    component: Testimoni
  },
  {
    path: '/about-me',
    name: AboutMe,
    component: AboutMe
  },
]

export { routes }
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
