<template>
    <div class="post" v-for="post in posts">
        <div>Название {{ post.title }}</div>
        <div>Описание {{ post.body }}</div>
    </div>
</template>

<script>
export default{
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>

.post{
    padding: 30px;
    width: 400px;
    height: 100px;
    border-radius: 10px;
    background-color: teal;
    border: 2px solid black;
    margin: 15px 0px 0px 0px;
}

</style>