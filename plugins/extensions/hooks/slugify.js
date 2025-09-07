import slugify from 'slugify'

export default ({ filter }) => {

    function hook (input) {
        if (input.title) input.slug = slugify(input.title, { lower: true })
    }

    filter('services.items.create', hook);
    filter('services.items.update', hook);
    filter('articles.items.create', hook);
    filter('articles.items.update', hook);

};