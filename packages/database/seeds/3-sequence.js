export async function seed (knex) {

    const items = await knex('information_schema.table_constraints AS tc')
        .join('information_schema.key_column_usage AS kcu', 'kcu.constraint_name', 'tc.constraint_name')
        .where('tc.constraint_type', 'PRIMARY KEY')
        .where('tc.table_schema', 'public')
        .select('kcu.table_name AS table')
        .select('kcu.column_name AS pk')
        .select(knex.raw(`pg_get_serial_sequence(format('"%s"', kcu.table_name), kcu.column_name) as sequence`));

    for (const { pk, sequence, table } of items) {
        if (!sequence) continue;
        await knex.raw(`SELECT setval(?, (SELECT MAX(??) from ??))`, [sequence, pk, table])
    }

}