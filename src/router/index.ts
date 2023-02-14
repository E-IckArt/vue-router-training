import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)})
    },
    {
        path: '/destination/:id/:slug/:experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id), experienceSlug: true})
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //linkActiveClass: "active", // Usefull to custom active link Classname
    routes
})

export default router
