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