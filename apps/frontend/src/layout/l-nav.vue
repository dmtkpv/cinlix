<!--
    Styles
-->

<style lang="scss">

    .l-nav {



        // -----------------
        // Common
        // -----------------

        &:not(:last-child) {
            @include lg { padding-right: 48px }
            @include md { padding-right: 24px }
        }

        @include lg-md {
            position: relative;
            display: flex;
            align-items: center;
        }



        // -----------------
        // Blackout
        // -----------------

        &_blackout {

            @include lg-md {
                position: absolute;
                z-index: 2;
                inset: 0;
                bottom: -1px;
                background: $white;
                border-bottom: 1px solid $gray;
            }

        }



        // -----------------
        // Link
        // -----------------

        &_link {

            position: relative;
            z-index: 3;
            display: flex;
            align-items: center;

            svg {
                height: 1em;
                margin-left: .4em;
            }

            &.router-link-active {
                color: $amber;
            }

            @include hover {
                color: $amber;
            }

            @include md {
                font-size: 14px;
            }

            @include sm {
                margin: 1em 0;
            }

        }



        // -----------------
        // Dropdown
        // -----------------

        &_dropdown {

            @include lg-md {

                position: absolute;
                z-index: 1;
                top: 100%;
                left: -1.5em;
                padding: .5em 1.5em;
                border: 1px solid $gray;
                background: $white;
                transition: transform .3s;

                a {
                    white-space: nowrap;
                    margin: 1em 0;
                }

            }

            @include sm {
                padding-left: 16px;
            }

        }



        // -----------------
        // Modifiers
        // -----------------

        @include lg-md {

            &._nested._hovered > &_link {
                color: $amber;
            }

            &:not(._hovered) &_dropdown {
                transform: translateY(-100%);
            }

        }

        @include sm {

            &._clicked > &_link svg {
                transform: rotate(180deg);
            }

            &:not(._clicked) &_dropdown {
                display: none;
            }

        }



    }

</style>



<!--
    Template
-->

<template>
    <div class="l-nav" :class="{ _hovered, _clicked, _nested: children }" @mouseleave="leave" >

        <router-link class="l-nav_link" :to="path" @mouseenter="enter" @click.native.capture="click">
            <span>{{ title }}</span>
            <ic-dropdown v-if="children" />
        </router-link>

        <div class="l-nav_blackout" />

        <nav class="l-nav_dropdown" v-if="children" @click="leave">
            <router-link class="l-nav_link" v-for="child in children" :to="child.path">{{ child.title }}</router-link>
        </nav>

    </div>
</template>



<!--
    Scripts
-->

<script setup>

    import { ref } from 'vue'

    const props = defineProps([
        'title',
        'path',
        'children'
    ])

    const _hovered = ref(false);
    const _clicked = ref(false);

    function enter () {
        _hovered.value = true;
    }

    function leave () {
        _hovered.value = false;
    }

    function click (event) {
        if (props.children) {
            _clicked.value = !_clicked.value;
            event.preventDefault();
        }
    }

</script>