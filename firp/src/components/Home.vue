<template>
    <div class="main">
        <div class="container"> 
            <Button label="Submit" />
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';

</script>


<style scoped>
*{
    width: 100%;
    height: 100%;
}
.main{
    margin: 0px 0px 0px 90px;
}
.container{
    height: 100%;
    width: 1100px;
    margin: 0px auto;
    border: 2px solid silver;
}
button{
    width: 50px;
    height: 50px;
    color: red;
}
</style>