import PAGES from 'db:pages';

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
        name: 'Services',
        path: PAGES.Services.path,
        children: [
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
        children: [
            {
                name: 'Article',
                path: ':slug',
                component: () => import('~/routes/articles.vue')
            }
        ],
    },
];