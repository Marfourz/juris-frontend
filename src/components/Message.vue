<template>
  <div class="flex space-x-6 py-10 px-20" :class="{'bg-[#F9F9F9]': message.type == TypeMessage.CHATBOT}">
    <BaseCircle
      value="BM"
      class="bg-[#09B4B4] w-14 h-14"
      v-if="message.type == TypeMessage.USER"
    ></BaseCircle>
    <div v-else><img src="@/assets/images/logo.png" alt="" /></div>
    <div class="flex-1 pt-2">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Message } from "../types/index";
import { TypeMessage } from "../types";

const props = defineProps<{
  message : Message
}>();
</script>

<style scoped></style>
