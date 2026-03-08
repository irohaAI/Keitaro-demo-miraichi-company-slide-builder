/**
 * generate.js — 18テンプレート PPTX 生成スクリプト
 *
 * 使い方:
 *   node generate.js                        # 全18テンプレート（36スライド）を1ファイルに
 *   node generate.js --id A1               # A1だけ生成
 *   node generate.js --category natural    # カテゴリ指定
 *   node generate.js --style waves         # スタイル指定
 *   node generate.js --out ./output.pptx   # 出力先指定
 *
 * 依存:
 *   npm install pptxgenjs sharp
 *
 * フォント補足:
 *   fontFace に "Noto Sans JP" を指定しています。
 *   PowerPoint で開く際はシステムに Noto Sans JP がインストールされているか、
 *   またはテーマフォントとして埋め込まれていることが必要です。
 *   インストールされていない環境では Meiryo / Yu Gothic / ヒラギノ角ゴ に
 *   自動フォールバックされます（PowerPoint の代替フォント機能）。
 */

"use strict";

var pptxgen = require("pptxgenjs");
var sharp   = require("sharp");
var path    = require("path");
var TEMPLATES = require("./definitions");

// ── CLI 引数パース ──────────────────────────────────────────
var args = process.argv.slice(2);
function getArg(flag) {
  var i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : null;
}
var filterById       = getArg("--id");
var filterByCategory = getArg("--category");
var filterByStyle    = getArg("--style");
var outputPath       = getArg("--out") || path.resolve(__dirname, "../../../18templates.pptx");

// フィルタリング
var targets = TEMPLATES.filter(function(T) {
  if (filterById)       return T.id.toLowerCase() === filterById.toLowerCase();
  if (filterByCategory) return T.category === filterByCategory;
  if (filterByStyle)    return T.style    === filterByStyle;
  return true;
});

if (targets.length === 0) {
  console.error("該当するテンプレートが見つかりません。");
  process.exit(1);
}
console.log("生成対象: " + targets.length + " テンプレート (" + targets.map(function(t){return t.id;}).join(", ") + ")");

// ── ヘルパー ────────────────────────────────────────────────
var pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title  = "18 Design Templates — Japanese Business";

// フォント設定（Noto Sans JP / Noto Serif JP）
// PowerPoint上で読みやすい日本語フォントを優先
// 英数字はフォント固有のラテン文字を使用
var FONT_SANS  = "Noto Sans JP";
var FONT_SERIF = "Noto Serif JP";
var FONT_EN    = "Calibri";  // 英数字専用（サブテキスト・キャプション）

function ff(T) { return T.font || FONT_SANS; }  // テンプレートの指定フォント

// SVG→PNG base64
function svgToBase64(svgStr, w, h) {
  return sharp(Buffer.from(svgStr)).resize(w, h).png().toBuffer()
    .then(function(buf) { return "image/png;base64," + buf.toString("base64"); });
}

// hex に # がなければ付与
function hex(c) {
  if (!c) return "#888888";
  return c.startsWith("#") ? c : "#" + c;
}

// ── 波SVG生成 ───────────────────────────────────────────────
function makeWaveSvg(bgColor, wave1, wave2, wave3, lineColor) {
  bgColor   = hex(bgColor);
  wave1     = hex(wave1);
  wave2     = hex(wave2);
  wave3     = hex(wave3);
  lineColor = hex(lineColor || "FFFFFF");

  var W = 2000, H = 1125;
  var waves = [
    { d:"M0,950 C300,885 600,1010 950,925 C1300,840 1600,965 2000,905 L2000,1125 L0,1125 Z", fill:wave1, op:1.0 },
    { d:"M0,875 C250,808 550,932 880,847 C1210,762 1550,892 2000,825 L2000,1125 L0,1125 Z",  fill:wave2, op:0.9 },
    { d:"M0,800 C280,730 580,855 900,768 C1220,681 1540,815 2000,748 L2000,1125 L0,1125 Z",  fill:wave3, op:0.5 },
    { d:"M0,745 C300,675 600,800 920,712 C1240,624 1560,755 2000,688 L2000,1125 L0,1125 Z",  fill:wave3, op:0.25 },
    { d:"M0,730 C280,660 560,785 880,698 C1200,611 1540,742 2000,675", fill:"none", stroke:lineColor, sw:2.5, op:0.55 },
    { d:"M0,768 C300,698 580,822 900,735 C1220,648 1550,780 2000,714", fill:"none", stroke:"#FFFFFF",   sw:1.5, op:0.3 },
  ];
  var bg = bgColor;
  var paths = waves.map(function(w) {
    if (w.fill === "none") return '<path d="' + w.d + '" fill="none" stroke="' + w.stroke + '" stroke-width="' + w.sw + '" opacity="' + w.op + '"/>';
    return '<path d="' + w.d + '" fill="' + w.fill + '" opacity="' + w.op + '"/>';
  }).join("\n");
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">'
    + '<rect width="' + W + '" height="' + H + '" fill="' + bg + '"/>' + paths + '</svg>';
}

