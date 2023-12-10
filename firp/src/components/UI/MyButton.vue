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
    margin: 0px 0px 0px 20px;
    color:white;
    width: 100px;
    height: 30px;
    background-color: rgb(50, 48, 47);

}
</style>