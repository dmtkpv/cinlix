import { image } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const Quote =  {
    title: 'Get a Quote',
    path: '/quote',
    image
}

const Team =  {
    title: 'Team',
    path: '/team',
    image
}

const Work =  {
    title: 'Our work',
    path: '/work',
    image
}

const Privacy =  {
    title: 'Privacy',
    path: '/privacy',
    image
}

const Partners =  {
    title: 'Our partners',
    path: '/partners',
    image
}



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('Quote', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('Team', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('Work', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('Privacy', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('Partners', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex('Quote').insert(Quote);
    await knex('Team').insert(Team);
    await knex('Work').insert(Work);
    await knex('Privacy').insert(Privacy);
    await knex('Partners').insert(Partners);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('Partners');
    await knex.schema.dropTable('Privacy');
    await knex.schema.dropTable('Work');
    await knex.schema.dropTable('Team');
    await knex.schema.dropTable('Quote');

}