import { image } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const errors = [{
    code: '404',
    title: 'Page not found',
    description: 'Oops! The page you are looking for is not here',
    image
}]



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('errors', table => {
        table.string('code').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex('errors').insert(errors);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('errors');

}