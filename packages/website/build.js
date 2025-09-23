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
const caddyDir = join(root, 'caddy');
const tempDir = join(caddyDir, 'temp');
const publicDir = join(caddyDir, 'public');
const backupDir = join(caddyDir, 'backup');

fs.cpSync(distDir, tempDir, { recursive: true });
const hasPublic = fs.existsSync(publicDir);
if (hasPublic) fs.renameSync(publicDir, backupDir);
fs.renameSync(tempDir, publicDir);
if (hasPublic) fs.rmSync(backupDir, { recursive: true, force: true });
fs.rmSync(tempDir, { recursive: true, force: true });



