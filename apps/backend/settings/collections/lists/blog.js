import Fields from '../../fields.js'

export default {

    options: {
        collection: 'blog'
    },

    fields: {
        id: Fields.id(),
        parent: Fields.input({
            hidden: true
        }),
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