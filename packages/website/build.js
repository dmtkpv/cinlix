import { fileURLToPath } from 'url'
import { loadNuxt, buildNuxt } from '@nuxt/kit'
import { knex } from '@this/database'

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
    await knex.destroy();

}