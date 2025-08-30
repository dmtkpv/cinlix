import type { RouteRecordRaw } from 'vue-router'
import { dbPages } from '~/config/database'

function getRoute (name: string, options: Omit<RouteRecordRaw, 'name' | 'path'>) {
    const path =  dbPages.find(page => page.name === name)?.path;
    if (!path) throw new Error(`Missing route: ${name}`);
    return { name, path, ...options } as RouteRecordRaw
}

export default [
    getRoute('about', {
        component: () => import('~/routes/about.vue')
    }),
    getRoute('services', {
        component: () => import('~/routes/services.vue')
    })
];