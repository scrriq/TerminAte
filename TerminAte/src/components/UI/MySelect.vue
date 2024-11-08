<template>
    <div class="myselect">
        <select class="myselect__list " :value="modelValue" @change="changeOptions">
            <option class="myselect__item default" disabled value="" hidden>По умолчанию</option>
            <option class="myselect__item" v-for="option in options" :key="option.value" :value="option.value" > {{ option.name }}</option>
        </select>
    </div>
</template>


<script>
export default{
    data(){
        return{
            selected: ''
        }
    },
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
.myselect {
    display: flex;
    align-items: center;
}
.myselect__list {
    color: #373737;
    min-width: 70px;
    height: 30px;
    background-color: transparent;
    border: 1px dashed black;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
}

.myselect__item {
    color: black;
    font-weight: 600;
}


</style>