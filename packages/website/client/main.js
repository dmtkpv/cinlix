export default defineNuxtPlugin(() => {

    if (process.client) {
        import('swiped-events')
    }

})