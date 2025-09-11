import Fields from '../../fields.js'

export default {

    options: {
        collection: 'Contact',
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
        street: Fields.input({
            required: true,
            width: 'half'
        }),
        city: Fields.input({
            required: true,
            width: 'half'
        }),
        state: Fields.input({
            required: true,
            width: 'half'
        }),
        zip: Fields.input({
            required: true,
            width: 'half'
        }),
        phone: Fields.input({
            required: true,
            width: 'half'
        }),
        email: Fields.input({
            required: true,
            width: 'half'
        }),
        twitter: Fields.input({
            required: true,
            width: 'half'
        }),
        facebook: Fields.input({
            required: true,
            width: 'half'
        }),
        linkedin: Fields.input({
            required: true,
            width: 'half'
        }),
        instagram: Fields.input({
            required: true,
            width: 'half'
        }),
        youtube: Fields.input({
            required: true,
            width: 'half'
        }),

    },

};