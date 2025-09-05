import Fields from '../../fields.js'

export default {

    options: {
        collection: 'Blog',
        singleton: true,
    },

    fields: {
        name: Fields.input({
            hidden: true,
        }),
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
        }),
        blog: Fields.o2m({
            required: true,
            template: '{{ title }}',
            options: {
                enableSelect: false
            }
        }),
    },

};