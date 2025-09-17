/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/

/*! #__NO_SIDE_EFFECTS__ */
function Xh(i) {
  const e = Object.create(null);
  for (const t of i.split(",")) e[t] = 1;
  return (t) => t in e;
}

const pe = {},
  Rn = [],
  Wt = () => {},
  c0 = () => !1,
  rl = (i) =>
    i.charCodeAt(0) === 111 &&
    i.charCodeAt(1) === 110 &&
    (i.charCodeAt(2) > 122 || i.charCodeAt(2) < 97),
  Dh = (i) => i.startsWith("onUpdate:"),
  $e = Object.assign,
  Yh = (i, e) => {
    const t = i.indexOf(e);
    t > -1 && i.splice(t, 1);
  },
  f0 = Object.prototype.hasOwnProperty,
  fe = (i, e) => f0.call(i, e),
  F = Array.isArray,
  Tn = (i) => ur(i) === "[object Map]",
  Pd = (i) => ur(i) === "[object Set]",
  u0 = (i) => ur(i) === "[object RegExp]",
  K = (i) => typeof i == "function",
  we = (i) => typeof i == "string",
  mi = (i) => typeof i == "symbol",
  ye = (i) => i !== null && typeof i == "object",
  kd = (i) => (ye(i) || K(i)) && K(i.then) && K(i.catch),
  vd = Object.prototype.toString,
  ur = (i) => vd.call(i),
  d0 = (i) => ur(i).slice(8, -1),
  $d = (i) => ur(i) === "[object Object]",
  jh = (i) =>
    we(i) && i !== "NaN" && i[0] !== "-" && "" + parseInt(i, 10) === i,
  ws = Xh(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  ol = (i) => {
    const e = Object.create(null);
    return (t) => e[t] || (e[t] = i(t));
  },
  p0 = /-(\w)/g,
  Tt = ol((i) => i.replace(p0, (e, t) => (t ? t.toUpperCase() : ""))),
  O0 = /\B([A-Z])/g,
  Bi = ol((i) => i.replace(O0, "-$1").toLowerCase()),
  ll = ol((i) => i.charAt(0).toUpperCase() + i.slice(1)),
  _l = ol((i) => (i ? `on${ll(i)}` : "")),
  Xi = (i, e) => !Object.is(i, e),
  Qs = (i, ...e) => {
    for (let t = 0; t < i.length; t++) i[t](...e);
  },
  Cd = (i, e, t, n = !1) => {
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: t,
    });
  },
  g0 = (i) => {
    const e = parseFloat(i);
    return isNaN(e) ? i : e;
  },
  m0 = (i) => {
    const e = we(i) ? Number(i) : NaN;
    return isNaN(e) ? i : e;
  };
let Bc;
const al = () =>
  Bc ||
  (Bc =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function hl(i) {
  if (F(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
      const n = i[t],
        s = we(n) ? S0(n) : hl(n);
      if (s) for (const r in s) e[r] = s[r];
    }
    return e;
  } else if (we(i) || ye(i)) return i;
}
const b0 = /;(?![^(]*\))/g,
  y0 = /:([^]+)/,
  x0 = /\/\*[^]*?\*\//g;
function S0(i) {
  const e = {};
  return (
    i
      .replace(x0, "")
      .split(b0)
      .forEach((t) => {
        if (t) {
          const n = t.split(y0);
          n.length > 1 && (e[n[0].trim()] = n[1].trim());
        }
      }),
    e
  );
}
function cl(i) {
  let e = "";
  if (we(i)) e = i;
  else if (F(i))
    for (let t = 0; t < i.length; t++) {
      const n = cl(i[t]);
      n && (e += n + " ");
    }
  else if (ye(i)) for (const t in i) i[t] && (e += t + " ");
  return e.trim();
}
function Yv(i) {
  if (!i) return null;
  let { class: e, style: t } = i;
  return e && !we(e) && (i.class = cl(e)), t && (i.style = hl(t)), i;
}
const w0 =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Q0 = Xh(w0);
function Zd(i) {
  return !!i || i === "";
}
const Rd = (i) => !!(i && i.__v_isRef === !0),
  P0 = (i) =>
    we(i)
      ? i
      : i == null
      ? ""
      : F(i) || (ye(i) && (i.toString === vd || !K(i.toString)))
      ? Rd(i)
        ? P0(i.value)
        : JSON.stringify(i, Td, 2)
      : String(i),
  Td = (i, e) =>
    Rd(e)
      ? Td(i, e.value)
      : Tn(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (t, [n, s], r) => ((t[El(n, r) + " =>"] = s), t),
            {}
          ),
        }
      : Pd(e)
      ? { [`Set(${e.size})`]: [...e.values()].map((t) => El(t)) }
      : mi(e)
      ? El(e)
      : ye(e) && !F(e) && !$d(e)
      ? String(e)
      : e,
  El = (i, e = "") => {
    var t;
    return mi(i) ? `Symbol(${(t = i.description) != null ? t : e})` : i;
  };