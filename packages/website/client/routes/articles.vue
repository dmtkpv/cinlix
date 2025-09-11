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

        <s-articles
            :value="DATA.articles"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    const DATA = await useFetchData('/api/articles');

</script>