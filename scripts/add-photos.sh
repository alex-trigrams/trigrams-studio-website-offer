#!/bin/sh
# Copies a folder of photos into the site at web size, for the portfolio page.
#   scripts/add-photos.sh "<source folder>" <set-slug>
# Writes assets/stills/<set-slug>/<name>.jpg (1600px long edge) and thumb/ (700px).
# Originals are never copied. Then add the set to scripts/portfolio.json and run
#   node scripts/portfolio.mjs
set -e
SRC="$1"; SLUG="$2"
[ -d "$SRC" ] && [ -n "$SLUG" ] || { echo 'usage: scripts/add-photos.sh "<source folder>" <set-slug>'; exit 1; }
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/assets/stills/$SLUG"
mkdir -p "$OUT/thumb"
n=0
for f in "$SRC"/*; do
  case "$(echo "$f" | tr 'A-Z' 'a-z')" in *.jpg|*.jpeg|*.png|*.heic|*.tif|*.tiff) ;; *) continue ;; esac
  name="$(basename "$f" | sed 's/\.[^.]*$//' | tr 'A-Z' 'a-z' | tr ' ' '-')"
  [ -f "$OUT/$name.jpg" ] && continue
  sips -s format jpeg -s formatOptions 60 -Z 1600 "$f" --out "$OUT/$name.jpg" >/dev/null
  sips -s format jpeg -s formatOptions 60 -Z 700 "$OUT/$name.jpg" --out "$OUT/thumb/$name.jpg" >/dev/null
  n=$((n + 1))
done
echo "Added $n photos to assets/stills/$SLUG ($(du -sh "$OUT" | cut -f1))"
