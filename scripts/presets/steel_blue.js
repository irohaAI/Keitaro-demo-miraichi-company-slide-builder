/**
 * Steel Blue プリセット
 *
 * ターゲット用途: 製造業、建設・インフラ、エンジニアリング、重工業
 *
 * カラー設計根拠:
 *   - Steel Blue (#2B4F6E): 鋼鉄・工業・堅牢さを象徴するスチールブルー（主色）
 *   - Industrial Gray (#546E7A): 機械的・中立的なインダストリアルグレー
 *   - Safety Yellow (#FDD835): 安全・注意・重要箇所のセーフティイエロー（アクセント）
 *   - Light Steel (#E8EEF3): 清潔で機能的なコンテンツ背景
 *   - Dark Iron (#1A2E3E): 最も深いスチール（強調面・ヘッダー）
 *   - Pale Steel (#B0C4D8): ライトブルーグレー（カード背景）
 *
 * デザインコンセプト:
 *   スチールブルー×セーフティイエローの工業系配色。
 *   製造・建設・インフラ分野でのデータ重視のプレゼンに最適。
 */

module.exports = {
  name: "Steel Blue",
  slug: "steel_blue",
  description: "製造・建設・エンジニアリング向け。スチールブルー×セーフティイエローの工業系テーマ。",
  useCase: ["製造業プレゼン", "建設・インフラ", "エンジニアリング報告", "工場・設備説明"],
  colors: {
    DARK_GREEN: "2B4F6E",      // Steel Blue（表紙・セクション背景）
    CREAM_YELLOW: "FDD835",    // Safety Yellow（アクセント・バッジ）
    LIGHT_GRAY: "E8EEF3",      // Light Steel（コンテンツ背景）
    TEXT_DARK: "1A2E3E",       // Dark Iron（本文テキスト）
    TEXT_MEDIUM: "546E7A",     // Industrial Gray（補助テキスト）
    TEXT_LIGHT: "90A4AE",      // ライトグレー（注釈）
    WHITE: "F5F8FA",           // ライトスチール（ダーク面テキスト）
    HIGHLIGHT_YELLOW: "F5A623" // Amber Alert（強調・KPI）
  },
  chartColors: [
    "2B4F6E",  // スチールブルー
    "FDD835",  // セーフティイエロー
    "546E7A",  // インダストリアルグレー
    "1A2E3E",  // ダークアイアン
    "4A90B8",  // ミディアムブルー
    "F5A623",  // アンバーアラート
    "B0C4D8",  // ペールスチール
    "90A4AE",  // ライトグレー
  ],
  font: "Calibri",
};
