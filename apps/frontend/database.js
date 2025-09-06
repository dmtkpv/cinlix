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

    async 'about' () {
        return {
            slides: await knex('about_slides').select('id', 'image', 'title').orderBy('sort'),
            why: await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort'),
        }
    },

    'Services': {
        keys: await knex('services').pluck('slug'),
        item (slug) {
            return knex('services')
                .innerJoin('services_sections', 'services_sections.service', 'services.id')
                .where({ slug })
                .first()
                .groupBy('services.id')
                .select([
                    'services.title',
                    'services.image',
                    knex.raw(`JSON_AGG(JSON_BUILD_OBJECT(
                        'id', services_sections.id,
                        'image', services_sections.image,
                        'description', services_sections.description
                    ) ORDER BY services_sections.sort) AS sections`),
                ])
        }
    },

    'Blogs': {
        // keys: await knex('blogs').pluck('id'),
        // item (id) {
        //     return knex('blogs').where({ id }).select('title').first()
        // }
    },

}