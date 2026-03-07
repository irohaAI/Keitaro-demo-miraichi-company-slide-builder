/**
 * Berry Finance プリセット
 *
 * ターゲット用途: 金融機関、銀行、保険、資産運用のプレゼン
 *
 * カラー設計根拠:
 *   - Deep Berry (#6D2E46): 高級感と安定感のあるベリーパープル（主色）
 *   - Dusty Rose (#A26769): 柔らかさと洗練さを加えるダスティーローズ
 *   - Warm Cream (#ECE2D0): 温かみのあるクリームベージュ（背景）
 *   - Burgundy (#4A1528): より深いバーガンディ（セクション背景）
 *   - Blush (#F5EBE0): ライトコンテンツ背景
 *   - Gold (#B8860B): 数値ハイライト用のゴールド
 *
 * デザインコンセプト:
 *   ベリー×クリームの上品な組み合わせ。金融・保険分野で
 *   「信頼性」と「高級感」を同時に表現するテーマ。
 */

module.exports = {
  name: "Berry Finance",
  slug: "berry_finance",
  description: "金融・保険向け。ディープベリー×ウォームクリームの高級感ある伝統的テーマ。",
  useCase: ["金融機関プレゼン", "銀行・保険資料", "資産運用説明", "IR資料"],
  colors: {
    DARK_GREEN: "6D2E46",      // Deep Berry（表紙・セクション背景）
    CREAM_YELLOW: "B8860B",    // Gold（アクセント・バッジ）
    LIGHT_GRAY: "F5EBE0",      // Blush（コンテンツ背景）
    TEXT_DARK: "2D1020",       // ダークベリー（本文テキスト）
    TEXT_MEDIUM: "7A4F5A",     // ミディアムベリー（補助テキスト）
    TEXT_LIGHT: "A26769",      // Dusty Rose（注釈）
    WHITE: "ECE2D0",           // Warm Cream（ダーク面テキスト）
    HIGHLIGHT_YELLOW: "C4907A" // テラコッタ（強調）
  },
  chartColors: [
    "6D2E46",  // ディープベリー
    "A26769",  // ダスティーローズ
    "B8860B",  // ゴールド
    "4A1528",  // バーガンディ
    "D4A5A5",  // ライトローズ
    "E8C88A",  // ライトゴールド
    "ECE2D0",  // ウォームクリーム
    "7A4F5A",  // ミディアムベリー
  ],
  font: "Georgia",
};
