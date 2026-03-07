/**
 * Sage Wellness プリセット
 *
 * ターゲット用途: 医療・ヘルスケア、HR・人材、教育機関のプレゼン
 *
 * カラー設計根拠:
 *   - Sage Green (#5F8575): 癒しと安心感を与えるセージグリーン（主色）
 *   - Eucalyptus (#69A297): 清潔感と自然さのユーカリグリーン
 *   - Warm White (#FAFAF7): 清潔で明るいコンテンツ背景
 *   - Slate Blue (#50808E): 落ち着きと信頼感のスレートブルー
 *   - Mist (#D4E6DF): ペールグリーン（カード背景）
 *   - Terracotta (#C68B6E): 温もりのアクセントカラー
 *
 * デザインコンセプト:
 *   自然由来のグリーン系パレット。医療・福祉・人材系で
 *   「安心感」と「誠実さ」を演出するやさしいテーマ。
 */

module.exports = {
  name: "Sage Wellness",
  slug: "sage_wellness",
  description: "医療・HR・教育向け。セージグリーン×テラコッタの安心感ある自然系テーマ。",
  useCase: ["医療・ヘルスケア", "HR・人材資料", "教育機関", "ウェルネスブランド"],
  colors: {
    DARK_GREEN: "5F8575",      // Sage Green（表紙・セクション背景）
    CREAM_YELLOW: "C68B6E",    // Terracotta（アクセント・バッジ）
    LIGHT_GRAY: "F0F5F2",      // Mist Light（コンテンツ背景）
    TEXT_DARK: "2D3E38",       // ダークセージ（本文テキスト）
    TEXT_MEDIUM: "50808E",     // Slate Blue（補助テキスト）
    TEXT_LIGHT: "8AAF9F",      // ライトセージ（注釈）
    WHITE: "FAFAF7",           // Warm White（ダーク面テキスト）
    HIGHLIGHT_YELLOW: "D4E6DF" // Mist（強調背景）
  },
  chartColors: [
    "5F8575",  // セージグリーン
    "69A297",  // ユーカリ
    "C68B6E",  // テラコッタ
    "50808E",  // スレートブルー
    "8ABFB0",  // ライトユーカリ
    "E8A98A",  // ライトテラコッタ
    "D4E6DF",  // ミスト
    "A0C4B8",  // ペールセージ
  ],
  font: "Calibri",
};
