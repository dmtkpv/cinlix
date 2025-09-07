<!--
    Styles
-->

<style lang="scss">

    .l-header  {
        z-index: 2;
    }

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
    <l-error v-if="state.error" :code="state.error" />
    <router-view v-else />
    <l-footer />
</template>



<!--
    Scripts
-->

<script setup>

    import { computed, watch } from 'vue'
    import { useState } from '~/services/uses.js'
    import LError from '~/routes/error.vue'

    const state = useState()

    const scrollable = computed(() => {
        return !state.nav;
    })

    watch(scrollable, value => {
        document.body.style.overflow = value ? '' : 'hidden'
    })

</script>