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

        <s-hero :value="DATA.slides" />
        <s-cols title="Why Us" :value="DATA.why" />
        <s-cta />
        <s-services title="What we can do" :value="DATA.services" />
<!--        <s-articles title="What we can do" :value="DATA.why" />-->


    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'
    import DATA from 'db:About'

</script>