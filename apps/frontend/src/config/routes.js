import PAGES from 'db:pages';
import About from '~/routes/about.vue'
import Contact from '~/routes/contact.vue'
import Service from '~/routes/service.vue'
import Articles from '~/routes/articles.vue'
import Article from '~/routes/article.vue'
import Error from '~/routes/error.vue'

export default [
    {
        path: PAGES.About.path,
        component: About
    },
    {
        path: PAGES.Contact.path,
        component: Contact
    },
    {
        path: PAGES.Services.path,
        children: [
            {
                path: '',
                component: Error
            },
            {
                path: ':slug',
                component: Service
            }
        ],
    },
    {
        path: PAGES.Articles.path,
        children: [
            {
                path: '',
                component: Articles
            },
            {
                path: ':slug',
                component: Article
            }
        ],
    },
];