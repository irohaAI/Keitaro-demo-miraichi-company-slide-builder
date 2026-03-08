# デザインテンプレート (templates/)

日本のビジネス感覚に合わせた **18種のデザインテンプレート** です。  
カラーだけでなく **レイアウト構造（スタイル）も異なる** 6種のデザインパターンに、  
日本向けの配色を掛け合わせています。

---

## ファイル構成

```
templates/
├── index.js          エントリーポイント（API）
├── definitions.js    18テンプレートの定義（色・スタイル・用途）
├── generate.js       PPTX生成スクリプト
└── README.md         このファイル
```

---

## 18テンプレート一覧

### A. Natural — 自然色ベース

| ID | 名前 | スタイル | 主な用途 |
|----|------|----------|----------|
| A1 | Linen & Sage | McKinsey | 経営戦略・ESG・サステナビリティ |
| A2 | Stone & Mist | BCG | 戦略発表・官公庁・汎用 |
| A3 | Warm Pebble | Editorial | ブランド戦略・商品発表 |
| A4 | Moss & Cream | Waves | 事業計画・SDGs・地域創生 |
| A5 | Birch & Ash | Feminine | ウェルネス・HR・コーチング |

### B. Navy — ビジネスライク（紺系）

| ID | 名前 | スタイル | 主な用途 |
|----|------|----------|----------|
| B1 | Deep Navy | McKinsey | 経営報告・IR・金融 |
| B2 | Indigo Slate | BCG | 戦略コンサル・DX・IT |
| B3 | Navy & Silver | Editorial | 年次報告書・プレミアム商品 |
| B4 | Steel Horizon | Waves | 製造業・インフラ・建設 |
| B5 | Midnight Blue | Bold | ピッチ・事業発表・スタートアップ |

### C. Warm — 温かみのあるアクセント

| ID | 名前 | スタイル | 主な用途 |
|----|------|----------|----------|
| C1 | Terracotta & Linen | Feminine | コーチング・女性向けサービス |
| C2 | Sage & Sienna | McKinsey | 農業・食品・地方創生 |
| C3 | Dusty Rose & Grey | Waves | ファッション・美容・ライフスタイル |
| C4 | Warm Slate | Editorial | 建築・不動産・ラグジュアリー |

### D. Energetic — おとなしめ元気系

| ID | 名前 | スタイル | 主な用途 |
|----|------|----------|----------|
| D1 | Amber & Navy | BCG | 営業資料・新規開拓・製品ローンチ |
| D2 | Mustard & Stone | Bold | スタートアップ・ピッチ |
| D3 | Sakura & Charcoal | Feminine | 観光・日本文化発信・ブライダル |
| D4 | Teal & Sand | Waves | 医療・教育・観光 |

---

## 6種のデザインスタイル

| スタイル | 特徴 | 向いている場面 |
|----------|------|----------------|
| **McKinsey** | 左縦帯(30%) + 白ベース | 経営・コンサル・重厚な印象 |
| **BCG** | 上部バー + 左右2カラム | 戦略提案・データ重視 |
| **Bold** | 全面ダーク + 超大文字 | ピッチ・大型スクリーン |
| **Feminine** | パステル大円形 + 余白 | コーチング・ブランド |
| **Editorial** | 雑誌風非対称2分割 | クリエイティブ・年次報告 |
| **Waves** | 白背景 + 下部波ライン | 幅広いビジネス全般 |

---

## 使い方

### API（index.js）

```js
var templates = require("./templates");

// IDで取得
var t = templates.get("A1");
console.log(t.name);        // "Linen & Sage"
console.log(t.colors);      // { primary: "3D5A47", accent: "8FAE8B", ... }

// キーワード検索
templates.find("navy");           // Navy系テンプレートを返す
templates.find("ESG");            // useCase/descriptionにマッチするものを返す

// カテゴリ・スタイル別
templates.listByCategory("natural");    // A1〜A5
templates.listByStyle("waves");         // A4, B4, C3, D4

// 推薦（キーワード × スタイル）
templates.recommend("医療", "waves");   // D4 Teal & Sand など
```

### PPTX生成

```bash
# 依存インストール
npm install pptxgenjs sharp

# 全18テンプレート生成
node presets/templates/generate.js

# IDを指定して1枚だけ
node presets/templates/generate.js --id A1

# カテゴリ指定
node presets/templates/generate.js --category navy

# スタイル指定 + 出力先指定
node presets/templates/generate.js --style waves --out ./my-waves.pptx
```

---

## フォントについて

各テンプレートは `Noto Sans JP` または `Noto Serif JP` を指定しています。

**PowerPointで最適に表示するために：**
- [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) をシステムにインストールしてください
- 未インストールの場合、PowerPoint は **Meiryo / Yu Gothic / ヒラギノ角ゴ** に自動フォールバックします

---

## presetsとの違い

| | presets/ | templates/ |
|--|----------|------------|
| 役割 | 色テーマの定義 | レイアウト + 色の組み合わせ |
| 管理単位 | カラーパレット10種 | デザインパターン18種 |
| 出力 | `colors{}` オブジェクト | PPTX スライド |
| 組み合わせ | templates に apply() で適用 | presetsの色をoverrideして活用可 |
