<template>
    <div class="main__account">
        <div class="account__container container">
            <div class="account__prev">
                <div class="account__title">
                    <h2 class="account__title-text">User-profile</h2>
                </div>
                <div class="account__logout">
                    <router-link class="account__logout-link" to="/" v-if="token" @click.prevent="logout"> Logout </router-link>
                </div>
            </div>
            <div class="account__information">
                <app-profile/>
                <app-settings/>
            </div>
        </div>
    </div>

</template>
<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import {computed} from 'vue'
import AppProfile from './AppProfile.vue';
import AppSettings from './AppSettings.vue';

const authStore = useAuthStore()
const token = computed(() => authStore.userInfo.token)

const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}

</script>
<style scoped>

.main__account {
    padding: 30px 0px 0px 150px;
    width: 100%;
    height: 100%;
    /* background-color: #252525; */
}
.container {
    width: 1450px;
    height: 100%;
    margin: 0px auto;
}
.account__prev{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 1fr/ 10fr 1fr;
}


.account__title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .account__title-text{
        font-size: 36px;
        font-weight: 500;
    }

}
.account__logout {
    width: 100%;
    height: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
    >.account__logout-link{
        font-size: 30px;
        color:white;
        text-decoration: none;
    }
}
.account__information {
    width: 100%;
    height: 700px;
    display: grid;
    grid-template: 1fr/1fr 1.7fr; 
    column-gap: 75px;  
}
</style>