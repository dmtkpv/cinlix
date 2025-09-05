import Fields from '../../fields.js'

export default {

    options: {
        collection: 'services',
        sort_field: 'sort'
    },

    fields: {
        id: Fields.id(),
        page: Fields.input({
            hidden: true
        }),
        sort: Fields.input({
            hidden: true
        }),
        title: Fields.input({
            required: true,
            width: 'half'
        }),
        slug: Fields.input({
            required: true,
            width: 'half'
        }),
        description: Fields.text({
            required: true,
        }),
        icon: Fields.image({
            required: true,
            width: 'half'
        }),
        image: Fields.image({
            required: true,
            width: 'half'
        }),
        sections: Fields.o2m({
            required: true,
            template: '{{ description }}',
            options: {
                enableSelect: false,
                sort: 'sort'
            }
        })
    },

    presets: [
        'icon',
        'title'
    ]

};