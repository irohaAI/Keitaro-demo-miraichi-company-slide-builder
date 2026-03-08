/**
 * デザインテンプレート定義 — 18テーマ
 *
 * 日本のビジネス感覚に合わせた配色設計
 *   A. Natural    — 自然色（リネン・ベージュ・モスグリーン）     5種
 *   B. Navy       — ビジネスライク（紺・スレート・インディゴ）   5種
 *   C. Warm       — 温かみのあるアクセント（テラコッタ・セージ） 4種
 *   D. Energetic  — おとなしめ元気系（アンバー・マスタード・桜） 4種
 *
 * 各テンプレートの構造:
 *   id        : "A1" 〜 "D4"  ユニークID
 *   name      : テンプレート名（英語）
 *   nameJa    : テンプレート名（日本語）
 *   category  : "natural" | "navy" | "warm" | "energetic"
 *   style     : "mckinsey" | "bcg" | "bold" | "feminine" | "editorial" | "waves"
 *   useCase   : 推奨用途の配列
 *   colors    : カラーパレット（primary / accent / white / bg / pale / mid / light / text / dark）
 *   font      : 推奨フォント
 *   waveColors: (wavesスタイルのみ) 波の色配列 [wave1, wave2, wave3, lineColor]
 *   coverBg   : (wavesスタイルのみ) 表紙背景色
 *
 * ============================================================
 * スタイル別レイアウト説明
 * ============================================================
 *   mckinsey  : 左縦帯(30%) + 白ベース。経営・コンサル向け。
 *   bcg       : 上部バー + 左右2カラム。戦略・IR向け。
 *   bold      : 全面ダーク + 超大文字 + 右縦帯アクセント。ピッチ向け。
 *   feminine  : パステル大円形装飾 + 余白。コーチング・ブランド向け。
 *   editorial : 雑誌風非対称2分割。クリエイティブ・ブランド向け。
 *   waves     : 白背景 + 下1/3に波ライン。幅広いビジネス全般。
 * ============================================================
 */

"use strict";

