<template>
    <div class="menu">
        <nav class="menu__navigation">
            <div class="menu__logo-block">
                <a class = 'menu__logo' href=""> <span class="text__orange">ENL</span>INO</a>
            </div>
            <div class="menu__nav-items">
                <div class="manu__nav-item">A</div>
                <div class="manu__nav-item">B</div>
                <div class="manu__nav-item">C</div>
                <div class="manu__nav-item">D</div>
                <div class="manu__nav-item">E</div>
                <div class="manu__nav-item">F</div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.menu{
    position: fixed;
    display: fixed;
    height: 100%;
    width: 225px;
    background-color: black;
    border-right: 1px solid white;

}
.menu__navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: space-around;
}
.menu__nav-items{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.menu__logo-block{
    width: 100%;
    height: 65px;
    background-color: rgb(71, 2, 46);

    font-size: 42px;
    font-family: 'Roboto Condensed';
    font-weight: 700;
    letter-spacing: 0.1em;
    display: flex;  
    align-items: center;
    justify-content: center;
}
.menu__logo {

}
.manu__nav-item{
    font-size: 40px;
}
.text__orange{
    color: #FFB800 !important;
}
</style>