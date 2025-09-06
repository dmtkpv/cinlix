<!--
    Styles
-->

<style lang="scss">

    .s-articles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;

        .ui-image {
            aspect-ratio: 3/2;
        }

    }

</style>



<!--
    Template
-->

<template>
    <l-section class="s-articles">
        <router-link v-for="item in value" :to="{ name: 'Article', params: { slug: item.slug }}">

            <ui-image :value="item.image" />
            <span>{{ date(item.created_at) }}</span>
            <h2>{{ item.title }}</h2>

        </router-link>
    </l-section>
</template>



<!--
    Scripts
-->

<script setup>

    import { date } from '~/services/utils.js'

    defineProps({
        value: Array
    })

</script>