const { BACKEND_PORT, BACKEND_URL, BACKEND_KEY, BACKEND_SECRET, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env



// -------------------
// Exports
// -------------------

export default {

    PORT: BACKEND_PORT,
    PUBLIC_URL: BACKEND_URL,

    KEY: BACKEND_KEY,
    SECRET: BACKEND_SECRET,

    DB_CLIENT: 'pg',
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE,

    REDIS_ENABLED: false

}