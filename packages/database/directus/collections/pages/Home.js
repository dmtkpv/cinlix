import Fields from '../../fields.js'

export default {

    options: {
        collection: 'Home',
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
            readonly: true,
            width: 'half'
        }),
        slides: Fields.o2m({
            required: true,
            template: '{{ title }}',
            options: {
                enableSelect: false,
                sort: 'sort'
            }
        }),
        why_us: Fields.o2m({
            required: true,
            template: '{{ title }}',
            options: {
                enableSelect: false,
                sort: 'sort'
            }
        }),
        how_we_work: Fields.o2m({
            required: true,
            template: '{{ title }}',
            options: {
                enableSelect: false,
                sort: 'sort'
            }
        }),
    },

};