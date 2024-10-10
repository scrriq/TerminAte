<template lang="html">

    <div class="main__item">
        <div class="main__text"><slot></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>



<style scoped>
.main__item{
    width: 100%;
    height: 100%;
    background-color: #1C3737;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: 1px solid white; 
    box-shadow: 0px 0px 20px white;
}

.main__text{
    font-size: 40px;
}
</style>