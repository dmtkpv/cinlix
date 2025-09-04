import { FILES } from '../constants.js'



// -------------------
// Data
// -------------------

const defaults = {
    image: FILES.image,
    description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.'
}

const services = [
    {
        id: 1,
        sort: 0,
        path: '/services/production',
        title: 'Video Production',
        icon: FILES.service_production,
        ...defaults
    },
    {
        id: 2,
        sort: 0,
        path: '/services/cooperation',
        title: 'Corporate Service',
        icon: FILES.service_cooperation,
        ...defaults
    },
    {
        id: 3,
        sort: 0,
        path: '/services/social',
        title: 'Social Media Service',
        icon: FILES.service_social,
        ...defaults
    },
    {
        id: 4,
        sort: 0,
        path: '/services/live',
        title: 'Future News & Live-Streaming',
        icon: FILES.service_live,
        ...defaults
    }
]

const content = [
    { ...defaults, service: 1 },
    { ...defaults, service: 1 },
    { ...defaults, service: 1 },
    { ...defaults, service: 1 },
    { ...defaults, service: 1 },
    { ...defaults, service: 1 },
    { ...defaults, service: 2 },
    { ...defaults, service: 2 },
    { ...defaults, service: 2 },
    { ...defaults, service: 2 },
    { ...defaults, service: 3 },
    { ...defaults, service: 3 },
    { ...defaults, service: 3 },
    { ...defaults, service: 4 },
    { ...defaults, service: 4 },
    { ...defaults, service: 4 },

]



// -------------------
// Seed
// -------------------

export async function seed (knex) {

    const exists = await knex('services').select('id').first();
    if (exists) return;

    await knex('services').insert(services);
    await knex('services_content').insert(content);

}