import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component:NotFound
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// const ifAuthenticated = (to, from, next) => {
//   if (localStorage.getItem('token_habitica_session_c')) {
//     next();
//     return;
//   }
//   router.push({ 
//     name: 'Home',
//     // params: {
//     //   returnTo: to.path,
//     //   query: to.query,
//     // },
//   });
//  };
export default router