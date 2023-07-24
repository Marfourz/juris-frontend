<template>
  <div class="">
    <div class="font-bold text-2xl">{{ discussion.name }}</div>
    <div class="text-[#73777F] text-lg">{{ discussion.lastMessage || "Le dernier message s’affiche ici" }}</div>
  </div>
</template>

<script setup lang="ts">
import { type Discussion } from "../types";

const props = defineProps<{
    discussion : Discussion
}>();
</script>

<style scoped></style>
