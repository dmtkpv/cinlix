// -------------------
// M2M
// -------------------

const m2m = []



// -------------------
// O2M
// -------------------

const o2m = [
    ['about', 'slides', 'about_slides', 'about', null, 'sort', 'delete'],
    ['about', 'why_us', 'about_whys', 'about', null, 'sort', 'delete'],
    ['services', 'content', 'services_content', 'service', null, 'sort', 'delete'],
    ['directus_files', null, 'about_slides', 'image', null, null, 'delete'],
];



// -------------------
// Exports
// -------------------

export default [...m2m, ...o2m].map(relation => {
    const [one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action] = relation;
    return { one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action };
});