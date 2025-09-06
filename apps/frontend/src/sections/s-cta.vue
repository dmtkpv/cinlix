<!--
    Styles
-->

<style lang="scss">

    .s-cta {

        background: $black;
        color: $white;
        padding-block: 60px;

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }

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