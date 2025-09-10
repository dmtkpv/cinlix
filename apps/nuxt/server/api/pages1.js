import { knex } from '@this/backend/database'
import { getServices } from '~~/server/utils'

export default defineEventHandler(async () => {
    const About = await knex('About').select('path', 'title').first()
    const Articles = await knex('Articles').select('path', 'title').first()
    const Contact = await knex('Contact').select('path', 'title').first()
    const Partners = await knex('Partners').select('path', 'title').first()
    const Privacy = await knex('Privacy').select('path', 'title').first()
    const Quote = await knex('Quote').select('path', 'title').first()
    const Services = await knex('Services').select('path', 'title').first()
    const Team = await knex('Team').select('path', 'title').first()
    const Work = await knex('Work').select('path', 'title').first()
    const services = await getServices('title')
    return { About, Articles, Contact, Partners, Privacy, Quote, Services, Team, Work, services }
})