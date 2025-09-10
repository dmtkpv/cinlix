import { title, image, description, useSeeds } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const About = {
    path: '/',
    title: 'About',
}

const slides = useSeeds([
    { title: 'See your story and make your world memorable' },
    { title: 'Where Your Vision Comes alive your lens in breaking truth' },
    { title: 'Capture Your Vision where every frame tells the truth' }
], {  image })

const hows = useSeeds([
    { title: 'Pre-production' },
    { title: 'Production' },
    { title: 'Post-production' },
    { title: 'Delivery' },
], { description, image })

const whys = useSeeds(3, {
    title,
    description,
    image
})



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('About', table => {
        table.page();
        table.defaults();
    })

    await knex.schema.createTable('about_slides', table => {
        table.increments('id');
        table.file('image').notNullable();
        table.string('title').notNullable();
        table.boolean('logo').notNullable().defaultTo(false);
        table.boolean('blur').notNullable().defaultTo(false);
        table.integer('sort');
        table.pageRef('About');
        table.defaults();
    })

    await knex.schema.createTable('about_whys', table => {
        table.increments('id');
        table.file('image').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('sort');
        table.pageRef('About');
        table.defaults();
    })

    await knex.schema.createTable('about_hows', table => {
        table.increments('id');
        table.file('image').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('sort');
        table.pageRef('About');
        table.defaults();
    })

    await knex('About').insert(About);
    await knex('about_slides').insert(slides);
    await knex('about_whys').insert(whys);
    await knex('about_hows').insert(hows);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('about_hows');
    await knex.schema.dropTable('about_whys');
    await knex.schema.dropTable('about_slides');
    await knex.schema.dropTable('About');

}