<template>
    <div class="rounded-full flex items-center justify-center w-10 h-10 text-white uppercase bg-primary">
        {{ value }}
    </div>
</template>

<script setup lang="ts">
    defineProps({
        value : String
    })
</script>

<style scoped>

</style>