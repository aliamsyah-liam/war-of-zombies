// Setelah "npx cap add android": paksa landscape + layar penuh
const fs = require('fs'), path = require('path');
const base = path.join(__dirname, '..', 'android', 'app', 'src', 'main');
const mf = path.join(base, 'AndroidManifest.xml');
let m = fs.readFileSync(mf, 'utf8');
if (!m.includes('screenOrientation')) m = m.replace('<activity', '<activity\n            android:screenOrientation="sensorLandscape"');
fs.writeFileSync(mf, m);
const st = path.join(base, 'res', 'values', 'styles.xml');
let s = fs.readFileSync(st, 'utf8');
if (!s.includes('windowFullscreen')) s = s.replace(/(<style name="AppTheme.NoActionBar"[^>]*>)/, '$1\n        <item name="android:windowFullscreen">true</item>');
fs.writeFileSync(st, s);
console.log('Android dipatch: landscape + fullscreen');
