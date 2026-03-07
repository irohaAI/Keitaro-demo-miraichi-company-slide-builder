/**
 * Coral Energy プリセット
 *
 * ターゲット用途: スタートアップ資料、ピッチデッキ、マーケティング提案
 *
 * カラー設計根拠:
 *   - Coral (#F96167): エネルギー・革新・情熱を表すコーラルレッド
 *   - Deep Navy (#2F3C7E): コーラルとのコントラストで信頼性を補完
 *   - Warm Yellow (#F9E795): アクセント・KPI数値・ハイライト
 *   - Light Blush (#FEF0F0): コンテンツエリアの温かい背景
 *   - Cool Gray (#6B7A99): 補助テキスト
 *   - White (#FFFFFF): クリーンなコンテンツ背景
 *
 * デザインコンセプト:
 *   コーラル×ネイビー×イエローの三色対比。スタートアップや
 *   マーケティングプレゼンで「熱量」と「説得力」を両立。
 */

module.exports = {
  name: "Coral Energy",
  slug: "coral_energy",
  description: "スタートアップ・ピッチデッキ向け。コーラル×ネイビー×イエローのダイナミックな配色。",
  useCase: ["ピッチデッキ", "スタートアップ資料", "マーケティング提案", "新規事業プレゼン"],
  colors: {
    DARK_GREEN: "2F3C7E",      // Deep Navy（表紙・セクション背景）
    CREAM_YELLOW: "F9E795",    // Warm Yellow（アクセント・バッジ）
    LIGHT_GRAY: "FEF0F0",      // Light Blush（コンテンツ背景）
    TEXT_DARK: "1A1F3A",       // ダークネイビー（本文）
    TEXT_MEDIUM: "6B7A99",     // Cool Gray（補助テキスト）
    TEXT_LIGHT: "9BA8C4",      // ライトグレー（注釈）
    WHITE: "FFFFFF",           // 白
    HIGHLIGHT_YELLOW: "F96167" // Coral（強調・ハイライト）
  },
  chartColors: [
    "F96167",  // コーラル
    "2F3C7E",  // ディープネイビー
    "F9E795",  // ウォームイエロー
    "6B7A99",  // クールグレー
    "FF9EA2",  // ライトコーラル
    "8B9BE0",  // ライトネイビー
    "FBF0B5",  // ペールイエロー
    "CCCCCC",  // ライトグレー
  ],
  font: "Calibri",
};
