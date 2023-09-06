<template> 
<main class="main__app-page">
    <app-menu/>
</main>
</template>

<script>
import AppMenu from './AppMenu.vue'
export default {
    components:{
        AppMenu
    }
}
</script>

<style scoped>
.main__app-page {
    width: 100%;
    height: 800px;
    background-color: rgb(57, 24, 24);
}
.marin__app-page__container {
}
</style>