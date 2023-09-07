<template>
    <div class="menu">
        <nav class="menu__navigation">
            <div class="menu__logo-block">
                <a class = 'menu__logo' href=""> <span class="text__orange">ENL</span>INO</a>
            </div>
            <div class="menu__nav-blocks">
                <div class="menu__nav-block__switcher">
                    <div class="manu__nav-item shedule">
                        <span>Shedule</span> 
                    </div>
                    <div class="manu__nav-item card">
                        <span>Card</span>
                    </div>
                    <div class="manu__nav-item memorise">
                        <span>Memorise</span>
                    </div>
                    <div class="manu__nav-item dictionary">
                        <span>Dictionary</span>
                    </div>
                </div>
                <div class="menu__naw-block__addition">
                    <div class="manu__nav-item setting">
                        <span>Setting</span>
                    </div>
                    <div class="manu__nav-item account">
                        <span>Account</span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

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
    margin: 30px 0px 0px 0px;
    width: 100%;
    height: 65px;
    /* background-color: rgb(71, 2, 46); */

    font-size: 40px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    letter-spacing: 0.1em;
    display: flex;  
    align-items: center;
    justify-content: center;
}
.menu__logo {
}
.text__orange {
    color: #FFB800 !important;
}
.menu__nav-blocks {
    width: 100%;
    height: 100%;
    /* background-color: rgb(57, 57, 57); */
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
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 60px;
    padding: 0px 0px 0px 40px;
    /* background-color: #210008; */
    border: 1px solid black;
}
/* .manu__nav-item > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/shedule.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
} */
.shedule > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/shedule.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
}
.card > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/card.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
}
.memorise > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/memorise.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
}
.dictionary > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/dictionary.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -1px 30px 0px 0px;
}
.setting > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/setting.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
}
.account > span::before{
    content: "";
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    background: url('@/assets/icon/account.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: -2px 30px 0px 0px;
}
</style>