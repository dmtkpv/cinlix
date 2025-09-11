import { fileURLToPath } from 'url'
import createSSG from '@dmtkpv/ssg/createSSG'
import { knex } from '@this/backend/database'

export default async function () {

    const pages = await knex
        .select('*')
        .union([
            knex('About').select('path'),
            knex('Articles').select('path'),
            knex('Contact').select('path'),
            knex('Services').select('path'),
            knex('services').innerJoin('Services', 'Services.name', 'services.page').select(knex.raw(`"Services".path || '/' || services.slug AS path`)),
            knex('articles').innerJoin('Articles', 'Articles.name', 'articles.page').select(knex.raw(`"Articles".path || '/' || articles.slug AS path`)),
        ])

    const root = fileURLToPath(new URL('.', import.meta.url))
    const ssg = await createSSG({ root });

    for (const { path } of pages) {
        await ssg(path);
    }

    await ssg('/404');

}
