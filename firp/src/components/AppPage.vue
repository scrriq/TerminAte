<template> 
    <div class="main__app-page">
        <div class="app__menu">
            <app-menu/>
        </div>
        <div class="app__container container">
            <RouterView/>
        </div>
    </div>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
import AppMenu from './AppMenu.vue'
import AppDictionary from './AppDictionary.vue'
import Home from './Home.vue'
export default {
    components:{
        AppMenu, AppDictionary, Home
    }
}
</script>

<style>
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
    margin: 0;
    padding: 0;
    bottom: 0;
}

.app__menu{
    max-width: 100%;
    max-height: 100%;
}
#app{
  width: 100% ;
  height: 100% ;
}
.main__app-page {
    width: 100%;
    height: 100%;
    background-color: #212121;
}
.container{
    width: 100%;
    height: 100%;
    margin: 0px 0px 0px 90px;
    width: 800px;
    margin: 0px auto;
    /* border: 1px solid white; */
}

</style>