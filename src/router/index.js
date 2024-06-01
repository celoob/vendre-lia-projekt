import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/page1', name: 'Page1', component: Page1 },
  { path: '/page2', name: 'Page2', component: Page2 }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  // prevent skipping when changing pages (doesnt work in the browser inspector)
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: window.scrollX, top: window.scrollY };
    }
  }
});

export default router;
