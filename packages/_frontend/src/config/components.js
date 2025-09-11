// ------------------
// Import
// ------------------

const modules = import.meta.glob([
    '~/icons/*',
    '~/inputs/*',
    '~/items/*',
    '~/layout/*',
    '~/sections/*',
    '~/ui/*',
], { eager: true })



// ------------------
// Export
// ------------------

export default Object.keys(modules).reduce((acc, key) => {
    const name = key.split('/').pop().split('.').shift();
    acc[name] = modules[key].default;
    return acc;
}, {})