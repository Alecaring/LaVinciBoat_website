import { createRouter, createWebHistory } from 'vue-router';
import AppAbout from './components/_Pages/AppAbout.vue';
import HomePage from './components/_Pages/HomePage.vue';
import AppContact from './components/_Pages/AppContact.vue';
import AppPortfolio from './components/_Pages/AppPortfolio.vue';


const routes = [

  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AppAbout,
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: AppContact,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: AppPortfolio,
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {router};
