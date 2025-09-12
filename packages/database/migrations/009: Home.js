import { image } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const Home =  {
    title: 'Home',
    path: '/'
}

const O2M = [
    'about_slides',
    'about_whys',
    'about_hows'
]



// ------------------
// Up
// ------------------

export async function up (knex) {


    // home

    await knex.schema.createTable('Home', table => {
        table.page();
        table.defaults();
    })

    await knex('Home').insert(Home);


    // O2M

    for (const collection of O2M) {
        await knex.schema.alterTable(collection, table => table.dropColumn('page'));
        await knex.schema.alterTable(collection, table => table.pageRef('Home'));
        await knex.raw(`ALTER TABLE ${collection} ALTER COLUMN page SET DEFAULT 'Home'`);
        await knex(collection).update({ page: 'Home' });
        await knex.schema.renameTable(collection, collection.replace('about_', 'home_'));
    }


    // About

    await knex.schema.alterTable('About', table => {
        table.file('image').notNullable().defaultTo(image);
    });

    await knex.raw(`ALTER TABLE "About" ALTER COLUMN image DROP DEFAULT`);
    await knex('About').update({ path: '/about' });


}



// ------------------
// Down
// ------------------

export async function down (knex) {


    // About

    await knex('About').update({ path: '/' });

    await knex.schema.alterTable('About', table => {
        table.dropColumn('image');
    });


    // O2M

    for (const collection of O2M) {
        await knex.schema.renameTable(collection.replace('about_', 'home_'), collection);
        await knex.schema.alterTable(collection, table => table.dropColumn('page'));
        await knex.schema.alterTable(collection, table => table.pageRef('About'))
        await knex.raw(`ALTER TABLE ${collection} ALTER COLUMN page SET DEFAULT 'About'`);
        await knex(collection).update({ page: 'About' });
    }


    // Home

    await knex.schema.dropTable('Home');


}