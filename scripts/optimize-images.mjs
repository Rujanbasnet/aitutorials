import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const DIRS = [
  'public/images/blog',
  'public/images/challenges',
  'public/images/news',
  'public/images/non-coder',
  'public/images/tools',
  'public/images/tutorials',
];

const MAX_WIDTH = 1200;
const QUALITY = 80;

for (const dir of DIRS) {
  const files = await readdir(dir).catch(() => []);
  for (const file of files) {
    const ext = parse(file).ext.toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const inputPath = join(dir, file);
    const outputPath = join(dir, `${parse(file).name}.webp`);

    const info = await stat(inputPath);
    const meta = await sharp(inputPath).metadata();

    const img = sharp(inputPath);
    if (meta.width > MAX_WIDTH) {
      img.resize(MAX_WIDTH);
    }
    await img.webp({ quality: QUALITY }).toFile(outputPath);

    const outInfo = await stat(outputPath);
    const savings = ((1 - outInfo.size / info.size) * 100).toFixed(1);
    console.log(
      `${inputPath} (${(info.size / 1024).toFixed(0)}KB) → ${outputPath} (${(outInfo.size / 1024).toFixed(0)}KB) — ${savings}% smaller [${meta.width}x${meta.height}]`
    );
  }
}
