import About from './collections/pages/About.js'
import Blog from './collections/pages/Blog.js'
import Contact from './collections/pages/Contact.js'
import Services from './collections/pages/Services.js'

import about_slides from './collections/lists/about_slides.js'
import about_whys from './collections/lists/about_whys.js'
import blog from './collections/lists/blog.js'
import services from './collections/lists/services.js'
import services_sections from './collections/lists/services_sections.js'



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
    Blog,
    Contact,
    Services
])

const lists = group('lists', [
    about_slides,
    about_whys,
    blog,
    services,
    services_sections,
])



// ------------------
// Exports
// ------------------

export default [
    ...groups,
    ...pages,
    ...lists,
];