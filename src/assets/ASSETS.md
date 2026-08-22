# Asset manifest (rescued from Webflow CDN 2026-08-22)

Source: `cdn.prod.website-files.com/68fa7961956b5d3aaf9cd50c/`
Images converted PNG/JPG → WebP (cwebp q82). Fonts TTF → WOFF2.
Raw originals backed up in `.context/assets-raw/` (gitignored).

## Fonts — `public/fonts/`
DM Sans: regular, medium, semibold, bold, black (.woff2)
Font Awesome: fa-regular-400, fa-solid-900, fa-brands-400 (.woff2)

## Client logos — `src/assets/logos/` (5 clients + brand)
| file | client |
|---|---|
| garic.webp | Garić |
| animago.webp | Animago d.o.o |
| lust-transporti.webp | Lust Transporti d.o.o |
| transporti-sokol.webp | Transporti Sokol |
| vukelja-transporti.webp | Vukelja Transporti |
| logomark.webp | Cargo Navis brand logomark |

## Screenshots — `src/assets/img/`
| file | webflow alt | notes |
|---|---|---|
| dashboard.webp | Dashboard Image | main dashboard shot (was 665KB PNG → 118KB) |
| analitika.webp | Feature Image | analitika feature |
| alerts.webp | Feature Image | rokovi/alerts feature |
| fleet.webp | Feature Image | flota feature |
| file-upload.webp | Feature Image | digitalna arhiva feature |
| shape.webp | Shape Image | decorative accent (was Graph (2).png) |
| cleanshot-2026-01-05-at-10.46.47.webp | Hero Image | **map in Step 5** |
| cleanshot-2026-01-05-at-15.17.53.webp | Hero Image | **map in Step 5** |
| cleanshot-2026-01-05-at-15.25.15.webp | Hero Image | **map in Step 5** |
| cleanshot-2026-01-06-at-13.10.41.webp | Feature Image | **map in Step 5** |
| cleanshot-2026-02-11-at-10.23.14.webp | Hero Image | **map in Step 5** |

## Favicons — `public/`
favicon-32x32.png, android-chrome-512x512.png (plus scaffold favicon.svg/.ico)

## TODO Step 5
- Map the 5 dated `cleanshot-*` files to their DOM section, rename semantically.
- YouTube About video id: `JHygu7fRKOQ` (lightbox, not a stored asset).
