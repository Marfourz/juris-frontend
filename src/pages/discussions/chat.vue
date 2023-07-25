<template>
  <div class="flex flex-col justify-between h-screen overflow-scroll">
    <div class="flex flex-col  flex-1 overflow-scroll pt-4" ref="chatZone">
      <Message :message="message" v-for="(message,i) in messages" ></Message>
      <Typing v-if="loadingMessage" ref="typing"></Typing>
    </div>

    <div class="w-full pb-10 md:px-20 px-8 pt-4 shadow" v-if="!isAdmin">
      <SearchInput @search="onSendMessage" :readonly="loadingMessage"></SearchInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Message from "../../components/Message.vue" ;
import { useMessageStore } from "../../stores/message";
import SearchInput from "../../components/SearchInput.vue";
import Typing from "../../components/Typing.vue";
import { TypeMessage } from "../../types";
import { useToast } from "vue-toastification";

const chatZone = ref()

const typing = ref()


const route = useRoute();

const loadingMessage = ref(false)

const discussionId = computed(() => {
  return route.params.id;
});

const isAdmin = computed(()=>{
  return route.meta.admin
})


const toast = useToast()
async function onSendMessage(message: string) {
  if(message){
    try {
    messages.value.push({
      text : message,
      type: TypeMessage.USER,
      createdAt : new Date().toISOString()
    })
    loadingMessage.value = true
    await sleep(100)
    scrollToBottom()

    const response = await messageStore.create(
      message,
      discussionId.value as string
    );
    await loadMessages()
    loadingMessage.value = false
    scrollToBottom()
  } catch (error) {
    toast.error("Un problème est survenu.Contactez l'administrateur.")
    loadingMessage.value = false
  }
  }
 
}

function sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }



const scrollToBottom = () => {
      const container = chatZone.value;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'auto' // You can use 'auto' or 'smooth' for the scroll behavior
        });
      }
};

const messageStore = useMessageStore();

const messages = ref<Array<any>>([]);


async function loadMessages(){
    try {
    messages.value = await messageStore.fetchForDiscussion(
      discussionId.value as string
    );
    
  } catch (error) {
    console.log("error", error);
  }
}

watch((discussionId), ()=>{
    loadMessages()
})

onMounted(async () => {
    await loadMessages()
   
    if(route.query.message && messages.value.length == 0){
     
        onSendMessage(route.query.message as string)
    }
});
</script>

<style scoped></style>