var TEMPLATES = [

  // ════════════════════════════════════════
  // A. Natural — 自然色ベース
  // ════════════════════════════════════════

  {
    id: "A1",
    name: "Linen & Sage",
    nameJa: "リネン & セージ",
    category: "natural",
    style: "mckinsey",
    useCase: ["経営戦略", "ESG報告", "サステナビリティ", "社内向け資料"],
    description: "モスグリーン×クリームのナチュラルトーン。環境・サステナ系や落ち着いた印象を与えたい資料に。",
    colors: {
      primary: "3D5A47",   // モスグリーン（左縦帯・見出し）
      accent:  "8FAE8B",   // セージグリーン（アクセントライン）
      white:   "FDFAF5",   // クリームホワイト（メイン背景）
      bg:      "F2EDE4",   // ベージュ（カード・フッター背景）
      pale:    "E8F0E5",   // ペールグリーン（装飾円）
      mid:     "7A9E7E",   // ミッドグリーン（サブテキスト）
      light:   "B5C9B5",   // ライトグリーン（注釈・キャプション）
      text:    "2D3A30",   // ダークグリーン（本文）
      dark:    "1E2D22",   // ディープグリーン（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "A2",
    name: "Stone & Mist",
    nameJa: "ストーン & ミスト",
    category: "natural",
    style: "bcg",
    useCase: ["戦略発表", "市場分析", "汎用ビジネス", "官公庁・自治体"],
    description: "スレートグレー×オフホワイトのニュートラルトーン。業種を選ばず使える洗練された中立デザイン。",
    colors: {
      primary: "4A5568",   // スレートグレー（ヘッダー・見出し）
      accent:  "A0AEC0",   // ライトスレート（アクセントライン）
      white:   "F8F8F6",   // オフホワイト（メイン背景）
      bg:      "EEEEE9",   // ライトグレージュ（カード・フッター）
      pale:    "E2E4E0",   // ペールグレー（装飾）
      mid:     "718096",   // ミッドグレー（サブテキスト）
      light:   "A0AEC0",   // ライトグレー（注釈）
      text:    "2D3748",   // チャコール（本文）
      dark:    "2D3748",   // チャコール（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "A3",
    name: "Warm Pebble",
    nameJa: "ウォームペブル",
    category: "natural",
    style: "editorial",
    useCase: ["ブランド戦略", "クリエイティブ系", "コーポレートブランド", "商品発表"],
    description: "ウォームブラウン×クリームのアースカラー。温かみがありながらも洗練された印象。",
    colors: {
      primary: "5C5240",   // ウォームブラウン（左帯・見出し）
      accent:  "C9A87C",   // サンドゴールド（アクセント）
      white:   "FAF7F2",   // クリームホワイト（背景）
      bg:      "F0EBE1",   // ライトクリーム（カード）
      pale:    "EDE4D8",   // ペールクリーム（装飾）
      mid:     "8B7355",   // タン（サブテキスト）
      light:   "BBA890",   // ライトタン（注釈）
      text:    "3D3020",   // ダークブラウン（本文）
      dark:    "2E2515",   // エスプレッソ（フッター）
    },
    font: "Noto Serif JP",
  },

  {
    id: "A4",
    name: "Moss & Cream",
    nameJa: "モス & クリーム",
    category: "natural",
    style: "waves",
    useCase: ["事業計画", "PR資料", "SDGs関連", "地域創生"],
    description: "モスグリーン系の波ラインが柔らかさを演出。白ベースで文字が読みやすく幅広いシーンで活用可能。",
    colors: {
      primary: "4A6741",   // モスグリーン（ヘッダー・見出し）
      accent:  "7A9E6E",   // セージアクセント（ライン・バッジ）
      white:   "FAFAF5",   // クリームホワイト（メイン背景）
      bg:      "F0F5EC",   // ペールグリーンホワイト（区切り線）
      pale:    "E0EBD8",   // ライトセージ（装飾）
      mid:     "6B8F60",   // ミッドグリーン（サブテキスト）
      light:   "9DB890",   // ライトグリーン（注釈）
      text:    "2D3D28",   // ダークグリーン（本文）
      dark:    "2D3D28",   // ディープグリーン（フッター）
    },
    font: "Noto Sans JP",
    waveColors:      ["4A6741", "6B8F60", "9DB890", "FFFFFF"],
    darkWaveColors:  ["6B8F60", "9DB890", "C8E0C0", "FFFFFF"],
    coverBg:         "2D4030",
  },

  {
    id: "A5",
    name: "Birch & Ash",
    nameJa: "バーチ & アッシュ",
    category: "natural",
    style: "feminine",
    useCase: ["ウェルネス", "HR・人材", "コーチング", "ライフスタイルブランド"],
    description: "グレージュ×アッシュのニュートラルトーン。性別・業種を問わず品よく使えるソフトビジネスデザイン。",
    colors: {
      primary: "5C5C52",   // ウォームグレー（見出し）
      accent:  "A89F8C",   // アッシュブラウン（アクセント）
      white:   "FAFAF8",   // ウォームホワイト（背景）
      bg:      "F2F0EB",   // ライトグレージュ（カード）
      pale:    "E8E5DE",   // ペールグレージュ（装飾円）
      mid:     "888070",   // ミッドグレー（サブテキスト）
      light:   "B8B0A0",   // ライトグレー（注釈）
      text:    "3A3830",   // チャコールブラウン（本文）
      dark:    "2A2820",   // ダークブラウン（フッター）
    },
    font: "Noto Sans JP",
  },

  // ════════════════════════════════════════
  // B. Navy — ビジネスライク（紺系）
  // ════════════════════════════════════════

  {
    id: "B1",
    name: "Deep Navy",
    nameJa: "ディープネイビー",
    category: "navy",
    style: "mckinsey",
    useCase: ["経営報告", "IR資料", "コンサルティング", "金融・銀行"],
    description: "クラシックなネイビー×スカイブルー。信頼感・安定感を最優先にしたスタンダードビジネステンプレート。",
    colors: {
      primary: "1A2E4A",   // ディープネイビー（左縦帯）
      accent:  "3D7EBF",   // ロイヤルブルー（アクセント）
      white:   "F8FAFD",   // クールホワイト（背景）
      bg:      "EDF2F7",   // ライトブルーグレー（カード）
      pale:    "D6E4F0",   // ペールブルー（装飾）
      mid:     "4A6F8A",   // スチールブルー（サブテキスト）
      light:   "8AAFC8",   // ライトスチール（注釈）
      text:    "1A2E4A",   // ネイビー（本文）
      dark:    "0F1E30",   // ミッドナイト（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "B2",
    name: "Indigo Slate",
    nameJa: "インディゴ スレート",
    category: "navy",
    style: "bcg",
    useCase: ["戦略コンサル", "テクノロジー", "DX推進", "システム提案"],
    description: "インディゴ×パープルスレートの知的なトーン。ITコンサルや戦略提案に最適。",
    colors: {
      primary: "2D3A6B",   // インディゴ（ヘッダー）
      accent:  "5B72B3",   // コーンフラワーブルー（アクセント）
      white:   "F8F8FF",   // ラベンダーホワイト（背景）
      bg:      "EEEEF8",   // ライトラベンダー（カード）
      pale:    "D8DCEF",   // ペールスレート（装飾）
      mid:     "5B72B3",   // ミッドインディゴ（サブテキスト）
      light:   "8E9CC8",   // ライトスレート（注釈）
      text:    "1E2845",   // ダークインディゴ（本文）
      dark:    "1E2845",   // ダークインディゴ（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "B3",
    name: "Navy & Silver",
    nameJa: "ネイビー & シルバー",
    category: "navy",
    style: "editorial",
    useCase: ["年次報告書", "コーポレートブランド", "製品カタログ", "プレミアム商品"],
    description: "ネイビー×シルバーグレーの格調高いエディトリアルデザイン。報告書や高級感を演出したい資料に。",
    colors: {
      primary: "1B3152",   // ネイビー（左帯・見出し）
      accent:  "6B8CAE",   // スチールブルーシルバー（アクセント）
      white:   "F5F8FC",   // クールホワイト（背景）
      bg:      "E8EEF5",   // ライトブルーグレー（カード）
      pale:    "D8E4EE",   // ペールシルバーブルー（装飾）
      mid:     "5A7A98",   // ミッドスチール（サブテキスト）
      light:   "94B0C8",   // ライトシルバー（注釈）
      text:    "1B3152",   // ネイビー（本文）
      dark:    "0E1E33",   // ミッドナイトネイビー（フッター）
    },
    font: "Noto Serif JP",
  },

  {
    id: "B4",
    name: "Steel Horizon",
    nameJa: "スチール ホライゾン",
    category: "navy",
    style: "waves",
    useCase: ["製造業", "インフラ", "建設・土木", "エンジニアリング"],
    description: "スチールブルー系の波ライン。ネイビーの信頼感と波の柔らかさを組み合わせた汎用性の高いデザイン。",
    colors: {
      primary: "2C4A6E",   // スチールネイビー（ヘッダー）
      accent:  "4A90B8",   // スカイスチール（アクセント）
      white:   "F5F8FC",   // クールホワイト（背景）
      bg:      "E8EEF5",   // ライトスチール（区切り線）
      pale:    "D0DDE8",   // ペールスチール（装飾）
      mid:     "4A7090",   // ミッドスチール（サブテキスト）
      light:   "80A8C8",   // ライトスチール（注釈）
      text:    "1A2E44",   // ダークスチール（本文）
      dark:    "1A2E44",   // ダークスチール（フッター）
    },
    font: "Noto Sans JP",
    waveColors:      ["2C4A6E", "4A90B8", "80A8C8", "FFFFFF"],
    darkWaveColors:  ["4A90B8", "80A8C8", "B8D8F0", "FFFFFF"],
    coverBg:         "1E3A58",
  },

  {
    id: "B5",
    name: "Midnight Blue",
    nameJa: "ミッドナイトブルー",
    category: "navy",
    style: "bold",
    useCase: ["ピッチデック", "事業発表", "スタートアップ", "新規事業提案"],
    description: "ミッドナイトブルー×アクセントブルーのBoldデザイン。大型スクリーンでのインパクトに特化。",
    colors: {
      primary: "0F1F38",   // ミッドナイト（全面背景）
      accent:  "2E5F9E",   // ロイヤルブルー（縦帯・KPI）
      white:   "F0F4FA",   // クールホワイト（テキスト）
      bg:      "E0EAF5",   // ライトブルー（補足）
      pale:    "C8D8F0",   // ペールブルー（装飾）
      mid:     "4A7AB8",   // ミッドブルー（サブ）
      light:   "7AAAD8",   // ライトブルー（注釈）
      text:    "F0F4FA",   // ホワイト（本文）
      dark:    "080F1E",   // ほぼ黒（KPIカード背景）
    },
    font: "Noto Sans JP",
  },

  // ════════════════════════════════════════
  // C. Warm — 温かみのあるアクセント
  // ════════════════════════════════════════

  {
    id: "C1",
    name: "Terracotta & Linen",
    nameJa: "テラコッタ & リネン",
    category: "warm",
    style: "feminine",
    useCase: ["ブランドコンサル", "女性向けサービス", "コーチング", "ウェルネス"],
    description: "テラコッタ×リネンの温かく上品なデザイン。女性事業主やブランドコンサルに最適。",
    colors: {
      primary: "6B3A2A",   // テラコッタブラウン（見出し）
      accent:  "C4826A",   // テラコッタ（アクセント）
      white:   "FDF8F4",   // リネンホワイト（背景）
      bg:      "F5EDE5",   // ライトテラコッタ（カード）
      pale:    "F0DDD2",   // ペールテラコッタ（装飾円）
      mid:     "9B6050",   // ミッドテラコッタ（サブテキスト）
      light:   "C4988A",   // ライトテラコッタ（注釈）
      text:    "3D2018",   // ダークブラウン（本文）
      dark:    "3D2018",   // ダークブラウン（フッター）
    },
    font: "Noto Serif JP",
  },

  {
    id: "C2",
    name: "Sage & Sienna",
    nameJa: "セージ & シエナ",
    category: "warm",
    style: "mckinsey",
    useCase: ["農業・食品", "ライフスタイル", "福祉・介護", "地方創生"],
    description: "モスグリーン×シエナブラウンのアースカラー。温かみと誠実さを演出したい資料に。",
    colors: {
      primary: "4A5E4A",   // モスオリーブ（左縦帯）
      accent:  "B07050",   // シエナ（アクセント）
      white:   "FAFAF5",   // クリームホワイト（背景）
      bg:      "F0EDE5",   // クリームベージュ（カード）
      pale:    "E5DDD5",   // ペールクリーム（装飾）
      mid:     "708870",   // ミッドオリーブ（サブテキスト）
      light:   "A0A888",   // ライトオリーブ（注釈）
      text:    "2A3A2A",   // ダークオリーブ（本文）
      dark:    "1E2E1E",   // ディープオリーブ（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "C3",
    name: "Dusty Rose & Grey",
    nameJa: "ダスティローズ & グレー",
    category: "warm",
    style: "waves",
    useCase: ["ファッション", "美容・コスメ", "ウェディング関連", "ライフスタイル"],
    description: "ダスティローズ系の波ラインで柔らかく上品な印象。ファッション・美容系のビジネス資料に。",
    colors: {
      primary: "5A4050",   // ダスティプラム（ヘッダー）
      accent:  "B8849A",   // ダスティローズ（アクセント）
      white:   "FAF5F8",   // ローズホワイト（背景）
      bg:      "F2EBF0",   // ライトローズグレー（区切り線）
      pale:    "EAD8E4",   // ペールローズ（装飾）
      mid:     "8A6878",   // ミッドローズグレー（サブテキスト）
      light:   "B898A8",   // ライトローズ（注釈）
      text:    "3A2030",   // ダークプラム（本文）
      dark:    "3A2030",   // ダークプラム（フッター）
    },
    font: "Noto Sans JP",
    waveColors:      ["5A4050", "8A6878", "B898A8", "FFFFFF"],
    darkWaveColors:  ["8A6878", "B898A8", "D8C0CC", "FFFFFF"],
    coverBg:         "3D2838",
  },

  {
    id: "C4",
    name: "Warm Slate",
    nameJa: "ウォームスレート",
    category: "warm",
    style: "editorial",
    useCase: ["建築・インテリア", "不動産", "ラグジュアリー商品", "ものづくり"],
    description: "ウォームグレー×カフェブラウンのエディトリアルデザイン。落ち着いた高級感を演出。",
    colors: {
      primary: "4A4035",   // ウォームチャコール（左帯）
      accent:  "A08060",   // カフェブラウン（アクセント）
      white:   "FAF7F3",   // ウォームホワイト（背景）
      bg:      "F0EAE0",   // ライトクリーム（カード）
      pale:    "E5DDD0",   // ペールクリーム（装飾）
      mid:     "806858",   // ミッドブラウン（サブテキスト）
      light:   "B0988A",   // ライトブラウン（注釈）
      text:    "2A2018",   // ダークブラウン（本文）
      dark:    "1E1510",   // エスプレッソ（フッター）
    },
    font: "Noto Serif JP",
  },

  // ════════════════════════════════════════
  // D. Energetic — おとなしめ元気系
  // ════════════════════════════════════════

  {
    id: "D1",
    name: "Amber & Navy",
    nameJa: "アンバー & ネイビー",
    category: "energetic",
    style: "bcg",
    useCase: ["営業資料", "新規開拓提案", "製品ローンチ", "事業計画"],
    description: "ネイビー×アンバーゴールドのコントラスト配色。信頼感を保ちつつ前向きなエネルギーを表現。",
    colors: {
      primary: "1E3A5F",   // ダークネイビー（ヘッダー）
      accent:  "D4820A",   // アンバー（アクセント）
      white:   "FDFAF5",   // ウォームホワイト（背景）
      bg:      "FDF4E3",   // ライトアンバー（カード）
      pale:    "FBE8BC",   // ペールアンバー（装飾）
      mid:     "2E5A8F",   // ミッドネイビー（サブテキスト）
      light:   "6A8AB8",   // ライトネイビー（注釈）
      text:    "1E3A5F",   // ネイビー（本文）
      dark:    "0F1E30",   // ミッドナイト（フッター）
    },
    font: "Noto Sans JP",
  },

  {
    id: "D2",
    name: "Mustard & Stone",
    nameJa: "マスタード & ストーン",
    category: "energetic",
    style: "bold",
    useCase: ["スタートアップ", "クリエイティブ産業", "ピッチ", "プロダクト発表"],
    description: "ダークストーン×マスタードイエローの渋めBold。派手すぎずエネルギッシュな印象を与える。",
    colors: {
      primary: "2A2A1E",   // ダークオリーブブラック（全面）
      accent:  "C8A020",   // マスタード（縦帯・KPI）
      white:   "FDFAF0",   // ウォームホワイト（テキスト）
      bg:      "F5F0DC",   // ライトマスタード（補足）
      pale:    "EDE5BC",   // ペールマスタード（装飾）
      mid:     "5A5430",   // ミッドオリーブ（サブ）
      light:   "907860",   // ライトブラウン（注釈）
      text:    "FDFAF0",   // ウォームホワイト（本文）
      dark:    "15150A",   // ほぼ黒（KPIカード）
    },
    font: "Noto Sans JP",
  },

  {
    id: "D3",
    name: "Sakura & Charcoal",
    nameJa: "サクラ & チャコール",
    category: "energetic",
    style: "feminine",
    useCase: ["観光・インバウンド", "日本文化発信", "ブライダル", "ギフト・EC"],
    description: "チャコール×桜ピンクの和モダンデザイン。日本らしさを品よく表現したい資料に。",
    colors: {
      primary: "4A3845",   // チャコールプラム（見出し）
      accent:  "C87890",   // 桜ピンク（アクセント）
      white:   "FDF7F9",   // 桜ホワイト（背景）
      bg:      "F5EBF0",   // ライトピンク（カード）
      pale:    "F0D8E2",   // ペール桜（装飾円）
      mid:     "7A5870",   // ミッドプラム（サブテキスト）
      light:   "B898A8",   // ライトモーブ（注釈）
      text:    "2A1822",   // ダークプラム（本文）
      dark:    "2A1822",   // ダークプラム（フッター）
    },
    font: "Noto Serif JP",
  },

  {
    id: "D4",
    name: "Teal & Sand",
    nameJa: "ティール & サンド",
    category: "energetic",
    style: "waves",
    useCase: ["医療・ヘルスケア", "教育・研修", "環境・自然", "観光・リゾート"],
    description: "ティールグリーン系の波ライン。清潔感と自然の爽やかさを表現。ヘルスケアや教育機関に。",
    colors: {
      primary: "2A5A5A",   // ディープティール（ヘッダー）
      accent:  "5A9E9E",   // ティール（アクセント）
      white:   "F5FAFA",   // ティールホワイト（背景）
      bg:      "E8F2F2",   // ライトティール（区切り線）
      pale:    "D0E8E8",   // ペールティール（装飾）
      mid:     "3A7878",   // ミッドティール（サブテキスト）
      light:   "78AEAE",   // ライトティール（注釈）
      text:    "1A3838",   // ダークティール（本文）
      dark:    "1A3838",   // ダークティール（フッター）
    },
    font: "Noto Sans JP",
    waveColors:      ["2A5A5A", "3A7878", "78AEAE", "FFFFFF"],
    darkWaveColors:  ["3A7878", "78AEAE", "A8D0D0", "FFFFFF"],
    coverBg:         "1A4040",
  },

];

module.exports = TEMPLATES;
