<template lang="html">
        <div class="result__card">
            <div class="result__info">
                <div class="result__title">
                    <h2 class="result__header">Статистика тренировки:</h2>
                </div>


                <div v-if="!trainIsFinish" class="result__statistics">
                    <div class="statistics__state" >
                        Общая статистика: {{ rightCards + " / " +  wrongCards }}
                    </div>
                    <div class="statistics__right" >
                        Верных ответов: {{ rightCards }}
                    </div>
                    <div class="statistics__wrong">
                        Неверных ответов: {{ wrongCards }}
                    </div>
                </div>

                <div v-else class="result__finish">
                    <h2>Вы успешно завершиил тренировку</h2>
                </div>
                <div class="result__buttons">
                    <my-button v-if="!trainIsFinish" @click="$emit('switchType')" class="button__again button__result"> Продолжить повторение</my-button>
                    <my-button  @click="$emit('switchState')" class="button__complete button__result"> Начать заново </my-button>
                </div>
            </div>
        </div>
</template>
<script setup>
import MyButton from '@/components/UI/MyButton.vue';
import { defineProps } from 'vue';
const props = defineProps({
    position: {
        type: Number,
        required: true
    },
    wrongCards: {
        type: Number,
        required: true
    },
    rightCards: {
        type: Number,
        required: true
    },
    trainIsFinish: {
        type: Boolean,
        required: true
    }
});

const startAgain = () => {
    this.$emit('flagAgain',false);
}

</script>
<style lang="css">


.result__card {
    width: 100%;
    height: 700px;
    padding: 40px;
}
.result__info {
    padding: 20px 0px 0px 0px;
    width: 100%;
    height: 100%;
    border: 1px solid white;    
    border-radius: 40px;
    display: flex;
    flex-direction: column;
}
.result__title {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    .result__header{
        font-size: 40px;
        font-weight: 500;
    }
}
.result__statistics {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 50px;
    font-size: 30px;
}
.statistics__state {
}
.statistics__right {
}
.statistics__wrong {
}
.button__result{
    width: 300px;
    height: 75px;
    border: 2px solid white !important;
}
.button__again {
    background-color:cadetblue !important;
}
.button__complete {
    background-color: rgb(203, 100, 100) !important;
}
.result__buttons{
    padding: 0px 0px 75px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.result__finish{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
</style>    