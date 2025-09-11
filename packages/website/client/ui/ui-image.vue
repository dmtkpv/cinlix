<!--
    Styles
-->

<style lang="scss">

    .ui-image {

        white-space: nowrap;
        background: $gray;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity .3s;
            &._loaded { opacity: 1 }
        }
    }

</style>



<!--
    Template
-->

<template>
    <div class="ui-image" :style="{ background: bg }">
        <img ref="$img"
             :src="src"
             :class="{ _loaded }"
             @load="_loaded = true"
        >
    </div>
</template>



<!--
    Scripts
-->

<script setup>

    const props = defineProps({
        value: String,
        bg: String,
        width: {
            type: String,
            default: '512'
        },
    })

    const _loaded = ref(false);
    const $img = ref(null);
    const config = useRuntimeConfig()

    const src = computed(() => {
        return `${config.public.BACKEND_URL}/assets/${props.value}?width=${props.width}`
    })

    onMounted(() => {
        if ($img.value.complete) _loaded.value = true;
    })

</script>