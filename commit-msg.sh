#!/bin/bash

PROMPT=$(cat <<'EOF'
あなたはシニアエンジニアとしてレビュー観点でコミットメッセージを作成してください。

以下の変更内容から「変更の意図」を要約し、最も適切なConventional Commits形式のメッセージを1行で出力してください。

ルール:
- typeは適切に選ぶ（feat, fix, chore, refactor, docs, style, test など）
- 実装内容ではなく「目的・意図」を優先する
- 簡潔（最大10単語目安）
- 現在形
- 1行のみ出力

変更内容:
EOF
)

DIFF=$(git --no-pager diff)

echo -e "$PROMPT\n$DIFF" | pbcopy

echo "✅ Prompt + diff copied to clipboard"