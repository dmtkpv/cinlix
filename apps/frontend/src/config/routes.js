import PAGES from 'db:pages';
import About from '~/routes/about.vue'
import Contact from '~/routes/contact.vue'
import Service from '~/routes/service.vue'
import Articles from '~/routes/articles.vue'
import Article from '~/routes/article.vue'
import Error from '~/routes/error.vue'

export default [
    {
        name: 'about',
        path: PAGES.About.path,
        component: About
    },
    {
        name: 'contact',
        path: PAGES.Contact.path,
        component: Contact
    },
    {
        path: PAGES.Services.path,
        children: [
            {
                name: 'services',
                path: '',
                component: Error
            },
            {
                name: 'service',
                path: ':slug',
                component: Service
            }
        ],
    },
    {
        path: PAGES.Articles.path,
        children: [
            {
                name: 'articles',
                path: '',
                component: Articles
            },
            {
                name: 'article',
                path: ':slug',
                component: Article
            }
        ],
    },
];