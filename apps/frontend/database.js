import { knex } from '@this/backend/database'

export default {

    async 'pages' () {
        return {
            About: await knex('About').select('path', 'title').first(),
            Articles: await knex('Articles').select('path', 'title').first(),
            Contact: await knex('Contact').select('path', 'title').first(),
            Services: await knex('Services').select('path', 'title').first(),
        }
    },

    async 'services' () {
        return knex('services')
            .innerJoin('Services AS page', 'page.name', 'services.page')
            .orderBy('sort')
            .select([
                'services.title',
                'services.description',
                'services.icon',
                knex.raw(`page.path || '/' || services.slug AS path`)
            ]);
    },

    async 'About' () {
        return {
            slides: await knex('about_slides').select('id', 'image', 'title').orderBy('sort'),
            why: await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort'),
        }
    },

    'Blogs': {
        // keys: await knex('blogs').pluck('id'),
        // item (id) {
        //     return knex('blogs').where({ id }).select('title').first()
        // }
    },

}