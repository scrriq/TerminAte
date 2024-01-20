<template>
    <form @submit.prevent class="form__window">
        <my-input type="text" placeholder="Название" v-model="post.title" ></my-input>
        <my-input type="text" placeholder="Описание" v-model="post.body"></my-input>
        <my-button class="add_btn" @click="creatPost">Add a new card</my-button>
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
    components:{
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
.form__window{
    width: 100%;
    height: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
}
.add_btn{
    align-self: center;
}
</style>