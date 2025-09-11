// ------------------
// Variables
// ------------------

const {
    FRONTEND_PORT,
    BACKEND_URL
} = process.env;


// ------------------
// Exports
// ------------------

export default {

    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    srcDir: 'client/',

    runtimeConfig: {
        public: {
            BACKEND_URL,
        },
    },

    devServer: {
        port: FRONTEND_PORT,
        host: '0.0.0.0'
    },

    imports: {
        dirs: ['app']
    },

    modules: [
        '@nuxt/icon'
    ],

    icon: {
        mode: 'svg',
        customCollections: [
            { prefix: 'local', dir: './client/icons' },
        ],
    },

    css: [
        '~/styles/base.scss',
        '~/styles/modules.scss',
    ],

    components: [
        '~/inputs',
        '~/layout',
        '~/sections',
        '~/ui',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: (content, ctx) => {
                        if (ctx.includes('abstract.module.scss')) return content
                        return `@use "~/styles/abstract.module" as *;\n${content}`
                    },
                }
            }
        },
    }

};