<template lang="html">
    <div class="main">
        <div class="cards__conatiner ">
            <div class="main__cards__shell">
                <div class="cards__block-info">
                    <div class="cards__name">
                        <h1>Cards:</h1>
                    </div>
                    <div class="cards__info">
                        <div class="cards__info__state">
                            State : {{ position + 1 }} / {{countCards}}
                        </div>
                        <div class="cards__info__right">
                            Right : {{rightCards}}
                        </div>
                        <div class="cards__info__wrong">
                            Wrong : {{ wrongCards }}
                        </div>
                    </div>
                </div>
                <div class="cards__block-card">
                    <div class="cards__button__shell">
                        <button class="card__button__wrong" @click="wrongAnswer()">WRONG</button>
                    </div>

                    <my-card @click = "sideCard = !sideCard; getCurrentTerm()" class="main__card">{{ currentTerm }}</my-card>

                    <div class="cards__button__shell">
                        <button class="card__button__right" @click="rightAnswer()">RIGHT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { usePostsStore } from '@/stores/postsStore';
import MyCard from './UI/MyCard.vue';
import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';

const postStore = usePostsStore()
const authStore = useAuthStore()
const position = ref(0)
const rightCards = ref(0)
const wrongCards = ref(0)
const currentTerm = ref("")
const sideCard = ref(false)


onMounted(async()=>{
    postStore.userId = authStore.userInfo.userId;
    await postStore.fetchPost()
    getCurrentTerm()
})

const countCards = postStore.posts.length


const rightAnswer = () => {
    position.value++;
    rightCards.value++;
}

const wrongAnswer = () => {
    position.value++;
    wrongCards.value++;
}
watch(position, async() => {
    if(position.value == countCards){
        alert("Вы успешно завершили тренировку!")
        position.value = 0;
        rightCards.value = 0;
        wrongCards.value = 0;
        // Логика по окончанию тренировки 
    }
    else getCurrentTerm()
})

const getCurrentTerm = async() => {
    if((sideCard.value)) currentTerm.value = await postStore.posts[position.value].body
    else currentTerm.value = await postStore.posts[position.value].title
    console.log(sideCard.value);
    
}




</script>


<style scoped>
.main {
    width: 100%;
    height: 780px;
}
.cards__conatiner {
    width: 1200px;
    height: 100%;
    margin: 0px auto; 
}

.main__cards__shell {
    width: 100%;
    height: 100%;
} 
.cards__block-info {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 30px;
    align-items: center
}
.cards__name {
    font-size: 24px;
    /* Cards: */
}

.cards__info {
    display: flex;
    flex-direction: column;
}
.cards__info__state {
    font-size: 18px;
}
.cards__info__right {
    font-size: 18px;
}
.cards__info__wrong {
    font-size: 18px;
}

.cards__block-card {
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: row;
    padding: 0px 0px 40px 0px;
}

.cards__button__shell {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card__button__wrong {
    width: 200px;
    height: 100px;
    background-color: #841717;
    border-radius: 30px;
    font-size: 28px;

}
.card__button__right{
    width: 200px;
    height: 100px;
    background-color: #2D8245;
    border-radius: 30px;
    font-size: 28px;

}

.main__card {
}
.main__card:active {
    box-shadow: 0px 0px 50px green;
}
</style>