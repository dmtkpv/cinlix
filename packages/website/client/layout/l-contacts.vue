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
                font-size: 16px;
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
                font-size: 24px;
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
                <icon v-if="address.icon" :name="address.icon" />
                {{ address.text }}
            </p>
        </div>

        <div class="l-contacts_social">
            <a v-for="item in social" :href="item.url" target="_blank">
                <icon :name="item.icon" />
            </a>
        </div>

    </div>
</template>



<!--
    Scripts
-->

<script setup>

    const CONTACT = await useFetchData('/api/contact');

    const addresses = [
        { text: 'Cinlix' },
        { text: CONTACT.street },
        { text: `${CONTACT.city}, ${CONTACT.state} ${CONTACT.zip}` },
        { text: CONTACT.phone, icon: 'ri:phone-fill', },
        { text: CONTACT.email, icon: 'ri:mail-fill' },
    ]

    const social = [
        { url: CONTACT.twitter, icon: 'ri:twitter-fill' },
        { url: CONTACT.facebook, icon: 'ri:facebook-fill' },
        { url: CONTACT.linkedin, icon: 'ri:linkedin-fill' },
        { url: CONTACT.instagram, icon: 'ri:instagram-fill' },
    ]

</script>