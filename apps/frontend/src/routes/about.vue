<!--
    Styles
-->

<style lang="scss">

    .fABlRU {
        padding-top: 0;
    }

</style>



<!--
    Template
-->

<template>
    <main>

        <h1 class="sr-only">{{ PAGES.About.title }}</h1>

        <s-hero :value="DATA.slides" />

        <s-cols
            v-bind="why"
            title="Why Us"
            :value="DATA.why"
        />

        <s-cols
            v-bind="how"
            title="How we work"
            :value="DATA.how"
        />

        <s-cta />

        <s-cols
            v-bind="services"
            title="What we can do"
            :value="DATA.services"
        />

        <s-cols
            v-bind="articles"
            :title="PAGES.Articles.title"
            :value="DATA.articles"
            class="fABlRU"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'
    import DATA from 'db:About'
    import { why, how, services, articles } from '~/config/sections.js'

</script>