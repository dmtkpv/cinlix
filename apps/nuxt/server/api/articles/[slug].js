import { knex } from '@this/database'

export default defineEventHandler(async (event) => {

    const { slug } = event.context.params

    const data = await knex('v_articles')
        .where({ slug })
        .first()
        .select([
            'date',
            'title',
            'image',
            'content'
        ])

    if (!data) throw createError({
        statusCode: 404
    })

    return data

})