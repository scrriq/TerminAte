<template>
    <div class="app">
      <div class="menu" v-if="token">
        <app-menu/>
      </div>
      <RouterView/>
    </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router';
import AppMenu from './components/AppMenu/AppMenu.vue';
import { useAuthStore } from '@/stores/auth';
import {computed} from 'vue'
import router from './router';

const authStore = useAuthStore()

const token = computed(() => authStore.userInfo.token)

const checkUser = () => {
    const tokens = JSON.parse(localStorage.getItem('userTokens'))
    if(tokens){
      authStore.userInfo.token = tokens.token
      authStore.userInfo.refreshToken = tokens.refreshToken
      authStore.userInfo.userId = tokens.userId
    }
}
const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}


checkUser()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap');
.html, body{
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
}
.app{
  min-width: 100%;
  min-height:100%;
  display: flex;
  flex-direction: row;
}
</style>
