const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/customer');
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, file.replace('.png', '.webp'));
    await sharp(inputPath)
      .resize({ width: 400, height: 400, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath);
    const inSize = fs.statSync(inputPath).size;
    const outSize = fs.statSync(outputPath).size;
    console.log(`✓ ${file} → ${file.replace('.png', '.webp')} (${(inSize/1024).toFixed(1)}KB → ${(outSize/1024).toFixed(1)}KB)`);
  }
  console.log('\nDone! All customer logos converted to WebP.');
})();
