import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const blog = {
    id: 1,
    path: '/blog',
    title: 'Blog/News',
    image: FILES.image
}

const articles = Array.from({ length: 100 }).map((_, i) => ({
    slug: `article-${i}`,
    title: `Article ${i}`,
    image: FILES.image,
    content: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
}));



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('blog').select('id').first();
    if (exists) return;

    await knex('blog').insert(blog);
    await knex('articles').insert(articles);

}