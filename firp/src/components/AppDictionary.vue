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
                        <input type="text" class="dirctionary__words__search" placeholder="Поиск по карточкам...">
                        <input type="text" class="dirctionary__words__search" placeholder="Выбрать сортировку">
                        <!-- <my-select class="select" v-model="selectedSort" :options="sortOptions"></my-select> -->
                    </div>
                    <my-window v-model:show="windowVisible" >
                        <post-form @create = "createPost" />
                    </my-window>
                    <post-list v-bind:posts="sortedPost" v-if="!isPostLoading" @remove="removePost"/>
                    <div v-else> Идет загрузка...</div>
                </div>



            </div>
        </div>        
    </div>
</template>

<script>
import PostList from './PostList.vue'
import PostForm from './PostForm.vue'
import axios from 'axios'
export default{
    data(){
        return {
            posts:[],
            windowVisible: false,
            isPostLoading: false,
            selectedSort: '',
            sortOptions:[
                {value:'title', name:'По названию'},
                {value:'body', name:'По содержимому'},
            ]
        }
    },
    components:{
        PostList,PostForm
    },
    methods:{
        createPost(post){
            this.posts.push(post);
            this.windowVisible = false;
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id != post.id)
        },
        showWindow(){
            this.windowVisible = true;

        },
        async fetchPosts(){
            try{
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            }catch(e){
                alert("Ошибка")
            } finally{
                this.isPostLoading = false;
            }
        },

    },
    mounted(){
            this.fetchPosts();
    },
    computed:{
        sortedPost(){
            return [...this.posts].sort((post1, post2)=> {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        }
    }
}
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
    min-height: 800px;
}
.dictionary__container {
    width: 1100px;
    height: 100%;
    margin: 0px auto;
}
.dictionary__main-block {
    margin: 0px 0px 0px 50px;
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
    display: flex;
    justify-content: space-between;
    column-gap: 35px;
}
.select{
    padding: 0px 100px 0px 0px;
    width: auto;
    height: auto;
}
.dirctionary__words__search{
    width: 100%;
    min-height: 50px;
    border-radius: 15px;
    background: transparent;
    border: 3px solid white;
    font-size: 20px;
    padding: 0px 15px;
}
.dirctionary__words__search::placeholder{
    color: #373737;
    font-weight: 500;

}
/* // */
</style>