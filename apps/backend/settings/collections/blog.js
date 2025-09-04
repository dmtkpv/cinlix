import Fields from '../fields.js';

export default {

    options: {
        collection: 'blog',
        group: 'pages',
        singleton: true,
    },

    fields: {
        id: Fields.id(),
        title: Fields.input({
            required: true,
            width: 'half'
        }),
        path: Fields.input({
            required: true,
            width: 'half'
        }),
        image: Fields.image({
            required: true,
        })
    },

};