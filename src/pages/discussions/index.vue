<template>
  <div class="flex w-full items-center justify-center py-20">
    <div class="w-[70%] flex justify-between flex-col items-center h-full">
      <div class="flex flex-col items-center space-y-10 w-full">
        <img src="@/assets/images/logo.png" alt="" class="w-28 h-28" />

        <div class="text-center space-y-10">
          <div class="font-bold text-5xl">Bienvenu</div>
          <div>
            Je suis “Juris” votre chatbot juridique. En quoi puis-je vous aidez
            ?
          </div>
        </div>
        <div class="w-full">
          <SearchInput @search="onSearch"></SearchInput>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <FeatureCard
          v-for="feature in features"
          :icon="feature.icon"
          :title="feature.title"
          :subtitle="feature.subtitle"
        ></FeatureCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import FeatureCard from "../../components/FeatureCard.vue";
import SearchInput from "../../components/SearchInput.vue";
import { useDiscussionStore } from "../../stores/discussion";
import { useMessageStore } from "../../stores/message";
import { useToast } from "vue-toastification";

const discussionStore = useDiscussionStore();
const messageStore = useMessageStore();
const toast = useToast()

const features = [
  {
    icon: "precis",
    title: "Claire et précis",
    subtitle: "Pariatur sint laborum cillum aute consectetur irure.",
  },
  {
    icon: "location",
    title: "Personnalité",
    subtitle: "Pariatur sint laborum cillum aute consectetur irure.",
  },
  {
    icon: "precis",
    title: "Efficace",
    subtitle: "Pariatur sint laborum cillum aute consectetur irure.",
  },
];

const router = useRouter();
async function onSearch(value: string) {
  const discussion = await discussionStore.create("New chat");
  if (discussion._id) {
    router.push({
        name: "chat",
        params: {
          id: discussion._id
        },
        query:{
          message : value
        }
      });
      await discussionStore.myDiscussions()
   
  }
}
</script>

<style scoped></style>
