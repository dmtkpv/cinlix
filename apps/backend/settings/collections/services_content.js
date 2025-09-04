import Fields from '../fields.js';

export default {

    options: {
        collection: 'services_content',
        group: 'data',
        hidden: true,
    },

    fields: {
        id: Fields.id(),
        service: Fields.input({
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

};