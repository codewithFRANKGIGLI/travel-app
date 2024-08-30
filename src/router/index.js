import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DayDetails from '../components/DayDetails.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/day/:id',
        name: 'day-details',
        component: DayDetails,
        props: true // Passa i parametri della route come props al componente
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
