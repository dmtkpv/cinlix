<!--
    Styles
-->

<style lang="scss">

    .i-text {
        resize: vertical;
        height: 226px;
    }

</style>



<!--
    Template
-->

<template>
    <textarea
        class="input i-text"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value || null)"
    />
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