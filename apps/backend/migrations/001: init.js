import useUtils from './utils/001.js'



// ------------------
// Up
// ------------------

export async function up (knex) {

    const $ = useUtils(knex);

    await knex.schema.createTable('About', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('path').notNullable();
        $.setDefaults(table);
    })

    await knex.schema.createTable('about_slides', table => {
        table.increments('id');
        table.integer('parent').notNullable().references('About.id').onDelete('CASCADE')
        table.uuid('image').notNullable().references('directus_files.id')
        table.string('title').notNullable();
        table.integer('sort');
        $.setDefaults(table);
    })

    await knex.schema.createTable('about_whys', table => {
        table.increments('id');
        table.integer('parent').notNullable().references('About.id').onDelete('CASCADE')
        table.uuid('image').notNullable().references('directus_files.id')
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('sort');
        $.setDefaults(table);
    })

    await knex.schema.createTable('Services', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('path').notNullable();
        $.setDefaults(table);
    })

    await knex.schema.createTable('services', table => {
        table.increments('id');
        table.integer('parent').notNullable().references('Services.id').onDelete('CASCADE')
        table.string('title').notNullable();
        table.string('slug').notNullable();
        table.string('description').notNullable();
        table.uuid('icon').notNullable().references('directus_files.id')
        table.uuid('image').notNullable().references('directus_files.id')
        table.integer('sort');
        $.setDefaults(table);
    })

    await knex.schema.createTable('services_sections', table => {
        table.increments('id');
        table.integer('parent').notNullable().references('services.id').onDelete('CASCADE')
        table.uuid('image').notNullable().references('directus_files.id')
        table.string('description').notNullable();
        table.integer('sort');
        $.setDefaults(table);
    })

    await knex.schema.createTable('Blog', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('path').notNullable();
        table.uuid('image').notNullable().references('directus_files.id')
        $.setDefaults(table);
    })

    await knex.schema.createTable('blog', table => {
        table.increments('id');
        table.integer('parent').notNullable().references('Blog.id').onDelete('CASCADE')
        table.string('slug').notNullable();
        table.string('title').notNullable();
        table.uuid('image').notNullable().references('directus_files.id')
        table.text('content').notNullable();
        $.setDefaults(table);
    })

    await knex.schema.createTable('Contact', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('path').notNullable();
        table.uuid('image').notNullable().references('directus_files.id')
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
        $.setDefaults(table);
    })

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('Contact');

    await knex.schema.dropTable('blog');
    await knex.schema.dropTable('Blog');

    await knex.schema.dropTable('services_sections');
    await knex.schema.dropTable('services');
    await knex.schema.dropTable('Services');

    await knex.schema.dropTable('about_whys');
    await knex.schema.dropTable('about_slides');
    await knex.schema.dropTable('About');

}