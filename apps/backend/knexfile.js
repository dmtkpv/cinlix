import Knex from 'knex';



// ------------------
// Config
// ------------------

const { DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE, } = process.env

const config = {
    client: 'pg',
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
    },
    migrations: {
        tableName: 'migrations'
    }
}



// ------------------
// Instance
// ------------------

const knex = new Knex(config);



// ------------------
// Extensions
// ------------------

Knex.TableBuilder.extend('defaults', function () {
    this.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    this.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    this.uuid('created_by').references('directus_users.id').onDelete('SET NULL');
    this.uuid('updated_by').references('directus_users.id').onDelete('SET NULL');
});

Knex.TableBuilder.extend('page', function (page) {
    this.string('name').defaultTo(page).primary();
    this.string('title').notNullable();
    this.string('path').notNullable();
});

Knex.TableBuilder.extend('pageRef', function (page) {
    this.string('page').notNullable().defaultTo(page).references(`${page}.name`).onDelete('CASCADE')
});

Knex.TableBuilder.extend('file', function (column) {
    return this.uuid(column).references('directus_files.id')
});





// ------------------
// Exports
// ------------------

export default config
export { knex };
