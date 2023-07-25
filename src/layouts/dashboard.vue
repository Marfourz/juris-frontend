<template>
    <div class="h-screen w-screen flex overflow-hidden">   
        <DashboardNavBar class="md:w-[25%] hidden md:block"></DashboardNavBar>
        <div class="flex-1 flex flex-col space-y-20" :class="{' p-12': title}">
            <div class="text-4xl font-bold" v-if="title">{{ title }} </div>
            <RouterView class="flex-1"></RouterView>
        </div>
        
       
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DashboardNavBar from '../components/DashboardNavBar.vue';
import NavBar from '../components/NavBar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const title = computed(()=>{
    return route.meta.title
})

</script>

<style scoped>

</style>