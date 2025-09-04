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
    },
    {
        id: FILES.service_production,
        storage: 'local',
        filename_disk: 'service-production.svg',
        filename_download: 'service-production.svg',
        type: 'image/svg+xml',
        filesize: 3241,
    },
    {
        id: FILES.service_cooperation,
        storage: 'local',
        filename_disk: 'service-cooperation.svg',
        filename_download: 'service-cooperation.svg',
        type: 'image/svg+xml',
        filesize: 4203,
    },
    {
        id: FILES.service_social,
        storage: 'local',
        filename_disk: 'service-social.svg',
        filename_download: 'service-social.svg',
        type: 'image/svg+xml',
        filesize: 2951,
    },
    {
        id: FILES.service_live,
        storage: 'local',
        filename_disk: 'service-live.svg',
        filename_download: 'service-live.svg',
        type: 'image/svg+xml',
        filesize: 2506,
    }
]




// -------------------
// Seed
// -------------------

export async function seed (knex) {
    await knex('directus_files').insert(data).onConflict('id').merge();
}