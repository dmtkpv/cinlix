<!--
    Template
-->

<template>
    <div class="relative h-[300px]">
        <img :src="image" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-linear-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]" />
    </div>
</template>


<!--
    Scripts
-->

<script lang="ts" setup>

// background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%);


    defineProps<{
        image: string;
    }>()

</script>