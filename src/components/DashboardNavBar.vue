<template>
  <div class="bg-[#F1F1F1] border-r border-semiBlack">
    <div class="h-12 bg-primary flex items-center justify-center text-white cursor-pointer" @click="goToChat">
      RETOUR AU CHATBOT
    </div>

    <div class="px-8 flex-1 flex flex-col justify-between">
      <div class="pt-6">
        <div class="flex flex-col items-center space-y-2">
          <div
            class="flex items-center justify-center rounded-full border-2 border-white h-18 w-18"
          >
            <img
              src="@/assets/images/profil.png"
              alt=""
              class="rounded-full object-cover"
            />
          </div>
          <div>Admin</div>
        </div>

        <div class="text-[#707C97] space-y-10 pt-20">
          <div
            class="flex space-x-10 items-center cursor-pointer"
            @click="changeMenu(item.route)"
            v-for="item in menu"
            :class="{ 'text-[#2A8BF2] font-bold': item.route == actualRoute }"
          >
            <BaseIcon :name="item.icon"></BaseIcon>
            <div>{{ item.title }}</div>
          </div>
        </div>

        <div
          class="flex space-x-10 items-center absolute bottom-10 text-[#707C97]"
        >
          <BaseIcon name="logout"></BaseIcon>
          <div>Déconnexion</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from "./global/BaseIcon.vue";
import { useDiscussionStore } from "../stores/discussion";
import BaseCircle from "./global/BaseCircle.vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const discussionStore = useDiscussionStore();

const menu = [
  {
    title: "Tableau de bord",
    icon: "dashboard",
    route: "dashboard",
  },
  {
    title: "Discussion",
    icon: "message",
    route: "discussions",
  },
  {
    title: " Utilisateurs",
    icon: "user",
    route: "users",
  },
];

const actualRoute = computed(() => {
  return route.name;
});

const router = useRouter()

function changeMenu(menuName : string){
    router.push({
        name: menuName
    })
}

function goToChat(){
    router.push({
        name: 'welcome'
    })
}
</script>

<style scoped></style>
