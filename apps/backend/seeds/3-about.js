import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const About = {
    id: 1,
    path: '/',
    title: 'About',
}

const defaults = {
    parent: 1,
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

    const exists = await knex('About').select('id').first();
    if (exists) return;

    await knex('About').insert(About);
    await knex('about_slides').insert(slides);
    await knex('about_whys').insert(whys);

}