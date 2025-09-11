<!--
    Styles
-->

<style lang="scss">

    .fABlRU {
        padding-block: 0;
    }

    .s-articles {

        display: grid;
        background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8));

        @include lg-md {
            grid-template-columns: 1fr 1fr;
        }

        a {
            position: relative;
            background: $black-light;
        }

        .ui-image {
            aspect-ratio: 2 / 1;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 100%);
        }

        &_text {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            color: $white;

            h3 {
                font-size: 32px;
                font-weight: 800;
            }

        }


    }

</style>



<!--
    Template
-->

<template>
    <l-section class="fABlRU" container-class="s-articles" full>
        <nuxt-link v-for="item in value" :to="item.path">

            <ui-image :value="item.image" bg="none" />

            <div class="s-articles_text">
                <span>{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
            </div>

        </nuxt-link>
    </l-section>
</template>



<!--
    Scripts
-->

<script setup>

    import LSection from "../layout/l-section.vue";

    defineProps({
        value: Array
    })

</script>