// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.raw(`ALTER TABLE home_whys ALTER COLUMN description TYPE text`);
    await knex.raw(`ALTER TABLE home_hows ALTER COLUMN description TYPE text`);

    await knex.raw(`DROP VIEW IF EXISTS v_services`);
    await knex.raw(`ALTER TABLE services ALTER COLUMN description TYPE text`);
    await knex.raw(`ALTER TABLE services_sections ALTER COLUMN description TYPE text`);

}



// ------------------
// Down
// ------------------

export async function down (knex) {


}