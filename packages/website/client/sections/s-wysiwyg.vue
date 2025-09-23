<!--
    Styles
-->

<style lang="scss">

    .s-wysiwyg p {
        margin: 1em;
    }

</style>



<!--
    Template
-->

<template>
    <l-section class="s-wysiwyg">
        <div v-html="value" />
    </l-section>
</template>



<!--
    Scripts
-->

<script setup>

    defineProps({
        value: String
    })

</script>