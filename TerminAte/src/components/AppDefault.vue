<template>
    <main class="main">
        <app-header/>
        <div class="welcome">
            <div class="welcome__container container">
                <div class="welcome__blocks">
                    <div class="welcome__info">
                        <div class="welcome__header">
                            <h1>Добро пожаловать </h1>
                        </div>
                        <div class="welcome__about">
                            <p>на сайт "Помощник для людей по изучению английского языка"! Наш проект предназначен для всех, кто хочет эффективно и увлекательно освоить английский язык. Мы предлагаем уникальные функции, которые помогут вам достичь желаемых результатов. </p>
                        </div>
                        <button class="welcome__button">Узнать больше</button>
                    </div>
                    <div class="welcome__image-shell">
                        <div class="welcome__image"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages">
            <div class="advantages__container container">
                <div class="advantages__header">Преимущества и возможности</div>
                <div class="advantages__grid">
                    <div class="advantages__items block__first text__block">
                        <p>Данный проект представляет собой уникальный инструмент для эффективного и увлекательного изучения английского языка. Он предоставляет множество функций, которые позволяют не только запоминать новые слова и фразы, но и улучшать грамматику, практиковать произношение и развивать навыки чтения и письма.</p>
                    </div>
                    <div class="advantages__items block__second image__block"></div>
                    <div class="advantages__items block__third image__block"></div>
                    <div class="advantages__items block__fourth text__block">
                        <p>Одной из главных функций проекта являются карточки для запоминания новых слов и фраз. Они представлены в различных форматах, таких как картинки, аудио и видео материалы, что помогает лучше запоминать их. Кроме того, в проекте есть несколько режимов заучивания, которые позволяют выбрать наиболее удобный подход для каждого пользователя.</p>
                    </div>
                    <div class="advantages__items block__fifth text__block">
                        <p>Контрольные работы также являются важной частью проекта. Они помогают оценить прогресс в изучении языка и определить этапы, на которых нужно усилить знания. Это позволяет более эффективно использовать свое время и достигать поставленных целей быстрее.</p>
                    </div>
                    <div class="advantages__items block__sixth image__block"></div>
                </div>
            </div>
        </div>
        <div class="start">
            <div class="start__container container">
                <div class="start__header">
                    Начните прямо сейчас!
                </div>
                <div class="start__button-shell">
                    <button class="start__button">
                        Начать
                    </button>
                 </div>
            </div>
        </div>
        <div class="question">
            <div class="question__container container">
                <div class="question__header">
                    Остались вопросы? <br> - Рады будем вас слышать
                </div>
                <form action="" class="question__form">
                    <input type="email" class="question__input-email" placeholder="Ваша почта...">
                    <input type="text" class="question__input__text" placeholder="Вопрос...">
                    <button class="question__button">
                        Отправить
                    </button>
                 </form>
            </div>
        </div>
        <app-footer/>
    </main>
</template>
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
export default{
components:{
    AppHeader, AppFooter
}
}
</script>

<style scoped>
.main{
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
}
</style>