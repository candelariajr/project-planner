import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
console.log("MAIN.JS!!");
createApp(App).use(router).mount('#app')
// Import the ability to createApp (make a new Vue instance)
// Get the root/common container called 'App'
// Import the router (specifying the different routes as well as the base route)
// Render the app in the mounting container in index.html
