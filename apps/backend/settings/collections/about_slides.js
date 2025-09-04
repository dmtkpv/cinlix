import Fields from '../fields.js';

export default {

    options: {
        collection: 'about_slides'
    },

    fields: {
        id: Fields.id(),
        about: Fields.input({
            hidden: true
        }),
        sort: Fields.input({
            hidden: true
        }),
        title: Fields.input({
            required: true,
        }),
        image: Fields.image({
            required: true,
        }),
    },

    // presets: [
    //     'title'
    // ]

};