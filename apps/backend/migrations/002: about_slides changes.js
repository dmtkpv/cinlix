// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.alterTable('about_slides', table => {
        table.boolean('logo').notNullable().defaultTo(false);
        table.boolean('blur').notNullable().defaultTo(false);
    })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.alterTable('about_slides', table => {
        table.dropColumn('logo');
        table.dropColumn('blur');
    })

}