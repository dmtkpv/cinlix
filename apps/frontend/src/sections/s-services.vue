<!--
    Styles
-->

<style lang="scss">

    .s-services {



        // -----------------
        // Common
        // -----------------

        display: grid;
        gap: 32px;

        @include lg-md {
            grid-template-columns: repeat(2, minmax(0, 500px));
            justify-content: center;
        }

        a {
            border: 1px solid $gray;
            display: grid;
            justify-items: center;
            text-align: center;
            padding: 32px 32px 84px 32px;
        }

        .ui-image {
            width: 80px;
            aspect-ratio: 1;
        }

        h3 {
            font-size: 20px;
            font-weight: 800;
            margin-top: 24px;
            margin-bottom: 16px;
        }

        p {
            line-height: 1.8;
            color: $gray-dark;
        }

        //
        //
        //
        //// -----------------
        //// Elements
        //// -----------------
        //
        //.ui-image {
        //    aspect-ratio: 3 / 2;
        //}
        //
        //h3 {
        //    font-size: 20px;
        //    font-weight: 800;
        //    margin-top: 32px;
        //    margin-bottom: 16px;
        //}
        //
        //p {
        //    line-height: 1.8;
        //    color: $gray-dark;
        //}



    }

</style>



<!--
    Template
-->

<template>
    <l-section container-class="s-services">
        <router-link v-for="item in value" :to="{ name: 'Service', params: { slug: item.slug }}">

            <ui-image :value="item.icon" bg="none" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>



<!--            <ui-image :value="item.image" />-->
<!--            <h3>{{ item.title }}</h3>-->
<!--            <p>{{ item.description }}</p>-->

        </router-link>
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