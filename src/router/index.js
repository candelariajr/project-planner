import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from "@/views/AddProject";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Add this to enable the route to the AddProject form view
    path: '/add',
    name: 'AddProject',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
