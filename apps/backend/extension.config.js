import fs from 'fs'
import { pick } from 'lodash-es'

const config = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const data = pick(config, ['type', 'name', 'version', 'directus:extension']);
const path = data['directus:extension'].path;
const dir = path.api.replace(/\/dist\/.+/, '');

path.app = path.app.replace(dir + '/', '');
path.api = path.api.replace(dir + '/', '');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`${dir}/package.json`, JSON.stringify(data, null, 2));

export default {
    plugins: [
        {
            name: 'api-externals',
            options (options) {
                const app = options.external.includes('vue');
                if (!app) {
                    options.external.push(/node_modules/);
                    options.preserveSymlinks = true;
                }
            }
        }
    ]
};