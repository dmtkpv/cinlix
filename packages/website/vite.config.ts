import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'
import alias from 'vite-ts-alias'



// ---------------------
// Exports
// ---------------------

export default defineConfig({

    server: {
        host: '0.0.0.0'
    },

    plugins: [
        vue(),
        svg({ svgo: false }),
        alias()
    ],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "~/styles/abstract" as *;
                `,
            }
        }
    },

})