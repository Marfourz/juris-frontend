<template>
  <div class="space-y-6 overflow-scroll">
    <DiscussionComponent
      v-for="discussion in discussions"
      :key="discussion._id"
      :discussion="discussion"
    >
    </DiscussionComponent>


  </div>
</template>

<script setup lang="ts">
import DiscussionComponent  from "../../components/Discussion.vue"
import { useDiscussionStore } from "../../stores/discussion"
import type { Discussion } from "../../types";
import { ref,onMounted } from "vue"
const discussionStore = useDiscussionStore();
const discussions = ref<Array<Discussion>>([])

onMounted(async () => {
  try{
    discussions.value = await discussionStore.fetchAll()
  }
  catch(error){
    console.log("error", error)
  }
  
})
</script>

<style scoped></style>
