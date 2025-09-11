import { knex } from '@this/database'
import { keyBy } from '~~/server/utils'

export default defineEventHandler(async (event) => {

    const errors = await knex('errors').select([
        'code',
        'image',
        'title',
        'description'
    ]);

    return keyBy(errors, 'code');

})