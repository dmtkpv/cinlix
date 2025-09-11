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
        border-bottom: 1px solid $gray;

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
                @include lg { font-size: 32px }
                @include md-sm { font-size: 24px }
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

            @include lg-md {
                display: flex;
                height: 100%;
            }

            @include sm {
                position: fixed;
                top: $header;
                right: 0;
                bottom: 0;
                width: 240px;
                overflow: auto;
                background: $white;
                padding: 12px 24px;
                transform: translateX(100%);
                transition: transform $duration;
            }

            @at-root ._nav & {
                transform: translateX(0);
            }

        }



        // -----------------
        // Toggle menu
        // -----------------

        &_menu {

            transition: transform $duration;

            svg {
                font-size: 24px;
            }

            rect {
                transform-box: fill-box;
                transform-origin: center;
                transition: transform $duration;
            }

            @include lg-md {
                display: none;
            }

            @at-root ._nav & {
                transform: rotate(-90deg);
                rect:nth-child(1) { transform: translateY(7px) rotate(45deg) }
                rect:nth-child(2) { transform: scaleX(0) }
                rect:nth-child(3) { transform: translateY(-7px) rotate(-45deg) }
            }

        }



        // -----------------
        // Blackout
        // -----------------

        &_blackout {

            top: $header;
            visibility: hidden;
            opacity: 0;
            transition: opacity $duration, visibility 0s $duration;

            @include lg-md {
                display: none;
            }

            @at-root ._nav & {
                visibility: visible;
                opacity: 1;
                transition: opacity $duration;
            }


        }



    }


</style>



<!--
    Template
-->

<template>

    <header class="l-header" :class="{ _nav: state.nav }">
        <div class="container">


            <!-- logo -->

            <router-link to="/" class="l-header_logo">
                <icon name="local:logo" />
                <p>Crafting Visual Stories</p>
            </router-link>


            <!-- menu -->

            <button class="l-header_menu" @click="state.nav = !state.nav">
                <icon name="local:menu" />
            </button>


            <!-- blackout -->

            <div class="l-header_blackout blackout" @click="state.nav = false" />


            <!-- nav -->

            <nav class="l-header_nav">
                <l-nav v-for="item in nav" v-bind="item" />
            </nav>


        </div>
    </header>
</template>



<!--
    Scripts
-->

<script setup>

    import styles from '~/styles/abstract.module.scss'

    const PAGES = await useFetchData('/api/pages');

    const nav = [
        { title: PAGES.About.title, path: PAGES.About.path },
        { title: PAGES.Services.title, path: PAGES.Services.path, children: PAGES.services },
        { title: PAGES.Articles.title, path: PAGES.Articles.path },
        { title: PAGES.Contact.title, path: PAGES.Contact.path },
    ]

    const state = useAppState();
    const route = useRoute();
    const sm = parseFloat(styles.sm);

    function resize () {
        if (window.innerWidth > sm) state.nav = false;
    }

    watch(route, () => {
        state.nav = false;
    })

    onMounted(() => {
        window.addEventListener('resize', resize);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', resize);
    })

</script>