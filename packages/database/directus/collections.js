import About from './collections/pages/About.js'
import Articles from './collections/pages/Articles.js'
import Contact from './collections/pages/Contact.js'
import Home from './collections/pages/Home.js'
import Partners from './collections/pages/Partners.js'
import Privacy from './collections/pages/Privacy.js'
import Quote from './collections/pages/Quote.js'
import Services from './collections/pages/Services.js'
import Team from './collections/pages/Team.js'
import Work from './collections/pages/Work.js'

import articles from './collections/lists/articles.js'
import home_hows from './collections/lists/home_hows.js'
import home_slides from './collections/lists/home_slides.js'
import home_whys from './collections/lists/home_whys.js'
import services from './collections/lists/services.js'
import services_sections from './collections/lists/services_sections.js'

import errors from './collections/system/errors.js'



// ------------------
// Group
// ------------------

const groups = [];

function group (name, configs) {
    groups.push({ options: { collection: name } })
    configs.forEach(config => config.options.group = name);
    return configs;
}



// ------------------
// Grouped
// ------------------

const pages = group('pages', [
    About,
    Articles,
    Contact,
    Home,
    Partners,
    Privacy,
    Quote,
    Services,
    Team,
    Work,
])

const lists = group('lists', [
    articles,
    home_hows,
    home_slides,
    home_whys,
    services,
    services_sections,
])

const system = group('system', [
    errors,
])



// ------------------
// Exports
// ------------------

export default [
    ...groups,
    ...pages,
    ...lists,
    ...system
];