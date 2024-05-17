
<script setup>
import {ref} from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {useAuthStore} from '../stores/auth';
import Message from 'primevue/message';
import Loader from '@/components/Loader.vue'

const authStore = useAuthStore();

const email = ref();
const password = ref();

const signup = async () => {
    await authStore.signup({email: email.value, password: password.value})
}


</script>




<template>
    <div class="main">
        <h2>Sign up</h2>
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
                <Button label="Signup" @click="signup"/>
                <span>Are you already registred? <router-link to="/signin">Sign in</router-link></span>
            </div>
        </form>
    </div>
</template>


<style>
.main{
    width: 100%;
    height: 100%;
}
</style>