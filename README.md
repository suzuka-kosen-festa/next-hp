# 鈴鹿高専祭 開催期間外サイト

鈴鹿工業高等専門学校の鈴鹿高専祭の開催期間外サイトです。

## 概要

このプロジェクトは、現在の日時に基づいて動的にコンテンツを表示する Cloudflare Workers アプリケーションです。月によって異なるメッセージを表示します。

このサイトは次の問題の解決のために作成されました:

- 例年開催期間外はつなぎとして去年のページを表示し続ける
  - SEOが悪化
- 開催期間外だと関係者のHPへの関心が薄れメンテナンスを忘れられる
- 開催期間中の豪華な依存を含んだページが開催期間外はメンテナンスされない
- Cloudflareの報告によると `snct-fes.info` に攻撃のペイロードと思われるリクエストが結構届いている
  - Cloudflareで全部ブロックされているが、前述のメンテナンスの問題によりゼロデイが表面化する可能性がある
- 毎回の開催期間外のページを用意するのが手間

## ローカルセットアップ

```bash
pnpm install
```

### ローカル開発サーバーを起動

```bash
pnpm dev
```

### TypeScript の型チェック

```bash
pnpm typecheck
```

### ESLint でコードをlint

```bash
pnpm lint
```

## デプロイ

### コードのデプロイ

このサイトをデプロイするには、以下のコマンドを実行してください:

```bash
pnpm dev --remote
```

または、直接デプロイ:

```bash
wrangler deploy
```

### ドメイン運用について

開催期間外は本サイトを表示し、開催期間中は別のpagesプロジェクトに切り替える都合上、**ドメイン運用を簡略化するため、Cloudflareコンソール画面を直接操作**することを推奨します。

#### Cloudflareコンソールでのドメイン切り替え手順

1. **Cloudflareダッシュボードにログイン**
   - [Cloudflareダッシュボード](https://dash.cloudflare.com)にアクセス
   - 現在の `snct-fes.info` のアカウントは [bfea47f06c7d0d99f2119e7e598b6183](https://dash.cloudflare.com/bfea47f06c7d0d99f2119e7e598b6183) です

2. **Workers & Pages の設定を確認/変更**
   - 左メニューから「Workers & Pages」を選択
   - `snct-fes.info` で検索
   - 古い方のサイトを閉じる or カスタムドメインを外す
     - 前述のセキュリティ等の観点から完全に閉鎖を推奨しています
   - `suzuka-kosen-festa-outside-period-site` の カスタムドメインに `snct-fes.info` を追加

3. **`suzuka-kosen-festa-outside-period-site` がない場合(新規作成)**
   - 左メニューから「Workers & Pages」を選択
   - 「Create a new project」をクリック
   - 「Continue with GitHub」をクリック
   - suzuka-kosen-festa/next-hp を選択
   - プロジェクト名を `suzuka-kosen-festa-outside-period-site` に変更
   - デプロイ後にカスタムドメインに `snct-fes.info` を追加

## ライセンス

MIT - 詳細は [LICENSE](./LICENSE) ファイルを参照してください。
