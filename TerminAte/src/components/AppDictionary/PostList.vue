<template>
    <div class= "post__list" v-if="posts.length > 0">
        <div class="post__list-title">Список карточек:</div>
        <div class="post__list-block">
            <post-item class="post-list-cards" v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove',post)"></post-item>
        </div>
    </div>
    <div class="post__list-title" v-else style="color: red"> Список карточек пуст </div>
</template>

<script>
import PostItem from '@/components/AppDictionary/PostItem.vue'
export default{
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components:{
        PostItem
    }
}
</script>

<style scoped>
.post__list{
    padding: 0px 0px 30px 0px;
}
.post__list-title{
    margin: 35px 0px 0px 0px;
    font-size: 28px;
}
.post__list-block{
    padding: 20px 0px 0px 0px;
}
.post-list-cards{
    width: 100%;
}


</style>