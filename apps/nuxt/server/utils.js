import { knex } from '@this/backend/database'

export function getServices (...columns) {
    return knex('services')
        .innerJoin('Services', 'Services.name', 'services.page')
        .orderBy('services.sort')
        .select(knex.raw(`"Services".path || '/' || services.slug AS path`))
        .select(columns.map(column => `services.${column}`))
}

export function getArticles (...columns) {
    return knex('articles')
        .innerJoin('Articles', 'Articles.name', 'articles.page')
        .orderBy('articles.created_at', 'desc')
        .select(knex.raw(`"Articles".path || '/' || articles.slug AS path`))
        .select(knex.raw(`to_char(articles.created_at, 'DD Mon YYYY') AS date`))
        .select(columns.map(column => `articles.${column}`))
}