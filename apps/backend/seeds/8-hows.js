import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const data = [
    {
        sort: 0,
        title: 'Pre-production',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
    {
        sort: 1,
        title: 'Production',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
    {
        sort: 2,
        title: 'Post-production',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
    {
        sort: 4,
        title: 'Delivery',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {
    const exists = await knex('about_hows').select('id').first();
    if (exists) return;
    await knex('about_hows').insert(data);
}