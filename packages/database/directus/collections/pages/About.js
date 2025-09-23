import Fields from '../../fields.js'

export default {

    options: {
        collection: 'About',
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
        content: Fields.wysiwyg({
            required: true,
        }),
    },

};