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

        <l-hero :value="DATA.slides" />

<!--        <ui-slider class="h-150" :value="dbSlides" />-->

<!--        <l-section title="Why us" wrapper :grid="3" :gap="120">-->
<!--            <item-why v-for="{ title, note } in dbWhy" :title="title" :note="note" />-->
<!--        </l-section>-->

<!--        <l-section title="How we work" wrapper :grid="4" :gap="80" class="bg-gary-light">-->
<!--            <item-how v-for="item in dbHow" />-->
<!--        </l-section>-->

<!--        <section class="bg-black text-white py-20">-->
<!--            <div class="wrapper flex gap-10 items-center justify-center">-->
<!--                <p class="bold text-3xl">Let’s make videos that click & <span class="text-amber">Stories</span> that stick</p>-->

<!--                <ui-button text="Get a free quote" />-->
<!--            </div>-->
<!--        </section>-->

<!--        <l-section title="What we can do" wrapper :grid="2" :gap="40">-->
<!--            <item-what v-for="({ title, note }, i) in dbWhat" :title="title" :note="note" :class="{ 'bg-gray-light': (Math.floor(i / 2) + i) % 2 }" />-->
<!--        </l-section>-->

<!--        <l-section :grid="2" title="Blog/News" class="!pb-0">-->
<!--            <item-blog v-for="item in dbBlog" :value="item" :image="item.image" />-->
<!--        </l-section>-->

        <h1 v-for="n in 1000">A</h1>

    </main>
</template>



<!--
    Scripts
-->

<script setup>

    import DATA from 'db:About'

    console.log(DATA)

    // import { dbBlog, dbHow, dbSlides, dbWhat, dbWhy } from '~/config/database'
    // import { UiSlider, LSection, ItemWhy, ItemHow, ItemWhat, ItemBlog, UiButton, LHero } from '~/config/components'

</script>