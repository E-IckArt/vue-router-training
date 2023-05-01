import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'


const routes = [
    {path: '/', name: 'home', component: Home},
    {
        path: '/protected',
        name: 'protected',
        component: () => import('@/views/Protected.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: (route: { params: { id: string } }) => ({...route.params, id: parseInt(route.params.id)}),
        beforeEnter(to: { params: { id: string }; path: string; query: any; hash: any }, from: any) {
            const exists = sourceData.destinations.find(
                destination => destination.id === parseInt(to.params.id)
            )
            if (!exists) return {
                name: 'NotFound',
                params: {pathMatch: to.path.split('/').slice(1)},
                query: to.query,
                hash: to.hash,
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: (route: { params: { id: string } }) => ({...route.params, id: parseInt(route.params.id)})
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/NotFound.vue'),
    }

]

const router = createRouter({
    end: undefined, sensitive: undefined, strict: undefined,
    history: createWebHistory(import.meta.env.BASE_URL),
    //linkActiveClass: "active", // Usefull to custom active link Classname
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0, behavior: 'smooth'}), 300)
        })
    }
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !window.user) {
        // Need to login if not already logged in
        return { name: 'login' }
    }
})
export default router
