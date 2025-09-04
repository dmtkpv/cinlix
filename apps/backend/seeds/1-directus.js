import Fields from '../settings/fields.js'
import Relations from '../settings/relations.js'
import Collections from '../settings/collections.js'
import { DEFAULT_IMAGE } from '../constants.js'

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

    if (collections.length) {
        await knex('directus_collections').del();
        await knex('directus_collections').insert(collections);
    }

    if (fields.length) {
        await knex('directus_fields').del();
        await knex('directus_fields').insert(fields);
    }

    if (presets.length) {
        await knex('directus_presets').del()
        await knex('directus_presets').insert(presets)
    }

    if (Relations.length) {
        await knex('directus_relations').del();
        await knex('directus_relations').insert(Relations);
    }

    await knex('directus_files').insert(DEFAULT_IMAGE).onConflict('id').merge();



}