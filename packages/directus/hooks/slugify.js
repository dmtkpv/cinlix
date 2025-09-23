// -------------------
// Helpers
// -------------------

function slugify(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}



// -------------------
// Hooks
// -------------------

export default ({ filter }) => {

    function hook (input) {
        if (input.title) input.slug = slugify(input.title, { lower: true })
    }

    filter('services.items.create', hook);
    filter('services.items.update', hook);
    filter('articles.items.create', hook);
    filter('articles.items.update', hook);

};