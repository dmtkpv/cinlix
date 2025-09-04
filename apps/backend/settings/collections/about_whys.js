import Fields from '../fields.js';

export default {

    options: {
        collection: 'about_whys',
        group: 'data',
        hidden: true
    },

    fields: {
        id: Fields.id(),
        about: Fields.input({
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
        }),
        description: Fields.text({
            required: true,
        }),
    },

};