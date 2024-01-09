<template>
    <div class="dictionary">
        <div class="dictionary__container">
            <div class="dictionary__main-block">
                <div class="dictionaty__header">
                    <div class="dictionary__header-text">
                        <p>Dictionary</p>
                    </div>
                    <div class="dictionary__add-card">
                        <button class="add-card__btn"> Не работает!</button>
                    </div>
                </div>
                <div class="dirctionary__words">
                    <h1>Страница с постами</h1>
                    <div class="app__btn">
                        <my-button @click="showWindow">Создать пост</my-button>
                        <my-select class="select" v-model="selectedSort" :options="sortOptions"></my-select>
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
    background-color: #212121;

}
.dirctionary__words {
    margin: 50px 0px 50px 0px;
    border: 3px solid black;
    border-radius: 50px;
    background: #0b9c9c77;
    padding: 100px;
    display: flex;
    flex-direction: column;
}
.book{
    width: 100px;
    height: 100px;
    background-color: red;
}
.app__btn {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
.select{
    padding: 0px 100px 0px 0px;
    width: auto;
    height: auto;
}

/* // */
</style>