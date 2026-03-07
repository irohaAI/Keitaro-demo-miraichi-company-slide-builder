/**
 * Royal Purple プリセット
 *
 * ターゲット用途: 高級ブランド、ラグジュアリー製品、VIPプレゼン、ブランド戦略
 *
 * カラー設計根拠:
 *   - Royal Purple (#4A0E8F): 高貴・知性・ラグジュアリーを象徴するロイヤルパープル
 *   - Violet (#7B2FBE): セカンドパープル（グラデーション効果）
 *   - Champagne (#F5E6C8): ゴールドシャンパン（高級感の背景）
 *   - Midnight Purple (#1A0533): 最も深いパープル（強調面）
 *   - Lavender (#D4B8F0): ラベンダー（カード背景・補助）
 *   - Warm Gold (#D4A017): ゴールドアクセント（数値・KPI）
 *
 * デザインコンセプト:
 *   パープル×ゴールドの最高級の組み合わせ。
 *   ラグジュアリーブランドや特別な場での発表に。
 */

module.exports = {
  name: "Royal Purple",
  slug: "royal_purple",
  description: "ラグジュアリー・ブランド向け。ロイヤルパープル×シャンパンゴールドの高貴なテーマ。",
  useCase: ["ラグジュアリーブランド", "高級製品プレゼン", "ブランド戦略", "VIPプレゼン"],
  colors: {
    DARK_GREEN: "4A0E8F",      // Royal Purple（表紙・セクション背景）
    CREAM_YELLOW: "D4A017",    // Warm Gold（アクセント・バッジ）
    LIGHT_GRAY: "F8F2FF",      // ペールラベンダー（コンテンツ背景）
    TEXT_DARK: "1A0533",       // Midnight Purple（本文テキスト）
    TEXT_MEDIUM: "7B2FBE",     // Violet（補助テキスト）
    TEXT_LIGHT: "B39DDB",      // ライトラベンダー（注釈）
    WHITE: "F5E6C8",           // Champagne（ダーク面テキスト）
    HIGHLIGHT_YELLOW: "D4B8F0" // Lavender（強調背景）
  },
  chartColors: [
    "4A0E8F",  // ロイヤルパープル
    "D4A017",  // ウォームゴールド
    "7B2FBE",  // バイオレット
    "1A0533",  // ミッドナイトパープル
    "B39DDB",  // ライトラベンダー
    "E8D5A3",  // ライトシャンパン
    "9C27B0",  // パープル
    "D4B8F0",  // ラベンダー
  ],
  font: "Georgia",
};
