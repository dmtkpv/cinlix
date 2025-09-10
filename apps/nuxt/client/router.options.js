export default {

    async routes () {

        const PAGES = await useData('pages')

        return [
            {
                name: 'About',
                path: PAGES.About.path,
                component: () => import('~/routes/about.vue')
            },
            {
                name: 'Articles',
                path: PAGES.Articles.path,
                component: () => import('~/routes/articles.vue')
            },
            {
                name: 'Article',
                path: `${PAGES.Articles.path}/:slug`,
                component: () => import('~/routes/article.vue')
            },
        ]

    }

}