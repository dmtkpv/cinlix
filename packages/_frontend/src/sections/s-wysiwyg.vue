<!--
    Styles
-->

<style lang="scss">

    

</style>



<!--
    Template
-->

<template>
    <l-section class="s-wysiwyg">
        {{ value }}
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