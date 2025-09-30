const {
    FRONTEND_PORT,
    BACKEND_URL
} = process.env;

export default {

    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    srcDir: 'client/',

    runtimeConfig: {
        public: {
            BACKEND_URL,
        }
    },

    devServer: {
        port: FRONTEND_PORT,
        host: '0.0.0.0'
    },

    imports: {
        dirs: ['app']
    },

    plugins: [
        '~/main.js',
    ],

    modules: [
        '@nuxtjs/google-fonts',
        '@nuxt/icon'
    ],

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

    googleFonts: {
        subsets: 'latin',
        families: {
            Inter: '400..900',
        }
    },

    icon: {
        mode: 'svg',
        customCollections: [
            { prefix: 'local', dir: './client/icons' },
        ],
    },

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