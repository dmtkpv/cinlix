import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const Blog = {
    id: 1,
    path: '/blog',
    title: 'Blog/News',
    image: FILES.image
}

const blog = Array.from({ length: 100 }).map((_, i) => ({
    parent: 1,
    slug: `article-${i}`,
    title: `Article ${i}`,
    image: FILES.image,
    content: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
}));



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('Blog').select('id').first();
    if (exists) return;

    await knex('Blog').insert(Blog);
    await knex('blog').insert(blog);

}