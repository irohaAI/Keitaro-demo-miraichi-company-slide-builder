/**
 * Charcoal Minimal プリセット
 *
 * ターゲット用途: 汎用ビジネス資料、社内レポート、製品説明書
 *
 * カラー設計根拠:
 *   - Charcoal (#36454F): 黒より柔らかく、グレーより力強いチャコール（主色）
 *   - Off White (#F8F8F8): 目に優しいオフホワイト（背景）
 *   - Slate (#607D8B): 中間調のスレートグレー（補助要素）
 *   - Accent Orange (#E85D04): 控えめなオレンジアクセント（KPI・CTA）
 *   - Light Slate (#ECEFF1): カード背景の薄いスレート
 *   - Near Black (#212121): テキスト用の濃いチャコール
 *
 * デザインコンセプト:
 *   チャコール主体の洗練されたミニマルデザイン。
 *   どんな業種にも対応できる汎用性の高いプロフェッショナルテーマ。
 */

module.exports = {
  name: "Charcoal Minimal",
  slug: "charcoal_minimal",
  description: "汎用ビジネス向け。チャコール×オフホワイトのクリーンなミニマルテーマ。",
  useCase: ["社内報告", "製品説明", "業務資料", "汎用ビジネスプレゼン"],
  colors: {
    DARK_GREEN: "36454F",      // Charcoal（表紙・セクション背景）
    CREAM_YELLOW: "E85D04",    // Accent Orange（アクセント・バッジ）
    LIGHT_GRAY: "ECEFF1",      // Light Slate（コンテンツ背景）
    TEXT_DARK: "212121",       // Near Black（本文テキスト）
    TEXT_MEDIUM: "607D8B",     // Slate（補助テキスト）
    TEXT_LIGHT: "90A4AE",      // Light Slate Text（注釈）
    WHITE: "F8F8F8",           // Off White（ダーク面テキスト）
    HIGHLIGHT_YELLOW: "546E7A" // Medium Slate（強調）
  },
  chartColors: [
    "36454F",  // チャコール
    "E85D04",  // オレンジアクセント
    "607D8B",  // スレート
    "90A4AE",  // ライトスレート
    "F95D06",  // ブライトオレンジ
    "B0BEC5",  // ペールスレート
    "ECEFF1",  // ライトグレー
    "212121",  // ニアブラック
  ],
  font: "Calibri",
};
