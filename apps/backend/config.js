const { DIRECTUS_PORT, DIRECTUS_URL, DIRECTUS_KEY, DIRECTUS_SECRET, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env



// -------------------
// Exports
// -------------------

export default {

    PORT: DIRECTUS_PORT,
    PUBLIC_URL: DIRECTUS_URL,

    KEY: DIRECTUS_KEY,
    SECRET: DIRECTUS_SECRET,

    DB_CLIENT: 'pg',
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE,

    REDIS_ENABLED: false

}