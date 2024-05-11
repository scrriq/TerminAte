
import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        }
    ]
})


export default router