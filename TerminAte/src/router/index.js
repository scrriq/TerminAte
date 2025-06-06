
import { createWebHistory, createRouter } from "vue-router";
import SignUp from '@/components/Authentication/SignUp.vue'
import SignIn from '@/components/Authentication/SignIn.vue'
import AppDefault from "@/components/AppDefault.vue";
import { useAuthStore } from "@/stores/auth";
import AppDictionary from "@/components/AppDictionary/AppDictionary.vue";
import AppCards from "@/components/AppCard/AppCards.vue";
import AppAccount from "@/components/Account/AppAccount.vue";

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
            path: '/cards',
            name: 'AppCards',
            component: AppCards,
            meta:{
                auth: true
            }
        }, 
        {
            path: '/account',
            name: 'account',
            component: AppAccount,
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