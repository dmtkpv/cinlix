import '~/styles/base.scss'
import '~/styles/modules.scss'
import createApp from '@dmtkpv/ssg/createApp'
import App from '~/index.vue'
import components from '~/config/components.js'
import createRouter from '~/services/router.js'



// ------------------
// Export
// ------------------

export default createApp(App, ({ app }) => {

    const router = createRouter();

    app.use(router);

    for (const name in components) {
        app.component(name, components[name]);
    }

})
