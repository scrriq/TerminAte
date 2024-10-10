<template>
    <div class="dictionary">
        <div class="dictionary__container">
            <div class="dictionary__main-block">
                <div class="dictionaty__header">
                    <div class="dictionary__header-text">
                        <p>Dictionary</p>
                    </div>

                    <div class="dictionary__add-card">
                        <button class="add-card__btn" @click="showWindow">Создать карточку</button>
                    </div>
                    
                </div>

                <!-- блок с карточками -->
                <div class="dirctionary__words">
                    <div class="dirctionary__words-nav">
                        <input type="text" v-model="searchQuery" class="dirctionary__words__search" placeholder="Поиск по карточкам...">
                        <div class="dirctionary__words__search">
                            <div class="search-text">Сортировка:</div>
                            <my-select class="select" v-model="selectedSort" :options="sortOptions"></my-select>
                        </div>
                    </div>
                    <my-window v-model="windowVisible" :modelValue="windowVisible" >
                        <post-form @create = "createPost" />
                    </my-window>
                    <post-list v-bind:posts="sortedAndSearchPosts" v-if="!isPostLoading" @remove="removePost"/>
                    <div v-else class="loading-text"> Идет загрузка...</div>
                </div>



            </div>
        </div>        
    </div>
</template>

<script setup>
import PostList from './PostList.vue'
import PostForm from './PostForm.vue'
import axios from 'axios'
import {ref, computed, onMounted} from 'vue'
import axiosApiInstance from '@/api'
import Card from "primevue/card"
import Loader from './Loader.vue';
import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/postsStore'

const postStore = usePostsStore();
const authStore = useAuthStore();

const windowVisible = ref(false);
const searchQuery = ref('')
const selectedSort = ref('')
const showLoader = ref(true)
const sortOptions = [
    {value:'title', name:'По названию'},
    {value:'body', name:'По содержимому'},
];

const showWindow = () => {
    windowVisible.value = true;
}
const createPost = async(post) => {
    await postStore.createPost(post);
    windowVisible.value = false
}

const removePost = async(post) => {
    await postStore.removePost(post.id)
}

const sortedPosts = computed(() => {
    return [...postStore.posts].sort((post1, post2) => {
        return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]);
    });
});

const sortedAndSearchPosts = computed(() => {
    return sortedPosts.value.filter(post => 
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted(async()=>{
    postStore.userId = authStore.userInfo.userId;
    await postStore.fetchPost()
})
</script>

<style scoped>
*{
    width: 100%;
    height: 100%;
}
h1{
    font-size: 30px;
}
.dictionary {
    background-color: #19495E;
    min-height: 820px;
}
.dictionary__container {
    width: 1100px;
    height: 100%;
    margin: 0px auto;
}
.dictionary__main-block {
    padding: 50px 0px 0px 0px;
}
.dictionaty__header {
    height: 100px;
    display: flex;
}
.dictionary__header-text {
    font-size: 40px;
    font-family: 'Montserrat';
    font-weight: 500;
    margin: 25px 25px;
    display: flex;
}
.dictionary__add-card {
    padding: 10px 0px 20px 130px;
}
.add-card__btn{
    font-size: 24px;
    font-weight: 500;
    font-family: 'Montserrat';
    color: black;
    border: 2px solid black;
    border-radius: 50px;
    background-color: #428300;

}
.dirctionary__words {
    margin: 50px 0px 50px 0px;
    border: 3px solid black;
    border-radius: 25px;
    background: #0b9c9c77;
    padding: 30px 100px;
    display: flex;
    flex-direction: column;
}
.book{
    width: 100px;
    height: 100px;
    background-color: red;
}
.dirctionary__words-nav {
    display: grid;
    grid-template: 1fr/ 2fr 1fr;
    column-gap: 35px;
}
.dirctionary__words__search{
    width: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: transparent;
    border: 3px solid white;
    font-size: 20px;
    padding: 0px 15px;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    align-items: center;
    justify-content: center;
    column-gap: 25px;
}
.search-text{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.dirctionary__words__search::placeholder{
    color: #373737;
    font-weight: 500;

}
.loading-text{
    margin: 35px 0px 0px 0px;
    font-size: 28px;
}
/* // */
</style>