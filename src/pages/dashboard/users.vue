<template>
  <div>
    <div class="space-y-6" v-if="!loading">
      <UserComponent v-for="user in users" :key="user.id" :user="user"></UserComponent>
    </div>
    <div v-else class="flex justify-center text-2xl">
        Chargement....
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "../../stores/user";
import { onMounted, ref } from "vue";
import UserComponent from "../../components/User.vue";
import type { User } from "../../types";
const usersStore = useUsersStore();

const users = ref<Array<User>>([]);

const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
    users.value = await usersStore.findAll({});
    loading.value = false
  } catch (error) {
    console.log("error", error);
  }
});
</script>

<style scoped></style>
