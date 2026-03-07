/**
 * Ocean Teal プリセット
 *
 * ターゲット用途: IT・テクノロジー企業、デジタル変革提案、SaaS製品説明
 *
 * カラー設計根拠:
 *   - Deep Teal (#065A82): 深みのあるティールブルー（信頼・革新）
 *   - Seafoam (#02C39A): フレッシュなシーフォームグリーン（成長・テクノロジー）
 *   - Ice White (#F0FAFA): ティールを引き立てる清潔感のある背景
 *   - Midnight (#21295C): 深夜の青（高級感・深み）
 *   - Aqua Accent (#00B4D8): 明るいアクアブルー（アクセント）
 *   - Pale Teal (#CAF0F8): 淡いティール（カード背景）
 *
 * デザインコンセプト:
 *   テクノロジー分野で信頼される青系のモダンなパレット。
 *   SaaS・AI・DX関連プレゼンに最適。
 */

module.exports = {
  name: "Ocean Teal",
  slug: "ocean_teal",
  description: "IT・テクノロジー向け。ディープティール×シーフォームの革新的かつ信頼感あるテーマ。",
  useCase: ["IT企業提案", "DX戦略", "SaaSプレゼン", "テクノロジーレポート"],
  colors: {
    DARK_GREEN: "065A82",      // Deep Teal（表紙・セクション背景）
    CREAM_YELLOW: "02C39A",    // Seafoam（アクセント・バッジ）
    LIGHT_GRAY: "F0FAFA",      // Ice White（コンテンツ背景）
    TEXT_DARK: "21295C",       // Midnight（本文テキスト）
    TEXT_MEDIUM: "1C7293",     // Medium Teal（補助テキスト）
    TEXT_LIGHT: "7BBDD4",      // ライトティール（注釈）
    WHITE: "FFFFFF",           // 白
    HIGHLIGHT_YELLOW: "00B4D8" // Aqua Accent（強調）
  },
  chartColors: [
    "065A82",  // ディープティール
    "02C39A",  // シーフォーム
    "00B4D8",  // アクアアクセント
    "21295C",  // ミッドナイト
    "48CAE4",  // ライトアクア
    "90E0EF",  // ペールアクア
    "1C7293",  // ミディアムティール
    "CAF0F8",  // ペールティール
  ],
  font: "Calibri",
};
