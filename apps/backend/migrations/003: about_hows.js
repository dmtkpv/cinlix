// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('about_hows', table => {
        table.increments('id');
        table.file('image').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('sort');
        table.pageRef('About');
        table.defaults();
    })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('about_hows');

}