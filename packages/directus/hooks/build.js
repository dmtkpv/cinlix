import { exec } from 'child_process';
import Collections from '@this/database/directus/collections.js'



// ------------------
// Data
// ------------------

const { NODE_ENV } = process.env;
const collections = Collections.filter(c => !c.options.hidden && c.options.group).map(c => c.options.collection);



// ------------------
// Debounce
// ------------------

let building = false;
let rebuild = false;

function debounce () {

    rebuild = true;
    if (building) return;
    building = true;
    rebuild = false;

    const start = Date.now();
    console.log('BUILD START')

    exec('pnpm --filter @this/website build', (err, stdout, stderr) => {
        console.log('BUILD END:', Date.now() - start)
        if (err) console.log('BUILD ERROR:', err);
        building = false;
        if (rebuild) debounce();
    });

}



// ------------------
// Hooks
// ------------------

export default ({ action }) => {

    collections.forEach(collection => {
        action(`${collection}.items.create`, debounce);
        action(`${collection}.items.update`, debounce);
        action(`${collection}.items.delete`, debounce);
    })

    action('server.start', debounce);

};