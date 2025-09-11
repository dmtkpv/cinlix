export default {

    async routes () {

        const PAGES = await useFetchData('/api/pages');

        return [
            {
                name: 'About',
                path: PAGES.About.path,
                component: () => import('~/routes/about.vue')
            },
            {
                name: 'Contact',
                path: PAGES.Contact.path,
                component: () => import('~/routes/contact.vue')
            },
            // {
            //     path: PAGES.Services.path,
            //     component: () => import('~/routes/contact.vue')
            // },
            {
                name: 'Service',
                path: `${PAGES.Services.path}/:slug`,
                component: () => import('~/routes/service.vue')
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