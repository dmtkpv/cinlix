import { knex } from '@this/database'

export default defineEventHandler(async (event) => {

    const { slug } = event.context.params

    const data = await knex('services')
        .first()
        .where({ slug })
        .innerJoin('services_sections', 'services_sections.service', 'services.id')
        .groupBy('services.id')
        .select([
            'services.title',
            'services.image',
            knex.raw(`
                JSON_AGG(JSON_BUILD_OBJECT(
                    'id', services_sections.id, 
                    'image', services_sections.image, 
                    'description', services_sections.description
                ) ORDER BY services_sections.sort) AS sections
            `),
        ])

    if (!data) throw createError({
        statusCode: 404
    })

    return data

})