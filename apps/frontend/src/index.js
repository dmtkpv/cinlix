import '~/styles/base.scss'
import '~/styles/modules.scss'
import { ViteSSG } from 'vite-ssg'
import App from '~/index.vue'
import routes from '~/config/routes'



const modules = import.meta.glob([
    './icons/*',
    './items/*',
    './layout/*',
    './ui/*',
], { eager: true })


export const createApp = ViteSSG(App, { routes }, ({ app }) => {

    Object.keys(modules).forEach(key => {
        const name = key.split('/').pop().split('.').shift()
        app.component(name, modules[key].default);
    })

})
