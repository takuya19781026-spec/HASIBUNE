/* =========================================================
   HASIBUNE オンライン注文フロー 共通処理

   商品ページ → 購入者情報入力 → 年齢確認 → 注文確認
   → 注文確定（FormSubmit経由でinfo@hasibune.jpへ送信）→ 注文完了

   ★ 価格・送料の変更はこの PRODUCT / SHIPPING だけを直せば
     全画面に反映されます。
   ========================================================= */

var PRODUCT = {
  name:  "Soupir d'amour（スピー・ダムール）スパークリングワイン 750ml",
  price: 18000,  // 税込単価（円）
  maxQty: 12
};

var SHIPPING = {
  fee: 990,             // ★未確定：税込送料（円）。実際の送料に書き換えてください。
  freeOver: null        // 送料無料のしきい値（税込）。無料設定がない場合は null のまま。
};

// 注文データの受信先（FormSubmit）
var ORDER_ENDPOINT = 'https://formsubmit.co/info@hasibune.jp';
var COMPLETE_URL   = 'https://www.hasibune.jp/order-complete.html';

var STORE_KEY = 'hasibune_order';

/* ---------- 保存・読み出し ---------- */

function loadOrder() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveOrder(patch) {
  var o = loadOrder();
  for (var k in patch) { o[k] = patch[k]; }
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(o));
  } catch (e) {
    alert('お使いのブラウザの設定により注文情報を保持できません。プライベートモードを解除してお試しください。');
  }
  return o;
}

/* ---------- 金額計算 ---------- */

function calcTotals(qty) {
  var n = Math.max(1, Math.min(PRODUCT.maxQty, parseInt(qty, 10) || 1));
  var subtotal = PRODUCT.price * n;
  var shipping = (SHIPPING.freeOver !== null && subtotal >= SHIPPING.freeOver) ? 0 : SHIPPING.fee;
  return {
    qty: n,
    unit: PRODUCT.price,
    subtotal: subtotal,
    shipping: shipping,
    total: subtotal + shipping
  };
}

function yen(n) {
  return Number(n).toLocaleString('ja-JP') + '円';
}

/* ---------- 年齢 ---------- */

function calcAge(birthday) {
  if (!birthday) return null;
  var b = new Date(birthday);
  if (isNaN(b.getTime())) return null;
  var now = new Date();
  var age = now.getFullYear() - b.getFullYear();
  var m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
}

function isAdult(birthday) {
  var a = calcAge(birthday);
  return a !== null && a >= 20;
}

/* ---------- 日付・注文番号 ---------- */

function formatDate(d) {
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
}

function makeOrderNo(d) {
  var p = function (n) { return ('0' + n).slice(-2); };
  var rnd = ('000' + Math.floor(Math.random() * 10000)).slice(-4);
  return 'HB-' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + rnd;
}

/* ---------- 各画面のガード ---------- */
/* 前の画面を経ていない場合は差し戻す */

function requireStep(fields, backUrl) {
  var o = loadOrder();
  for (var i = 0; i < fields.length; i++) {
    if (!o[fields[i]]) {
      location.replace(backUrl);
      return null;
    }
  }
  return o;
}
