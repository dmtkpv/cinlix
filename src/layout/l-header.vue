<!--
    Styles
-->

<style lang="scss">

    .l-header {

        $duration: .3s;


        // -----------------
        // Common
        // -----------------

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: $header;
        background: $white;

        .container {
            display: flex;
            align-items: center;
            height: 100%;
        }



        // -----------------
        // Logo
        // -----------------

        &_logo {

            margin-right: auto;

            svg {
                @include lg-md { margin-inline: auto }
                @include lg { height: 32px }
                @include md-sm { height: 24px }
            }

            p {
                margin-top: .5em;
                @include lg { font-size: 14px }
                @include md-sm{ font-size: 12px }
            }

        }



        // -----------------
        // Nav
        // -----------------

        &_nav {

            display: flex;

            .router-link-active {
                color: $amber;
            }

            @include lg {
                gap: 48px;
            }

            @include md {
                gap: 24px;
                font-size: 14px;
            }

            @include sm {
                position: fixed;
                top: $header;
                right: 0;
                bottom: 0;
                width: 220px;
                background: $white;
                flex-direction: column;
                gap: 12px;
                padding: 24px;
                border-top: 1px solid $gray;
                transform: translateX(100%);
                transition: transform $duration;
            }

            @at-root ._opened & {
                transform: translateX(0);
            }

        }




        // -----------------
        // Blackout
        // -----------------

        &_blackout {
            position: fixed;
            top: $header;
            right: 0;
            bottom: 0;
            width: 100%;
            background: $black-light;
            opacity: 0;
            visibility: hidden;
            transition: opacity $duration, visibility 0s $duration;

            @at-root ._opened & {
                opacity: .75;
                visibility: visible;
                transition: opacity $duration;
            }

        }



        // -----------------
        // Toggle menu
        // -----------------

        &_menu {

            transition: transform $duration;

            svg {
                height: 24px;
            }

            rect {
                transform-box: fill-box;
                transform-origin: center;
                transition: transform $duration;
            }

            @include lg-md {
                display: none;
            }

            @at-root ._opened & {
                transform: rotate(-90deg);
                rect:nth-child(1) { transform: translateY(7px) rotate(45deg) }
                rect:nth-child(2) { transform: scaleX(0) }
                rect:nth-child(3) { transform: translateY(-7px) rotate(-45deg) }
            }

        }



    }


</style>



<!--
    Template
-->

<template>
    <header class="l-header" :class="{ _opened: menu }">
        <div class="container">

            <router-link to="/" class="l-header_logo">
                <ic-logo />
                <p>Crafting Visual Stories</p>
            </router-link>

            <button class="l-header_menu" @click="menu = !menu">
                <ic-menu />
            </button>

            <div class="l-header_blackout" @click="menu = false" />

            <nav class="l-header_nav">
                <router-link v-for="item in nav" :to="item.path">{{ item.title }}</router-link>
            </nav>

        </div>
    </header>
</template>



<!--
    Scripts
-->

<script lang="ts" setup>

    import { ref } from 'vue'
    import { dbPages } from '~/config/database'
    import { IcLogo, IcMenu } from '~/config/components'

    const nav = dbPages.filter(page => page.header);
    const menu = ref(false);

</script>