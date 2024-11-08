<template lang="html">
    <div class="app__settings">
        <div class="choose__type">
            <div class="type__profile">Profile</div>
            <div class="type__whatElse">What Else</div>
            <div class="type__settings">Settings</div>
        </div>
        <ProfileSettings/>  
        <!-- другие компоненты состояния  -->
    </div>
</template>
<script setup>
import ProfileSettings from './ProfileSettings.vue';
</script>
<style scoped>
.app__settings {
    width: 100%;
    height: 100%;
    background-color: #2D2D2D;
    display: grid;
    grid-template: 1.2fr 10fr/ 1fr;
}
.choose__type {
    padding: 0px 0px 0px 40px;
    width: 100%;
    height: 100%;
    display: flex; 
    column-gap: 40px;
    font-size: 28px;
    border-bottom: 1px solid white; 
}
.type__profile {
    width: 100%;
    height: 100%;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
}
.type__whatElse {
    width: 100%;
    height: 100%;
    border-right: 1px solid white;
    display: flex;
    align-items: center;

}
.type__settings {
    width: 100%;
    height: 100%;
    border-right: 1px solid white;
    display: flex;
    align-items: center;

}
</style>