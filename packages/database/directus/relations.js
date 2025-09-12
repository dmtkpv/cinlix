// -------------------
// M2M
// -------------------

const m2m = []



// -------------------
// O2M
// -------------------

const o2m = [
    ['Home', 'slides', 'home_slides', 'page', null, 'sort', 'delete'],
    ['Home', 'why_us', 'home_whys', 'page', null, 'sort', 'delete'],
    ['Home', 'how_we_work', 'home_hows', 'page', null, 'sort', 'delete'],
    ['Articles', 'articles', 'articles', 'page', null, null, 'delete'],
    ['Services', 'services', 'services', 'page', null, 'sort', 'delete'],
    ['services', 'sections', 'services_sections', 'service', null, 'sort', 'delete'],
];



// -------------------
// Exports
// -------------------

export default [...m2m, ...o2m].map(relation => {
    const [one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action] = relation;
    return { one_collection, one_field, many_collection, many_field, junction_field, sort_field, one_deselect_action };
});