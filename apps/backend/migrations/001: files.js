import { FILES } from '#root/constants.js'



// -------------------
// Data
// -------------------

const files = [
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



// ------------------
// Up
// ------------------

export async function up (knex) {
    await knex('directus_files').insert(files).onConflict('id').merge();
}



// ------------------
// Down
// ------------------

export async function down (knex) {

}