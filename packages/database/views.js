export default {



    // -------------------
    // Pages
    // -------------------

    v_pages: {
        type: '',
        definition: `
            SELECT name, path, title FROM "Home"
            UNION
            SELECT name, path, title FROM "About"
            UNION
            SELECT name, path, title FROM "Articles"
            UNION
            SELECT name, path, title FROM "Contact"
            UNION
            SELECT name, path, title FROM "Partners"
            UNION
            SELECT name, path, title FROM "Privacy"
            UNION
            SELECT name, path, title FROM "Quote"
            UNION
            SELECT name, path, title FROM "Services"
            UNION
            SELECT name, path, title FROM "Team"
            UNION
            SELECT name, path, title FROM "Work"
        `
    },



    // -------------------
    // Services
    // -------------------

    v_services: {
        type: '',
        definition: `
            SELECT 
                services.*,
                "Services".path || '/' || services.slug AS path
            FROM services
            INNER JOIN "Services" ON "Services".name = services.page
        `
    },



    // -------------------
    // Services
    // -------------------

    v_articles: {
        type: '',
        definition: `
            SELECT 
                articles.*,
                "Articles".path || '/' || articles.slug AS path,
                to_char(articles.created_at, 'DD Mon YYYY') AS date
            FROM articles
            INNER JOIN "Articles" ON "Articles".name = articles.page
        `
    }



}