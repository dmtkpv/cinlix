import Fields from '../../fields.js'

export default {

    options: {
        collection: 'errors'
    },

    fields: {
        code: Fields.input({
            required: true,
            readonly: true,
            width: 'half'
        }),
        title: Fields.input({
            required: true,
            width: 'half'
        }),
        image: Fields.image({
            required: true,
        }),
        description: Fields.text({
            required: true,
        }),
    },

    presets: [
        'code',
        'title'
    ]

};