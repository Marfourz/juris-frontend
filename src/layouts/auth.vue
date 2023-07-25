<template>
  <div class="h-screen w-screen">
    <div class="md:p-16 p-6 md:space-y-0 space-y-10">
      <div class="space-x-3.5 flex items-center md:justify-start justify-center pt-10 md:pt-0">
        <div><img src="@/assets/images/logo.png" alt="" /></div>
        <div class="font-bold text-2xl">Juris</div>
      </div>

      <div class="flex w-full justify-center">
        <div class="md:w-1/3 space-y-4">
          <div class="font-bold text-3xl text-center">{{ title }}</div>
          <div class="text-center">
            {{ subtitle }}
          </div>
          <div class="pt-10">
            <RouterView></RouterView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();

const title = computed(()=>{
  return route.meta.title
})

const subtitle = computed(()=>{
  return route.meta.subtitle
})

</script>

<style scoped></style>
