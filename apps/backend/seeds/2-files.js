import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const data = [
    {
        id: FILES.image,
        storage: 'local',
        filename_disk: 'default.png',
        filename_download: 'default.png',
        type: 'image/png',
        filesize: 5937,
        width: 1500,
        height: 1500
    }
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {
    await knex('directus_files').insert(data).onConflict('id').merge();
}