import Fields from '../fields.js';

export default {

    options: {
        collection: 'articles',
        group: 'data',
    },

    fields: {
        id: Fields.id(),
        title: Fields.input({
            required: true,
            width: 'half'
        }),
        slug: Fields.input({
            readonly: true,
            width: 'half'
        }),
        image: Fields.image({
            required: true,
        }),
        content: Fields.wysiwyg({
            required: true,
        }),
    },

    presets: [
        'image',
        'title'
    ]

};