<template>
    <div class="menu">
        <nav class="menu__navigation">
            <div class="menu__logo-block">
                <div class="menu__logo">
                    <img src="@/assets/icon/shedule.png" alt="">
                </div>
                <div class="menu__logo-text">
                    <a class = 'menu__logo-link' href=""> <span v-if="show" class="text__orange">Language </span><br><span v-if='show'>Learning</span></a>
                </div>
            </div>
            <div class="menu__nav-blocks">
                <div class="menu__nav-block__switcher">
                    <button class = 'test' @click="hello"> TEST </button>
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/shedule.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Shedule</p> 
                        </div>
                    </div>
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/card.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Card</p> 
                        </div>
                    </div>
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/memorise.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Memorise</p> 
                        </div>
                    </div>
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/dictionary.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Dictionary</p> 
                        </div>
                    </div>
                </div>
                <div class="menu__naw-block__addition">
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/setting.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Setting</p> 
                        </div>
                    </div>
                    <div class="manu__nav-item">
                        <div class="item__block-img">
                            <img src="@/assets/icon/account.png" alt="">
                        </div>
                        <div class="item__block-text">
                           <p v-if="show">Account</p> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: true
        }
    },
    methods: {
        hello(){
            this.show = !this.show
        }
    },
}
</script>

<style scoped>


.menu {
    position: fixed;
    display: fixed;
    height: 100%;
    width: 225px;
    background-color: #012122;
    border-right: 1px solid white;
}
.menu__navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: space-around;
}

.menu__logo-block {
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    margin: 30px 0px 0px 0px;
    width: 100%;
    height: 65px;
    gap: 0px 20px;
}
.menu__logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.menu__logo > img{
    position: relative;
    float: left;
    width: 55px;
    height: 55px;
    background: url('@/assets/icon/shedule.png');
    background-size: contain;
    background-repeat: no-repeat;
}
.menu__logo-text {
    font-size: 22px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    letter-spacing: 0.1em;
    display: flex;  
    align-items: center;
    justify-content: flex-start;
}
.menu__logo-link {
}
.text__orange {
    color: #FFB800 !important;
}
.menu__nav-blocks {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 2fr 1fr/1fr;
}
.menu__nav-block__switcher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    row-gap: 35px;
}
.menu__naw-block__addition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    row-gap: 35px;
}
.manu__nav-item {
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    gap: 0px 25px;
}

.item__block-img {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
}

.item__block-img > img{
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    background: url('@/assets/icon/shedule.png');
    background-size: contain;
    background-repeat: no-repeat;
}
.item__block-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-size: 24px;
}
.test{
    color:black;
}
</style>