// ── スライド生成関数群 ──────────────────────────────────────

// [A] McKinseyスタイル: 左縦帯 + 白ベース
function addMcKinsey(T) {
  var f = ff(T);
  // 表紙
  var s = pres.addSlide();
  s.background = { color: T.colors.white };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:3.0, h:5.63, fill:{color:T.colors.primary} });
  s.addShape(pres.shapes.RECTANGLE, { x:3.0, y:0, w:0.06, h:5.63, fill:{color:T.colors.accent} });
  s.addText(T.name,  { x:0.28, y:1.6, w:2.3, h:0.8,  fontSize:14, fontFace:f, color:T.colors.accent, bold:true, valign:"middle" });
  s.addText("2025",  { x:0.28, y:2.5, w:2.3, h:0.4,  fontSize:11, fontFace:FONT_EN, color:T.colors.light, valign:"middle" });
  s.addText("2025年度\n中期経営戦略", { x:3.4, y:1.1, w:6.2, h:2.0, fontSize:28, fontFace:f, color:T.colors.primary, bold:true, valign:"top" });
  s.addShape(pres.shapes.RECTANGLE, { x:3.4, y:3.2, w:1.6, h:0.05, fill:{color:T.colors.accent} });
  s.addText("Strategic Review 2025–2027", { x:3.4, y:3.35, w:6.0, h:0.4, fontSize:12, fontFace:FONT_EN, color:T.colors.mid });
  s.addText("経営企画部　2025年4月",       { x:3.4, y:4.65, w:6.0, h:0.35, fontSize:11, fontFace:f, color:T.colors.light });

  // コンテンツ
  var s2 = pres.addSlide();
  s2.background = { color: T.colors.white };
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.1, fill:{color:T.colors.primary} });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0.1, w:10, h:0.04, fill:{color:T.colors.accent} });
  s2.addText("戦略的優先課題は3つに集約される", { x:0.55, y:0.25, w:9, h:0.55, fontSize:18, fontFace:f, color:T.colors.primary, bold:true });
  s2.addShape(pres.shapes.RECTANGLE, { x:0.55, y:0.98, w:0.07, h:3.6, fill:{color:T.colors.accent} });
  var items = [
    { no:"01", title:"デジタルコア構築",      body:"基幹クラウド移行完了。意思決定速度3倍・業務効率+32%達成。" },
    { no:"02", title:"顧客体験の再設計",      body:"NPS+18pt改善。リピート率向上でLTV・顧客単価が15%上昇。" },
    { no:"03", title:"サプライチェーン最適化", body:"調達コスト-12%・在庫回転1.8倍。キャッシュフロー強化。" },
  ];
  items.forEach(function(item, i) {
    var y = 1.0 + i * 1.22;
    s2.addText(item.no,    { x:0.7,  y:y, w:0.5, h:0.45, fontSize:10, fontFace:FONT_EN, color:T.colors.accent, bold:true });
    s2.addText(item.title, { x:1.3,  y:y, w:8.0, h:0.45, fontSize:14, fontFace:f, color:T.colors.primary, bold:true });
    s2.addText(item.body,  { x:1.3,  y:y+0.48, w:8.0, h:0.6, fontSize:12, fontFace:f, color:T.colors.text });
  });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:5.35, w:10, h:0.28, fill:{color:T.colors.bg} });
  s2.addText(T.name + "  |  CONFIDENTIAL", { x:0.55, y:5.37, w:9, h:0.24, fontSize:9, fontFace:FONT_EN, color:T.colors.light });
}

