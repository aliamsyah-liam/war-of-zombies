// Menyalin three.js ke www/ supaya game jalan offline di dalam APK
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const dst = path.join(__dirname, '..', 'www', 'three.min.js');
fs.copyFileSync(src, dst);
console.log('three.min.js disalin ke www/');
