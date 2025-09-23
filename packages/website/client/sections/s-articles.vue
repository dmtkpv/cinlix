<!--
    Styles
-->

<style lang="scss">

    .fABlRU {
        padding-block: 0;
    }

    .s-articles {

        display: grid;
        background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.8));

        @include lg-md {
            grid-template-columns: 1fr 1fr;
        }

        a {
            position: relative;
            background: $black-light;
        }

        .ui-image {
            height: 240px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 100%);
        }

        &_text {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            color: $white;
            padding: 48px;

            h3 {
                font-size: 32px;
                font-weight: 800;
                margin-bottom: 16px;
            }

        }

        &_more {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
            color: $amber;
        }


    }



</style>



<!--
    Template
-->

<template>
    <l-section class="fABlRU" container-class="s-articles" full>
        <nuxt-link v-for="item in value" :to="item.path">

            <ui-image :value="item.image" bg="none" />

            <div class="s-articles_text">
                <span>{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div class="s-articles_more">
                    Read more
                    <icon name="ri:arrow-right-long-line" />
                </div>
            </div>

        </nuxt-link>
    </l-section>
</template>



<!--
    Scripts
-->

<script setup>

    import LSection from "../layout/l-section.vue";
    import UiButton from "../ui/ui-button.vue";

    defineProps({
        value: Array
    })

</script>