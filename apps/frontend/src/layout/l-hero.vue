<!--
    Styles
-->

<style lang="scss">

    .l-hero {
        height: calc(100vh - $header);
        height: calc(100svh - $header);
        background: $black-light;
    }

</style>



<!--
    Template
-->

<template>
    <aside class="l-hero">
        {{ value }}
    </aside>
</template>



<!--
    Scripts
-->

<script setup>

    defineProps([
        'value'
    ])

</script>