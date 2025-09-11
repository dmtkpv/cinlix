<!--
    Styles
-->

<style lang="scss">

    .s-cta {



        // -----------------
        // Common
        // -----------------

        background: $black;
        color: $white;
        padding-block: 60px;



        // -----------------
        // Container
        // -----------------

        .container {

            display: grid;

            @include lg {
                grid-template-columns: auto auto;
                justify-content: center;
                gap: 40px;
            }

            @include md-sm {
                justify-items: center;
                text-align: center;
                gap: 24px;
            }
        }



        // -----------------
        // Text
        // -----------------

        p {
            font-size: 32px;
            font-weight: 700;
            span { color: $amber-dark; }

        }



    }

</style>



<!--
    Template
-->

<template>
    <l-section class="s-cta">
        <p>Let’s make videos that click & <span>Stories</span> that stick </p>
        <ui-button text="Get a free quote" />
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