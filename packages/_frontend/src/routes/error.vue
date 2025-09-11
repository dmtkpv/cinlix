<!--
    Styles
-->

<style lang="scss">

    

</style>



<!--
    Template
-->

<template>
    <main>
       <s-hero :value="hero" full />
    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import ERRORS from 'db:errors'
    import { computed } from 'vue'

    const props = defineProps({
        code: {
            type: String,
            default: '404'
        }
    })

    const hero = computed(() => {
        const { image, title, description } = ERRORS[props.code];
        return { image, title, note: description }
    })

</script>