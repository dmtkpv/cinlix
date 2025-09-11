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

        <s-horizontal
            :value="DATA.sections"
        />

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    const route = useRoute();
    const DATA = await useFetchData(`/api/services/${route.params.slug}`);

</script>