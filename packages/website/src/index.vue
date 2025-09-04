<!--
    Styles
-->

<style lang="scss">



</style>



<!--
    Template
-->

<template>

    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li v-for="n in 5">
            <router-link :to="`/blog/${n}`">{{ n }}</router-link>
        </li>
    </ul>

<!--    <router-view />-->
<!--    <l-header />-->
<!--    <router-view />-->
<!--    <l-footer />-->
</template>



<!--
    Scripts
-->

<script setup>

    import("page-" + location.hash.slice(1));

    // import test from 'db:test'
</script>