// [B] BCGスタイル: 上部バー + 2カラム
function addBCG(T) {
  var f = ff(T);
  var s = pres.addSlide();
  s.background = { color: T.colors.white };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:1.05, fill:{color:T.colors.primary} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:1.05, w:10, h:0.07, fill:{color:T.colors.accent} });
  s.addText(T.name, { x:0.6, y:0.08, w:8, h:0.42, fontSize:11, fontFace:FONT_EN, color:T.colors.light });
  s.addText("STRATEGY & INSIGHTS", { x:0.6, y:0.5, w:8, h:0.5, fontSize:18, fontFace:FONT_EN, color:T.colors.white, bold:true });
  s.addText("持続的成長戦略\n2025–2030", { x:0.6, y:1.4, w:4.8, h:2.0, fontSize:26, fontFace:f, color:T.colors.primary, bold:true, valign:"middle" });
  s.addShape(pres.shapes.RECTANGLE, { x:5.8, y:1.35, w:3.8, h:2.2, fill:{color:T.colors.bg} });
  s.addShape(pres.shapes.RECTANGLE, { x:5.8, y:1.35, w:0.07, h:2.2, fill:{color:T.colors.accent} });
  s.addText("KEY MESSAGE", { x:6.1, y:1.5,  w:3.3, h:0.35, fontSize:10, fontFace:FONT_EN, color:T.colors.primary, bold:true });
  s.addText("3つの戦略的施策により、2030年に売上2倍・利益率20%超を実現する道筋を示す。", { x:6.1, y:1.9, w:3.3, h:1.4, fontSize:12, fontFace:f, color:T.colors.text });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:4.9, w:10, h:0.73, fill:{color:T.colors.bg} });
  s.addText("経営企画部　2025年4月　｜　Confidential", { x:0.6, y:5.05, w:9, h:0.4, fontSize:11, fontFace:f, color:T.colors.light });

  var s2 = pres.addSlide();
  s2.background = { color: T.colors.white };
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.55, fill:{color:T.colors.primary} });
  s2.addText("市場分析　— 成長機会の特定", { x:0.5, y:0.08, w:9, h:0.42, fontSize:14, fontFace:f, color:T.colors.white, bold:true });
  s2.addText("国内市場は成熟するが、3つのセグメントが年率10%超の高成長を維持している", { x:0.5, y:0.68, w:9, h:0.55, fontSize:13, fontFace:f, color:T.colors.primary, bold:true });
  s2.addShape(pres.shapes.RECTANGLE, { x:0.5, y:1.25, w:9, h:0.04, fill:{color:T.colors.accent} });
  var bullets = [
    "デジタルヘルス市場：CAGR +14.2%（2024–2030）",
    "グリーンエネルギー関連：政策追い風で需要急拡大",
    "高齢者向けサービス：人口動態が構造的な追い風",
  ];
  bullets.forEach(function(txt, i) {
    var y = 1.42 + i * 0.72;
    s2.addShape(pres.shapes.RECTANGLE, { x:0.5, y:y+0.1, w:0.2, h:0.2, fill:{color:T.colors.accent} });
    s2.addText(txt, { x:0.88, y:y, w:3.9, h:0.52, fontSize:12, fontFace:f, color:T.colors.text });
  });
  var stats = [
    { v:"¥2.4兆", l:"市場規模（2030予測）" },
    { v:"+14%",  l:"年平均成長率" },
    { v:"3領域",  l:"重点投資セグメント" },
  ];
  stats.forEach(function(st, i) {
    var y = 1.38 + i * 1.03;
    s2.addShape(pres.shapes.RECTANGLE, { x:5.2, y:y, w:4.2, h:0.88, fill:{color:T.colors.bg} });
    s2.addText(st.v, { x:5.3,  y:y+0.02, w:2.0, h:0.88, fontSize:26, fontFace:FONT_EN, color:T.colors.primary, bold:true, valign:"middle" });
    s2.addText(st.l, { x:7.2,  y:y+0.02, w:2.0, h:0.88, fontSize:12, fontFace:f, color:T.colors.mid, valign:"middle" });
  });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:5.35, w:10, h:0.28, fill:{color:T.colors.bg} });
  s2.addText(T.name + "  |  Confidential", { x:0.5, y:5.37, w:9, h:0.24, fontSize:9, fontFace:FONT_EN, color:T.colors.light });
}

