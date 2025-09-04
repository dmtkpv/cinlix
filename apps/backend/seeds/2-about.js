import { DEFAULT_IMAGE_ID } from '../constants.js'



// -------------------
// Data
// -------------------

const about = {
    id: 1,
    path: '/',
    title: 'About',
}

const slide = {
    about: 1,
    image: DEFAULT_IMAGE_ID,
}

const slides = [
    {
        sort: 0,
        title: 'See your story and make your world memorable',
        ...slide
    },
    {
        sort: 1,
        title: 'Where Your Vision Comes alive your lens in breaking truth',
        ...slide
    },
    {
        sort: 2,
        title: 'Capture Your Vision where every frame tells the truth',
        ...slide
    }
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('about').select('id').first();
    if (exists) return;

    await knex('about').insert(about);
    await knex('about_slides').insert(slides);

}