<template>
    <div class="main__page">
        <!-- header -->
        <header class="main__header">
            <div class="header__container container">
                <div class="header__items">
                    <div class="header__text-logo">
                        <a class = 'header__text-link' href="">Termin<span class="text__orange">Ate</span></a>
                    </div>
                    <nav class="header__nav">
                        <ul class="header__nav__list">
                            <li class="header__list-link text__orange">Home</li>
                            <li class="header__list-link">About</li>
                            <li class="header__list-link">Begin</li>
                            <li class="header__list-link">Services</li>
                        </ul>       
                    </nav>
                    <div class="header__log">
                        <router-link class="header__log__button" to="/signin">
                            <p>Log in</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="main__container container">
                <div class="welcome">
                    <div class="welcome__content">
                        <div class ="welcome__header">Добро пожаловать в Termin Ate!</div>
                        <div class="welcome__text">
                            <p>Ваш идеальный помощник для обучения. С нашим приложением вы сможете
                            учить различные темы быстро и четко, достигая максимальных результатов за короткое время.
                            Присоединяйтесь к нам и откройте для себя мир эффективного обучения!</p>
                        </div>
                        <div class="welcome__button-block">
                            <button class="welcome__button">Узнать больше</button>
                        </div>
                    </div>
                    <div class="welcome__presentation">
                        <div class="presentation__grid">
                            <div class="presentation__card">Hello</div>
                            <div class="presentation__card border__green">Привет</div>
                            <div class="presentation__text">Termin</div>
                            <div class="presentation__text">Ate</div>
                            <div class="presentation__card">World</div>
                            <div class="presentation__card border__red">Мир</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style lang="less" scoped>
@headerHeight: 70px + @mainHeaderPadding;
@headerAllHeight: @headerHeight;
@mainHeaderPadding: 20px;
@presentationCardWidth: 300px;
@presentationCardHeight: 180px;
/* Основные стили */
.main__page {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    color: #fff;
    
    background: linear-gradient(325deg,#343125,#000305,#0f0c00);

}

/* header */
.main__header {
    padding: @mainHeaderPadding 0px 0px 0px;
    width: 100%;
    height: @headerHeight;
    /* border-bottom: 1px solid white; */
}
.container {
    width: 1500px;
    margin: 0px auto;
    height: 100%;
}
.header__items {
    width: 100%;   
    height: 100%;
    display: flex;
    justify-content: space-around;
}

.header__text-logo {
    width: 70%;
    height: 100%;
    font-size: 36px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
}
.text__orange{
    color: #FFB800 !important;
}
.header__text-link{
    color:white;
    text-decoration: none;
}
.header__nav {
    width: 100%;
    height: 100%;
}
.header__nav__list {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
}
.header__list-link {
    color:white;
    font-size: 18px;
}
.header__log {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 5px 0px;
}
.header__log__button{
    width: 150px;
    height: 100%;
    background-color: transparent;
    border: 0px;
    display: flex;
    justify-content: flex-end;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid white;
    
}
.header__log__button:active{
    box-shadow: 0px 0px 20px 1px white;
}
.header__log__button > p{
    font-family: 'Roboto Condensed';
    font-size: 23px;
    text-align: left;
    color: white;
    text-decoration: none;
}
.header__log__button > p::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/IClogin.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0px 10px 0px 0px;
}

/* main */
.main {
    width: 100%;
    height: 100%;
}

