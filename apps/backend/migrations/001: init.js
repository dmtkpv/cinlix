import useUtils from './utils/001.js'



// ------------------
// Up
// ------------------

export async function up (knex) {

    const $ = useUtils(knex);

    await knex.schema.createTable('about', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('path').notNullable();
        $.setDefaults(table);
    })

    await knex.schema.createTable('about_slides', table => {
        table.increments('id');
        table.integer('about').notNullable().references('about.id').onDelete('CASCADE')
        table.uuid('image').notNullable();
        table.string('title').notNullable();
        table.integer('sort');
        $.setDefaults(table);
    })

    // await knex.schema.createTable('blogs', table => {
    //     table.increments('id');
    //     table.string('slug').notNullable();
    //     table.string('title').notNullable();
    //     table.text('content').notNullable();
    //     $.setDefaults(table);
    // })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('about_slides');
    await knex.schema.dropTable('about');

}