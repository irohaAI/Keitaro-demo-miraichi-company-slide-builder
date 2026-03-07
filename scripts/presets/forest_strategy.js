/**
 * Forest Strategy プリセット
 *
 * ターゲット用途: 戦略提案、コンサルティングレポート、事業計画
 *
 * カラー設計根拠:
 *   - Forest Green (#2C5F2D): 成長・安定・信頼を象徴するフォレストグリーン
 *   - Moss Green (#97BC62): フレッシュ感とアクセントを加えるモスグリーン
 *   - Sand (#F5F0E8): 温かみのある中立的なコンテンツ背景
 *   - Charcoal (#2B2B2B): テキスト・見出し
 *   - Sage (#7A9E7E): 補助グラフィック要素
 *   - Cream (#FAFAF5): 明るいコンテンツエリア
 *
 * デザインコンセプト:
 *   自然・持続可能性・成長を連想させる緑系パレット。
 *   ESG・サステナビリティ・戦略コンサル向け。
 */

module.exports = {
  name: "Forest Strategy",
  slug: "forest_strategy",
  description: "戦略・コンサル向け。フォレストグリーン×サンドの落ち着いた自然系テーマ。ESG資料にも。",
  useCase: ["戦略提案", "ESGレポート", "事業計画", "コンサルレポート"],
  colors: {
    DARK_GREEN: "2C5F2D",      // Forest Green（表紙・セクション背景）
    CREAM_YELLOW: "97BC62",    // Moss Green（アクセント・バッジ）
    LIGHT_GRAY: "F5F0E8",      // Sand（コンテンツ背景）
    TEXT_DARK: "2B2B2B",       // チャコール（本文）
    TEXT_MEDIUM: "4A6741",     // ダークモス（補助テキスト）
    TEXT_LIGHT: "8AAB7E",      // セージ（注釈）
    WHITE: "FAFAF5",           // クリーム（ダーク面のテキスト）
    HIGHLIGHT_YELLOW: "E8F5C8" // ペールグリーン（強調背景）
  },
  chartColors: [
    "2C5F2D",  // フォレストグリーン
    "97BC62",  // モスグリーン
    "7A9E7E",  // セージ
    "C5D9A0",  // ライトモス
    "4A6741",  // ダークモス
    "F5F0E8",  // サンド
    "D4C5A9",  // ダークサンド
    "2B2B2B",  // チャコール
  ],
  font: "Calibri",
};
