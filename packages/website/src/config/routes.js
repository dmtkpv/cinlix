// import pages from 'pages.db';

// import type { RouteRecordRaw } from 'vue-router'
// import { dbPages } from '~/config/database'
//
// function getRoute (name: string, options: Omit<RouteRecordRaw, 'name' | 'path'>) {
//     const path =  dbPages.find(page => page.name === name)?.path;
//     if (!path) throw new Error(`Missing route: ${name}`);
//     return { name, path, ...options } as RouteRecordRaw
// }

export default [

    {
        path: '/blog/:id',
        component: () => import('~/routes/blog.vue'),
    }

    // getRoute('about', {
    //     component: () => import('~/routes/about.vue')
    // }),
    // getRoute('services', {
    //     component: () => import('~/routes/services.vue')
    // })
];