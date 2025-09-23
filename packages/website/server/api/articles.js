import { knex } from '@this/database'

export default defineEventHandler(async (event) => {

    const Articles = await knex('Articles')
        .first()
        .select([
            'name',
            'title',
            'image'
        ])


    const articles = await knex('v_articles')
        .orderBy('date', 'desc')
        .orderBy('id', 'desc')
        .select([
            'id',
            'path',
            'date',
            'title',
            'image'
        ])

    return {
        ...Articles,
        articles
    }

})