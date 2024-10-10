<template>
    <div class="menu" v-bind:class="{menuShow: !show}" @mouseenter="show = true" @mouseleave="show = false" >
        <div class="menu__container">
            <nav class="menu__navigation">
                <div class="menu__header">
                    <h1>Hello</h1>                    
                </div>
                <div class="menu__navigation__shell">
                    <menu-item class="menu__items" @click="$router.push(card.name)"  v-for="card in cards" :card = "card" :key="card" :show="show" ></menu-item>
                </div>
            </nav>
        </div>
    </div>
</template>



<script>    
import MenuItem from './MenuItem.vue'
export default {
    data(){
        return{
            show: true,
            cards:[
            {name: 'Dictionary', imageLink: require("../assets/icon/dictionary.png")},
            {name: 'Shedule',imageLink: require("../assets/icon/shedule.png")},
            {name: 'Cards', imageLink: require("../assets/icon/card.png")},
            {name: 'Memorise', imageLink: require("../assets/icon/memorise.png")},
            {name: 'Account', imageLink: require("../assets/icon/account.png")},
            ]
        }
    },
    methods: {
        hello(){
            this.show = !this.show
        }
    },
    components:{
        MenuItem
    }
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
}

.menu__container{
    width: 100%;
    height: 100%;
    padding: 10px;

}

.menu__header{
    display: flex;

}

.menu__navigation__shell{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 2fr 2fr 2fr 2fr 5fr / 1fr;
    align-items: flex-end;
}

.menu__items{
    width: 100%;
    height: 75px;
}

.menu__items:active{
    border: 1px solid white;    
    border-radius: 30px;
}


</style>