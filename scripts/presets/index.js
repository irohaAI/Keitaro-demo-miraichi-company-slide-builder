/**
 * デザインテンプレート — エントリーポイント
 *
 * presetsと同じAPIスタイルで使えます:
 *
 *   var templates = require("./templates");
 *
 *   templates.get("A1")                    // ID で取得
 *   templates.find("navy")                 // カテゴリ・スタイル・名前で検索
 *   templates.list()                       // 全テンプレート一覧
 *   templates.listByCategory("natural")    // カテゴリ別一覧
 *   templates.listByStyle("waves")         // スタイル別一覧
 *   templates.recommend("環境", "waves")   // キーワード×スタイルで推薦
 */

"use strict";

var TEMPLATES = require("./definitions");

/**
 * IDでテンプレートを取得 (例: "A1", "B3")
 * @param {string} id
 * @returns {object|null}
 */
function get(id) {
  return TEMPLATES.find(function(t) {
    return t.id.toLowerCase() === id.toLowerCase();
  }) || null;
}

/**
 * キーワードで検索（名前・カテゴリ・スタイル・useCase・description を対象）
 * @param {string} keyword
 * @returns {object[]}
 */
function find(keyword) {
  var kw = keyword.toLowerCase();
  return TEMPLATES.filter(function(t) {
    return (
      t.id.toLowerCase().includes(kw) ||
      t.name.toLowerCase().includes(kw) ||
      t.nameJa.includes(keyword) ||
      t.category.toLowerCase().includes(kw) ||
      t.style.toLowerCase().includes(kw) ||
      t.description.includes(keyword) ||
      t.useCase.some(function(u) { return u.includes(keyword); })
    );
  });
}

/**
 * 全テンプレート一覧を返す
 * @returns {object[]}
 */
function list() {
  return TEMPLATES.slice();
}

/**
 * カテゴリ別一覧
 * @param {"natural"|"navy"|"warm"|"energetic"} category
 * @returns {object[]}
 */
function listByCategory(category) {
  return TEMPLATES.filter(function(t) {
    return t.category === category;
  });
}

/**
 * スタイル別一覧
 * @param {"mckinsey"|"bcg"|"bold"|"feminine"|"editorial"|"waves"} style
 * @returns {object[]}
 */
function listByStyle(style) {
  return TEMPLATES.filter(function(t) {
    return t.style === style;
  });
}

/**
 * キーワードとスタイルでテンプレートを推薦（最大3件）
 * @param {string} keyword  用途・業種キーワード
 * @param {string} [style]  スタイル指定（省略可）
 * @returns {object[]}
 */
function recommend(keyword, style) {
  var candidates = find(keyword);
  if (style) {
    var filtered = candidates.filter(function(t) { return t.style === style; });
    if (filtered.length > 0) candidates = filtered;
  }
  return candidates.slice(0, 3);
}

/**
 * テンプレートのカラー定義をプリセット形式で出力
 * （presets/index.js の apply() と組み合わせて使う）
 * @param {object} template
 * @returns {object}  { primary, accent, bg, ... }
 */
function toPresetColors(template) {
  return {
    primary:  template.colors.primary,
    accent:   template.colors.accent,
    white:    template.colors.white,
    bg:       template.colors.bg,
    pale:     template.colors.pale  || template.colors.bg,
    mid:      template.colors.mid,
    light:    template.colors.light,
    text:     template.colors.text,
    dark:     template.colors.dark,
    font:     template.font,
  };
}

module.exports = {
  get:             get,
  find:            find,
  list:            list,
  listByCategory:  listByCategory,
  listByStyle:     listByStyle,
  recommend:       recommend,
  toPresetColors:  toPresetColors,

  // カテゴリ・スタイルの定数
  CATEGORIES: ["natural", "navy", "warm", "energetic"],
  STYLES:     ["mckinsey", "bcg", "bold", "feminine", "editorial", "waves"],
};
