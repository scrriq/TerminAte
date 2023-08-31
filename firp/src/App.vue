<template>
  <div class="wrapper">
    <app-header/>
    <app-default/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppDefault from './components/AppDefault.vue'
export default {
components :{
  AppHeader, AppDefault
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  bottom: 0;
  color:white;
}

*,*::after,*::before{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display:block;}

html,body{
  background-color: #212121;
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,button,textarea{font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
a,a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}

.wrapper {
  display: grid;
}
</style>
