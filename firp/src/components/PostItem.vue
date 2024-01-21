<template>
    <div class="post">
        <div class="post__block">
            <div class="post__block-title">{{ post.title }}</div>
            <div class="post__block-shell"></div>
            <div class="post__block-body">{{ post.body }}</div>
        </div>
        <div class="post__btns">    
            <button @click="$emit('remove', post)">X</button>
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
*{
    width: 100%;
    height: 100%;
}
.post{
    padding: 15px 30px;
    border-radius: 10px;
    background-color: teal;
    border: 2px solid black;
    margin: 15px 0px 0px 0px;
    display: grid;
    grid-template: 1fr / 7fr 0.5fr;
    align-items: center;
    column-gap:20px;
}
.post__block {
    display: flex;
    column-gap: 15px;
}
.post__block-title {
    display: flex;
    align-items: center;
    font-size: 20px;
}
.post__block-shell{
    width: 5px;
    background-color: rgb(45, 45, 45);
}
.post__block-body {
    display: flex;
    align-items: center;
    font-size: 20px;
}
.post__btns{
    display: flex;
    align-items: center;
}
.post__btns > button {
    width: 45px;
    height: 45px;
    background-color: rgba(191, 0, 0, 0.697);
    color:black;
    font-size: 18px;
    border-radius: 40px;
    border: 1px solid black;
}
</style>