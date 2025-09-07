import About from './collections/pages/About.js'
import Articles from './collections/pages/Articles.js'
import Contact from './collections/pages/Contact.js'
import Services from './collections/pages/Services.js'

import about_slides from './collections/lists/about_slides.js'
import about_whys from './collections/lists/about_whys.js'
import articles from './collections/lists/articles.js'
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
    Services
])

const lists = group('lists', [
    about_slides,
    about_whys,
    articles,
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