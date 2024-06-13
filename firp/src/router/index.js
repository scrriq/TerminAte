
import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Cars from '../components/Cars.vue'

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
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },         
        {
            path: '/cars',
            name: 'cars',
            component: Cars
        }, 
        
    ]
})


export default router