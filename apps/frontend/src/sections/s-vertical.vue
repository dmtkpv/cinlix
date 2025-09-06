<!--
    Styles
-->

<style lang="scss">

    .s-vertical {

        display: grid;

        .ui-image {
            aspect-ratio: 3 / 2;
        }

        h3 {
            font-size: 20px;
            font-weight: 800;
            margin-top: 32px;
            margin-bottom: 16px;
        }

        p {
            line-height: 1.8;
            color: $gray-dark;
        }

        @include lg-md {
            grid-template-columns: repeat(3, minmax(0, 320px));
            gap: 32px;
            justify-content: space-between;
        }

        @include sm {
            grid-template-columns: 1fr;
            gap: 80px;
        }

    }

</style>



<!--
    Template
-->

<template>
    <l-section class="s-vertical">

        <article v-for="item in value">

            <ui-image :value="item.image" />
            <h3>{{ item.title }}</h3>
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