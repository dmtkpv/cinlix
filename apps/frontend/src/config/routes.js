import PAGES from 'db:pages';
import Error from '~/routes/error.vue'

export default [
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
        children: [
            {
                name: 'Services',
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
        path: PAGES.Articles.path,
        children: [
            {
                name: 'Articles',
                path: '',
                component: () => import('~/routes/articles.vue')
            },
            {
                name: 'Article',
                path: ':slug',
                component: () => import('~/routes/article.vue')
            }
        ],
    },
];