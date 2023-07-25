<template>
  <div class="h-screen w-screen flex">
    <NavBar class="md:w-[25%] hidden md:block"></NavBar>

    <div class="w-full h-full">
      <div class="flex justify-end p-4 md:hidden">
        <BaseIcon name="menu" @click="showMenu = !showMenu"></BaseIcon>
      </div>
      <RouterView class="flex-1 h-full"></RouterView>
    </div>


    <div class="md:hidden shadow fixed top-0 bottom-0 left-0 w-[80%] z-10 " v-if="showMenu">
      <NavBar class="h-full" @click="showMenu = !showMenu"></NavBar>
    </div>

    <div
      class="bg-black opacity-50 fixed inset-0"
      @click="showMenu = !showMenu"
      v-if="showMenu"
    ></div>

    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import BaseIcon from "../components/global/BaseIcon.vue";

const showMenu = ref(false);
</script>

<style scoped></style>
