import Error from '~/routes/error.vue';

export default {

    async routes () {

        const PAGES = await useFetchData('/api/pages');

        return [
            {
                name: 'Home',
                path: PAGES.Home.path,
                component: () => import('~/routes/home.vue')
            },
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
            {
                path: PAGES.Services.path,
                component: () => import('~/routes/services.vue'),
                children: [
                    {
                        path: '',
                        component: Error
                    },
                    {
                        name: 'Service',
                        path: ':slug',
                        component: () => import('~/routes/service.vue')
                    }
                ],
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


            // missing

            {
                name: 'Quote',
                path: PAGES.Quote.path,
                component: Error
            },
            {
                name: 'Team',
                path: PAGES.Team.path,
                component: Error
            },
            {
                name: 'Work',
                path: PAGES.Work.path,
                component: Error
            },
            {
                name: 'Privacy',
                path: PAGES.Privacy.path,
                component: Error
            },
            {
                path: '/404',
                component: Error
            },
            {
                path: '/:pathMatch(.*)*',
                component: Error
            },



        ]

    }

}