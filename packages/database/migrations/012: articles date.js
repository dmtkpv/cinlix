// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.alterTable('articles', table => {
        table.date('date').notNullable().defaultTo(knex.raw('CURRENT_DATE'));
    })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.alterTable('articles', table => {
        table.dropColumn('date');
    })

}