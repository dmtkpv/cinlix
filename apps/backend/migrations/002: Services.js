import { image, description, useSeeds } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const Services = {
    title: 'Services',
    path: '/services'
}

const services = useSeeds([
    { id: 1, slug: 'production', title: 'Video Production' },
    { id: 2, slug: 'cooperation', title: 'Corporate Service' },
    { id: 3, slug: 'social', title: 'Social Media Service' },
    { id: 4, slug: 'live', title: 'Future News & Live-Streaming' }
], { image, description, icon: image })

const sections = useSeeds([
    { service: 1 },
    { service: 1 },
    { service: 1 },
    { service: 1 },
    { service: 1 },
    { service: 1 },
    { service: 2 },
    { service: 2 },
    { service: 2 },
    { service: 2 },
    { service: 3 },
    { service: 3 },
    { service: 3 },
    { service: 4 },
    { service: 4 },
    { service: 4 },
], { image, description })



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('Services', table => {
        table.page();
        table.defaults();
    })

    await knex.schema.createTable('services', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('slug').notNullable().unique();
        table.string('description').notNullable();
        table.file('icon').notNullable();
        table.file('image').notNullable();
        table.integer('sort');
        table.pageRef('Services');
        table.defaults();
    })

    await knex.schema.createTable('services_sections', table => {
        table.increments('id');
        table.integer('service').notNullable().references('services.id').onDelete('CASCADE')
        table.file('image').notNullable();
        table.string('description').notNullable();
        table.integer('sort');
        table.defaults();
    })

    await knex('Services').insert(Services);
    await knex('services').insert(services);
    await knex('services_sections').insert(sections);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('services_sections');
    await knex.schema.dropTable('services');
    await knex.schema.dropTable('Services');

}