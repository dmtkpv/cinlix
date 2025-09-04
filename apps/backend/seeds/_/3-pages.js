import { DEFAULT_IMAGE_ID } from '@this/directus/constants.js'



// ------------------
// Data
// ------------------

const data = [
    {
        name: 'about',
        title: 'About',
        path: '/'
    },
    {
        name: 'services',
        title: 'Services',
        path: '/services',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'service-video',
        title: 'Video production',
        path: 'production',
        parent: 'services',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'service-corporate',
        title: 'Corporate service',
        path: '/services/corporate',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'service-social',
        title: 'Social media service',
        path: '/services/social-media',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'services-news',
        title: 'Future news & Live-streaming',
        path: '/services/live',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'quote',
        title: 'Get a Quote',
        path: '/quote',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'blog',
        title: 'Blog/News',
        path: '/blog',
        image: DEFAULT_IMAGE_ID
    },
    {
        name: 'contact',
        title: 'Contact us',
        path: '/contact',
        image: DEFAULT_IMAGE_ID
    }
]



// ------------------
// Seed
// ------------------

export async function seed (knex) {

    const names = data.map(item => item.name);

    await knex('pages').whereNotIn('name', names).del();
    await knex('pages').insert(data).onConflict('name').ignore();

}