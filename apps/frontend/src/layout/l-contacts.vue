<!--
    Styles
-->

<style lang="scss">

    .l-contacts {



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

            a {
                @include hover { color: $amber; }
            }

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
    <div class="l-contacts">

        <div class="l-contacts_address">
            <p v-for="address in addresses">
                <component v-if="address.icon" :is="address.icon" />
                {{ address.text }}
            </p>
        </div>

        <div class="l-contacts_social">
            <a v-for="item in social" :href="item.url" target="_blank">
                <component :is="item.icon" />
            </a>
        </div>

    </div>
</template>



<!--
    Scripts
-->

<script setup>

    import CONTACT from 'db:Contact'

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