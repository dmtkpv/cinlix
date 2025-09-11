<!--
    Styles
-->

<style lang="scss">

    .s-hero {



        // -----------------
        // Common
        // -----------------

        position: relative;
        height: calc(100vh - $header);
        height: calc(100svh - $header);

        &:not(._full) {
            max-height: 600px;
        }

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

            &._blur .ui-image {
                filter: blur(20px);
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
            width: 100%;
            max-width: 800px;
            transform: translate(-50%, -50%);

            display: grid;
            justify-items: center;

            svg {
                font-size: 96px;
                margin-bottom: 24px;
            }

            h1, p {
                font-size: 48px;
                text-align: center;
                @include sm { font-size: 32px;  }
            }

            &_note {
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

            @include lg-md {
                padding: 0 80px;
            }

            @include sm {
                padding: 0 24px;
            }

        }



        // -----------------
        // Button
        // -----------------

        &_btn {

            position: absolute;
            z-index: 2;
            top: 0;
            width: 80px;
            height: 100%;
            color: $gray;
            display: flex;
            align-items: center;
            justify-content: center;

            @include hover {
                color: $amber;
            }

            svg {
                font-size: 48px;
            }

            &._prev {
                left: 0;
            }

            &._next {
                right: 0;
            }

            @include sm {
                display: none;
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
    <section class="s-hero" :class="{ _full: full }" @swiped-left="move(1)" @swiped-right="move(-1)">

        <div class="s-hero_image" v-for="(slide, i) in slides" :class="{ _active: i === active, _blur: slide.blur }" @transitionend="enable">
            <ui-image :value="slide.image" bg="none" width="1920" />
        </div>

        <div class="s-hero_text" v-for="(slide, i) in slides" :class="{ _active: i === active }">
            <icon name="local:logo" v-if="slide.logo" />
            <span v-if="slide.note">{{ slide.note }}</span>
            <component :is="heading ? 'h1' : 'p'" :style="{ fontWeight: slide.logo ? 600 : 900 }">{{ slide.title }}</component>
        </div>

        <button class="s-hero_btn _prev" v-if="controls" @click="move(-1)">
            <icon name="ri:arrow-left-s-line" />
        </button>

        <button class="s-hero_btn _next" v-if="controls" @click="move(1)">
            <icon name="ri:arrow-right-s-line" />
        </button>

        <div class="s-hero_nav" v-if="controls">
            <span v-for="(slide, i) in slides" :class="{ _active: i === active }" />
        </div>

    </section>
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
        full: Boolean
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
        if (!controls.value) return;
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