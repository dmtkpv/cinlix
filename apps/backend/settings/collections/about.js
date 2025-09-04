import Fields from '../fields.js';

export default {

    options: {
        collection: 'about',
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
    },

};