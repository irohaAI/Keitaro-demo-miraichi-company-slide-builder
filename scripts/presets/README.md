# スライドプリセット ガイド

`scripts/presets/` に格納されたビジネス向けカラーテーマ集です。  
`template.js` の色・フォントを一括で切り替えることで、  
対象業界・シーンに最適化されたスライドを素早く生成できます。

---

## 使い方

```js
var t       = require("./template.js");
var presets = require("./presets/index.js");

// 1. slug で取得して適用
var preset = presets.get("ocean_teal");
presets.apply(preset, t);

// 2. キーワード検索して適用
var preset = presets.find("スタートアップ");
presets.apply(preset, t);

// 3. あとは通常通りスライドを生成
var pres = new t.pptxgen();
t.addTitleSlide(pres, "タイトル", "サブタイトル", "作成者");
// ...
```

---

## プリセット一覧

| # | slug | テーマ名 | 主な用途 | 主色 | アクセント |
|---|------|----------|----------|------|------------|
| 1 | `midnight_executive` | **Midnight Executive** | 経営報告 / IR / コンサル | ネイビー `#1E2761` | ゴールド `#C9A84C` |
| 2 | `forest_strategy` | **Forest Strategy** | 戦略提案 / ESG / 事業計画 | フォレストグリーン `#2C5F2D` | モスグリーン `#97BC62` |
| 3 | `coral_energy` | **Coral Energy** | ピッチデッキ / スタートアップ | ディープネイビー `#2F3C7E` | コーラル `#F96167` |
| 4 | `ocean_teal` | **Ocean Teal** | IT / DX / SaaS | ディープティール `#065A82` | シーフォーム `#02C39A` |
| 5 | `charcoal_minimal` | **Charcoal Minimal** | 汎用ビジネス / 社内報告 | チャコール `#36454F` | オレンジ `#E85D04` |
| 6 | `berry_finance` | **Berry Finance** | 金融 / 保険 / 資産運用 | ディープベリー `#6D2E46` | ゴールド `#B8860B` |
| 7 | `sage_wellness` | **Sage Wellness** | 医療 / HR / 教育 | セージグリーン `#5F8575` | テラコッタ `#C68B6E` |
| 8 | `solar_orange` | **Solar Orange** | 営業提案 / 製品ローンチ | ダークチャコール `#1C1C1E` | オレンジ `#E65100` |
| 9 | `royal_purple` | **Royal Purple** | ラグジュアリー / ブランド戦略 | ロイヤルパープル `#4A0E8F` | ウォームゴールド `#D4A017` |
| 10 | `steel_blue` | **Steel Blue** | 製造 / 建設 / エンジニアリング | スチールブルー `#2B4F6E` | セーフティイエロー `#FDD835` |

---

## テーマ選択ガイド

### 業界別おすすめ

| 業界 | おすすめプリセット |
|------|-------------------|
| 金融・銀行・保険 | `berry_finance` / `midnight_executive` |
| コンサル・戦略 | `midnight_executive` / `forest_strategy` |
| IT・テクノロジー・SaaS | `ocean_teal` / `charcoal_minimal` |
| スタートアップ・VC | `coral_energy` / `solar_orange` |
| 製造・建設・インフラ | `steel_blue` |
| 医療・ヘルスケア・HR | `sage_wellness` |
| 高級ブランド・ラグジュアリー | `royal_purple` |
| ESG・サステナビリティ | `forest_strategy` / `sage_wellness` |
| 営業・マーケティング | `solar_orange` / `coral_energy` |
| 汎用 / どれか迷ったら | `charcoal_minimal` |

### シーン別おすすめ

| シーン | おすすめプリセット |
|--------|-------------------|
| 経営陣・取締役会向け | `midnight_executive` / `berry_finance` |
| 投資家・IR向け | `midnight_executive` / `royal_purple` |
| 新規事業提案 | `coral_energy` / `ocean_teal` |
| 社内研修・教育 | `sage_wellness` / `charcoal_minimal` |
| 製品説明・デモ | `ocean_teal` / `solar_orange` |
| 年次報告・振り返り | `forest_strategy` / `midnight_executive` |

---

## カラー構造（全プリセット共通）

各プリセットの `colors` は `template.js` の `COLORS` に以下のように対応しています：

| キー | template.js での役割 |
|------|----------------------|
| `DARK_GREEN` | 表紙・セクション扉・ヘッダーバー背景（**主色**） |
| `CREAM_YELLOW` | バッジ・アクセントライン・番号（**アクセント色**） |
| `LIGHT_GRAY` | コンテンツカード背景・テーブル偶数行（**背景色**） |
| `TEXT_DARK` | 本文・見出しテキスト |
| `TEXT_MEDIUM` | 補助テキスト・説明文 |
| `TEXT_LIGHT` | 注釈・キャプション |
| `WHITE` | 主色面上のテキスト・白抜きエリア |
| `HIGHLIGHT_YELLOW` | 強調ボックス・特定ハイライト |

---

## 企業別プリセットの追加方法

新しいプリセットファイルを `scripts/presets/` に追加するだけで自動認識されます。

```js
// scripts/presets/mycompany.js
module.exports = {
  name: "My Company",
  slug: "mycompany",            // ← ファイル名と揃えると管理しやすい
  description: "自社カラー",
  useCase: ["社内資料", "顧客向け提案"],
  colors: {
    DARK_GREEN: "003366",       // ← 主色（HEX、#なし）
    CREAM_YELLOW: "FF6600",     // ← アクセント
    LIGHT_GRAY: "F5F5F5",
    TEXT_DARK: "1A1A1A",
    TEXT_MEDIUM: "555555",
    TEXT_LIGHT: "999999",
    WHITE: "FFFFFF",
    HIGHLIGHT_YELLOW: "FF6600"
  },
  chartColors: ["003366", "FF6600", /* ... */],
  font: "Calibri",              // ← システムフォント名
};
```

---

*最終更新: 2026-03-08 | Sincerely Slide Skill V2 対応*
