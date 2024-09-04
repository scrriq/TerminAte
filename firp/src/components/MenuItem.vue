<template>
    <div class="menu__item">  
        <div class="menu__item__container">
            <button class="menu__item__button" href="">
            <!-- <button class="menu__item__button" :class="{menu__item__button__temp: !show}" > -->
                <div class="menu__item__icon" src="/firp/src/assets/icon/dictionary.png">
                    <img :src="card.imageLink" class ="menu__icon__image">
                </div>
                <transition name="animation__menu">
                    <div class="menu__item__title" v-show="show" >
                        {{ card.name }}
                    </div>
                </transition>
            </button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        card:{
            type: Object,
            required: true,
        },
        show: Boolean,
    }

    

}

</script>



<style>
.menu__item{
    width: 100%;
    height: 100%;

}

.menu__item__container{
    width: 100%;
    height: 100%;
}

.menu__item__button{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 1fr/ 1fr 2.5fr;
    border: 0px;
    background: none;
}

.menu__item__icon{
    width: 100%;
    height: 100%;
    padding: 18px 10px;
}
.menu__icon__image{
    width: 35px;
    height: 35px;
    top: 0;
    left: 0;
}

.menu__item__title{
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-family:'Courier New', Courier, monospace;
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 0px 8px;
}

.animation__menu-leave-to {
  opacity: 0;
}
.animation__menu-enter-active{
  transition: opacity 0.9s ease;
}

.animation__menu-enter-from{
  opacity: 0;
}
</style>
