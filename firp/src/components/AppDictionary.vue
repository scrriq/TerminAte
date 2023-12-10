<template>
    <div class="dictionary">
        <div class="dictionary__container">
            <div class="dictionary__main-block">
                <div class="dictionaty__header">
                    <div class="dictionary__header-text">
                        <p>Dictionary</p>
                    </div>
                    <div class="dictionary__add-card">
                        <button class="add-card__btn" @click="createPost"> Не работает!</button>
                    </div>
                </div>
                <div class="dirctionary__words">
                    <post-form @create = "createPost" />
                    <post-list v-bind:posts="posts"/>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import PostList from './PostList.vue'
import PostForm from './PostForm.vue'
export default{
    data(){
        return {
            posts:[
                {id:1, title: 'Java script', body: 'Описание поста'},
                {id:2, title: 'Java script 2', body: 'Описание поста 2'},
                {id:3, title: 'Java script 3', body: 'Описание поста 3'},
                {id:4, title: 'Java script 4', body: 'Описание поста 4'},
            ],
        }
    },
    components:{
        PostList,PostForm
    },
    methods:{
        createPost(post){
            this.posts.push(post);
        },
    }
}
</script>

<style scoped>
*{
    width: 100%;
    height: 100%;
}
.dictionary {
    height: 1500px;
    background-color: #19495E;
}
.dictionary__container {
    width: 1100px;
    height: 100%;
    margin: 0px auto;
}
.dictionary__main-block {
    max-height: 1200px;
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
    margin: 50px 0px 0px 0px;
    border: 3px solid black;
    border-radius: 50px;
    background: #0b9c9c77;
    padding: 100px;
}
.book{
    width: 100px;
    height: 100px;
    background-color: red;
}

/* // */
</style>