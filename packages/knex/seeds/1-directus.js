import Fields from '@this/directus/fields.js'
import Relations from '@this/directus/relations.js'
import Collections from '@this/directus/collections.js'

export async function seed (knex) {



    // -------------------
    // Data
    // -------------------

    const collections = [];
    const fields = [];
    const presets = [];



    // -------------------
    // Helpers
    // -------------------

    const defaults = {
        created_at: Fields.created_at(),
        updated_at: Fields.updated_at(),
        created_by: Fields.created_by(),
        updated_by: Fields.updated_by(),
    }

    function isCustom (collection) {
        return !/^directus_/.test(collection)
    }

    function getFields ({ fields, options: { collection } }) {
        return Object.keys(fields).map((field, sort) => ({ sort, field, collection, ...fields[field] }))
    }

    function getPresets ({ defaults, presets, options: { collection } }) {
        let sort;
        if (collection === 'directus_users') sort = ['-last_access'];
        else if (defaults) sort = ['-created_at'];
        return { collection, layout: 'tabular', layout_query: { tabular: { sort, fields: presets }}}
    }



    // -------------------
    // Set records
    // -------------------

    for (const config of Collections) {

        const collection = config.options.collection;

        if (isCustom(collection)) {
            collections.push(config.options);
        }

        if (config.fields) {
            if (config.defaults !== false) Object.assign(config.fields, defaults);
            fields.push(...getFields(config))
        }

        if (config.presets) {
            presets.push(getPresets(config))
        }

    }



    // -------------------
    // Seed
    // -------------------

    await knex('directus_collections').del();
    await knex('directus_collections').insert(collections);

    await knex('directus_fields').del();
    await knex('directus_fields').insert(fields);

    await knex('directus_presets').whereNull('user').del()
    await knex('directus_presets').insert(presets)

    await knex('directus_relations').del();
    await knex('directus_relations').insert(Relations);



}