import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const About = {
    path: '/',
    title: 'About',
}

const slides = [
    {
        sort: 0,
        title: 'See your story and make your world memorable',
        image: FILES.image,
    },
    {
        sort: 1,
        title: 'Where Your Vision Comes alive your lens in breaking truth',
        image: FILES.image,
    },
    {
        sort: 2,
        title: 'Capture Your Vision where every frame tells the truth',
        image: FILES.image,
    }
]

const whys = [
    {
        sort: 0,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
    {
        sort: 1,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
    {
        sort: 2,
        title: 'Title',
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.',
        image: FILES.image,
    },
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('About').select('name').first();
    if (exists) return;

    await knex('About').insert(About);
    await knex('about_slides').insert(slides);
    await knex('about_whys').insert(whys);

}