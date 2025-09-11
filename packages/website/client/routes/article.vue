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
            :value="{ title: DATA.title, image: DATA.image, note: date(DATA.created_at) }"
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



    // -------------------
    // Options
    // -------------------

    defineOptions({
        preload (to) {
            return MAP[to.params.slug]();
        }
    })



    // -------------------
    // Options
    // -------------------

    const DATA = usePreload();



</script>