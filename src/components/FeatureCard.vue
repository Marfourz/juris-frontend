<template>
    <div class="flex flex-col items-center justify-center text-center space-y-4">
        <BaseIcon :name="icon"></BaseIcon>
        <div class="font-bold">{{ title }}</div>
        <div>{{ subtitle }}</div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        icon: String,
        title: String,
        subtitle: String
    })
</script>

<style scoped>

</style>