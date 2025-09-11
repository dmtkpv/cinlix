import { loadNuxt, buildNuxt } from '@nuxt/kit'
import { knex } from '@this/database'

export default async function runGenerate() {

    const nuxt = await loadNuxt({
        cwd: process.cwd(),
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