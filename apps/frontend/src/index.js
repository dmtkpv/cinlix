import '~/styles/base.scss'
import '~/styles/modules.scss'
import { reactive } from 'vue'
import createApp from '@dmtkpv/ssg/createApp'
import App from '~/index.vue'
import components from '~/config/components.js'
import createRouter from '~/services/router.js'



// ------------------
// Export
// ------------------

export default createApp(App, ({ app, data, isSSR }) => {

    const state = isSSR ? data : reactive(data);
    const router = createRouter({ state });

    app.use(router);
    app.provide('state', state);

    for (const name in components) {
        app.component(name, components[name]);
    }

    if (!isSSR) {
        import('swiped-events');
    }

})
