- [技術スタック](#技術スタック)
- [VSCodeの設定](#VSCodeの設定)
- [TODO](#TODO)

# 技術スタック
- Next.js
- TypeScript
- Hono
- Zod
- React Query
- Biome

# VSCodeの設定
settings.json
```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

extensions.json
```json
{
  "recommendations": [
    "aaron-bond.better-comments",
    "biomejs.biome",
    "streetsidesoftware.code-spell-checker",
    "yoavbls.pretty-ts-errors",
    "shardulm94.trailing-spaces"
  ]
}
```

# TODO
- エラーハンドリング
  - https://zenn.dev/hacobell_dev/articles/typescript-neverthrow-csv-error-handling
- Tailwind CSS
screens: {
      pc: "668px",
    },
- Suspenseを使った場合と使わない場合の例を示す
- UIコンポーネント
  - shadcn
  - https://21st.dev/
- URLパラメータ
  -　https://nuqs.47ng.com/ https://nuqs.47ng.com/playground/pagination
- 決済
  - Stripe
  - https://stripealternatives.com/
  -　https://polar.sh/
