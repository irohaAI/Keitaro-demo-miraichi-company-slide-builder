/**
 * Solar Orange プリセット
 *
 * ターゲット用途: 営業提案、セールスデッキ、製品ローンチ、広告代理店
 *
 * カラー設計根拠:
 *   - Sunset Orange (#E65100): エネルギー・行動・情熱のサンセットオレンジ（主色）
 *   - Deep Charcoal (#1C1C1E): オレンジとの強コントラストで締まりを出す
 *   - Amber (#FFA000): 温かみのあるアンバー（セカンドアクセント）
 *   - Cream White (#FFF8F0): オレンジ系の温かいコンテンツ背景
 *   - Warm Gray (#757575): 補助テキスト
 *   - Pale Amber (#FFECB3): ライトカード背景
 *
 * デザインコンセプト:
 *   オレンジ×ダークの強コントラストで「行動を促す」プレゼン。
 *   セールス・マーケティング系で圧倒的な存在感を発揮。
 */

module.exports = {
  name: "Solar Orange",
  slug: "solar_orange",
  description: "営業・マーケ向け。サンセットオレンジ×ダークチャコールの躍動感あるテーマ。",
  useCase: ["営業提案", "セールスデッキ", "製品ローンチ", "広告・マーケティング"],
  colors: {
    DARK_GREEN: "1C1C1E",      // Deep Charcoal（表紙・セクション背景）
    CREAM_YELLOW: "E65100",    // Sunset Orange（アクセント・バッジ）
    LIGHT_GRAY: "FFF8F0",      // Cream White（コンテンツ背景）
    TEXT_DARK: "1C1C1E",       // ダークチャコール（本文テキスト）
    TEXT_MEDIUM: "757575",     // Warm Gray（補助テキスト）
    TEXT_LIGHT: "BDBDBD",      // ライトグレー（注釈）
    WHITE: "FFFFFF",           // 白
    HIGHLIGHT_YELLOW: "FFA000" // Amber（強調）
  },
  chartColors: [
    "E65100",  // サンセットオレンジ
    "1C1C1E",  // ダークチャコール
    "FFA000",  // アンバー
    "FF6D00",  // ブライトオレンジ
    "757575",  // ウォームグレー
    "FFAB40",  // ライトアンバー
    "FF8A65",  // ライトオレンジ
    "FFCCBC",  // ペールオレンジ
  ],
  font: "Calibri",
};
