const {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE,
} = process.env

export default {
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