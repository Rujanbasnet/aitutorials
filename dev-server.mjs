import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
process.chdir(__dirname);

const child = spawn(process.execPath, ['node_modules/astro/astro.js', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
});

child.on('close', (code) => process.exit(code));
