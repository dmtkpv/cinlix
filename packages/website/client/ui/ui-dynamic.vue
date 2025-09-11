<!--
    Template
-->

<template>

    <nuxt-link v-if="props.to" :to="to">
        <slot />
    </nuxt-link>

    <a v-else-if="props.href" :href="props.href">
        <slot />
    </a>

    <button v-else-if="attrs.onClick || type" :type="type || 'button'">
        <slot />
    </button>

    <div v-else>
        <slot />
    </div>

</template>



<!--
    Scripts
-->

<script setup>

    const props = defineProps({
        to: Object,
        href: String,
        type: String,
    })

    const attrs = useAttrs();

</script>