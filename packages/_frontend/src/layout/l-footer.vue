<!--
    Styles
-->

<style lang="scss">

    .l-footer {



        // -----------------
        // Common
        // -----------------

        background: $black;
        color: $white;
        padding-block: 64px;
        font-weight: 400;

        a:not(.ui-button) {
            @include hover {
                color: $amber;
            }
        }



        // -----------------
        // Container
        // -----------------

        .container {

            @include lg-md {
                display: grid;
                grid-template-columns: 1fr 1.5fr 3fr max-content;
            }

            @include lg {
                gap: 96px;
                font-size: 16px;
            }

            @include md {
                gap: 48px;
                font-size: 14px;
            }

            @include sm {
                display: flex;
                flex-direction: column;
                gap: 48px;
            }


        }




        // -----------------
        // Nav
        // -----------------

        &_nav {

            display: flex;
            flex-direction: column;
            gap: 12px;

            &:first-child {
                white-space: nowrap;
            }

        }



        // -----------------
        // CTA
        // -----------------

        &_cta {

            p {
                font-size: 1.75em;
                font-weight: 700;
                margin-bottom: 24px;
            }

        }



    }

</style>



<!--
    Template
-->

<template>
    <footer class="l-footer">
        <div class="container">


            <!-- nav -->

            <nav v-for="nav in navs" class="l-footer_nav">
                <router-link v-for="item in nav" :to="item.path">{{ item.title }}</router-link>
            </nav>


            <!-- cta -->

            <div class="l-footer_cta">
                <p>Let’s make awesome things together</p>
                <ui-button text="Contact us" :to="{ name: 'Contact' }" />
            </div>


            <!-- contacts -->

            <l-contacts />


        </div>

    </footer>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'

    const navs = [
        [PAGES.About, PAGES.Quote, PAGES.Contact, PAGES.Team, PAGES.Work, PAGES.Privacy, PAGES.Articles],
        [...PAGES.services]
    ]

</script>