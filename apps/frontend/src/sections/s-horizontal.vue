<!--
    Styles
-->

<style lang="scss">

    .s-horizontal {

        display: flex;
        flex-direction: column;
        gap: 64px;

        &_item {

            display: flex;
            gap: 32px;

            .ui-image {
                width: 200px;
                aspect-ratio: 1;
            }
        }

    }

</style>



<!--
    Template
-->

<template>
    <l-section class="s-horizontal">

        <article v-for="item in value" class="s-horizontal_item">

            <ui-image :value="item.image" />
            <p>{{ item.description }}</p>

        </article>

    </l-section>
</template>



<!--
    Scripts
-->

<script setup>



    defineProps({
        value: Array
    })

</script>