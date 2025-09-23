import fs from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { loadNuxt, buildNuxt } from '@nuxt/kit'
import { knex } from '@this/database'

const root = fileURLToPath(new URL('.', import.meta.url));

const nuxt = await loadNuxt({
    cwd: root,
    dev: false,
    overrides: {
        nitro: {
            static: true,
        }
    }
})

await buildNuxt(nuxt);
await knex.destroy();

const distDir = join(nuxt._nitro.options.output.dir, 'public');
const publicDir = join(root, 'caddy', 'public');
const backupDir = join(root, 'caddy', 'backup');

const hasPublic = fs.existsSync(publicDir);
if (hasPublic) fs.renameSync(publicDir, backupDir);
fs.renameSync(distDir, publicDir);
if (hasPublic) fs.rmSync(backupDir, { recursive: true, force: true });



