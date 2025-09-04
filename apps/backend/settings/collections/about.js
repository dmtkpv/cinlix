import Fields from '../fields.js';

export default {

    options: {
        collection: 'about',
        singleton: true,
    },


    fields: {
        id: Fields.id(),
        // slug: Fields.input({
        //     readonly: true
        // }),
        // title: Fields.input({
        //     required: true,
        // }),
        // content: Fields.wysiwyg({
        //     required: true,
        // }),
    },

    // presets: [
    //     'title'
    // ]

};