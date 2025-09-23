import { description } from './utils/seeds.js'



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.alterTable('articles', table => {
        table.date('publish_date').notNullable().defaultTo(knex.raw('CURRENT_DATE'));
        table.text('description').notNullable().defaultTo(description);
    })

    await knex.raw(`ALTER TABLE articles ALTER COLUMN description DROP DEFAULT`);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.alterTable('articles', table => {
        table.dropColumn('publish_date');
        table.dropColumn('description');
    })

}