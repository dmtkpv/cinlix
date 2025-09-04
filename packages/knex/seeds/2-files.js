import { DEFAULT_IMAGE } from '@this/directus/constants.js'

export async function seed (knex) {
    await knex('directus_files').insert(DEFAULT_IMAGE).onConflict('id').merge();
}