
import { createWebHistory, createRouter } from "vue-router";
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import Cars from '../components/Cars.vue'
import AppDefault from "@/components/AppDefault.vue";
import { useAuthStore } from "@/stores/auth";
import AppDictionary from "@/components/AppDictionary.vue";

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
            path: '/dictionary',
            name: 'AppDictionary',
            component: AppDictionary,
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
        next('/dictionary')
    }
    else{
        next()
    }
})


export default router