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
    width: 200px;
    height: 50px;
    color:black;
}
</style>