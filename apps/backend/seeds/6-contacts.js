import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const Contact = {
    id: 1,
    path: '/contact',
    title: 'Contact Us',
    image: FILES.image,
    street: '2200 Tremont St',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19115',
    phone: '(215) 867-6666 ',
    email: 'info@cinlix.com',
    twitter: 'https://x.com/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/'
}



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('Contact').select('id').first();
    if (exists) return;

    await knex('Contact').insert(Contact);

}