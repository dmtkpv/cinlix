// -------------------
// M2M
// -------------------

const m2m = []



// -------------------
// O2M
// -------------------

const o2m = [
    ['About', 'slides', 'about_slides', 'parent', null, 'sort', 'delete'],
    ['About', 'why_us', 'about_whys', 'parent', null, 'sort', 'delete'],
    ['Blog', 'blog', 'blog', 'parent', null, null, 'delete'],
    ['Services', 'services', 'services', 'parent', null, 'sort', 'delete'],
    ['services', 'sections', 'services_sections', 'parent', null, 'sort', 'delete'],
    // ['directus_files', null, 'about_slides', 'image', null, null, 'delete'],
];



// -------------------
// Exports
// -------------------

export default [...m2m, ...o2m].map(relation => {
    const [one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action] = relation;
    return { one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action };
});