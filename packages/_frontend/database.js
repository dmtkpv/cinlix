import { knex } from '@this/backend/database'

function getServices (...columns) {
    return knex('services')
        .innerJoin('Services', 'Services.name', 'services.page')
        .orderBy('services.sort')
        .select(knex.raw(`"Services".path || '/' || services.slug AS path`))
        .select(columns.map(column => `services.${column}`))
}

function getArticles (...columns) {
    return knex('articles')
        .innerJoin('Articles', 'Articles.name', 'articles.page')
        .orderBy('articles.created_at', 'desc')
        .select(knex.raw(`"Articles".path || '/' || articles.slug AS path`))
        .select(knex.raw(`to_char(articles.created_at, 'DD Mon YYYY') AS date`))
        .select(columns.map(column => `articles.${column}`))
}

export default {



    // ------------------
    // Common
    // ------------------
    //
    // async 'pages' () {
    //     const About = await knex('About').select('path', 'title').first()
    //     const Articles = await knex('Articles').select('path', 'title').first()
    //     const Contact = await knex('Contact').select('path', 'title').first()
    //     const Partners = await knex('Partners').select('path', 'title').first()
    //     const Privacy = await knex('Privacy').select('path', 'title').first()
    //     const Quote = await knex('Quote').select('path', 'title').first()
    //     const Services = await knex('Services').select('path', 'title').first()
    //     const Team = await knex('Team').select('path', 'title').first()
    //     const Work = await knex('Work').select('path', 'title').first()
    //     const services = await getServices('title');
    //     return { About, Articles, Contact, Partners, Privacy, Quote, Services, Team, Work, services }
    // },

    // async 'errors' () {
    //     const errors = await knex('errors').select('code', 'image', 'title', 'description');
    //     return errors.reduce((acc, error) => {
    //         acc[error.code] = error;
    //         return acc;
    //     }, {})
    // },



    // ------------------
    // Pages
    // ------------------

    async 'About' () {
        // const slides = await knex('about_slides').select('id', 'image', 'title', 'logo', 'blur').orderBy('sort')
        // const why = await knex('about_whys').select('id', 'image', 'title', 'description').orderBy('sort')
        // const how = await knex('about_hows').select('id', 'image', 'title', 'description').orderBy('sort')
        // const services = await getServices('id', 'title', 'description', 'icon AS image')
        // const articles = await getArticles('title', 'image').limit(4)
        // return { slides, why, how, services, articles }
    },

    async 'Articles' () {
        // const Articles = await knex('Articles').select('title', 'image').first()
        // const articles = await getArticles('title', 'image')
        // return Object.assign(Articles, { articles })
    },

    async 'Contact' () {
        // return knex('Contact').first().select('title', 'image', 'street', 'city', 'state', 'zip', 'phone', 'email', 'twitter', 'facebook', 'linkedin', 'instagram')
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