import { knex } from '@this/database'
import { keyBy } from '~~/server/utils'

export default defineEventHandler(async (event) => {

    const pages = await knex('v_pages').select([
        'name',
        'path',
        'title'
    ]);

    const services = await knex('v_services').select([
        'path',
        'title'
    ]);

    return {
        ...keyBy(pages, 'name'),
        services
    }

})