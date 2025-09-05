import Fields from '../../fields.js'

export default {

    options: {
        collection: 'Services',
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
        services: Fields.o2m({
            required: true,
            template: '{{ icon }} {{ title }}',
            options: {
                enableSelect: false,
                sort: 'sort'
            }
        }),
    },

};