// [C] Bold Impactスタイル
function addBold(T) {
  var f = ff(T);
  var s = pres.addSlide();
  s.background = { color: T.colors.primary };
  s.addShape(pres.shapes.RECTANGLE, { x:7.0, y:0, w:3.0, h:5.63, fill:{color:T.colors.accent} });
  s.addText("2025年度\n事業戦略\n発表", { x:0.6, y:0.6, w:6.0, h:3.6, fontSize:42, fontFace:f, color:T.colors.white, bold:true, valign:"top" });
  s.addText("2025年度 事業戦略発表", { x:0.6, y:4.35, w:5.8, h:0.38, fontSize:12, fontFace:f, color:T.colors.mid });
  s.addText("経営企画部  ／  2025.04.01", { x:0.6, y:4.82, w:5.8, h:0.33, fontSize:11, fontFace:f, color:T.colors.light });
  s.addText(T.name, { x:7.1, y:1.8, w:2.7, h:1.6, fontSize:18, fontFace:FONT_EN, color:T.colors.primary, bold:true, align:"center", valign:"middle" });

  var s2 = pres.addSlide();
  s2.background = { color: T.colors.primary };
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.1, fill:{color:T.colors.accent} });
  s2.addText("3つの数字が\n全てを語る", { x:0.6, y:0.3, w:4.0, h:3.2, fontSize:28, fontFace:f, color:T.colors.white, bold:true, valign:"middle" });
  var kpis = [
    { v:"115%", l:"売上成長率" },
    { v:"¥48億", l:"四半期売上" },
    { v:"128%", l:"目標達成率" },
  ];
  kpis.forEach(function(k, i) {
    var y = 0.3 + i * 1.55;
    s2.addShape(pres.shapes.RECTANGLE, { x:4.9, y:y, w:4.8, h:1.42, fill:{color:T.colors.dark} });
    s2.addShape(pres.shapes.RECTANGLE, { x:4.9, y:y, w:0.08, h:1.42, fill:{color:T.colors.accent} });
    s2.addText(k.v, { x:5.2, y:y, w:2.5, h:1.42, fontSize:36, fontFace:FONT_EN, color:T.colors.accent, bold:true, valign:"middle" });
    s2.addText(k.l, { x:7.5, y:y, w:2.0, h:1.42, fontSize:13, fontFace:f, color:T.colors.light, valign:"middle" });
  });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:5.33, w:10, h:0.3, fill:{color:T.colors.dark} });
  s2.addText(T.name + "  |  CONFIDENTIAL", { x:0.5, y:5.35, w:9, h:0.26, fontSize:9, fontFace:FONT_EN, color:T.colors.light });
}

