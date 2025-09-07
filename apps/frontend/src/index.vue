<!--
    Styles
-->

<style lang="scss">

    .l-header  { z-index: 2 }
    .l-blackout { z-index: 1 }

    main {
        position: relative;
        z-index: 1;
    }

</style>



<!--
    Template
-->

<template>
    <l-header />
<!--    <l-blackout />-->
    <l-error v-if="state.error" :code="state.error" />
    <router-view v-else />
    <l-footer />
</template>



<!--
    Scripts
-->

<script setup>

    import { useState } from '~/services/uses.js'
    import LError from '~/routes/error.vue'

    const state = useState()

</script>