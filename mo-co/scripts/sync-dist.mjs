import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(project, 'out');
const destination = resolve(project, 'dist');
if (relative(project, destination) !== 'dist') throw new Error('Unsafe static export destination.');
if (!existsSync(source)) throw new Error('Next.js did not produce the static export.');
// OneDrive and Windows indexing can briefly hold a generated asset open.
rmSync(destination, { recursive: true, force: true, maxRetries: 8, retryDelay: 300 });
mkdirSync(destination, { recursive: true });
cpSync(source, destination, { recursive: true });
