<!--
    Styles
-->

<style lang="scss">

    

</style>



<!--
    Template
-->

<template>
    <div>{{ route.params }}</div>
</template>



<!--
    Scripts
-->

<script setup>

    import { watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { useRouter } from 'vue-router'

    // import blogs from 'db:Blogs'


    const route = useRoute()
    //
    //
    // console.log(blog);
    //
    //
    watch(() => route.params.id, async (id) => {
        console.log('!!')
        const data = await blogs[id]()
        console.log(data.default)

        // import(`db:blog-${route.params.id}`)
    }, {
        immediate: true
    })


</script>