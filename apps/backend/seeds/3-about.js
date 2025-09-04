import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const about = {
    id: 1,
    path: '/',
    title: 'About',
}

const defaults = {
    about: 1,
    image: FILES.image,
}

const slides = [
    {
        sort: 0,
        title: 'See your story and make your world memorable',
        ...defaults
    },
    {
        sort: 1,
        title: 'Where Your Vision Comes alive your lens in breaking truth',
        ...defaults
    },
    {
        sort: 2,
        title: 'Capture Your Vision where every frame tells the truth',
        ...defaults
    }
]

const whys = [
    {
        sort: 0,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        ...defaults
    },
    {
        sort: 1,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        ...defaults
    },
    {
        sort: 2,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        ...defaults
    },
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('about').select('id').first();
    if (exists) return;

    await knex('about').insert(about);
    await knex('about_slides').insert(slides);
    await knex('about_whys').insert(whys);

}