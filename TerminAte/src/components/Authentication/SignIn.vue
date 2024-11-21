
<script setup>
import {ref} from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import Message from 'primevue/message';
import Loader from '@/components/Loader.vue';

const authStore = useAuthStore();
const router = useRouter();

const email = ref();
const password = ref();

const signin = async () => {
    await authStore.auth({email: email.value, password: password.value}, "signin")
    router.push('/dictionary')    
}


</script>




<template>
    <div class="main">
        <button class="goHome"><router-link class="linkHome" to="/">Home</router-link></button>
        <h2>Sign in</h2>
        <form class="flex flex-column gap-3">
            <Message v-if = "authStore.error" severity="error">{{ authStore.error }}</Message>
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <InputText type="email" v-model="email" placeholder="Your Email"/>
            </div>
            <div class="p-inputgroup flex-1">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-at"></i>
                </span>
                <InputText type="password" v-model="password" placeholder="Password"/>
            </div>
            <Loader v-if="authStore.loader"/>
            <div v-else class="flex flex-column gap-3">
                <Button label="Signin" @click="signin"/>
                <span>Are you not registred yet? <router-link to="/signup">Sign up</router-link></span>
            </div>
        </form>
    </div>
</template>


<style scoped>
.goHome{
    width: 200px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #FFB800;
    margin: 20px 0px 200px 0px;
    .linkHome{
        color: white;
        text-decoration: none;
        font-size: 24px;    
    }
}
.main{
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>