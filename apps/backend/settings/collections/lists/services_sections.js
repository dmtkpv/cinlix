import Fields from '../../fields.js'

export default {

    options: {
        collection: 'services_sections',
        hidden: true,
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
        description: Fields.text({
            required: true,
        }),
    },

    presets: [
        'image',
        'description'
    ]

};