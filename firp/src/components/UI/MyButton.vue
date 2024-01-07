<template>
    <button class="add-card__btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>


<style scoped>
.add-card__btn{
    color:white;
    width: 200px;
    height: 50px;
    background-color: rgb(50, 48, 47);
    font-size: 18px;
}
</style>