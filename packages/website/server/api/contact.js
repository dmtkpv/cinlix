import { knex } from '@this/database'

export default defineEventHandler(async (event) => {

    return knex('Contact')
        .first()
        .select([
            'name',
            'title',
            'image',
            'street',
            'city',
            'state',
            'zip',
            'phone',
            'email',
            'twitter',
            'facebook',
            'linkedin',
            'instagram'
        ])

})