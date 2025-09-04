export default function useUtils (knex) {



    // -------------------
    // Schema
    // -------------------

    function setDefaults (table) {
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.uuid('created_by').references('directus_users.id').onDelete('SET NULL');
        table.uuid('updated_by').references('directus_users.id').onDelete('SET NULL');
    }

    function dropDefaults (table) {
        table.dropColumn('created_at');
        table.dropColumn('updated_at');
        table.dropColumn('created_by');
        table.dropColumn('updated_by');
    }



    // -------------------
    // Export
    // -------------------

    return {
        setDefaults,
        dropDefaults
    }


}