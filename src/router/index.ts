import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({id: parseInt(route.params.id)})
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //linkActiveClass: "active", // Usefull to custom active link Classname
    routes
})

export default router
