export default function (configs) {



    // ------------------
    // Helpers
    // ------------------

    function isMap (record) {
        return record.keys && record.item;
    }



    // ------------------
    // Parse maps
    // ------------------

    for (const prefix in configs) {

        const config = configs[prefix];

        for (const name in config) {

            if (!isMap(config[name])) continue;

            const { keys, item } = config[name];
            const exports = [];

            keys.forEach(key => {
                const id = `${name}-${key}`;
                config[id] = () => item(key);
                exports.push(`${key}: () => import('${prefix}:${id}').then(m => m.default)`);
            })

            config[name] = () => `{ ${exports.join(',')} }`

        }

    }



    // ------------------
    // Exports
    // ------------------

    return {

        name: 'vite-db',

        resolveId (id) {
            const [prefix] = id.split(':');
            if (Object.keys(configs).includes(prefix)) return '\0' + id;
        },

        async load (id) {
            const [_, prefix, name] = id.split(/[\0:]/);
            if (!Object.keys(configs).includes(prefix)) return;
            if (!configs[prefix][name]) throw new Error(`Unknown virtual ${id}`);
            let value = await configs[prefix][name]();
            if (typeof value === 'object') value = JSON.stringify(value);
            return `export default ${value}`
        }

    }

}