import { fileURLToPath } from 'url'
import { loadNuxt, buildNuxt } from '@nuxt/kit'

export default async function runGenerate() {

    const root = fileURLToPath(new URL('.', import.meta.url))

    const nuxt = await loadNuxt({
        cwd: root,
        dev: false,
        overrides: {
            nitro: {
                static: true
            }
        }
    })

    await buildNuxt(nuxt);

}