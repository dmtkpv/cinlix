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

        <h1 class="sr-only">{{ PAGES.About.title }}</h1>

        <l-hero :value="DATA.slides" />

        <l-section title="Why Us">
            <section-why value="" />
        </l-section>

        <h1 v-for="n in 1000">A</h1>

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'
    import DATA from 'db:About'

</script>