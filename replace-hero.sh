#!/bin/bash
# =============================================================
# soupir-hero.jpg 差し替えスクリプト
# 使い方:
#   1. 本物の画像ファイルを用意する (例: ~/Downloads/soupir.jpg)
#   2. このスクリプトと同じディレクトリで実行する
#      bash replace-hero.sh ~/Downloads/soupir.jpg
# =============================================================
set -e
SRC="${1:?使い方: bash replace-hero.sh <画像ファイルパス>}"
DEST="$(dirname "$0")/images/soupir-hero.jpg"
cp "$SRC" "$DEST"
echo "✓ 差し替え完了: $DEST"
echo "  次に以下を実行してください:"
echo "    git add images/soupir-hero.jpg"
echo "    git commit -m 'ヒーロー画像を本番用に差し替え'"
echo "    git push"
