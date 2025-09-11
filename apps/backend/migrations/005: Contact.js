import { image } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const Contact = {
    path: '/contact',
    title: 'Contact Us',
    image,
    street: '2200 Tremont St',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19115',
    phone: '(215) 867-6666 ',
    email: 'info@cinlix.com',
    twitter: 'https://x.com/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/'
}



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('Contact', table => {
        table.page();
        table.file('image').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('zip').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('twitter').notNullable();
        table.string('facebook').notNullable();
        table.string('linkedin').notNullable();
        table.string('instagram').notNullable();
        table.defaults();
    })

    await knex('Contact').insert(Contact);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('Contact');

}