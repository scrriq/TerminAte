<template>
    <form @submit.prevent class="fm">
        <my-input type="text" class="in" placeholder="Название" v-model="post.title" ></my-input>
        <my-input type="text" class="in" placeholder="Описание" v-model="post.body"></my-input>
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
.fm{
    width: 100%;
    height: 50px;
    margin: 0px 0px 50px 0px;
}
.add_btn{
    align-self: flex-end;
}
</style>