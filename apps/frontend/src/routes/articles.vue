<!--
    Styles
-->

<style lang="scss">

    

</style>



<!--
    Template
-->

<template>
    <main>

        <s-hero
            :value="{ title: DATA.title, image: DATA.image }"
            heading
        />

        <s-cols
            v-bind="articles"
            :value="DATA.articles"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import DATA from 'db:Articles'
    import { articles } from '~/config/sections.js'

</script>