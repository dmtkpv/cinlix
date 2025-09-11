import { image } from './utils/seeds.js'



// -------------------
// Data
// -------------------





// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.alterTable('Contact', table => {
        table.string('youtube').notNullable().defaultTo('https://www.youtube.com/');
    })

    await knex.raw(`ALTER TABLE "Contact" ALTER COLUMN youtube DROP DEFAULT`);


}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.alterTable('Contact', table => {
        table.dropColumn('youtube');
    })

}