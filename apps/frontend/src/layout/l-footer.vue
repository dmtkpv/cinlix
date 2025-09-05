<!--
    Template
-->

<template>
    <footer class="l-footer bg-black text-white">
        <div class="wrapper flex gap-26 py-20" >
            <nav class="columns-2" style="width: 400px">
                <router-link class="block" v-for="item in dbPages" :to="item.path">{{ item.title }}</router-link>
            </nav>
            <div>
                <p class="text-3xl font-bold">Let’s make awesome things together</p>
                <ui-button text="Contact us" />
            </div>
            <div>
                Cinlix
                {{ dbContacts.street }}
                {{ dbContacts.city }}, {{ dbContacts.state }} {{ dbContacts.zip }}

                <a v-for="item in contacts" class="flex">
                    <component class="w-4 mr-2" :is="item.icon" />
                    {{ item.text }}
                </a>


                <div class="flex">
                    <a v-for="item in social" :href="item.url" target="_blank" class="p-3">
                        <component class="w-6" :is="item.icon" />
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

    // import { dbPages, dbContacts } from '~/config/database'
    // import { IcFacebook, IcLinkedin, IcTwitter, IcInstagram, IcPhone, IcMail, UiButton } from '~/config/components'
    //
    // const contacts = [
    //     { url: '', icon: IcPhone, text: dbContacts.phone },
    //     { url: '', icon: IcMail, text: dbContacts.email },
    // ]
    //
    // const social = [
    //     { url: dbContacts.twitter, icon: IcTwitter },
    //     { url: dbContacts.facebook, icon: IcFacebook },
    //     { url: dbContacts.linkedin, icon: IcLinkedin },
    //     { url: dbContacts.instagram, icon: IcInstagram },
    // ]




</script>