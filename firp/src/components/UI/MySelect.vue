<template>
    <div class="main">
        <select class="opt" :value="modelValue" @change="changeOptions">
            <option disabled value=""> Выберите из списка</option>
            <option v-for="option in options" :key="option.value" :value="option.value" class="bl"> {{ option.name }}</option>
        </select>
    </div>
</template>


<script>
export default{
    name: 'my-select',
    props : {
        modelValue : {
            type: String,
        },
        options:{
            type: Array,
            default: () => []
        }
    },
    methods:{
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}

</script>


<style>
.opt{
    width: 200px;
    height: 40px;
}
.bl{
    color:black;
}
</style>