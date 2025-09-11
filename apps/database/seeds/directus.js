import Fields from '#root/settings/fields.js'
import Relations from '#root/settings/relations.js'
import Collections from '#root/settings/collections.js'
import Policies from '#root/settings/policies.js'

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
        const sort = Collections.indexOf(config);

        if (isCustom(collection)) {
            collections.push({ ...config.options, sort });
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



    // -------------------
    // Policies
    // -------------------

    for (const { id, role, name, permissions, ...policy } of Policies) {
        if (role) await knex('directus_roles').insert({ id: role, name }).onConflict('id').merge();
        await knex('directus_policies').insert({ id, name, ...policy }).onConflict('id').merge();
        await knex('directus_access').insert({ id, role, policy: id }).onConflict('id').merge();
        await knex('directus_permissions').where('policy', id).del();
        if (permissions) await knex('directus_permissions').insert(permissions.map(p => ({ policy: id, ...p })));
    }



}