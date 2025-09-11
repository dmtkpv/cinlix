import { image, description } from './utils/seeds.js'



// -------------------
// Data
// -------------------

const Articles = {
    path: '/blog',
    title: 'Blog/News',
    image
}

const articles = Array.from({ length: 10 }).map((_, i) => ({
    slug: `article-${i}`,
    title: `Article ${i}`,
    content: description,
    image
}));



// ------------------
// Up
// ------------------

export async function up (knex) {

    await knex.schema.createTable('Articles', table => {
        table.page();
        table.file('image').notNullable();
        table.defaults();
    })

    await knex.schema.createTable('articles', table => {
        table.increments('id');
        table.string('slug').notNullable().unique();
        table.string('title').notNullable();
        table.file('image').notNullable();
        table.text('content').notNullable();
        table.pageRef('Articles');
        table.defaults();
    })

    await knex('Articles').insert(Articles);
    await knex('articles').insert(articles);

}



// ------------------
// Down
// ------------------

export async function down (knex) {

    await knex.schema.dropTable('articles');
    await knex.schema.dropTable('Articles');

}