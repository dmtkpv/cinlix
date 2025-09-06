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
    <router-view />
    <l-footer />
</template>



<!--
    Scripts
-->

<script setup>



</script>