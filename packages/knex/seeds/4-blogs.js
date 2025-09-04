// ------------------
// Data
// ------------------

const data = [
    {
        title: 'Blog 1',
        slug: 'blog-1',
        content: 'Lorem Ipsum',
    },
    {
        title: 'Blog 2',
        slug: 'blog-2',
        content: 'Lorem Ipsum',
    },
    {
        title: 'Blog 3',
        slug: 'blog-3',
        content: 'Lorem Ipsum',
    },
]



// ------------------
// Seed
// ------------------

export async function seed (knex) {
    const exists = await knex('blogs').select('id').first();
    if (!exists) await knex('blogs').insert(data);
}