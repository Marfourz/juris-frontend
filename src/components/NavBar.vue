<template>
    <div class="bg-[#F1F1F1] dark:bg-black  border-r border-semiBlack py-4">
        
        <div class="bg-gray-200 flex items-center space-x-4 rounded-xl mx-4 px-4 py-3">
            <BaseCircle :value="usersStore.getInitial"></BaseCircle>
            <div>{{ usersStore.getFullname }}</div>
        </div>
        <div class="space-y-8 p-8 max-h-[600px] overflow-scroll">
            
            <div v-for="discussion in discussions" class="flex items-center space-x-4 cursor-pointer" @click="showDiscussion(discussion._id)">
                <BaseIcon name="discussion"></BaseIcon>
                <div>{{ discussion.name }}</div>
            </div>
        </div>
        <div class="px-4">
            <BaseButton icon="plus" expand @click="router.push({name:'welcome'})">Nouvel discussion</BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseIcon from './global/BaseIcon.vue';
import { useDiscussionStore } from "../stores/discussion"
import BaseCircle from './global/BaseCircle.vue';
import { useUsersStore } from '../stores/user';
import { computed,onMounted,ref } from 'vue';
import type { Discussion } from '../types';
import router from '../router';

const usersStore = useUsersStore()

const user = computed(()=>{
    return usersStore.getCurrentUser
})

const discussionStore = useDiscussionStore()

const discussions = computed<Array<Discussion>>(()=>{
    return discussionStore.discussions
})




onMounted(async () => {
    try{
        await discussionStore.myDiscussions()   
    }
    catch(error){
        console.log("error", error)
    }
    
})

function showDiscussion(id : string){
    router.push({
        name : 'chat',
        params:{
            id: id
        }
    })
}

</script>

<style scoped>

</style>