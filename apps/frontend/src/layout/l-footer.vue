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



        // -----------------
        // Address
        // -----------------

        &_address {

            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 24px;

            p {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            svg {
                height: 16px;
            }

        }



        // -----------------
        // Social
        // -----------------

        &_social {

            display: flex;
            gap: 12px;

            svg {
                height: 24px;
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

            <div class="l-footer_contacts">

                <div class="l-footer_address">
                    <p v-for="address in addresses">
                        <component v-if="address.icon" :is="address.icon" />
                        {{ address.text }}
                    </p>
                </div>

                <div class="l-footer_social">
                    <a v-for="item in social" :href="item.url" target="_blank">
                        <component :is="item.icon" />
                    </a>
                </div>


            </div>
        </div>

    </footer>
</template>



<!--
    Scripts
-->

<script setup>

    import PAGES from 'db:pages'
    import CONTACT from 'db:Contact'

    const navs = [
        [PAGES.About, PAGES.Articles, PAGES.Contact],
        [...PAGES.services]
    ]

    const addresses = [
        { text: 'Cinlix' },
        { text: CONTACT.street },
        { text: `${CONTACT.city}, ${CONTACT.state} ${CONTACT.zip}` },
        { text: CONTACT.phone, icon: 'ic-phone', },
        { text: CONTACT.email, icon: 'ic-mail' },
    ]

    const social = [
        { url: CONTACT.twitter, icon: 'ic-twitter' },
        { url: CONTACT.facebook, icon: 'ic-facebook' },
        { url: CONTACT.linkedin, icon: 'ic-linkedin' },
        { url: CONTACT.instagram, icon: 'ic-instagram' },
    ]



</script>