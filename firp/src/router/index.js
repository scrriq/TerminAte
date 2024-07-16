
import { createWebHistory, createRouter } from "vue-router";
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Cars from '../components/Cars.vue'
import AppDefault from "@/components/AppDefault.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
    history: createWebHistory(import.meta.env),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppDefault,
            meta:{
                auth: false
            }
        },
        {
            path: '/cars',
            name: 'cars',
            component: Cars,
            meta:{
                auth: true
            }
        }, 
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
            meta:{
                auth: false
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn,
            meta:{
                auth: false
            }
        },         
        
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if(to.meta.auth && !authStore.userInfo.token){
        next('/signin')
    } 
    else if(!to.meta.auth && authStore.userInfo.token) {
        next('/cars')
    }
    else{
        next()
    }
})


export default router