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

        <s-vertical title="Why Us" :value="DATA.why" />


    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'
    import DATA from 'db:About'

</script>