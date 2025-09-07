<!--
    Styles
-->

<style lang="scss">

    .xFpjS3 {

        display: grid;

        @include lg {
            gap: 120px;
        }

        @include md {
            gap: 64px;
        }

        @include sm {
            gap: 100px;
        }

        @include lg-md {
            grid-template-columns: max-content 1fr;
        }
        
    }

</style>



<!--
    Template
-->

<template>
    <main>

        <s-hero
            :value="{ title: DATA.title, image: DATA.image }"
            heading
        />

        <l-section container-class="xFpjS3">
            <l-contacts />
            <ui-form
                button="Submit"
                :form="form"
                :value="edits"
                @submit="submit"
            />
        </l-section>

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import DATA from 'db:Contact'
    import { reactive } from 'vue'
    import { contact as form } from '~/config/forms.js'
    import UiForm from "../ui/ui-form.vue";


    const edits = reactive({})

    function submit () {
        console.log(edits)
    }



</script>