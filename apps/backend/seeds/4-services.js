import { FILES } from '../constants.js'
import knex from "knex";



// -------------------
// Data
// -------------------

const Services = {
    title: 'Services',
    path: '/services'
}

const defaults = {
    image: FILES.image,
    description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.'
}

const services = [
    {
        id: 1,
        sort: 0,
        slug: 'production',
        title: 'Video Production',
        icon: FILES.service_production,
        ...defaults
    },
    {
        id: 2,
        sort: 0,
        slug: 'cooperation',
        title: 'Corporate Service',
        icon: FILES.service_cooperation,
        ...defaults
    },
    {
        id: 3,
        sort: 0,
        slug: 'social',
        title: 'Social Media Service',
        icon: FILES.service_social,
        ...defaults
    },
    {
        id: 4,
        sort: 0,
        slug: 'live',
        title: 'Future News & Live-Streaming',
        icon: FILES.service_live,
        ...defaults
    }
]

const sections = [
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

    const exists = await knex('Services').select('name').first();
    if (exists) return;

    await knex('Services').insert(Services);
    await knex('services').insert(services);
    await knex('services_sections').insert(sections);

}