/* welcome */
.welcome {
    width: 100%;
    height: calc(100vh - @headerAllHeight);
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    max-height: 900px;

}
.welcome__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
}
.welcome__presentation{
    width: 100%;
    height: 100%;
        display: flex;
    align-items: center;
    justify-content: center;
}
.presentation__grid {
    display: grid;
    grid-template: @presentationCardHeight (@presentationCardHeight / 1.7) @presentationCardHeight / 1fr 1fr;
    column-gap: 50px;
}
.presentation__card {
    width: @presentationCardWidth;
    height: @presentationCardHeight;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.35);
}
.presentation__text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
.welcome__header {
    font-size: 24px;
    font-family: 'Roboto Condensed';
    font-weight: 400;
    text-align: center;
    letter-spacing: 1.8px;
}
.welcome__text {
    font-size: 20px;
    font-family: 'Roboto Condensed';
    font-weight: 400;
    text-align: center;
    letter-spacing: 10%;
    letter-spacing: 1.8px;
    padding: 0px 40px;
}
.welcome__button-block{
    padding: 7px 75px;
}
.welcome__button {
    width: 100%;
    max-height: 70px;
    min-height: 70px;
    height: 100%;
    border-radius: 25px;
    font-size: 22px;
    color: black;
    font-weight: 700;
    background-color: #FFB800;
    border: 2px solid black;
}
.border__green{
    border: 1px solid #0EFF42;
}
.border__red{
    border: 1px solid #C20A0A;
}
/* .main{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.welcome {
    height: 700px;
    width: 100%;
    background-color: #000627;
}
.welcome__container {
}
.container{
    width: 1100px;
    margin: 0px auto;
}
.welcome__blocks {
    padding: 125px 0px 0px 0px;
    width: 100%;
    height: 100%;
    display: flex;
}
.welcome__info {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template: 1fr 5fr 1fr/1fr;
}
.welcome__header {
}
.welcome__header > h1 {
    font-family: 'Montserrat';
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.05em;
}
.welcome__about {
}
.welcome__about > p{
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.05em;
}
.welcome__button {
    width: 325px;
    height: 100%;
    background-color: #FFB800;
    border: 1px solid black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    font-size: 22px;
    color: #000;
    font-weight: 500;
}
.welcome__image-shell {
    width: 100%;
    height: 400px;
    padding: 50px;
}
.welcome__image{
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    background: url('@/assets/engl1.jpg');
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: 100% 100%;
    border-radius: 50px;
}
.advantages {
    width: 100%;
    height: 1300px;
    background-color: #000627;
}
.advantages__container {
}

.advantages__header {
    text-align: center;
    font-size: 45px;
    font-family: 'Montserrat';
    font-weight: 400;
}
.advantages__grid {
    width: 100%;
    height: 1100px;
    display: grid;
    grid-template-columns: [first] 1fr [line2] 1fr [line3] 1fr [col4-start] 1fr [col4-end] 1fr [five] 1fr [end];
    grid-template-rows: [row1-start] 1fr [row1-end] 1fr [third-line] 1fr [last-line];
    row-gap: 50px;
    column-gap: 50px;
    margin: 100px 0px 0px 0px;
}
.advantages__items {
    font-size: 22px;
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    font-family: "Montserrat";
    line-height: 30px;
    letter-spacing: 0.08em;
    border: 1px solid #7E1280;
    box-shadow: 0px 0px 10px 0px #7E1280;

}
.block__first {
    grid-column-start: 1;
    grid-column-end: span col4-end;
    grid-row-start: 1;
    grid-row-end: 2;
}
.block__second {
    grid-column-start: col4-end;
    grid-column-end: span end;
    grid-row-start: 1;
    grid-row-end: 2;
    background: url('@/assets/engl2.jpg');
}
.block__third {
    grid-column-start: first;
    grid-column-end: span line3;
    grid-row-start: 2;
    grid-row-end: 3;
    background: url('@/assets/engl3.jpg');
}
.block__fourth {
    grid-column-start: 3;
    grid-column-end: span end;
    grid-row-start: 2;
    grid-row-end: 3;
}
.block__fifth {
    grid-column-start: 1;
    grid-column-end: span col4-end;
    grid-row-start: 3;
    grid-row-end: 4;
}
.block__sixth {
    grid-column-start: span col4-end;
    grid-column-end: end;
    grid-row-start: 3;
    grid-row-end: 4;
    background: url('@/assets/engl4.jpg');
}
.text__block{
    background-color:rgba(16, 30, 35, 0.73);
    border: 1px solid #128073;
    color:white;
    box-shadow: 0px 0px 10px 0px#128073;
}
.image__block{
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: 100% 100%;
}
.start {
    padding: 100px 0px 0px 0px;
    width: 100%;
    height: 500px;
    background-color:#000627;
}
.start__container {
}
.start__header {
    font-size: 50px;
    text-align: center;
    font-family: 'Montserrat';
    letter-spacing: 0.05em;
}
.start__button-shell{
    margin: 95px 0px 0px 0px;
    display: flex;
    justify-content: center;
}
.start__button {
    width: 1000px;
    height: 125px;
    color:#fff;
    font-size: 50px;
    font-family: 'Montserrat';
    font-weight: 700;
    border: 1px solid #000AFF;
    box-shadow: 0px 0px 10px 0px #000AFF;
    background-color: #3d3d3d47;
    border-radius: 25px;
}
.question {
    width: 100%;
    height: 600px;
    background-color: #000627;
}
.question__container {
    width: 800px;
    margin: 0px auto;
}
.question__header {
    font-size: 50px;
    text-align: center;
    font-family: 'Montserrat';
    letter-spacing: 0.05em;
}
.question__form {
    margin: 65px 0px 0px 0px;
}
.question__input-email {
    width: 100%;
    height: 50px;
    font-size: 24px;
    color:black;
}
.question__input__text {
    margin: 40px 0px;
    width: 100%;
    height: 150px;
    font-size: 24px;
    color:black;
}
.question__button {
    width: 100%;
    height: 50px;
    background-color: #FF6B00;
    border: 1px solid black;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.05em;
} */
</style>