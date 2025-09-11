<!--
    Styles
-->

<style lang="scss">



</style>



<!--
    Template
-->

<template>
    <input
        class="input"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value || null)"
    >
</template>



<!--
    Scripts
-->

<script setup>

    const emit = defineEmits([
        'update:modelValue'
    ])

    defineProps({
        type: String,
        modelValue: [String, Number],
    })

</script>