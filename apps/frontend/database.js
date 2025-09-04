import knex from '@this/knex'

export default {

    'pages' () {
        return knex('pages').select('name');
    },

    'Blogs': {
        keys: await knex('blogs').pluck('id'),
        item (id) {
            return knex('blogs').where({ id }).select('title').first()
        }
    },

}