// [D] Feminine Elegantスタイル
function addFeminine(T) {
  var f = ff(T);
  var s = pres.addSlide();
  s.background = { color: T.colors.white };
  s.addShape(pres.shapes.OVAL, { x:5.8, y:-1.5, w:6.0, h:6.0, fill:{color:T.colors.pale}, line:{color:T.colors.pale, width:0} });
  s.addShape(pres.shapes.OVAL, { x:-1.2, y:3.5, w:3.5, h:3.5, fill:{color:T.colors.bg},   line:{color:T.colors.bg,   width:0} });
  s.addText("2025年度\nブランド戦略\n発表", { x:0.8, y:0.7, w:5.2, h:2.8, fontSize:30, fontFace:f, color:T.colors.primary, bold:true, valign:"middle" });
  s.addShape(pres.shapes.RECTANGLE, { x:0.8, y:3.6, w:2.0, h:0.04, fill:{color:T.colors.accent} });
  s.addText("2025年度 ブランド戦略発表", { x:0.8, y:3.75, w:5.2, h:0.38, fontSize:12, fontFace:f, color:T.colors.accent });
  s.addText("○○スタジオ　／　2025.04",   { x:0.8, y:4.25, w:5.2, h:0.32, fontSize:11, fontFace:f, color:T.colors.mid });
  s.addText(T.name, { x:7.5, y:2.0, w:2.2, h:1.0, fontSize:13, fontFace:FONT_EN, color:T.colors.white, bold:true, align:"center", valign:"middle" });

  var s2 = pres.addSlide();
  s2.background = { color: T.colors.white };
  s2.addShape(pres.shapes.OVAL, { x:7.5, y:-0.3, w:3.5, h:3.5, fill:{color:T.colors.pale}, line:{color:T.colors.pale, width:0} });
  s2.addText("大切にしている\n3つのこと", { x:0.8, y:0.4, w:5.5, h:1.1, fontSize:22, fontFace:f, color:T.colors.primary, bold:true });
  s2.addShape(pres.shapes.RECTANGLE, { x:0.8, y:1.55, w:1.8, h:0.04, fill:{color:T.colors.accent} });
  var items = [
    { no:"01", title:"あなたらしさ",   body:"あなたの強みと価値観を軸に、唯一無二のブランドを一緒に作り上げます。" },
    { no:"02", title:"伝わるデザイン", body:"見た目の美しさだけでなく、想いが正しく届くコミュニケーションを設計します。" },
    { no:"03", title:"持続する成長",   body:"短期の売上より、長期的にファンが増え続けるブランド基盤の構築を目指します。" },
  ];
  items.forEach(function(item, i) {
    var y = 1.75 + i * 1.2;
    s2.addShape(pres.shapes.RECTANGLE, { x:0.8, y:y, w:8.0, h:1.0, fill:{color:T.colors.bg} });
    s2.addShape(pres.shapes.OVAL, { x:0.85, y:y+0.22, w:0.55, h:0.55, fill:{color:T.colors.pale}, line:{color:T.colors.pale, width:0} });
    s2.addText(item.no,    { x:0.85, y:y+0.22, w:0.55, h:0.55, fontSize:11, fontFace:FONT_EN, color:T.colors.primary, bold:true, align:"center", valign:"middle" });
    s2.addText(item.title, { x:1.6,  y:y+0.08, w:2.5,  h:0.4,  fontSize:14, fontFace:f, color:T.colors.primary, bold:true });
    s2.addText(item.body,  { x:1.6,  y:y+0.5,  w:7.0,  h:0.42, fontSize:12, fontFace:f, color:T.colors.text });
  });
}

