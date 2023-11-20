<template> 
<main class="main__app-page">
    <app-menu/>
    <app-dictionary/>
</main>
</template>

<script>
import AppMenu from './AppMenu.vue'
import AppDictionary from './AppDictionary.vue'
export default {
    components:{
        AppMenu, AppDictionary
    }
}
</script>

<style scoped>
.main__app-page {
    width: 100%;
    height: 1000px;
    background-color: #212121;
    display: flex;
}

</style>