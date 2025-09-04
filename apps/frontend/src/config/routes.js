import pages from 'db:pages';

function getRoute (name, options) {
    const { path } = pages.find(page => page.name === name);
    return { name, path, ...options }
}

export default [

    getRoute('about', {
        component: () => import('~/routes/about.vue')
    }),

];