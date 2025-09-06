import createRouter from '@dmtkpv/ssg/createRouter'
import routes from '~/config/routes.js'

export default function () {

    const router = createRouter({
        routes,
        scrollBehavior () {
            return { top: 0 }
        },
    });



    // -------------------
    // Before each
    // -------------------

    router.beforeEach(async (to) => {

        const components = to.matched.filter(route => route.components).map(route => route.components.default).flat();
        const preloads = components.map(component => component.preload).filter(value => !!value);

        try {
            const data = await Promise.all(preloads.map(fn => fn(to)));
            to.meta.preload = data.reduce((acc, value) => Object.assign(acc, value), {});
        }
        catch (error) {
            console.error(error)
        }

    })



    // -------------------
    // Exports
    // -------------------

    return router;



}