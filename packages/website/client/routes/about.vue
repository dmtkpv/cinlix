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

        <s-wysiwyg
            :value="DATA.content"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    const DATA = await useFetchData('/api/about');

</script>