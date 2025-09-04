<!--
    Template
-->

<template>
    <div class="ui-slider relative overflow-hidden bg-black-light">


        <img class="absolute w-full h-full object-cover opacity-35" :src="value[active].image">

        <div class="relative w-full h-full flex items-center text-white p-6">

            <button class="opacity-50" @click="setIndex(active - 1)">
                <ic-left class="h-8" />
            </button>

            <p class="text-5xl font-black text-center grow">{{ value[active].text }}</p>

            <button class="opacity-50" @click="setIndex(active + 1)">
                <ic-right class="h-8" />
            </button>

        </div>

        <div class="absolute left-[50%] bottom-6 flex gap-4 translate-x-[-50%]">
            <div v-for="(item, index) in value" class="w-2 h-2 rounded-[50%]" :class="index === active ? 'bg-amber' : 'bg-gray'" />
        </div>

    </div>
</template>


<!--
    Scripts
-->

<script lang="ts" setup>

    import { ref } from 'vue'
    import { IcLeft, IcRight } from '~/config/components'

     const props = defineProps<{
         value: { image: string; text: string }[]
     }>()

    const active = ref(0);

    function setIndex (index: number) {
        if (index < 0) index = props.value.length - 1;
        if (index > props.value.length - 1) index = 0;
        active.value = index;
    }




</script>