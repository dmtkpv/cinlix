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

    devServer: {
        port: FRONTEND_PORT,
        host: '0.0.0.0'
    },

    imports: {
        dirs: ['app']
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

}
