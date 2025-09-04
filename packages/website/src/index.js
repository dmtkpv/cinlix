import '#src/styles/base.scss'
import '#src/styles/modules.scss'

import { ViteSSG } from 'vite-ssg'
import App from '#src/index.vue'
import routes from '#src/config/routes.js'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
        // install plugins etc.
})
