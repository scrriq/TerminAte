<template>
    <div class="window" v-if="modelValue" @click.stop="hideWindow">
        <div @click.stop class="window__content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default{
    name: 'my-window',
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        }
    },
    methods:{
        hideWindow(){
            this.$emit('update:modelValue', false)
        }
    }
}
</script>

<style scoped>
.window {
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    position:fixed;
    display: flex;  
}
.window__content {
    margin: auto;
    background-color: white;
    border-radius: 12px;
    min-height: 250px;
    min-width: 400px;
    padding: 40px 20px;
    background-color: #212121;
    border: 1px solid white;
}
</style>