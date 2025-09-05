import Fields from '../../fields.js'

export default {

    options: {
        collection: 'about_slides',
        sort_field: 'sort',
        hidden: true
    },

    fields: {
        id: Fields.id(),
        parent: Fields.input({
            hidden: true
        }),
        sort: Fields.input({
            hidden: true
        }),
        image: Fields.image({
            required: true,
        }),
        title: Fields.input({
            required: true,
        })
    },

    presets: [
        'image',
        'title'
    ]

};