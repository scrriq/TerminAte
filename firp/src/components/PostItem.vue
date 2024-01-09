<template>
    <div class="post">
        <div class="">
            <div>Название:  {{ post.title }}</div>
            <div>Описание:  {{ post.body }}</div>
        </div>
        <div class="post__btns">    
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        post:{
            type: Object,
            required: true,
        }
    },
    components:{
    }
}
</script>


<style scoped>
.post{
    padding: 30px;
    width: 800px;
    height: 100px;
    border-radius: 10px;
    background-color: teal;
    border: 2px solid black;
    margin: 15px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
}
</style>