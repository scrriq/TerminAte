<template>
    <input :value="modelValue" @input="updateInput" type="text" class="in">
</template>

<script>
export default{
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style scoped>
.in{
    min-height: 50px;
    border-radius: 15px;
    background: transparent;
    border: 3px solid white;
    font-size: 20px;
    padding: 0px 15px;
}
</style>