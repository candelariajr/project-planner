import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from "@/views/AddProject";
import Edit from "@/views/Edit";

const routes = [
  {
    //on loading the app this is where the first place directs to.
    //Note: It loads App.vue THEN Home.
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Add this to enable the route to the AddProject form view
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: Edit,
    //allows access to parameters fed to this component/view
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
