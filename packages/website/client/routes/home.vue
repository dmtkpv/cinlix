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

        <h1 class="sr-only">{{ PAGES.Home.title }}</h1>

        <s-hero :value="DATA.slides" />

        <s-cols
            v-bind="SECTION_WHY"
            title="Why Us"
            :value="DATA.why"
        />

        <s-cols
            v-bind="SECTION_HOW"
            title="How we work"
            :value="DATA.how"
        />

        <s-cta />

        <s-cols
            v-bind="SECTION_SERVICES"
            title="What we can do"
            :value="DATA.services"
        />

        <s-articles
            :title="PAGES.Articles.title"
            :value="DATA.articles"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    const PAGES = await useFetchData('/api/pages');
    const DATA = await useFetchData('/api/home');

</script>