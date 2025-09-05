<!--
    Styles
-->

<style lang="scss">

    .ui-image {

        opacity: 0;
        transition: opacity .3s;

        &._loaded {
            opacity: 1;
        }

    }

</style>



<!--
    Template
-->

<template>
    <img class="ui-image"
         ref="$el"
         :src="src"
         :class="{ _loaded }"
         @load="_loaded = true"
    >
</template>



<!--
    Scripts
-->

<script setup>

    import { computed, ref, onMounted } from 'vue'

    const props = defineProps([
        'value'
    ])

    const _loaded = ref(false);
    const $el = ref(null);

    const src = computed(() => {
        return `${BACKEND_URL}/assets/${props.value}`
    })

    onMounted(() => {
        if ($el.value.complete) _loaded.value = true;
    })

</script>