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
        }

    }

</style>



<!--
    Template
-->

<template>
    <section class="l-section">
        <div class="container" :class="props.class">
            <h2 v-if="title" class="l-section_heading">{{ title }}</h2>
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
        class: String,
        container: Boolean,
    })

</script>