<template>
    <div class="h-screen w-screen flex ">   
        <NavBar class="w-[25%]"></NavBar>
        <RouterView class="flex-1"></RouterView>
       
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';


</script>

<style scoped>

</style>