<!--
    Styles
-->

<style lang="scss">

    .ui-button {

        background: $amber;
        color: $white;
        font-size: 16px;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: 12px;
        width: max-content;
        white-space: nowrap;

        @include hover {
            background: $amber-dark;
        }

    }

</style>



<!--
    Template
-->

<template>
    <ui-dynamic class="ui-button">
        {{ text }}
    </ui-dynamic>
</template>


<!--
    Scripts
-->

<script setup>

    defineProps({
        text: String
    })

</script>