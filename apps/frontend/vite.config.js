import path from 'path'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'
import virtual from 'vite-virtuals'
import database from './database.js'



// ------------------
// Variables
// ------------------

const {
    WEBSITE_PORT
} = process.env;



// ------------------
// Exports
// ------------------

export default {

    server: {
        host: '0.0.0.0',
        port: WEBSITE_PORT
    },

    plugins: [
        vue(),
        svg({ svgo: false }),
        virtual({ db: database })
    ],

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        }
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "~/styles/abstract" as *;
                `,
            }
        }
    },

}