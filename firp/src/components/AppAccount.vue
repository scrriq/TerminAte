<template>
    <div class="main__account">
        <div class="account__container container">
            <div class="account__block">
                <div class="account__logout">
                    <router-link class="account__logout-link" to="/" v-if="token" @click.prevent="logout"> Logout </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import {computed} from 'vue'

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
    padding: 30px 0px 0px 225px;
    width: 100%;
    height: 100%;
}
.container {
    width: 1200px;
    height: 100%;
    margin: 0px auto;
}
.account__block{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}
.account__logout {
    width: 155px;
    height: 100px;
    border: 5px solid white;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    >.account__logout-link{
        font-size: 30px;
        color:white;
        text-decoration: none;
    }
}

</style>