// [E] Editorial Magazineスタイル
function addEditorial(T) {
  var f = ff(T);
  var s = pres.addSlide();
  s.background = { color: T.colors.white };
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:4.6, h:5.63, fill:{color:T.colors.primary} });
  s.addText("VOL.\n2025", { x:0.4, y:0.5, w:3.8, h:1.8, fontSize:40, fontFace:FONT_EN, color:T.colors.accent, bold:true, valign:"top" });
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:2.55, w:2.5, h:0.05, fill:{color:T.colors.accent} });
  s.addText("BUSINESS\nREVIEW", { x:0.4, y:2.72, w:3.8, h:1.1, fontSize:26, fontFace:FONT_EN, color:T.colors.white, bold:true });
  s.addText("2025.04", { x:0.4, y:4.85, w:3.8, h:0.4, fontSize:12, fontFace:FONT_EN, color:T.colors.mid });
  s.addText("戦略の\n美学", { x:5.0, y:0.8, w:4.7, h:2.3, fontSize:36, fontFace:f, color:T.colors.primary, bold:true, valign:"middle" });
  s.addText("2025年度 中期戦略発表\n経営企画部", { x:5.0, y:4.1, w:4.7, h:0.8, fontSize:12, fontFace:f, color:T.colors.mid });
  s.addText(T.name, { x:5.0, y:3.2, w:4.7, h:0.5, fontSize:11, fontFace:FONT_EN, color:T.colors.light });

  var s2 = pres.addSlide();
  s2.background = { color: T.colors.white };
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:1.55, fill:{color:T.colors.primary} });
  s2.addText("THIS QUARTER IN NUMBERS", { x:0.6, y:0.14, w:6, h:0.4, fontSize:10, fontFace:FONT_EN, color:T.colors.accent, bold:true });
  s2.addText("数字が語る、今期の真実。", { x:0.6, y:0.55, w:8.5, h:0.85, fontSize:22, fontFace:f, color:T.colors.white, bold:true });
  var cols3 = [
    { head:"GROWTH", num:"+15%",   sub:"売上高 前年比", body:"全セグメントで計画値を上回り、特にデジタル領域が牽引した。" },
    { head:"PROFIT", num:"23.4%",  sub:"営業利益率",   body:"コスト削減と高付加価値シフトが同時進展。過去最高を更新。" },
    { head:"NPS",    num:"+18pt",  sub:"顧客推奨度",   body:"顧客体験の全面刷新が奏功。リピート率が大幅に改善した。" },
  ];
  cols3.forEach(function(c, i) {
    var x = 0.5 + i * 3.15;
    s2.addShape(pres.shapes.RECTANGLE, { x:x, y:1.82, w:0.06, h:3.5, fill:{color:T.colors.accent} });
    s2.addText(c.head, { x:x+0.2, y:1.88, w:2.8, h:0.38, fontSize:10, fontFace:FONT_EN, color:T.colors.mid,     bold:true });
    s2.addText(c.num,  { x:x+0.2, y:2.26, w:2.8, h:0.95, fontSize:30, fontFace:FONT_EN, color:T.colors.primary, bold:true });
    s2.addText(c.sub,  { x:x+0.2, y:3.22, w:2.8, h:0.33, fontSize:11, fontFace:f, color:T.colors.mid });
    s2.addShape(pres.shapes.RECTANGLE, { x:x+0.2, y:3.6, w:2.5, h:0.03, fill:{color:T.colors.bg} });
    s2.addText(c.body, { x:x+0.2, y:3.72, w:2.8, h:0.88, fontSize:11, fontFace:f, color:T.colors.text });
  });
}

// [F] Dynamic Wavesスタイル
function addWaves(T, waveBg, darkBg) {
  var f = ff(T);

  // 表紙（ダーク背景 + 波）
  var s = pres.addSlide();
  s.addImage({ data: darkBg, x:0, y:0, w:10, h:5.63 });
  s.addShape(pres.shapes.RECTANGLE, { x:0.7, y:0.95, w:1.8, h:0.05, fill:{color:T.colors.accent} });
  s.addText("2025年度\n事業戦略発表", { x:0.7, y:1.1, w:5.8, h:2.1, fontSize:32, fontFace:f, color:T.colors.white, bold:true, valign:"top" });
  s.addText("Strategic Business Review", { x:0.7, y:3.25, w:5.5, h:0.4, fontSize:13, fontFace:FONT_EN, color:T.colors.accent });
  s.addText("経営企画部　／　2025.04.01",  { x:0.7, y:3.7,  w:5.5, h:0.35, fontSize:12, fontFace:f, color:T.colors.light });
  s.addText(T.name, { x:7.0, y:1.3, w:2.7, h:1.5, fontSize:20, fontFace:FONT_EN, color:T.colors.white, bold:true, align:"center", valign:"middle" });
  s.addShape(pres.shapes.RECTANGLE, { x:7.0, y:3.0, w:2.7, h:0.04, fill:{color:T.colors.accent} });

  // コンテンツ（白背景 + 波）
  var s2 = pres.addSlide();
  s2.addImage({ data: waveBg, x:0, y:0, w:10, h:5.63 });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.62, fill:{color:T.colors.primary} });
  s2.addShape(pres.shapes.RECTANGLE, { x:0, y:0.62, w:10, h:0.04, fill:{color:T.colors.accent} });
  s2.addText("BUSINESS HIGHLIGHTS", { x:0.65, y:0.0, w:8, h:0.62, fontSize:14, fontFace:FONT_EN, color:T.colors.white, bold:true, valign:"middle" });
  s2.addText("今期を牽引した3つの成長エンジン", { x:0.65, y:0.82, w:9, h:0.5, fontSize:18, fontFace:f, color:T.colors.primary, bold:true });
  s2.addShape(pres.shapes.RECTANGLE, { x:0.65, y:1.46, w:0.05, h:0.52, fill:{color:T.colors.accent} });
  s2.addText("デジタル・顧客・コストの3領域が連動し、売上と利益の同時成長を実現した。", { x:0.85, y:1.46, w:8.8, h:0.52, fontSize:12, fontFace:f, color:T.colors.mid, valign:"middle" });
  s2.addShape(pres.shapes.RECTANGLE, { x:0.65, y:2.06, w:8.8, h:0.02, fill:{color:T.colors.bg || "E8EEF5"} });
  var items = [
    { num:"01", title:"デジタルコア構築",      body:"基幹クラウド移行完了。意思決定速度3倍・業務効率+32%を達成。" },
    { num:"02", title:"顧客体験の再設計",      body:"NPS+18pt改善。リピート率向上でLTV・顧客単価が15%上昇。" },
    { num:"03", title:"サプライチェーン最適化", body:"調達コスト-12%・在庫回転1.8倍。キャッシュフロー大幅改善。" },
  ];
  items.forEach(function(item, i) {
    var y = 2.18 + i * 0.68;
    s2.addShape(pres.shapes.RECTANGLE, { x:0.65, y:y+0.1, w:0.4, h:0.4, fill:{color:T.colors.accent} });
    s2.addText(item.num,   { x:0.65, y:y+0.1, w:0.4,  h:0.4,  fontSize:11, fontFace:FONT_EN, color:T.colors.white, bold:true, align:"center", valign:"middle" });
    s2.addText(item.title, { x:1.18, y:y,     w:2.8,  h:0.6,  fontSize:13, fontFace:f, color:T.colors.primary, bold:true, valign:"middle" });
    s2.addText(item.body,  { x:4.1,  y:y,     w:5.5,  h:0.6,  fontSize:11, fontFace:f, color:T.colors.mid, valign:"middle" });
    if (i < 2) s2.addShape(pres.shapes.RECTANGLE, { x:0.65, y:y+0.64, w:8.8, h:0.02, fill:{color:T.colors.bg || "E8EEF5"} });
  });
}

