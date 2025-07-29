// update-entry-file.js
import { readFileSync, writeFileSync } from 'fs';

const manifest = JSON.parse(readFileSync('./dist/.vite/manifest.json', 'utf-8'));
const entry = manifest['src/main.jsx'].file;

const content = `export default "${entry}";\n`;

writeFileSync('./entry-file.json', content);
