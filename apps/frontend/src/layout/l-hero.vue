<!--
    Styles
-->

<style lang="scss">

    .l-hero {



        // -----------------
        // Common
        // -----------------

        position: relative;
        height: calc(100vh - $header);
        height: calc(100svh - $header);

        &_image { z-index: 1; }
        &_text, &_btn, &_nav { z-index: 2; }



        // -----------------
        // Image
        // -----------------

        &_image {

            position: absolute;
            inset: 0;
            background: $black-light;

            .ui-image {
                width: 100%;
                height: 100%;
                opacity: .35;
            }

            &:not(._active) {
                opacity: 0;
                transition: opacity 0s 1s;
            }

            &._active {
                z-index: 2;
                opacity: 1;
                transition: opacity 1s;
            }

        }



        // -----------------
        // Text
        // -----------------

        &_text {

            position: absolute;
            left: 50%;
            top: 50%;

            color: $white;

            padding: 0 80px;
            width: 100%;
            max-width: 800px;
            text-align: center;
            transform: translate(-50%, -50%);

            p, h1 {
                font-size: 48px;
                font-weight: 900;
            }

            span {
                display: block;
                margin-top: 8px;
            }

            &:not(._active) {
                opacity: 0;
                transition: opacity .5s;
            }

            &._active {
                opacity: 1;
                transition: opacity .5s .5s;
            }

        }



        // -----------------
        // Button
        // -----------------

        &_btn {

            position: absolute;
            z-index: 2;
            top: 50%;
            transform: translateY(-50%);
            color: $gray;

            @include hover {
                color: $amber;
            }

            svg {
                width: 32px;
            }

            &._prev {
                left: 24px;
            }

            &._next {
                right: 24px;
            }

        }


        // -----------------
        // Nav
        // -----------------

        &_nav {

            z-index: 2;
            position: absolute;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 16px;

            span {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: $gray;
                &._active {
                    background: $amber;
                }
            }

        }


    }

</style>



<!--
    Template
-->

<template>
    <div class="l-hero">

        <div class="l-hero_image" v-for="(slide, i) in slides" :class="{ _active: i === active }" @transitionend="enable">
            <ui-image :value="slide.image" bg="none" />
        </div>

        <div class="l-hero_text" v-for="(slide, i) in slides" :class="{ _active: i === active }">
            <component :is="heading ? 'h1' : 'p'">{{ slide.title }}</component>
            <span v-if="slide.note">{{ slide.note }}</span>
        </div>

        <button class="l-hero_btn _prev" v-if="controls" @click="move(-1)">
            <ic-left />
        </button>

        <button class="l-hero_btn _next" v-if="controls" @click="move(1)">
            <ic-right />
        </button>

        <div class="l-hero_nav" v-if="controls">
            <span v-for="(slide, i) in slides" :class="{ _active: i === active }" />
        </div>

    </div>
</template>



<!--
    Scripts
-->

<script setup>

    import { computed, ref } from 'vue'
    import UiImage from "../ui/ui-image.vue";

    const props = defineProps({
        value: [Object, Array],
        heading: Boolean,
    })

    const active = ref(0);
    const disabled = ref(false);

    const slides = computed(() => {
        return Array.isArray(props.value) ? props.value : [props.value];
    })

    const controls = computed(() => {
        return slides.value.length > 1;
    })

    function move (delta) {
        if (disabled.value) return;
        let i = active.value + delta;
        if (i < 0) i = props.value.length - 1;
        if (i > props.value.length - 1) i = 0;
        active.value = i;
        disabled.value = true;
    }

    function enable () {
        disabled.value = false
    }

</script>