// gta6-meme-x-01 entry: copies the GTA 6 meme PNG to /output
// Standard library only, Node 22, no network

import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'meme.png'), join(out, 'meme.png'));

console.log('Entry copied meme.png to', out);
