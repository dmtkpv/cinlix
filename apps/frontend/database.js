import { knex } from '@this/backend/database'

export default {



    // ------------------
    // Common
    // ------------------

    async 'pages' () {
        const About = await knex('About').select('path', 'title').first()
        const Articles = await knex('Articles').select('path', 'title').first()
        const Contact = await knex('Contact').select('path', 'title').first()
        const Services = await knex('Services').select('path', 'title').first()
        const services = await knex('services').select('slug', 'title')
        services.forEach(service => service.path = `${Services.path}/${service.slug}`)
        return { About, Articles, Contact, Services, services }
    },



    // ------------------
    // Pages
    // ------------------

    async 'About' () {
        const slides = await knex('about_slides').select('id', 'image', 'title').orderBy('sort')
        const why = await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort')
        const services = await knex('services').select('title', 'slug', 'description', 'icon').orderBy('sort')
        const articles = await knex('articles').select('title', 'image', 'slug', 'created_at').orderBy('created_at', 'desc').limit(4)
        return { slides, why, services, articles }
    },

    async 'Articles' () {
        const Articles = await knex('Articles').select('title', 'image').first()
        const articles = await knex('articles').select('title', 'image', 'slug', 'created_at').orderBy('created_at', 'desc')
        return Object.assign(Articles, { articles })
    },

    async 'Contact' () {
        return knex('Contact').first().select('title', 'image', 'street', 'city', 'state', 'zip', 'phone', 'email', 'twitter', 'facebook', 'linkedin', 'instagram')
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

    'map-articles': {
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