<script setup>
import ProgressSpinner from 'primevue/progressspinner';
</script>


<template>
    <ProgressSpinner
    style="
    width: 50px;
    height: 50px"
    strokeWidth = "8"
    fill = "var(--surface-ground)"
    anumationDuration=".5s"
    arial-label="Custom ProgressSpinner"/>
</template>