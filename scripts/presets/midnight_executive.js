/**
 * Midnight Executive プリセット
 *
 * ターゲット用途: 経営層向けプレゼン、投資家向け資料、年次報告
 *
 * カラー設計根拠:
 *   - Primary Navy (#1E2761): 重厚感・信頼性を演出するダークネイビー
 *   - Ice Blue (#CADCFC): クリアで知的な印象のアイスブルー（アクセント・カード）
 *   - Slate Gray (#3D4A6B): セクション・サブ背景
 *   - Off White (#F8F9FF): コンテンツ背景、テキスト（ダーク面）
 *   - Gold Accent (#C9A84C): KPI・ハイライト・重要数値
 *   - Light Gray (#F0F2F5): ライトコンテンツ背景
 *
 * デザインコンセプト:
 *   ダークネイビーを基調とし、アイスブルーと控えめなゴールドで
 *   高級感と知性を表現。金融・コンサル・エグゼクティブ向け。
 */

module.exports = {
  name: "Midnight Executive",
  slug: "midnight_executive",
  description: "経営層・投資家向け。ダークネイビー×アイスブルー×ゴールドの高級感あるダークテーマ。",
  useCase: ["経営報告", "投資家向けIR", "コンサルティング", "年次報告書"],
  colors: {
    DARK_GREEN: "1E2761",      // Primary Navy（表紙・セクション背景）
    CREAM_YELLOW: "C9A84C",    // Gold Accent（KPI・ハイライト）
    LIGHT_GRAY: "F0F2F5",      // ライトコンテンツ背景
    TEXT_DARK: "1A1C2E",       // 本文テキスト（ほぼ黒）
    TEXT_MEDIUM: "3D4A6B",     // 補助テキスト（スレートグレー）
    TEXT_LIGHT: "8A97C8",      // 注釈・キャプション
    WHITE: "F8F9FF",           // オフホワイト（ダーク面のテキスト）
    HIGHLIGHT_YELLOW: "CADCFC" // アイスブルー（強調・バッジ）
  },
  chartColors: [
    "1E2761",  // ネイビー
    "CADCFC",  // アイスブルー
    "C9A84C",  // ゴールド
    "3D4A6B",  // スレートグレー
    "8A97C8",  // ライトスレート
    "E8EEF9",  // ペールブルー
    "A08030",  // ダークゴールド
    "F0F2F5",  // ライトグレー
  ],
  font: "Calibri",
};
