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
            :value="{ title: DATA.title, image: DATA.image, note: DATA.date }"
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

    const route = useRoute();
    const DATA = await useFetchData(`/api/articles/${route.params.slug}`);

</script>