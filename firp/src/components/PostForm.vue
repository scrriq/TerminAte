<template>
    <form @submit.prevent class="fm">
        <input type="text" class="in" placeholder="Название" v-model="post.title" >
        <input type="text" class="in" placeholder="Описание" v-model="post.body">
        <button class="add-card__btn" @click="creatPost">Add a new card</button>
    </form>
</template>

<script>
export default{
    data(){
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods:{
        creatPost(){
            this.post.id = Date.now(),
            this.$emit('create',this.post),
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>
.add-card__btn{
    margin: 0px 0px 0px 20px;
    color:black;
    width: 100px;
    height: 30px;
    background-color: orangered;
}
.in{
    width: 200px;
    height: 50px;
    color:black;
    margin: 0px 0px 0px 20px; 
}

.fm{
    width: 100%;
    height: 50px;
}
</style>