// ── メイン処理 ──────────────────────────────────────────────
async function main() {
  // Wavesスタイルの波SVGを事前生成
  var waveTargets = targets.filter(function(T) { return T.style === "waves"; });
  var waveCache = {};

  if (waveTargets.length > 0) {
    console.log("波形SVGを生成中...");
    await Promise.all(waveTargets.map(async function(T) {
      var wc = T.waveColors     || [T.colors.primary, T.colors.mid, T.colors.light, "FFFFFF"];
      var dw = T.darkWaveColors || [T.colors.mid, T.colors.accent, T.colors.light, "FFFFFF"];
      var coverBgColor = T.coverBg || T.colors.primary;
      var [waveBg, darkBg] = await Promise.all([
        svgToBase64(makeWaveSvg(T.colors.white || "FFFFFF", wc[0], wc[1], wc[2], wc[3]), 2000, 1125),
        svgToBase64(makeWaveSvg(coverBgColor,                dw[0], dw[1], dw[2], dw[3]), 2000, 1125),
      ]);
      waveCache[T.id] = { waveBg: waveBg, darkBg: darkBg };
    }));
    console.log("SVG変換完了");
  }

  // 全テンプレートスライド生成
  targets.forEach(function(T) {
    console.log("生成中: " + T.id + " " + T.name + " [" + T.style + "]");
    if      (T.style === "mckinsey")  addMcKinsey(T);
    else if (T.style === "bcg")       addBCG(T);
    else if (T.style === "bold")      addBold(T);
    else if (T.style === "feminine")  addFeminine(T);
    else if (T.style === "editorial") addEditorial(T);
    else if (T.style === "waves")     addWaves(T, waveCache[T.id].waveBg, waveCache[T.id].darkBg);
  });

  await pres.writeFile({ fileName: outputPath });
  console.log("\n完了: " + outputPath);
  console.log("スライド数: " + targets.length * 2 + "枚（" + targets.length + "テンプレート × 2スライド）");
}

main().catch(function(e) { console.error(e); process.exit(1); });
