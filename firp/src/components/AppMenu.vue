<template>
    <div class="menu" v-bind:class="{menuShow: !show}" @mouseenter="show = true" @mouseleave="show = false" >
        <nav class="menu__navigation">
            <div class="menu__double-shell">
                <div class="menu__first-shell">
                    <div class="menu__logo-block">
                        <img src="@/assets/icon/shedule.png" alt="">
                    </div>
                    <div class="menu__icon-blocks default__nav-side">
                        <div class="icon__block-img menu__default-block">
                            <img src="@/assets/icon/shedule.png" alt="">
                        </div>
                        <div class="icon__block-img menu__default-block">
                            <img src="@/assets/icon/card.png" alt="">
                        </div>
                        <div class="icon__block-img menu__default-block">
                            <img src="@/assets/icon/memorise.png" alt="">
                        </div>
                        <div class="icon__block-img menu__default-block forward__menu-setting">
                            <img src="@/assets/icon/dictionary.png" alt="">
                        </div>
                        <div class="icon__block-img menu__default-block">
                            <img src="@/assets/icon/setting.png" alt="">
                        </div>
                        <div class="icon__block-img menu__default-block">
                            <img src="@/assets/icon/account.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="menu__second-shell" v-bind:class="{switchBlock: !show}">
                    <div class="menu__logo-block menu_logo__text-block">
                        <a class = 'menu__logo-link' href=""> 
                            <p class="text__orange">Language Learning</p>
                        </a>
                    </div>
                    <div class="menu__text-blocks default__nav-side">
                            <div class="item__text-block menu__default-block">
                                <p>Shedule</p>
                            </div>
                            <div class="item__text-block menu__default-block">
                                <p>Card</p>
                            </div>
                            <div class="item__text-block menu__default-block">
                                <p>Memorise</p> 
                            </div>
                            <div class="item__text-block menu__default-block forward__menu-setting">
                                <p>Dictionary</p> 
                            </div>
                            <div class="item__text-block menu__default-block">
                                <p>Setting</p> 
                            </div>
                            <div class="item__text-block menu__default-block">
                                <p>Account</p> 
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
            show: false,
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
    transition-duration: .25s;
}
.menuShow{
    width: 90px;
    transition-duration: .25s;
}
.menu__navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}



.menu__double-shell {
    width: 100%;
    height: 100%;
    display: flex;
}
.menu__first-shell {
    height: 100%;
    min-width: 90px;
    max-width: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.menu__second-shell {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.switchBlock{
}

.menu__logo-block{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 55px;
    max-height: 55px;
    margin: 30px 0px 0px 0px;
}
.menu__logo-block > img{
    position: relative;
    float: left;
    width: 55px;
    height: 55px;
    background: url('@/assets/icon/shedule.png');
    background-size: contain;
    background-repeat: no-repeat;
}
.menu_logo__text-block{

}
.menu__logo-link{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0px 0px 0px 10px;
}


.menu__icon-blocks {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icon__block-img {
    display: flex;
    width: 100%;
    height: 100%;
}
.icon__block-img {
    width: 35px;
    height: 35px;
    position: relative;
}
.icon__block-img > img{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}
.menu__text-blocks{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item__text-block{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 0px 10px;
    width: 100%;
    height: 100%;
    font-size: 22px;
}

.menu__default-block{
    min-height: 35px;
    max-height: 35px;
    margin: 0px 0px 40px 0px;
}
.forward__menu-setting{
    margin: 0px 0px 135px;
}
.default__nav-side{
    margin: 90px 0px 0px 0px;
}

.text__orange {
    color: #FFB800 !important;
}


</style>