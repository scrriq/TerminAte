<template>
    <div class="window" v-if="show" @click.stop="hideWindow">
        <div @click.stop class="window__content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default{
    name: 'my-window',
    props:{
        show:{
            type: Boolean,
            default: false,
        }
    },
    methods:{
        hideWindow(){
            this.$emit('update:show', false)
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
    min-height: 100px;
    min-width: 100px;
    padding: 20px;
}
</style>