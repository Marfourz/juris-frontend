<template>
    <div class="grid grid-cols-2 gap-10 ">
        <div class="rounded-2xl flex justify-center items-center bg-[#F9F9F9]" v-for="info in infos">
            <div class="flex space-x-10 items-center">
                <div class="bg-[#F4F7FE] h-16 w-16 rounded-full flex justify-center items-center ">
                    <BaseIcon :name="info.icon"></BaseIcon>
                </div>
               
                <div class="space-y-2">
                    <div class="text-[#A3AED0]">{{ info.title }}</div>
                    <div class="text-4xl font-bold">{{ info.total }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed,onMounted,ref } from 'vue';
import { useUsersStore } from '../../stores/user';

    const infos = computed(()=>{
        return [
            {
                title :  "Discussions",
                total : stats.value ? stats.value.totalDiscussions : "...chargement",
                icon : "messages"
            },
            {
                title :  "Utilisateurs",
                total : stats.value ? stats.value.totalUsers : '...chargement',
                icon : "dashboardUser"
            }
        ]
    })

    const userStore = useUsersStore()

    const stats = ref()

    onMounted(async () => {
        stats.value = await userStore.stats()
    })
</script>

<style scoped>

</style>