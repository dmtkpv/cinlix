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

    import MAP from 'db:map-articles'
    import { defineOptions } from 'vue'
    import { usePreload } from '~/services/uses.js'
    import { date } from '~/services/utils.js'



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