import build from '@this/website/build'



// ------------------
// Data
// ------------------

const { NODE_ENV } = process.env;

const collections = [
    'About',
    'Articles',
    'Contact',
    'Services',
    'articles',
    'services',
    'errors',
]



// ------------------
// Debounce
// ------------------

let building = false;
let rebuild = false;

async function debounce () {
    rebuild = true;
    if (building) return;
    building = true;
    rebuild = false;
    const start = Date.now();
    console.log('BUILD:START')
    await build().catch(console.error);
    console.log('BUILD:END', Date.now() - start)
    building = false;
    if (rebuild) debounce();
}




// ------------------
// Hooks
// ------------------

export default ({ action }) => {

    if (NODE_ENV === 'development') return;

    collections.forEach(collection => {
        action(`${collection}.items.create`, debounce);
        action(`${collection}.items.update`, debounce);
        action(`${collection}.items.delete`, debounce);
    })

    action('server.start', debounce);

};