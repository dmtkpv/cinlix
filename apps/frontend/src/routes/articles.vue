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

        <l-hero
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

    import DATA from 'db:Articles'

</script>