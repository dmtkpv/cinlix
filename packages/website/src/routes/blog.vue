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

    import pages from 'db:pages'
    import blogs from 'db:Blogs'

    import(blog[1]).then()


    //
    // const route = useRoute()
    //
    //
    // console.log(blog);
    //
    //
    // watch(route, async () => {
    //     const data = await blog[route.params.id]()
    //     console.log(data)
    //
    //     // import(`db:blog-${route.params.id}`)
    // }, {
    //     immediate: true
    // })


</script>