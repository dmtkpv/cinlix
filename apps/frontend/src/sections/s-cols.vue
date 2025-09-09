<!--
    Styles
-->

<style lang="scss">

    .s-cols {



        // -----------------
        // Common
        // -----------------

        display: grid;

        @include lg-md {
            gap: 32px;
            justify-content: space-between;
        }

        @include sm {
            gap: 80px;
            grid-template-columns: 1fr !important;
        }



        // -----------------
        // Elements
        // -----------------

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



        // -----------------
        // Center
        // -----------------

        &._center {
            text-align: center;
            .ui-image { margin-inline: auto; }
        }



        // -----------------
        // Service
        // -----------------

        &._service {
            @include sm {
                gap: 32px;
            }
        }

        &._service > * {
            border: 1px solid $gray;
            padding: 32px 32px 84px 32px;
            &:nth-child(4n-3), &:nth-child(4n) {
                background: $gray-light;
            }
        }



    }

</style>



<!--
    Template
-->

<template>
    <l-section :container-class="['s-cols', ...classes]" :container-style="style" :style="{ background: bg }">
        <article v-for="item in value">

            <ui-image :value="item.image" :style="image" :bg="props.image.bg" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>

        </article>
    </l-section>
</template>



<!--
    Scripts
-->

<script setup>

    import { computed } from 'vue'
    import LSection from "../layout/l-section.vue";
    import UiImage from "../ui/ui-image.vue";

    const props = defineProps({
        columns: Number,
        bg: String,
        image: Object,
        modifiers: Array,
        value: Array,
        maxWidth: Number
    })

    const classes = computed(() => {
        return props.modifiers?.map(modifier => `_${modifier}`) ?? [];
    })

    const style = computed(() => {
        const w = props.maxWidth ? `minmax(0, ${props.maxWidth}px)` : '1fr';
        return {
            gridTemplateColumns: `repeat(${props.columns}, ${w})`
        }
    })

    const image = computed(() => {
        const size = props.image.size ? `${props.image.size}px` : undefined;
        return {
            width: size,
            height: size,
            aspectRatio: props.image.ratio
        }
    })

</script>