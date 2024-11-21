<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>


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
                        <div class="welcome__header inria-serif-regular">
                            Your learning tool and assistant 
                        </div>
                        <div class="welcome__info italiana-regular">
                            Welcome to TerminAte<br>
                            Create your first card
                        </div>
                        <button class="welcome__button inria-serif-regular">
                            Learn more  
                        </button>
                    </div>
                </div>
                <div class="home">
                    <div class="home__grid inria-serif-regular">
                        <div class="home__card">
                            Term
                        </div>
                        <div class="home__words">
                            <div class="w1">Create Cards</div>
                            <div class="w2">Tech</div>
                            <div class="w3">Devlop</div>
                        </div>
                        <div class="home__card">
                            Ate
                        </div>
                    </div>
                </div>
                <div class="about">
                        <div class="about__grid">
                        <div class="about__items block__first text__block">
                            <p>Данный проект представляет собой уникальный инструмент для эффективного и увлекательного изучения английского языка. Он предоставляет множество функций, которые позволяют не только запоминать новые слова и фразы, но и улучшать грамматику, практиковать произношение и развивать навыки чтения и письма.</p>
                        </div>
                        <div class="about__items block__second image__block"></div>
                        <div class="about__items block__third image__block"></div>
                        <div class="about__items block__fourth text__block">
                            <p>Одной из главных функций проекта являются карточки для запоминания новых слов и фраз. Они представлены в различных форматах, таких как картинки, аудио и видео материалы, что помогает лучше запоминать их. Кроме того, в проекте есть несколько режимов заучивания, которые позволяют выбрать наиболее удобный подход для каждого пользователя.</p>
                        </div>
                        <div class="about__items block__fifth text__block">
                            <p>Контрольные работы также являются важной частью проекта. Они помогают оценить прогресс в изучении языка и определить этапы, на которых нужно усилить знания. Это позволяет более эффективно использовать свое время и достигать поставленных целей быстрее.</p>
                        </div>
                        <div class="about__items block__sixth image__block"></div>
                    </div>
                </div>
                <div class="start">
                    <div class="start__info">
                        <div class="start__header inria-serif-regular">
                            Start using our app right now or download it to your phone
                        </div>
                        <div class="start__buttons">
                            <div class="start__button-shell ">
                                <button class="start__button inria-serif-regular">
                                    Start Now
                                </button>
                            </div>
                            <div class="start__button-shell">
                                <button class="start__button inria-serif-regular">
                                    Download App
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile">
                    <div class="mobile__grid">
                        <div class="mobile__info">
                            <div class="mobile__title inria-serif-regular">
                                You can use the mobile app, both online and offline, absolutely for free!!!
                            </div>
                            <div class="mobile__download">
                                <div class="mobile__getApp">

                                </div>
                            </div>
                        </div>
                        <div class="mobile__image__shell">
                            <div class="mobile__image"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </main>
    </div>
</template>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Italiana&display=swap');
@headerHeight: 70px + @mainHeaderPadding;
@headerAllHeight: @headerHeight;
@mainHeaderPadding: 20px;
@presentationCardWidth: 300px;
@presentationCardHeight: 180px;
@welcomeP: 215px;
@yellow: #FFB800;

/* Основные стили */
.main__page {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    color: #fff;
    background: linear-gradient(325deg,#343125,#000305,#0f0c00);

}
// шрифты 
.italiana-regular {
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.inria-serif-regular {
  font-family: "Inria Serif", serif;
  font-weight: 400;
  font-style: normal;
}

// default conatiner 
.container {
    width: 1500px;
    margin: 0px auto;
    height: 100%;
}


/* header */
.main__header {
    padding: @mainHeaderPadding 0px 0px 0px;
    width: 100%;
    height: @headerHeight;
    /* border-bottom: 1px solid white; */
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
    color: @yellow !important;
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
.main__container{
    width: 1350px;
}

/* welcome */
.welcome {
    width: 100%;
    height: calc(100vh - @headerAllHeight);
    max-height: 700px;

}
.welcome__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: @welcomeP 0px 0px 0px;

}
.welcome__header{
    font-size: 24px;
}
.welcome__info{
    margin: 25px 0px 0px 0px;
    font-size: 70px;
    text-align: center;
}
.welcome__button{
    width: 300px;
    height: 60px;
    background-color: transparent;
    border: 2px solid @yellow;
    font-size: 28px;
    border-radius: 25px;
    margin: 40px 0px 0px 0px;
    color: white;
}
.welcome__button:active{
    box-shadow: 0px 0px 10px @yellow;
}


// home 
.home{
    width: 100%;
    height: 800px;
}
.home__grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 1fr/ 1fr 1fr 1fr;
    padding: 75px 0px;

}
.home__words{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 36px;
}
.home__card{
    width: 100%;
    height: 100%;
    border: 2px solid white;
    box-shadow: 0px 0px 15px white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
}



// about 
.about {
    width: 100%;
    height: 100%;
    padding: 200px 0px 0px;
}
.about__grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: [first] 1fr [line2] 1fr [line3] 1fr [col4-start] 1fr [col4-end] 1fr [five] 1fr [end];
    grid-template-rows: [row1-start] 1fr [row1-end] 1fr [third-line] 1fr [last-line];
    row-gap: 50px;
    column-gap: 50px;
}
.about__items {
    font-size: 22px;
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    font-family: "Montserrat";
    line-height: 30px;
    letter-spacing: 0.08em;
    border: 1px solid @yellow;

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
    background-color:rgba(0, 0, 0, 0.5);
    border: 1px solid #ffffff;
    color:white;
}
.image__block{
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: 100% 100%;
}

// start ( begin )
.start {
    width: 100%;
    height: 700px;
    padding: 200px 0px 0px 0px;
}
.start__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 80px;
}
.start__header {
    width: 100%;
    height: 100%;
    font-size: 60px;
    display: flex;
    align-items: flex-end;
    padding: 0px 100px;
    text-align: center;
}
.start__buttons {
    width: 100%;
    height: 100%;
    display: flex;

}
.start__button{
    width: 320px;
    height: 80px;
    font-size: 30px;
    background-color: transparent;
    border: 4px solid #C37500;
    border-radius: 30px
}
.start__button-shell {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}


//mobile
.mobile {
    margin: 100px 0px 0px 0px;
    width: 100%;
    height: 800px;
}
.mobile__grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 1fr / 1.7fr 1fr;
    padding: 0px 50px;
}
.mobile__info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 60px;
}
.mobile__title {
    width: 100%;
    height: 100%;
    font-size: 50px;
    display: flex;
    align-items: flex-end;
}
.mobile__download {
    width: 100%;
    height: 100%;
}
.mobile__getApp{
    width: 275px;
    height: 70px;
    border: 1px solid white;
    border-radius: 30px;
    background-image: url("@/assets/getAppAndroid.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.mobile__image__shell {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center
}
.mobile__image {
    width: 100%;
    height: 100%;
    max-width: 375px;
    max-height: 650px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgb(81, 14, 14);
}
</style>