import '~/styles/base.scss'
import '~/styles/modules.scss'

import { ViteSSG } from 'vite-ssg'
import App from '~/index.vue'
import routes from '~/config/routes'

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
        // install plugins etc.
})
