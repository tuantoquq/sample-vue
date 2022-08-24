import { createRouter, createWebHistory } from 'vue-router';
import EventsView from '../views/EventsView.vue';
import EventDetails from '../views/EventDetails.vue';
import About from '../views/AboutView.vue';

const routes = [
  {
    path: '/events',
    name: 'EventsView',
    component: EventsView,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
