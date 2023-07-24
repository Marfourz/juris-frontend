<template>
  <div class="flex justify-between " >
    <div class="flex space-x-6">
      <BaseCircle :value="initial" class="bg-[#09B4B4] w-16 h-16"></BaseCircle>
      <div class="flex-1">
        <div class="font-bold text-2xl">{{ fullname }}</div>
        <div class="text-[#73777F] text-lg">{{ user.lastMessage || "Salut tout le monde" }}</div>
      </div>
    </div>
    <div class="rounded-full w-4 h-4" :class="{'bg-[#FABC3B]' : user.online}">

    </div>
  </div>
</template>

<script setup lang="ts">
import { type User } from "../types";
import { computed } from "vue";

const props = defineProps<{
    user : User
}>();

const fullname = computed(() => {
  return `${props.user.lastname} ${props.user.firstname}`;
});

const initial = computed(() => {
  if (props.user?.lastname && props.user?.firstname) {
    return `${props.user?.lastname[0]}${props.user.firstname[0]}`;
  }
  
});
</script>

<style scoped></style>
