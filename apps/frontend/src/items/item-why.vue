<!--
    Template
-->

<template>
    <div class="item-why">
        <div class="h-[225px] bg-gray mb-8" />
        <h2 class="text-xl font-extrabold mb-4">{{ title }}</h2>
        <p>{{ note }}</p>
    </div>
</template>


<!--
    Scripts
-->

<script lang="ts" setup>

    defineProps<{
        title: string;
        note: string;
    }>()

</script>