/**
 * 企業プリセット一覧
 *
 * 使い方:
 *   var presets = require("./presets");
 *   var exec = presets.get("midnight_executive");  // slug で取得
 *   var exec = presets.find("Executive");          // 名前で検索
 *   var list = presets.list();                     // 一覧取得
 *   presets.apply(exec, template);                 // template.js のカラーに適用
 *
 * ============================================================
 * 収録プリセット一覧 (v2 - ビジネス特化 10テーマ)
 * ============================================================
 *
 *  slug                  name                  主な用途
 *  -------------------- -------------------- -------------------------
 *  midnight_executive    Midnight Executive   経営/IR/コンサル (ネイビー×ゴールド)
 *  forest_strategy       Forest Strategy      戦略/ESG/事業計画 (グリーン×サンド)
 *  coral_energy          Coral Energy         スタートアップ/ピッチ (コーラル×ネイビー)
 *  ocean_teal            Ocean Teal           IT/DX/SaaS (ティール×シーフォーム)
 *  charcoal_minimal      Charcoal Minimal     汎用ビジネス (チャコール×オレンジ)
 *  berry_finance         Berry Finance        金融/保険/IR (ベリー×クリーム)
 *  sage_wellness         Sage Wellness        医療/HR/教育 (セージ×テラコッタ)
 *  solar_orange          Solar Orange         営業/マーケ/製品ローンチ (オレンジ×ダーク)
 *  royal_purple          Royal Purple         ラグジュアリー/ブランド (パープル×ゴールド)
 *  steel_blue            Steel Blue           製造/建設/エンジニア (スチールブルー×イエロー)
 *
 *  ※ 企業別プリセット (例: docomo) も同フォルダに格納可能
 * ============================================================
 */

var fs = require("fs");
var path = require("path");

// プリセットファイルを自動読み込み（index.js 以外の .js）
var presetsDir = __dirname;
var presetMap = {};

fs.readdirSync(presetsDir).forEach(function (file) {
  if (file === "index.js" || !file.endsWith(".js")) return;
  var preset = require(path.join(presetsDir, file));
  presetMap[preset.slug] = preset;
});

/**
 * slug で取得
 */
function get(slug) {
  return presetMap[slug] || null;
}

/**
 * 名前（部分一致）で検索
 * name / slug / description / useCase いずれかにマッチ
 */
function find(query) {
  var q = query.toLowerCase();
  var keys = Object.keys(presetMap);
  for (var i = 0; i < keys.length; i++) {
    var p = presetMap[keys[i]];
    if (
      p.slug.toLowerCase().indexOf(q) !== -1 ||
      p.name.toLowerCase().indexOf(q) !== -1 ||
      (p.description && p.description.toLowerCase().indexOf(q) !== -1) ||
      (p.useCase && p.useCase.some(function(uc) { return uc.toLowerCase().indexOf(q) !== -1; }))
    ) {
      return p;
    }
  }
  return null;
}

/**
 * 一覧取得（用途検索付き）
 */
function list() {
  return Object.keys(presetMap).map(function (key) {
    var p = presetMap[key];
    return {
      slug: p.slug,
      name: p.name,
      description: p.description || "",
      useCase: p.useCase || []
    };
  });
}

/**
 * 用途から最適プリセットを推薦
 * @param {string} keyword - 用途キーワード (例: "金融", "スタートアップ", "医療")
 * @returns {object|null} 最適プリセット
 */
function recommend(keyword) {
  return find(keyword);
}

/**
 * template.js の COLORS / CHART_COLORS / FACE に適用
 * ※ template.js の module.exports を渡す
 */
function apply(preset, template) {
  if (!preset || !template) return;
  if (preset.colors && template.COLORS) {
    Object.keys(preset.colors).forEach(function (key) {
      if (template.COLORS[key] !== undefined) {
        template.COLORS[key] = preset.colors[key];
      }
    });
  }
  if (preset.chartColors && template.CHART_COLORS) {
    template.CHART_COLORS = preset.chartColors;
  }
  if (preset.font && template.FACE !== undefined) {
    template.FACE = preset.font;
  }
}

module.exports = {
  get: get,
  find: find,
  list: list,
  recommend: recommend,
  apply: apply,
};
