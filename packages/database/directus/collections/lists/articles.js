import Fields from '../../fields.js'

export default {

    options: {
        collection: 'articles'
    },

    fields: {
        id: Fields.id(),
        page: Fields.input({
            hidden: true
        }),
        slug: Fields.input({
            hidden: true
        }),
        title: Fields.input({
            required: true,
            width: 'half'
        }),
        publish_date: Fields.datetime({
            width: 'half'
        }),
        image: Fields.image({
            required: true,
        }),
        description: Fields.text({
            required: true,
        }),
        content: Fields.wysiwyg({
            required: true,
        }),
    },

    presets: [
        'image',
        'title',
        'description',
        'publish_date'
    ]

};