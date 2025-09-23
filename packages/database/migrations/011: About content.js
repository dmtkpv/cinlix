import { description } from './utils/seeds.js'



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.alterTable('About', table => {
        table.text('content').notNullable().defaultTo(description);
    })

    await knex.raw(`ALTER TABLE "About" ALTER COLUMN content DROP DEFAULT`);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.alterTable('About', table => {
        table.dropColumn('content');
    })

}