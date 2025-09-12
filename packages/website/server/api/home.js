import { knex } from '@this/database'
import { promise } from '~~/server/utils'

export default defineEventHandler(async (event) => {

    const slides = knex('home_slides')
        .orderBy('sort')
        .select([
            'id',
            'image',
            'title',
            'logo',
            'blur'
        ])

    const why = knex('home_whys')
        .orderBy('sort')
        .select([
            'id',
            'image',
            'title',
            'description'
        ])

    const how = knex('home_hows')
        .orderBy('sort')
        .select([
            'id',
            'image',
            'title',
            'description'
        ])

    const services = knex('v_services')
        .orderBy('sort')
        .select([
            'id',
            'path',
            'title',
            'description',
            'icon AS image'
        ])

    const articles = knex('v_articles')
        .orderBy('created_at', 'desc')
        .limit(4)
        .select([
            'id',
            'path',
            'date',
            'title',
            'image'
        ])

    return promise({
        slides,
        why,
        how,
        services,
        articles
    })

})