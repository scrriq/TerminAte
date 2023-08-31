<template>
    <div class="header">
        <div class="header__container">
            <div class="header__items">
                <div class="header__text-logo">
                    <a class = 'header__text-link' href=""> <span class="text__orange">ENL</span>INO</a>
                </div>
                <nav class="header__nav">
                    <ul class="header__nav__list">
                        <li class="header__list-link text__orange">Home</li>
                        <li class="header__list-link">About</li>
                        <li class="header__list-link">Product</li>
                        <li class="header__list-link">Services</li>
                    </ul>       
                </nav>
                <div class="header__log">
                    <button class="header__log__button">
                        <p>Log in</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>    <!-- <img src="@/assets/icon/IClogin.png" alt=""> -->

<script>
export default {
}
</script>

<style scoped>

.header {
    width: 100%;
    height: 70px;
    background-color: #000627;
}
.header__container {
    width: 1300px;
    margin: 0px auto;
    height: 100%;
}
.header__items {
    width: 100%;   
    height: 100%;
    display: grid;
    grid-template: 1fr / 1.4fr 2.6fr 1fr;
}

.header__text-logo {
    font-size: 42px;
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
}
.header__nav {
    margin: 0px 40px 0px 0px;
}
.header__nav__list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: 'Roboto Condensed';
    align-items: center;
}
.header__list-link {
    color:white;
    font-size: 20px;
}
.header__log {
    width: 100%;
    height: 100%;
    padding: 15px 30px 15px 30px;
    column-gap:40px;

}
.header__log__button{
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header__log__button > p{
    font-family: 'Roboto Condensed';
    font-size: 23px;
    text-align: left;
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
</style>
