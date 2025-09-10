<!--
    Styles
-->

<style lang="scss">


</style>



<!--
    Template
-->

<template>
    <nuxt-link :to="PAGES.About.path">About</nuxt-link>
    <nuxt-link :to="PAGES.Articles.path">Articles</nuxt-link>
    <nuxt-link :to="`${PAGES.Articles.path}/article`">Article</nuxt-link>
    <hr>
    <nuxt-page />
</template>



<!--
    Scripts
-->

<script setup>


const PAGES = await useData('pages')

console.log(PAGES)



</script>