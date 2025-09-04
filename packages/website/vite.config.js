import path from 'path'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'
import database from './database.js'

// console.log(database)



// ------------------
// Variables
// ------------------

const {
    WEBSITE_PORT
} = process.env;



// ------------------
// Database loader
// ------------------

const db = {

    name: 'vite-db',

    resolveId (id) {
        if (id.startsWith('db:')) return '\0' + id;
    },

    load (id) {
        // if (id.startsWith('\0db:')) return database[id.slice(4)];
        if (id.startsWith('\0db:')) return `export default []`
    }

};



// ------------------
// Exports
// ------------------

export default {

    server: {
        host: '0.0.0.0',
        port: WEBSITE_PORT
    },

    plugins: [
        db,
        vue(),
        svg({ svgo: false })
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