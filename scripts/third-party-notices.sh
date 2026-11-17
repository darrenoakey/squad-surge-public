#!/usr/bin/env bash
# Generate public/THIRD-PARTY-NOTICES.txt from the licenses shipped in the
# installed dependency packages (source of truth: node_modules). Regenerate
# after any dependency change.
set -euo pipefail
cd "$(dirname "$0")/.."
out="public/THIRD-PARTY-NOTICES.txt"
{
  echo "Third-party notices for Squad Surge"
  echo "Generated from the installed packages; see package-lock.json for exact versions."
  echo
  for pkg in three @fontsource/inter @fontsource/barlow-condensed; do
    echo "================================================================"
    echo "$pkg ($(node -p "require('./node_modules/${pkg}/package.json').version"))"
    echo "================================================================"
    cat "node_modules/${pkg}/LICENSE"
    echo
  done
} >"$out"
echo "wrote $out"
