<!--
    Styles
-->

<style lang="scss">

    .s-articles {

        display: grid;
        gap: 32px;

        @include lg-md {

            &._small {
                grid-template-columns: 1fr 1fr 1fr;
            }

            &:not(._small) {
                grid-template-columns: 1fr 1fr;
            }


        }



        a {
            position: relative;
            background: $black-light;
        }

        .ui-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 240px;
            mask-image: linear-gradient(to bottom, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%);
        }

        &_text {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: relative;
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
    <l-section :container-class="['s-articles', small && '_small']">
        <nuxt-link v-for="item in value" :to="item.path">

            <ui-image :value="item.image" bg="none" />

            <div class="s-articles_text">
                <span>{{ item.date }}</span>
                <h3>{{ item.title }}</h3>
                <p v-if="item.description">{{ item.description }}</p>
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

    defineProps({
        value: Array,
        small: Boolean
    })

</script>