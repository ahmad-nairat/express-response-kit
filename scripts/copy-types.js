const fs = require('fs');
const path = require('path');

const folders = ['100-199', '200-299', '300-399', '400-499', '500-599'];

// Copy types.d.ts from each folder
folders.forEach(folder => {
  const src = path.join('src', folder, 'types.d.ts');
  const dest = path.join('dist', folder, 'types.d.ts');
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} → ${dest}`);
});

// Copy root types.d.ts
fs.copyFileSync('src/types.d.ts', 'dist/types.d.ts');
console.log('Copied src/types.d.ts → dist/types.d.ts');

console.log('\n✓ All type declarations copied successfully');
