<template>
    <div class="app">
      <!-- <div class="menu" v-if="token">
        <app-menu/>
      </div> -->
      <router-link to="/" v-if="token" @click.prevent="logout"> Logout </router-link>
        <RouterView/>
    </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router';
import AppMenu from './components/AppMenu.vue';
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
    }
}
const logout = () => {
  authStore.logout()
  localStorage.removeItem('userTokens')
  router.push('/signin')
}


checkUser()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  bottom: 0;
  color:white;
}

*,*::after,*::before{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display:block;}

html,body{
  background-color: #212121;
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,button,textarea{font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}

.app{
  width: 100%;
  height: 100%;
}
</style>
