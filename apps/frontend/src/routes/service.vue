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
        {{ DATA.title }}
    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import SERVICES from 'db:Services'
    import { defineOptions } from 'vue'
    import { usePreload } from '~/services/uses.js'



    // -------------------
    // Options
    // -------------------

    defineOptions({
        preload (to) {
            return SERVICES[to.params.slug]();
        }
    })



    // -------------------
    // Options
    // -------------------

    const DATA = usePreload();
    // console.log(DATA)



</script>