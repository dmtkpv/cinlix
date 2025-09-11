<!--
    Styles
-->

<style lang="scss">

    .l-section {

        padding-top: 100px;
        padding-bottom: 160px;

        &_heading {
            text-align: center;
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 80px;

            @include sm {
                font-size: 32px;
            }
        }

    }

</style>



<!--
    Template
-->

<template>
    <section class="l-section">
        <h2 v-if="title" class="l-section_heading container">{{ title }}</h2>
        <div :class="[{ container: !full }, containerClass]" :style="containerStyle">
            <slot />
        </div>
    </section>
</template>



<!--
    Scripts
-->

<script setup>

    const props = defineProps({
        title: String,
        full: Boolean,
        containerClass: [String, Array, Object],
        containerStyle: Object,
    })

</script>