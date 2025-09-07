import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const errors = [
    {
        code: '404',
        title: 'Page not found',
        description: 'Oops! The page you are looking for is not here',
        image: FILES.image
    }
]



// -------------------
// Seed
// -------------------

export async function seed (knex) {
    await knex('errors').insert(errors).onConflict('code').ignore();
}