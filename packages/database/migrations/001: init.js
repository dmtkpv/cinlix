import useUtils from './utils/001.js'



// ------------------
// Up
// ------------------

export async function up (knex) {

    const $ = useUtils(knex);

    await knex.schema.createTable('pages', table => {
        table.string('name').primary();
        table.string('path').notNullable();
        table.string('title').notNullable();
        table.uuid('image').references('directus_files.id');
        $.setDefaults(table);
    })

    await knex.schema.createTable('blogs', table => {
        table.increments('id');
        table.string('slug').notNullable();
        table.string('title').notNullable();
        table.text('content').notNullable();
        $.setDefaults(table);
    })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('blogs');
    await knex.schema.dropTable('pages');

}