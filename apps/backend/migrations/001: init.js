// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('About', table => {
        table.page('About');
        table.defaults();
    })

    await knex.schema.createTable('about_slides', table => {
        table.increments('id');
        table.file('image').notNullable();
        table.string('title').notNullable();
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

    await knex.schema.createTable('Services', table => {
        table.page('Services');
        table.defaults();
    })

    await knex.schema.createTable('services', table => {
        table.increments('id');
        table.string('title').notNullable();
        table.string('slug').notNullable();
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

    await knex.schema.createTable('Blog', table => {
        table.page('Blog');
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('blog', table => {
        table.increments('id');
        table.string('slug').notNullable();
        table.string('title').notNullable();
        table.file('image').notNullable();
        table.text('content').notNullable();
        table.pageRef('Blog');
        table.defaults();
    })

    await knex.schema.createTable('Contact', table => {
        table.page('Contact');
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