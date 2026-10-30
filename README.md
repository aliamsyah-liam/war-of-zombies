# WAR OF ZOMBIES
Game zombie survival open world, latar Kalimantan. Dibungkus jadi APK dengan Capacitor.

## Build APK
1. Push ke branch `main`.
2. Buka tab **Actions** > **Build APK** > tunggu hijau.
3. Unduh artifact **WAR-OF-ZOMBIES-apk** (isinya `app-debug.apk`), lalu install di HP.

## Struktur
- `www/` game untuk APK (three.js dimuat lokal)
- `index.html` versi web (three.js dari CDN)
- `scripts/` penyiap web dan patch Android
- `.github/workflows/build-apk.yml` workflow build
