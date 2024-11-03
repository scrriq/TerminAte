<template lang="html">
    <div class="main">
        <div class="cards__conatiner ">
            <div class="main__cards__shell">
                <div class="cards__block-info">
                    <div class="cards__name">
                        <h1>Cards:</h1>
                    </div>
                    <div v-if="stateTrain" class="cards__info">
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
                <div  v-if="stateTrain" class="cards__block-card">
                    <div class="cards__button__shell">
                        <button class="card__button__wrong" @click="wrongAnswer()">WRONG</button>
                    </div>
                    <my-card @click = "sideCard = !sideCard; getCurrentTerm()" class="main__card">{{ currentTerm }}</my-card>
                    <div class="cards__button__shell">
                        <button class="card__button__right" @click="rightAnswer()">RIGHT</button>
                    </div>
                </div>
                <card-result   
                @switch-state="switchStateTrain"
                @switch-type="continueTrain" 
                :position="position" 
                :wrongCards="wrongCards"
                :rightCards="rightCards"
                :trainIsFinish="trainIsFinish"
                v-else
                />
            </div>
        </div>
    </div>
</template>


<script setup>
import { usePostsStore } from '@/stores/postsStore';
import MyCard from './UI/MyCard.vue';
import CardResult from './CardResult.vue';
import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth';

const postStore = usePostsStore()
const authStore = useAuthStore()
const position = ref(0)
const rightCards = ref(0)
const wrongCards = ref(0)
const currentTerm = ref("")
const sideCard = ref(false)
const stateTrain = ref(true)
const typeOfTrain = ref(false)
const countCards = ref(0)
let trainRepeat = new Array;  
let trainRepeatTemp = new Array;
const typeOfArray = ref(false);
const trainIsFinish = ref(false)



onMounted(async()=>{
    postStore.userId = authStore.userInfo.userId;
    await postStore.fetchPost()
    countCards.value = postStore.posts.length
    
    getCurrentTerm()
})




const rightAnswer = () => {
    position.value++;
    rightCards.value++;
    sideCard.value = false;
}

const wrongAnswer = () => {
    trainRepeatTemp.push(position.value);
    position.value++;
    wrongCards.value++;
    sideCard.value = false;
}
watch(position, async() => {
    if(position.value == countCards.value){
        if(wrongCards.value === 0){
            trainIsFinish.value = true; 
        }
        stateTrain.value = false;
    }
    else getCurrentTerm()
})



const getCurrentTerm = async() => {    
    if(!typeOfTrain.value){
        if((sideCard.value)) currentTerm.value = await postStore.posts[position.value].body
        else currentTerm.value = await postStore.posts[position.value].title    
    }
    else{
        if((sideCard.value)) currentTerm.value = await postStore.posts[trainRepeat[position.value]].body
        else currentTerm.value = await postStore.posts[trainRepeat[position.value]].title    
    } 
    

}

const switchStateTrain = () => {
    trainIsFinish.value = false;
    stateTrain.value = !stateTrain.value;  
    typeOfTrain.value = false;
    countCards.value = postStore.posts.length;
    rightCards.value = 0;
    wrongCards.value = 0;
    position.value = 0;    
}

const continueTrain = () => {   
    trainRepeat = trainRepeatTemp;
    trainRepeatTemp = [];
    typeOfTrain.value = true;
    typeOfArray.value = true;
    console.log(trainRepeat.length);
    countCards.value = trainRepeat.length;
    stateTrain.value = !stateTrain.value;
    rightCards.value = 0;
    wrongCards.value = 0;
    position.value = 0;
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