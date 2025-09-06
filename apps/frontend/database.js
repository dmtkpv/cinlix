import { knex } from '@this/backend/database'

export default {



    // ------------------
    // Common
    // ------------------

    'pages' () {
        return Promise.all([
            knex('About').select('path', 'title').first(),
            knex('Articles').select('path', 'title').first(),
            knex('Contact').select('path', 'title').first(),
            knex('Services').select('path', 'title').first(),
            knex('services').select('slug', 'title'),
        ]).then(([About, Articles, Contact, Services, services]) => ({
            About, Articles, Contact, Services,
            services: services.map(({ slug, title }) => ({ title, path: `${Services.path}/${slug}` }))
        }))
    },



    // ------------------
    // Pages
    // ------------------


    async 'About' () {
        return {
            slides: await knex('about_slides').select('id', 'image', 'title').orderBy('sort'),
            why: await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort'),
        }
    },

    async 'Blog' () {
        return {
            slides: await knex('about_slides').select('id', 'image', 'title').orderBy('sort'),
            why: await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort'),
        }
    },

    async 'Contact' () {
        return knex('Contact').first().select([
            'title',
            'image',
            'street',
            'city',
            'state',
            'zip',
            'phone',
            'email',
            'twitter',
            'facebook',
            'linkedin',
            'instagram',
        ])
    },



    // ------------------
    // Maps
    // ------------------

    'map-services': {
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
                    knex.raw(`JSON_AGG(JSON_BUILD_OBJECT('id', services_sections.id, 'image', services_sections.image, 'description', services_sections.description) ORDER BY services_sections.sort) AS sections`),
                ])
        }
    },

    'map:blogs': {
        keys: await knex('articles').pluck('slug'),
        item (slug) {
            return knex('articles').where({ slug }).first().select([
                'title',
                'image',
                'content',
                'created_at'
            ])
        }
    },



}