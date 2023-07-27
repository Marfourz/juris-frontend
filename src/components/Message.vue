<template>
  <div class="flex space-x-6 md:py-10 py-6 md:px-20 px-6" :class="{'bg-[#F9F9F9] dark:bg-[rgba(0,0,0,0.1)]': message.type == TypeMessage.CHATBOT}">
    <BaseCircle
      :value="usersStore.getInitial"
      class="bg-[#09B4B4] w-14 h-14"
      v-if="message.type == TypeMessage.USER"
    ></BaseCircle>
    <div v-else><BaseIcon name="logo" class="w-14 h-14"></BaseIcon></div>
    <div class="flex-1 pt-2">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Message } from "../types/index";
import { TypeMessage } from "../types";
import { useUsersStore } from "../stores/user";
import BaseIcon from "./global/BaseIcon.vue";

const usersStore = useUsersStore()

const props = defineProps<{
  message : Message
}>();
</script>

<style scoped></style>
