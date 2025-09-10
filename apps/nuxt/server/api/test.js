import { knex } from '@this/backend/database'

export default defineEventHandler(async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        test: 'test'
    }

})