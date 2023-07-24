<template>
    <div class="flex border border-semiBlack rounded-lg w-full pl-2 pr-1 py-1 bg-[#E3E2E6]">
        <input type="text" class="w-full rounded-lg focus:outline-none  appearance-none bg-[#E3E2E6] " :readonly="readonly" v-model="search" @keyup.enter="$emit('search',search); search = ''">
        <div class="rounded-lg bg-primary flex justify-center items-center w-12 h-12" @click="$emit('search',search); search = ''">
            <BaseIcon name="send"></BaseIcon>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    defineEmits(['search'])
    const search = ref("")

    defineProps({
        readonly : Boolean
    })
</script>

<style scoped>

</style>