import { knex } from '@this/database'

export default defineEventHandler(async (event) => {

    return knex('About')
        .first()
        .select([
            'name',
            'title',
            'image',
            'content'
        ])

})