<template>
  <div class="h-screen w-screen">
    <div class="p-16">
      <div class="space-x-3.5 flex items-center">
        <div><img src="@/assets/images/logo.png" alt="" /></div>
        <div class="font-bold text-2xl">Juris</div>
      </div>

      <div class="flex w-full justify-center">
        <div class="w-1/3 space-y-4">
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
