// BEGIN @vue/shared
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
// END @vue/shared


// BEGIN @vue/reactivity
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let st;
class k0 {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = st),
      !e && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = st;
      try {
        return (st = this), e();
      } finally {
        st = t;
      }
    }
  }
  on() {
    st = this;
  }
  off() {
    st = this.parent;
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++)
        this.cleanups[t]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function v0() {
  return st;
}
function jv(i, e = !1) {
  st && st.cleanups.push(i);
}
let me;
const Wl = new WeakSet();
class Ad {
  constructor(e) {
    (this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      st && st.active && st.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Wl.has(this) && (Wl.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || _d(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), Gc(this), Ed(this);
    const e = me,
      t = Xt;
    (me = this), (Xt = !0);
    try {
      return this.fn();
    } finally {
      Wd(this), (me = e), (Xt = t), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) Vh(e);
      (this.deps = this.depsTail = void 0),
        Gc(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? Wl.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    wa(this) && this.run();
  }
  get dirty() {
    return wa(this);
  }
}
let Md = 0,
  Ps,
  ks;
function _d(i, e = !1) {
  if (((i.flags |= 8), e)) {
    (i.next = ks), (ks = i);
    return;
  }
  (i.next = Ps), (Ps = i);
}
function Lh() {
  Md++;
}
function Uh() {
  if (--Md > 0) return;
  if (ks) {
    let e = ks;
    for (ks = void 0; e; ) {
      const t = e.next;
      (e.next = void 0), (e.flags &= -9), (e = t);
    }
  }
  let i;
  for (; Ps; ) {
    let e = Ps;
    for (Ps = void 0; e; ) {
      const t = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (n) {
          i || (i = n);
        }
      e = t;
    }
  }
  if (i) throw i;
}
function Ed(i) {
  for (let e = i.deps; e; e = e.nextDep)
    (e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e);
}
function Wd(i) {
  let e,
    t = i.depsTail,
    n = t;
  for (; n; ) {
    const s = n.prevDep;
    n.version === -1 ? (n === t && (t = s), Vh(n), $0(n)) : (e = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = s);
  }
  (i.deps = e), (i.depsTail = t);
}
function wa(i) {
  for (let e = i.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (Xd(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!i._dirty;
}
function Xd(i) {
  if (
    (i.flags & 4 && !(i.flags & 16)) ||
    ((i.flags &= -17), i.globalVersion === Xs)
  )
    return;
  i.globalVersion = Xs;
  const e = i.dep;
  if (((i.flags |= 2), e.version > 0 && !i.isSSR && i.deps && !wa(i))) {
    i.flags &= -3;
    return;
  }
  const t = me,
    n = Xt;
  (me = i), (Xt = !0);
  try {
    Ed(i);
    const s = i.fn(i._value);
    (e.version === 0 || Xi(s, i._value)) && ((i._value = s), e.version++);
  } catch (s) {
    throw (e.version++, s);
  } finally {
    (me = t), (Xt = n), Wd(i), (i.flags &= -3);
  }
}
function Vh(i, e = !1) {
  const { dep: t, prevSub: n, nextSub: s } = i;
  if (
    (n && ((n.nextSub = s), (i.prevSub = void 0)),
    s && ((s.prevSub = n), (i.nextSub = void 0)),
    t.subs === i && ((t.subs = n), !n && t.computed))
  ) {
    t.computed.flags &= -5;
    for (let r = t.computed.deps; r; r = r.nextDep) Vh(r, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function $0(i) {
  const { prevDep: e, nextDep: t } = i;
  e && ((e.nextDep = t), (i.prevDep = void 0)),
    t && ((t.prevDep = e), (i.nextDep = void 0));
}
let Xt = !0;
const Dd = [];
function Gi() {
  Dd.push(Xt), (Xt = !1);
}
function Fi() {
  const i = Dd.pop();
  Xt = i === void 0 ? !0 : i;
}
function Gc(i) {
  const { cleanup: e } = i;
  if (((i.cleanup = void 0), e)) {
    const t = me;
    me = void 0;
    try {
      e();
    } finally {
      me = t;
    }
  }
}
let Xs = 0;
class C0 {
  constructor(e, t) {
    (this.sub = e),
      (this.dep = t),
      (this.version = t.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class fl {
  constructor(e) {
    (this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(e) {
    if (!me || !Xt || me === this.computed) return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== me)
      (t = this.activeLink = new C0(me, this)),
        me.deps
          ? ((t.prevDep = me.depsTail),
            (me.depsTail.nextDep = t),
            (me.depsTail = t))
          : (me.deps = me.depsTail = t),
        Yd(t);
    else if (t.version === -1 && ((t.version = this.version), t.nextDep)) {
      const n = t.nextDep;
      (n.prevDep = t.prevDep),
        t.prevDep && (t.prevDep.nextDep = n),
        (t.prevDep = me.depsTail),
        (t.nextDep = void 0),
        (me.depsTail.nextDep = t),
        (me.depsTail = t),
        me.deps === t && (me.deps = n);
    }
    return t;
  }
  trigger(e) {
    this.version++, Xs++, this.notify(e);
  }
  notify(e) {
    Lh();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Uh();
    }
  }
}
function Yd(i) {
  if ((i.dep.sc++, i.sub.flags & 4)) {
    const e = i.dep.computed;
    if (e && !i.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep) Yd(n);
    }
    const t = i.dep.subs;
    t !== i && ((i.prevSub = t), t && (t.nextSub = i)), (i.dep.subs = i);
  }
}
const mo = new WeakMap(),
  cn = Symbol(""),
  Qa = Symbol(""),
  Ds = Symbol("");
function He(i, e, t) {
  if (Xt && me) {
    let n = mo.get(i);
    n || mo.set(i, (n = new Map()));
    let s = n.get(t);
    s || (n.set(t, (s = new fl())), (s.map = n), (s.key = t)), s.track();
  }
}
function ci(i, e, t, n, s, r) {
  const o = mo.get(i);
  if (!o) {
    Xs++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Lh(), e === "clear")) o.forEach(l);
  else {
    const a = F(i),
      h = a && jh(t);
    if (a && t === "length") {
      const c = Number(n);
      o.forEach((f, u) => {
        (u === "length" || u === Ds || (!mi(u) && u >= c)) && l(f);
      });
    } else
      switch (
        ((t !== void 0 || o.has(void 0)) && l(o.get(t)), h && l(o.get(Ds)), e)
      ) {
        case "add":
          a ? h && l(o.get("length")) : (l(o.get(cn)), Tn(i) && l(o.get(Qa)));
          break;
        case "delete":
          a || (l(o.get(cn)), Tn(i) && l(o.get(Qa)));
          break;
        case "set":
          Tn(i) && l(o.get(cn));
          break;
      }
  }
  Uh();
}
function Z0(i, e) {
  const t = mo.get(i);
  return t && t.get(e);
}
function Sn(i) {
  const e = le(i);
  return e === i ? e : (He(e, "iterate", Ds), Zt(i) ? e : e.map(Ke));
}
function ul(i) {
  return He((i = le(i)), "iterate", Ds), i;
}
const R0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xl(this, Symbol.iterator, Ke);
  },
  concat(...i) {
    return Sn(this).concat(...i.map((e) => (F(e) ? Sn(e) : e)));
  },
  entries() {
    return Xl(this, "entries", (i) => ((i[1] = Ke(i[1])), i));
  },
  every(i, e) {
    return li(this, "every", i, e, void 0, arguments);
  },
  filter(i, e) {
    return li(this, "filter", i, e, (t) => t.map(Ke), arguments);
  },
  find(i, e) {
    return li(this, "find", i, e, Ke, arguments);
  },
  findIndex(i, e) {
    return li(this, "findIndex", i, e, void 0, arguments);
  },
  findLast(i, e) {
    return li(this, "findLast", i, e, Ke, arguments);
  },
  findLastIndex(i, e) {
    return li(this, "findLastIndex", i, e, void 0, arguments);
  },
  forEach(i, e) {
    return li(this, "forEach", i, e, void 0, arguments);
  },
  includes(...i) {
    return Dl(this, "includes", i);
  },
  indexOf(...i) {
    return Dl(this, "indexOf", i);
  },
  join(i) {
    return Sn(this).join(i);
  },
  lastIndexOf(...i) {
    return Dl(this, "lastIndexOf", i);
  },
  map(i, e) {
    return li(this, "map", i, e, void 0, arguments);
  },
  pop() {
    return ss(this, "pop");
  },
  push(...i) {
    return ss(this, "push", i);
  },
  reduce(i, ...e) {
    return Fc(this, "reduce", i, e);
  },
  reduceRight(i, ...e) {
    return Fc(this, "reduceRight", i, e);
  },
  shift() {
    return ss(this, "shift");
  },
  some(i, e) {
    return li(this, "some", i, e, void 0, arguments);
  },
  splice(...i) {
    return ss(this, "splice", i);
  },
  toReversed() {
    return Sn(this).toReversed();
  },
  toSorted(i) {
    return Sn(this).toSorted(i);
  },
  toSpliced(...i) {
    return Sn(this).toSpliced(...i);
  },
  unshift(...i) {
    return ss(this, "unshift", i);
  },
  values() {
    return Xl(this, "values", Ke);
  },
};
function Xl(i, e, t) {
  const n = ul(i),
    s = n[e]();
  return (
    n !== i &&
      !Zt(i) &&
      ((s._next = s.next),
      (s.next = () => {
        const r = s._next();
        return r.value && (r.value = t(r.value)), r;
      })),
    s
  );
}
const T0 = Array.prototype;
function li(i, e, t, n, s, r) {
  const o = ul(i),
    l = o !== i && !Zt(i),
    a = o[e];
  if (a !== T0[e]) {
    const f = a.apply(i, r);
    return l ? Ke(f) : f;
  }
  let h = t;
  o !== i &&
    (l
      ? (h = function (f, u) {
          return t.call(this, Ke(f), u, i);
        })
      : t.length > 2 &&
        (h = function (f, u) {
          return t.call(this, f, u, i);
        }));
  const c = a.call(o, h, n);
  return l && s ? s(c) : c;
}
function Fc(i, e, t, n) {
  const s = ul(i);
  let r = t;
  return (
    s !== i &&
      (Zt(i)
        ? t.length > 3 &&
          (r = function (o, l, a) {
            return t.call(this, o, l, a, i);
          })
        : (r = function (o, l, a) {
            return t.call(this, o, Ke(l), a, i);
          })),
    s[e](r, ...n)
  );
}
function Dl(i, e, t) {
  const n = le(i);
  He(n, "iterate", Ds);
  const s = n[e](...t);
  return (s === -1 || s === !1) && Nh(t[0])
    ? ((t[0] = le(t[0])), n[e](...t))
    : s;
}
function ss(i, e, t = []) {
  Gi(), Lh();
  const n = le(i)[e].apply(i, t);
  return Uh(), Fi(), n;
}
const A0 = Xh("__proto__,__v_isRef,__isVue"),
  jd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((i) => i !== "arguments" && i !== "caller")
      .map((i) => Symbol[i])
      .filter(mi)
  );
function M0(i) {
  mi(i) || (i = String(i));
  const e = le(this);
  return He(e, "has", i), e.hasOwnProperty(i);
}
class Ld {
  constructor(e = !1, t = !1) {
    (this._isReadonly = e), (this._isShallow = t);
  }
  get(e, t, n) {
    if (t === "__v_skip") return e.__v_skip;
    const s = this._isReadonly,
      r = this._isShallow;
    if (t === "__v_isReactive") return !s;
    if (t === "__v_isReadonly") return s;
    if (t === "__v_isShallow") return r;
    if (t === "__v_raw")
      return n === (s ? (r ? V0 : zd) : r ? qd : Vd).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
        ? e
        : void 0;
    const o = F(e);
    if (!s) {
      let a;
      if (o && (a = R0[t])) return a;
      if (t === "hasOwnProperty") return M0;
    }
    const l = Reflect.get(e, t, je(e) ? e : n);
    return (mi(t) ? jd.has(t) : A0(t)) || (s || He(e, "get", t), r)
      ? l
      : je(l)
      ? o && jh(t)
        ? l
        : l.value
      : ye(l)
      ? s
        ? Id(l)
        : zh(l)
      : l;
  }
}
class Ud extends Ld {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, n, s) {
    let r = e[t];
    if (!this._isShallow) {
      const a = pn(r);
      if (
        (!Zt(n) && !pn(n) && ((r = le(r)), (n = le(n))),
        !F(e) && je(r) && !je(n))
      )
        return a ? !1 : ((r.value = n), !0);
    }
    const o = F(e) && jh(t) ? Number(t) < e.length : fe(e, t),
      l = Reflect.set(e, t, n, je(e) ? e : s);
    return (
      e === le(s) && (o ? Xi(n, r) && ci(e, "set", t, n) : ci(e, "add", t, n)),
      l
    );
  }
  deleteProperty(e, t) {
    const n = fe(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && n && ci(e, "delete", t, void 0), s;
  }
  has(e, t) {
    const n = Reflect.has(e, t);
    return (!mi(t) || !jd.has(t)) && He(e, "has", t), n;
  }
  ownKeys(e) {
    return He(e, "iterate", F(e) ? "length" : cn), Reflect.ownKeys(e);
  }
}
class _0 extends Ld {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const E0 = new Ud(),
  W0 = new _0(),
  X0 = new Ud(!0);
const Pa = (i) => i,
  kr = (i) => Reflect.getPrototypeOf(i);
function D0(i, e, t) {
  return function (...n) {
    const s = this.__v_raw,
      r = le(s),
      o = Tn(r),
      l = i === "entries" || (i === Symbol.iterator && o),
      a = i === "keys" && o,
      h = s[i](...n),
      c = t ? Pa : e ? ka : Ke;
    return (
      !e && He(r, "iterate", a ? Qa : cn),
      {
        next() {
          const { value: f, done: u } = h.next();
          return u
            ? { value: f, done: u }
            : { value: l ? [c(f[0]), c(f[1])] : c(f), done: u };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function vr(i) {
  return function (...e) {
    return i === "delete" ? !1 : i === "clear" ? void 0 : this;
  };
}
function Y0(i, e) {
  const t = {
    get(s) {
      const r = this.__v_raw,
        o = le(r),
        l = le(s);
      i || (Xi(s, l) && He(o, "get", s), He(o, "get", l));
      const { has: a } = kr(o),
        h = e ? Pa : i ? ka : Ke;
      if (a.call(o, s)) return h(r.get(s));
      if (a.call(o, l)) return h(r.get(l));
      r !== o && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !i && He(le(s), "iterate", cn), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw,
        o = le(r),
        l = le(s);
      return (
        i || (Xi(s, l) && He(o, "has", s), He(o, "has", l)),
        s === l ? r.has(s) : r.has(s) || r.has(l)
      );
    },
    forEach(s, r) {
      const o = this,
        l = o.__v_raw,
        a = le(l),
        h = e ? Pa : i ? ka : Ke;
      return (
        !i && He(a, "iterate", cn),
        l.forEach((c, f) => s.call(r, h(c), h(f), o))
      );
    },
  };
  return (
    $e(
      t,
      i
        ? {
            add: vr("add"),
            set: vr("set"),
            delete: vr("delete"),
            clear: vr("clear"),
          }
        : {
            add(s) {
              !e && !Zt(s) && !pn(s) && (s = le(s));
              const r = le(this);
              return (
                kr(r).has.call(r, s) || (r.add(s), ci(r, "add", s, s)), this
              );
            },
            set(s, r) {
              !e && !Zt(r) && !pn(r) && (r = le(r));
              const o = le(this),
                { has: l, get: a } = kr(o);
              let h = l.call(o, s);
              h || ((s = le(s)), (h = l.call(o, s)));
              const c = a.call(o, s);
              return (
                o.set(s, r),
                h ? Xi(r, c) && ci(o, "set", s, r) : ci(o, "add", s, r),
                this
              );
            },
            delete(s) {
              const r = le(this),
                { has: o, get: l } = kr(r);
              let a = o.call(r, s);
              a || ((s = le(s)), (a = o.call(r, s))), l && l.call(r, s);
              const h = r.delete(s);
              return a && ci(r, "delete", s, void 0), h;
            },
            clear() {
              const s = le(this),
                r = s.size !== 0,
                o = s.clear();
              return r && ci(s, "clear", void 0, void 0), o;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      t[s] = D0(s, i, e);
    }),
    t
  );
}
function qh(i, e) {
  const t = Y0(i, e);
  return (n, s, r) =>
    s === "__v_isReactive"
      ? !i
      : s === "__v_isReadonly"
      ? i
      : s === "__v_raw"
      ? n
      : Reflect.get(fe(t, s) && s in n ? t : n, s, r);
}
const j0 = { get: qh(!1, !1) },
  L0 = { get: qh(!1, !0) },
  U0 = { get: qh(!0, !1) };
const Vd = new WeakMap(),
  qd = new WeakMap(),
  zd = new WeakMap(),
  V0 = new WeakMap();
function q0(i) {
  switch (i) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function z0(i) {
  return i.__v_skip || !Object.isExtensible(i) ? 0 : q0(d0(i));
}
function zh(i) {
  return pn(i) ? i : Ih(i, !1, E0, j0, Vd);
}
function I0(i) {
  return Ih(i, !1, X0, L0, qd);
}
function Id(i) {
  return Ih(i, !0, W0, U0, zd);
}
function Ih(i, e, t, n, s) {
  if (!ye(i) || (i.__v_raw && !(e && i.__v_isReactive))) return i;
  const r = s.get(i);
  if (r) return r;
  const o = z0(i);
  if (o === 0) return i;
  const l = new Proxy(i, o === 2 ? n : t);
  return s.set(i, l), l;
}
function An(i) {
  return pn(i) ? An(i.__v_raw) : !!(i && i.__v_isReactive);
}
function pn(i) {
  return !!(i && i.__v_isReadonly);
}
function Zt(i) {
  return !!(i && i.__v_isShallow);
}
function Nh(i) {
  return i ? !!i.__v_raw : !1;
}
function le(i) {
  const e = i && i.__v_raw;
  return e ? le(e) : i;
}
function N0(i) {
  return (
    !fe(i, "__v_skip") && Object.isExtensible(i) && Cd(i, "__v_skip", !0), i
  );
}
const Ke = (i) => (ye(i) ? zh(i) : i),
  ka = (i) => (ye(i) ? Id(i) : i);
function je(i) {
  return i ? i.__v_isRef === !0 : !1;
}
function B0(i) {
  return Nd(i, !1);
}
function Lv(i) {
  return Nd(i, !0);
}
function Nd(i, e) {
  return je(i) ? i : new G0(i, e);
}
class G0 {
  constructor(e, t) {
    (this.dep = new fl()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = t ? e : le(e)),
      (this._value = t ? e : Ke(e)),
      (this.__v_isShallow = t);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue,
      n = this.__v_isShallow || Zt(e) || pn(e);
    (e = n ? e : le(e)),
      Xi(e, t) &&
        ((this._rawValue = e),
        (this._value = n ? e : Ke(e)),
        this.dep.trigger());
  }
}
function Uv(i) {
  i.dep && i.dep.trigger();
}
function Bd(i) {
  return je(i) ? i.value : i;
}
function Vv(i) {
  return K(i) ? i() : Bd(i);
}
const F0 = {
  get: (i, e, t) => (e === "__v_raw" ? i : Bd(Reflect.get(i, e, t))),
  set: (i, e, t, n) => {
    const s = i[e];
    return je(s) && !je(t) ? ((s.value = t), !0) : Reflect.set(i, e, t, n);
  },
};
function Gd(i) {
  return An(i) ? i : new Proxy(i, F0);
}
class H0 {
  constructor(e) {
    (this.__v_isRef = !0), (this._value = void 0);
    const t = (this.dep = new fl()),
      { get: n, set: s } = e(t.track.bind(t), t.trigger.bind(t));
    (this._get = n), (this._set = s);
  }
  get value() {
    return (this._value = this._get());
  }
  set value(e) {
    this._set(e);
  }
}
function qv(i) {
  return new H0(i);
}
class K0 {
  constructor(e, t, n) {
    (this._object = e),
      (this._key = t),
      (this._defaultValue = n),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const e = this._object[this._key];
    return (this._value = e === void 0 ? this._defaultValue : e);
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return Z0(le(this._object), this._key);
  }
}
class J0 {
  constructor(e) {
    (this._getter = e),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0);
  }
  get value() {
    return (this._value = this._getter());
  }
}
function zv(i, e, t) {
  return je(i)
    ? i
    : K(i)
    ? new J0(i)
    : ye(i) && arguments.length > 1
    ? eb(i, e, t)
    : B0(i);
}
function eb(i, e, t) {
  const n = i[e];
  return je(n) ? n : new K0(i, e, t);
}
class tb {
  constructor(e, t, n) {
    (this.fn = e),
      (this.setter = t),
      (this._value = void 0),
      (this.dep = new fl(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Xs - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !t),
      (this.isSSR = n);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && me !== this))
      return _d(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Xd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function ib(i, e, t = !1) {
  let n, s;
  return K(i) ? (n = i) : ((n = i.get), (s = i.set)), new tb(n, s, t);
}
const $r = {},
  bo = new WeakMap();
let sn;
function nb(i, e = !1, t = sn) {
  if (t) {
    let n = bo.get(t);
    n || bo.set(t, (n = [])), n.push(i);
  }
}
function sb(i, e, t = pe) {
  const {
      immediate: n,
      deep: s,
      once: r,
      scheduler: o,
      augmentJob: l,
      call: a,
    } = t,
    h = (x) => (s ? x : Zt(x) || s === !1 || s === 0 ? fi(x, 1) : fi(x));
  let c,
    f,
    u,
    d,
    p = !1,
    O = !1;
  if (
    (je(i)
      ? ((f = () => i.value), (p = Zt(i)))
      : An(i)
      ? ((f = () => h(i)), (p = !0))
      : F(i)
      ? ((O = !0),
        (p = i.some((x) => An(x) || Zt(x))),
        (f = () =>
          i.map((x) => {
            if (je(x)) return x.value;
            if (An(x)) return h(x);
            if (K(x)) return a ? a(x, 2) : x();
          })))
      : K(i)
      ? e
        ? (f = a ? () => a(i, 2) : i)
        : (f = () => {
            if (u) {
              Gi();
              try {
                u();
              } finally {
                Fi();
              }
            }
            const x = sn;
            sn = c;
            try {
              return a ? a(i, 3, [d]) : i(d);
            } finally {
              sn = x;
            }
          })
      : (f = Wt),
    e && s)
  ) {
    const x = f,
      Q = s === !0 ? 1 / 0 : s;
    f = () => fi(x(), Q);
  }
  const m = v0(),
    b = () => {
      c.stop(), m && m.active && Yh(m.effects, c);
    };
  if (r && e) {
    const x = e;
    e = (...Q) => {
      x(...Q), b();
    };
  }
  let S = O ? new Array(i.length).fill($r) : $r;
  const P = (x) => {
    if (!(!(c.flags & 1) || (!c.dirty && !x)))
      if (e) {
        const Q = c.run();
        if (s || p || (O ? Q.some(($, C) => Xi($, S[C])) : Xi(Q, S))) {
          u && u();
          const $ = sn;
          sn = c;
          try {
            const C = [Q, S === $r ? void 0 : O && S[0] === $r ? [] : S, d];
            a ? a(e, 3, C) : e(...C), (S = Q);
          } finally {
            sn = $;
          }
        }
      } else c.run();
  };
  return (
    l && l(P),
    (c = new Ad(f)),
    (c.scheduler = o ? () => o(P, !1) : P),
    (d = (x) => nb(x, !1, c)),
    (u = c.onStop =
      () => {
        const x = bo.get(c);
        if (x) {
          if (a) a(x, 4);
          else for (const Q of x) Q();
          bo.delete(c);
        }
      }),
    e ? (n ? P(!0) : (S = c.run())) : o ? o(P.bind(null, !0), !0) : c.run(),
    (b.pause = c.pause.bind(c)),
    (b.resume = c.resume.bind(c)),
    (b.stop = b),
    b
  );
}
function fi(i, e = 1 / 0, t) {
  if (e <= 0 || !ye(i) || i.__v_skip || ((t = t || new Set()), t.has(i)))
    return i;
  if ((t.add(i), e--, je(i))) fi(i.value, e, t);
  else if (F(i)) for (let n = 0; n < i.length; n++) fi(i[n], e, t);
  else if (Pd(i) || Tn(i))
    i.forEach((n) => {
      fi(n, e, t);
    });
  else if ($d(i)) {
    for (const n in i) fi(i[n], e, t);
    for (const n of Object.getOwnPropertySymbols(i))
      Object.prototype.propertyIsEnumerable.call(i, n) && fi(i[n], e, t);
  }
  return i;
}
// END @vue/reactivity


// BEGIN @vue/runtime-core
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function dr(i, e, t, n) {
  try {
    return n ? i(...n) : i();
  } catch (s) {
    dl(s, e, t);
  }
}
function Dt(i, e, t, n) {
  if (K(i)) {
    const s = dr(i, e, t, n);
    return (
      s &&
        kd(s) &&
        s.catch((r) => {
          dl(r, e, t);
        }),
      s
    );
  }
  if (F(i)) {
    const s = [];
    for (let r = 0; r < i.length; r++) s.push(Dt(i[r], e, t, n));
    return s;
  }
}
function dl(i, e, t, n = !0) {
  const s = e ? e.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: o } =
      (e && e.appContext.config) || pe;
  if (e) {
    let l = e.parent;
    const a = e.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](i, a, h) === !1) return;
      }
      l = l.parent;
    }
    if (r) {
      Gi(), dr(r, null, 10, [i, a, h]), Fi();
      return;
    }
  }
  rb(i, t, s, n, o);
}
function rb(i, e, t, n = !0, s = !1) {
  if (s) throw i;
  console.error(i);
}
const rt = [];
let Gt = -1;
const Mn = [];
let vi = null,
  Qn = 0;
const Fd = Promise.resolve();
let yo = null;
function ob(i) {
  const e = yo || Fd;
  return i ? e.then(this ? i.bind(this) : i) : e;
}
function lb(i) {
  let e = Gt + 1,
    t = rt.length;
  for (; e < t; ) {
    const n = (e + t) >>> 1,
      s = rt[n],
      r = Ys(s);
    r < i || (r === i && s.flags & 2) ? (e = n + 1) : (t = n);
  }
  return e;
}
function Bh(i) {
  if (!(i.flags & 1)) {
    const e = Ys(i),
      t = rt[rt.length - 1];
    !t || (!(i.flags & 2) && e >= Ys(t)) ? rt.push(i) : rt.splice(lb(e), 0, i),
      (i.flags |= 1),
      Hd();
  }
}
function Hd() {
  yo || (yo = Fd.then(ep));
}
function Kd(i) {
  F(i)
    ? Mn.push(...i)
    : vi && i.id === -1
    ? vi.splice(Qn + 1, 0, i)
    : i.flags & 1 || (Mn.push(i), (i.flags |= 1)),
    Hd();
}
function Hc(i, e, t = Gt + 1) {
  for (; t < rt.length; t++) {
    const n = rt[t];
    if (n && n.flags & 2) {
      if (i && n.id !== i.uid) continue;
      rt.splice(t, 1),
        t--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Jd(i) {
  if (Mn.length) {
    const e = [...new Set(Mn)].sort((t, n) => Ys(t) - Ys(n));
    if (((Mn.length = 0), vi)) {
      vi.push(...e);
      return;
    }
    for (vi = e, Qn = 0; Qn < vi.length; Qn++) {
      const t = vi[Qn];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), (t.flags &= -2);
    }
    (vi = null), (Qn = 0);
  }
}
const Ys = (i) => (i.id == null ? (i.flags & 2 ? -1 : 1 / 0) : i.id);
function ep(i) {
  try {
    for (Gt = 0; Gt < rt.length; Gt++) {
      const e = rt[Gt];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        dr(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Gt < rt.length; Gt++) {
      const e = rt[Gt];
      e && (e.flags &= -2);
    }
    (Gt = -1),
      (rt.length = 0),
      Jd(),
      (yo = null),
      (rt.length || Mn.length) && ep();
  }
}
let Ye = null,
  tp = null;
function xo(i) {
  const e = Ye;
  return (Ye = i), (tp = (i && i.type.__scopeId) || null), e;
}
function ab(i, e = Ye, t) {
  if (!e || i._n) return i;
  const n = (...s) => {
    n._d && cf(-1);
    const r = xo(e);
    let o;
    try {
      o = i(...s);
    } finally {
      xo(r), n._d && cf(1);
    }
    return o;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function Iv(i, e) {
  if (Ye === null) return i;
  const t = yl(Ye),
    n = i.dirs || (i.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [r, o, l, a = pe] = e[s];
    r &&
      (K(r) && (r = { mounted: r, updated: r }),
      r.deep && fi(o),
      n.push({
        dir: r,
        instance: t,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return i;
}
function Ji(i, e, t, n) {
  const s = i.dirs,
    r = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[n];
    a && (Gi(), Dt(a, t, 8, [i.el, l, i, e]), Fi());
  }
}
const ip = Symbol("_vte"),
  np = (i) => i.__isTeleport,
  vs = (i) => i && (i.disabled || i.disabled === ""),
  Kc = (i) => i && (i.defer || i.defer === ""),
  Jc = (i) => typeof SVGElement < "u" && i instanceof SVGElement,
  ef = (i) => typeof MathMLElement == "function" && i instanceof MathMLElement,
  va = (i, e) => {
    const t = i && i.to;
    return we(t) ? (e ? e(t) : null) : t;
  },
  sp = {
    name: "Teleport",
    __isTeleport: !0,
    process(i, e, t, n, s, r, o, l, a, h) {
      const {
          mc: c,
          pc: f,
          pbc: u,
          o: { insert: d, querySelector: p, createText: O, createComment: m },
        } = h,
        b = vs(e.props);
      let { shapeFlag: S, children: P, dynamicChildren: x } = e;
      if (i == null) {
        const Q = (e.el = O("")),
          $ = (e.anchor = O(""));
        d(Q, t, n), d($, t, n);
        const C = (_, D) => {
            S & 16 &&
              (s && s.isCE && (s.ce._teleportTarget = _),
              c(P, _, D, s, r, o, l, a));
          },
          j = () => {
            const _ = (e.target = va(e.props, p)),
              D = rp(_, e, O, d);
            _ &&
              (o !== "svg" && Jc(_)
                ? (o = "svg")
                : o !== "mathml" && ef(_) && (o = "mathml"),
              b || (C(_, D), eo(e, !1)));
          };
        b && (C(t, $), eo(e, !0)),
          Kc(e.props)
            ? Ee(() => {
                j(), (e.el.__isMounted = !0);
              }, r)
            : j();
      } else {
        if (Kc(e.props) && !i.el.__isMounted) {
          Ee(() => {
            sp.process(i, e, t, n, s, r, o, l, a, h), delete i.el.__isMounted;
          }, r);
          return;
        }
        (e.el = i.el), (e.targetStart = i.targetStart);
        const Q = (e.anchor = i.anchor),
          $ = (e.target = i.target),
          C = (e.targetAnchor = i.targetAnchor),
          j = vs(i.props),
          _ = j ? t : $,
          D = j ? Q : C;
        if (
          (o === "svg" || Jc($)
            ? (o = "svg")
            : (o === "mathml" || ef($)) && (o = "mathml"),
          x
            ? (u(i.dynamicChildren, x, _, s, r, o, l), tc(i, e, !0))
            : a || f(i, e, _, D, s, r, o, l, !1),
          b)
        )
          j
            ? e.props &&
              i.props &&
              e.props.to !== i.props.to &&
              (e.props.to = i.props.to)
            : Cr(e, t, Q, h, 1);
        else if ((e.props && e.props.to) !== (i.props && i.props.to)) {
          const U = (e.target = va(e.props, p));
          U && Cr(e, U, null, h, 0);
        } else j && Cr(e, $, C, h, 1);
        eo(e, b);
      }
    },
    remove(i, e, t, { um: n, o: { remove: s } }, r) {
      const {
        shapeFlag: o,
        children: l,
        anchor: a,
        targetStart: h,
        targetAnchor: c,
        target: f,
        props: u,
      } = i;
      if ((f && (s(h), s(c)), r && s(a), o & 16)) {
        const d = r || !vs(u);
        for (let p = 0; p < l.length; p++) {
          const O = l[p];
          n(O, e, t, d, !!O.dynamicChildren);
        }
      }
    },
    move: Cr,
    hydrate: hb,
  };
function Cr(i, e, t, { o: { insert: n }, m: s }, r = 2) {
  r === 0 && n(i.targetAnchor, e, t);
  const { el: o, anchor: l, shapeFlag: a, children: h, props: c } = i,
    f = r === 2;
  if ((f && n(o, e, t), (!f || vs(c)) && a & 16))
    for (let u = 0; u < h.length; u++) s(h[u], e, t, 2);
  f && n(l, e, t);
}
function hb(
  i,
  e,
  t,
  n,
  s,
  r,
  {
    o: {
      nextSibling: o,
      parentNode: l,
      querySelector: a,
      insert: h,
      createText: c,
    },
  },
  f
) {
  const u = (e.target = va(e.props, a));
  if (u) {
    const d = vs(e.props),
      p = u._lpa || u.firstChild;
    if (e.shapeFlag & 16)
      if (d)
        (e.anchor = f(o(i), e, l(i), t, n, s, r)),
          (e.targetStart = p),
          (e.targetAnchor = p && o(p));
      else {
        e.anchor = o(i);
        let O = p;
        for (; O; ) {
          if (O && O.nodeType === 8) {
            if (O.data === "teleport start anchor") e.targetStart = O;
            else if (O.data === "teleport anchor") {
              (e.targetAnchor = O),
                (u._lpa = e.targetAnchor && o(e.targetAnchor));
              break;
            }
          }
          O = o(O);
        }
        e.targetAnchor || rp(u, e, c, h), f(p && o(p), e, u, t, n, s, r);
      }
    eo(e, d);
  }
  return e.anchor && o(e.anchor);
}
const Nv = sp;
function eo(i, e) {
  const t = i.ctx;
  if (t && t.ut) {
    let n, s;
    for (
      e
        ? ((n = i.el), (s = i.anchor))
        : ((n = i.targetStart), (s = i.targetAnchor));
      n && n !== s;

    )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
function rp(i, e, t, n) {
  const s = (e.targetStart = t("")),
    r = (e.targetAnchor = t(""));
  return (s[ip] = r), i && (n(s, i), n(r, i)), r;
}
const $i = Symbol("_leaveCb"),
  Zr = Symbol("_enterCb");
function op() {
  const i = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    gl(() => {
      i.isMounted = !0;
    }),
    Hh(() => {
      i.isUnmounting = !0;
    }),
    i
  );
}
const kt = [Function, Array],
  lp = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: kt,
    onEnter: kt,
    onAfterEnter: kt,
    onEnterCancelled: kt,
    onBeforeLeave: kt,
    onLeave: kt,
    onAfterLeave: kt,
    onLeaveCancelled: kt,
    onBeforeAppear: kt,
    onAppear: kt,
    onAfterAppear: kt,
    onAppearCancelled: kt,
  },
  ap = (i) => {
    const e = i.subTree;
    return e.component ? ap(e.component) : e;
  },
  cb = {
    name: "BaseTransition",
    props: lp,
    setup(i, { slots: e }) {
      const t = pr(),
        n = op();
      return () => {
        const s = e.default && Gh(e.default(), !0);
        if (!s || !s.length) return;
        const r = hp(s),
          o = le(i),
          { mode: l } = o;
        if (n.isLeaving) return Yl(r);
        const a = tf(r);
        if (!a) return Yl(r);
        let h = js(a, o, n, t, (f) => (h = f));
        a.type !== Je && ji(a, h);
        let c = t.subTree && tf(t.subTree);
        if (c && c.type !== Je && !Ti(a, c) && ap(t).type !== Je) {
          let f = js(c, o, n, t);
          if ((ji(c, f), l === "out-in" && a.type !== Je))
            return (
              (n.isLeaving = !0),
              (f.afterLeave = () => {
                (n.isLeaving = !1),
                  t.job.flags & 8 || t.update(),
                  delete f.afterLeave,
                  (c = void 0);
              }),
              Yl(r)
            );
          l === "in-out" && a.type !== Je
            ? (f.delayLeave = (u, d, p) => {
                const O = cp(n, c);
                (O[String(c.key)] = c),
                  (u[$i] = () => {
                    d(), (u[$i] = void 0), delete h.delayedLeave, (c = void 0);
                  }),
                  (h.delayedLeave = () => {
                    p(), delete h.delayedLeave, (c = void 0);
                  });
              })
            : (c = void 0);
        } else c && (c = void 0);
        return r;
      };
    },
  };
function hp(i) {
  let e = i[0];
  if (i.length > 1) {
    for (const t of i)
      if (t.type !== Je) {
        e = t;
        break;
      }
  }
  return e;
}
const fb = cb;
function cp(i, e) {
  const { leavingVNodes: t } = i;
  let n = t.get(e.type);
  return n || ((n = Object.create(null)), t.set(e.type, n)), n;
}
function js(i, e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: h,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: u,
      onLeave: d,
      onAfterLeave: p,
      onLeaveCancelled: O,
      onBeforeAppear: m,
      onAppear: b,
      onAfterAppear: S,
      onAppearCancelled: P,
    } = e,
    x = String(i.key),
    Q = cp(t, i),
    $ = (_, D) => {
      _ && Dt(_, n, 9, D);
    },
    C = (_, D) => {
      const U = D[1];
      $(_, D),
        F(_) ? _.every((R) => R.length <= 1) && U() : _.length <= 1 && U();
    },
    j = {
      mode: o,
      persisted: l,
      beforeEnter(_) {
        let D = a;
        if (!t.isMounted)
          if (r) D = m || a;
          else return;
        _[$i] && _[$i](!0);
        const U = Q[x];
        U && Ti(i, U) && U.el[$i] && U.el[$i](), $(D, [_]);
      },
      enter(_) {
        let D = h,
          U = c,
          R = f;
        if (!t.isMounted)
          if (r) (D = b || h), (U = S || c), (R = P || f);
          else return;
        let B = !1;
        const H = (_[Zr] = (re) => {
          B ||
            ((B = !0),
            re ? $(R, [_]) : $(U, [_]),
            j.delayedLeave && j.delayedLeave(),
            (_[Zr] = void 0));
        });
        D ? C(D, [_, H]) : H();
      },
      leave(_, D) {
        const U = String(i.key);
        if ((_[Zr] && _[Zr](!0), t.isUnmounting)) return D();
        $(u, [_]);
        let R = !1;
        const B = (_[$i] = (H) => {
          R ||
            ((R = !0),
            D(),
            H ? $(O, [_]) : $(p, [_]),
            (_[$i] = void 0),
            Q[U] === i && delete Q[U]);
        });
        (Q[U] = i), d ? C(d, [_, B]) : B();
      },
      clone(_) {
        const D = js(_, e, t, n, s);
        return s && s(D), D;
      },
    };
  return j;
}
function Yl(i) {
  if (pl(i)) return (i = di(i)), (i.children = null), i;
}
function tf(i) {
  if (!pl(i)) return np(i.type) && i.children ? hp(i.children) : i;
  const { shapeFlag: e, children: t } = i;
  if (t) {
    if (e & 16) return t[0];
    if (e & 32 && K(t.default)) return t.default();
  }
}
function ji(i, e) {
  i.shapeFlag & 6 && i.component
    ? ((i.transition = e), ji(i.component.subTree, e))
    : i.shapeFlag & 128
    ? ((i.ssContent.transition = e.clone(i.ssContent)),
      (i.ssFallback.transition = e.clone(i.ssFallback)))
    : (i.transition = e);
}
function Gh(i, e = !1, t) {
  let n = [],
    s = 0;
  for (let r = 0; r < i.length; r++) {
    let o = i[r];
    const l = t == null ? o.key : String(t) + String(o.key != null ? o.key : r);
    o.type === ot
      ? (o.patchFlag & 128 && s++, (n = n.concat(Gh(o.children, e, l))))
      : (e || o.type !== Je) && n.push(l != null ? di(o, { key: l }) : o);
  }
  if (s > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */ function Bv(i, e) {
  return K(i) ? $e({ name: i.name }, e, { setup: i }) : i;
}
function fp(i) {
  i.ids = [i.ids[0] + i.ids[2]++ + "-", 0, 0];
}
function So(i, e, t, n, s = !1) {
  if (F(i)) {
    i.forEach((p, O) => So(p, e && (F(e) ? e[O] : e), t, n, s));
    return;
  }
  if (fn(n) && !s) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      So(i, e, t, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? yl(n.component) : n.el,
    o = s ? null : r,
    { i: l, r: a } = i,
    h = e && e.r,
    c = l.refs === pe ? (l.refs = {}) : l.refs,
    f = l.setupState,
    u = le(f),
    d = f === pe ? () => !1 : (p) => fe(u, p);
  if (
    (h != null &&
      h !== a &&
      (we(h)
        ? ((c[h] = null), d(h) && (f[h] = null))
        : je(h) && (h.value = null)),
    K(a))
  )
    dr(a, l, 12, [o, c]);
  else {
    const p = we(a),
      O = je(a);
    if (p || O) {
      const m = () => {
        if (i.f) {
          const b = p ? (d(a) ? f[a] : c[a]) : a.value;
          s
            ? F(b) && Yh(b, r)
            : F(b)
            ? b.includes(r) || b.push(r)
            : p
            ? ((c[a] = [r]), d(a) && (f[a] = c[a]))
            : ((a.value = [r]), i.k && (c[i.k] = a.value));
        } else
          p
            ? ((c[a] = o), d(a) && (f[a] = o))
            : O && ((a.value = o), i.k && (c[i.k] = o));
      };
      o ? ((m.id = -1), Ee(m, t)) : m();
    }
  }
}
al().requestIdleCallback;
al().cancelIdleCallback;
const fn = (i) => !!i.type.__asyncLoader,
  pl = (i) => i.type.__isKeepAlive,
  ub = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(i, { slots: e }) {
      const t = pr(),
        n = t.ctx;
      if (!n.renderer)
        return () => {
          const S = e.default && e.default();
          return S && S.length === 1 ? S[0] : S;
        };
      const s = new Map(),
        r = new Set();
      let o = null;
      const l = t.suspense,
        {
          renderer: {
            p: a,
            m: h,
            um: c,
            o: { createElement: f },
          },
        } = n,
        u = f("div");
      (n.activate = (S, P, x, Q, $) => {
        const C = S.component;
        h(S, P, x, 0, l),
          a(C.vnode, S, P, x, C, l, Q, S.slotScopeIds, $),
          Ee(() => {
            (C.isDeactivated = !1), C.a && Qs(C.a);
            const j = S.props && S.props.onVnodeMounted;
            j && vt(j, C.parent, S);
          }, l);
      }),
        (n.deactivate = (S) => {
          const P = S.component;
          Qo(P.m),
            Qo(P.a),
            h(S, u, null, 1, l),
            Ee(() => {
              P.da && Qs(P.da);
              const x = S.props && S.props.onVnodeUnmounted;
              x && vt(x, P.parent, S), (P.isDeactivated = !0);
            }, l);
        });
      function d(S) {
        jl(S), c(S, t, l, !0);
      }
      function p(S) {
        s.forEach((P, x) => {
          const Q = _a(P.type);
          Q && !S(Q) && O(x);
        });
      }
      function O(S) {
        const P = s.get(S);
        P && (!o || !Ti(P, o)) ? d(P) : o && jl(o), s.delete(S), r.delete(S);
      }
      Cs(
        () => [i.include, i.exclude],
        ([S, P]) => {
          S && p((x) => ps(S, x)), P && p((x) => !ps(P, x));
        },
        { flush: "post", deep: !0 }
      );
      let m = null;
      const b = () => {
        m != null &&
          (Po(t.subTree.type)
            ? Ee(() => {
                s.set(m, Rr(t.subTree));
              }, t.subTree.suspense)
            : s.set(m, Rr(t.subTree)));
      };
      return (
        gl(b),
        Fh(b),
        Hh(() => {
          s.forEach((S) => {
            const { subTree: P, suspense: x } = t,
              Q = Rr(P);
            if (S.type === Q.type && S.key === Q.key) {
              jl(Q);
              const $ = Q.component.da;
              $ && Ee($, x);
              return;
            }
            d(S);
          });
        }),
        () => {
          if (((m = null), !e.default)) return (o = null);
          const S = e.default(),
            P = S[0];
          if (S.length > 1) return (o = null), S;
          if (!Un(P) || (!(P.shapeFlag & 4) && !(P.shapeFlag & 128)))
            return (o = null), P;
          let x = Rr(P);
          if (x.type === Je) return (o = null), x;
          const Q = x.type,
            $ = _a(fn(x) ? x.type.__asyncResolved || {} : Q),
            { include: C, exclude: j, max: _ } = i;
          if ((C && (!$ || !ps(C, $))) || (j && $ && ps(j, $)))
            return (x.shapeFlag &= -257), (o = x), P;
          const D = x.key == null ? Q : x.key,
            U = s.get(D);
          return (
            x.el && ((x = di(x)), P.shapeFlag & 128 && (P.ssContent = x)),
            (m = D),
            U
              ? ((x.el = U.el),
                (x.component = U.component),
                x.transition && ji(x, x.transition),
                (x.shapeFlag |= 512),
                r.delete(D),
                r.add(D))
              : (r.add(D),
                _ && r.size > parseInt(_, 10) && O(r.values().next().value)),
            (x.shapeFlag |= 256),
            (o = x),
            Po(P.type) ? P : x
          );
        }
      );
    },
  },
  Gv = ub;
function ps(i, e) {
  return F(i)
    ? i.some((t) => ps(t, e))
    : we(i)
    ? i.split(",").includes(e)
    : u0(i)
    ? ((i.lastIndex = 0), i.test(e))
    : !1;
}
function db(i, e) {
  up(i, "a", e);
}
function pb(i, e) {
  up(i, "da", e);
}
function up(i, e, t = ze) {
  const n =
    i.__wdc ||
    (i.__wdc = () => {
      let s = t;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return i();
    });
  if ((Ol(e, n, t), t)) {
    let s = t.parent;
    for (; s && s.parent; )
      pl(s.parent.vnode) && Ob(n, e, t, s), (s = s.parent);
  }
}
function Ob(i, e, t, n) {
  const s = Ol(e, i, n, !0);
  Kh(() => {
    Yh(n[e], s);
  }, t);
}
function jl(i) {
  (i.shapeFlag &= -257), (i.shapeFlag &= -513);
}
function Rr(i) {
  return i.shapeFlag & 128 ? i.ssContent : i;
}
function Ol(i, e, t = ze, n = !1) {
  if (t) {
    const s = t[i] || (t[i] = []),
      r =
        e.__weh ||
        (e.__weh = (...o) => {
          Gi();
          const l = Or(t),
            a = Dt(e, t, i, o);
          return l(), Fi(), a;
        });
    return n ? s.unshift(r) : s.push(r), r;
  }
}
const bi =
    (i) =>
    (e, t = ze) => {
      (!Us || i === "sp") && Ol(i, (...n) => e(...n), t);
    },
  gb = bi("bm"),
  gl = bi("m"),
  dp = bi("bu"),
  Fh = bi("u"),
  Hh = bi("bum"),
  Kh = bi("um"),
  mb = bi("sp"),
  bb = bi("rtg"),
  yb = bi("rtc");
function xb(i, e = ze) {
  Ol("ec", i, e);
}
const pp = "components";
function Fv(i, e) {
  return gp(pp, i, !0, e) || i;
}
const Op = Symbol.for("v-ndc");
function Hv(i) {
  return we(i) ? gp(pp, i, !1) || i : i || Op;
}
function gp(i, e, t = !0, n = !1) {
  const s = Ye || ze;
  if (s) {
    const r = s.type;
    {
      const l = _a(r, !1);
      if (l && (l === e || l === Tt(e) || l === ll(Tt(e)))) return r;
    }
    const o = nf(s[i] || r[i], e) || nf(s.appContext[i], e);
    return !o && n ? r : o;
  }
}
function nf(i, e) {
  return i && (i[e] || i[Tt(e)] || i[ll(Tt(e))]);
}
function Kv(i, e, t, n) {
  let s;
  const r = t,
    o = F(i);
  if (o || we(i)) {
    const l = o && An(i);
    let a = !1;
    l && ((a = !Zt(i)), (i = ul(i))), (s = new Array(i.length));
    for (let h = 0, c = i.length; h < c; h++)
      s[h] = e(a ? Ke(i[h]) : i[h], h, void 0, r);
  } else if (typeof i == "number") {
    s = new Array(i);
    for (let l = 0; l < i; l++) s[l] = e(l + 1, l, void 0, r);
  } else if (ye(i))
    if (i[Symbol.iterator]) s = Array.from(i, (l, a) => e(l, a, void 0, r));
    else {
      const l = Object.keys(i);
      s = new Array(l.length);
      for (let a = 0, h = l.length; a < h; a++) {
        const c = l[a];
        s[a] = e(i[c], c, a, r);
      }
    }
  else s = [];
  return s;
}
function Jv(i, e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (F(n)) for (let s = 0; s < n.length; s++) i[n[s].name] = n[s].fn;
    else
      n &&
        (i[n.name] = n.key
          ? (...s) => {
              const r = n.fn(...s);
              return r && (r.key = n.key), r;
            }
          : n.fn);
  }
  return i;
}
function e$(i, e, t = {}, n, s) {
  if (Ye.ce || (Ye.parent && fn(Ye.parent) && Ye.parent.ce))
    return (
      e !== "default" && (t.name = e),
      Ta(),
      Aa(ot, null, [tt("slot", t, n && n())], 64)
    );
  let r = i[e];
  r && r._c && (r._d = !1), Ta();
  const o = r && mp(r(t)),
    l = t.key || (o && o.key),
    a = Aa(
      ot,
      { key: (l && !mi(l) ? l : `_${e}`) + (!o && n ? "_fb" : "") },
      o || (n ? n() : []),
      o && i._ === 1 ? 64 : -2
    );
  return (
    !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
  );
}
function mp(i) {
  return i.some((e) =>
    Un(e) ? !(e.type === Je || (e.type === ot && !mp(e.children))) : !0
  )
    ? i
    : null;
}
const $a = (i) => (i ? (Ep(i) ? yl(i) : $a(i.parent)) : null),
  $s = $e(Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => $a(i.parent),
    $root: (i) => $a(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => Jh(i),
    $forceUpdate: (i) =>
      i.f ||
      (i.f = () => {
        Bh(i.update);
      }),
    $nextTick: (i) => i.n || (i.n = ob.bind(i.proxy)),
    $watch: (i) => Vb.bind(i),
  }),
  Ll = (i, e) => i !== pe && !i.__isScriptSetup && fe(i, e),
  Sb = {
    get({ _: i }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: t,
        setupState: n,
        data: s,
        props: r,
        accessCache: o,
        type: l,
        appContext: a,
      } = i;
      let h;
      if (e[0] !== "$") {
        const d = o[e];
        if (d !== void 0)
          switch (d) {
            case 1:
              return n[e];
            case 2:
              return s[e];
            case 4:
              return t[e];
            case 3:
              return r[e];
          }
        else {
          if (Ll(n, e)) return (o[e] = 1), n[e];
          if (s !== pe && fe(s, e)) return (o[e] = 2), s[e];
          if ((h = i.propsOptions[0]) && fe(h, e)) return (o[e] = 3), r[e];
          if (t !== pe && fe(t, e)) return (o[e] = 4), t[e];
          Ca && (o[e] = 0);
        }
      }
      const c = $s[e];
      let f, u;
      if (c) return e === "$attrs" && He(i.attrs, "get", ""), c(i);
      if ((f = l.__cssModules) && (f = f[e])) return f;
      if (t !== pe && fe(t, e)) return (o[e] = 4), t[e];
      if (((u = a.config.globalProperties), fe(u, e))) return u[e];
    },
    set({ _: i }, e, t) {
      const { data: n, setupState: s, ctx: r } = i;
      return Ll(s, e)
        ? ((s[e] = t), !0)
        : n !== pe && fe(n, e)
        ? ((n[e] = t), !0)
        : fe(i.props, e) || (e[0] === "$" && e.slice(1) in i)
        ? !1
        : ((r[e] = t), !0);
    },
    has(
      {
        _: {
          data: i,
          setupState: e,
          accessCache: t,
          ctx: n,
          appContext: s,
          propsOptions: r,
        },
      },
      o
    ) {
      let l;
      return (
        !!t[o] ||
        (i !== pe && fe(i, o)) ||
        Ll(e, o) ||
        ((l = r[0]) && fe(l, o)) ||
        fe(n, o) ||
        fe($s, o) ||
        fe(s.config.globalProperties, o)
      );
    },
    defineProperty(i, e, t) {
      return (
        t.get != null
          ? (i._.accessCache[e] = 0)
          : fe(t, "value") && this.set(i, e, t.value, null),
        Reflect.defineProperty(i, e, t)
      );
    },
  };
function t$() {
  return wb().slots;
}
function wb() {
  const i = pr();
  return i.setupContext || (i.setupContext = Xp(i));
}
function sf(i) {
  return F(i) ? i.reduce((e, t) => ((e[t] = null), e), {}) : i;
}
let Ca = !0;
function Qb(i) {
  const e = Jh(i),
    t = i.proxy,
    n = i.ctx;
  (Ca = !1), e.beforeCreate && rf(e.beforeCreate, i, "bc");
  const {
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: h,
    created: c,
    beforeMount: f,
    mounted: u,
    beforeUpdate: d,
    updated: p,
    activated: O,
    deactivated: m,
    beforeDestroy: b,
    beforeUnmount: S,
    destroyed: P,
    unmounted: x,
    render: Q,
    renderTracked: $,
    renderTriggered: C,
    errorCaptured: j,
    serverPrefetch: _,
    expose: D,
    inheritAttrs: U,
    components: R,
    directives: B,
    filters: H,
  } = e;
  if ((h && Pb(h, n, null), o))
    for (const ie in o) {
      const te = o[ie];
      K(te) && (n[ie] = te.bind(t));
    }
  if (s) {
    const ie = s.call(t, t);
    ye(ie) && (i.data = zh(ie));
  }
  if (((Ca = !0), r))
    for (const ie in r) {
      const te = r[ie],
        Ce = K(te) ? te.bind(t, t) : K(te.get) ? te.get.bind(t, t) : Wt,
        Qe = !K(te) && K(te.set) ? te.set.bind(t) : Wt,
        Ze = h1({ get: Ce, set: Qe });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Ze.value,
        set: (ke) => (Ze.value = ke),
      });
    }
  if (l) for (const ie in l) bp(l[ie], n, t, ie);
  if (a) {
    const ie = K(a) ? a.call(t) : a;
    Reflect.ownKeys(ie).forEach((te) => {
      Rb(te, ie[te]);
    });
  }
  c && rf(c, i, "c");
  function oe(ie, te) {
    F(te) ? te.forEach((Ce) => ie(Ce.bind(t))) : te && ie(te.bind(t));
  }
  if (
    (oe(gb, f),
    oe(gl, u),
    oe(dp, d),
    oe(Fh, p),
    oe(db, O),
    oe(pb, m),
    oe(xb, j),
    oe(yb, $),
    oe(bb, C),
    oe(Hh, S),
    oe(Kh, x),
    oe(mb, _),
    F(D))
  )
    if (D.length) {
      const ie = i.exposed || (i.exposed = {});
      D.forEach((te) => {
        Object.defineProperty(ie, te, {
          get: () => t[te],
          set: (Ce) => (t[te] = Ce),
        });
      });
    } else i.exposed || (i.exposed = {});
  Q && i.render === Wt && (i.render = Q),
    U != null && (i.inheritAttrs = U),
    R && (i.components = R),
    B && (i.directives = B),
    _ && fp(i);
}
function Pb(i, e, t = Wt) {
  F(i) && (i = Za(i));
  for (const n in i) {
    const s = i[n];
    let r;
    ye(s)
      ? "default" in s
        ? (r = to(s.from || n, s.default, !0))
        : (r = to(s.from || n))
      : (r = to(s)),
      je(r)
        ? Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (o) => (r.value = o),
          })
        : (e[n] = r);
  }
}
function rf(i, e, t) {
  Dt(F(i) ? i.map((n) => n.bind(e.proxy)) : i.bind(e.proxy), e, t);
}
function bp(i, e, t, n) {
  let s = n.includes(".") ? Rp(t, n) : () => t[n];
  if (we(i)) {
    const r = e[i];
    K(r) && Cs(s, r);
  } else if (K(i)) Cs(s, i.bind(t));
  else if (ye(i))
    if (F(i)) i.forEach((r) => bp(r, e, t, n));
    else {
      const r = K(i.handler) ? i.handler.bind(t) : e[i.handler];
      K(r) && Cs(s, r, i);
    }
}
function Jh(i) {
  const e = i.type,
    { mixins: t, extends: n } = e,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = i.appContext,
    l = r.get(e);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !t && !n
      ? (a = e)
      : ((a = {}), s.length && s.forEach((h) => wo(a, h, o, !0)), wo(a, e, o)),
    ye(e) && r.set(e, a),
    a
  );
}
function wo(i, e, t, n = !1) {
  const { mixins: s, extends: r } = e;
  r && wo(i, r, t, !0), s && s.forEach((o) => wo(i, o, t, !0));
  for (const o in e)
    if (!(n && o === "expose")) {
      const l = kb[o] || (t && t[o]);
      i[o] = l ? l(i[o], e[o]) : e[o];
    }
  return i;
}
const kb = {
  data: of,
  props: lf,
  emits: lf,
  methods: Os,
  computed: Os,
  beforeCreate: nt,
  created: nt,
  beforeMount: nt,
  mounted: nt,
  beforeUpdate: nt,
  updated: nt,
  beforeDestroy: nt,
  beforeUnmount: nt,
  destroyed: nt,
  unmounted: nt,
  activated: nt,
  deactivated: nt,
  errorCaptured: nt,
  serverPrefetch: nt,
  components: Os,
  directives: Os,
  watch: $b,
  provide: of,
  inject: vb,
};
function of(i, e) {
  return e
    ? i
      ? function () {
          return $e(
            K(i) ? i.call(this, this) : i,
            K(e) ? e.call(this, this) : e
          );
        }
      : e
    : i;
}
function vb(i, e) {
  return Os(Za(i), Za(e));
}
function Za(i) {
  if (F(i)) {
    const e = {};
    for (let t = 0; t < i.length; t++) e[i[t]] = i[t];
    return e;
  }
  return i;
}
function nt(i, e) {
  return i ? [...new Set([].concat(i, e))] : e;
}
function Os(i, e) {
  return i ? $e(Object.create(null), i, e) : e;
}
function lf(i, e) {
  return i
    ? F(i) && F(e)
      ? [...new Set([...i, ...e])]
      : $e(Object.create(null), sf(i), sf(eval('e ?? {}')))
    : e;
}
function $b(i, e) {
  if (!i) return e;
  if (!e) return i;
  const t = $e(Object.create(null), i);
  for (const n in e) t[n] = nt(i[n], e[n]);
  return t;
}
function yp() {
  return {
    app: null,
    config: {
      isNativeTag: c0,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Cb = 0;
function Zb(i, e) {
  return function (n, s = null) {
    K(n) || (n = $e({}, n)), s != null && !ye(s) && (s = null);
    const r = yp(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const h = (r.app = {
      _uid: Cb++,
      _component: n,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: f1,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          o.has(c) ||
            (c && K(c.install)
              ? (o.add(c), c.install(h, ...f))
              : K(c) && (o.add(c), c(h, ...f))),
          h
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), h;
      },
      component(c, f) {
        return f ? ((r.components[c] = f), h) : r.components[c];
      },
      directive(c, f) {
        return f ? ((r.directives[c] = f), h) : r.directives[c];
      },
      mount(c, f, u) {
        if (!a) {
          const d = h._ceVNode || tt(n, s);
          return (
            (d.appContext = r),
            u === !0 ? (u = "svg") : u === !1 && (u = void 0),
            f && e ? e(d, c) : i(d, c, u),
            (a = !0),
            (h._container = c),
            (c.__vue_app__ = h),
            yl(d.component)
          );
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a &&
          (Dt(l, h._instance, 16),
          i(null, h._container),
          delete h._container.__vue_app__);
      },
      provide(c, f) {
        return (r.provides[c] = f), h;
      },
      runWithContext(c) {
        const f = _n;
        _n = h;
        try {
          return c();
        } finally {
          _n = f;
        }
      },
    });
    return h;
  };
}
let _n = null;
function Rb(i, e) {
  if (ze) {
    let t = ze.provides;
    const n = ze.parent && ze.parent.provides;
    n === t && (t = ze.provides = Object.create(n)), (t[i] = e);
  }
}
function to(i, e, t = !1) {
  const n = ze || Ye;
  if (n || _n) {
    const s = _n
      ? _n._context.provides
      : n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : void 0;
    if (s && i in s) return s[i];
    if (arguments.length > 1) return t && K(e) ? e.call(n && n.proxy) : e;
  }
}
const xp = {},
  Sp = () => Object.create(xp),
  wp = (i) => Object.getPrototypeOf(i) === xp;
function Tb(i, e, t, n = !1) {
  const s = {},
    r = Sp();
  (i.propsDefaults = Object.create(null)), Qp(i, e, s, r);
  for (const o in i.propsOptions[0]) o in s || (s[o] = void 0);
  t ? (i.props = n ? s : I0(s)) : i.type.props ? (i.props = s) : (i.props = r),
    (i.attrs = r);
}
function Ab(i, e, t, n) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: o },
    } = i,
    l = le(s),
    [a] = i.propsOptions;
  let h = !1;
  if ((n || o > 0) && !(o & 16)) {
    if (o & 8) {
      const c = i.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let u = c[f];
        if (ml(i.emitsOptions, u)) continue;
        const d = e[u];
        if (a)
          if (fe(r, u)) d !== r[u] && ((r[u] = d), (h = !0));
          else {
            const p = Tt(u);
            s[p] = Ra(a, l, p, d, i, !1);
          }
        else d !== r[u] && ((r[u] = d), (h = !0));
      }
    }
  } else {
    Qp(i, e, s, r) && (h = !0);
    let c;
    for (const f in l)
      (!e || (!fe(e, f) && ((c = Bi(f)) === f || !fe(e, c)))) &&
        (a
          ? t &&
            (t[f] !== void 0 || t[c] !== void 0) &&
            (s[f] = Ra(a, l, f, void 0, i, !0))
          : delete s[f]);
    if (r !== l)
      for (const f in r) (!e || !fe(e, f)) && (delete r[f], (h = !0));
  }
  h && ci(i.attrs, "set", "");
}
function Qp(i, e, t, n) {
  const [s, r] = i.propsOptions;
  let o = !1,
    l;
  if (e)
    for (let a in e) {
      if (ws(a)) continue;
      const h = e[a];
      let c;
      s && fe(s, (c = Tt(a)))
        ? !r || !r.includes(c)
          ? (t[c] = h)
          : ((l || (l = {}))[c] = h)
        : ml(i.emitsOptions, a) ||
          ((!(a in n) || h !== n[a]) && ((n[a] = h), (o = !0)));
    }
  if (r) {
    const a = le(t),
      h = l || pe;
    for (let c = 0; c < r.length; c++) {
      const f = r[c];
      t[f] = Ra(s, a, f, h[f], i, !fe(h, f));
    }
  }
  return o;
}
function Ra(i, e, t, n, s, r) {
  const o = i[t];
  if (o != null) {
    const l = fe(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && K(a)) {
        const { propsDefaults: h } = s;
        if (t in h) n = h[t];
        else {
          const c = Or(s);
          (n = h[t] = a.call(null, e)), c();
        }
      } else n = a;
      s.ce && s.ce._setProp(t, n);
    }
    o[0] &&
      (r && !l ? (n = !1) : o[1] && (n === "" || n === Bi(t)) && (n = !0));
  }
  return n;
}
const Mb = new WeakMap();
function Pp(i, e, t = !1) {
  const n = t ? Mb : e.propsCache,
    s = n.get(i);
  if (s) return s;
  const r = i.props,
    o = {},
    l = [];
  let a = !1;
  if (!K(i)) {
    const c = (f) => {
      a = !0;
      const [u, d] = Pp(f, e, !0);
      $e(o, u), d && l.push(...d);
    };
    !t && e.mixins.length && e.mixins.forEach(c),
      i.extends && c(i.extends),
      i.mixins && i.mixins.forEach(c);
  }
  if (!r && !a) return ye(i) && n.set(i, Rn), Rn;
  if (F(r))
    for (let c = 0; c < r.length; c++) {
      const f = Tt(r[c]);
      af(f) && (o[f] = pe);
    }
  else if (r)
    for (const c in r) {
      const f = Tt(c);
      if (af(f)) {
        const u = r[c],
          d = (o[f] = F(u) || K(u) ? { type: u } : $e({}, u)),
          p = d.type;
        let O = !1,
          m = !0;
        if (F(p))
          for (let b = 0; b < p.length; ++b) {
            const S = p[b],
              P = K(S) && S.name;
            if (P === "Boolean") {
              O = !0;
              break;
            } else P === "String" && (m = !1);
          }
        else O = K(p) && p.name === "Boolean";
        (d[0] = O), (d[1] = m), (O || fe(d, "default")) && l.push(f);
      }
    }
  const h = [o, l];
  return ye(i) && n.set(i, h), h;
}
function af(i) {
  return i[0] !== "$" && !ws(i);
}
const kp = (i) => i[0] === "_" || i === "$stable",
  ec = (i) => (F(i) ? i.map(Ft) : [Ft(i)]),
  _b = (i, e, t) => {
    if (e._n) return e;
    const n = ab((...s) => ec(e(...s)), t);
    return (n._c = !1), n;
  },
  vp = (i, e, t) => {
    const n = i._ctx;
    for (const s in i) {
      if (kp(s)) continue;
      const r = i[s];
      if (K(r)) e[s] = _b(s, r, n);
      else if (r != null) {
        const o = ec(r);
        e[s] = () => o;
      }
    }
  },
  $p = (i, e) => {
    const t = ec(e);
    i.slots.default = () => t;
  },
  Cp = (i, e, t) => {
    for (const n in e) (t || n !== "_") && (i[n] = e[n]);
  },
  Eb = (i, e, t) => {
    const n = (i.slots = Sp());
    if (i.vnode.shapeFlag & 32) {
      const s = e._;
      s ? (Cp(n, e, t), t && Cd(n, "_", s, !0)) : vp(e, n);
    } else e && $p(i, e);
  },
  Wb = (i, e, t) => {
    const { vnode: n, slots: s } = i;
    let r = !0,
      o = pe;
    if (n.shapeFlag & 32) {
      const l = e._;
      l
        ? t && l === 1
          ? (r = !1)
          : Cp(s, e, t)
        : ((r = !e.$stable), vp(e, s)),
        (o = e);
    } else e && ($p(i, e), (o = { default: 1 }));
    if (r) for (const l in s) !kp(l) && o[l] == null && delete s[l];
  },
  Ee = Fb;
function Xb(i) {
  return Db(i);
}
function Db(i, e) {
  const t = al();
  t.__VUE__ = !0;
  const {
      insert: n,
      remove: s,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: h,
      setElementText: c,
      parentNode: f,
      nextSibling: u,
      setScopeId: d = Wt,
      insertStaticContent: p,
    } = i,
    O = (
      g,
      y,
      k,
      A = null,
      Z = null,
      T = null,
      Y = void 0,
      W = null,
      E = !!y.dynamicChildren
    ) => {
      if (g === y) return;
      g && !Ti(g, y) && ((A = Pr(g)), ke(g, Z, T, !0), (g = null)),
        y.patchFlag === -2 && ((E = !1), (y.dynamicChildren = null));
      const { type: M, ref: G, shapeFlag: L } = y;
      switch (M) {
        case bl:
          m(g, y, k, A);
          break;
        case Je:
          b(g, y, k, A);
          break;
        case Zs:
          g == null && S(y, k, A, Y);
          break;
        case ot:
          R(g, y, k, A, Z, T, Y, W, E);
          break;
        default:
          L & 1
            ? Q(g, y, k, A, Z, T, Y, W, E)
            : L & 6
            ? B(g, y, k, A, Z, T, Y, W, E)
            : (L & 64 || L & 128) && M.process(g, y, k, A, Z, T, Y, W, E, is);
      }
      G != null && Z && So(G, g && g.ref, T, y || g, !y);
    },
    m = (g, y, k, A) => {
      if (g == null) n((y.el = l(y.children)), k, A);
      else {
        const Z = (y.el = g.el);
        y.children !== g.children && h(Z, y.children);
      }
    },
    b = (g, y, k, A) => {
      g == null ? n((y.el = a(y.children || "")), k, A) : (y.el = g.el);
    },
    S = (g, y, k, A) => {
      [g.el, g.anchor] = p(g.children, y, k, A, g.el, g.anchor);
    },
    P = ({ el: g, anchor: y }, k, A) => {
      let Z;
      for (; g && g !== y; ) (Z = u(g)), n(g, k, A), (g = Z);
      n(y, k, A);
    },
    x = ({ el: g, anchor: y }) => {
      let k;
      for (; g && g !== y; ) (k = u(g)), s(g), (g = k);
      s(y);
    },
    Q = (g, y, k, A, Z, T, Y, W, E) => {
      y.type === "svg" ? (Y = "svg") : y.type === "math" && (Y = "mathml"),
        g == null ? $(y, k, A, Z, T, Y, W, E) : _(g, y, Z, T, Y, W, E);
    },
    $ = (g, y, k, A, Z, T, Y, W) => {
      let E, M;
      const { props: G, shapeFlag: L, transition: I, dirs: J } = g;
      if (
        ((E = g.el = o(g.type, T, G && G.is, G)),
        L & 8
          ? c(E, g.children)
          : L & 16 && j(g.children, E, null, A, Z, Ul(g, T), Y, W),
        J && Ji(g, null, A, "created"),
        C(E, g, g.scopeId, Y, A),
        G)
      ) {
        for (const ge in G)
          ge !== "value" && !ws(ge) && r(E, ge, null, G[ge], T, A);
        "value" in G && r(E, "value", null, G.value, T),
          (M = G.onVnodeBeforeMount) && vt(M, A, g);
      }
      J && Ji(g, null, A, "beforeMount");
      const se = Yb(Z, I);
      se && I.beforeEnter(E),
        n(E, y, k),
        ((M = G && G.onVnodeMounted) || se || J) &&
          Ee(() => {
            M && vt(M, A, g), se && I.enter(E), J && Ji(g, null, A, "mounted");
          }, Z);
    },
    C = (g, y, k, A, Z) => {
      if ((k && d(g, k), A)) for (let T = 0; T < A.length; T++) d(g, A[T]);
      if (Z) {
        let T = Z.subTree;
        if (
          y === T ||
          (Po(T.type) && (T.ssContent === y || T.ssFallback === y))
        ) {
          const Y = Z.vnode;
          C(g, Y, Y.scopeId, Y.slotScopeIds, Z.parent);
        }
      }
    },
    j = (g, y, k, A, Z, T, Y, W, E = 0) => {
      for (let M = E; M < g.length; M++) {
        const G = (g[M] = W ? Ci(g[M]) : Ft(g[M]));
        O(null, G, y, k, A, Z, T, Y, W);
      }
    },
    _ = (g, y, k, A, Z, T, Y) => {
      const W = (y.el = g.el);
      let { patchFlag: E, dynamicChildren: M, dirs: G } = y;
      E |= g.patchFlag & 16;
      const L = g.props || pe,
        I = y.props || pe;
      let J;
      if (
        (k && en(k, !1),
        (J = I.onVnodeBeforeUpdate) && vt(J, k, y, g),
        G && Ji(y, g, k, "beforeUpdate"),
        k && en(k, !0),
        ((L.innerHTML && I.innerHTML == null) ||
          (L.textContent && I.textContent == null)) &&
          c(W, ""),
        M
          ? D(g.dynamicChildren, M, W, k, A, Ul(y, Z), T)
          : Y || te(g, y, W, null, k, A, Ul(y, Z), T, !1),
        E > 0)
      ) {
        if (E & 16) U(W, L, I, k, Z);
        else if (
          (E & 2 && L.class !== I.class && r(W, "class", null, I.class, Z),
          E & 4 && r(W, "style", L.style, I.style, Z),
          E & 8)
        ) {
          const se = y.dynamicProps;
          for (let ge = 0; ge < se.length; ge++) {
            const ue = se[ge],
              mt = L[ue],
              Ge = I[ue];
            (Ge !== mt || ue === "value") && r(W, ue, mt, Ge, Z, k);
          }
        }
        E & 1 && g.children !== y.children && c(W, y.children);
      } else !Y && M == null && U(W, L, I, k, Z);
      ((J = I.onVnodeUpdated) || G) &&
        Ee(() => {
          J && vt(J, k, y, g), G && Ji(y, g, k, "updated");
        }, A);
    },
    D = (g, y, k, A, Z, T, Y) => {
      for (let W = 0; W < y.length; W++) {
        const E = g[W],
          M = y[W],
          G =
            E.el && (E.type === ot || !Ti(E, M) || E.shapeFlag & 70)
              ? f(E.el)
              : k;
        O(E, M, G, null, A, Z, T, Y, !0);
      }
    },
    U = (g, y, k, A, Z) => {
      if (y !== k) {
        if (y !== pe)
          for (const T in y) !ws(T) && !(T in k) && r(g, T, y[T], null, Z, A);
        for (const T in k) {
          if (ws(T)) continue;
          const Y = k[T],
            W = y[T];
          Y !== W && T !== "value" && r(g, T, W, Y, Z, A);
        }
        "value" in k && r(g, "value", y.value, k.value, Z);
      }
    },
    R = (g, y, k, A, Z, T, Y, W, E) => {
      const M = (y.el = g ? g.el : l("")),
        G = (y.anchor = g ? g.anchor : l(""));
      let { patchFlag: L, dynamicChildren: I, slotScopeIds: J } = y;
      J && (W = W ? W.concat(J) : J),
        g == null
          ? (n(M, k, A), n(G, k, A), j(y.children || [], k, G, Z, T, Y, W, E))
          : L > 0 && L & 64 && I && g.dynamicChildren
          ? (D(g.dynamicChildren, I, k, Z, T, Y, W),
            (y.key != null || (Z && y === Z.subTree)) && tc(g, y, !0))
          : te(g, y, k, G, Z, T, Y, W, E);
    },
    B = (g, y, k, A, Z, T, Y, W, E) => {
      (y.slotScopeIds = W),
        g == null
          ? y.shapeFlag & 512
            ? Z.ctx.activate(y, k, A, Y, E)
            : H(y, k, A, Z, T, Y, E)
          : re(g, y, E);
    },
    H = (g, y, k, A, Z, T, Y) => {
      const W = (g.component = s1(g, A, Z));
      if ((pl(g) && (W.ctx.renderer = is), r1(W, !1, Y), W.asyncDep)) {
        if ((Z && Z.registerDep(W, oe, Y), !g.el)) {
          const E = (W.subTree = tt(Je));
          b(null, E, y, k);
        }
      } else oe(W, g, y, k, Z, T, Y);
    },
    re = (g, y, k) => {
      const A = (y.component = g.component);
      if (Bb(g, y, k))
        if (A.asyncDep && !A.asyncResolved) {
          ie(A, y, k);
          return;
        } else (A.next = y), A.update();
      else (y.el = g.el), (A.vnode = y);
    },
    oe = (g, y, k, A, Z, T, Y) => {
      const W = () => {
        if (g.isMounted) {
          let { next: L, bu: I, u: J, parent: se, vnode: ge } = g;
          {
            const bt = Zp(g);
            if (bt) {
              L && ((L.el = ge.el), ie(g, L, Y)),
                bt.asyncDep.then(() => {
                  g.isUnmounted || W();
                });
              return;
            }
          }
          let ue = L,
            mt;
          en(g, !1),
            L ? ((L.el = ge.el), ie(g, L, Y)) : (L = ge),
            I && Qs(I),
            (mt = L.props && L.props.onVnodeBeforeUpdate) && vt(mt, se, L, ge),
            en(g, !0);
          const Ge = Vl(g),
            _t = g.subTree;
          (g.subTree = Ge),
            O(_t, Ge, f(_t.el), Pr(_t), g, Z, T),
            (L.el = Ge.el),
            ue === null && Gb(g, Ge.el),
            J && Ee(J, Z),
            (mt = L.props && L.props.onVnodeUpdated) &&
              Ee(() => vt(mt, se, L, ge), Z);
        } else {
          let L;
          const { el: I, props: J } = y,
            { bm: se, m: ge, parent: ue, root: mt, type: Ge } = g,
            _t = fn(y);
          if (
            (en(g, !1),
            se && Qs(se),
            !_t && (L = J && J.onVnodeBeforeMount) && vt(L, ue, y),
            en(g, !0),
            I && zc)
          ) {
            const bt = () => {
              (g.subTree = Vl(g)), zc(I, g.subTree, g, Z, null);
            };
            _t && Ge.__asyncHydrate ? Ge.__asyncHydrate(I, g, bt) : bt();
          } else {
            mt.ce && mt.ce._injectChildStyle(Ge);
            const bt = (g.subTree = Vl(g));
            O(null, bt, k, A, g, Z, T), (y.el = bt.el);
          }
          if ((ge && Ee(ge, Z), !_t && (L = J && J.onVnodeMounted))) {
            const bt = y;
            Ee(() => vt(L, ue, bt), Z);
          }
          (y.shapeFlag & 256 ||
            (ue && fn(ue.vnode) && ue.vnode.shapeFlag & 256)) &&
            g.a &&
            Ee(g.a, Z),
            (g.isMounted = !0),
            (y = k = A = null);
        }
      };
      g.scope.on();
      const E = (g.effect = new Ad(W));
      g.scope.off();
      const M = (g.update = E.run.bind(E)),
        G = (g.job = E.runIfDirty.bind(E));
      (G.i = g), (G.id = g.uid), (E.scheduler = () => Bh(G)), en(g, !0), M();
    },
    ie = (g, y, k) => {
      y.component = g;
      const A = g.vnode.props;
      (g.vnode = y),
        (g.next = null),
        Ab(g, y.props, A, k),
        Wb(g, y.children, k),
        Gi(),
        Hc(g),
        Fi();
    },
    te = (g, y, k, A, Z, T, Y, W, E = !1) => {
      const M = g && g.children,
        G = g ? g.shapeFlag : 0,
        L = y.children,
        { patchFlag: I, shapeFlag: J } = y;
      if (I > 0) {
        if (I & 128) {
          Qe(M, L, k, A, Z, T, Y, W, E);
          return;
        } else if (I & 256) {
          Ce(M, L, k, A, Z, T, Y, W, E);
          return;
        }
      }
      J & 8
        ? (G & 16 && Qi(M, Z, T), L !== M && c(k, L))
        : G & 16
        ? J & 16
          ? Qe(M, L, k, A, Z, T, Y, W, E)
          : Qi(M, Z, T, !0)
        : (G & 8 && c(k, ""), J & 16 && j(L, k, A, Z, T, Y, W, E));
    },
    Ce = (g, y, k, A, Z, T, Y, W, E) => {
      (g = g || Rn), (y = y || Rn);
      const M = g.length,
        G = y.length,
        L = Math.min(M, G);
      let I;
      for (I = 0; I < L; I++) {
        const J = (y[I] = E ? Ci(y[I]) : Ft(y[I]));
        O(g[I], J, k, null, Z, T, Y, W, E);
      }
      M > G ? Qi(g, Z, T, !0, !1, L) : j(y, k, A, Z, T, Y, W, E, L);
    },
    Qe = (g, y, k, A, Z, T, Y, W, E) => {
      let M = 0;
      const G = y.length;
      let L = g.length - 1,
        I = G - 1;
      for (; M <= L && M <= I; ) {
        const J = g[M],
          se = (y[M] = E ? Ci(y[M]) : Ft(y[M]));
        if (Ti(J, se)) O(J, se, k, null, Z, T, Y, W, E);
        else break;
        M++;
      }
      for (; M <= L && M <= I; ) {
        const J = g[L],
          se = (y[I] = E ? Ci(y[I]) : Ft(y[I]));
        if (Ti(J, se)) O(J, se, k, null, Z, T, Y, W, E);
        else break;
        L--, I--;
      }
      if (M > L) {
        if (M <= I) {
          const J = I + 1,
            se = J < G ? y[J].el : A;
          for (; M <= I; )
            O(null, (y[M] = E ? Ci(y[M]) : Ft(y[M])), k, se, Z, T, Y, W, E),
              M++;
        }
      } else if (M > I) for (; M <= L; ) ke(g[M], Z, T, !0), M++;
      else {
        const J = M,
          se = M,
          ge = new Map();
        for (M = se; M <= I; M++) {
          const yt = (y[M] = E ? Ci(y[M]) : Ft(y[M]));
          yt.key != null && ge.set(yt.key, M);
        }
        let ue,
          mt = 0;
        const Ge = I - se + 1;
        let _t = !1,
          bt = 0;
        const ns = new Array(Ge);
        for (M = 0; M < Ge; M++) ns[M] = 0;
        for (M = J; M <= L; M++) {
          const yt = g[M];
          if (mt >= Ge) {
            ke(yt, Z, T, !0);
            continue;
          }
          let Vt;
          if (yt.key != null) Vt = ge.get(yt.key);
          else
            for (ue = se; ue <= I; ue++)
              if (ns[ue - se] === 0 && Ti(yt, y[ue])) {
                Vt = ue;
                break;
              }
          Vt === void 0
            ? ke(yt, Z, T, !0)
            : ((ns[Vt - se] = M + 1),
              Vt >= bt ? (bt = Vt) : (_t = !0),
              O(yt, y[Vt], k, null, Z, T, Y, W, E),
              mt++);
        }
        const Ic = _t ? jb(ns) : Rn;
        for (ue = Ic.length - 1, M = Ge - 1; M >= 0; M--) {
          const yt = se + M,
            Vt = y[yt],
            Nc = yt + 1 < G ? y[yt + 1].el : A;
          ns[M] === 0
            ? O(null, Vt, k, Nc, Z, T, Y, W, E)
            : _t && (ue < 0 || M !== Ic[ue] ? Ze(Vt, k, Nc, 2) : ue--);
        }
      }
    },
    Ze = (g, y, k, A, Z = null) => {
      const { el: T, type: Y, transition: W, children: E, shapeFlag: M } = g;
      if (M & 6) {
        Ze(g.component.subTree, y, k, A);
        return;
      }
      if (M & 128) {
        g.suspense.move(y, k, A);
        return;
      }
      if (M & 64) {
        Y.move(g, y, k, is);
        return;
      }
      if (Y === ot) {
        n(T, y, k);
        for (let L = 0; L < E.length; L++) Ze(E[L], y, k, A);
        n(g.anchor, y, k);
        return;
      }
      if (Y === Zs) {
        P(g, y, k);
        return;
      }
      if (A !== 2 && M & 1 && W)
        if (A === 0) W.beforeEnter(T), n(T, y, k), Ee(() => W.enter(T), Z);
        else {
          const { leave: L, delayLeave: I, afterLeave: J } = W,
            se = () => n(T, y, k),
            ge = () => {
              L(T, () => {
                se(), J && J();
              });
            };
          I ? I(T, se, ge) : ge();
        }
      else n(T, y, k);
    },
    ke = (g, y, k, A = !1, Z = !1) => {
      const {
        type: T,
        props: Y,
        ref: W,
        children: E,
        dynamicChildren: M,
        shapeFlag: G,
        patchFlag: L,
        dirs: I,
        cacheIndex: J,
      } = g;
      if (
        (L === -2 && (Z = !1),
        W != null && So(W, null, k, g, !0),
        J != null && (y.renderCache[J] = void 0),
        G & 256)
      ) {
        y.ctx.deactivate(g);
        return;
      }
      const se = G & 1 && I,
        ge = !fn(g);
      let ue;
      if ((ge && (ue = Y && Y.onVnodeBeforeUnmount) && vt(ue, y, g), G & 6))
        xn(g.component, k, A);
      else {
        if (G & 128) {
          g.suspense.unmount(k, A);
          return;
        }
        se && Ji(g, null, y, "beforeUnmount"),
          G & 64
            ? g.type.remove(g, y, k, is, A)
            : M && !M.hasOnce && (T !== ot || (L > 0 && L & 64))
            ? Qi(M, y, k, !1, !0)
            : ((T === ot && L & 384) || (!Z && G & 16)) && Qi(E, y, k),
          A && Ut(g);
      }
      ((ge && (ue = Y && Y.onVnodeUnmounted)) || se) &&
        Ee(() => {
          ue && vt(ue, y, g), se && Ji(g, null, y, "unmounted");
        }, k);
    },
    Ut = (g) => {
      const { type: y, el: k, anchor: A, transition: Z } = g;
      if (y === ot) {
        wi(k, A);
        return;
      }
      if (y === Zs) {
        x(g);
        return;
      }
      const T = () => {
        s(k), Z && !Z.persisted && Z.afterLeave && Z.afterLeave();
      };
      if (g.shapeFlag & 1 && Z && !Z.persisted) {
        const { leave: Y, delayLeave: W } = Z,
          E = () => Y(k, T);
        W ? W(g.el, T, E) : E();
      } else T();
    },
    wi = (g, y) => {
      let k;
      for (; g !== y; ) (k = u(g)), s(g), (g = k);
      s(y);
    },
    xn = (g, y, k) => {
      const { bum: A, scope: Z, job: T, subTree: Y, um: W, m: E, a: M } = g;
      Qo(E),
        Qo(M),
        A && Qs(A),
        Z.stop(),
        T && ((T.flags |= 8), ke(Y, g, y, k)),
        W && Ee(W, y),
        Ee(() => {
          g.isUnmounted = !0;
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          g.asyncDep &&
          !g.asyncResolved &&
          g.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve());
    },
    Qi = (g, y, k, A = !1, Z = !1, T = 0) => {
      for (let Y = T; Y < g.length; Y++) ke(g[Y], y, k, A, Z);
    },
    Pr = (g) => {
      if (g.shapeFlag & 6) return Pr(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const y = u(g.anchor || g.el),
        k = y && y[ip];
      return k ? u(k) : y;
    };
  let Ml = !1;
  const Vc = (g, y, k) => {
      g == null
        ? y._vnode && ke(y._vnode, null, null, !0)
        : O(y._vnode || null, g, y, null, null, null, k),
        (y._vnode = g),
        Ml || ((Ml = !0), Hc(), Jd(), (Ml = !1));
    },
    is = {
      p: O,
      um: ke,
      m: Ze,
      r: Ut,
      mt: H,
      mc: j,
      pc: te,
      pbc: D,
      n: Pr,
      o: i,
    };
  let qc, zc;
  return { render: Vc, hydrate: qc, createApp: Zb(Vc, qc) };
}
function Ul({ type: i, props: e }, t) {
  return (t === "svg" && i === "foreignObject") ||
    (t === "mathml" &&
      i === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : t;
}
function en({ effect: i, job: e }, t) {
  t ? ((i.flags |= 32), (e.flags |= 4)) : ((i.flags &= -33), (e.flags &= -5));
}
function Yb(i, e) {
  return (!i || (i && !i.pendingBranch)) && e && !e.persisted;
}
function tc(i, e, t = !1) {
  const n = i.children,
    s = e.children;
  if (F(n) && F(s))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let l = s[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[r] = Ci(s[r])), (l.el = o.el)),
        !t && l.patchFlag !== -2 && tc(o, l)),
        l.type === bl && (l.el = o.el);
    }
}
function jb(i) {
  const e = i.slice(),
    t = [0];
  let n, s, r, o, l;
  const a = i.length;
  for (n = 0; n < a; n++) {
    const h = i[n];
    if (h !== 0) {
      if (((s = t[t.length - 1]), i[s] < h)) {
        (e[n] = s), t.push(n);
        continue;
      }
      for (r = 0, o = t.length - 1; r < o; )
        (l = (r + o) >> 1), i[t[l]] < h ? (r = l + 1) : (o = l);
      h < i[t[r]] && (r > 0 && (e[n] = t[r - 1]), (t[r] = n));
    }
  }
  for (r = t.length, o = t[r - 1]; r-- > 0; ) (t[r] = o), (o = e[o]);
  return t;
}
function Zp(i) {
  const e = i.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Zp(e);
}
function Qo(i) {
  if (i) for (let e = 0; e < i.length; e++) i[e].flags |= 8;
}
const Lb = Symbol.for("v-scx"),
  Ub = () => to(Lb);
function i$(i, e) {
  return ic(i, null, e);
}
function Cs(i, e, t) {
  return ic(i, e, t);
}
function ic(i, e, t = pe) {
  const { immediate: n, deep: s, flush: r, once: o } = t,
    l = $e({}, t),
    a = (e && n) || (!e && r !== "post");
  let h;
  if (Us) {
    if (r === "sync") {
      const d = Ub();
      h = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!a) {
      const d = () => {};
      return (d.stop = Wt), (d.resume = Wt), (d.pause = Wt), d;
    }
  }
  const c = ze;
  l.call = (d, p, O) => Dt(d, c, p, O);
  let f = !1;
  r === "post"
    ? (l.scheduler = (d) => {
        Ee(d, c && c.suspense);
      })
    : r !== "sync" &&
      ((f = !0),
      (l.scheduler = (d, p) => {
        p ? d() : Bh(d);
      })),
    (l.augmentJob = (d) => {
      e && (d.flags |= 4),
        f && ((d.flags |= 2), c && ((d.id = c.uid), (d.i = c)));
    });
  const u = sb(i, e, l);
  return Us && (h ? h.push(u) : a && u()), u;
}
function Vb(i, e, t) {
  const n = this.proxy,
    s = we(i) ? (i.includes(".") ? Rp(n, i) : () => n[i]) : i.bind(n, n);
  let r;
  K(e) ? (r = e) : ((r = e.handler), (t = e));
  const o = Or(this),
    l = ic(s, r.bind(n), t);
  return o(), l;
}
function Rp(i, e) {
  const t = e.split(".");
  return () => {
    let n = i;
    for (let s = 0; s < t.length && n; s++) n = n[t[s]];
    return n;
  };
}
const qb = (i, e) =>
  e === "modelValue" || e === "model-value"
    ? i.modelModifiers
    : i[`${e}Modifiers`] || i[`${Tt(e)}Modifiers`] || i[`${Bi(e)}Modifiers`];
function zb(i, e, ...t) {
  if (i.isUnmounted) return;
  const n = i.vnode.props || pe;
  let s = t;
  const r = e.startsWith("update:"),
    o = r && qb(n, e.slice(7));
  o &&
    (o.trim && (s = t.map((c) => (we(c) ? c.trim() : c))),
    o.number && (s = t.map(g0)));
  let l,
    a = n[(l = _l(e))] || n[(l = _l(Tt(e)))];
  !a && r && (a = n[(l = _l(Bi(e)))]), a && Dt(a, i, 6, s);
  const h = n[l + "Once"];
  if (h) {
    if (!i.emitted) i.emitted = {};
    else if (i.emitted[l]) return;
    (i.emitted[l] = !0), Dt(h, i, 6, s);
  }
}
function Tp(i, e, t = !1) {
  const n = e.emitsCache,
    s = n.get(i);
  if (s !== void 0) return s;
  const r = i.emits;
  let o = {},
    l = !1;
  if (!K(i)) {
    const a = (h) => {
      const c = Tp(h, e, !0);
      c && ((l = !0), $e(o, c));
    };
    !t && e.mixins.length && e.mixins.forEach(a),
      i.extends && a(i.extends),
      i.mixins && i.mixins.forEach(a);
  }
  return !r && !l
    ? (ye(i) && n.set(i, null), null)
    : (F(r) ? r.forEach((a) => (o[a] = null)) : $e(o, r),
      ye(i) && n.set(i, o),
      o);
}
function ml(i, e) {
  return !i || !rl(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      fe(i, e[0].toLowerCase() + e.slice(1)) || fe(i, Bi(e)) || fe(i, e));
}
function Vl(i) {
  const {
      type: e,
      vnode: t,
      proxy: n,
      withProxy: s,
      propsOptions: [r],
      slots: o,
      attrs: l,
      emit: a,
      render: h,
      renderCache: c,
      props: f,
      data: u,
      setupState: d,
      ctx: p,
      inheritAttrs: O,
    } = i,
    m = xo(i);
  let b, S;
  try {
    if (t.shapeFlag & 4) {
      const x = s || n,
        Q = x;
      (b = Ft(h.call(Q, x, c, f, d, u, p))), (S = l);
    } else {
      const x = e;
      (b = Ft(
        x.length > 1 ? x(f, { attrs: l, slots: o, emit: a }) : x(f, null)
      )),
        (S = e.props ? l : Ib(l));
    }
  } catch (x) {
    (Rs.length = 0), dl(x, i, 1), (b = tt(Je));
  }
  let P = b;
  if (S && O !== !1) {
    const x = Object.keys(S),
      { shapeFlag: Q } = P;
    x.length &&
      Q & 7 &&
      (r && x.some(Dh) && (S = Nb(S, r)), (P = di(P, S, !1, !0)));
  }
  return (
    t.dirs &&
      ((P = di(P, null, !1, !0)),
      (P.dirs = P.dirs ? P.dirs.concat(t.dirs) : t.dirs)),
    t.transition && ji(P, t.transition),
    (b = P),
    xo(m),
    b
  );
}
const Ib = (i) => {
    let e;
    for (const t in i)
      (t === "class" || t === "style" || rl(t)) && ((e || (e = {}))[t] = i[t]);
    return e;
  },
  Nb = (i, e) => {
    const t = {};
    for (const n in i) (!Dh(n) || !(n.slice(9) in e)) && (t[n] = i[n]);
    return t;
  };
function Bb(i, e, t) {
  const { props: n, children: s, component: r } = i,
    { props: o, children: l, patchFlag: a } = e,
    h = r.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (t && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return n ? hf(n, o, h) : !!o;
    if (a & 8) {
      const c = e.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const u = c[f];
        if (o[u] !== n[u] && !ml(h, u)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : n === o
      ? !1
      : n
      ? o
        ? hf(n, o, h)
        : !0
      : !!o;
  return !1;
}
function hf(i, e, t) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(i).length) return !0;
  for (let s = 0; s < n.length; s++) {
    const r = n[s];
    if (e[r] !== i[r] && !ml(t, r)) return !0;
  }
  return !1;
}
function Gb({ vnode: i, parent: e }, t) {
  for (; e; ) {
    const n = e.subTree;
    if ((n.suspense && n.suspense.activeBranch === i && (n.el = i.el), n === i))
      ((i = e.vnode).el = t), (e = e.parent);
    else break;
  }
}
const Po = (i) => i.__isSuspense;
function Fb(i, e) {
  e && e.pendingBranch
    ? F(i)
      ? e.effects.push(...i)
      : e.effects.push(i)
    : Kd(i);
}
const ot = Symbol.for("v-fgt"),
  bl = Symbol.for("v-txt"),
  Je = Symbol.for("v-cmt"),
  Zs = Symbol.for("v-stc"),
  Rs = [];
let Qt = null;
function Ta(i = !1) {
  Rs.push((Qt = i ? null : []));
}
function Hb() {
  Rs.pop(), (Qt = Rs[Rs.length - 1] || null);
}
let Ls = 1;
function cf(i, e = !1) {
  (Ls += i), i < 0 && Qt && e && (Qt.hasOnce = !0);
}
function Ap(i) {
  return (
    (i.dynamicChildren = Ls > 0 ? Qt || Rn : null),
    Hb(),
    Ls > 0 && Qt && Qt.push(i),
    i
  );
}
function n$(i, e, t, n, s, r) {
  return Ap(_p(i, e, t, n, s, r, !0));
}
function Aa(i, e, t, n, s) {
  return Ap(tt(i, e, t, n, s, !0));
}
function Un(i) {
  return i ? i.__v_isVNode === !0 : !1;
}
function Ti(i, e) {
  return i.type === e.type && i.key === e.key;
}
const Mp = ({ key: i }) => eval('i ?? null'),
  io = ({ ref: i, ref_key: e, ref_for: t }) => (
    typeof i == "number" && (i = "" + i),
    i != null
      ? we(i) || je(i) || K(i)
        ? { i: Ye, r: i, k: e, f: !!t }
        : i
      : null
  );
function _p(
  i,
  e = null,
  t = null,
  n = 0,
  s = null,
  r = i === ot ? 0 : 1,
  o = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: i,
    props: e,
    key: e && Mp(e),
    ref: e && io(e),
    scopeId: tp,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ye,
  };
  return (
    l
      ? (nc(a, t), r & 128 && i.normalize(a))
      : t && (a.shapeFlag |= we(t) ? 8 : 16),
    Ls > 0 &&
      !o &&
      Qt &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      Qt.push(a),
    a
  );
}
const tt = Kb;
function Kb(i, e = null, t = null, n = 0, s = null, r = !1) {
  if (((!i || i === Op) && (i = Je), Un(i))) {
    const l = di(i, e, !0);
    return (
      t && nc(l, t),
      Ls > 0 &&
        !r &&
        Qt &&
        (l.shapeFlag & 6 ? (Qt[Qt.indexOf(i)] = l) : Qt.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((a1(i) && (i = i.__vccOpts), e)) {
    e = Jb(e);
    let { class: l, style: a } = e;
    l && !we(l) && (e.class = cl(l)),
      ye(a) && (Nh(a) && !F(a) && (a = $e({}, a)), (e.style = hl(a)));
  }
  const o = we(i) ? 1 : Po(i) ? 128 : np(i) ? 64 : ye(i) ? 4 : K(i) ? 2 : 0;
  return _p(i, e, t, n, s, o, r, !0);
}
function Jb(i) {
  return i ? (Nh(i) || wp(i) ? $e({}, i) : i) : null;
}
function di(i, e, t = !1, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: l, transition: a } = i,
    h = e ? t1(s || {}, e) : s,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: i.type,
      props: h,
      key: h && Mp(h),
      ref:
        e && e.ref
          ? t && r
            ? F(r)
              ? r.concat(io(e))
              : [r, io(e)]
            : io(e)
          : r,
      scopeId: i.scopeId,
      slotScopeIds: i.slotScopeIds,
      children: l,
      target: i.target,
      targetStart: i.targetStart,
      targetAnchor: i.targetAnchor,
      staticCount: i.staticCount,
      shapeFlag: i.shapeFlag,
      patchFlag: e && i.type !== ot ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: i.dynamicProps,
      dynamicChildren: i.dynamicChildren,
      appContext: i.appContext,
      dirs: i.dirs,
      transition: a,
      component: i.component,
      suspense: i.suspense,
      ssContent: i.ssContent && di(i.ssContent),
      ssFallback: i.ssFallback && di(i.ssFallback),
      el: i.el,
      anchor: i.anchor,
      ctx: i.ctx,
      ce: i.ce,
    };
  return a && n && ji(c, a.clone(c)), c;
}
function e1(i = " ", e = 0) {
  return tt(bl, null, i, e);
}
function s$(i, e) {
  const t = tt(Zs, null, i);
  return (t.staticCount = e), t;
}
function r$(i = "", e = !1) {
  return e ? (Ta(), Aa(Je, null, i)) : tt(Je, null, i);
}
function Ft(i) {
  return i == null || typeof i == "boolean"
    ? tt(Je)
    : F(i)
    ? tt(ot, null, i.slice())
    : Un(i)
    ? Ci(i)
    : tt(bl, null, String(i));
}
function Ci(i) {
  return (i.el === null && i.patchFlag !== -1) || i.memo ? i : di(i);
}
function nc(i, e) {
  let t = 0;
  const { shapeFlag: n } = i;
  if (e == null) e = null;
  else if (F(e)) t = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), nc(i, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !wp(e)
        ? (e._ctx = Ye)
        : s === 3 &&
          Ye &&
          (Ye.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (i.patchFlag |= 1024)));
    }
  else
    K(e)
      ? ((e = { default: e, _ctx: Ye }), (t = 32))
      : ((e = String(e)), n & 64 ? ((t = 16), (e = [e1(e)])) : (t = 8));
  (i.children = e), (i.shapeFlag |= t);
}
function t1(...i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = i[t];
    for (const s in n)
      if (s === "class")
        e.class !== n.class && (e.class = cl([e.class, n.class]));
      else if (s === "style") e.style = hl([e.style, n.style]);
      else if (rl(s)) {
        const r = e[s],
          o = n[s];
        o &&
          r !== o &&
          !(F(r) && r.includes(o)) &&
          (e[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (e[s] = n[s]);
  }
  return e;
}
function vt(i, e, t, n = null) {
  Dt(i, e, 7, [t, n]);
}
const i1 = yp();
let n1 = 0;
function s1(i, e, t) {
  const n = i.type,
    s = (e ? e.appContext : i.appContext) || i1,
    r = {
      uid: n1++,
      vnode: i,
      type: n,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new k0(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Pp(n, s),
      emitsOptions: Tp(n, s),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: n.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
      setupContext: null,
      suspense: t,
      suspenseId: t ? t.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = e ? e.root : r),
    (r.emit = zb.bind(null, r)),
    i.ce && i.ce(r),
    r
  );
}
let ze = null;
const pr = () => ze || Ye;
let ko, Ma;
{
  const i = al(),
    e = (t, n) => {
      let s;
      return (
        (s = i[t]) || (s = i[t] = []),
        s.push(n),
        (r) => {
          s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
        }
      );
    };
  (ko = e("__VUE_INSTANCE_SETTERS__", (t) => (ze = t))),
    (Ma = e("__VUE_SSR_SETTERS__", (t) => (Us = t)));
}
const Or = (i) => {
    const e = ze;
    return (
      ko(i),
      i.scope.on(),
      () => {
        i.scope.off(), ko(e);
      }
    );
  },
  ff = () => {
    ze && ze.scope.off(), ko(null);
  };
function Ep(i) {
  return i.vnode.shapeFlag & 4;
}
let Us = !1;
function r1(i, e = !1, t = !1) {
  e && Ma(e);
  const { props: n, children: s } = i.vnode,
    r = Ep(i);
  Tb(i, n, r, e), Eb(i, s, t);
  const o = r ? o1(i, e) : void 0;
  return e && Ma(!1), o;
}
function o1(i, e) {
  const t = i.type;
  (i.accessCache = Object.create(null)), (i.proxy = new Proxy(i.ctx, Sb));
  const { setup: n } = t;
  if (n) {
    Gi();
    const s = (i.setupContext = n.length > 1 ? Xp(i) : null),
      r = Or(i),
      o = dr(n, i, 0, [i.props, s]),
      l = kd(o);
    if ((Fi(), r(), (l || i.sp) && !fn(i) && fp(i), l)) {
      if ((o.then(ff, ff), e))
        return o
          .then((a) => {
            uf(i, a, e);
          })
          .catch((a) => {
            dl(a, i, 0);
          });
      i.asyncDep = o;
    } else uf(i, o, e);
  } else Wp(i, e);
}
function uf(i, e, t) {
  K(e)
    ? i.type.__ssrInlineRender
      ? (i.ssrRender = e)
      : (i.render = e)
    : ye(e) && (i.setupState = Gd(e)),
    Wp(i, t);
}
let df;
function Wp(i, e, t) {
  const n = i.type;
  if (!i.render) {
    if (!e && df && !n.render) {
      const s = n.template || Jh(i).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = i.appContext.config,
          { delimiters: l, compilerOptions: a } = n,
          h = $e($e({ isCustomElement: r, delimiters: l }, o), a);
        n.render = df(s, h);
      }
    }
    i.render = n.render || Wt;
  }
  {
    const s = Or(i);
    Gi();
    try {
      Qb(i);
    } finally {
      Fi(), s();
    }
  }
}
const l1 = {
  get(i, e) {
    return He(i, "get", ""), i[e];
  },
};
function Xp(i) {
  const e = (t) => {
    i.exposed = t || {};
  };
  return {
    attrs: new Proxy(i.attrs, l1),
    slots: i.slots,
    emit: i.emit,
    expose: e,
  };
}
function yl(i) {
  return i.exposed
    ? i.exposeProxy ||
        (i.exposeProxy = new Proxy(Gd(N0(i.exposed)), {
          get(e, t) {
            if (t in e) return e[t];
            if (t in $s) return $s[t](i);
          },
          has(e, t) {
            return t in e || t in $s;
          },
        }))
    : i.proxy;
}
function _a(i, e = !0) {
  return K(i) ? i.displayName || i.name : i.name || (e && i.__name);
}
function a1(i) {
  return K(i) && "__vccOpts" in i;
}
const h1 = (i, e) => ib(i, e, Us);
function c1(i, e, t) {
  const n = arguments.length;
  return n === 2
    ? ye(e) && !F(e)
      ? Un(e)
        ? tt(i, null, [e])
        : tt(i, e)
      : tt(i, null, e)
    : (n > 3
        ? (t = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Un(t) && (t = [t]),
      tt(i, e, t));
}
const f1 = "3.5.13";
// END @vue/runtime-core


// BEGIN @vue/runtime-dom
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ea;
const pf = typeof window < "u" && window.trustedTypes;
if (pf)
  try {
    Ea = pf.createPolicy("vue", { createHTML: (i) => i });
  } catch {}
const Dp = Ea ? (i) => Ea.createHTML(i) : (i) => i,
  u1 = "http://www.w3.org/2000/svg",
  d1 = "http://www.w3.org/1998/Math/MathML",
  ai = typeof document < "u" ? document : null,
  Of = ai && ai.createElement("template"),
  p1 = {
    insert: (i, e, t) => {
      e.insertBefore(i, t || null);
    },
    remove: (i) => {
      const e = i.parentNode;
      e && e.removeChild(i);
    },
    createElement: (i, e, t, n) => {
      const s =
        e === "svg"
          ? ai.createElementNS(u1, i)
          : e === "mathml"
          ? ai.createElementNS(d1, i)
          : t
          ? ai.createElement(i, { is: t })
          : ai.createElement(i);
      return (
        i === "select" &&
          n &&
          n.multiple != null &&
          s.setAttribute("multiple", n.multiple),
        s
      );
    },
    createText: (i) => ai.createTextNode(i),
    createComment: (i) => ai.createComment(i),
    setText: (i, e) => {
      i.nodeValue = e;
    },
    setElementText: (i, e) => {
      i.textContent = e;
    },
    parentNode: (i) => i.parentNode,
    nextSibling: (i) => i.nextSibling,
    querySelector: (i) => ai.querySelector(i),
    setScopeId(i, e) {
      i.setAttribute(e, "");
    },
    insertStaticContent(i, e, t, n, s, r) {
      const o = t ? t.previousSibling : e.lastChild;
      if (s && (s === r || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), t),
            !(s === r || !(s = s.nextSibling));

        );
      else {
        Of.innerHTML = Dp(
          n === "svg"
            ? `<svg>${i}</svg>`
            : n === "mathml"
            ? `<math>${i}</math>`
            : i
        );
        const l = Of.content;
        if (n === "svg" || n === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        e.insertBefore(l, t);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        t ? t.previousSibling : e.lastChild,
      ];
    },
  },
  Pi = "transition",
  rs = "animation",
  Vn = Symbol("_vtc"),
  Yp = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  jp = $e({}, lp, Yp),
  O1 = (i) => ((i.displayName = "Transition"), (i.props = jp), i),
  o$ = O1((i, { slots: e }) => c1(fb, Lp(i), e)),
  tn = (i, e = []) => {
    F(i) ? i.forEach((t) => t(...e)) : i && i(...e);
  },
  gf = (i) => (i ? (F(i) ? i.some((e) => e.length > 1) : i.length > 1) : !1);
function Lp(i) {
  const e = {};
  for (const R in i) R in Yp || (e[R] = i[R]);
  if (i.css === !1) return e;
  const {
      name: t = "v",
      type: n,
      duration: s,
      enterFromClass: r = `${t}-enter-from`,
      enterActiveClass: o = `${t}-enter-active`,
      enterToClass: l = `${t}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: h = o,
      appearToClass: c = l,
      leaveFromClass: f = `${t}-leave-from`,
      leaveActiveClass: u = `${t}-leave-active`,
      leaveToClass: d = `${t}-leave-to`,
    } = i,
    p = g1(s),
    O = p && p[0],
    m = p && p[1],
    {
      onBeforeEnter: b,
      onEnter: S,
      onEnterCancelled: P,
      onLeave: x,
      onLeaveCancelled: Q,
      onBeforeAppear: $ = b,
      onAppear: C = S,
      onAppearCancelled: j = P,
    } = e,
    _ = (R, B, H, re) => {
      (R._enterCancelled = re), ki(R, B ? c : l), ki(R, B ? h : o), H && H();
    },
    D = (R, B) => {
      (R._isLeaving = !1), ki(R, f), ki(R, d), ki(R, u), B && B();
    },
    U = (R) => (B, H) => {
      const re = R ? C : S,
        oe = () => _(B, R, H);
      tn(re, [B, oe]),
        mf(() => {
          ki(B, R ? a : r), Nt(B, R ? c : l), gf(re) || bf(B, n, O, oe);
        });
    };
  return $e(e, {
    onBeforeEnter(R) {
      tn(b, [R]), Nt(R, r), Nt(R, o);
    },
    onBeforeAppear(R) {
      tn($, [R]), Nt(R, a), Nt(R, h);
    },
    onEnter: U(!1),
    onAppear: U(!0),
    onLeave(R, B) {
      R._isLeaving = !0;
      const H = () => D(R, B);
      Nt(R, f),
        R._enterCancelled ? (Nt(R, u), Wa()) : (Wa(), Nt(R, u)),
        mf(() => {
          R._isLeaving && (ki(R, f), Nt(R, d), gf(x) || bf(R, n, m, H));
        }),
        tn(x, [R, H]);
    },
    onEnterCancelled(R) {
      _(R, !1, void 0, !0), tn(P, [R]);
    },
    onAppearCancelled(R) {
      _(R, !0, void 0, !0), tn(j, [R]);
    },
    onLeaveCancelled(R) {
      D(R), tn(Q, [R]);
    },
  });
}
function g1(i) {
  if (i == null) return null;
  if (ye(i)) return [ql(i.enter), ql(i.leave)];
  {
    const e = ql(i);
    return [e, e];
  }
}
function ql(i) {
  return m0(i);
}
function Nt(i, e) {
  e.split(/\s+/).forEach((t) => t && i.classList.add(t)),
    (i[Vn] || (i[Vn] = new Set())).add(e);
}
function ki(i, e) {
  e.split(/\s+/).forEach((n) => n && i.classList.remove(n));
  const t = i[Vn];
  t && (t.delete(e), t.size || (i[Vn] = void 0));
}
function mf(i) {
  requestAnimationFrame(() => {
    requestAnimationFrame(i);
  });
}
let m1 = 0;
function bf(i, e, t, n) {
  const s = (i._endId = ++m1),
    r = () => {
      s === i._endId && n();
    };
  if (t != null) return setTimeout(r, t);
  const { type: o, timeout: l, propCount: a } = Up(i, e);
  if (!o) return n();
  const h = o + "end";
  let c = 0;
  const f = () => {
      i.removeEventListener(h, u), r();
    },
    u = (d) => {
      d.target === i && ++c >= a && f();
    };
  setTimeout(() => {
    c < a && f();
  }, l + 1),
    i.addEventListener(h, u);
}
function Up(i, e) {
  const t = window.getComputedStyle(i),
    n = (p) => (t[p] || "").split(", "),
    s = n(`${Pi}Delay`),
    r = n(`${Pi}Duration`),
    o = yf(s, r),
    l = n(`${rs}Delay`),
    a = n(`${rs}Duration`),
    h = yf(l, a);
  let c = null,
    f = 0,
    u = 0;
  e === Pi
    ? o > 0 && ((c = Pi), (f = o), (u = r.length))
    : e === rs
    ? h > 0 && ((c = rs), (f = h), (u = a.length))
    : ((f = Math.max(o, h)),
      (c = f > 0 ? (o > h ? Pi : rs) : null),
      (u = c ? (c === Pi ? r.length : a.length) : 0));
  const d =
    c === Pi && /\b(transform|all)(,|$)/.test(n(`${Pi}Property`).toString());
  return { type: c, timeout: f, propCount: u, hasTransform: d };
}
function yf(i, e) {
  for (; i.length < e.length; ) i = i.concat(i);
  return Math.max(...e.map((t, n) => xf(t) + xf(i[n])));
}
function xf(i) {
  return i === "auto" ? 0 : Number(i.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wa() {
  return document.body.offsetHeight;
}
function b1(i, e, t) {
  const n = i[Vn];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")),
    e == null
      ? i.removeAttribute("class")
      : t
      ? i.setAttribute("class", e)
      : (i.className = e);
}
const vo = Symbol("_vod"),
  Vp = Symbol("_vsh"),
  l$ = {
    beforeMount(i, { value: e }, { transition: t }) {
      (i[vo] = i.style.display === "none" ? "" : i.style.display),
        t && e ? t.beforeEnter(i) : os(i, e);
    },
    mounted(i, { value: e }, { transition: t }) {
      t && e && t.enter(i);
    },
    updated(i, { value: e, oldValue: t }, { transition: n }) {
      !e != !t &&
        (n
          ? e
            ? (n.beforeEnter(i), os(i, !0), n.enter(i))
            : n.leave(i, () => {
                os(i, !1);
              })
          : os(i, e));
    },
    beforeUnmount(i, { value: e }) {
      os(i, e);
    },
  };
function os(i, e) {
  (i.style.display = e ? i[vo] : "none"), (i[Vp] = !e);
}
const qp = Symbol("");
function a$(i) {
  const e = pr();
  if (!e) return;
  const t = (e.ut = (s = i(e.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
      ).forEach((r) => $o(r, s));
    }),
    n = () => {
      const s = i(e.proxy);
      e.ce ? $o(e.ce, s) : Xa(e.subTree, s), t(s);
    };
  dp(() => {
    Kd(n);
  }),
    gl(() => {
      Cs(n, Wt, { flush: "post" });
      const s = new MutationObserver(n);
      s.observe(e.subTree.el.parentNode, { childList: !0 }),
        Kh(() => s.disconnect());
    });
}
function Xa(i, e) {
  if (i.shapeFlag & 128) {
    const t = i.suspense;
    (i = t.activeBranch),
      t.pendingBranch &&
        !t.isHydrating &&
        t.effects.push(() => {
          Xa(t.activeBranch, e);
        });
  }
  for (; i.component; ) i = i.component.subTree;
  if (i.shapeFlag & 1 && i.el) $o(i.el, e);
  else if (i.type === ot) i.children.forEach((t) => Xa(t, e));
  else if (i.type === Zs) {
    let { el: t, anchor: n } = i;
    for (; t && ($o(t, e), t !== n); ) t = t.nextSibling;
  }
}
function $o(i, e) {
  if (i.nodeType === 1) {
    const t = i.style;
    let n = "";
    for (const s in e) t.setProperty(`--${s}`, e[s]), (n += `--${s}: ${e[s]};`);
    t[qp] = n;
  }
}
const y1 = /(^|;)\s*display\s*:/;
function x1(i, e, t) {
  const n = i.style,
    s = we(t);
  let r = !1;
  if (t && !s) {
    if (e)
      if (we(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          t[l] == null && no(n, l, "");
        }
      else for (const o in e) t[o] == null && no(n, o, "");
    for (const o in t) o === "display" && (r = !0), no(n, o, t[o]);
  } else if (s) {
    if (e !== t) {
      const o = n[qp];
      o && (t += ";" + o), (n.cssText = t), (r = y1.test(t));
    }
  } else e && i.removeAttribute("style");
  vo in i && ((i[vo] = r ? n.display : ""), i[Vp] && (n.display = "none"));
}
const Sf = /\s*!important$/;
function no(i, e, t) {
  if (F(t)) t.forEach((n) => no(i, e, n));
  else if ((t == null && (t = ""), e.startsWith("--"))) i.setProperty(e, t);
  else {
    const n = S1(i, e);
    Sf.test(t)
      ? i.setProperty(Bi(n), t.replace(Sf, ""), "important")
      : (i[n] = t);
  }
}
const wf = ["Webkit", "Moz", "ms"],
  zl = {};
function S1(i, e) {
  const t = zl[e];
  if (t) return t;
  let n = Tt(e);
  if (n !== "filter" && n in i) return (zl[e] = n);
  n = ll(n);
  for (let s = 0; s < wf.length; s++) {
    const r = wf[s] + n;
    if (r in i) return (zl[e] = r);
  }
  return e;
}
const Qf = "http://www.w3.org/1999/xlink";
function Pf(i, e, t, n, s, r = Q0(e)) {
  n && e.startsWith("xlink:")
    ? t == null
      ? i.removeAttributeNS(Qf, e.slice(6, e.length))
      : i.setAttributeNS(Qf, e, t)
    : t == null || (r && !Zd(t))
    ? i.removeAttribute(e)
    : i.setAttribute(e, r ? "" : mi(t) ? String(t) : t);
}
function kf(i, e, t, n, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (i[e] = e === "innerHTML" ? Dp(t) : t);
    return;
  }
  const r = i.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const l = r === "OPTION" ? i.getAttribute("value") || "" : i.value,
      a = t == null ? (i.type === "checkbox" ? "on" : "") : String(t);
    (l !== a || !("_value" in i)) && (i.value = a),
      t == null && i.removeAttribute(e),
      (i._value = t);
    return;
  }
  let o = !1;
  if (t === "" || t == null) {
    const l = typeof i[e];
    l === "boolean"
      ? (t = Zd(t))
      : t == null && l === "string"
      ? ((t = ""), (o = !0))
      : l === "number" && ((t = 0), (o = !0));
  }
  try {
    i[e] = t;
  } catch {}
  o && i.removeAttribute(s || e);
}
function w1(i, e, t, n) {
  i.addEventListener(e, t, n);
}
function Q1(i, e, t, n) {
  i.removeEventListener(e, t, n);
}
const vf = Symbol("_vei");
function P1(i, e, t, n, s = null) {
  const r = i[vf] || (i[vf] = {}),
    o = r[e];
  if (n && o) o.value = n;
  else {
    const [l, a] = k1(e);
    if (n) {
      const h = (r[e] = C1(n, s));
      w1(i, l, h, a);
    } else o && (Q1(i, l, o, a), (r[e] = void 0));
  }
}
const $f = /(?:Once|Passive|Capture)$/;
function k1(i) {
  let e;
  if ($f.test(i)) {
    e = {};
    let n;
    for (; (n = i.match($f)); )
      (i = i.slice(0, i.length - n[0].length)), (e[n[0].toLowerCase()] = !0);
  }
  return [i[2] === ":" ? i.slice(3) : Bi(i.slice(2)), e];
}
let Il = 0;
const v1 = Promise.resolve(),
  $1 = () => Il || (v1.then(() => (Il = 0)), (Il = Date.now()));
function C1(i, e) {
  const t = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= t.attached) return;
    Dt(Z1(n, t.value), e, 5, [n]);
  };
  return (t.value = i), (t.attached = $1()), t;
}
function Z1(i, e) {
  if (F(e)) {
    const t = i.stopImmediatePropagation;
    return (
      (i.stopImmediatePropagation = () => {
        t.call(i), (i._stopped = !0);
      }),
      e.map((n) => (s) => !s._stopped && n && n(s))
    );
  } else return e;
}
const Cf = (i) =>
    i.charCodeAt(0) === 111 &&
    i.charCodeAt(1) === 110 &&
    i.charCodeAt(2) > 96 &&
    i.charCodeAt(2) < 123,
  R1 = (i, e, t, n, s, r) => {
    const o = s === "svg";
    e === "class"
      ? b1(i, n, o)
      : e === "style"
      ? x1(i, t, n)
      : rl(e)
      ? Dh(e) || P1(i, e, t, n, r)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : T1(i, e, n, o)
        )
      ? (kf(i, e, n),
        !i.tagName.includes("-") &&
          (e === "value" || e === "checked" || e === "selected") &&
          Pf(i, e, n, o, r, e !== "value"))
      : i._isVueCE && (/[A-Z]/.test(e) || !we(n))
      ? kf(i, Tt(e), n, r, e)
      : (e === "true-value"
          ? (i._trueValue = n)
          : e === "false-value" && (i._falseValue = n),
        Pf(i, e, n, o));
  };
function T1(i, e, t, n) {
  if (n)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in i && Cf(e) && K(t))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && i.tagName === "INPUT") ||
    (e === "type" && i.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const s = i.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Cf(e) && we(t) ? !1 : e in i;
}
const zp = new WeakMap(),
  Ip = new WeakMap(),
  Co = Symbol("_moveCb"),
  Zf = Symbol("_enterCb"),
  A1 = (i) => (delete i.props.mode, i),
  M1 = A1({
    name: "TransitionGroup",
    props: $e({}, jp, { tag: String, moveClass: String }),
    setup(i, { slots: e }) {
      const t = pr(),
        n = op();
      let s, r;
      return (
        Fh(() => {
          if (!s.length) return;
          const o = i.moveClass || `${i.name || "v"}-move`;
          if (!X1(s[0].el, t.vnode.el, o)) return;
          s.forEach(_1), s.forEach(E1);
          const l = s.filter(W1);
          Wa(),
            l.forEach((a) => {
              const h = a.el,
                c = h.style;
              Nt(h, o),
                (c.transform = c.webkitTransform = c.transitionDuration = "");
              const f = (h[Co] = (u) => {
                (u && u.target !== h) ||
                  ((!u || /transform$/.test(u.propertyName)) &&
                    (h.removeEventListener("transitionend", f),
                    (h[Co] = null),
                    ki(h, o)));
              });
              h.addEventListener("transitionend", f);
            });
        }),
        () => {
          const o = le(i),
            l = Lp(o);
          let a = o.tag || ot;
          if (((s = []), r))
            for (let h = 0; h < r.length; h++) {
              const c = r[h];
              c.el &&
                c.el instanceof Element &&
                (s.push(c),
                ji(c, js(c, l, n, t)),
                zp.set(c, c.el.getBoundingClientRect()));
            }
          r = e.default ? Gh(e.default()) : [];
          for (let h = 0; h < r.length; h++) {
            const c = r[h];
            c.key != null && ji(c, js(c, l, n, t));
          }
          return tt(a, null, r);
        }
      );
    },
  }),
  h$ = M1;
function _1(i) {
  const e = i.el;
  e[Co] && e[Co](), e[Zf] && e[Zf]();
}
function E1(i) {
  Ip.set(i, i.el.getBoundingClientRect());
}
function W1(i) {
  const e = zp.get(i),
    t = Ip.get(i),
    n = e.left - t.left,
    s = e.top - t.top;
  if (n || s) {
    const r = i.el.style;
    return (
      (r.transform = r.webkitTransform = `translate(${n}px,${s}px)`),
      (r.transitionDuration = "0s"),
      i
    );
  }
}
function X1(i, e, t) {
  const n = i.cloneNode(),
    s = i[Vn];
  s &&
    s.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && n.classList.remove(a));
    }),
    t.split(/\s+/).forEach((l) => l && n.classList.add(l)),
    (n.style.display = "none");
  const r = e.nodeType === 1 ? e : e.parentNode;
  r.appendChild(n);
  const { hasTransform: o } = Up(n);
  return r.removeChild(n), o;
}
const D1 = ["ctrl", "shift", "alt", "meta"],
  Y1 = {
    stop: (i) => i.stopPropagation(),
    prevent: (i) => i.preventDefault(),
    self: (i) => i.target !== i.currentTarget,
    ctrl: (i) => !i.ctrlKey,
    shift: (i) => !i.shiftKey,
    alt: (i) => !i.altKey,
    meta: (i) => !i.metaKey,
    left: (i) => "button" in i && i.button !== 0,
    middle: (i) => "button" in i && i.button !== 1,
    right: (i) => "button" in i && i.button !== 2,
    exact: (i, e) => D1.some((t) => i[`${t}Key`] && !e.includes(t)),
  },
  c$ = (i, e) => {
    const t = i._withMods || (i._withMods = {}),
      n = e.join(".");
    return (
      t[n] ||
      (t[n] = (s, ...r) => {
        for (let o = 0; o < e.length; o++) {
          const l = Y1[e[o]];
          if (l && l(s, e)) return;
        }
        return i(s, ...r);
      })
    );
  },
  j1 = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  f$ = (i, e) => {
    const t = i._withKeys || (i._withKeys = {}),
      n = e.join(".");
    return (
      t[n] ||
      (t[n] = (s) => {
        if (!("key" in s)) return;
        const r = Bi(s.key);
        if (e.some((o) => o === r || j1[o] === r)) return i(s);
      })
    );
  },
  L1 = $e({ patchProp: R1 }, p1);
let Rf;
function U1() {
  return Rf || (Rf = Xb(L1));
}
const u$ = (...i) => {
  const e = U1().createApp(...i),
    { mount: t } = e;
  return (
    (e.mount = (n) => {
      const s = q1(n);
      if (!s) return;
      const r = e._component;
      !K(r) && !r.render && !r.template && (r.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = "");
      const o = t(s, !1, V1(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function V1(i) {
  if (i instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && i instanceof MathMLElement)
    return "mathml";
}
function q1(i) {
  return we(i) ? document.querySelector(i) : i;
}
// END @vue/runtime-dom


// BEGIN @lezer/common
const Np = 1024;
let z1 = 0,
  Nl = class {
    constructor(e, t) {
      (this.from = e), (this.to = t);
    }
  };
class ne {
  constructor(e = {}) {
    (this.id = z1++),
      (this.perNode = !!e.perNode),
      (this.deserialize =
        e.deserialize ||
        (() => {
          throw new Error(
            "This node type doesn't define a deserialize function"
          );
        }));
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return (
      typeof e != "function" && (e = gt.match(e)),
      (t) => {
        let n = e(t);
        return n === void 0 ? null : [this, n];
      }
    );
  }
}
ne.closedBy = new ne({ deserialize: (i) => i.split(" ") });
ne.openedBy = new ne({ deserialize: (i) => i.split(" ") });
ne.group = new ne({ deserialize: (i) => i.split(" ") });
ne.isolate = new ne({
  deserialize: (i) => {
    if (i && i != "rtl" && i != "ltr" && i != "auto")
      throw new RangeError("Invalid value for isolate: " + i);
    return i || "auto";
  },
});
ne.contextHash = new ne({ perNode: !0 });
ne.lookAhead = new ne({ perNode: !0 });
ne.mounted = new ne({ perNode: !0 });
class Zo {
  constructor(e, t, n) {
    (this.tree = e), (this.overlay = t), (this.parser = n);
  }
  static get(e) {
    return e && e.props && e.props[ne.mounted.id];
  }
}
const I1 = Object.create(null);
class gt {
  constructor(e, t, n, s = 0) {
    (this.name = e), (this.props = t), (this.id = n), (this.flags = s);
  }
  static define(e) {
    let t = e.props && e.props.length ? Object.create(null) : I1,
      n =
        (e.top ? 1 : 0) |
        (e.skipped ? 2 : 0) |
        (e.error ? 4 : 0) |
        (e.name == null ? 8 : 0),
      s = new gt(e.name || "", t, e.id, n);
    if (e.props) {
      for (let r of e.props)
        if ((Array.isArray(r) || (r = r(s)), r)) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e) return !0;
      let t = this.prop(ne.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = Object.create(null);
    for (let n in e) for (let s of n.split(" ")) t[s] = e[n];
    return (n) => {
      for (let s = n.prop(ne.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? n.name : s[r]];
        if (o) return o;
      }
    };
  }
}
gt.none = new gt("", Object.create(null), 0, 8);
class sc {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError(
          "Node type ids should correspond to array positions when creating a node set"
        );
  }
  extend(...e) {
    let t = [];
    for (let n of this.types) {
      let s = null;
      for (let r of e) {
        let o = r(n);
        o && (s || (s = Object.assign({}, n.props)), (s[o[0].id] = o[1]));
      }
      t.push(s ? new gt(n.name, s, n.id, n.flags) : n);
    }
    return new sc(t);
  }
}
const Tr = new WeakMap(),
  Tf = new WeakMap();
var De;
(function (i) {
  (i[(i.ExcludeBuffers = 1)] = "ExcludeBuffers"),
    (i[(i.IncludeAnonymous = 2)] = "IncludeAnonymous"),
    (i[(i.IgnoreMounts = 4)] = "IgnoreMounts"),
    (i[(i.IgnoreOverlays = 8)] = "IgnoreOverlays");
})(De || (De = {}));
class Te {
  constructor(e, t, n, s, r) {
    if (
      ((this.type = e),
      (this.children = t),
      (this.positions = n),
      (this.length = s),
      (this.props = null),
      r && r.length)
    ) {
      this.props = Object.create(null);
      for (let [o, l] of r) this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = Zo.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = "";
    for (let n of this.children) {
      let s = n.toString();
      s && (t && (t += ","), (t += s));
    }
    return this.type.name
      ? (/\W/.test(this.type.name) && !this.type.isError
          ? JSON.stringify(this.type.name)
          : this.type.name) + (t.length ? "(" + t + ")" : "")
      : t;
  }
  cursor(e = 0) {
    return new Ya(this.topNode, e);
  }
  cursorAt(e, t = 0, n = 0) {
    let s = Tr.get(this) || this.topNode,
      r = new Ya(s);
    return r.moveTo(e, t), Tr.set(this, r._tree), r;
  }
  get topNode() {
    return new Ot(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let n = Vs(Tr.get(this) || this.topNode, e, t, !1);
    return Tr.set(this, n), n;
  }
  resolveInner(e, t = 0) {
    let n = Vs(Tf.get(this) || this.topNode, e, t, !0);
    return Tf.set(this, n), n;
  }
  resolveStack(e, t = 0) {
    return G1(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: n, from: s = 0, to: r = this.length } = e,
      o = e.mode || 0,
      l = (o & De.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | De.IncludeAnonymous); ; ) {
      let h = !1;
      if (
        a.from <= r &&
        a.to >= s &&
        ((!l && a.type.isAnonymous) || t(a) !== !1)
      ) {
        if (a.firstChild()) continue;
        h = !0;
      }
      for (; h && n && (l || !a.type.isAnonymous) && n(a), !a.nextSibling(); ) {
        if (!a.parent()) return;
        h = !0;
      }
    }
  }
  prop(e) {
    return e.perNode
      ? this.props
        ? this.props[e.id]
        : void 0
      : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8
      ? this
      : lc(
          gt.none,
          this.children,
          this.positions,
          0,
          this.children.length,
          0,
          this.length,
          (t, n, s) => new Te(this.type, t, n, s, this.propValues),
          e.makeTree || ((t, n, s) => new Te(gt.none, t, n, s))
        );
  }
  static build(e) {
    return F1(e);
  }
}
Te.empty = new Te(gt.none, [], [], 0);
class rc {
  constructor(e, t) {
    (this.buffer = e), (this.index = t);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new rc(this.buffer, this.index);
  }
}
class Li {
  constructor(e, t, n) {
    (this.buffer = e), (this.length = t), (this.set = n);
  }
  get type() {
    return gt.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), (t = this.buffer[t + 3]);
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e],
      n = this.buffer[e + 3],
      s = this.set.types[t],
      r = s.name;
    if (
      (/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), (e += 4), n == e)
    )
      return r;
    let o = [];
    for (; e < n; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
    return r + "(" + o.join(",") + ")";
  }
  findChild(e, t, n, s, r) {
    let { buffer: o } = this,
      l = -1;
    for (
      let a = e;
      a != t && !(Bp(r, s, o[a + 1], o[a + 2]) && ((l = a), n > 0));
      a = o[a + 3]
    );
    return l;
  }
  slice(e, t, n) {
    let s = this.buffer,
      r = new Uint16Array(t - e),
      o = 0;
    for (let l = e, a = 0; l < t; ) {
      (r[a++] = s[l++]), (r[a++] = s[l++] - n);
      let h = (r[a++] = s[l++] - n);
      (r[a++] = s[l++] - e), (o = Math.max(o, h));
    }
    return new Li(r, o, this.set);
  }
}
function Bp(i, e, t, n) {
  switch (i) {
    case -2:
      return t < e;
    case -1:
      return n >= e && t < e;
    case 0:
      return t < e && n > e;
    case 1:
      return t <= e && n > e;
    case 2:
      return n > e;
    case 4:
      return !0;
  }
}
function Vs(i, e, t, n) {
  for (
    var s;
    i.from == i.to ||
    (t < 1 ? i.from >= e : i.from > e) ||
    (t > -1 ? i.to <= e : i.to < e);

  ) {
    let o = !n && i instanceof Ot && i.index < 0 ? null : i.parent;
    if (!o) return i;
    i = o;
  }
  let r = n ? 0 : De.IgnoreOverlays;
  if (n)
    for (let o = i, l = o.parent; l; o = l, l = o.parent)
      o instanceof Ot &&
        o.index < 0 &&
        ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) !=
          o.from &&
        (i = l);
  for (;;) {
    let o = i.enter(e, t, r);
    if (!o) return i;
    i = o;
  }
}
class Gp {
  cursor(e = 0) {
    return new Ya(this, e);
  }
  getChild(e, t = null, n = null) {
    let s = Af(this, e, t, n);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, n = null) {
    return Af(this, e, t, n);
  }
  resolve(e, t = 0) {
    return Vs(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Vs(this, e, t, !0);
  }
  matchContext(e) {
    return Da(this, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e),
      n = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to) break;
      s.type.isError && s.from == s.to
        ? ((n = t), (t = s.prevSibling))
        : (t = s);
    }
    return n;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Ot extends Gp {
  constructor(e, t, n, s) {
    super(),
      (this._tree = e),
      (this.from = t),
      (this.index = n),
      (this._parent = s);
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, n, s, r = 0) {
    for (let o = this; ; ) {
      for (
        let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1;
        e != h;
        e += t
      ) {
        let c = l[e],
          f = a[e] + o.from;
        if (Bp(s, n, f, f + c.length)) {
          if (c instanceof Li) {
            if (r & De.ExcludeBuffers) continue;
            let u = c.findChild(0, c.buffer.length, t, n - f, s);
            if (u > -1) return new ei(new N1(o, c, e, f), null, u);
          } else if (r & De.IncludeAnonymous || !c.type.isAnonymous || oc(c)) {
            let u;
            if (!(r & De.IgnoreMounts) && (u = Zo.get(c)) && !u.overlay)
              return new Ot(u.tree, f, e, o);
            let d = new Ot(c, f, e, o);
            return r & De.IncludeAnonymous || !d.type.isAnonymous
              ? d
              : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, n, s);
          }
        }
      }
      if (
        r & De.IncludeAnonymous ||
        !o.type.isAnonymous ||
        (o.index >= 0
          ? (e = o.index + t)
          : (e = t < 0 ? -1 : o._parent._tree.children.length),
        (o = o._parent),
        !o)
      )
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, n = 0) {
    let s;
    if (!(n & De.IgnoreOverlays) && (s = Zo.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new Ot(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, n);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index + 1, 1, 0, 4)
      : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index - 1, -1, 0, 4)
      : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Af(i, e, t, n) {
  let s = i.cursor(),
    r = [];
  if (!s.firstChild()) return r;
  if (t != null) {
    for (let o = !1; !o; ) if (((o = s.type.is(t)), !s.nextSibling())) return r;
  }
  for (;;) {
    if (n != null && s.type.is(n)) return r;
    if ((s.type.is(e) && r.push(s.node), !s.nextSibling()))
      return n == null ? r : [];
  }
}
function Da(i, e, t = e.length - 1) {
  for (let n = i.parent; t >= 0; n = n.parent) {
    if (!n) return !1;
    if (!n.type.isAnonymous) {
      if (e[t] && e[t] != n.name) return !1;
      t--;
    }
  }
  return !0;
}
class N1 {
  constructor(e, t, n, s) {
    (this.parent = e), (this.buffer = t), (this.index = n), (this.start = s);
  }
}
class ei extends Gp {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, n) {
    super(),
      (this.context = e),
      (this._parent = t),
      (this.index = n),
      (this.type = e.buffer.set.types[e.buffer.buffer[n]]);
  }
  child(e, t, n) {
    let { buffer: s } = this.context,
      r = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        e,
        t - this.context.start,
        n
      );
    return r < 0 ? null : new ei(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, n = 0) {
    if (n & De.ExcludeBuffers) return null;
    let { buffer: s } = this.context,
      r = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        t > 0 ? 1 : -1,
        e - this.context.start,
        t
      );
    return r < 0 ? null : new ei(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent
      ? null
      : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context,
      t = e.buffer[this.index + 3];
    return t <
      (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
      ? new ei(this.context, this._parent, t)
      : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context,
      t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t
      ? this.externalSibling(-1)
      : new ei(
          this.context,
          this._parent,
          e.findChild(t, this.index, -1, 0, 4)
        );
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [],
      t = [],
      { buffer: n } = this.context,
      s = this.index + 4,
      r = n.buffer[this.index + 3];
    if (r > s) {
      let o = n.buffer[this.index + 1];
      e.push(n.slice(s, r, o)), t.push(0);
    }
    return new Te(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Fp(i) {
  if (!i.length) return null;
  let e = 0,
    t = i[0];
  for (let r = 1; r < i.length; r++) {
    let o = i[r];
    (o.from > t.from || o.to < t.to) && ((t = o), (e = r));
  }
  let n = t instanceof Ot && t.index < 0 ? null : t.parent,
    s = i.slice();
  return n ? (s[e] = n) : s.splice(e, 1), new B1(s, t);
}
class B1 {
  constructor(e, t) {
    (this.heads = e), (this.node = t);
  }
  get next() {
    return Fp(this.heads);
  }
}
function G1(i, e, t) {
  let n = i.resolveInner(e, t),
    s = null;
  for (let r = n instanceof Ot ? n : n.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [n])).push(o.resolve(e, t)), (r = o);
    } else {
      let o = Zo.get(r.tree);
      if (
        o &&
        o.overlay &&
        o.overlay[0].from <= e &&
        o.overlay[o.overlay.length - 1].to >= e
      ) {
        let l = new Ot(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [n])).push(Vs(l, e, t, !1));
      }
    }
  return s ? Fp(s) : n;
}
class Ya {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (
      ((this.mode = t),
      (this.buffer = null),
      (this.stack = []),
      (this.index = 0),
      (this.bufferNode = null),
      e instanceof Ot)
    )
      this.yieldNode(e);
    else {
      (this._tree = e.context.parent), (this.buffer = e.context);
      for (let n = e._parent; n; n = n._parent) this.stack.unshift(n.index);
      (this.bufferNode = e), this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e
      ? ((this._tree = e),
        (this.type = e.type),
        (this.from = e.from),
        (this.to = e.to),
        !0)
      : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: n, buffer: s } = this.buffer;
    return (
      (this.type = t || s.set.types[s.buffer[e]]),
      (this.from = n + s.buffer[e + 1]),
      (this.to = n + s.buffer[e + 2]),
      !0
    );
  }
  yield(e) {
    return e
      ? e instanceof Ot
        ? ((this.buffer = null), this.yieldNode(e))
        : ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
      : !1;
  }
  toString() {
    return this.buffer
      ? this.buffer.buffer.childString(this.index)
      : this._tree.toString();
  }
  enterChild(e, t, n) {
    if (!this.buffer)
      return this.yield(
        this._tree.nextChild(
          e < 0 ? this._tree._tree.children.length - 1 : 0,
          e,
          t,
          n,
          this.mode
        )
      );
    let { buffer: s } = this.buffer,
      r = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        e,
        t - this.buffer.start,
        n
      );
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, n = this.mode) {
    return this.buffer
      ? n & De.ExcludeBuffers
        ? !1
        : this.enterChild(1, e, t)
      : this.yield(this._tree.enter(e, t, n));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(
        this.mode & De.IncludeAnonymous ? this._tree._parent : this._tree.parent
      );
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e =
      this.mode & De.IncludeAnonymous
        ? this.buffer.parent
        : this.buffer.parent.nextSignificantParent();
    return (this.buffer = null), this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent
        ? this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(
                  this._tree.index + e,
                  e,
                  0,
                  4,
                  this.mode
                )
          )
        : !1;
    let { buffer: t } = this.buffer,
      n = this.stack.length - 1;
    if (e < 0) {
      let s = n < 0 ? 0 : this.stack[n] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
        return this.yieldBuf(s);
    }
    return n < 0
      ? this.yield(
          this.buffer.parent.nextChild(
            this.buffer.index + e,
            e,
            0,
            4,
            this.mode
          )
        )
      : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t,
      n,
      { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length) return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (s.buffer.buffer[r + 3] < this.index) return !1;
      ({ index: t, parent: n } = s);
    } else ({ index: t, _parent: n } = this._tree);
    for (; n; { index: t, _parent: n } = n)
      if (t > -1)
        for (
          let r = t + e, o = e < 0 ? -1 : n._tree.children.length;
          r != o;
          r += e
        ) {
          let l = n._tree.children[r];
          if (
            this.mode & De.IncludeAnonymous ||
            l instanceof Li ||
            !l.type.isAnonymous ||
            oc(l)
          )
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return !0;
    for (;;) {
      if (this.sibling(e)) return !0;
      if (this.atLastNode(e) || !this.parent()) return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (
      ;
      (this.from == this.to ||
        (t < 1 ? this.from >= e : this.from > e) ||
        (t > -1 ? this.to <= e : this.to < e)) &&
      this.parent();

    );
    for (; this.enterChild(1, e, t); );
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode,
      t = null,
      n = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index) return o;
            (t = o), (n = r + 1);
            break e;
          }
        s = this.stack[--r];
      }
    for (let s = n; s < this.stack.length; s++)
      t = new ei(this.buffer, t, this.stack[s]);
    return (this.bufferNode = new ei(this.buffer, t, this.index));
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let n = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          n++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (
        ;
        s && t && t(this), (s = this.type.isAnonymous), !this.nextSibling();

      ) {
        if (!n) return;
        this.parent(), n--, (s = !0);
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return Da(this.node, e);
    let { buffer: t } = this.buffer,
      { types: n } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0) return Da(this.node, e, s);
      let o = n[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name) return !1;
        s--;
      }
    }
    return !0;
  }
}
function oc(i) {
  return i.children.some(
    (e) => e instanceof Li || !e.type.isAnonymous || oc(e)
  );
}
function F1(i) {
  var e;
  let {
      buffer: t,
      nodeSet: n,
      maxBufferLength: s = Np,
      reused: r = [],
      minRepeatType: o = n.types.length,
    } = i,
    l = Array.isArray(t) ? new rc(t, t.length) : t,
    a = n.types,
    h = 0,
    c = 0;
  function f(Q, $, C, j, _, D) {
    let { id: U, start: R, end: B, size: H } = l,
      re = c;
    for (; H < 0; )
      if ((l.next(), H == -1)) {
        let Qe = r[U];
        C.push(Qe), j.push(R - Q);
        return;
      } else if (H == -3) {
        h = U;
        return;
      } else if (H == -4) {
        c = U;
        return;
      } else throw new RangeError(`Unrecognized record size: ${H}`);
    let oe = a[U],
      ie,
      te,
      Ce = R - Q;
    if (B - R <= s && (te = m(l.pos - $, _))) {
      let Qe = new Uint16Array(te.size - te.skip),
        Ze = l.pos - te.size,
        ke = Qe.length;
      for (; l.pos > Ze; ) ke = b(te.start, Qe, ke);
      (ie = new Li(Qe, B - te.start, n)), (Ce = te.start - Q);
    } else {
      let Qe = l.pos - H;
      l.next();
      let Ze = [],
        ke = [],
        Ut = U >= o ? U : -1,
        wi = 0,
        xn = B;
      for (; l.pos > Qe; )
        Ut >= 0 && l.id == Ut && l.size >= 0
          ? (l.end <= xn - s &&
              (p(Ze, ke, R, wi, l.end, xn, Ut, re),
              (wi = Ze.length),
              (xn = l.end)),
            l.next())
          : D > 2500
          ? u(R, Qe, Ze, ke)
          : f(R, Qe, Ze, ke, Ut, D + 1);
      if (
        (Ut >= 0 && wi > 0 && wi < Ze.length && p(Ze, ke, R, wi, R, xn, Ut, re),
        Ze.reverse(),
        ke.reverse(),
        Ut > -1 && wi > 0)
      ) {
        let Qi = d(oe);
        ie = lc(oe, Ze, ke, 0, Ze.length, 0, B - R, Qi, Qi);
      } else ie = O(oe, Ze, ke, B - R, re - B);
    }
    C.push(ie), j.push(Ce);
  }
  function u(Q, $, C, j) {
    let _ = [],
      D = 0,
      U = -1;
    for (; l.pos > $; ) {
      let { id: R, start: B, end: H, size: re } = l;
      if (re > 4) l.next();
      else {
        if (U > -1 && B < U) break;
        U < 0 && (U = H - s), _.push(R, B, H), D++, l.next();
      }
    }
    if (D) {
      let R = new Uint16Array(D * 4),
        B = _[_.length - 2];
      for (let H = _.length - 3, re = 0; H >= 0; H -= 3)
        (R[re++] = _[H]),
          (R[re++] = _[H + 1] - B),
          (R[re++] = _[H + 2] - B),
          (R[re++] = re);
      C.push(new Li(R, _[2] - B, n)), j.push(B - Q);
    }
  }
  function d(Q) {
    return ($, C, j) => {
      let _ = 0,
        D = $.length - 1,
        U,
        R;
      if (D >= 0 && (U = $[D]) instanceof Te) {
        if (!D && U.type == Q && U.length == j) return U;
        (R = U.prop(ne.lookAhead)) && (_ = C[D] + U.length + R);
      }
      return O(Q, $, C, j, _);
    };
  }
  function p(Q, $, C, j, _, D, U, R) {
    let B = [],
      H = [];
    for (; Q.length > j; ) B.push(Q.pop()), H.push($.pop() + C - _);
    Q.push(O(n.types[U], B, H, D - _, R - D)), $.push(_ - C);
  }
  function O(Q, $, C, j, _ = 0, D) {
    if (h) {
      let U = [ne.contextHash, h];
      D = D ? [U].concat(D) : [U];
    }
    if (_ > 25) {
      let U = [ne.lookAhead, _];
      D = D ? [U].concat(D) : [U];
    }
    return new Te(Q, $, C, j, D);
  }
  function m(Q, $) {
    let C = l.fork(),
      j = 0,
      _ = 0,
      D = 0,
      U = C.end - s,
      R = { size: 0, start: 0, skip: 0 };
    e: for (let B = C.pos - Q; C.pos > B; ) {
      let H = C.size;
      if (C.id == $ && H >= 0) {
        (R.size = j), (R.start = _), (R.skip = D), (D += 4), (j += 4), C.next();
        continue;
      }
      let re = C.pos - H;
      if (H < 0 || re < B || C.start < U) break;
      let oe = C.id >= o ? 4 : 0,
        ie = C.start;
      for (C.next(); C.pos > re; ) {
        if (C.size < 0)
          if (C.size == -3) oe += 4;
          else break e;
        else C.id >= o && (oe += 4);
        C.next();
      }
      (_ = ie), (j += H), (D += oe);
    }
    return (
      ($ < 0 || j == Q) && ((R.size = j), (R.start = _), (R.skip = D)),
      R.size > 4 ? R : void 0
    );
  }
  function b(Q, $, C) {
    let { id: j, start: _, end: D, size: U } = l;
    if ((l.next(), U >= 0 && j < o)) {
      let R = C;
      if (U > 4) {
        let B = l.pos - (U - 4);
        for (; l.pos > B; ) C = b(Q, $, C);
      }
      ($[--C] = R), ($[--C] = D - Q), ($[--C] = _ - Q), ($[--C] = j);
    } else U == -3 ? (h = j) : U == -4 && (c = j);
    return C;
  }
  let S = [],
    P = [];
  for (; l.pos > 0; ) f(i.start || 0, i.bufferStart || 0, S, P, -1, 0);
  let x =
    (e = i.length) !== null && e !== void 0
      ? e
      : S.length
      ? P[0] + S[0].length
      : 0;
  return new Te(a[i.topID], S.reverse(), P.reverse(), x);
}
const Mf = new WeakMap();
function so(i, e) {
  if (!i.isAnonymous || e instanceof Li || e.type != i) return 1;
  let t = Mf.get(e);
  if (t == null) {
    t = 1;
    for (let n of e.children) {
      if (n.type != i || !(n instanceof Te)) {
        t = 1;
        break;
      }
      t += so(i, n);
    }
    Mf.set(e, t);
  }
  return t;
}
function lc(i, e, t, n, s, r, o, l, a) {
  let h = 0;
  for (let p = n; p < s; p++) h += so(i, e[p]);
  let c = Math.ceil((h * 1.5) / 8),
    f = [],
    u = [];
  function d(p, O, m, b, S) {
    for (let P = m; P < b; ) {
      let x = P,
        Q = O[P],
        $ = so(i, p[P]);
      for (P++; P < b; P++) {
        let C = so(i, p[P]);
        if ($ + C >= c) break;
        $ += C;
      }
      if (P == x + 1) {
        if ($ > c) {
          let C = p[x];
          d(C.children, C.positions, 0, C.children.length, O[x] + S);
          continue;
        }
        f.push(p[x]);
      } else {
        let C = O[P - 1] + p[P - 1].length - Q;
        f.push(lc(i, p, O, x, P, Q, C, null, a));
      }
      u.push(Q + S - r);
    }
  }
  return d(e, t, n, s, 0), (l || a)(f, u, o);
}
class H1 {
  constructor() {
    this.map = new WeakMap();
  }
  setBuffer(e, t, n) {
    let s = this.map.get(e);
    s || this.map.set(e, (s = new Map())), s.set(t, n);
  }
  getBuffer(e, t) {
    let n = this.map.get(e);
    return n && n.get(t);
  }
  set(e, t) {
    e instanceof ei
      ? this.setBuffer(e.context.buffer, e.index, t)
      : e instanceof Ot && this.map.set(e.tree, t);
  }
  get(e) {
    return e instanceof ei
      ? this.getBuffer(e.context.buffer, e.index)
      : e instanceof Ot
      ? this.map.get(e.tree)
      : void 0;
  }
  cursorSet(e, t) {
    e.buffer
      ? this.setBuffer(e.buffer.buffer, e.index, t)
      : this.map.set(e.tree, t);
  }
  cursorGet(e) {
    return e.buffer
      ? this.getBuffer(e.buffer.buffer, e.index)
      : this.map.get(e.tree);
  }
}
class un {
  constructor(e, t, n, s, r = !1, o = !1) {
    (this.from = e),
      (this.to = t),
      (this.tree = n),
      (this.offset = s),
      (this.open = (r ? 1 : 0) | (o ? 2 : 0));
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], n = !1) {
    let s = [new un(0, e.length, e, 0, !1, n)];
    for (let r of t) r.to > e.length && s.push(r);
    return s;
  }
  static applyChanges(e, t, n = 128) {
    if (!t.length) return e;
    let s = [],
      r = 1,
      o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null,
        f = c ? c.fromA : 1e9;
      if (f - a >= n)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h,
              p = Math.min(u.to, f) - h;
            u = d >= p ? null : new un(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if ((u && s.push(u), o.to > f)) break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c) break;
      (a = c.toA), (h = c.toA - c.toB);
    }
    return s;
  }
}
class Hp {
  startParse(e, t, n) {
    return (
      typeof e == "string" && (e = new K1(e)),
      (n = n
        ? n.length
          ? n.map((s) => new Nl(s.from, s.to))
          : [new Nl(0, 0)]
        : [new Nl(0, e.length)]),
      this.createParse(e, t || [], n)
    );
  }
  parse(e, t, n) {
    let s = this.startParse(e, t, n);
    for (;;) {
      let r = s.advance();
      if (r) return r;
    }
  }
}
class K1 {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new ne({ perNode: !0 });
// END @lezer/common


// BEGIN @codemirror/state
class he {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(
        `Invalid position ${e} in document of length ${this.length}`
      );
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(
        `Invalid line number ${e} in ${this.lines}-line document`
      );
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, n) {
    [e, t] = qn(this, e, t);
    let s = [];
    return (
      this.decompose(0, e, s, 2),
      n.length && n.decompose(0, n.length, s, 3),
      this.decompose(t, this.length, s, 1),
      Kt.from(s, this.length - (t - e) + n.length)
    );
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = qn(this, e, t);
    let n = [];
    return this.decompose(e, t, n, 0), Kt.from(n, t - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let t = this.scanIdentical(e, 1),
      n = this.length - this.scanIdentical(e, -1),
      s = new Ts(this),
      r = new Ts(e);
    for (let o = t, l = t; ; ) {
      if (
        (s.next(o),
        r.next(o),
        (o = 0),
        s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
      )
        return !1;
      if (((l += s.value.length), s.done || l >= n)) return !0;
    }
  }
  iter(e = 1) {
    return new Ts(this, e);
  }
  iterRange(e, t = this.length) {
    return new Kp(this, e, t);
  }
  iterLines(e, t) {
    let n;
    if (e == null) n = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      n = this.iterRange(
        s,
        Math.max(
          s,
          t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to
        )
      );
    }
    return new Jp(n);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {}
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0]
      ? he.empty
      : e.length <= 32
      ? new ve(e)
      : Kt.from(ve.split(e, []));
  }
}
class ve extends he {
  constructor(e, t = J1(e)) {
    super(), (this.text = e), (this.length = t);
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r],
        l = s + o.length;
      if ((t ? n : l) >= e) return new ey(s, l, n, o);
      (s = l + 1), n++;
    }
  }
  decompose(e, t, n, s) {
    let r =
      e <= 0 && t >= this.length
        ? this
        : new ve(
            _f(this.text, e, t),
            Math.min(t, this.length) - Math.max(0, e)
          );
    if (s & 1) {
      let o = n.pop(),
        l = ro(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32) n.push(new ve(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        n.push(new ve(l.slice(0, a)), new ve(l.slice(a)));
      }
    } else n.push(r);
  }
  replace(e, t, n) {
    if (!(n instanceof ve)) return super.replace(e, t, n);
    [e, t] = qn(this, e, t);
    let s = ro(this.text, ro(n.text, _f(this.text, 0, e)), t),
      r = this.length + n.length - (t - e);
    return s.length <= 32 ? new ve(s, r) : Kt.from(ve.split(s, []), r);
  }
  sliceString(e, t = this.length, n = "\n") {
    [e, t] = qn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o],
        a = r + l.length;
      r > e && o && (s += n),
        e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)),
        (r = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let n = [],
      s = -1;
    for (let r of e)
      n.push(r),
        (s += r.length + 1),
        n.length == 32 && (t.push(new ve(n, s)), (n = []), (s = -1));
    return s > -1 && t.push(new ve(n, s)), t;
  }
}
class Kt extends he {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0);
    for (let n of e) this.lines += n.lines;
  }
  lineInner(e, t, n, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r],
        l = s + o.length,
        a = n + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, n, s);
      (s = l + 1), (n = a + 1);
    }
  }
  decompose(e, t, n, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r],
        a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? n.push(l) : l.decompose(e - o, t - o, n, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, n) {
    if ((([e, t] = qn(this, e, t)), n.lines < this.lines))
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s],
          l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, n),
            h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return (c[s] = a), new Kt(c, this.length - (t - e) + n.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, n);
  }
  sliceString(e, t = this.length, n = "\n") {
    [e, t] = qn(this, e, t);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r],
        a = o + l.length;
      o > e && r && (s += n),
        e < a && t > o && (s += l.sliceString(e - o, t - o, n)),
        (o = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Kt)) return 0;
    let n = 0,
      [s, r, o, l] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l) return n;
      let a = this.children[s],
        h = e.children[r];
      if (a != h) return n + a.scanIdentical(h, t);
      n += a.length + 1;
    }
  }
  static from(e, t = e.reduce((n, s) => n + s.length + 1, -1)) {
    let n = 0;
    for (let d of e) n += d.lines;
    if (n < 32) {
      let d = [];
      for (let p of e) p.flatten(d);
      return new ve(d, t);
    }
    let s = Math.max(32, n >> 5),
      r = s << 1,
      o = s >> 1,
      l = [],
      a = 0,
      h = -1,
      c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Kt) for (let O of d.children) f(O);
      else
        d.lines > o && (a > o || !a)
          ? (u(), l.push(d))
          : d instanceof ve &&
            a &&
            (p = c[c.length - 1]) instanceof ve &&
            d.lines + p.lines <= 32
          ? ((a += d.lines),
            (h += d.length + 1),
            (c[c.length - 1] = new ve(
              p.text.concat(d.text),
              p.length + 1 + d.length
            )))
          : (a + d.lines > s && u(),
            (a += d.lines),
            (h += d.length + 1),
            c.push(d));
    }
    function u() {
      a != 0 &&
        (l.push(c.length == 1 ? c[0] : Kt.from(c, h)),
        (h = -1),
        (a = c.length = 0));
    }
    for (let d of e) f(d);
    return u(), l.length == 1 ? l[0] : new Kt(l, t);
  }
}
he.empty = new ve([""], 0);
function J1(i) {
  let e = -1;
  for (let t of i) e += t.length + 1;
  return e;
}
function ro(i, e, t = 0, n = 1e9) {
  for (let s = 0, r = 0, o = !0; r < i.length && s <= n; r++) {
    let l = i[r],
      a = s + l.length;
    a >= t &&
      (a > n && (l = l.slice(0, n - s)),
      s < t && (l = l.slice(t - s)),
      o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
      (s = a + 1);
  }
  return e;
}
function _f(i, e, t) {
  return ro(i, [""], e, t);
}
class Ts {
  constructor(e, t = 1) {
    (this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ""),
      (this.nodes = [e]),
      (this.offsets = [
        t > 0 ? 1 : (e instanceof ve ? e.text.length : e.children.length) << 1,
      ]);
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let n = this.nodes.length - 1,
        s = this.nodes[n],
        r = this.offsets[n],
        o = r >> 1,
        l = s instanceof ve ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (n == 0) return (this.done = !0), (this.value = ""), this;
        t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[n] += t), e == 0))
          return (this.lineBreak = !0), (this.value = "\n"), this;
        e--;
      } else if (s instanceof ve) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (((this.offsets[n] += t), a.length > Math.max(0, e)))
          return (
            (this.value =
              e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)),
            this
          );
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length
          ? ((e -= a.length), (this.offsets[n] += t))
          : (t < 0 && this.offsets[n]--,
            this.nodes.push(a),
            this.offsets.push(
              t > 0
                ? 1
                : (a instanceof ve ? a.text.length : a.children.length) << 1
            ));
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
      this.nextInner(e, this.dir)
    );
  }
}
class Kp {
  constructor(e, t, n) {
    (this.value = ""),
      (this.done = !1),
      (this.cursor = new Ts(e, t > n ? -1 : 1)),
      (this.pos = t > n ? e.length : 0),
      (this.from = Math.min(t, n)),
      (this.to = Math.max(t, n));
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ""), (this.done = !0), this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let n = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > n && (e = n), (n -= e);
    let { value: s } = this.cursor.next(e);
    return (
      (this.pos += (s.length + e) * t),
      (this.value =
        s.length <= n ? s : t < 0 ? s.slice(s.length - n) : s.slice(0, n)),
      (this.done = !this.value),
      this
    );
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    );
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Jp {
  constructor(e) {
    (this.inner = e),
      (this.afterBreak = !0),
      (this.value = ""),
      (this.done = !1);
  }
  next(e = 0) {
    let { done: t, lineBreak: n, value: s } = this.inner.next(e);
    return (
      t && this.afterBreak
        ? ((this.value = ""), (this.afterBreak = !1))
        : t
        ? ((this.done = !0), (this.value = ""))
        : n
        ? this.afterBreak
          ? (this.value = "")
          : ((this.afterBreak = !0), this.next())
        : ((this.value = s), (this.afterBreak = !1)),
      this
    );
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" &&
  ((he.prototype[Symbol.iterator] = function () {
    return this.iter();
  }),
  (Ts.prototype[Symbol.iterator] =
    Kp.prototype[Symbol.iterator] =
    Jp.prototype[Symbol.iterator] =
      function () {
        return this;
      }));
class ey {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.number = n), (this.text = s);
  }
  get length() {
    return this.to - this.from;
  }
}
function qn(i, e, t) {
  return (
    (e = Math.max(0, Math.min(i.length, e))),
    [e, Math.max(e, Math.min(i.length, t))]
  );
}
let En =
  "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
    .split(",")
    .map((i) => (i ? parseInt(i, 36) : 1));
for (let i = 1; i < En.length; i++) En[i] += En[i - 1];
function ty(i) {
  for (let e = 1; e < En.length; e += 2) if (En[e] > i) return En[e - 1] <= i;
  return !1;
}
function Ef(i) {
  return i >= 127462 && i <= 127487;
}
const Wf = 8205;
function Be(i, e, t = !0, n = !0) {
  return (t ? eO : iy)(i, e, n);
}
function eO(i, e, t) {
  if (e == i.length) return e;
  e && tO(i.charCodeAt(e)) && iO(i.charCodeAt(e - 1)) && e--;
  let n = Ve(i, e);
  for (e += $t(n); e < i.length; ) {
    let s = Ve(i, e);
    if (n == Wf || s == Wf || (t && ty(s))) (e += $t(s)), (n = s);
    else if (Ef(s)) {
      let r = 0,
        o = e - 2;
      for (; o >= 0 && Ef(Ve(i, o)); ) r++, (o -= 2);
      if (r % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function iy(i, e, t) {
  for (; e > 0; ) {
    let n = eO(i, e - 2, t);
    if (n < e) return n;
    e--;
  }
  return 0;
}
function tO(i) {
  return i >= 56320 && i < 57344;
}
function iO(i) {
  return i >= 55296 && i < 56320;
}
function Ve(i, e) {
  let t = i.charCodeAt(e);
  if (!iO(t) || e + 1 == i.length) return t;
  let n = i.charCodeAt(e + 1);
  return tO(n) ? ((t - 55296) << 10) + (n - 56320) + 65536 : t;
}
function ac(i) {
  return i <= 65535
    ? String.fromCharCode(i)
    : ((i -= 65536),
      String.fromCharCode((i >> 10) + 55296, (i & 1023) + 56320));
}
function $t(i) {
  return i < 65536 ? 1 : 2;
}
const ja = /\r\n?|\n/;
var Ie = (function (i) {
  return (
    (i[(i.Simple = 0)] = "Simple"),
    (i[(i.TrackDel = 1)] = "TrackDel"),
    (i[(i.TrackBefore = 2)] = "TrackBefore"),
    (i[(i.TrackAfter = 3)] = "TrackAfter"),
    i
  );
})(Ie || (Ie = {}));
class ni {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t + 1];
      e += n < 0 ? this.sections[t] : n;
    }
    return e;
  }
  get empty() {
    return (
      this.sections.length == 0 ||
      (this.sections.length == 2 && this.sections[1] < 0)
    );
  }
  iterGaps(e) {
    for (let t = 0, n = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++],
        o = this.sections[t++];
      o < 0 ? (e(n, s, r), (s += r)) : (s += o), (n += r);
    }
  }
  iterChangedRanges(e, t = !1) {
    La(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      s < 0 ? e.push(n, s) : e.push(s, n);
    }
    return new ni(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : nO(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : Ua(this, e, t);
  }
  mapPos(e, t = -1, n = Ie.Simple) {
    let s = 0,
      r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++],
        a = this.sections[o++],
        h = s + l;
      if (a < 0) {
        if (h > e) return r + (e - s);
        r += l;
      } else {
        if (
          n != Ie.Simple &&
          h >= e &&
          ((n == Ie.TrackDel && s < e && h > e) ||
            (n == Ie.TrackBefore && s < e) ||
            (n == Ie.TrackAfter && h > e))
        )
          return null;
        if (h > e || (h == e && t < 0 && !l))
          return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(
        `Position ${e} is out of range for changeset of length ${s}`
      );
    return r;
  }
  touchesRange(e, t = e) {
    for (let n = 0, s = 0; n < this.sections.length && s <= t; ) {
      let r = this.sections[n++],
        o = this.sections[n++],
        l = s + r;
      if (o >= 0 && s <= t && l >= e) return s < e && l > t ? "cover" : !0;
      s = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let n = this.sections[t++],
        s = this.sections[t++];
      e += (e ? " " : "") + n + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (
      !Array.isArray(e) ||
      e.length % 2 ||
      e.some((t) => typeof t != "number")
    )
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new ni(e);
  }
  static create(e) {
    return new ni(e);
  }
}
class Xe extends ni {
  constructor(e, t) {
    super(e), (this.inserted = t);
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError(
        "Applying change set to a document with the wrong length"
      );
    return (
      La(this, (t, n, s, r, o) => (e = e.replace(s, s + (n - t), o)), !1), e
    );
  }
  mapDesc(e, t = !1) {
    return Ua(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(),
      n = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s],
        l = t[s + 1];
      if (l >= 0) {
        (t[s] = l), (t[s + 1] = o);
        let a = s >> 1;
        for (; n.length < a; ) n.push(he.empty);
        n.push(o ? e.slice(r, r + o) : he.empty);
      }
      r += o;
    }
    return new Xe(t, n);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : nO(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : Ua(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    La(this, e, t);
  }
  get desc() {
    return ni.create(this.sections);
  }
  filter(e) {
    let t = [],
      n = [],
      s = [],
      r = new qs(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || (l == a && r.len == 0); ) {
        if (r.done) break e;
        let c = Math.min(r.len, a - l);
        Fe(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        Fe(t, c, f), f > 0 && _i(n, t, r.text), r.forward(c), (l += c);
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done) break e;
        let c = Math.min(r.len, h - l);
        Fe(t, c, -1),
          Fe(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0),
          r.forward(c),
          (l += c);
      }
    }
    return { changes: new Xe(t, n), filtered: ni.create(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let n = this.sections[t],
        s = this.sections[t + 1];
      s < 0
        ? e.push(n)
        : s == 0
        ? e.push([n])
        : e.push([n].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, n) {
    let s = [],
      r = [],
      o = 0,
      l = null;
    function a(c = !1) {
      if (!c && !s.length) return;
      o < t && Fe(s, t - o, -1);
      let f = new Xe(s, r);
      (l = l ? l.compose(f.map(l)) : f), (s = []), (r = []), (o = 0);
    }
    function h(c) {
      if (Array.isArray(c)) for (let f of c) h(f);
      else if (c instanceof Xe) {
        if (c.length != t)
          throw new RangeError(
            `Mismatched change set length (got ${c.length}, expected ${t})`
          );
        a(), (l = l ? l.compose(c.map(l)) : c);
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(
            `Invalid change range ${f} to ${u} (in doc of length ${t})`
          );
        let p = d
            ? typeof d == "string"
              ? he.of(d.split(n || ja))
              : d
            : he.empty,
          O = p.length;
        if (f == u && O == 0) return;
        f < o && a(),
          f > o && Fe(s, f - o, -1),
          Fe(s, u - f, O),
          _i(r, s, p),
          (o = u);
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new Xe(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [],
      n = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == "number") t.push(r, -1);
      else {
        if (
          !Array.isArray(r) ||
          typeof r[0] != "number" ||
          r.some((o, l) => l && typeof o != "string")
        )
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1) t.push(r[0], 0);
        else {
          for (; n.length < s; ) n.push(he.empty);
          (n[s] = he.of(r.slice(1))), t.push(r[0], n[s].length);
        }
      }
    }
    return new Xe(t, n);
  }
  static createSet(e, t) {
    return new Xe(e, t);
  }
}
function Fe(i, e, t, n = !1) {
  if (e == 0 && t <= 0) return;
  let s = i.length - 2;
  s >= 0 && t <= 0 && t == i[s + 1]
    ? (i[s] += e)
    : e == 0 && i[s] == 0
    ? (i[s + 1] += t)
    : n
    ? ((i[s] += e), (i[s + 1] += t))
    : i.push(e, t);
}
function _i(i, e, t) {
  if (t.length == 0) return;
  let n = (e.length - 2) >> 1;
  if (n < i.length) i[i.length - 1] = i[i.length - 1].append(t);
  else {
    for (; i.length < n; ) i.push(he.empty);
    i.push(t);
  }
}
function La(i, e, t) {
  let n = i.inserted;
  for (let s = 0, r = 0, o = 0; o < i.sections.length; ) {
    let l = i.sections[o++],
      a = i.sections[o++];
    if (a < 0) (s += l), (r += l);
    else {
      let h = s,
        c = r,
        f = he.empty;
      for (
        ;
        (h += l),
          (c += a),
          a && n && (f = f.append(n[(o - 2) >> 1])),
          !(t || o == i.sections.length || i.sections[o + 1] < 0);

      )
        (l = i.sections[o++]), (a = i.sections[o++]);
      e(s, h, r, c, f), (s = h), (r = c);
    }
  }
}
function Ua(i, e, t, n = !1) {
  let s = [],
    r = n ? [] : null,
    o = new qs(i),
    l = new qs(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Fe(s, h, -1), o.forward(h), l.forward(h);
    } else if (
      l.ins >= 0 &&
      (o.ins < 0 ||
        a == o.i ||
        (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
    ) {
      let h = l.len;
      for (Fe(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 &&
          a < o.i &&
          o.len <= c &&
          (Fe(s, 0, o.ins), r && _i(r, s, o.text), (a = o.i)),
          o.forward(c),
          (h -= c);
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0,
        c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          (h += f), (c -= f), l.forward(f);
        } else if (l.ins == 0 && l.len < c) (c -= l.len), l.next();
        else break;
      Fe(s, h, a < o.i ? o.ins : 0),
        r && a < o.i && _i(r, s, o.text),
        (a = o.i),
        o.forward(o.len - c);
    } else {
      if (o.done && l.done) return r ? Xe.createSet(s, r) : ni.create(s);
      throw new Error("Mismatched change set lengths");
    }
}
function nO(i, e, t = !1) {
  let n = [],
    s = t ? [] : null,
    r = new qs(i),
    o = new qs(e);
  for (let l = !1; ; ) {
    if (r.done && o.done) return s ? Xe.createSet(n, s) : ni.create(n);
    if (r.ins == 0) Fe(n, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      Fe(n, 0, o.ins, l), s && _i(s, n, o.text), o.next();
    else {
      if (r.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len),
          h = n.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Fe(n, a, c, l), s && c && _i(s, n, o.text);
        } else
          o.ins == -1
            ? (Fe(n, r.off ? 0 : r.len, a, l), s && _i(s, n, r.textBit(a)))
            : (Fe(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, l),
              s && !o.off && _i(s, n, o.text));
        (l = (r.ins > a || (o.ins >= 0 && o.len > a)) && (l || n.length > h)),
          r.forward2(a),
          o.forward(a);
      }
    }
  }
}
class qs {
  constructor(e) {
    (this.set = e), (this.i = 0), this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0);
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1;
    return t >= e.length ? he.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set,
      n = (this.i - 2) >> 1;
    return n >= t.length && !e
      ? he.empty
      : t[n].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e));
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
      ? this.next()
      : ((this.ins -= e), (this.off += e));
  }
}
class an {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.flags = n);
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let n, s;
    return (
      this.empty
        ? (n = s = e.mapPos(this.from, t))
        : ((n = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
      n == this.from && s == this.to ? this : new an(n, s, this.flags)
    );
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return v.range(e, t);
    let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return v.range(this.anchor, n);
  }
  eq(e, t = !1) {
    return (
      this.anchor == e.anchor &&
      this.head == e.head &&
      (!t || !this.empty || this.assoc == e.assoc)
    );
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return v.range(e.anchor, e.head);
  }
  static create(e, t, n) {
    return new an(e, t, n);
  }
}
class v {
  constructor(e, t) {
    (this.ranges = e), (this.mainIndex = t);
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : v.create(
          this.ranges.map((n) => n.map(e, t)),
          this.mainIndex
        );
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return !1;
    for (let n = 0; n < this.ranges.length; n++)
      if (!this.ranges[n].eq(e.ranges[n], t)) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new v([this.main], 0);
  }
  addRange(e, t = !0) {
    return v.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let n = this.ranges.slice();
    return (n[t] = e), v.create(n, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (
      !e ||
      !Array.isArray(e.ranges) ||
      typeof e.main != "number" ||
      e.main >= e.ranges.length
    )
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new v(
      e.ranges.map((t) => an.fromJSON(t)),
      e.main
    );
  }
  static single(e, t = e) {
    return new v([v.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let n = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= n : r.from < n) return v.normalized(e.slice(), t);
      n = r.to;
    }
    return new v(e, t);
  }
  static cursor(e, t = 0, n, s) {
    return an.create(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 8 : 16) |
        (n == null ? 7 : Math.min(6, n)) |
        ((eval('s ?? 16777215')) << 6)
    );
  }
  static range(e, t, n, s) {
    let r = ((eval('n ?? 16777215')) << 6) | (s == null ? 7 : Math.min(6, s));
    return t < e
      ? an.create(t, e, 48 | r)
      : an.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let n = e[t];
    e.sort((s, r) => s.from - r.from), (t = e.indexOf(n));
    for (let s = 1; s < e.length; s++) {
      let r = e[s],
        o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from,
          a = Math.max(r.to, o.to);
        s <= t && t--,
          e.splice(--s, 2, r.anchor > r.head ? v.range(a, l) : v.range(l, a));
      }
    }
    return new v(e, t);
  }
}
function sO(i, e) {
  for (let t of i.ranges)
    if (t.to > e) throw new RangeError("Selection points outside of document");
}
let hc = 0;
class z {
  constructor(e, t, n, s, r) {
    (this.combine = e),
      (this.compareInput = t),
      (this.compare = n),
      (this.isStatic = s),
      (this.id = hc++),
      (this.default = e([])),
      (this.extensions = typeof r == "function" ? r(this) : r);
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new z(
      e.combine || ((t) => t),
      e.compareInput || ((t, n) => t === n),
      e.compare || (e.combine ? (t, n) => t === n : cc),
      !!e.static,
      e.enables
    );
  }
  of(e) {
    return new oo([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new oo(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new oo(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (n) => n), this.compute([e], (n) => t(n.field(e)));
  }
}
function cc(i, e) {
  return i == e || (i.length == e.length && i.every((t, n) => t === e[n]));
}
class oo {
  constructor(e, t, n, s) {
    (this.dependencies = e),
      (this.facet = t),
      (this.type = n),
      (this.value = s),
      (this.id = hc++);
  }
  dynamicSlot(e) {
    var t;
    let n = this.value,
      s = this.facet.compareInput,
      r = this.id,
      o = e[r] >> 1,
      l = this.type == 2,
      a = !1,
      h = !1,
      c = [];
    for (let f of this.dependencies)
      f == "doc"
        ? (a = !0)
        : f == "selection"
        ? (h = !0)
        : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 ||
          c.push(e[f.id]);
    return {
      create(f) {
        return (f.values[o] = n(f)), 1;
      },
      update(f, u) {
        if (
          (a && u.docChanged) ||
          (h && (u.docChanged || u.selection)) ||
          Va(f, c)
        ) {
          let d = n(f);
          if (l ? !Xf(d, f.values[o], s) : !s(d, f.values[o]))
            return (f.values[o] = d), 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d,
          p = u.config.address[r];
        if (p != null) {
          let O = To(u, p);
          if (
            this.dependencies.every((m) =>
              m instanceof z
                ? u.facet(m) === f.facet(m)
                : m instanceof Le
                ? u.field(m, !1) == f.field(m, !1)
                : !0
            ) ||
            (l ? Xf((d = n(f)), O, s) : s((d = n(f)), O))
          )
            return (f.values[o] = O), 0;
        } else d = n(f);
        return (f.values[o] = d), 1;
      },
    };
  }
}
function Xf(i, e, t) {
  if (i.length != e.length) return !1;
  for (let n = 0; n < i.length; n++) if (!t(i[n], e[n])) return !1;
  return !0;
}
function Va(i, e) {
  let t = !1;
  for (let n of e) As(i, n) & 1 && (t = !0);
  return t;
}
function ny(i, e, t) {
  let n = t.map((a) => i[a.id]),
    s = t.map((a) => a.type),
    r = n.filter((a) => !(a & 1)),
    o = i[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < n.length; c++) {
      let f = To(a, n[c]);
      if (s[c] == 2) for (let u of f) h.push(u);
      else h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of n) As(a, h);
      return (a.values[o] = l(a)), 1;
    },
    update(a, h) {
      if (!Va(a, r)) return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : ((a.values[o] = c), 1);
    },
    reconfigure(a, h) {
      let c = Va(a, n),
        f = h.config.facets[e.id],
        u = h.facet(e);
      if (f && !c && cc(t, f)) return (a.values[o] = u), 0;
      let d = l(a);
      return e.compare(d, u) ? ((a.values[o] = u), 0) : ((a.values[o] = d), 1);
    },
  };
}
const Df = z.define({ static: !0 });
class Le {
  constructor(e, t, n, s, r) {
    (this.id = e),
      (this.createF = t),
      (this.updateF = n),
      (this.compareF = s),
      (this.spec = r),
      (this.provides = void 0);
  }
  static define(e) {
    let t = new Le(
      hc++,
      e.create,
      e.update,
      e.compare || ((n, s) => n === s),
      e
    );
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Df).find((n) => n.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (n) => ((n.values[t] = this.create(n)), 1),
      update: (n, s) => {
        let r = n.values[t],
          o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : ((n.values[t] = o), 1);
      },
      reconfigure: (n, s) =>
        s.config.address[this.id] != null
          ? ((n.values[t] = s.field(this)), 0)
          : ((n.values[t] = this.create(n)), 1),
    };
  }
  init(e) {
    return [this, Df.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const rn = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ls(i) {
  return (e) => new rO(e, i);
}
const Hi = {
  highest: ls(rn.highest),
  high: ls(rn.high),
  default: ls(rn.default),
  low: ls(rn.low),
  lowest: ls(rn.lowest),
};
class rO {
  constructor(e, t) {
    (this.inner = e), (this.prec = t);
  }
}
class xl {
  of(e) {
    return new qa(this, e);
  }
  reconfigure(e) {
    return xl.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class qa {
  constructor(e, t) {
    (this.compartment = e), (this.inner = t);
  }
}
class Ro {
  constructor(e, t, n, s, r, o) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = n,
        this.address = s,
        this.staticValues = r,
        this.facets = o,
        this.statusTemplate = [];
      this.statusTemplate.length < n.length;

    )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, n) {
    let s = [],
      r = Object.create(null),
      o = new Map();
    for (let u of sy(e, t, o))
      u instanceof Le
        ? s.push(u)
        : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = Object.create(null),
      a = [],
      h = [];
    for (let u of s) (l[u.id] = h.length << 1), h.push((d) => u.slot(d));
    let c = n == null ? void 0 : n.config.facets;
    for (let u in r) {
      let d = r[u],
        p = d[0].facet,
        O = (c && c[u]) || [];
      if (d.every((m) => m.type == 0))
        if (((l[p.id] = (a.length << 1) | 1), cc(O, d))) a.push(n.facet(p));
        else {
          let m = p.combine(d.map((b) => b.value));
          a.push(n && p.compare(m, n.facet(p)) ? n.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0
            ? ((l[m.id] = (a.length << 1) | 1), a.push(m.value))
            : ((l[m.id] = h.length << 1), h.push((b) => m.dynamicSlot(b)));
        (l[p.id] = h.length << 1), h.push((m) => ny(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Ro(e, o, f, l, a, r);
  }
}
function sy(i, e, t) {
  let n = [[], [], [], [], []],
    s = new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l) return;
      let h = n[a].indexOf(o);
      h > -1 && n[a].splice(h, 1), o instanceof qa && t.delete(o.compartment);
    }
    if ((s.set(o, l), Array.isArray(o))) for (let h of o) r(h, l);
    else if (o instanceof qa) {
      if (t.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof rO) r(o.inner, o.prec);
    else if (o instanceof Le) n[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof oo)
      n[l].push(o), o.facet.extensions && r(o.facet.extensions, rn.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
        );
      r(h, l);
    }
  }
  return r(i, rn.default), n.reduce((o, l) => o.concat(l));
}
function As(i, e) {
  if (e & 1) return 2;
  let t = e >> 1,
    n = i.status[t];
  if (n == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (n & 2) return n;
  i.status[t] = 4;
  let s = i.computeSlot(i, i.config.dynamicSlots[t]);
  return (i.status[t] = 2 | s);
}
function To(i, e) {
  return e & 1 ? i.config.staticValues[e >> 1] : i.values[e >> 1];
}
const oO = z.define(),
  za = z.define({ combine: (i) => i.some((e) => e), static: !0 }),
  lO = z.define({ combine: (i) => (i.length ? i[0] : void 0), static: !0 }),
  aO = z.define(),
  hO = z.define(),
  cO = z.define(),
  fO = z.define({ combine: (i) => (i.length ? i[0] : !1) });
class yi {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  static define() {
    return new ry();
  }
}
class ry {
  of(e) {
    return new yi(this, e);
  }
}
class oy {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new ee(this, e);
  }
}
class ee {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0
      ? void 0
      : t == this.value
      ? this
      : new ee(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new oy(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let n = [];
    for (let s of e) {
      let r = s.map(t);
      r && n.push(r);
    }
    return n;
  }
}
ee.reconfigure = ee.define();
ee.appendConfig = ee.define();
class Ae {
  constructor(e, t, n, s, r, o) {
    (this.startState = e),
      (this.changes = t),
      (this.selection = n),
      (this.effects = s),
      (this.annotations = r),
      (this.scrollIntoView = o),
      (this._doc = null),
      (this._state = null),
      n && sO(n, t.newLength),
      r.some((l) => l.type == Ae.time) ||
        (this.annotations = r.concat(Ae.time.of(Date.now())));
  }
  static create(e, t, n, s, r, o) {
    return new Ae(e, t, n, s, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(Ae.userEvent);
    return !!(
      t &&
      (t == e ||
        (t.length > e.length &&
          t.slice(0, e.length) == e &&
          t[e.length] == "."))
    );
  }
}
Ae.time = yi.define();
Ae.userEvent = yi.define();
Ae.addToHistory = yi.define();
Ae.remote = yi.define();
function ly(i, e) {
  let t = [];
  for (let n = 0, s = 0; ; ) {
    let r, o;
    if (n < i.length && (s == e.length || e[s] >= i[n]))
      (r = i[n++]), (o = i[n++]);
    else if (s < e.length) (r = e[s++]), (o = e[s++]);
    else return t;
    !t.length || t[t.length - 1] < r
      ? t.push(r, o)
      : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function uO(i, e, t) {
  var n;
  let s, r, o;
  return (
    t
      ? ((s = e.changes),
        (r = Xe.empty(e.changes.length)),
        (o = i.changes.compose(e.changes)))
      : ((s = e.changes.map(i.changes)),
        (r = i.changes.mapDesc(e.changes, !0)),
        (o = i.changes.compose(s))),
    {
      changes: o,
      selection: e.selection
        ? e.selection.map(r)
        : (n = i.selection) === null || n === void 0
        ? void 0
        : n.map(s),
      effects: ee.mapEffects(i.effects, s).concat(ee.mapEffects(e.effects, r)),
      annotations: i.annotations.length
        ? i.annotations.concat(e.annotations)
        : e.annotations,
      scrollIntoView: i.scrollIntoView || e.scrollIntoView,
    }
  );
}
function Ia(i, e, t) {
  let n = e.selection,
    s = Wn(e.annotations);
  return (
    e.userEvent && (s = s.concat(Ae.userEvent.of(e.userEvent))),
    {
      changes:
        e.changes instanceof Xe
          ? e.changes
          : Xe.of(e.changes || [], t, i.facet(lO)),
      selection: n && (n instanceof v ? n : v.single(n.anchor, n.head)),
      effects: Wn(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView,
    }
  );
}
function dO(i, e, t) {
  let n = Ia(i, e.length ? e[0] : {}, i.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    n = uO(n, Ia(i, e[r], o ? n.changes.newLength : i.doc.length), o);
  }
  let s = Ae.create(
    i,
    n.changes,
    n.selection,
    n.effects,
    n.annotations,
    n.scrollIntoView
  );
  return hy(t ? ay(s) : s);
}
function ay(i) {
  let e = i.startState,
    t = !0;
  for (let s of e.facet(aO)) {
    let r = s(i);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : ly(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1) (r = i.changes.invertedDesc), (s = Xe.empty(e.doc.length));
    else {
      let o = i.changes.filter(t);
      (s = o.changes), (r = o.filtered.mapDesc(o.changes).invertedDesc);
    }
    i = Ae.create(
      e,
      s,
      i.selection && i.selection.map(r),
      ee.mapEffects(i.effects, r),
      i.annotations,
      i.scrollIntoView
    );
  }
  let n = e.facet(hO);
  for (let s = n.length - 1; s >= 0; s--) {
    let r = n[s](i);
    r instanceof Ae
      ? (i = r)
      : Array.isArray(r) && r.length == 1 && r[0] instanceof Ae
      ? (i = r[0])
      : (i = dO(e, Wn(r), !1));
  }
  return i;
}
function hy(i) {
  let e = i.startState,
    t = e.facet(cO),
    n = i;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](i);
    r &&
      Object.keys(r).length &&
      (n = uO(n, Ia(e, r, i.changes.newLength), !0));
  }
  return n == i
    ? i
    : Ae.create(
        e,
        i.changes,
        i.selection,
        n.effects,
        n.annotations,
        n.scrollIntoView
      );
}
const cy = [];
function Wn(i) {
  return i == null ? cy : Array.isArray(i) ? i : [i];
}
var Pe = (function (i) {
  return (
    (i[(i.Word = 0)] = "Word"),
    (i[(i.Space = 1)] = "Space"),
    (i[(i.Other = 2)] = "Other"),
    i
  );
})(Pe || (Pe = {}));
const fy =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Na;
try {
  Na = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function uy(i) {
  if (Na) return Na.test(i);
  for (let e = 0; e < i.length; e++) {
    let t = i[e];
    if (
      /\w/.test(t) ||
      (t > "" && (t.toUpperCase() != t.toLowerCase() || fy.test(t)))
    )
      return !0;
  }
  return !1;
}
function dy(i) {
  return (e) => {
    if (!/\S/.test(e)) return Pe.Space;
    if (uy(e)) return Pe.Word;
    for (let t = 0; t < i.length; t++) if (e.indexOf(i[t]) > -1) return Pe.Word;
    return Pe.Other;
  };
}
class ce {
  constructor(e, t, n, s, r, o) {
    (this.config = e),
      (this.doc = t),
      (this.selection = n),
      (this.values = s),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = r),
      o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) As(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let n = this.config.address[e.id];
    if (n == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return As(this, n), To(this, n);
  }
  update(...e) {
    return dO(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config,
      { base: n, compartments: s } = t;
    for (let l of e.effects)
      l.is(xl.reconfigure)
        ? (t &&
            ((s = new Map()),
            t.compartments.forEach((a, h) => s.set(h, a)),
            (t = null)),
          s.set(l.value.compartment, l.value.extension))
        : l.is(ee.reconfigure)
        ? ((t = null), (n = l.value))
        : l.is(ee.appendConfig) && ((t = null), (n = Wn(n).concat(l.value)));
    let r;
    t
      ? (r = e.startState.values.slice())
      : ((t = Ro.resolve(n, s, this)),
        (r = new ce(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (a, h) => h.reconfigure(a, this),
          null
        ).values));
    let o = e.startState.facet(za) ? e.newSelection : e.newSelection.asSingle();
    new ce(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return (
      typeof e == "string" && (e = this.toText(e)),
      this.changeByRange((t) => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: v.cursor(t.from + e.length),
      }))
    );
  }
  changeByRange(e) {
    let t = this.selection,
      n = e(t.ranges[0]),
      s = this.changes(n.changes),
      r = [n.range],
      o = Wn(n.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]),
        h = this.changes(a.changes),
        c = h.map(s);
      for (let u = 0; u < l; u++) r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)),
        (s = s.compose(c)),
        (o = ee.mapEffects(o, c).concat(ee.mapEffects(Wn(a.effects), f)));
    }
    return { changes: s, selection: v.create(r, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof Xe
      ? e
      : Xe.of(e, this.doc.length, this.facet(ce.lineSeparator));
  }
  toText(e) {
    return he.of(e.split(this.facet(ce.lineSeparator) || ja));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (As(this, t), To(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let n in e) {
        let s = e[n];
        s instanceof Le &&
          this.config.address[s.id] != null &&
          (t[n] = s.spec.toJSON(this.field(e[n]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, n) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (n) {
      for (let r in n)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = n[r],
            l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return ce.create({
      doc: e.doc,
      selection: v.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s,
    });
  }
  static create(e = {}) {
    let t = Ro.resolve(e.extensions || [], new Map()),
      n =
        e.doc instanceof he
          ? e.doc
          : he.of((e.doc || "").split(t.staticFacet(ce.lineSeparator) || ja)),
      s = e.selection
        ? e.selection instanceof v
          ? e.selection
          : v.single(e.selection.anchor, e.selection.head)
        : v.single(0);
    return (
      sO(s, n.length),
      t.staticFacet(za) || (s = s.asSingle()),
      new ce(
        t,
        n,
        s,
        t.dynamicSlots.map(() => null),
        (r, o) => o.create(r),
        null
      )
    );
  }
  get tabSize() {
    return this.facet(ce.tabSize);
  }
  get lineBreak() {
    return this.facet(ce.lineSeparator) || "\n";
  }
  get readOnly() {
    return this.facet(fO);
  }
  phrase(e, ...t) {
    for (let n of this.facet(ce.phrases))
      if (Object.prototype.hasOwnProperty.call(n, e)) {
        e = n[e];
        break;
      }
    return (
      t.length &&
        (e = e.replace(/\$(\$|\d*)/g, (n, s) => {
          if (s == "$") return "$";
          let r = +(s || 1);
          return !r || r > t.length ? n : t[r - 1];
        })),
      e
    );
  }
  languageDataAt(e, t, n = -1) {
    let s = [];
    for (let r of this.facet(oO))
      for (let o of r(this, t, n))
        Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  charCategorizer(e) {
    return dy(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: n, length: s } = this.doc.lineAt(e),
      r = this.charCategorizer(e),
      o = e - n,
      l = e - n;
    for (; o > 0; ) {
      let a = Be(t, o, !1);
      if (r(t.slice(a, o)) != Pe.Word) break;
      o = a;
    }
    for (; l < s; ) {
      let a = Be(t, l);
      if (r(t.slice(l, a)) != Pe.Word) break;
      l = a;
    }
    return o == l ? null : v.range(o + n, l + n);
  }
}
ce.allowMultipleSelections = za;
ce.tabSize = z.define({ combine: (i) => (i.length ? i[0] : 4) });
ce.lineSeparator = lO;
ce.readOnly = fO;
ce.phrases = z.define({
  compare(i, e) {
    let t = Object.keys(i),
      n = Object.keys(e);
    return t.length == n.length && t.every((s) => i[s] == e[s]);
  },
});
ce.languageData = oO;
ce.changeFilter = aO;
ce.transactionFilter = hO;
ce.transactionExtender = cO;
xl.reconfigure = ee.define();
function ri(i, e, t = {}) {
  let n = {};
  for (let s of i)
    for (let r of Object.keys(s)) {
      let o = s[r],
        l = n[r];
      if (l === void 0) n[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r)) n[r] = t[r](l, o);
        else throw new Error("Config merge conflict for field " + r);
    }
  for (let s in e) n[s] === void 0 && (n[s] = e[s]);
  return n;
}
class On {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return zs.create(e, t, this);
  }
}
On.prototype.startSide = On.prototype.endSide = 0;
On.prototype.point = !1;
On.prototype.mapMode = Ie.TrackDel;
class zs {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.value = n);
  }
  static create(e, t, n) {
    return new zs(e, t, n);
  }
}
function Ba(i, e) {
  return i.from - e.from || i.value.startSide - e.value.startSide;
}
class fc {
  constructor(e, t, n, s) {
    (this.from = e), (this.to = t), (this.value = n), (this.maxPoint = s);
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, n, s = 0) {
    let r = n ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l) return o;
      let a = (o + l) >> 1,
        h =
          r[a] - e || (n ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return h >= 0 ? o : l;
      h >= 0 ? (l = a) : (o = a + 1);
    }
  }
  between(e, t, n, s) {
    for (
      let r = this.findIndex(t, -1e9, !0), o = this.findIndex(n, 1e9, !1, r);
      r < o;
      r++
    )
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1;
  }
  map(e, t) {
    let n = [],
      s = [],
      r = [],
      o = -1,
      l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a],
        c = this.from[a] + e,
        f = this.to[a] + e,
        u,
        d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (
          p == null ||
          ((u = d = p),
          h.startSide != h.endSide && ((d = t.mapPos(c, h.endSide)), d < u))
        )
          continue;
      } else if (
        ((u = t.mapPos(c, h.startSide)),
        (d = t.mapPos(f, h.endSide)),
        u > d || (u == d && h.startSide > 0 && h.endSide <= 0))
      )
        continue;
      (d - u || h.endSide - h.startSide) < 0 ||
        (o < 0 && (o = u),
        h.point && (l = Math.max(l, d - u)),
        n.push(h),
        s.push(u - o),
        r.push(d - o));
    }
    return { mapped: n.length ? new fc(s, r, n, l) : null, pos: o };
  }
}
class ae {
  constructor(e, t, n, s) {
    (this.chunkPos = e),
      (this.chunk = t),
      (this.nextLayer = n),
      (this.maxPoint = s);
  }
  static create(e, t, n, s) {
    return new ae(e, t, n, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let {
        add: t = [],
        sort: n = !1,
        filterFrom: s = 0,
        filterTo: r = this.length,
      } = e,
      o = e.filter;
    if (t.length == 0 && !o) return this;
    if ((n && (t = t.slice().sort(Ba)), this.isEmpty))
      return t.length ? ae.of(t) : this;
    let l = new pO(this, null, -1).goto(0),
      a = 0,
      h = [],
      c = new Ui();
    for (; l.value || a < t.length; )
      if (
        a < t.length &&
        (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0
      ) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 &&
        l.chunkIndex < this.chunk.length &&
        (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
        (!o ||
          s > this.chunkEnd(l.chunkIndex) ||
          r < this.chunkPos[l.chunkIndex]) &&
        c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
          ? l.nextChunk()
          : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) &&
              (c.addInner(l.from, l.to, l.value) ||
                h.push(zs.create(l.from, l.to, l.value))),
            l.next());
    return c.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? ae.empty
        : this.nextLayer.update({
            add: h,
            filter: o,
            filterFrom: s,
            filterTo: r,
          })
    );
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [],
      n = [],
      s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o],
        a = this.chunk[o],
        h = e.touchesRange(l, l + a.length);
      if (h === !1)
        (s = Math.max(s, a.maxPoint)), t.push(a), n.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && ((s = Math.max(s, c.maxPoint)), t.push(c), n.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new ae(n, t, r || ae.empty, s);
  }
  between(e, t, n) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s],
          o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, n) === !1)
          return;
      }
      this.nextLayer.between(e, t, n);
    }
  }
  iter(e = 0) {
    return Is.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Is.from(e).goto(t);
  }
  static compare(e, t, n, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      l = t.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      a = Yf(o, l, n),
      h = new as(o, a, r),
      c = new as(l, a, r);
    n.iterGaps((f, u, d) => jf(h, f, c, u, d, s)),
      n.empty && n.length == 0 && jf(h, 0, c, 0, 0, s);
  }
  static eq(e, t, n = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0),
      o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length) return !1;
    if (!r.length) return !0;
    let l = Yf(r, o),
      a = new as(r, l, 0).goto(n),
      h = new as(o, l, 0).goto(n);
    for (;;) {
      if (
        a.to != h.to ||
        !Ga(a.active, h.active) ||
        (a.point && (!h.point || !a.point.eq(h.point)))
      )
        return !1;
      if (a.to > s) return !0;
      a.next(), h.next();
    }
  }
  static spans(e, t, n, s, r = -1) {
    let o = new as(e, null, r).goto(t),
      l = t,
      a = o.openStart;
    for (;;) {
      let h = Math.min(o.to, n);
      if (o.point) {
        let c = o.activeForPoint(o.to),
          f =
            o.pointFrom < t
              ? c.length + 1
              : o.point.startSide < 0
              ? c.length
              : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank),
          (a = Math.min(o.openEnd(h), c.length));
      } else h > l && (s.span(l, h, o.active, a), (a = o.openEnd(h)));
      if (o.to > n) return a + (o.point && o.to > n ? 1 : 0);
      (l = o.to), o.next();
    }
  }
  static of(e, t = !1) {
    let n = new Ui();
    for (let s of e instanceof zs ? [e] : t ? py(e) : e)
      n.add(s.from, s.to, s.value);
    return n.finish();
  }
  static join(e) {
    if (!e.length) return ae.empty;
    let t = e[e.length - 1];
    for (let n = e.length - 2; n >= 0; n--)
      for (let s = e[n]; s != ae.empty; s = s.nextLayer)
        t = new ae(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
ae.empty = new ae([], [], null, -1);
function py(i) {
  if (i.length > 1)
    for (let e = i[0], t = 1; t < i.length; t++) {
      let n = i[t];
      if (Ba(e, n) > 0) return i.slice().sort(Ba);
      e = n;
    }
  return i;
}
ae.empty.nextLayer = ae.empty;
class Ui {
  finishChunk(e) {
    this.chunks.push(new fc(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []));
  }
  constructor() {
    (this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null);
  }
  add(e, t, n) {
    this.addInner(e, t, n) ||
      (this.nextLayer || (this.nextLayer = new Ui())).add(e, t, n);
  }
  addInner(e, t, n) {
    let s = e - this.lastTo || n.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0)
      throw new Error(
        "Ranges must be added sorted by `from` position and `startSide`"
      );
    return s < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = n),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(n),
        n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e);
    let n = t.value.length - 1;
    return (
      (this.last = t.value[n]),
      (this.lastFrom = t.from[n] + e),
      (this.lastTo = t.to[n] + e),
      !0
    );
  }
  finish() {
    return this.finishInner(ae.empty);
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0))
      return e;
    let t = ae.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint
    );
    return (this.from = null), t;
  }
}
function Yf(i, e, t) {
  let n = new Map();
  for (let r of i)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && n.set(r.chunk[o], r.chunkPos[o]);
  let s = new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = n.get(r.chunk[o]);
      l != null &&
        (t ? t.mapPos(l) : l) == r.chunkPos[o] &&
        !(t != null && t.touchesRange(l, l + r.chunk[o].length)) &&
        s.add(r.chunk[o]);
    }
  return s;
}
class pO {
  constructor(e, t, n, s = 0) {
    (this.layer = e), (this.skip = t), (this.minPoint = n), (this.rank = s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return (
      (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
    );
  }
  gotoInner(e, t, n) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (
        !(
          (this.skip && this.skip.has(s)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          s.maxPoint < this.minPoint
        )
      )
        break;
      this.chunkIndex++, (n = !1);
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0
      );
      (!n || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        (this.from = this.to = 1e9), (this.value = null);
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          n = e + t.from[this.rangeIndex];
        if (
          ((this.from = n),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 ||
            (this.value.point && this.to - this.from >= this.minPoint))
        )
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next();
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    );
  }
}
class Is {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, n = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= n && s.push(new pO(o, t, n, r));
    return s.length == 1 ? s[0] : new Is(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let n of this.heap) n.goto(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Bl(this.heap, n);
    return this.next(), this;
  }
  forward(e, t) {
    for (let n of this.heap) n.forward(e, t);
    for (let n = this.heap.length >> 1; n >= 0; n--) Bl(this.heap, n);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
    else {
      let e = this.heap[0];
      (this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        Bl(this.heap, 0);
    }
  }
}
function Bl(i, e) {
  for (let t = i[e]; ; ) {
    let n = (e << 1) + 1;
    if (n >= i.length) break;
    let s = i[n];
    if (
      (n + 1 < i.length && s.compare(i[n + 1]) >= 0 && ((s = i[n + 1]), n++),
      t.compare(s) < 0)
    )
      break;
    (i[n] = t), (i[e] = s), (e = n);
  }
}
class as {
  constructor(e, t, n) {
    (this.minPoint = n),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = Is.from(e, t, n));
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    );
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e ||
        this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Ar(this.active, e),
      Ar(this.activeTo, e),
      Ar(this.activeRank, e),
      (this.minActive = Lf(this.active, this.activeTo));
  }
  addActive(e) {
    let t = 0,
      { value: n, to: s, rank: r } = this.cursor;
    for (
      ;
      t < this.activeRank.length &&
      (r - this.activeRank[t] || s - this.activeTo[t]) > 0;

    )
      t++;
    Mr(this.active, t, n),
      Mr(this.activeTo, t, s),
      Mr(this.activeRank, t, r),
      e && Mr(e, t, this.cursor.from),
      (this.minActive = Lf(this.active, this.activeTo));
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let n = this.openStart < 0 ? [] : null;
    for (;;) {
      let s = this.minActive;
      if (
        s > -1 &&
        (this.activeTo[s] - this.cursor.from ||
          this.active[s].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[s] > e) {
          (this.to = this.activeTo[s]), (this.endSide = this.active[s].endSide);
          break;
        }
        this.removeActive(s), n && Ar(n, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          (this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point) this.addActive(n), this.cursor.next();
          else if (
            t &&
            this.cursor.to == this.to &&
            this.cursor.from < this.cursor.to
          )
            this.cursor.next();
          else {
            (this.point = r),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = r.endSide),
              this.cursor.next(),
              this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (n) {
      this.openStart = 0;
      for (let s = n.length - 1; s >= 0 && n[s] < e; s--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (
      let n = this.active.length - 1;
      n >= 0 && !(this.activeRank[n] < this.pointRank);
      n--
    )
      (this.activeTo[n] > e ||
        (this.activeTo[n] == e &&
          this.active[n].endSide >= this.point.endSide)) &&
        t.push(this.active[n]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--)
      t++;
    return t;
  }
}
function jf(i, e, t, n, s, r) {
  i.goto(e), t.goto(n);
  let o = n + s,
    l = n,
    a = n - e;
  for (;;) {
    let h = i.to + a - t.to || i.endSide - t.endSide,
      c = h < 0 ? i.to + a : t.to,
      f = Math.min(c, o);
    if (
      (i.point || t.point
        ? (i.point &&
            t.point &&
            (i.point == t.point || i.point.eq(t.point)) &&
            Ga(i.activeForPoint(i.to), t.activeForPoint(t.to))) ||
          r.comparePoint(l, f, i.point, t.point)
        : f > l &&
          !Ga(i.active, t.active) &&
          r.compareRange(l, f, i.active, t.active),
      c > o)
    )
      break;
    (l = c), h <= 0 && i.next(), h >= 0 && t.next();
  }
}
function Ga(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++)
    if (i[t] != e[t] && !i[t].eq(e[t])) return !1;
  return !0;
}
function Ar(i, e) {
  for (let t = e, n = i.length - 1; t < n; t++) i[t] = i[t + 1];
  i.pop();
}
function Mr(i, e, t) {
  for (let n = i.length - 1; n >= e; n--) i[n + 1] = i[n];
  i[e] = t;
}
function Lf(i, e) {
  let t = -1,
    n = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - n || i[s].endSide - i[t].endSide) < 0 && ((t = s), (n = e[s]));
  return t;
}
function Kn(i, e, t = i.length) {
  let n = 0;
  for (let s = 0; s < t; )
    i.charCodeAt(s) == 9 ? ((n += e - (n % e)), s++) : (n++, (s = Be(i, s)));
  return n;
}
function Fa(i, e, t, n) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e) return s;
    if (s == i.length) break;
    (r += i.charCodeAt(s) == 9 ? t - (r % t) : 1), (s = Be(i, s));
  }
  return n === !0 ? -1 : i.length;
}
// END @codemirror/state


// BEGIN style-mod
const Ha = "ͼ",
  Uf = typeof Symbol > "u" ? "__" + Ha : Symbol.for(Ha),
  Ka =
    typeof Symbol > "u"
      ? "__styleSet" + Math.floor(Math.random() * 1e8)
      : Symbol("styleSet"),
  Vf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Vi {
  constructor(e, t) {
    this.rules = [];
    let { finish: n } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [],
        f = /^@(\w+)\b/.exec(o[0]),
        u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d
              .split(/,\s*/)
              .map((O) => o.map((m) => O.replace(/&/, m)))
              .reduce((O, m) => O.concat(m)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError(
              "The value of a property (" + d + ") should be a primitive value."
            );
          r(s(d), p, c, u);
        } else
          p != null &&
            c.push(
              d
                .replace(/_.*/, "")
                .replace(/[A-Z]/g, (O) => "-" + O.toLowerCase()) +
                ": " +
                p +
                ";"
            );
      }
      (c.length || u) &&
        a.push(
          (n && !f && !h ? o.map(n) : o).join(", ") + " {" + c.join(" ") + "}"
        );
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join("\n");
  }
  static newName() {
    let e = Vf[Uf] || 1;
    return (Vf[Uf] = e + 1), Ha + e.toString(36);
  }
  static mount(e, t, n) {
    let s = e[Ka],
      r = n && n.nonce;
    s ? r && s.setNonce(r) : (s = new Oy(e, r)),
      s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let qf = new Map();
class Oy {
  constructor(e, t) {
    let n = e.ownerDocument || e,
      s = n.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = qf.get(n);
      if (r) return (e[Ka] = r);
      (this.sheet = new s.CSSStyleSheet()), qf.set(n, this);
    } else
      (this.styleTag = n.createElement("style")),
        t && this.styleTag.setAttribute("nonce", t);
    (this.modules = []), (e[Ka] = this);
  }
  mount(e, t) {
    let n = this.sheet,
      s = 0,
      r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = this.modules.indexOf(l);
      if (
        (a < r && a > -1 && (this.modules.splice(a, 1), r--, (a = -1)), a == -1)
      ) {
        if ((this.modules.splice(r++, 0, l), n))
          for (let h = 0; h < l.rules.length; h++)
            n.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        (s += l.rules.length), r++;
      }
    }
    if (n)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 &&
        (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + "\n";
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l &&
        l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag &&
      this.styleTag.getAttribute("nonce") != e &&
      this.styleTag.setAttribute("nonce", e);
  }
}
// END style-mod


// BEGIN w3c-keyname
var qi = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: decodeURIComponent("%60"),
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
  Ns = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
  },
  gy = typeof navigator < "u" && /Mac/.test(navigator.platform),
  my =
    typeof navigator < "u" &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var qe = 0; qe < 10; qe++) qi[48 + qe] = qi[96 + qe] = String(qe);
for (var qe = 1; qe <= 24; qe++) qi[qe + 111] = "F" + qe;
for (var qe = 65; qe <= 90; qe++)
  (qi[qe] = String.fromCharCode(qe + 32)), (Ns[qe] = String.fromCharCode(qe));
for (var Gl in qi) Ns.hasOwnProperty(Gl) || (Ns[Gl] = qi[Gl]);
function by(i) {
  var e =
      (gy && i.metaKey && i.shiftKey && !i.ctrlKey && !i.altKey) ||
      (my && i.shiftKey && i.key && i.key.length == 1) ||
      i.key == "Unidentified",
    t =
      (!e && i.key) ||
      (i.shiftKey ? Ns : qi)[i.keyCode] ||
      i.key ||
      "Unidentified";
  return (
    t == "Esc" && (t = "Escape"),
    t == "Del" && (t = "Delete"),
    t == "Left" && (t = "ArrowLeft"),
    t == "Up" && (t = "ArrowUp"),
    t == "Right" && (t = "ArrowRight"),
    t == "Down" && (t = "ArrowDown"),
    t
  );
}
// END w3c-keyname


// BEGIN @codemirror/view
function Bs(i) {
  let e;
  return (
    i.nodeType == 11 ? (e = i.getSelection ? i : i.ownerDocument) : (e = i),
    e.getSelection()
  );
}
function Ja(i, e) {
  return e ? i == e || i.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function yy(i) {
  let e = i.activeElement;
  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
  return e;
}
function lo(i, e) {
  if (!e.anchorNode) return !1;
  try {
    return Ja(i, e.anchorNode);
  } catch {
    return !1;
  }
}
function Gs(i) {
  return i.nodeType == 3
    ? mn(i, 0, i.nodeValue.length).getClientRects()
    : i.nodeType == 1
    ? i.getClientRects()
    : [];
}
function Ms(i, e, t, n) {
  return t ? zf(i, e, t, n, -1) || zf(i, e, t, n, 1) : !1;
}
function gn(i) {
  for (var e = 0; ; e++) if (((i = i.previousSibling), !i)) return e;
}
function Ao(i) {
  return (
    i.nodeType == 1 &&
    /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName)
  );
}
function zf(i, e, t, n, s) {
  for (;;) {
    if (i == t && e == n) return !0;
    if (e == (s < 0 ? 0 : pi(i))) {
      if (i.nodeName == "DIV") return !1;
      let r = i.parentNode;
      if (!r || r.nodeType != 1) return !1;
      (e = gn(i) + (s < 0 ? 0 : 1)), (i = r);
    } else if (i.nodeType == 1) {
      if (
        ((i = i.childNodes[e + (s < 0 ? -1 : 0)]),
        i.nodeType == 1 && i.contentEditable == "false")
      )
        return !1;
      e = s < 0 ? pi(i) : 0;
    } else return !1;
  }
}
function pi(i) {
  return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length;
}
function uc(i, e) {
  let t = e ? i.left : i.right;
  return { left: t, right: t, top: i.top, bottom: i.bottom };
}
function xy(i) {
  let e = i.visualViewport;
  return e
    ? { left: 0, right: e.width, top: 0, bottom: e.height }
    : { left: 0, right: i.innerWidth, top: 0, bottom: i.innerHeight };
}
function OO(i, e) {
  let t = e.width / i.offsetWidth,
    n = e.height / i.offsetHeight;
  return (
    ((t > 0.995 && t < 1.005) ||
      !isFinite(t) ||
      Math.abs(e.width - i.offsetWidth) < 1) &&
      (t = 1),
    ((n > 0.995 && n < 1.005) ||
      !isFinite(n) ||
      Math.abs(e.height - i.offsetHeight) < 1) &&
      (n = 1),
    { scaleX: t, scaleY: n }
  );
}
function Sy(i, e, t, n, s, r, o, l) {
  let a = i.ownerDocument,
    h = a.defaultView || window;
  for (let c = i, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u,
        d = c == a.body,
        p = 1,
        O = 1;
      if (d) u = xy(h);
      else {
        if (
          (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0),
          c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth)
        ) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let S = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: O } = OO(c, S)),
          (u = {
            left: S.left,
            right: S.left + c.clientWidth * p,
            top: S.top,
            bottom: S.top + c.clientHeight * O,
          });
      }
      let m = 0,
        b = 0;
      if (s == "nearest")
        e.top < u.top
          ? ((b = -(u.top - e.top + o)),
            t > 0 &&
              e.bottom > u.bottom + b &&
              (b = e.bottom - u.bottom + b + o))
          : e.bottom > u.bottom &&
            ((b = e.bottom - u.bottom + o),
            t < 0 && e.top - b < u.top && (b = -(u.top + b - e.top + o)));
      else {
        let S = e.bottom - e.top,
          P = u.bottom - u.top;
        b =
          (s == "center" && S <= P
            ? e.top + S / 2 - P / 2
            : s == "start" || (s == "center" && t < 0)
            ? e.top - o
            : e.bottom - P + o) - u.top;
      }
      if (
        (n == "nearest"
          ? e.left < u.left
            ? ((m = -(u.left - e.left + r)),
              t > 0 && e.right > u.right + m && (m = e.right - u.right + m + r))
            : e.right > u.right &&
              ((m = e.right - u.right + r),
              t < 0 && e.left < u.left + m && (m = -(u.left + m - e.left + r)))
          : (m =
              (n == "center"
                ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2
                : (n == "start") == l
                ? e.left - r
                : e.right - (u.right - u.left) + r) - u.left),
        m || b)
      )
        if (d) h.scrollBy(m, b);
        else {
          let S = 0,
            P = 0;
          if (b) {
            let x = c.scrollTop;
            (c.scrollTop += b / O), (P = (c.scrollTop - x) * O);
          }
          if (m) {
            let x = c.scrollLeft;
            (c.scrollLeft += m / p), (S = (c.scrollLeft - x) * p);
          }
          (e = {
            left: e.left - S,
            top: e.top - P,
            right: e.right - S,
            bottom: e.bottom - P,
          }),
            S && Math.abs(S - m) < 1 && (n = "nearest"),
            P && Math.abs(P - b) < 1 && (s = "nearest");
        }
      if (d) break;
      c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11) c = c.host;
    else break;
}
function wy(i) {
  let e = i.ownerDocument;
  for (let t = i.parentNode; t && t != e.body; )
    if (t.nodeType == 1) {
      if (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth)
        return t;
      t = t.assignedSlot || t.parentNode;
    } else if (t.nodeType == 11) t = t.host;
    else break;
  return null;
}
class Qy {
  constructor() {
    (this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0);
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    );
  }
  setRange(e) {
    let { anchorNode: t, focusNode: n } = e;
    this.set(
      t,
      Math.min(e.anchorOffset, t ? pi(t) : 0),
      n,
      Math.min(e.focusOffset, n ? pi(n) : 0)
    );
  }
  set(e, t, n, s) {
    (this.anchorNode = e),
      (this.anchorOffset = t),
      (this.focusNode = n),
      (this.focusOffset = s);
  }
}
let wn = null;
function gO(i) {
  if (i.setActive) return i.setActive();
  if (wn) return i.focus(wn);
  let e = [];
  for (
    let t = i;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (i.focus(
      wn == null
        ? {
            get preventScroll() {
              return (wn = { preventScroll: !0 }), !0;
            },
          }
        : void 0
    ),
    !wn)
  ) {
    wn = !1;
    for (let t = 0; t < e.length; ) {
      let n = e[t++],
        s = e[t++],
        r = e[t++];
      n.scrollTop != s && (n.scrollTop = s),
        n.scrollLeft != r && (n.scrollLeft = r);
    }
  }
}
let If;
function mn(i, e, t = e) {
  let n = If || (If = document.createRange());
  return n.setEnd(i, t), n.setStart(i, e), n;
}
function Xn(i, e, t, n) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  n &&
    ({
      altKey: s.altKey,
      ctrlKey: s.ctrlKey,
      shiftKey: s.shiftKey,
      metaKey: s.metaKey,
    } = n);
  let r = new KeyboardEvent("keydown", s);
  (r.synthetic = !0), i.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return (
    (o.synthetic = !0),
    i.dispatchEvent(o),
    r.defaultPrevented || o.defaultPrevented
  );
}
function Py(i) {
  for (; i; ) {
    if (i && (i.nodeType == 9 || (i.nodeType == 11 && i.host))) return i;
    i = i.assignedSlot || i.parentNode;
  }
  return null;
}
function mO(i) {
  for (; i.attributes.length; ) i.removeAttributeNode(i.attributes[0]);
}
function ky(i, e) {
  let t = e.focusNode,
    n = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != n) return !1;
  for (n = Math.min(n, pi(t)); ; )
    if (n) {
      if (t.nodeType != 1) return !1;
      let s = t.childNodes[n - 1];
      s.contentEditable == "false" ? n-- : ((t = s), (n = pi(t)));
    } else {
      if (t == i) return !0;
      (n = gn(t)), (t = t.parentNode);
    }
}
function bO(i) {
  return i.scrollTop > Math.max(1, i.scrollHeight - i.clientHeight - 4);
}
function yO(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n > 0) return { node: t, offset: n };
    if (t.nodeType == 1 && n > 0) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[n - 1]), (n = pi(t));
    } else if (t.parentNode && !Ao(t)) (n = gn(t)), (t = t.parentNode);
    else return null;
  }
}
function xO(i, e) {
  for (let t = i, n = e; ; ) {
    if (t.nodeType == 3 && n < t.nodeValue.length)
      return { node: t, offset: n };
    if (t.nodeType == 1 && n < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[n]), (n = 0);
    } else if (t.parentNode && !Ao(t)) (n = gn(t) + 1), (t = t.parentNode);
    else return null;
  }
}
class et {
  constructor(e, t, n = !0) {
    (this.node = e), (this.offset = t), (this.precise = n);
  }
  static before(e, t) {
    return new et(e.parentNode, gn(e), t);
  }
  static after(e, t) {
    return new et(e.parentNode, gn(e) + 1, t);
  }
}
const dc = [];
class Oe {
  constructor() {
    (this.parent = null), (this.dom = null), (this.flags = 2);
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let n of this.children) {
      if (n == e) return t;
      t += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let n = this.dom,
        s = null,
        r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : n.firstChild)) {
            let l = Oe.get(r);
            (!l || (!l.parent && l.canReuseDOM(o))) && o.reuseDOM(r);
          }
          o.sync(e, t), (o.flags &= -8);
        }
        if (
          ((r = s ? s.nextSibling : n.firstChild),
          t && !t.written && t.node == n && r != o.dom && (t.written = !0),
          o.dom.parentNode == n)
        )
          for (; r && r != o.dom; ) r = Nf(r);
        else n.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (
        r = s ? s.nextSibling : n.firstChild,
          r && t && t.node == n && (t.written = !0);
        r;

      )
        r = Nf(r);
    } else if (this.flags & 1)
      for (let n of this.children)
        n.flags & 7 && (n.sync(e, t), (n.flags &= -8));
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let n;
    if (e == this.dom) n = this.dom.childNodes[t];
    else {
      let s = pi(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (;;) {
        let r = e.parentNode;
        if (r == this.dom) break;
        s == 0 &&
          r.firstChild != r.lastChild &&
          (e == r.firstChild ? (s = -1) : (s = 1)),
          (e = r);
      }
      s < 0 ? (n = e) : (n = e.nextSibling);
    }
    if (n == this.dom.firstChild) return 0;
    for (; n && !Oe.get(n); ) n = n.nextSibling;
    if (!n) return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == n) return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, n = 0) {
    let s = -1,
      r = -1,
      o = -1,
      l = -1;
    for (let a = 0, h = n, c = n; a < this.children.length; a++) {
      let f = this.children[a],
        u = h + f.length;
      if (h < e && u > t) return f.domBoundsAround(e, t, h);
      if (
        (u >= e && s == -1 && ((s = a), (r = h)),
        h > t && f.dom.parentNode == this.dom)
      ) {
        (o = a), (l = c);
        break;
      }
      (c = u), (h = u + f.breakAfter);
    }
    return {
      from: r,
      to: l < 0 ? n + this.length : l,
      startDOM:
        (s ? this.children[s - 1].dom.nextSibling : null) ||
        this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null,
    };
  }
  markDirty(e = !1) {
    (this.flags |= 2), this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.flags |= 2), t.flags & 1)) return;
      (t.flags |= 1), (e = !1);
    }
  }
  setParent(e) {
    this.parent != e &&
      ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e &&
      (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this));
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, n = dc) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && n.indexOf(r) < 0 && r.destroy();
    }
    this.children.splice(e, t - e, ...n);
    for (let s = 0; s < n.length; s++) n[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new SO(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return (
      e +
      (this.children.length
        ? "(" + this.children.join() + ")"
        : this.length
        ? "[" + (e == "Text" ? this.text : this.length) + "]"
        : "") +
      (this.breakAfter ? "#" : "")
    );
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, n, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
Oe.prototype.breakAfter = 0;
function Nf(i) {
  let e = i.nextSibling;
  return i.parentNode.removeChild(i), e;
}
class SO {
  constructor(e, t, n) {
    (this.children = e), (this.pos = t), (this.i = n), (this.off = 0);
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos &&
          (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this;
      let n = this.children[--this.i];
      this.pos -= n.length + n.breakAfter;
    }
  }
}
function wO(i, e, t, n, s, r, o, l, a) {
  let { children: h } = i,
    c = h.length ? h[e] : null,
    f = r.length ? r[r.length - 1] : null,
    u = f ? f.breakAfter : o;
  if (
    !(
      e == n &&
      c &&
      !o &&
      !u &&
      r.length < 2 &&
      c.merge(t, s, r.length ? f : null, t == 0, l, a)
    )
  ) {
    if (n < h.length) {
      let d = h[n];
      d && (s < d.length || (d.breakAfter && f != null && f.breakAfter))
        ? (e == n && ((d = d.split(s)), (s = 0)),
          !u && f && d.merge(0, s, f, !0, 0, a)
            ? (r[r.length - 1] = d)
            : ((s || (d.children.length && !d.children[0].length)) &&
                d.merge(0, s, null, !1, 0, a),
              r.push(d)))
        : d != null && d.breakAfter && (f ? (f.breakAfter = 1) : (o = 1)),
        n++;
    }
    for (
      c &&
      ((c.breakAfter = o),
      t > 0 &&
        (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0)
          ? (c.breakAfter = r.shift().breakAfter)
          : (t < c.length ||
              (c.children.length &&
                c.children[c.children.length - 1].length == 0)) &&
            c.merge(t, c.length, null, !1, l, 0),
        e++));
      e < n && r.length;

    )
      if (h[n - 1].become(r[r.length - 1]))
        n--, r.pop(), (a = r.length ? 0 : l);
      else if (h[e].become(r[0])) e++, r.shift(), (l = r.length ? 0 : a);
      else break;
    !r.length &&
      e &&
      n < h.length &&
      !h[e - 1].breakAfter &&
      h[n].merge(0, 0, h[e - 1], !1, l, a) &&
      e--,
      (e < n || r.length) && i.replaceChildren(e, n, r);
  }
}
function QO(i, e, t, n, s, r) {
  let o = i.childCursor(),
    { i: l, off: a } = o.findPos(t, 1),
    { i: h, off: c } = o.findPos(e, -1),
    f = e - t;
  for (let u of n) f += u.length;
  (i.length += f), wO(i, h, c, l, a, n, 0, s, r);
}
let ft =
    typeof navigator < "u"
      ? navigator
      : { userAgent: "", vendor: "", platform: "" },
  eh = typeof document < "u" ? document : { documentElement: { style: {} } };
const th = /Edge\/(\d+)/.exec(ft.userAgent),
  PO = /MSIE \d/.test(ft.userAgent),
  ih = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ft.userAgent),
  Sl = !!(PO || ih || th),
  Bf = !Sl && /gecko\/(\d+)/i.test(ft.userAgent),
  Fl = !Sl && /Chrome\/(\d+)/.exec(ft.userAgent),
  Gf = "webkitFontSmoothing" in eh.documentElement.style,
  kO = !Sl && /Apple Computer/.test(ft.vendor),
  Ff = kO && (/Mobile\/\w+/.test(ft.userAgent) || ft.maxTouchPoints > 2);
var V = {
  mac: Ff || /Mac/.test(ft.platform),
  windows: /Win/.test(ft.platform),
  linux: /Linux|X11/.test(ft.platform),
  ie: Sl,
  ie_version: PO ? eh.documentMode || 6 : ih ? +ih[1] : th ? +th[1] : 0,
  gecko: Bf,
  gecko_version: Bf ? +(/Firefox\/(\d+)/.exec(ft.userAgent) || [0, 0])[1] : 0,
  chrome: !!Fl,
  chrome_version: Fl ? +Fl[1] : 0,
  ios: Ff,
  android: /Android\b/.test(ft.userAgent),
  webkit: Gf,
  safari: kO,
  webkit_version: Gf
    ? +(/\bAppleWebKit\/(\d+)/.exec(ft.userAgent) || [0, 0])[1]
    : 0,
  tabSize:
    eh.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size",
};
const vy = 256;
class Yt extends Oe {
  constructor(e) {
    super(), (this.text = e);
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (t && t.node == this.dom && (t.written = !0),
        (this.dom.nodeValue = this.text));
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, n) {
    return this.flags & 8 ||
      (n &&
        (!(n instanceof Yt) ||
          this.length - (t - e) + n.length > vy ||
          n.flags & 8))
      ? !1
      : ((this.text =
          this.text.slice(0, e) + (n ? n.text : "") + this.text.slice(t)),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = new Yt(this.text.slice(e));
    return (
      (this.text = this.text.slice(0, e)),
      this.markDirty(),
      (t.flags |= this.flags & 8),
      t
    );
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new et(this.dom, e);
  }
  domBoundsAround(e, t, n) {
    return {
      from: n,
      to: n + this.length,
      startDOM: this.dom,
      endDOM: this.dom.nextSibling,
    };
  }
  coordsAt(e, t) {
    return $y(this.dom, e, t);
  }
}
class Oi extends Oe {
  constructor(e, t = [], n = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = n);
    for (let s of t) s.setParent(this);
  }
  setAttrs(e) {
    if (
      (mO(e),
      this.mark.class && (e.className = this.mark.class),
      this.mark.attrs)
    )
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() &&
      (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    this.dom
      ? this.flags & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e, t);
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof Oi && n.mark.eq(this.mark)) ||
        (e && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : (QO(this, e, t, n ? n.children.slice() : [], r - 1, o - 1),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = [],
      n = 0,
      s = -1,
      r = 0;
    for (let l of this.children) {
      let a = n + l.length;
      a > e && t.push(n < e ? l.split(e - n) : l),
        s < 0 && n >= e && (s = r),
        (n = a),
        r++;
    }
    let o = this.length - e;
    return (
      (this.length = e),
      s > -1 && ((this.children.length = s), this.markDirty()),
      new Oi(this.mark, t, o)
    );
  }
  domAtPos(e) {
    return vO(this, e);
  }
  coordsAt(e, t) {
    return CO(this, e, t);
  }
}
function $y(i, e, t) {
  let n = i.nodeValue.length;
  e > n && (e = n);
  let s = e,
    r = e,
    o = 0;
  (e == 0 && t < 0) || (e == n && t >= 0)
    ? V.chrome || V.gecko || (e ? (s--, (o = 1)) : r < n && (r++, (o = -1)))
    : t < 0
    ? s--
    : r < n && r++;
  let l = mn(i, s, r).getClientRects();
  if (!l.length) return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return (
    V.safari &&
      !o &&
      a.width == 0 &&
      (a = Array.prototype.find.call(l, (h) => h.width) || a),
    o ? uc(a, o < 0) : a || null
  );
}
class Ei extends Oe {
  static create(e, t, n) {
    return new Ei(e, t, n);
  }
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.side = n),
      (this.prevWidget = null);
  }
  split(e) {
    let t = Ei.create(this.widget, this.length - e, this.side);
    return (this.length -= e), t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof Ei) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  become(e) {
    return e instanceof Ei &&
      e.side == this.side &&
      this.widget.constructor == e.widget.constructor
      ? (this.widget.compare(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return he.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let { view: t } = e,
      n = t && t.state.doc,
      s = this.posAtStart;
    return n ? n.slice(s, s + this.length) : he.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0)
      ? et.before(this.dom)
      : et.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let n = this.widget.coordsAt(this.dom, e, t);
    if (n) return n;
    let s = this.dom.getClientRects(),
      r = null;
    if (!s.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (
      let l = o ? s.length - 1 : 0;
      (r = s[l]), !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom);
      l += o ? -1 : 1
    );
    return uc(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class zn extends Oe {
  constructor(e) {
    super(), (this.side = e);
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof zn && e.side == this.side;
  }
  split() {
    return new zn(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      (e.className = "cm-widgetBuffer"),
        e.setAttribute("aria-hidden", "true"),
        this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? et.before(this.dom) : et.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return he.empty;
  }
  get isHidden() {
    return !0;
  }
}
Yt.prototype.children = Ei.prototype.children = zn.prototype.children = dc;
function vO(i, e) {
  let t = i.dom,
    { children: n } = i,
    s = 0;
  for (let r = 0; s < n.length; s++) {
    let o = n[s],
      l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t) return o.domAtPos(e - r);
      if (e <= r) break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = n[r - 1];
    if (o.dom.parentNode == t) return o.domAtPos(o.length);
  }
  for (let r = s; r < n.length; r++) {
    let o = n[r];
    if (o.dom.parentNode == t) return o.domAtPos(0);
  }
  return new et(t, 0);
}
function $O(i, e, t) {
  let n,
    { children: s } = i;
  t > 0 &&
  e instanceof Oi &&
  s.length &&
  (n = s[s.length - 1]) instanceof Oi &&
  n.mark.eq(e.mark)
    ? $O(n, e.children[0], t - 1)
    : (s.push(e), e.setParent(i)),
    (i.length += e.length);
}
function CO(i, e, t) {
  let n = null,
    s = -1,
    r = null,
    o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f],
        p = u + d.length;
      p >= c &&
        (d.children.length
          ? l(d, c - u)
          : (!r || (r.isHidden && t > 0)) &&
            (p > c || (u == p && d.getSide() > 0))
          ? ((r = d), (o = c - u))
          : (u < c || (u == p && d.getSide() < 0 && !d.isHidden)) &&
            ((n = d), (s = c - u))),
        (u = p);
    }
  }
  l(i, e);
  let a = (t < 0 ? n : r) || n || r;
  return a ? a.coordsAt(Math.max(0, a == n ? s : o), t) : Cy(i);
}
function Cy(i) {
  let e = i.dom.lastChild;
  if (!e) return i.dom.getBoundingClientRect();
  let t = Gs(e);
  return t[t.length - 1] || null;
}
function nh(i, e) {
  for (let t in i)
    t == "class" && e.class
      ? (e.class += " " + i.class)
      : t == "style" && e.style
      ? (e.style += ";" + i.style)
      : (e[t] = i[t]);
  return e;
}
const Hf = Object.create(null);
function Mo(i, e, t) {
  if (i == e) return !0;
  i || (i = Hf), e || (e = Hf);
  let n = Object.keys(i),
    s = Object.keys(e);
  if (
    n.length - (t && n.indexOf(t) > -1 ? 1 : 0) !=
    s.length - (t && s.indexOf(t) > -1 ? 1 : 0)
  )
    return !1;
  for (let r of n)
    if (r != t && (s.indexOf(r) == -1 || i[r] !== e[r])) return !1;
  return !0;
}
function sh(i, e, t) {
  let n = !1;
  if (e)
    for (let s in e)
      (t && s in t) ||
        ((n = !0),
        s == "style" ? (i.style.cssText = "") : i.removeAttribute(s));
  if (t)
    for (let s in t)
      (e && e[s] == t[s]) ||
        ((n = !0),
        s == "style" ? (i.style.cssText = t[s]) : i.setAttribute(s, t[s]));
  return n;
}
function Zy(i) {
  let e = Object.create(null);
  for (let t = 0; t < i.attributes.length; t++) {
    let n = i.attributes[t];
    e[n.name] = n.value;
  }
  return e;
}
class Re extends Oe {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0);
  }
  merge(e, t, n, s, r, o) {
    if (n) {
      if (!(n instanceof Re)) return !1;
      this.dom || n.transferDOM(this);
    }
    return (
      s && this.setDeco(n ? n.attrs : null),
      QO(this, e, t, n ? n.children.slice() : [], r, o),
      !0
    );
  }
  split(e) {
    let t = new Re();
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
    let { i: n, off: s } = this.childPos(e);
    s &&
      (t.append(this.children[n].split(s), 0),
      this.children[n].merge(s, this.children[n].length, null, !1, 0, 0),
      n++);
    for (let r = n; r < this.children.length; r++)
      t.append(this.children[r], 0);
    for (; n > 0 && this.children[n - 1].length == 0; )
      this.children[--n].destroy();
    return (this.children.length = n), this.markDirty(), (this.length = e), t;
  }
  transferDOM(e) {
    this.dom &&
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null));
  }
  setDeco(e) {
    Mo(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
      (this.attrs = e));
  }
  append(e, t) {
    $O(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      n = e.spec.class;
    t && (this.attrs = nh(t, this.attrs || {})),
      n && (this.attrs = nh({ class: n }, this.attrs || {}));
  }
  domAtPos(e) {
    return vO(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    var n;
    this.dom
      ? this.flags & 4 &&
        (mO(this.dom),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement("div")),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (sh(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add("cm-line"),
        (this.prevAttrs = void 0)),
      super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && Oe.get(s) instanceof Oi; ) s = s.lastChild;
    if (
      !s ||
      !this.length ||
      (s.nodeName != "BR" &&
        ((n = Oe.get(s)) === null || n === void 0 ? void 0 : n.isEditable) ==
          !1 &&
        (!V.ios || !this.children.some((r) => r instanceof Yt)))
    ) {
      let r = document.createElement("BR");
      (r.cmIgnore = !0), this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0,
      t;
    for (let n of this.children) {
      if (!(n instanceof Yt) || /[^ -~]/.test(n.text)) return null;
      let s = Gs(n.dom);
      if (s.length != 1) return null;
      (e += s[0].width), (t = s[0].height);
    }
    return e
      ? {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: e / this.length,
          textHeight: t,
        }
      : null;
  }
  coordsAt(e, t) {
    let n = CO(this, e, t);
    if (!this.children.length && n && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState,
        r = n.bottom - n.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return {
          top: n.top + o,
          bottom: n.bottom - o,
          left: n.left,
          right: n.left,
        };
      }
    }
    return n;
  }
  become(e) {
    return (
      e instanceof Re &&
      this.children.length == 0 &&
      e.children.length == 0 &&
      Mo(this.attrs, e.attrs) &&
      this.breakAfter == e.breakAfter
    );
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let n = 0, s = 0; n < e.children.length; n++) {
      let r = e.children[n],
        o = s + r.length;
      if (o >= t) {
        if (r instanceof Re) return r;
        if (o > t) break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class ui extends Oe {
  constructor(e, t, n) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.deco = n),
      (this.breakAfter = 0),
      (this.prevWidget = null);
  }
  merge(e, t, n, s, r, o) {
    return n &&
      (!(n instanceof ui) ||
        !this.widget.compare(n.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (n ? n.length : 0) + (this.length - t)), !0);
  }
  domAtPos(e) {
    return e == 0 ? et.before(this.dom) : et.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let n = new ui(this.widget, t, this.deco);
    return (n.breakAfter = this.breakAfter), n;
  }
  get children() {
    return dc;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent
      ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
      : he.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof ui && e.widget.constructor == this.widget.constructor
      ? (e.widget.compare(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.deco = e.deco),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    return this.widget.coordsAt(this.dom, e, t);
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: n } = this.deco;
    return t == n ? !1 : e < 0 ? t < 0 : n > 0;
  }
}
class xi {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, n) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {}
}
var at = (function (i) {
  return (
    (i[(i.Text = 0)] = "Text"),
    (i[(i.WidgetBefore = 1)] = "WidgetBefore"),
    (i[(i.WidgetAfter = 2)] = "WidgetAfter"),
    (i[(i.WidgetRange = 3)] = "WidgetRange"),
    i
  );
})(at || (at = {}));
class N extends On {
  constructor(e, t, n, s) {
    super(),
      (this.startSide = e),
      (this.endSide = t),
      (this.widget = n),
      (this.spec = s);
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new gr(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
      n = !!e.block;
    return (
      (t += n && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
      new zi(e, t, t, n, e.widget || null, !1)
    );
  }
  static replace(e) {
    let t = !!e.block,
      n,
      s;
    if (e.isBlockGap) (n = -5e8), (s = 4e8);
    else {
      let { start: r, end: o } = ZO(e, t);
      (n = (r ? (t ? -3e8 : -1) : 5e8) - 1),
        (s = (o ? (t ? 2e8 : 1) : -6e8) + 1);
    }
    return new zi(e, n, s, t, e.widget || null, !0);
  }
  static line(e) {
    return new mr(e);
  }
  static set(e, t = !1) {
    return ae.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
N.none = ae.empty;
class gr extends N {
  constructor(e) {
    let { start: t, end: n } = ZO(e);
    super(t ? -1 : 5e8, n ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || "span"),
      (this.class = e.class || ""),
      (this.attrs = e.attributes || null);
  }
  eq(e) {
    var t, n;
    return (
      this == e ||
      (e instanceof gr &&
        this.tagName == e.tagName &&
        (this.class ||
          ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) ==
          (e.class ||
            ((n = e.attrs) === null || n === void 0 ? void 0 : n.class)) &&
        Mo(this.attrs, e.attrs, "class"))
    );
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
gr.prototype.point = !1;
class mr extends N {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return (
      e instanceof mr &&
      this.spec.class == e.spec.class &&
      Mo(this.spec.attributes, e.spec.attributes)
    );
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
mr.prototype.mapMode = Ie.TrackBefore;
mr.prototype.point = !0;
class zi extends N {
  constructor(e, t, n, s, r, o) {
    super(t, n, r, e),
      (this.block = s),
      (this.isReplace = o),
      (this.mapMode = s
        ? t <= 0
          ? Ie.TrackBefore
          : Ie.TrackAfter
        : Ie.TrackDel);
  }
  get type() {
    return this.startSide != this.endSide
      ? at.WidgetRange
      : this.startSide <= 0
      ? at.WidgetBefore
      : at.WidgetAfter;
  }
  get heightRelevant() {
    return (
      this.block ||
      (!!this.widget &&
        (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
    );
  }
  eq(e) {
    return (
      e instanceof zi &&
      Ry(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    );
  }
  range(e, t = e) {
    if (
      this.isReplace &&
      (e > t || (e == t && this.startSide > 0 && this.endSide <= 0))
    )
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError(
        "Widget decorations can only have zero-length ranges"
      );
    return super.range(e, t);
  }
}
zi.prototype.point = !0;
function ZO(i, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: n } = i;
  return (
    t == null && (t = i.inclusive),
    n == null && (n = i.inclusive),
    { start: eval('t ?? e'), end: eval('n ?? e') }
  );
}
function Ry(i, e) {
  return i == e || !!(i && e && i.compare(e));
}
function rh(i, e, t, n = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + n >= i ? (t[s] = Math.max(t[s], e)) : t.push(i, e);
}
class _s {
  constructor(e, t, n, s) {
    (this.doc = e),
      (this.pos = t),
      (this.end = n),
      (this.disallowBlockEffectsFor = s),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.bufferMarks = []),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ""),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t);
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || (e instanceof ui && e.deco.endSide < 0));
  }
  getLine() {
    return (
      this.curLine ||
        (this.content.push((this.curLine = new Re())), (this.atCursorPos = !0)),
      this.curLine
    );
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer &&
      (this.curLine.append(_r(new zn(-1), e), e.length),
      (this.pendingBuffer = 0));
  }
  addBlockWidget(e) {
    this.flushBuffer(), (this.curLine = null), this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length
      ? this.flushBuffer()
      : (this.pendingBuffer = 0),
      !this.posCovered() &&
        !(
          e &&
          this.content.length &&
          this.content[this.content.length - 1] instanceof ui
        ) &&
        this.getLine();
  }
  buildText(e, t, n) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (((this.skip = 0), l))
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer(),
            (this.curLine = null),
            (this.atCursorPos = !0),
            e--;
          continue;
        } else (this.text = r), (this.textOff = 0);
      }
      let s = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - n)),
        this.getLine().append(
          _r(new Yt(this.text.slice(this.textOff, this.textOff + s)), t),
          n
        ),
        (this.atCursorPos = !0),
        (this.textOff += s),
        (e -= s),
        (n = 0);
    }
  }
  span(e, t, n, s) {
    this.buildText(t - e, n, s),
      (this.pos = t),
      this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, n, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && n instanceof zi) {
      if (n.block)
        throw new RangeError(
          "Block decorations may not be specified via plugins"
        );
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          "Decorations that replace line breaks may not be specified via plugins"
        );
    }
    let l = t - e;
    if (n instanceof zi)
      if (n.block)
        n.startSide > 0 && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new ui(n.widget || In.block, l, n));
      else {
        let a = Ei.create(n.widget || In.inline, l, l ? 0 : n.startSide),
          h =
            this.atCursorPos &&
            !a.isEditable &&
            r <= s.length &&
            (e < t || n.startSide > 0),
          c = !a.isEditable && (e < t || r > s.length || n.startSide <= 0),
          f = this.getLine();
        this.pendingBuffer == 2 &&
          !h &&
          !a.isEditable &&
          (this.pendingBuffer = 0),
          this.flushBuffer(s),
          h &&
            (f.append(_r(new zn(1), s), r),
            (r = s.length + Math.max(0, r - s.length))),
          f.append(_r(a, s), r),
          (this.atCursorPos = c),
          (this.pendingBuffer = c ? (e < t || r > s.length ? 1 : 2) : 0),
          this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos &&
        this.getLine().addLineDeco(n);
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ""),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, n, s, r) {
    let o = new _s(e, t, n, r);
    return (
      (o.openEnd = ae.spans(s, t, n, o)),
      o.openStart < 0 && (o.openStart = o.openEnd),
      o.finish(o.openEnd),
      o
    );
  }
}
function _r(i, e) {
  for (let t of e) i = new Oi(t, [i], i.length);
  return i;
}
class In extends xi {
  constructor(e) {
    super(), (this.tag = e);
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
In.inline = new In("span");
In.block = new In("div");
var Se = (function (i) {
  return (i[(i.LTR = 0)] = "LTR"), (i[(i.RTL = 1)] = "RTL"), i;
})(Se || (Se = {}));
const bn = Se.LTR,
  pc = Se.RTL;
function RO(i) {
  let e = [];
  for (let t = 0; t < i.length; t++) e.push(1 << +i[t]);
  return e;
}
const Ty = RO(
    "88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
  ),
  Ay = RO(
    "4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
  ),
  oh = Object.create(null),
  qt = [];
for (let i of ["()", "[]", "{}"]) {
  let e = i.charCodeAt(0),
    t = i.charCodeAt(1);
  (oh[e] = t), (oh[t] = -e);
}
function TO(i) {
  return i <= 247
    ? Ty[i]
    : 1424 <= i && i <= 1524
    ? 2
    : 1536 <= i && i <= 1785
    ? Ay[i - 1536]
    : 1774 <= i && i <= 2220
    ? 4
    : 8192 <= i && i <= 8204
    ? 256
    : 64336 <= i && i <= 65023
    ? 4
    : 1;
}
const My = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Wi {
  get dir() {
    return this.level % 2 ? pc : bn;
  }
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.level = n);
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, n, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == n) return o;
        (r < 0 ||
          (s != 0 ? (s < 0 ? l.from < t : l.to > t) : e[r].level > l.level)) &&
          (r = o);
      }
    }
    if (r < 0) throw new RangeError("Index out of range");
    return r;
  }
}
function AO(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++) {
    let n = i[t],
      s = e[t];
    if (
      n.from != s.from ||
      n.to != s.to ||
      n.direction != s.direction ||
      !AO(n.inner, s.inner)
    )
      return !1;
  }
  return !0;
}
const de = [];
function _y(i, e, t, n, s) {
  for (let r = 0; r <= n.length; r++) {
    let o = r ? n[r - 1].to : e,
      l = r < n.length ? n[r].from : t,
      a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = TO(i.charCodeAt(h));
      u == 512 ? (u = c) : u == 8 && f == 4 && (u = 16),
        (de[h] = u == 4 ? 2 : u),
        u & 7 && (f = u),
        (c = u);
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = de[h];
      if (u == 128)
        h < l - 1 && c == de[h + 1] && c & 24 ? (u = de[h] = c) : (de[h] = 256);
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && de[d] == 64; ) d++;
        let p = (h && c == 8) || (d < t && de[d] == 8) ? (f == 1 ? 1 : 8) : 256;
        for (let O = h; O < d; O++) de[O] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (de[h] = 1);
      (c = u), u & 7 && (f = u);
    }
  }
}
function Ey(i, e, t, n, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= n.length; o++) {
    let h = o ? n[o - 1].to : e,
      c = o < n.length ? n[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if ((d = oh[(u = i.charCodeAt(f))]))
        if (d < 0) {
          for (let O = l - 3; O >= 0; O -= 3)
            if (qt[O + 1] == -d) {
              let m = qt[O + 2],
                b = m & 2 ? s : m & 4 ? (m & 1 ? r : s) : 0;
              b && (de[f] = de[qt[O]] = b), (l = O);
              break;
            }
        } else {
          if (qt.length == 189) break;
          (qt[l++] = f), (qt[l++] = u), (qt[l++] = a);
        }
      else if ((p = de[f]) == 2 || p == 1) {
        let O = p == s;
        a = O ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let b = qt[m + 2];
          if (b & 2) break;
          if (O) qt[m + 2] |= 2;
          else {
            if (b & 4) break;
            qt[m + 2] |= 4;
          }
        }
      }
  }
}
function Wy(i, e, t, n) {
  for (let s = 0, r = n; s <= t.length; s++) {
    let o = s ? t[s - 1].to : i,
      l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = de[a];
      if (h == 256) {
        let c = a + 1;
        for (;;)
          if (c == l) {
            if (s == t.length) break;
            (c = t[s++].to), (l = s < t.length ? t[s].from : e);
          } else if (de[c] == 256) c++;
          else break;
        let f = r == 1,
          u = (c < e ? de[c] : n) == 1,
          d = f == u ? (f ? 1 : 2) : n;
        for (let p = c, O = s, m = O ? t[O - 1].to : i; p > a; )
          p == m && ((p = t[--O].from), (m = O ? t[O - 1].to : i)),
            (de[--p] = d);
        a = c;
      } else (r = h), a++;
    }
  }
}
function lh(i, e, t, n, s, r, o) {
  let l = n % 2 ? 2 : 1;
  if (n % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0,
        f = !1;
      if (h == r.length || a < r[h].from) {
        let O = de[a];
        O != l && ((c = !1), (f = O == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? n : n + 1,
        p = a;
      e: for (;;)
        if (h < r.length && p == r[h].from) {
          if (f) break e;
          let O = r[h];
          if (!c)
            for (let m = O.to, b = h + 1; ; ) {
              if (m == t) break e;
              if (b < r.length && r[b].from == m) m = r[b++].to;
              else {
                if (de[m] == l) break e;
                break;
              }
            }
          if ((h++, u)) u.push(O);
          else {
            O.from > a && o.push(new Wi(a, O.from, d));
            let m = (O.direction == bn) != !(d % 2);
            ah(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), (a = O.to);
          }
          p = O.to;
        } else {
          if (p == t || (c ? de[p] != l : de[p] == l)) break;
          p++;
        }
      u ? lh(i, a, p, n + 1, s, u, o) : a < p && o.push(new Wi(a, p, d)),
        (a = p);
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0,
        f = !1;
      if (!h || a > r[h - 1].to) {
        let O = de[a - 1];
        O != l && ((c = !1), (f = O == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? n : n + 1,
        p = a;
      e: for (;;)
        if (h && p == r[h - 1].to) {
          if (f) break e;
          let O = r[--h];
          if (!c)
            for (let m = O.from, b = h; ; ) {
              if (m == e) break e;
              if (b && r[b - 1].to == m) m = r[--b].from;
              else {
                if (de[m - 1] == l) break e;
                break;
              }
            }
          if (u) u.push(O);
          else {
            O.to < a && o.push(new Wi(O.to, a, d));
            let m = (O.direction == bn) != !(d % 2);
            ah(i, m ? n + 1 : n, s, O.inner, O.from, O.to, o), (a = O.from);
          }
          p = O.from;
        } else {
          if (p == e || (c ? de[p - 1] != l : de[p - 1] == l)) break;
          p--;
        }
      u ? lh(i, p, a, n + 1, s, u, o) : p < a && o.push(new Wi(p, a, d)),
        (a = p);
    }
}
function ah(i, e, t, n, s, r, o) {
  let l = e % 2 ? 2 : 1;
  _y(i, s, r, n, l), Ey(i, s, r, n, l), Wy(s, r, n, l), lh(i, s, r, e, t, n, o);
}
function Xy(i, e, t) {
  if (!i) return [new Wi(0, 0, e == pc ? 1 : 0)];
  if (e == bn && !t.length && !My.test(i)) return MO(i.length);
  if (t.length) for (; i.length > de.length; ) de[de.length] = 256;
  let n = [],
    s = e == bn ? 0 : 1;
  return ah(i, s, s, t, 0, i.length, n), n;
}
function MO(i) {
  return [new Wi(0, i, 0)];
}
let _O = "";
function Dy(i, e, t, n, s) {
  var r;
  let o = n.head - i.from,
    l = Wi.find(
      e,
      o,
      (r = n.bidiLevel) !== null && r !== void 0 ? r : -1,
      n.assoc
    ),
    a = e[l],
    h = a.side(s, t);
  if (o == h) {
    let u = (l += s ? 1 : -1);
    if (u < 0 || u >= e.length) return null;
    (a = e[(l = u)]), (o = a.side(!s, t)), (h = a.side(s, t));
  }
  let c = Be(i.text, o, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h),
    (_O = i.text.slice(Math.min(o, c), Math.max(o, c)));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level
    ? v.cursor(f.side(!s, t) + i.from, f.forward(s, t) ? 1 : -1, f.level)
    : v.cursor(c + i.from, a.forward(s, t) ? -1 : 1, a.level);
}
function Yy(i, e, t) {
  for (let n = e; n < t; n++) {
    let s = TO(i.charCodeAt(n));
    if (s == 1) return bn;
    if (s == 2 || s == 4) return pc;
  }
  return bn;
}
const EO = z.define(),
  WO = z.define(),
  XO = z.define(),
  DO = z.define(),
  hh = z.define(),
  YO = z.define(),
  jO = z.define(),
  LO = z.define({ combine: (i) => i.some((e) => e) }),
  UO = z.define({ combine: (i) => i.some((e) => e) }),
  VO = z.define();
class Dn {
  constructor(e, t = "nearest", n = "nearest", s = 5, r = 5, o = !1) {
    (this.range = e),
      (this.y = t),
      (this.x = n),
      (this.yMargin = s),
      (this.xMargin = r),
      (this.isSnapshot = o);
  }
  map(e) {
    return e.empty
      ? this
      : new Dn(
          this.range.map(e),
          this.y,
          this.x,
          this.yMargin,
          this.xMargin,
          this.isSnapshot
        );
  }
  clip(e) {
    return this.range.to <= e.doc.length
      ? this
      : new Dn(
          v.cursor(e.doc.length),
          this.y,
          this.x,
          this.yMargin,
          this.xMargin,
          this.isSnapshot
        );
  }
}
const Er = ee.define({ map: (i, e) => i.map(e) }),
  qO = ee.define();
function dt(i, e, t) {
  let n = i.facet(DO);
  n.length
    ? n[0](e)
    : window.onerror
    ? window.onerror(String(e), t, void 0, void 0, e)
    : t
    ? console.error(t + ":", e)
    : console.error(e);
}
const Ai = z.define({ combine: (i) => (i.length ? i[0] : !0) });
let jy = 0;
const gs = z.define();
class Me {
  constructor(e, t, n, s, r) {
    (this.id = e),
      (this.create = t),
      (this.domEventHandlers = n),
      (this.domEventObservers = s),
      (this.extension = r(this));
  }
  static define(e, t) {
    const {
      eventHandlers: n,
      eventObservers: s,
      provide: r,
      decorations: o,
    } = t || {};
    return new Me(jy++, e, n, s, (l) => {
      let a = [gs.of(l)];
      return (
        o &&
          a.push(
            Fs.of((h) => {
              let c = h.plugin(l);
              return c ? o(c) : N.none;
            })
          ),
        r && a.push(r(l)),
        a
      );
    });
  }
  static fromClass(e, t) {
    return Me.define((n) => new e(n), t);
  }
}
class Hl {
  constructor(e) {
    (this.spec = e), (this.mustUpdate = null), (this.value = null);
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t);
          } catch (n) {
            if (
              (dt(t.state, n, "CodeMirror plugin crashed"), this.value.destroy)
            )
              try {
                this.value.destroy();
              } catch {}
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        dt(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (n) {
        dt(e.state, n, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const zO = z.define(),
  Oc = z.define(),
  Fs = z.define(),
  IO = z.define(),
  gc = z.define(),
  NO = z.define();
function Kf(i, e) {
  let t = i.state.facet(NO);
  if (!t.length) return t;
  let n = t.map((r) => (r instanceof Function ? r(i) : r)),
    s = [];
  return (
    ae.spans(n, e.from, e.to, {
      point() {},
      span(r, o, l, a) {
        let h = r - e.from,
          c = o - e.from,
          f = s;
        for (let u = l.length - 1; u >= 0; u--, a--) {
          let d = l[u].spec.bidiIsolate,
            p;
          if (
            (d == null && (d = Yy(e.text, h, c)),
            a > 0 &&
              f.length &&
              (p = f[f.length - 1]).to == h &&
              p.direction == d)
          )
            (p.to = c), (f = p.inner);
          else {
            let O = { from: h, to: c, direction: d, inner: [] };
            f.push(O), (f = O.inner);
          }
        }
      },
    }),
    s
  );
}
const BO = z.define();
function GO(i) {
  let e = 0,
    t = 0,
    n = 0,
    s = 0;
  for (let r of i.state.facet(BO)) {
    let o = r(i);
    o &&
      (o.left != null && (e = Math.max(e, o.left)),
      o.right != null && (t = Math.max(t, o.right)),
      o.top != null && (n = Math.max(n, o.top)),
      o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: n, bottom: s };
}
const ms = z.define();
class Rt {
  constructor(e, t, n, s) {
    (this.fromA = e), (this.toA = t), (this.fromB = n), (this.toB = s);
  }
  join(e) {
    return new Rt(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB)
    );
  }
  addToSet(e) {
    let t = e.length,
      n = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > n.toA)) {
        if (s.toA < n.fromA) break;
        (n = n.join(s)), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, n), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let n = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s],
        h = o - l,
        c = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < c; ) {
        let f = t[r],
          u = t[r + 1],
          d = Math.max(l, f),
          p = Math.min(c, u);
        if ((d <= p && new Rt(d + h, p + h, d, p).addToSet(n), u > c)) break;
        r += 2;
      }
      if (!a) return n;
      new Rt(a.fromA, a.toA, a.fromB, a.toB).addToSet(n),
        (o = a.toA),
        (l = a.toB);
    }
  }
}
class _o {
  constructor(e, t, n) {
    (this.view = e),
      (this.state = t),
      (this.transactions = n),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = Xe.empty(this.startState.doc.length));
    for (let r of n) this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Rt(r, o, l, a))),
      (this.changedRanges = s);
  }
  static create(e, t, n) {
    return new _o(e, t, n);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Jf extends Oe {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(),
      (this.view = e),
      (this.decorations = []),
      (this.dynamicDecorationMap = [!1]),
      (this.domChanged = null),
      (this.hasComposition = null),
      (this.markedForComposition = new Set()),
      (this.editContextFormatting = N.none),
      (this.lastCompositionAfterCursor = !1),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new Re()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new Rt(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let n = e.changedRanges;
    this.minWidth > 0 &&
      n.length &&
      (n.every(
        ({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo
      )
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 &&
      !this.view.observer.editContext &&
      (!((t = this.domChanged) === null || t === void 0) && t.newSel
        ? (s = this.domChanged.newSel.head)
        : !Ny(e.changes, this.hasComposition) &&
          !e.selectionSet &&
          (s = e.state.selection.main.head));
    let r = s > -1 ? Uy(this.view, e.changes, s) : null;
    if (((this.domChanged = null), this.hasComposition)) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      n = new Rt(
        h,
        c,
        e.changes.mapPos(h, -1),
        e.changes.mapPos(c, 1)
      ).addToSet(n.slice());
    }
    (this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null),
      (V.ie || V.chrome) &&
        !r &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0);
    let o = this.decorations,
      l = this.updateDeco(),
      a = zy(o, l, e.changes);
    return (
      (n = Rt.extendWithRanges(n, a)),
      !(this.flags & 7) && n.length == 0
        ? !1
        : (this.updateInner(n, e.startState.doc.length, r),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    );
  }
  updateInner(e, t, n) {
    (this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t, n);
    let { observer: s } = this.view;
    s.ignore(() => {
      (this.dom.style.height =
        this.view.viewState.contentHeight / this.view.scaleY + "px"),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "");
      let o =
        V.chrome || V.ios
          ? { node: s.selectionRange.focusNode, written: !1 }
          : void 0;
      this.sync(this.view, o),
        (this.flags &= -8),
        o &&
          (o.written || s.selectionRange.focusNode != o.node) &&
          (this.forceSelection = !0),
        (this.dom.style.height = "");
    }),
      this.markedForComposition.forEach((o) => (o.flags &= -9));
    let r = [];
    if (
      this.view.viewport.from ||
      this.view.viewport.to < this.view.state.doc.length
    )
      for (let o of this.children)
        o instanceof ui && o.widget instanceof eu && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, n) {
    let s = n ? n.range.addToSet(e.slice()) : e,
      r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l) break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l,
        u,
        d,
        p,
        O;
      if (n && n.range.fromB < f && n.range.toB > c) {
        let x = _s.build(
            this.view.state.doc,
            c,
            n.range.fromB,
            this.decorations,
            this.dynamicDecorationMap
          ),
          Q = _s.build(
            this.view.state.doc,
            n.range.toB,
            f,
            this.decorations,
            this.dynamicDecorationMap
          );
        (d = x.breakAtStart), (p = x.openStart), (O = Q.openEnd);
        let $ = this.compositionView(n);
        Q.breakAtStart
          ? ($.breakAfter = 1)
          : Q.content.length &&
            $.merge($.length, $.length, Q.content[0], !1, Q.openStart, 0) &&
            (($.breakAfter = Q.content[0].breakAfter), Q.content.shift()),
          x.content.length &&
            $.merge(0, 0, x.content[x.content.length - 1], !0, 0, x.openEnd) &&
            x.content.pop(),
          (u = x.content.concat($).concat(Q.content));
      } else
        ({
          content: u,
          breakAtStart: d,
          openStart: p,
          openEnd: O,
        } = _s.build(
          this.view.state.doc,
          c,
          f,
          this.decorations,
          this.dynamicDecorationMap
        ));
      let { i: m, off: b } = r.findPos(h, 1),
        { i: S, off: P } = r.findPos(a, -1);
      wO(this, S, P, m, b, u, d, p, O);
    }
    n && this.fixCompositionDOM(n);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(qO) && (this.editContextFormatting = n.value);
  }
  compositionView(e) {
    let t = new Yt(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks) t = new Oi(s, [t], t.length);
    let n = new Re();
    return n.append(t, 0), n;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
        (o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0)),
          this.markedForComposition.add(o);
        let l = Oe.get(r);
        l && l != o && (l.dom = null), o.setDOM(r);
      },
      n = this.childPos(e.range.fromB, 1),
      s = this.children[n.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      (n = s.childPos(n.off, 1)),
        (s = s.children[n.i]),
        t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) &&
      this.view.observer.readSelectionRange();
    let n = this.view.root.activeElement,
      s = n == this.dom,
      r =
        !s &&
        lo(this.dom, this.view.observer.selectionRange) &&
        !(n && this.dom.contains(n));
    if (!(s || t || r)) return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main,
      a = this.moveToLine(this.domAtPos(l.anchor)),
      h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (V.gecko && l.empty && !this.hasComposition && Ly(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() =>
        a.node.insertBefore(f, a.node.childNodes[a.offset] || null)
      ),
        (a = h = new et(f, 0)),
        (o = !0);
    }
    let c = this.view.observer.selectionRange;
    (o ||
      !c.focusNode ||
      ((!Ms(a.node, a.offset, c.anchorNode, c.anchorOffset) ||
        !Ms(h.node, h.offset, c.focusNode, c.focusOffset)) &&
        !this.suppressWidgetCursorChange(c, l))) &&
      (this.view.observer.ignore(() => {
        V.android &&
          V.chrome &&
          this.dom.contains(c.focusNode) &&
          Iy(c.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
        let f = Bs(this.view.root);
        if (f)
          if (l.empty) {
            if (V.gecko) {
              let u = Vy(a.node, a.offset);
              if (u && u != 3) {
                let d = (u == 1 ? yO : xO)(a.node, a.offset);
                d && (a = new et(d.node, d.offset));
              }
            }
            f.collapse(a.node, a.offset),
              l.bidiLevel != null &&
                f.caretBidiLevel !== void 0 &&
                (f.caretBidiLevel = l.bidiLevel);
          } else if (f.extend) {
            f.collapse(a.node, a.offset);
            try {
              f.extend(h.node, h.offset);
            } catch {}
          } else {
            let u = document.createRange();
            l.anchor > l.head && ([a, h] = [h, a]),
              u.setEnd(h.node, h.offset),
              u.setStart(a.node, a.offset),
              f.removeAllRanges(),
              f.addRange(u);
          }
        r &&
          this.view.root.activeElement == this.dom &&
          (this.dom.blur(), n && n.focus());
      }),
      this.view.observer.setSelectionRange(a, h)),
      (this.impreciseAnchor = a.precise
        ? null
        : new et(c.anchorNode, c.anchorOffset)),
      (this.impreciseHead = h.precise
        ? null
        : new et(c.focusNode, c.focusOffset));
  }
  suppressWidgetCursorChange(e, t) {
    return (
      this.hasComposition &&
      t.empty &&
      Ms(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
      this.posFromDOM(e.focusNode, e.focusOffset) == t.head
    );
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this,
      t = e.state.selection.main,
      n = Bs(e.root),
      { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!n || !t.empty || !t.assoc || !n.modify) return;
    let o = Re.find(this, t.head);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1),
      h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) return;
    let c = this.domAtPos(t.head + t.assoc);
    n.collapse(c.node, c.offset),
      n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"),
      e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from &&
      n.collapse(s, r);
  }
  moveToLine(e) {
    let t = this.dom,
      n;
    if (e.node != t) return e;
    for (let s = e.offset; !n && s < t.childNodes.length; s++) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Re && (n = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !n && s >= 0; s--) {
      let r = Oe.get(t.childNodes[s]);
      r instanceof Re && (n = r.domAtPos(r.length));
    }
    return n ? new et(n.node, n.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let n = Oe.get(t);
      if (n && n.rootView == this) return n;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let n = this.nearest(e);
    if (!n)
      throw new RangeError(
        "Trying to find position for a DOM position outside of the document"
      );
    return n.localPosFromDOM(e, t) + n.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: n } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (n < s.length || s instanceof Re) break;
      t++, (n = 0);
    }
    return this.children[t].domAtPos(n);
  }
  coordsAt(e, t) {
    let n = null,
      s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o],
        a = r - l.breakAfter,
        h = a - l.length;
      if (a < e) break;
      if (
        h <= e &&
        (h < e || l.covers(-1)) &&
        (a > e || l.covers(1)) &&
        (!n || (l instanceof Re && !(n instanceof Re && t >= 0)))
      )
        (n = l), (s = h);
      else if (n && h == e && a == e && l instanceof ui && Math.abs(t) < 2) {
        if (l.deco.startSide < 0) break;
        o && (n = null);
      }
      r = h;
    }
    return n ? n.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: n } = this.childPos(e, 1),
      s = this.children[t];
    if (!(s instanceof Re)) return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(n, 1);
      for (; ; l++) {
        if (l == s.children.length) return null;
        if ((s = s.children[l]).length) break;
      }
      n = a;
    }
    if (!(s instanceof Yt)) return null;
    let r = Be(s.text, n);
    if (r == n) return null;
    let o = mn(s.dom, n, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || (a.top < a.bottom && a.left < a.right)) return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [],
      { from: n, to: s } = e,
      r = this.view.contentDOM.clientWidth,
      o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1,
      a = this.view.textDirection == Se.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c],
        u = h + f.length;
      if (u > s) break;
      if (h >= n) {
        let d = f.dom.getBoundingClientRect();
        if ((t.push(d.height), o)) {
          let p = f.dom.lastChild,
            O = p ? Gs(p) : [];
          if (O.length) {
            let m = O[O.length - 1],
              b = a ? m.right - d.left : d.right - m.left;
            b > l &&
              ((l = b),
              (this.minWidth = r),
              (this.minWidthFrom = h),
              (this.minWidthTo = u));
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl"
      ? Se.RTL
      : Se.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof Re) {
        let o = r.measureTextSize();
        if (o) return o;
      }
    let e = document.createElement("div"),
      t,
      n,
      s;
    return (
      (e.className = "cm-line"),
      (e.style.width = "99999px"),
      (e.style.position = "absolute"),
      (e.textContent = "abc def ghi jkl mno pqr stu"),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e);
        let r = Gs(e.firstChild)[0];
        (t = e.getBoundingClientRect().height),
          (n = r ? r.width / 27 : 7),
          (s = r ? r.height : t),
          e.remove();
      }),
      { lineHeight: t, charWidth: n, textHeight: s }
    );
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new SO(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState;
    for (let n = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s],
        o = r ? r.from - 1 : this.length;
      if (o > n) {
        let l =
          (t.lineBlockAt(o).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
        e.push(
          N.replace({
            widget: new eu(l),
            block: !0,
            inclusive: !0,
            isBlockGap: !0,
          }).range(n, o)
        );
      }
      if (!r) break;
      n = r.to + 1;
    }
    return N.set(e);
  }
  updateDeco() {
    let e = 1,
      t = this.view.state
        .facet(Fs)
        .map((r) =>
          (this.dynamicDecorationMap[e++] = typeof r == "function")
            ? r(this.view)
            : r
        ),
      n = !1,
      s = this.view.state.facet(IO).map((r, o) => {
        let l = typeof r == "function";
        return l && (n = !0), l ? r(this.view) : r;
      });
    for (
      s.length && ((this.dynamicDecorationMap[e++] = n), t.push(ae.join(s))),
        this.decorations = [
          this.editContextFormatting,
          ...t,
          this.computeBlockGapDeco(),
          this.view.viewState.lineGapDeco,
        ];
      e < this.decorations.length;

    )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      (this.view.scrollDOM.scrollTop = h.top - e.yMargin),
        (this.view.scrollDOM.scrollLeft = e.xMargin);
      return;
    }
    for (let h of this.view.state.facet(VO))
      try {
        if (h(this.view, e.range, e)) return !0;
      } catch (c) {
        dt(this.view.state, c, "scroll handler");
      }
    let { range: t } = e,
      n = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      s;
    if (!n) return;
    !t.empty &&
      (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (n = {
        left: Math.min(n.left, s.left),
        top: Math.min(n.top, s.top),
        right: Math.max(n.right, s.right),
        bottom: Math.max(n.bottom, s.bottom),
      });
    let r = GO(this.view),
      o = {
        left: n.left - r.left,
        top: n.top - r.top,
        right: n.right + r.right,
        bottom: n.bottom + r.bottom,
      },
      { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Sy(
      this.view.scrollDOM,
      o,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      Math.max(Math.min(e.xMargin, l), -l),
      Math.max(Math.min(e.yMargin, a), -a),
      this.view.textDirection == Se.LTR
    );
  }
}
function Ly(i) {
  return (
    i.node.nodeType == 1 &&
    i.node.firstChild &&
    (i.offset == 0 ||
      i.node.childNodes[i.offset - 1].contentEditable == "false") &&
    (i.offset == i.node.childNodes.length ||
      i.node.childNodes[i.offset].contentEditable == "false")
  );
}
class eu extends xi {
  constructor(e) {
    super(), (this.height = e);
  }
  toDOM() {
    let e = document.createElement("div");
    return (e.className = "cm-gap"), this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return (e.style.height = this.height + "px"), !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function FO(i, e) {
  let t = i.observer.selectionRange;
  if (!t.focusNode) return null;
  let n = yO(t.focusNode, t.focusOffset),
    s = xO(t.focusNode, t.focusOffset),
    r = n || s;
  if (s && n && s.node != n.node) {
    let l = Oe.get(s.node);
    if (!l || (l instanceof Yt && l.text != s.node.nodeValue)) r = s;
    else if (i.docView.lastCompositionAfterCursor) {
      let a = Oe.get(n.node);
      !a || (a instanceof Yt && a.text != n.node.nodeValue) || (r = s);
    }
  }
  if (((i.docView.lastCompositionAfterCursor = r != n), !r)) return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Uy(i, e, t) {
  let n = FO(i, t);
  if (!n) return null;
  let { node: s, from: r, to: o } = n,
    l = s.nodeValue;
  if (/[\n\r]/.test(l) || i.state.doc.sliceString(n.from, n.to) != l)
    return null;
  let a = e.invertedDesc,
    h = new Rt(a.mapPos(r), a.mapPos(o), r, o),
    c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = Oe.get(f);
    if (u instanceof Oi) c.push({ node: f, deco: u.mark });
    else {
      if (
        u instanceof Re ||
        (f.nodeName == "DIV" && f.parentNode == i.contentDOM)
      )
        return { range: h, text: s, marks: c, line: f };
      if (f != i.contentDOM)
        c.push({
          node: f,
          deco: new gr({
            inclusive: !0,
            attributes: Zy(f),
            tagName: f.tagName.toLowerCase(),
          }),
        });
      else return null;
    }
  }
}
function Vy(i, e) {
  return i.nodeType != 1
    ? 0
    : (e && i.childNodes[e - 1].contentEditable == "false" ? 1 : 0) |
        (e < i.childNodes.length && i.childNodes[e].contentEditable == "false"
          ? 2
          : 0);
}
let qy = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    rh(e, t, this.changes);
  }
  comparePoint(e, t) {
    rh(e, t, this.changes);
  }
};
function zy(i, e, t) {
  let n = new qy();
  return ae.compare(i, e, t, n), n.changes;
}
function Iy(i, e) {
  for (let t = i; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false") return !0;
  return !1;
}
function Ny(i, e) {
  let t = !1;
  return (
    e &&
      i.iterChangedRanges((n, s) => {
        n < e.to && s > e.from && (t = !0);
      }),
    t
  );
}
function By(i, e, t = 1) {
  let n = i.charCategorizer(e),
    s = i.doc.lineAt(e),
    r = e - s.from;
  if (s.length == 0) return v.cursor(e);
  r == 0 ? (t = 1) : r == s.length && (t = -1);
  let o = r,
    l = r;
  t < 0 ? (o = Be(s.text, r, !1)) : (l = Be(s.text, r));
  let a = n(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = Be(s.text, o, !1);
    if (n(s.text.slice(h, o)) != a) break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = Be(s.text, l);
    if (n(s.text.slice(l, h)) != a) break;
    l = h;
  }
  return v.range(o + s.from, l + s.from);
}
function Gy(i, e) {
  return e.left > i ? e.left - i : Math.max(0, i - e.right);
}
function Fy(i, e) {
  return e.top > i ? e.top - i : Math.max(0, i - e.bottom);
}
function Kl(i, e) {
  return i.top < e.bottom - 1 && i.bottom > e.top + 1;
}
function tu(i, e) {
  return e < i.top
    ? { top: e, left: i.left, right: i.right, bottom: i.bottom }
    : i;
}
function iu(i, e) {
  return e > i.bottom
    ? { top: i.top, left: i.left, right: i.right, bottom: e }
    : i;
}
function ch(i, e, t) {
  let n,
    s,
    r,
    o,
    l = !1,
    a,
    h,
    c,
    f;
  for (let p = i.firstChild; p; p = p.nextSibling) {
    let O = Gs(p);
    for (let m = 0; m < O.length; m++) {
      let b = O[m];
      s && Kl(s, b) && (b = tu(iu(b, s.bottom), s.top));
      let S = Gy(e, b),
        P = Fy(t, b);
      if (S == 0 && P == 0) return p.nodeType == 3 ? nu(p, e, t) : ch(p, e, t);
      if (!n || o > P || (o == P && r > S)) {
        (n = p), (s = b), (r = S), (o = P);
        let x = P ? (t < b.top ? -1 : 1) : S ? (e < b.left ? -1 : 1) : 0;
        l = !x || (x > 0 ? m < O.length - 1 : m > 0);
      }
      S == 0
        ? t > b.bottom && (!c || c.bottom < b.bottom)
          ? ((a = p), (c = b))
          : t < b.top && (!f || f.top > b.top) && ((h = p), (f = b))
        : c && Kl(c, b)
        ? (c = iu(c, b.bottom))
        : f && Kl(f, b) && (f = tu(f, b.top));
    }
  }
  if (
    (c && c.bottom >= t
      ? ((n = a), (s = c))
      : f && f.top <= t && ((n = h), (s = f)),
    !n)
  )
    return { node: i, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (n.nodeType == 3) return nu(n, u, t);
  if (l && n.contentEditable != "false") return ch(n, u, t);
  let d =
    Array.prototype.indexOf.call(i.childNodes, n) +
    (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: i, offset: d };
}
function nu(i, e, t) {
  let n = i.nodeValue.length,
    s = -1,
    r = 1e9,
    o = 0;
  for (let l = 0; l < n; l++) {
    let a = mn(i, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom) continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2,
          d = u;
        if (
          ((V.chrome || V.gecko) &&
            mn(i, l).getBoundingClientRect().left == c.right &&
            (d = !u),
          f <= 0)
        )
          return { node: i, offset: l + (d ? 1 : 0) };
        (s = l + (d ? 1 : 0)), (r = f);
      }
    }
  }
  return { node: i, offset: s > -1 ? s : o > 0 ? i.nodeValue.length : 0 };
}
function HO(i, e, t, n = -1) {
  var s, r;
  let o = i.contentDOM.getBoundingClientRect(),
    l = o.top + i.viewState.paddingTop,
    a,
    { docHeight: h } = i.viewState,
    { x: c, y: f } = e,
    u = f - l;
  if (u < 0) return 0;
  if (u > h) return i.state.doc.length;
  for (
    let x = i.viewState.heightOracle.textHeight / 2, Q = !1;
    (a = i.elementAtHeight(u)), a.type != at.Text;

  )
    for (; (u = n > 0 ? a.bottom + x : a.top - x), !(u >= 0 && u <= h); ) {
      if (Q) return t ? null : 0;
      (Q = !0), (n = -n);
    }
  f = l + u;
  let d = a.from;
  if (d < i.viewport.from)
    return i.viewport.from == 0 ? 0 : t ? null : su(i, o, a, c, f);
  if (d > i.viewport.to)
    return i.viewport.to == i.state.doc.length
      ? i.state.doc.length
      : t
      ? null
      : su(i, o, a, c, f);
  let p = i.dom.ownerDocument,
    O = i.root.elementFromPoint ? i.root : p,
    m = O.elementFromPoint(c, f);
  m && !i.contentDOM.contains(m) && (m = null),
    m ||
      ((c = Math.max(o.left + 1, Math.min(o.right - 1, c))),
      (m = O.elementFromPoint(c, f)),
      m && !i.contentDOM.contains(m) && (m = null));
  let b,
    S = -1;
  if (
    m &&
    ((s = i.docView.nearest(m)) === null || s === void 0
      ? void 0
      : s.isEditable) != !1
  ) {
    if (p.caretPositionFromPoint) {
      let x = p.caretPositionFromPoint(c, f);
      x && ({ offsetNode: b, offset: S } = x);
    } else if (p.caretRangeFromPoint) {
      let x = p.caretRangeFromPoint(c, f);
      x &&
        (({ startContainer: b, startOffset: S } = x),
        (!i.contentDOM.contains(b) ||
          (V.safari && Hy(b, S, c)) ||
          (V.chrome && Ky(b, S, c))) &&
          (b = void 0));
    }
  }
  if (!b || !i.docView.dom.contains(b)) {
    let x = Re.find(i.docView, d);
    if (!x) return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: b, offset: S } = ch(x.dom, c, f));
  }
  let P = i.docView.nearest(b);
  if (!P) return null;
  if (
    P.isWidget &&
    ((r = P.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1
  ) {
    let x = P.dom.getBoundingClientRect();
    return e.y < x.top || (e.y <= x.bottom && e.x <= (x.left + x.right) / 2)
      ? P.posAtStart
      : P.posAtEnd;
  } else return P.localPosFromDOM(b, S) + P.posAtStart;
}
function su(i, e, t, n, s) {
  let r = Math.round((n - e.left) * i.defaultCharacterWidth);
  if (i.lineWrapping && t.height > i.defaultLineHeight * 1.5) {
    let l = i.viewState.heightOracle.textHeight,
      a = Math.floor((s - t.top - (i.defaultLineHeight - l) * 0.5) / l);
    r += a * i.viewState.heightOracle.lineLength;
  }
  let o = i.state.sliceDoc(t.from, t.to);
  return t.from + Fa(o, r, i.state.tabSize);
}
function Hy(i, e, t) {
  let n;
  if (i.nodeType != 3 || e != (n = i.nodeValue.length)) return !1;
  for (let s = i.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR") return !1;
  return mn(i, n - 1, n).getBoundingClientRect().left > t;
}
function Ky(i, e, t) {
  if (e != 0) return !1;
  for (let s = i; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s) return !1;
    if (r.classList.contains("cm-line")) break;
    s = r;
  }
  let n =
    i.nodeType == 1
      ? i.getBoundingClientRect()
      : mn(i, 0, Math.max(i.nodeValue.length, 1)).getBoundingClientRect();
  return t - n.left > 5;
}
function fh(i, e) {
  let t = i.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let n of t.type)
      if (n.to > e || (n.to == e && (n.to == t.to || n.type == at.Text)))
        return n;
  }
  return t;
}
function Jy(i, e, t, n) {
  let s = fh(i, e.head),
    r =
      !n || s.type != at.Text || !(i.lineWrapping || s.widgetLineBreaks)
        ? null
        : i.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = i.dom.getBoundingClientRect(),
      l = i.textDirectionAt(s.from),
      a = i.posAtCoords({
        x: t == (l == Se.LTR) ? o.right - 1 : o.left + 1,
        y: (r.top + r.bottom) / 2,
      });
    if (a != null) return v.cursor(a, t ? -1 : 1);
  }
  return v.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function ru(i, e, t, n) {
  let s = i.state.doc.lineAt(e.head),
    r = i.bidiSpans(s),
    o = i.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = Dy(s, r, o, l, t),
      c = _O;
    if (!h) {
      if (s.number == (t ? i.state.doc.lines : 1)) return l;
      (c = "\n"),
        (s = i.state.doc.line(s.number + (t ? 1 : -1))),
        (r = i.bidiSpans(s)),
        (h = i.visualLineSide(s, !t));
    }
    if (a) {
      if (!a(c)) return l;
    } else {
      if (!n) return h;
      a = n(c);
    }
    l = h;
  }
}
function ex(i, e, t) {
  let n = i.state.charCategorizer(e),
    s = n(t);
  return (r) => {
    let o = n(r);
    return s == Pe.Space && (s = o), s == o;
  };
}
function tx(i, e, t, n) {
  let s = e.head,
    r = t ? 1 : -1;
  if (s == (t ? i.state.doc.length : 0)) return v.cursor(s, e.assoc);
  let o = e.goalColumn,
    l,
    a = i.contentDOM.getBoundingClientRect(),
    h = i.coordsAtPos(s, e.assoc || -1),
    c = i.documentTop;
  if (h) o == null && (o = h.left - a.left), (l = r < 0 ? h.top : h.bottom);
  else {
    let d = i.viewState.lineBlockAt(s);
    o == null &&
      (o = Math.min(a.right - a.left, i.defaultCharacterWidth * (s - d.from))),
      (l = (r < 0 ? d.top : d.bottom) + c);
  }
  let f = a.left + o,
    u = eval('n ?? i.viewState.heightOracle.textHeight >> 1');
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r,
      O = HO(i, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? O < s : O > s)) {
      let m = i.docView.coordsForChar(O),
        b = !m || p < m.top ? -1 : 1;
      return v.cursor(O, b, void 0, o);
    }
  }
}
function ao(i, e, t) {
  for (;;) {
    let n = 0;
    for (let s of i)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = n || t || (e - r < o - e ? -1 : 1);
          (e = a < 0 ? r : o), (n = a);
        }
      });
    if (!n) return e;
  }
}
function Jl(i, e, t) {
  let n = ao(
    i.state.facet(gc).map((s) => s(i)),
    t.from,
    e.head > t.from ? -1 : 1
  );
  return n == t.from ? t : v.cursor(n, n < t.from ? 1 : -1);
}
class ix {
  setSelectionOrigin(e) {
    (this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
  }
  constructor(e) {
    (this.view = e),
      (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.pendingIOSKey = void 0),
      (this.tabFocusMode = -1),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.handlers = Object.create(null)),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.compositionPendingKey = !1),
      (this.compositionPendingChange = !1),
      (this.mouseSelection = null),
      (this.draggedContent = null),
      (this.handleEvent = this.handleEvent.bind(this)),
      (this.notifiedFocused = e.hasFocus),
      V.safari && e.contentDOM.addEventListener("input", () => null),
      V.gecko && bx(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !cx(this.view, e) ||
      this.ignoreDuringComposition(e) ||
      (e.type == "keydown" && this.keydown(e)) ||
      this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let n = this.handlers[e];
    if (n) {
      for (let s of n.observers) s(this.view, t);
      for (let s of n.handlers) {
        if (t.defaultPrevented) break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = nx(e),
      n = this.handlers,
      s = this.view.contentDOM;
    for (let r in t)
      if (r != "scroll") {
        let o = !t[r].handlers.length,
          l = n[r];
        l &&
          o != !l.handlers.length &&
          (s.removeEventListener(r, this.handleEvent), (l = null)),
          l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in n)
      r != "scroll" && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (
      ((this.lastKeyCode = e.keyCode),
      (this.lastKeyTime = Date.now()),
      e.keyCode == 9 &&
        this.tabFocusMode > -1 &&
        (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
    )
      return !0;
    if (
      (this.tabFocusMode > 0 &&
        e.keyCode != 27 &&
        JO.indexOf(e.keyCode) < 0 &&
        (this.tabFocusMode = -1),
      V.android &&
        V.chrome &&
        !e.synthetic &&
        (e.keyCode == 13 || e.keyCode == 8))
    )
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return V.ios &&
      !e.synthetic &&
      !e.altKey &&
      !e.metaKey &&
      (((t = KO.find((n) => n.keyCode == e.keyCode)) && !e.ctrlKey) ||
        (sx.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
      ? ((this.pendingIOSKey = t || e),
        setTimeout(() => this.flushIOSKey(), 250),
        !0)
      : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t ||
      (t.key == "Enter" &&
        e &&
        e.from < e.to &&
        /^\S+$/.test(e.insert.toString()))
      ? !1
      : ((this.pendingIOSKey = void 0),
        Xn(
          this.view.contentDOM,
          t.key,
          t.keyCode,
          t instanceof KeyboardEvent ? t : void 0
        ));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : V.safari &&
          !V.ios &&
          this.compositionPendingKey &&
          Date.now() - this.compositionEndedAt < 100
        ? ((this.compositionPendingKey = !1), !0)
        : !1
      : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(),
      (this.mouseSelection = e);
  }
  update(e) {
    this.view.observer.update(e),
      this.mouseSelection && this.mouseSelection.update(e),
      this.draggedContent &&
        e.docChanged &&
        (this.draggedContent = this.draggedContent.map(e.changes)),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function ou(i, e) {
  return (t, n) => {
    try {
      return e.call(i, n, t);
    } catch (s) {
      dt(t.state, s);
    }
  };
}
function nx(i) {
  let e = Object.create(null);
  function t(n) {
    return e[n] || (e[n] = { observers: [], handlers: [] });
  }
  for (let n of i) {
    let s = n.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(ou(n.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(ou(n.value, o));
      }
  }
  for (let n in jt) t(n).handlers.push(jt[n]);
  for (let n in At) t(n).observers.push(At[n]);
  return e;
}
const KO = [
    { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
    { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
    { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
    { key: "Delete", keyCode: 46, inputType: "deleteContentForward" },
  ],
  sx = "dthko",
  JO = [16, 17, 18, 20, 91, 92, 224, 225],
  Wr = 6;
function Xr(i) {
  return Math.max(0, i) * 0.7 + 8;
}
function rx(i, e) {
  return Math.max(
    Math.abs(i.clientX - e.clientX),
    Math.abs(i.clientY - e.clientY)
  );
}
class ox {
  constructor(e, t, n, s) {
    (this.view = e),
      (this.startEvent = t),
      (this.style = n),
      (this.mustSelect = s),
      (this.scrollSpeed = { x: 0, y: 0 }),
      (this.scrolling = -1),
      (this.lastEvent = t),
      (this.scrollParent = wy(e.contentDOM)),
      (this.atoms = e.state.facet(gc).map((o) => o(e)));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener("mousemove", (this.move = this.move.bind(this))),
      r.addEventListener("mouseup", (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(ce.allowMultipleSelections) && lx(e, t)),
      (this.dragging = hx(e, t) && ng(t) == 1 ? null : !1);
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    var t;
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || (this.dragging == null && rx(this.startEvent, e) < 10))
      return;
    this.select((this.lastEvent = e));
    let n = 0,
      s = 0,
      r = ((t = this.scrollParent) === null || t === void 0
        ? void 0
        : t.getBoundingClientRect()) || {
        left: 0,
        top: 0,
        right: this.view.win.innerWidth,
        bottom: this.view.win.innerHeight,
      },
      o = GO(this.view);
    e.clientX - o.left <= r.left + Wr
      ? (n = -Xr(r.left - e.clientX))
      : e.clientX + o.right >= r.right - Wr && (n = Xr(e.clientX - r.right)),
      e.clientY - o.top <= r.top + Wr
        ? (s = -Xr(r.top - e.clientY))
        : e.clientY + o.bottom >= r.bottom - Wr &&
          (s = Xr(e.clientY - r.bottom)),
      this.setScrollSpeed(n, s);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move),
      e.removeEventListener("mouseup", this.up),
      (this.view.inputState.mouseSelection =
        this.view.inputState.draggedContent =
          null);
  }
  setScrollSpeed(e, t) {
    (this.scrollSpeed = { x: e, y: t }),
      e || t
        ? this.scrolling < 0 &&
          (this.scrolling = setInterval(() => this.scroll(), 50))
        : this.scrolling > -1 &&
          (clearInterval(this.scrolling), (this.scrolling = -1));
  }
  scroll() {
    this.scrollParent
      ? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
        (this.scrollParent.scrollTop += this.scrollSpeed.y))
      : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
      this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let n = 0; n < e.ranges.length; n++) {
      let s = e.ranges[n],
        r = null;
      if (s.empty) {
        let o = ao(this.atoms, s.from, 0);
        o != s.from && (r = v.cursor(o, -1));
      } else {
        let o = ao(this.atoms, s.from, -1),
          l = ao(this.atoms, s.to, 1);
        (o != s.from || l != s.to) &&
          (r = v.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), (t[n] = r));
    }
    return t ? v.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this,
      n = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) &&
      this.view.dispatch({ selection: n, userEvent: "select.pointer" }),
      (this.mustSelect = !1);
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type"))
      ? this.destroy()
      : this.style.update(e) &&
        setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function lx(i, e) {
  let t = i.state.facet(EO);
  return t.length ? t[0](e) : V.mac ? e.metaKey : e.ctrlKey;
}
function ax(i, e) {
  let t = i.state.facet(WO);
  return t.length ? t[0](e) : V.mac ? !e.altKey : !e.ctrlKey;
}
function hx(i, e) {
  let { main: t } = i.state.selection;
  if (t.empty) return !1;
  let n = Bs(i.root);
  if (!n || n.rangeCount == 0) return !0;
  let s = n.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (
      o.left <= e.clientX &&
      o.right >= e.clientX &&
      o.top <= e.clientY &&
      o.bottom >= e.clientY
    )
      return !0;
  }
  return !1;
}
function cx(i, e) {
  if (!e.bubbles) return !0;
  if (e.defaultPrevented) return !1;
  for (let t = e.target, n; t != i.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((n = Oe.get(t)) && n.ignoreEvent(e)))
      return !1;
  return !0;
}
const jt = Object.create(null),
  At = Object.create(null),
  eg = (V.ie && V.ie_version < 15) || (V.ios && V.webkit_version < 604);
function fx(i) {
  let e = i.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  (t.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    t.focus(),
    setTimeout(() => {
      i.focus(), t.remove(), tg(i, t.value);
    }, 50);
}
function tg(i, e) {
  let { state: t } = i,
    n,
    s = 1,
    r = t.toText(e),
    o = r.lines == t.selection.ranges.length;
  if (
    uh != null &&
    t.selection.ranges.every((a) => a.empty) &&
    uh == r.toString()
  ) {
    let a = -1;
    n = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a) return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: v.cursor(h.from + f.length),
      };
    });
  } else
    o
      ? (n = t.changeByRange((a) => {
          let h = r.line(s++);
          return {
            changes: { from: a.from, to: a.to, insert: h.text },
            range: v.cursor(a.from + h.length),
          };
        }))
      : (n = t.replaceSelection(r));
  i.dispatch(n, { userEvent: "input.paste", scrollIntoView: !0 });
}
At.scroll = (i) => {
  (i.inputState.lastScrollTop = i.scrollDOM.scrollTop),
    (i.inputState.lastScrollLeft = i.scrollDOM.scrollLeft);
};
jt.keydown = (i, e) => (
  i.inputState.setSelectionOrigin("select"),
  e.keyCode == 27 &&
    i.inputState.tabFocusMode != 0 &&
    (i.inputState.tabFocusMode = Date.now() + 2e3),
  !1
);
At.touchstart = (i, e) => {
  (i.inputState.lastTouchTime = Date.now()),
    i.inputState.setSelectionOrigin("select.pointer");
};
At.touchmove = (i) => {
  i.inputState.setSelectionOrigin("select.pointer");
};
jt.mousedown = (i, e) => {
  if ((i.observer.flush(), i.inputState.lastTouchTime > Date.now() - 2e3))
    return !1;
  let t = null;
  for (let n of i.state.facet(XO)) if (((t = n(i, e)), t)) break;
  if ((!t && e.button == 0 && (t = px(i, e)), t)) {
    let n = !i.hasFocus;
    i.inputState.startMouseSelection(new ox(i, e, t, n)),
      n &&
        i.observer.ignore(() => {
          gO(i.contentDOM);
          let r = i.root.activeElement;
          r && !r.contains(i.contentDOM) && r.blur();
        });
    let s = i.inputState.mouseSelection;
    if (s) return s.start(e), s.dragging === !1;
  }
  return !1;
};
function lu(i, e, t, n) {
  if (n == 1) return v.cursor(e, t);
  if (n == 2) return By(i.state, e, t);
  {
    let s = Re.find(i.docView, e),
      r = i.state.doc.lineAt(s ? s.posAtEnd : e),
      o = s ? s.posAtStart : r.from,
      l = s ? s.posAtEnd : r.to;
    return l < i.state.doc.length && l == r.to && l++, v.range(o, l);
  }
}
let ig = (i, e) => i >= e.top && i <= e.bottom,
  au = (i, e, t) => ig(e, t) && i >= t.left && i <= t.right;
function ux(i, e, t, n) {
  let s = Re.find(i.docView, e);
  if (!s) return 1;
  let r = e - s.posAtStart;
  if (r == 0) return 1;
  if (r == s.length) return -1;
  let o = s.coordsAt(r, -1);
  if (o && au(t, n, o)) return -1;
  let l = s.coordsAt(r, 1);
  return l && au(t, n, l) ? 1 : o && ig(n, o) ? -1 : 1;
}
function hu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: ux(i, t, e.clientX, e.clientY) };
}
const dx = V.ie && V.ie_version <= 11;
let cu = null,
  fu = 0,
  uu = 0;
function ng(i) {
  if (!dx) return i.detail;
  let e = cu,
    t = uu;
  return (
    (cu = i),
    (uu = Date.now()),
    (fu =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - i.clientX) < 2 &&
        Math.abs(e.clientY - i.clientY) < 2)
        ? (fu + 1) % 3
        : 1)
  );
}
function px(i, e) {
  let t = hu(i, e),
    n = ng(e),
    s = i.state.selection;
  return {
    update(r) {
      r.docChanged &&
        ((t.pos = r.changes.mapPos(t.pos)), (s = s.map(r.changes)));
    },
    get(r, o, l) {
      let a = hu(i, r),
        h,
        c = lu(i, a.pos, a.bias, n);
      if (t.pos != a.pos && !o) {
        let f = lu(i, t.pos, t.bias, n),
          u = Math.min(f.from, c.from),
          d = Math.max(f.to, c.to);
        c = u < c.from ? v.range(u, d) : v.range(d, u);
      }
      return o
        ? s.replaceRange(s.main.extend(c.from, c.to))
        : l && n == 1 && s.ranges.length > 1 && (h = Ox(s, a.pos))
        ? h
        : l
        ? s.addRange(c)
        : v.create([c]);
    },
  };
}
function Ox(i, e) {
  for (let t = 0; t < i.ranges.length; t++) {
    let { from: n, to: s } = i.ranges[t];
    if (n <= e && s >= e)
      return v.create(
        i.ranges.slice(0, t).concat(i.ranges.slice(t + 1)),
        i.mainIndex == t ? 0 : i.mainIndex - (i.mainIndex > t ? 1 : 0)
      );
  }
  return null;
}
jt.dragstart = (i, e) => {
  let {
    selection: { main: t },
  } = i.state;
  if (e.target.draggable) {
    let s = i.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart,
        o = r + s.length;
      (r >= t.to || o <= t.from) && (t = v.range(r, o));
    }
  }
  let { inputState: n } = i;
  return (
    n.mouseSelection && (n.mouseSelection.dragging = !0),
    (n.draggedContent = t),
    e.dataTransfer &&
      (e.dataTransfer.setData("Text", i.state.sliceDoc(t.from, t.to)),
      (e.dataTransfer.effectAllowed = "copyMove")),
    !1
  );
};
jt.dragend = (i) => ((i.inputState.draggedContent = null), !1);
function du(i, e, t, n) {
  if (!t) return;
  let s = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    { draggedContent: r } = i.inputState,
    o = n && r && ax(i, e) ? { from: r.from, to: r.to } : null,
    l = { from: s, insert: t },
    a = i.state.changes(o ? [o, l] : l);
  i.focus(),
    i.dispatch({
      changes: a,
      selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
      userEvent: o ? "move.drop" : "input.drop",
    }),
    (i.inputState.draggedContent = null);
}
jt.drop = (i, e) => {
  if (!e.dataTransfer) return !1;
  if (i.state.readOnly) return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let n = Array(t.length),
      s = 0,
      r = () => {
        ++s == t.length &&
          du(i, e, n.filter((o) => o != null).join(i.state.lineBreak), !1);
      };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      (l.onerror = r),
        (l.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (n[o] = l.result), r();
        }),
        l.readAsText(t[o]);
    }
    return !0;
  } else {
    let n = e.dataTransfer.getData("Text");
    if (n) return du(i, e, n, !0), !0;
  }
  return !1;
};
jt.paste = (i, e) => {
  if (i.state.readOnly) return !0;
  i.observer.flush();
  let t = eg ? null : e.clipboardData;
  return t
    ? (tg(i, t.getData("text/plain") || t.getData("text/uri-list")), !0)
    : (fx(i), !1);
};
function gx(i, e) {
  let t = i.dom.parentNode;
  if (!t) return;
  let n = t.appendChild(document.createElement("textarea"));
  (n.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    (n.value = e),
    n.focus(),
    (n.selectionEnd = e.length),
    (n.selectionStart = 0),
    setTimeout(() => {
      n.remove(), i.focus();
    }, 50);
}
function mx(i) {
  let e = [],
    t = [],
    n = !1;
  for (let s of i.selection.ranges)
    s.empty || (e.push(i.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of i.selection.ranges) {
      let o = i.doc.lineAt(r);
      o.number > s &&
        (e.push(o.text),
        t.push({ from: o.from, to: Math.min(i.doc.length, o.to + 1) })),
        (s = o.number);
    }
    n = !0;
  }
  return { text: e.join(i.lineBreak), ranges: t, linewise: n };
}
let uh = null;
jt.copy = jt.cut = (i, e) => {
  let { text: t, ranges: n, linewise: s } = mx(i.state);
  if (!t && !s) return !1;
  (uh = s ? t : null),
    e.type == "cut" &&
      !i.state.readOnly &&
      i.dispatch({ changes: n, scrollIntoView: !0, userEvent: "delete.cut" });
  let r = eg ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", t), !0) : (gx(i, t), !1);
};
const sg = yi.define();
function rg(i, e) {
  let t = [];
  for (let n of i.facet(jO)) {
    let s = n(i, e);
    s && t.push(s);
  }
  return t ? i.update({ effects: t, annotations: sg.of(!0) }) : null;
}
function og(i) {
  setTimeout(() => {
    let e = i.hasFocus;
    if (e != i.inputState.notifiedFocused) {
      let t = rg(i.state, e);
      t ? i.dispatch(t) : i.update([]);
    }
  }, 10);
}
At.focus = (i) => {
  (i.inputState.lastFocusTime = Date.now()),
    !i.scrollDOM.scrollTop &&
      (i.inputState.lastScrollTop || i.inputState.lastScrollLeft) &&
      ((i.scrollDOM.scrollTop = i.inputState.lastScrollTop),
      (i.scrollDOM.scrollLeft = i.inputState.lastScrollLeft)),
    og(i);
};
At.blur = (i) => {
  i.observer.clearSelectionRange(), og(i);
};
At.compositionstart = At.compositionupdate = (i) => {
  i.observer.editContext ||
    (i.inputState.compositionFirstChange == null &&
      (i.inputState.compositionFirstChange = !0),
    i.inputState.composing < 0 && (i.inputState.composing = 0));
};
At.compositionend = (i) => {
  i.observer.editContext ||
    ((i.inputState.composing = -1),
    (i.inputState.compositionEndedAt = Date.now()),
    (i.inputState.compositionPendingKey = !0),
    (i.inputState.compositionPendingChange =
      i.observer.pendingRecords().length > 0),
    (i.inputState.compositionFirstChange = null),
    V.chrome && V.android
      ? i.observer.flushSoon()
      : i.inputState.compositionPendingChange
      ? Promise.resolve().then(() => i.observer.flush())
      : setTimeout(() => {
          i.inputState.composing < 0 &&
            i.docView.hasComposition &&
            i.update([]);
        }, 50));
};
At.contextmenu = (i) => {
  i.inputState.lastContextMenu = Date.now();
};
jt.beforeinput = (i, e) => {
  var t;
  let n;
  if (
    V.chrome &&
    V.android &&
    (n = KO.find((s) => s.inputType == e.inputType)) &&
    (i.observer.delayAndroidKey(n.key, n.keyCode),
    n.key == "Backspace" || n.key == "Delete")
  ) {
    let s =
      ((t = window.visualViewport) === null || t === void 0
        ? void 0
        : t.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0
        ? void 0
        : r.height) || 0) >
        s + 10 &&
        i.hasFocus &&
        (i.contentDOM.blur(), i.focus());
    }, 100);
  }
  return (
    V.ios && e.inputType == "deleteContentForward" && i.observer.flushSoon(),
    V.safari &&
      e.inputType == "insertText" &&
      i.inputState.composing >= 0 &&
      setTimeout(() => At.compositionend(i, e), 20),
    !1
  );
};
const pu = new Set();
function bx(i) {
  pu.has(i) ||
    (pu.add(i),
    i.addEventListener("copy", () => {}),
    i.addEventListener("cut", () => {}));
}
const Ou = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class yx {
  constructor(e) {
    (this.lineWrapping = e),
      (this.doc = he.empty),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.textHeight = 14),
      (this.lineLength = 30),
      (this.heightChanged = !1);
  }
  heightForGap(e, t) {
    let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return (
      this.lineWrapping &&
        (n += Math.max(
          0,
          Math.ceil((t - e - n * this.lineLength * 0.5) / this.lineLength)
        )),
      this.lineHeight * n
    );
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 +
          Math.max(
            0,
            Math.ceil((e - this.lineLength) / (this.lineLength - 5))
          )) *
          this.lineHeight
      : this.lineHeight;
  }
  setDoc(e) {
    return (this.doc = e), this;
  }
  mustRefreshForWrapping(e) {
    return Ou.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      s < 0
        ? n++
        : this.heightSamples[Math.floor(s * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0));
    }
    return t;
  }
  refresh(e, t, n, s, r, o) {
    let l = Ou.indexOf(e) > -1,
      a =
        Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (
      ((this.lineWrapping = l),
      (this.lineHeight = t),
      (this.charWidth = n),
      (this.textHeight = s),
      (this.lineLength = r),
      a)
    ) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : (this.heightSamples[Math.floor(c * 10)] = !0);
      }
    }
    return a;
  }
}
class xx {
  constructor(e, t) {
    (this.from = e), (this.heights = t), (this.index = 0);
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Jt {
  constructor(e, t, n, s, r) {
    (this.from = e),
      (this.length = t),
      (this.top = n),
      (this.height = s),
      (this._content = r);
  }
  get type() {
    return typeof this._content == "number"
      ? at.Text
      : Array.isArray(this._content)
      ? this._content
      : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof zi ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(
      Array.isArray(e._content) ? e._content : [e]
    );
    return new Jt(
      this.from,
      this.length + e.length,
      this.top,
      this.height + e.height,
      t
    );
  }
}
var xe = (function (i) {
  return (
    (i[(i.ByPos = 0)] = "ByPos"),
    (i[(i.ByHeight = 1)] = "ByHeight"),
    (i[(i.ByPosNoHeight = 2)] = "ByPosNoHeight"),
    i
  );
})(xe || (xe = {}));
const ho = 0.001;
class ht {
  constructor(e, t, n = 2) {
    (this.length = e), (this.height = t), (this.flags = n);
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3);
  }
  setHeight(e, t) {
    this.height != t &&
      (Math.abs(this.height - t) > ho && (e.heightChanged = !0),
      (this.height = t));
  }
  replace(e, t, n) {
    return ht.of(n);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, n, s) {
    let r = this,
      o = n.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l],
        u = r.lineAt(a, xe.ByPosNoHeight, n.setDoc(t), 0, 0),
        d = u.to >= h ? u : r.lineAt(h, xe.ByPosNoHeight, n, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        (a = s[l - 1].fromA),
          (c = s[l - 1].fromB),
          l--,
          a < u.from && (u = r.lineAt(a, xe.ByPosNoHeight, n, 0, 0));
      (c += u.from - a), (a = u.from);
      let p = mc.build(n.setDoc(o), e, c, f);
      r = r.replace(a, h, p);
    }
    return r.updateHeight(n, 0);
  }
  static empty() {
    return new wt(0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0,
      n = e.length,
      s = 0,
      r = 0;
    for (;;)
      if (t == n)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break
            ? e.splice(--t, 1, l.left, null, l.right)
            : e.splice(--t, 1, l.left, l.right),
            (n += 1 + l.break),
            (s -= l.size);
        } else if (r > s * 2) {
          let l = e[n];
          l.break
            ? e.splice(n, 1, l.left, null, l.right)
            : e.splice(n, 1, l.left, l.right),
            (n += 2 + l.break),
            (r -= l.size);
        } else break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--n];
        l && (r += l.size);
      }
    let o = 0;
    return (
      e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), n++),
      new Sx(ht.of(e.slice(0, t)), o, ht.of(e.slice(n)))
    );
  }
}
ht.prototype.size = 1;
class lg extends ht {
  constructor(e, t, n) {
    super(e, t), (this.deco = n);
  }
  blockAt(e, t, n, s) {
    return new Jt(s, this.length, n, this.height, this.deco || 0);
  }
  lineAt(e, t, n, s, r) {
    return this.blockAt(0, n, s, r);
  }
  forEachLine(e, t, n, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, n, s, r));
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `block(${this.length})`;
  }
}
class wt extends lg {
  constructor(e, t) {
    super(e, t, null),
      (this.collapsed = 0),
      (this.widgetHeight = 0),
      (this.breaks = 0);
  }
  blockAt(e, t, n, s) {
    return new Jt(s, this.length, n, this.height, this.breaks);
  }
  replace(e, t, n) {
    let s = n[0];
    return n.length == 1 &&
      (s instanceof wt || (s instanceof Ue && s.flags & 4)) &&
      Math.abs(this.length - s.length) < 10
      ? (s instanceof Ue
          ? (s = new wt(s.length, this.height))
          : (s.height = this.height),
        this.outdated || (s.outdated = !1),
        s)
      : ht.of(n);
  }
  updateHeight(e, t = 0, n = !1, s) {
    return (
      s && s.from <= t && s.more
        ? this.setHeight(e, s.heights[s.index++])
        : (n || this.outdated) &&
          this.setHeight(
            e,
            Math.max(
              this.widgetHeight,
              e.heightForLine(this.length - this.collapsed)
            ) +
              this.breaks * e.lineHeight
          ),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${
      this.widgetHeight ? ":" + this.widgetHeight : ""
    })`;
  }
}
class Ue extends ht {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let n = e.doc.lineAt(t).number,
      s = e.doc.lineAt(t + this.length).number,
      r = s - n + 1,
      o,
      l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      (o = a / r),
        this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else o = this.height / r;
    return { firstLine: n, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, n, s) {
    let {
      firstLine: r,
      lastLine: o,
      perLine: l,
      perChar: a,
    } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h =
          s +
          (e < t.lineHeight
            ? 0
            : Math.round(
                Math.max(0, Math.min(1, (e - n) / this.height)) * this.length
              )),
        c = t.doc.lineAt(h),
        f = l + c.length * a,
        u = Math.max(n, e - f / 2);
      return new Jt(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - n) / l))),
        { from: c, length: f } = t.doc.line(r + h);
      return new Jt(c, f, n + l * h, l, 0);
    }
  }
  lineAt(e, t, n, s, r) {
    if (t == xe.ByHeight) return this.blockAt(e, n, s, r);
    if (t == xe.ByPosNoHeight) {
      let { from: d, to: p } = n.doc.lineAt(e);
      return new Jt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r),
      h = n.doc.lineAt(e),
      c = l + h.length * a,
      f = h.number - o,
      u = s + l * f + a * (h.from - r - f);
    return new Jt(
      h.from,
      h.length,
      Math.max(s, Math.min(u, s + this.height - c)),
      c,
      0
    );
  }
  forEachLine(e, t, n, s, r, o) {
    (e = Math.max(e, r)), (t = Math.min(t, r + this.length));
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(n, r);
    for (let c = e, f = s; c <= t; ) {
      let u = n.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Jt(u.from, u.length, f, d, 0)), (f += d), (c = u.to + 1);
    }
  }
  replace(e, t, n) {
    let s = this.length - t;
    if (s > 0) {
      let r = n[n.length - 1];
      r instanceof Ue
        ? (n[n.length - 1] = new Ue(r.length + s))
        : n.push(null, new Ue(s - 1));
    }
    if (e > 0) {
      let r = n[0];
      r instanceof Ue
        ? (n[0] = new Ue(e + r.length))
        : n.unshift(new Ue(e - 1), null);
    }
    return ht.of(n);
  }
  decomposeLeft(e, t) {
    t.push(new Ue(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new Ue(this.length - e - 1));
  }
  updateHeight(e, t = 0, n = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [],
        l = Math.max(t, s.from),
        a = -1;
      for (
        s.from > t && o.push(new Ue(s.from - t - 1).updateHeight(e, t));
        l <= r && s.more;

      ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? (a = f) : Math.abs(f - a) >= ho && (a = -2);
        let u = new wt(c, f);
        (u.outdated = !1), o.push(u), (l += c + 1);
      }
      l <= r && o.push(null, new Ue(r - l).updateHeight(e, l));
      let h = ht.of(o);
      return (
        (a < 0 ||
          Math.abs(h.height - this.height) >= ho ||
          Math.abs(a - this.heightMetrics(e, t).perLine) >= ho) &&
          (e.heightChanged = !0),
        h
      );
    } else
      (n || this.outdated) &&
        (this.setHeight(e, e.heightForGap(t, t + this.length)),
        (this.outdated = !1));
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Sx extends ht {
  constructor(e, t, n) {
    super(
      e.length + t + n.length,
      e.height + n.height,
      t | (e.outdated || n.outdated ? 2 : 0)
    ),
      (this.left = e),
      (this.right = n),
      (this.size = e.size + n.size);
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, n, s) {
    let r = n + this.left.height;
    return e < r
      ? this.left.blockAt(e, t, n, s)
      : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, n, s, r) {
    let o = s + this.left.height,
      l = r + this.left.length + this.break,
      a = t == xe.ByHeight ? e < o : e < l,
      h = a
        ? this.left.lineAt(e, t, n, s, r)
        : this.right.lineAt(e, t, n, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) return h;
    let c = t == xe.ByPosNoHeight ? xe.ByPosNoHeight : xe.ByPos;
    return a
      ? h.join(this.right.lineAt(l, c, n, o, l))
      : this.left.lineAt(l, c, n, s, r).join(h);
  }
  forEachLine(e, t, n, s, r, o) {
    let l = s + this.left.height,
      a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, n, s, r, o),
        t >= a && this.right.forEachLine(e, t, n, l, a, o);
    else {
      let h = this.lineAt(a, xe.ByPos, n, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, n, s, r, o),
        h.to >= e && h.from <= t && o(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, n, l, a, o);
    }
  }
  replace(e, t, n) {
    let s = this.left.length + this.break;
    if (t < s) return this.balanced(this.left.replace(e, t, n), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, n));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of n) r.push(l);
    if ((e > 0 && gu(r, o - 1), t < this.length)) {
      let l = r.length;
      this.decomposeRight(t, r), gu(r, l);
    }
    return ht.of(r);
  }
  decomposeLeft(e, t) {
    let n = this.left.length;
    if (e <= n) return this.left.decomposeLeft(e, t);
    t.push(this.left),
      this.break && (n++, e >= n && t.push(null)),
      e > n && this.right.decomposeLeft(e - n, t);
  }
  decomposeRight(e, t) {
    let n = this.left.length,
      s = n + this.break;
    if (e >= s) return this.right.decomposeRight(e - s, t);
    e < n && this.left.decomposeRight(e, t),
      this.break && e < s && t.push(null),
      t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? ht.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = e),
        (this.right = t),
        (this.height = e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this);
  }
  updateHeight(e, t = 0, n = !1, s) {
    let { left: r, right: o } = this,
      l = t + r.length + this.break,
      a = null;
    return (
      s && s.from <= t + r.length && s.more
        ? (a = r = r.updateHeight(e, t, n, s))
        : r.updateHeight(e, t, n),
      s && s.from <= l + o.length && s.more
        ? (a = o = o.updateHeight(e, l, n, s))
        : o.updateHeight(e, l, n),
      a
        ? this.balanced(r, o)
        : ((this.height = this.left.height + this.right.height),
          (this.outdated = !1),
          this)
    );
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function gu(i, e) {
  let t, n;
  i[e] == null &&
    (t = i[e - 1]) instanceof Ue &&
    (n = i[e + 1]) instanceof Ue &&
    i.splice(e - 1, 3, new Ue(t.length + 1 + n.length));
}
const wx = 5;
class mc {
  constructor(e, t) {
    (this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e);
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let n = Math.min(t, this.lineEnd),
        s = this.nodes[this.nodes.length - 1];
      s instanceof wt
        ? (s.length += n - this.pos)
        : (n > this.pos || !this.isCovered) &&
          this.nodes.push(new wt(n - this.pos, -1)),
        (this.writtenTo = n),
        t > n &&
          (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
    }
    this.pos = t;
  }
  point(e, t, n) {
    if (e < t || n.heightRelevant) {
      let s = n.widget ? n.widget.estimatedHeight : 0,
        r = n.widget ? n.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      n.block
        ? this.addBlock(new lg(o, s, n))
        : (o || r || s >= wx) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    (this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 ||
          this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new wt(this.pos - e, -1)),
      (this.writtenTo = this.pos);
  }
  blankContent(e, t) {
    let n = new Ue(t - e);
    return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof wt) return e;
    let t = new wt(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, n) {
    let s = this.ensureLine();
    (s.length += n),
      (s.collapsed += n),
      (s.widgetHeight = Math.max(s.widgetHeight, e)),
      (s.breaks += t),
      (this.writtenTo = this.pos = this.pos + n);
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof wt) && !this.isCovered
      ? this.nodes.push(new wt(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let n = e;
    for (let s of this.nodes)
      s instanceof wt && s.updateHeight(this.oracle, n),
        (n += s ? s.length : 1);
    return this.nodes;
  }
  static build(e, t, n, s) {
    let r = new mc(n, e);
    return ae.spans(t, n, s, r, 0), r.finish(n);
  }
}
function Qx(i, e, t) {
  let n = new Px();
  return ae.compare(i, e, t, n, 0), n.changes;
}
class Px {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, n, s) {
    (e < t || (n && n.heightRelevant) || (s && s.heightRelevant)) &&
      rh(e, t, this.changes, 5);
  }
}
function kx(i, e) {
  let t = i.getBoundingClientRect(),
    n = i.ownerDocument,
    s = n.defaultView || window,
    r = Math.max(0, t.left),
    o = Math.min(s.innerWidth, t.right),
    l = Math.max(0, t.top),
    a = Math.min(s.innerHeight, t.bottom);
  for (let h = i.parentNode; h && h != n.body; )
    if (h.nodeType == 1) {
      let c = h,
        f = window.getComputedStyle(c);
      if (
        (c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) &&
        f.overflow != "visible"
      ) {
        let u = c.getBoundingClientRect();
        (r = Math.max(r, u.left)),
          (o = Math.min(o, u.right)),
          (l = Math.max(l, u.top)),
          (a = h == i.parentNode ? u.bottom : Math.min(a, u.bottom));
      }
      h =
        f.position == "absolute" || f.position == "fixed"
          ? c.offsetParent
          : c.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e),
  };
}
function vx(i, e) {
  let t = i.getBoundingClientRect();
  return {
    left: 0,
    right: t.right - t.left,
    top: e,
    bottom: t.bottom - (t.top + e),
  };
}
class ea {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.size = n);
  }
  static same(e, t) {
    if (e.length != t.length) return !1;
    for (let n = 0; n < e.length; n++) {
      let s = e[n],
        r = t[n];
      if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
    }
    return !0;
  }
  draw(e, t) {
    return N.replace({
      widget: new $x(this.size * (t ? e.scaleY : e.scaleX), t),
    }).range(this.from, this.to);
  }
}
class $x extends xi {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t);
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return (
      this.vertical
        ? (e.style.height = this.size + "px")
        : ((e.style.width = this.size + "px"),
          (e.style.height = "2px"),
          (e.style.display = "inline-block")),
      e
    );
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class mu {
  constructor(e) {
    (this.state = e),
      (this.pixelViewport = {
        left: 0,
        right: window.innerWidth,
        top: 0,
        bottom: 0,
      }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.scrollTop = 0),
      (this.scrolledToBottom = !1),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scrollAnchorPos = 0),
      (this.scrollAnchorHeight = -1),
      (this.scaler = bu),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = Se.LTR),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1);
    let t = e
      .facet(Oc)
      .some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    (this.heightOracle = new yx(t)),
      (this.stateDeco = e.facet(Fs).filter((n) => typeof n != "function")),
      (this.heightMap = ht
        .empty()
        .applyChanges(
          this.stateDeco,
          he.empty,
          this.heightOracle.setDoc(e.doc),
          [new Rt(0, 0, 0, e.doc.length)]
        ));
    for (
      let n = 0;
      n < 2 &&
      ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport());
      n++
    );
    this.updateViewportLines(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = N.set(this.lineGaps.map((n) => n.draw(this, !1)))),
      this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection;
    for (let n = 0; n <= 1; n++) {
      let s = n ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new Dr(r, o));
      }
    }
    return (
      (this.viewports = e.sort((n, s) => n.from - s.from)), this.updateScaler()
    );
  }
  updateScaler() {
    let e = this.scaler;
    return (
      (this.scaler =
        this.heightMap.height <= 7e6
          ? bu
          : new bc(this.heightOracle, this.heightMap, this.viewports)),
      e.eq(this.scaler) ? 0 : 2
    );
  }
  updateViewportLines() {
    (this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.heightOracle.setDoc(this.state.doc),
        0,
        0,
        (e) => {
          this.viewportLines.push(bs(e, this.scaler));
        }
      );
  }
  update(e, t = null) {
    this.state = e.state;
    let n = this.stateDeco;
    this.stateDeco = this.state.facet(Fs).filter((c) => typeof c != "function");
    let s = e.changedRanges,
      r = Rt.extendWithRanges(
        s,
        Qx(n, this.stateDeco, e ? e.changes : Xe.empty(this.state.doc.length))
      ),
      o = this.heightMap.height,
      l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    (this.heightMap = this.heightMap.applyChanges(
      this.stateDeco,
      e.startState.doc,
      this.heightOracle.setDoc(this.state.doc),
      r
    )),
      this.heightMap.height != o && (e.flags |= 2),
      l
        ? ((this.scrollAnchorPos = e.changes.mapPos(l.from, -1)),
          (this.scrollAnchorHeight = l.top))
        : ((this.scrollAnchorPos = -1),
          (this.scrollAnchorHeight = this.heightMap.height));
    let a = r.length
      ? this.mapViewport(this.viewport, e.changes)
      : this.viewport;
    ((t && (t.range.head < a.from || t.range.head > a.to)) ||
      !this.viewportIsAppropriate(a)) &&
      (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    (this.viewport = a),
      (e.flags |= this.updateForViewport()),
      (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(
          this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))
        ),
      (e.flags |= this.computeVisibleRanges()),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        !e.state.facet(UO) &&
        (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM,
      n = window.getComputedStyle(t),
      s = this.heightOracle,
      r = n.whiteSpace;
    this.defaultTextDirection = n.direction == "rtl" ? Se.RTL : Se.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r),
      l = t.getBoundingClientRect(),
      a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    (this.contentDOMHeight = l.height), (this.mustMeasureContent = !1);
    let h = 0,
      c = 0;
    if (l.width && l.height) {
      let { scaleX: x, scaleY: Q } = OO(t, l);
      ((x > 0.005 && Math.abs(this.scaleX - x) > 0.005) ||
        (Q > 0.005 && Math.abs(this.scaleY - Q) > 0.005)) &&
        ((this.scaleX = x), (this.scaleY = Q), (h |= 8), (o = a = !0));
    }
    let f = (parseInt(n.paddingTop) || 0) * this.scaleY,
      u = (parseInt(n.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) &&
      ((this.paddingTop = f), (this.paddingBottom = u), (h |= 10)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (s.lineWrapping && (a = !0),
        (this.editorWidth = e.scrollDOM.clientWidth),
        (h |= 8));
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d &&
      ((this.scrollAnchorHeight = -1), (this.scrollTop = d)),
      (this.scrolledToBottom = bO(e.scrollDOM));
    let p = (this.printing ? vx : kx)(t, this.paddingTop),
      O = p.top - this.pixelViewport.top,
      m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let b =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left;
    if (
      (b != this.inView && ((this.inView = b), b && (a = !0)),
      !this.inView && !this.scrollTarget)
    )
      return 0;
    let S = l.width;
    if (
      ((this.contentDOMWidth != S ||
        this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = l.width),
        (this.editorHeight = e.scrollDOM.clientHeight),
        (h |= 8)),
      a)
    ) {
      let x = e.docView.measureVisibleLineHeights(this.viewport);
      if (
        (s.mustRefreshForHeights(x) && (o = !0),
        o ||
          (s.lineWrapping && Math.abs(S - this.contentDOMWidth) > s.charWidth))
      ) {
        let {
          lineHeight: Q,
          charWidth: $,
          textHeight: C,
        } = e.docView.measureTextSize();
        (o = Q > 0 && s.refresh(r, Q, $, C, S / $, x)),
          o && ((e.docView.minWidth = 0), (h |= 8));
      }
      O > 0 && m > 0
        ? (c = Math.max(O, m))
        : O < 0 && m < 0 && (c = Math.min(O, m)),
        (s.heightChanged = !1);
      for (let Q of this.viewports) {
        let $ =
          Q.from == this.viewport.from
            ? x
            : e.docView.measureVisibleLineHeights(Q);
        this.heightMap = (
          o
            ? ht
                .empty()
                .applyChanges(this.stateDeco, he.empty, this.heightOracle, [
                  new Rt(0, 0, 0, e.state.doc.length),
                ])
            : this.heightMap
        ).updateHeight(s, 0, o, new xx(Q.from, $));
      }
      s.heightChanged && (h |= 2);
    }
    let P =
      !this.viewportIsAppropriate(this.viewport, c) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to));
    return (
      P &&
        (h & 2 && (h |= this.updateScaler()),
        (this.viewport = this.getViewport(c, this.scrollTarget)),
        (h |= this.updateForViewport())),
      (h & 2 || P) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
      (h |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      h
    );
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let n = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      s = this.heightMap,
      r = this.heightOracle,
      { visibleTop: o, visibleBottom: l } = this,
      a = new Dr(
        s.lineAt(o - n * 1e3, xe.ByHeight, r, 0, 0).from,
        s.lineAt(l + (1 - n) * 1e3, xe.ByHeight, r, 0, 0).to
      );
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(
            this.editorHeight,
            this.pixelViewport.bottom - this.pixelViewport.top
          ),
          f = s.lineAt(h, xe.ByPos, r, 0, 0),
          u;
        t.y == "center"
          ? (u = (f.top + f.bottom) / 2 - c / 2)
          : t.y == "start" || (t.y == "nearest" && h < a.from)
          ? (u = f.top)
          : (u = f.bottom - c),
          (a = new Dr(
            s.lineAt(u - 1e3 / 2, xe.ByHeight, r, 0, 0).from,
            s.lineAt(u + c + 1e3 / 2, xe.ByHeight, r, 0, 0).to
          ));
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let n = t.mapPos(e.from, -1),
      s = t.mapPos(e.to, 1);
    return new Dr(
      this.heightMap.lineAt(n, xe.ByPos, this.heightOracle, 0, 0).from,
      this.heightMap.lineAt(s, xe.ByPos, this.heightOracle, 0, 0).to
    );
  }
  viewportIsAppropriate({ from: e, to: t }, n = 0) {
    if (!this.inView) return !0;
    let { top: s } = this.heightMap.lineAt(
        e,
        xe.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { bottom: r } = this.heightMap.lineAt(
        t,
        xe.ByPos,
        this.heightOracle,
        0,
        0
      ),
      { visibleTop: o, visibleBottom: l } = this;
    return (
      (e == 0 || s <= o - Math.max(10, Math.min(-n, 250))) &&
      (t == this.state.doc.length || r >= l + Math.max(10, Math.min(n, 250))) &&
      s > o - 2 * 1e3 &&
      r < l + 2 * 1e3
    );
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let n = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) ||
        n.push(new ea(t.mapPos(s.from), t.mapPos(s.to), s.size));
    return n;
  }
  ensureLineGaps(e, t) {
    let n = this.heightOracle.lineWrapping,
      s = n ? 1e4 : 2e3,
      r = s >> 1,
      o = s << 1;
    if (this.defaultTextDirection != Se.LTR && !n) return [];
    let l = [],
      a = (c, f, u, d) => {
        if (f - c < r) return;
        let p = this.state.selection.main,
          O = [p.from];
        p.empty || O.push(p.to);
        for (let b of O)
          if (b > c && b < f) {
            a(c, b - 10, u, d), a(b + 10, f, u, d);
            return;
          }
        let m = Zx(
          e,
          (b) =>
            b.from >= u.from &&
            b.to <= u.to &&
            Math.abs(b.from - c) < r &&
            Math.abs(b.to - f) < r &&
            !O.some((S) => b.from < S && b.to > S)
        );
        if (!m) {
          if (
            f < u.to &&
            t &&
            n &&
            t.visibleRanges.some((b) => b.from <= f && b.to >= f)
          ) {
            let b = t.moveToLineBoundary(v.cursor(f), !1, !0).head;
            b > c && (f = b);
          }
          m = new ea(c, f, this.gapSize(u, c, f, d));
        }
        l.push(m);
      },
      h = (c) => {
        if (c.length < o || c.type != at.Text) return;
        let f = Cx(c.from, c.to, this.stateDeco);
        if (f.total < o) return;
        let u = this.scrollTarget ? this.scrollTarget.range.head : null,
          d,
          p;
        if (n) {
          let O =
              (s / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
            m,
            b;
          if (u != null) {
            let S = jr(f, u),
              P = ((this.visibleBottom - this.visibleTop) / 2 + O) / c.height;
            (m = S - P), (b = S + P);
          } else
            (m = (this.visibleTop - c.top - O) / c.height),
              (b = (this.visibleBottom - c.top + O) / c.height);
          (d = Yr(f, m)), (p = Yr(f, b));
        } else {
          let O = f.total * this.heightOracle.charWidth,
            m = s * this.heightOracle.charWidth,
            b,
            S;
          if (u != null) {
            let P = jr(f, u),
              x =
                ((this.pixelViewport.right - this.pixelViewport.left) / 2 + m) /
                O;
            (b = P - x), (S = P + x);
          } else
            (b = (this.pixelViewport.left - m) / O),
              (S = (this.pixelViewport.right + m) / O);
          (d = Yr(f, b)), (p = Yr(f, S));
        }
        d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
      };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, n, s) {
    let r = jr(s, n) - jr(s, t);
    return this.heightOracle.lineWrapping
      ? e.height * r
      : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    ea.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = N.set(
        e.map((t) => t.draw(this, this.heightOracle.lineWrapping))
      )));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    ae.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(s, r) {
          t.push({ from: s, to: r });
        },
        point() {},
      },
      20
    );
    let n =
      t.length != this.visibleRanges.length ||
      this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to);
    return (this.visibleRanges = t), n ? 4 : 0;
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
      bs(
        this.heightMap.lineAt(e, xe.ByPos, this.heightOracle, 0, 0),
        this.scaler
      )
    );
  }
  lineBlockAtHeight(e) {
    return (
      (e >= this.viewportLines[0].top &&
        e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
        this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
      bs(
        this.heightMap.lineAt(
          this.scaler.fromDOM(e),
          xe.ByHeight,
          this.heightOracle,
          0,
          0
        ),
        this.scaler
      )
    );
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200
      ? t
      : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return bs(
      this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0),
      this.scaler
    );
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Dr {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
function Cx(i, e, t) {
  let n = [],
    s = i,
    r = 0;
  return (
    ae.spans(
      t,
      i,
      e,
      {
        span() {},
        point(o, l) {
          o > s && (n.push({ from: s, to: o }), (r += o - s)), (s = l);
        },
      },
      20
    ),
    s < e && (n.push({ from: s, to: e }), (r += e - s)),
    { total: r, ranges: n }
  );
}
function Yr({ total: i, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let n = Math.floor(i * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s],
      l = o - r;
    if (n <= l) return r + n;
    n -= l;
  }
}
function jr(i, e) {
  let t = 0;
  for (let { from: n, to: s } of i.ranges) {
    if (e <= s) {
      t += e - n;
      break;
    }
    t += s - n;
  }
  return t / i.total;
}
function Zx(i, e) {
  for (let t of i) if (e(t)) return t;
}
const bu = {
  toDOM(i) {
    return i;
  },
  fromDOM(i) {
    return i;
  },
  scale: 1,
  eq(i) {
    return i == this;
  },
};
class bc {
  constructor(e, t, n) {
    let s = 0,
      r = 0,
      o = 0;
    (this.viewports = n.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, xe.ByPos, e, 0, 0).top,
        c = t.lineAt(a, xe.ByPos, e, 0, 0).bottom;
      return (
        (s += c - h),
        { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 }
      );
    })),
      (this.scale = (7e6 - s) / (t.height - s));
    for (let l of this.viewports)
      (l.domTop = o + (l.top - r) * this.scale),
        (o = l.domBottom = l.domTop + (l.bottom - l.top)),
        (r = l.bottom);
  }
  toDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top) return s + (e - n) * this.scale;
      if (e <= r.bottom) return r.domTop + (e - r.top);
      (n = r.bottom), (s = r.domBottom);
    }
  }
  fromDOM(e) {
    for (let t = 0, n = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop) return n + (e - s) / this.scale;
      if (e <= r.domBottom) return r.top + (e - r.domTop);
      (n = r.bottom), (s = r.domBottom);
    }
  }
  eq(e) {
    return e instanceof bc
      ? this.scale == e.scale &&
          this.viewports.length == e.viewports.length &&
          this.viewports.every(
            (t, n) => t.from == e.viewports[n].from && t.to == e.viewports[n].to
          )
      : !1;
  }
}
function bs(i, e) {
  if (e.scale == 1) return i;
  let t = e.toDOM(i.top),
    n = e.toDOM(i.bottom);
  return new Jt(
    i.from,
    i.length,
    t,
    n - t,
    Array.isArray(i._content) ? i._content.map((s) => bs(s, e)) : i._content
  );
}
const Lr = z.define({ combine: (i) => i.join(" ") }),
  dh = z.define({ combine: (i) => i.indexOf(!0) > -1 }),
  ph = Vi.newName(),
  ag = Vi.newName(),
  hg = Vi.newName(),
  cg = { "&light": "." + ag, "&dark": "." + hg };
function Oh(i, e, t) {
  return new Vi(e, {
    finish(n) {
      return /&/.test(n)
        ? n.replace(/&\w*/, (s) => {
            if (s == "&") return i;
            if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
            return t[s];
          })
        : i + " " + n;
    },
  });
}
const Rx = Oh(
    "." + ph,
    {
      "&": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": { outline: "1px dotted #212121" },
        display: "flex !important",
        flexDirection: "column",
      },
      ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0,
      },
      ".cm-content": {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        minHeight: "100%",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": {
          WebkitUserModify: "read-write-plaintext-only",
        },
      },
      ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        flexShrink: 1,
      },
      "&light .cm-content": { caretColor: "black" },
      "&dark .cm-content": { caretColor: "white" },
      ".cm-line": { display: "block", padding: "0 2px 0 6px" },
      ".cm-layer": {
        position: "absolute",
        left: 0,
        top: 0,
        contain: "size style",
        "& > *": { position: "absolute" },
      },
      "&light .cm-selectionBackground": { background: "#d9d9d9" },
      "&dark .cm-selectionBackground": { background: "#222" },
      "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":
        { background: "#d7d4f0" },
      "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":
        { background: "#233" },
      ".cm-cursorLayer": { pointerEvents: "none" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite",
      },
      "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      ".cm-cursor, .cm-dropCursor": {
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none",
      },
      ".cm-cursor": { display: "none" },
      "&dark .cm-cursor": { borderLeftColor: "#444" },
      ".cm-dropCursor": { position: "absolute" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
        display: "block",
      },
      ".cm-iso": { unicodeBidi: "isolate" },
      ".cm-announced": { position: "fixed", top: "-10000px" },
      "@media print": { ".cm-announced": { display: "none" } },
      "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
      "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
      "&light .cm-specialChar": { color: "red" },
      "&dark .cm-specialChar": { color: "#f78" },
      ".cm-gutters": {
        flexShrink: 0,
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        insetInlineStart: 0,
        zIndex: 200,
      },
      "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#6c6c6c",
        borderRight: "1px solid #ddd",
      },
      "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
      ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden",
      },
      ".cm-gutterElement": { boxSizing: "border-box" },
      ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap",
      },
      "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
      "&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
      ".cm-panels": {
        boxSizing: "border-box",
        position: "sticky",
        left: 0,
        right: 0,
      },
      "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
      "&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
      "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
      "&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
      ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
      },
      ".cm-widgetBuffer": {
        verticalAlign: "text-top",
        height: "1em",
        width: 0,
        display: "inline",
      },
      ".cm-placeholder": {
        color: "#888",
        display: "inline-block",
        verticalAlign: "top",
      },
      ".cm-highlightSpace:before": {
        content: "attr(data-display)",
        position: "absolute",
        pointerEvents: "none",
        color: "#888",
      },
      ".cm-highlightTab": {
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right 90%",
        backgroundRepeat: "no-repeat",
      },
      ".cm-trailingSpace": { backgroundColor: "#ff332255" },
      ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px",
      },
      "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" },
      },
      "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#111, #333)" },
      },
      ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em",
      },
      "&light .cm-textfield": { backgroundColor: "white" },
      "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit",
      },
    },
    cg
  ),
  ys = "￿";
class Tx {
  constructor(e, t) {
    (this.points = e),
      (this.text = ""),
      (this.lineSeparator = t.facet(ce.lineSeparator));
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += ys;
  }
  readRange(e, t) {
    if (!e) return this;
    let n = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(n, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t) break;
      let l = Oe.get(s),
        a = Oe.get(o);
      (l && a
        ? l.breakAfter
        : (l ? l.breakAfter : Ao(s)) ||
          (Ao(o) &&
            (s.nodeName != "BR" || s.cmIgnore) &&
            this.text.length > r)) && this.lineBreak(),
        (s = o);
    }
    return this.findPointBefore(n, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let n of this.points)
      n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
    for (let n = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1,
        o = 1,
        l;
      if (
        (this.lineSeparator
          ? ((r = t.indexOf(this.lineSeparator, n)),
            (o = this.lineSeparator.length))
          : (l = s.exec(t)) && ((r = l.index), (o = l[0].length)),
        this.append(t.slice(n, r < 0 ? t.length : r)),
        r < 0)
      )
        break;
      if ((this.lineBreak(), o > 1))
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      n = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let t = Oe.get(e),
      n = t && t.overrideDOMText;
    if (n != null) {
      this.findPointInside(e, n.length);
      for (let s = n.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == "BR"
        ? e.nextSibling && this.lineBreak()
        : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let n of this.points)
      n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let n of this.points)
      (e.nodeType == 3 ? n.node == e : e.contains(n.node)) &&
        (n.pos = this.text.length + (Ax(e, n.node, n.offset) ? t : 0));
  }
}
function Ax(i, e, t) {
  for (;;) {
    if (!e || t < pi(e)) return !1;
    if (e == i) return !0;
    (t = gn(e) + 1), (e = e.parentNode);
  }
}
class yu {
  constructor(e, t) {
    (this.node = e), (this.offset = t), (this.pos = -1);
  }
}
class Mx {
  constructor(e, t, n, s) {
    (this.typeOver = s),
      (this.bounds = null),
      (this.text = ""),
      (this.domChanged = t > -1);
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, n, 0))) {
      let l = r || o ? [] : Wx(e),
        a = new Tx(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = a.text),
        (this.newSel = Xx(l, this.bounds.from));
    } else {
      let l = e.observer.selectionRange,
        a =
          (r && r.node == l.focusNode && r.offset == l.focusOffset) ||
          !Ja(e.contentDOM, l.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(l.focusNode, l.focusOffset),
        h =
          (o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
          !Ja(e.contentDOM, l.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
        c = e.viewport;
      if (
        (V.ios || V.chrome) &&
        e.state.selection.main.empty &&
        a != h &&
        (c.from > 0 || c.to < e.state.doc.length)
      ) {
        let f = Math.min(a, h),
          u = Math.max(a, h),
          d = c.from - f,
          p = c.to - u;
        (d == 0 || d == 1 || f == 0) &&
          (p == 0 || p == -1 || u == e.state.doc.length) &&
          ((a = 0), (h = e.state.doc.length));
      }
      this.newSel = v.single(h, a);
    }
  }
}
function fg(i, e) {
  let t,
    { newSel: n } = e,
    s = i.state.selection.main,
    r =
      i.inputState.lastKeyTime > Date.now() - 100
        ? i.inputState.lastKeyCode
        : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds,
      a = s.from,
      h = null;
    (r === 8 || (V.android && e.text.length < l - o)) &&
      ((a = s.to), (h = "end"));
    let c = Ex(i.state.doc.sliceString(o, l, ys), e.text, a - o, h);
    c &&
      (V.chrome &&
        r == 13 &&
        c.toB == c.from + 2 &&
        e.text.slice(c.from, c.toB) == ys + ys &&
        c.toB--,
      (t = {
        from: o + c.from,
        to: o + c.toA,
        insert: he.of(e.text.slice(c.from, c.toB).split(ys)),
      }));
  } else
    n && ((!i.hasFocus && i.state.facet(Ai)) || n.main.eq(s)) && (n = null);
  if (!t && !n) return !1;
  if (
    (!t && e.typeOver && !s.empty && n && n.main.empty
      ? (t = {
          from: s.from,
          to: s.to,
          insert: i.state.doc.slice(s.from, s.to),
        })
      : t &&
        t.from >= s.from &&
        t.to <= s.to &&
        (t.from != s.from || t.to != s.to) &&
        s.to - s.from - (t.to - t.from) <= 4
      ? (t = {
          from: s.from,
          to: s.to,
          insert: i.state.doc
            .slice(s.from, t.from)
            .append(t.insert)
            .append(i.state.doc.slice(t.to, s.to)),
        })
      : (V.mac || V.android) &&
        t &&
        t.from == t.to &&
        t.from == s.head - 1 &&
        /^\. ?$/.test(t.insert.toString()) &&
        i.contentDOM.getAttribute("autocorrect") == "off"
      ? (n &&
          t.insert.length == 2 &&
          (n = v.single(n.main.anchor - 1, n.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: he.of([" "]) }))
      : V.chrome &&
        t &&
        t.from == t.to &&
        t.from == s.head &&
        t.insert.toString() == "\n".join([``, ` `]) &&
        i.lineWrapping &&
        (n && (n = v.single(n.main.anchor - 1, n.main.head - 1)),
        (t = { from: s.from, to: s.to, insert: he.of([" "]) })),
    t)
  )
    return ug(i, t, n, r);
  if (n && !n.main.eq(s)) {
    let o = !1,
      l = "select";
    return (
      i.inputState.lastSelectionTime > Date.now() - 50 &&
        (i.inputState.lastSelectionOrigin == "select" && (o = !0),
        (l = i.inputState.lastSelectionOrigin)),
      i.dispatch({ selection: n, scrollIntoView: o, userEvent: l }),
      !0
    );
  } else return !1;
}
function ug(i, e, t, n = -1) {
  if (V.ios && i.inputState.flushIOSKey(e)) return !0;
  let s = i.state.selection.main;
  if (
    V.android &&
    ((e.to == s.to &&
      (e.from == s.from ||
        (e.from == s.from - 1 && i.state.sliceDoc(e.from, s.from) == " ")) &&
      e.insert.length == 1 &&
      e.insert.lines == 2 &&
      Xn(i.contentDOM, "Enter", 13)) ||
      (((e.from == s.from - 1 && e.to == s.to && e.insert.length == 0) ||
        (n == 8 && e.insert.length < e.to - e.from && e.to > s.head)) &&
        Xn(i.contentDOM, "Backspace", 8)) ||
      (e.from == s.from &&
        e.to == s.to + 1 &&
        e.insert.length == 0 &&
        Xn(i.contentDOM, "Delete", 46)))
  )
    return !0;
  let r = e.insert.toString();
  i.inputState.composing >= 0 && i.inputState.composing++;
  let o,
    l = () => o || (o = _x(i, e, t));
  return (
    i.state.facet(YO).some((a) => a(i, e.from, e.to, r, l)) || i.dispatch(l()),
    !0
  );
}
function _x(i, e, t) {
  let n,
    s = i.state,
    r = s.selection.main;
  if (
    e.from >= r.from &&
    e.to <= r.to &&
    e.to - e.from >= (r.to - r.from) / 3 &&
    (!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
    i.inputState.composing < 0
  ) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : "",
      a = r.to > e.to ? s.sliceDoc(e.to, r.to) : "";
    n = s.replaceSelection(
      i.state.toText(l + e.insert.sliceString(0, void 0, i.state.lineBreak) + a)
    );
  } else {
    let l = s.changes(e),
      a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (
      s.selection.ranges.length > 1 &&
      i.inputState.composing >= 0 &&
      e.to <= r.to &&
      e.to >= r.to - 10
    ) {
      let h = i.state.sliceDoc(e.from, e.to),
        c,
        f = t && FO(i, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else c = i.state.doc.lineAt(r.head);
      let u = r.to - e.to,
        d = r.to - r.from;
      n = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let O = p.to - u,
          m = O - h.length;
        if (
          p.to - p.from != d ||
          i.state.sliceDoc(m, O) != h ||
          (p.to >= c.from && p.from <= c.to)
        )
          return { range: p };
        let b = s.changes({ from: m, to: O, insert: e.insert }),
          S = p.to - r.to;
        return {
          changes: b,
          range: a
            ? v.range(Math.max(0, a.anchor + S), Math.max(0, a.head + S))
            : p.map(b),
        };
      });
    } else n = { changes: l, selection: a && s.selection.replaceRange(a) };
  }
  let o = "input.type";
  return (
    (i.composing ||
      (i.inputState.compositionPendingChange &&
        i.inputState.compositionEndedAt > Date.now() - 50)) &&
      ((i.inputState.compositionPendingChange = !1),
      (o += ".compose"),
      i.inputState.compositionFirstChange &&
        ((o += ".start"), (i.inputState.compositionFirstChange = !1))),
    s.update(n, { userEvent: o, scrollIntoView: !0 })
  );
}
function Ex(i, e, t, n) {
  let s = Math.min(i.length, e.length),
    r = 0;
  for (; r < s && i.charCodeAt(r) == e.charCodeAt(r); ) r++;
  if (r == s && i.length == e.length) return null;
  let o = i.length,
    l = e.length;
  for (; o > 0 && l > 0 && i.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (n == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && i.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    (r -= a), (l = r + (l - o)), (o = r);
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    (r -= a), (o = r + (o - l)), (l = r);
  }
  return { from: r, toA: o, toB: l };
}
function Wx(i) {
  let e = [];
  if (i.root.activeElement != i.contentDOM) return e;
  let {
    anchorNode: t,
    anchorOffset: n,
    focusNode: s,
    focusOffset: r,
  } = i.observer.selectionRange;
  return (
    t && (e.push(new yu(t, n)), (s != t || r != n) && e.push(new yu(s, r))), e
  );
}
function Xx(i, e) {
  if (i.length == 0) return null;
  let t = i[0].pos,
    n = i.length == 2 ? i[1].pos : t;
  return t > -1 && n > -1 ? v.single(t + e, n + e) : null;
}
const Dx = {
    childList: !0,
    characterData: !0,
    subtree: !0,
    attributes: !0,
    characterDataOldValue: !0,
  },
  ta = V.ie && V.ie_version <= 11;
class Yx {
  constructor(e) {
    (this.view = e),
      (this.active = !1),
      (this.editContext = null),
      (this.selectionRange = new Qy()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resizeScroll = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.printQuery = null),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((t) => {
        for (let n of t) this.queue.push(n);
        ((V.ie && V.ie_version <= 11) || (V.ios && e.composing)) &&
        t.some(
          (n) =>
            (n.type == "childList" && n.removedNodes.length) ||
            (n.type == "characterData" &&
              n.oldValue.length > n.target.nodeValue.length)
        )
          ? this.flushSoon()
          : this.flush();
      })),
      window.EditContext &&
        e.constructor.EDIT_CONTEXT !== !1 &&
        !(V.chrome && V.chrome_version < 126) &&
        ((this.editContext = new Lx(e)),
        e.state.facet(Ai) &&
          (e.contentDOM.editContext = this.editContext.editContext)),
      ta &&
        (this.onCharData = (t) => {
          this.queue.push({
            target: t.target,
            type: "characterData",
            oldValue: t.prevValue,
          }),
            this.flushSoon();
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      window.matchMedia && (this.printQuery = window.matchMedia("print")),
      typeof ResizeObserver == "function" &&
        ((this.resizeScroll = new ResizeObserver(() => {
          var t;
          ((t = this.view.docView) === null || t === void 0
            ? void 0
            : t.lastUpdate) <
            Date.now() - 75 && this.onResize();
        })),
        this.resizeScroll.observe(e.scrollDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == "function" &&
        ((this.intersection = new IntersectionObserver(
          (t) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(
                this.listenForScroll.bind(this),
                1e3
              )),
              t.length > 0 &&
                t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent("Event")));
          },
          { threshold: [0, 0.001] }
        )),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((t) => {
          t.length > 0 &&
            t[t.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent("Event"));
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e),
      this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1),
      this.editContext && this.view.requestMeasure(this.editContext.measureReq),
      this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        (this.resizeTimeout = -1), this.view.requestMeasure();
      }, 50));
  }
  onPrint(e) {
    (e.type == "change" && !e.matches) ||
      ((this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        (this.view.viewState.printing = !1), this.view.requestMeasure();
      }, 500));
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))
    ) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: n } = this,
      s = this.selectionRange;
    if (n.state.facet(Ai) ? n.root.activeElement != this.dom : !lo(n.dom, s))
      return;
    let r = s.anchorNode && n.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ((V.ie && V.ie_version <= 11) || (V.android && V.chrome)) &&
    !n.state.selection.main.empty &&
    s.focusNode &&
    Ms(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
      ? this.flushSoon()
      : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this,
      t = Bs(e.root);
    if (!t) return !1;
    let n =
      (V.safari &&
        e.root.nodeType == 11 &&
        yy(this.dom.ownerDocument) == this.dom &&
        jx(this.view, t)) ||
      t;
    if (!n || this.selectionRange.eq(n)) return !1;
    let s = lo(this.dom, n);
    return s &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      ky(this.dom, n)
      ? ((this.view.inputState.lastFocusTime = 0),
        e.docView.updateSelection(),
        !1)
      : (this.selectionRange.setRange(n),
        s && (this.selectionChanged = !0),
        !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset),
      (this.selectionChanged = !1);
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0,
      t = null;
    for (let n = this.dom; n; )
      if (n.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == n
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(n),
          (n = n.assignedSlot || n.parentNode);
      else if (n.nodeType == 11) n = n.host;
      else break;
    if (
      (e < this.scrollTargets.length &&
        !t &&
        (t = this.scrollTargets.slice(0, e)),
      t)
    ) {
      for (let n of this.scrollTargets)
        n.removeEventListener("scroll", this.onScroll);
      for (let n of (this.scrollTargets = t))
        n.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, Dx),
      ta &&
        this.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
      (this.active = !0));
  }
  stop() {
    this.active &&
      ((this.active = !1),
      this.observer.disconnect(),
      ta &&
        this.dom.removeEventListener(
          "DOMCharacterDataModified",
          this.onCharData
        ));
  }
  clear() {
    this.processRecords(),
      (this.queue.length = 0),
      (this.selectionChanged = !1);
  }
  delayAndroidKey(e, t) {
    var n;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r &&
          (this.clearDelayedAndroidKey(),
          (this.view.inputState.lastKeyCode = r.keyCode),
          (this.view.inputState.lastKeyTime = Date.now()),
          !this.flush() && r.force && Xn(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(
            !((n = this.delayedAndroidKey) === null || n === void 0) && n.force
          ),
      });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1);
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        (this.delayedFlush = -1), this.flush();
      }));
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush),
      (this.delayedFlush = -1)),
      this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1,
      n = -1,
      s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o &&
        (o.typeOver && (s = !0),
        t == -1
          ? ({ from: t, to: n } = o)
          : ((t = Math.min(o.from, t)), (n = Math.max(o.to, n))));
    }
    return { from: t, to: n, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: n } = this.processRecords(),
      s = this.selectionChanged && lo(this.dom, this.selectionRange);
    if (e < 0 && !s) return null;
    e > -1 && (this.lastChange = Date.now()),
      (this.view.inputState.lastFocusTime = 0),
      (this.selectionChanged = !1);
    let r = new Mx(this.view, e, t, n);
    return (
      (this.view.docView.domChanged = {
        newSel: r.newSel ? r.newSel.main : null,
      }),
      r
    );
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), !1;
    let n = this.view.state,
      s = fg(this.view, t);
    return (
      this.view.state == n &&
        (t.domChanged ||
          (t.newSel && !t.newSel.main.eq(this.view.state.selection.main))) &&
        this.view.update([]),
      s
    );
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (
      (t.markDirty(e.type == "attributes"),
      e.type == "attributes" && (t.flags |= 4),
      e.type == "childList")
    ) {
      let n = xu(t, e.previousSibling || e.target.previousSibling, -1),
        s = xu(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: n ? t.posAfter(n) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1,
      };
    } else
      return e.type == "characterData"
        ? {
            from: t.posAtStart,
            to: t.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue,
          }
        : null;
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win),
      (this.win = e),
      this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.addEventListener("change", this.onPrint)
        : e.addEventListener("beforeprint", this.onPrint),
      e.addEventListener("scroll", this.onScroll),
      e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll),
      e.removeEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.removeEventListener("change", this.onPrint)
        : e.removeEventListener("beforeprint", this.onPrint),
      e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext &&
      (this.editContext.update(e),
      e.startState.facet(Ai) != e.state.facet(Ai) &&
        (e.view.contentDOM.editContext = e.state.facet(Ai)
          ? this.editContext.editContext
          : null));
  }
  destroy() {
    var e, t, n;
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (n = this.resizeScroll) === null || n === void 0 || n.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey);
  }
}
function xu(i, e, t) {
  for (; e; ) {
    let n = Oe.get(e);
    if (n && n.parent == i) return n;
    let s = e.parentNode;
    e = s != i.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Su(i, e) {
  let t = e.startContainer,
    n = e.startOffset,
    s = e.endContainer,
    r = e.endOffset,
    o = i.docView.domAtPos(i.state.selection.main.anchor);
  return (
    Ms(o.node, o.offset, s, r) && ([t, n, s, r] = [s, r, t, n]),
    { anchorNode: t, anchorOffset: n, focusNode: s, focusOffset: r }
  );
}
function jx(i, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(i.root)[0];
    if (s) return Su(i, s);
  }
  let t = null;
  function n(s) {
    s.preventDefault(),
      s.stopImmediatePropagation(),
      (t = s.getTargetRanges()[0]);
  }
  return (
    i.contentDOM.addEventListener("beforeinput", n, !0),
    i.dom.ownerDocument.execCommand("indent"),
    i.contentDOM.removeEventListener("beforeinput", n, !0),
    t ? Su(i, t) : null
  );
}
class Lx {
  constructor(e) {
    (this.from = 0),
      (this.to = 0),
      (this.pendingContextChange = null),
      this.resetRange(e.state);
    let t = (this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(
        Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))
      ),
      selectionEnd: this.toContextPos(e.state.selection.main.head),
    }));
    t.addEventListener("textupdate", (n) => {
      let { anchor: s } = e.state.selection.main,
        r = {
          from: this.toEditorPos(n.updateRangeStart),
          to: this.toEditorPos(n.updateRangeEnd),
          insert: he.of(n.text.split("\n")),
        };
      r.from == this.from && s < this.from
        ? (r.from = s)
        : r.to == this.to && s > this.to && (r.to = s),
        !(r.from == r.to && !r.insert.length) &&
          ((this.pendingContextChange = r),
          ug(
            e,
            r,
            v.single(
              this.toEditorPos(n.selectionStart),
              this.toEditorPos(n.selectionEnd)
            )
          ),
          this.pendingContextChange && this.revertPending(e.state));
    }),
      t.addEventListener("characterboundsupdate", (n) => {
        let s = [],
          r = null;
        for (
          let o = this.toEditorPos(n.rangeStart),
            l = this.toEditorPos(n.rangeEnd);
          o < l;
          o++
        ) {
          let a = e.coordsForChar(o);
          (r =
            (a &&
              new DOMRect(
                a.left,
                a.right,
                a.right - a.left,
                a.bottom - a.top
              )) ||
            r ||
            new DOMRect()),
            s.push(r);
        }
        t.updateCharacterBounds(n.rangeStart, s);
      }),
      t.addEventListener("textformatupdate", (n) => {
        let s = [];
        for (let r of n.getTextFormats()) {
          let o = r.underlineStyle,
            l = r.underlineThickness;
          if (o != "None" && l != "None") {
            let a = `text-decoration: underline ${
              o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""
            }${l == "Thin" ? 1 : 2}px`;
            s.push(
              N.mark({ attributes: { style: a } }).range(
                this.toEditorPos(r.rangeStart),
                this.toEditorPos(r.rangeEnd)
              )
            );
          }
        }
        e.dispatch({ effects: qO.of(N.set(s)) });
      }),
      t.addEventListener("compositionstart", () => {
        e.inputState.composing < 0 &&
          ((e.inputState.composing = 0),
          (e.inputState.compositionFirstChange = !0));
      }),
      t.addEventListener("compositionend", () => {
        (e.inputState.composing = -1),
          (e.inputState.compositionFirstChange = null);
      }),
      (this.measureReq = {
        read: (n) => {
          this.editContext.updateControlBounds(
            n.contentDOM.getBoundingClientRect()
          );
          let s = Bs(n.root);
          s &&
            s.rangeCount &&
            this.editContext.updateSelectionBounds(
              s.getRangeAt(0).getBoundingClientRect()
            );
        },
      });
  }
  applyEdits(e) {
    let t = 0,
      n = !1,
      s = this.pendingContextChange;
    return (
      e.changes.iterChanges((r, o, l, a, h) => {
        if (n) return;
        let c = h.length - (o - r);
        if (s && o >= s.to)
          if (s.from == r && s.to == o && s.insert.eq(h)) {
            (s = this.pendingContextChange = null), (t += c);
            return;
          } else (s = null), this.revertPending(e.state);
        if (((r += t), (o += t), o <= this.from))
          (this.from += c), (this.to += c);
        else if (r < this.to) {
          if (
            r < this.from ||
            o > this.to ||
            this.to - this.from + h.length > 3e4
          ) {
            n = !0;
            return;
          }
          this.editContext.updateText(
            this.toContextPos(r),
            this.toContextPos(o),
            h.toString()
          ),
            (this.to += c);
        }
        t += c;
      }),
      s && !n && this.revertPending(e.state),
      !n
    );
  }
  update(e) {
    !this.applyEdits(e) || !this.rangeIsValid(e.state)
      ? ((this.pendingContextChange = null),
        this.resetRange(e.state),
        this.editContext.updateText(
          0,
          this.editContext.text.length,
          e.state.doc.sliceString(this.from, this.to)
        ),
        this.setSelection(e.state))
      : (e.docChanged || e.selectionSet) && this.setSelection(e.state),
      (e.geometryChanged || e.docChanged || e.selectionSet) &&
        e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    (this.from = Math.max(0, t - 1e4)),
      (this.to = Math.min(e.doc.length, t + 1e4));
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    (this.pendingContextChange = null),
      this.editContext.updateText(
        this.toContextPos(t.from),
        this.toContextPos(t.to + t.insert.length),
        e.doc.sliceString(t.from, t.to)
      );
  }
  setSelection(e) {
    let { main: t } = e.selection,
      n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
      s = this.toContextPos(t.head);
    (this.editContext.selectionStart != n ||
      this.editContext.selectionEnd != s) &&
      this.editContext.updateSelection(n, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(
      (this.from > 0 && t - this.from < 500) ||
      (this.to < e.doc.length && this.to - t < 500) ||
      this.to - this.from > 1e4 * 3
    );
  }
  toEditorPos(e) {
    return e + this.from;
  }
  toContextPos(e) {
    return e - this.from;
  }
}
class q {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    (this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement("div")),
      (this.scrollDOM = document.createElement("div")),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = "cm-scroller"),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement("div")),
      (this.announceDOM.className = "cm-announced"),
      this.announceDOM.setAttribute("aria-live", "polite"),
      (this.dom = document.createElement("div")),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      e.parent && e.parent.appendChild(this.dom);
    let { dispatch: t } = e;
    (this.dispatchTransactions =
      e.dispatchTransactions ||
      (t && ((n) => n.forEach((s) => t(s, this)))) ||
      ((n) => this.update(n))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || Py(e.parent) || document),
      (this.viewState = new mu(e.state || ce.create(e))),
      e.scrollTo &&
        e.scrollTo.is(Er) &&
        (this.viewState.scrollTarget = e.scrollTo.value.clip(
          this.viewState.state
        )),
      (this.plugins = this.state.facet(gs).map((n) => new Hl(n)));
    for (let n of this.plugins) n.update(this);
    (this.observer = new Yx(this)),
      (this.inputState = new ix(this)),
      this.inputState.ensureHandlers(this.plugins),
      (this.docView = new Jf(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure();
  }
  dispatch(...e) {
    let t =
      e.length == 1 && e[0] instanceof Ae
        ? e
        : e.length == 1 && Array.isArray(e[0])
        ? e[0]
        : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error(
        "Calls to EditorView.update are not allowed while an update is in progress"
      );
    let t = !1,
      n = !1,
      s,
      r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state."
        );
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus,
      l = 0,
      a = null;
    e.some((u) => u.annotation(sg))
      ? ((this.inputState.notifiedFocused = o), (l = 1))
      : o != this.inputState.notifiedFocused &&
        ((this.inputState.notifiedFocused = o), (a = rg(r, o)), a || (l = 1));
    let h = this.observer.delayedAndroidKey,
      c = null;
    if (
      (h
        ? (this.observer.clearDelayedAndroidKey(),
          (c = this.observer.readChange()),
          ((c && !this.state.doc.eq(r.doc)) ||
            !this.state.selection.eq(r.selection)) &&
            (c = null))
        : this.observer.clear(),
      r.facet(ce.phrases) != this.state.facet(ce.phrases))
    )
      return this.setState(r);
    (s = _o.create(this, r, e)), (s.flags |= l);
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if ((f && (f = f.map(u.changes)), u.scrollIntoView)) {
          let { main: d } = u.state.selection;
          f = new Dn(
            d.empty ? d : v.cursor(d.head, d.head > d.anchor ? -1 : 1)
          );
        }
        for (let d of u.effects) d.is(Er) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f),
        (this.bidiCache = Eo.update(this.bidiCache, s.changes)),
        s.empty || (this.updatePlugins(s), this.inputState.update(s)),
        (t = this.docView.update(s)),
        this.state.facet(ms) != this.styleModules && this.mountStyles(),
        (n = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some((u) => u.isUserEvent("select.pointer"))
        );
    } finally {
      this.updateState = 0;
    }
    if (
      (s.startState.facet(Lr) != s.state.facet(Lr) &&
        (this.viewState.mustMeasureContent = !0),
      (t ||
        n ||
        f ||
        this.viewState.mustEnforceCursorAssoc ||
        this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      t && this.docViewUpdate(),
      !s.empty)
    )
      for (let u of this.state.facet(hh))
        try {
          u(s);
        } catch (d) {
          dt(this.state, d, "update listener");
        }
    (a || c) &&
      Promise.resolve().then(() => {
        a && this.state == a.startState && this.dispatch(a),
          c && !fg(this, c) && h.force && Xn(this.contentDOM, h.key, h.keyCode);
      });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        "Calls to EditorView.setState are not allowed while an update is in progress"
      );
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let n of this.plugins) n.destroy(this);
      (this.viewState = new mu(e)),
        (this.plugins = e.facet(gs).map((n) => new Hl(n))),
        this.pluginMap.clear();
      for (let n of this.plugins) n.update(this);
      this.docView.destroy(),
        (this.docView = new Jf(this)),
        this.inputState.ensureHandlers(this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = []);
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(gs),
      n = e.state.facet(gs);
    if (t != n) {
      let s = [];
      for (let r of n) {
        let o = t.indexOf(r);
        if (o < 0) s.push(new Hl(r));
        else {
          let l = this.plugins[o];
          (l.mustUpdate = e), s.push(l);
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
      (this.plugins = s), this.pluginMap.clear();
    } else for (let s of this.plugins) s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
    t != n && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (n) {
          dt(this.state, n, "doc view update listener");
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed) return;
    if (
      (this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      this.observer.delayedAndroidKey)
    ) {
      (this.measureScheduled = -1), this.requestMeasure();
      return;
    }
    (this.measureScheduled = 0), e && this.observer.forceFlush();
    let t = null,
      n = this.scrollDOM,
      s = n.scrollTop * this.scaleY,
      { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1),
      (this.viewState.scrollAnchorHeight = -1);
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (bO(n)) (r = -1), (o = this.viewState.heightMap.height);
          else {
            let d = this.viewState.scrollAnchorAt(s);
            (r = d.from), (o = d.top);
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (
          !a &&
          !this.measureRequests.length &&
          this.viewState.scrollTarget == null
        )
          break;
        if (l > 5) {
          console.warn(
            this.measureRequests.length
              ? "Measure loop restarted more than 5 times"
              : "Viewport failed to stabilize"
          );
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
            try {
              return d.read(this);
            } catch (p) {
              return dt(this.state, p), wu;
            }
          }),
          f = _o.create(this, this.state, []),
          u = !1;
        (f.flags |= a),
          t ? (t.flags |= a) : (t = f),
          (this.updateState = 2),
          f.empty ||
            (this.updatePlugins(f),
            this.inputState.update(f),
            this.updateAttrs(),
            (u = this.docView.update(f)),
            u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != wu)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              dt(this.state, p);
            }
        if (
          (u && this.docView.updateSelection(!0),
          !f.viewportChanged && this.measureRequests.length == 0)
        ) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget),
                (this.viewState.scrollTarget = null),
                (o = -1);
              continue;
            } else {
              let p =
                (r < 0
                  ? this.viewState.heightMap.height
                  : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                (s = s + p), (n.scrollTop = s / this.scaleY), (o = -1);
                continue;
              }
            }
          break;
        }
      }
    } finally {
      (this.updateState = 0), (this.measureScheduled = -1);
    }
    if (t && !t.empty) for (let l of this.state.facet(hh)) l(t);
  }
  get themeClasses() {
    return (
      ph + " " + (this.state.facet(dh) ? hg : ag) + " " + this.state.facet(Lr)
    );
  }
  updateAttrs() {
    let e = Qu(this, zO, {
        class:
          "cm-editor" +
          (this.hasFocus ? " cm-focused " : " ") +
          this.themeClasses,
      }),
      t = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        translate: "no",
        contenteditable: this.state.facet(Ai) ? "true" : "false",
        class: "cm-content",
        style: `${V.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true",
      };
    this.state.readOnly && (t["aria-readonly"] = "true"), Qu(this, Oc, t);
    let n = this.observer.ignore(() => {
      let s = sh(this.contentDOM, this.contentAttrs, t),
        r = sh(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return (this.editorAttrs = e), (this.contentAttrs = t), n;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let n of e)
      for (let s of n.effects)
        if (s.is(q.announce)) {
          t && (this.announceDOM.textContent = ""), (t = !1);
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ms);
    let e = this.state.facet(q.cspNonce);
    Vi.mount(
      this.root,
      this.styleModules.concat(Rx).reverse(),
      e ? { nonce: e } : void 0
    );
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error(
        "Reading the editor layout isn't allowed during an update"
      );
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() =>
          this.measure()
        )),
      e)
    ) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(
          e,
          (t = this.plugins.find((n) => n.spec == e) || null)
        ),
      t && t.update(this).value
    );
  }
  get documentTop() {
    return (
      this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    );
  }
  get documentPadding() {
    return {
      top: this.viewState.paddingTop,
      bottom: this.viewState.paddingBottom,
    };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, n) {
    return Jl(this, e, ru(this, e, t, n));
  }
  moveByGroup(e, t) {
    return Jl(
      this,
      e,
      ru(this, e, t, (n) => ex(this, e.head, n))
    );
  }
  visualLineSide(e, t) {
    let n = this.bidiSpans(e),
      s = this.textDirectionAt(e.from),
      r = n[t ? n.length - 1 : 0];
    return v.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, n = !0) {
    return Jy(this, e, t, n);
  }
  moveVertically(e, t, n) {
    return Jl(this, e, tx(this, e, t, n));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), HO(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let n = this.docView.coordsAt(e, t);
    if (!n || n.left == n.right) return n;
    let s = this.state.doc.lineAt(e),
      r = this.bidiSpans(s),
      o = r[Wi.find(r, e - s.from, -1, t)];
    return uc(n, (o.dir == Se.LTR) == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(LO) ||
      e < this.viewport.from ||
      e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Ux) return MO(e.length);
    let t = this.textDirectionAt(e.from),
      n;
    for (let r of this.bidiCache)
      if (
        r.from == e.from &&
        r.dir == t &&
        (r.fresh || AO(r.isolates, (n = Kf(this, e))))
      )
        return r.order;
    n || (n = Kf(this, e));
    let s = Xy(e.text, t, n);
    return this.bidiCache.push(new Eo(e.from, e.to, t, n, !0, s)), s;
  }
  get hasFocus() {
    var e;
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (V.safari &&
          ((e = this.inputState) === null || e === void 0
            ? void 0
            : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    );
  }
  focus() {
    this.observer.ignore(() => {
      gO(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow(
        (e.nodeType == 9 ? e : e.ownerDocument).defaultView || window
      ),
      this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    (this.plugins = []),
      this.inputState.destroy(),
      this.docView.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 &&
        this.win.cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0);
  }
  static scrollIntoView(e, t = {}) {
    return Er.of(
      new Dn(
        typeof e == "number" ? v.cursor(e) : e,
        t.y,
        t.x,
        t.yMargin,
        t.xMargin
      )
    );
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM,
      n = this.viewState.scrollAnchorAt(e);
    return Er.of(new Dn(v.cursor(n.from), "start", "start", n.top - e, t, !0));
  }
  setTabFocusMode(e) {
    e == null
      ? (this.inputState.tabFocusMode =
          this.inputState.tabFocusMode < 0 ? 0 : -1)
      : typeof e == "boolean"
      ? (this.inputState.tabFocusMode = e ? 0 : -1)
      : this.inputState.tabFocusMode != 0 &&
        (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return Me.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return Me.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let n = Vi.newName(),
      s = [Lr.of(n), ms.of(Oh(`.${n}`, e))];
    return t && t.dark && s.push(dh.of(!0)), s;
  }
  static baseTheme(e) {
    return Hi.lowest(ms.of(Oh("." + ph, e, cg)));
  }
  static findFromDOM(e) {
    var t;
    let n = e.querySelector(".cm-content"),
      s = (n && Oe.get(n)) || Oe.get(e);
    return (
      ((t = s == null ? void 0 : s.rootView) === null || t === void 0
        ? void 0
        : t.view) || null
    );
  }
}
q.styleModule = ms;
q.inputHandler = YO;
q.scrollHandler = VO;
q.focusChangeEffect = jO;
q.perLineTextDirection = LO;
q.exceptionSink = DO;
q.updateListener = hh;
q.editable = Ai;
q.mouseSelectionStyle = XO;
q.dragMovesSelection = WO;
q.clickAddsSelectionRange = EO;
q.decorations = Fs;
q.outerDecorations = IO;
q.atomicRanges = gc;
q.bidiIsolatedRanges = NO;
q.scrollMargins = BO;
q.darkTheme = dh;
q.cspNonce = z.define({ combine: (i) => (i.length ? i[0] : "") });
q.contentAttributes = Oc;
q.editorAttributes = zO;
q.lineWrapping = q.contentAttributes.of({ class: "cm-lineWrapping" });
q.announce = ee.define();
const Ux = 4096,
  wu = {};
class Eo {
  constructor(e, t, n, s, r, o) {
    (this.from = e),
      (this.to = t),
      (this.dir = n),
      (this.isolates = s),
      (this.fresh = r),
      (this.order = o);
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh)) return e;
    let n = [],
      s = e.length ? e[e.length - 1].dir : Se.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s &&
        !t.touchesRange(o.from, o.to) &&
        n.push(
          new Eo(
            t.mapPos(o.from, 1),
            t.mapPos(o.to, -1),
            o.dir,
            o.isolates,
            !1,
            o.order
          )
        );
    }
    return n;
  }
}
function Qu(i, e, t) {
  for (let n = i.state.facet(e), s = n.length - 1; s >= 0; s--) {
    let r = n[s],
      o = typeof r == "function" ? r(i) : r;
    o && nh(o, t);
  }
  return t;
}
const Vx = V.mac ? "mac" : V.windows ? "win" : V.linux ? "linux" : "key";
function qx(i, e) {
  const t = i.split(/-(?!$)/);
  let n = t[t.length - 1];
  n == "Space" && (n = " ");
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) l = !0;
    else if (/^a(lt)?$/i.test(h)) s = !0;
    else if (/^(c|ctrl|control)$/i.test(h)) r = !0;
    else if (/^s(hift)?$/i.test(h)) o = !0;
    else if (/^mod$/i.test(h)) e == "mac" ? (l = !0) : (r = !0);
    else throw new Error("Unrecognized modifier name: " + h);
  }
  return (
    s && (n = "Alt-" + n),
    r && (n = "Ctrl-" + n),
    l && (n = "Meta-" + n),
    o && (n = "Shift-" + n),
    n
  );
}
function Ur(i, e, t) {
  return (
    e.altKey && (i = "Alt-" + i),
    e.ctrlKey && (i = "Ctrl-" + i),
    e.metaKey && (i = "Meta-" + i),
    t !== !1 && e.shiftKey && (i = "Shift-" + i),
    i
  );
}
const zx = Hi.default(
    q.domEventHandlers({
      keydown(i, e) {
        return pg(dg(e.state), i, e, "editor");
      },
    })
  ),
  yc = z.define({ enables: zx }),
  Pu = new WeakMap();
function dg(i) {
  let e = i.facet(yc),
    t = Pu.get(e);
  return t || Pu.set(e, (t = Bx(e.reduce((n, s) => n.concat(s), [])))), t;
}
function Ix(i, e, t) {
  return pg(dg(i.state), e, i, t);
}
let Mi = null;
const Nx = 4e3;
function Bx(i, e = Vx) {
  let t = Object.create(null),
    n = Object.create(null),
    s = (o, l) => {
      let a = n[o];
      if (a == null) n[o] = l;
      else if (a != l)
        throw new Error(
          "Key binding " +
            o +
            " is used both as a regular binding and as a multi-stroke prefix"
        );
    },
    r = (o, l, a, h, c) => {
      var f, u;
      let d = t[o] || (t[o] = Object.create(null)),
        p = l.split(/ (?!$)/).map((b) => qx(b, e));
      for (let b = 1; b < p.length; b++) {
        let S = p.slice(0, b).join(" ");
        s(S, !0),
          d[S] ||
            (d[S] = {
              preventDefault: !0,
              stopPropagation: !1,
              run: [
                (P) => {
                  let x = (Mi = { view: P, prefix: S, scope: o });
                  return (
                    setTimeout(() => {
                      Mi == x && (Mi = null);
                    }, Nx),
                    !0
                  );
                },
              ],
            });
      }
      let O = p.join(" ");
      s(O, !1);
      let m =
        d[O] ||
        (d[O] = {
          preventDefault: !1,
          stopPropagation: !1,
          run:
            ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) ===
              null || u === void 0
              ? void 0
              : u.slice()) || [],
        });
      a && m.run.push(a),
        h && (m.preventDefault = !0),
        c && (m.stopPropagation = !0);
    };
  for (let o of i) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = Object.create(null));
        c._any ||
          (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c) c[u].run.push((d) => f(d, gh));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation),
          o.shift &&
            r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let gh = null;
function pg(i, e, t, n) {
  gh = e;
  let s = by(e),
    r = Ve(s, 0),
    o = $t(r) == s.length && s != " ",
    l = "",
    a = !1,
    h = !1,
    c = !1;
  Mi &&
    Mi.view == t &&
    Mi.scope == n &&
    ((l = Mi.prefix + " "),
    JO.indexOf(e.keyCode) < 0 && ((h = !0), (Mi = null)));
  let f = new Set(),
    u = (m) => {
      if (m) {
        for (let b of m.run)
          if (!f.has(b) && (f.add(b), b(t)))
            return m.stopPropagation && (c = !0), !0;
        m.preventDefault && (m.stopPropagation && (c = !0), (h = !0));
      }
      return !1;
    },
    d = i[n],
    p,
    O;
  return (
    d &&
      (u(d[l + Ur(s, e, !o)])
        ? (a = !0)
        : o &&
          (e.altKey || e.metaKey || e.ctrlKey) &&
          !(V.windows && e.ctrlKey && e.altKey) &&
          (p = qi[e.keyCode]) &&
          p != s
        ? (u(d[l + Ur(p, e, !0)]) ||
            (e.shiftKey &&
              (O = Ns[e.keyCode]) != s &&
              O != p &&
              u(d[l + Ur(O, e, !1)]))) &&
          (a = !0)
        : o && e.shiftKey && u(d[l + Ur(s, e, !0)]) && (a = !0),
      !a && u(d._any) && (a = !0)),
    h && (a = !0),
    a && c && e.stopPropagation(),
    (gh = null),
    a
  );
}
class br {
  constructor(e, t, n, s, r) {
    (this.className = e),
      (this.left = t),
      (this.top = n),
      (this.width = s),
      (this.height = r);
  }
  draw() {
    let e = document.createElement("div");
    return (e.className = this.className), this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    (e.style.left = this.left + "px"),
      (e.style.top = this.top + "px"),
      this.width != null && (e.style.width = this.width + "px"),
      (e.style.height = this.height + "px");
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    );
  }
  static forRange(e, t, n) {
    if (n.empty) {
      let s = e.coordsAtPos(n.head, n.assoc || 1);
      if (!s) return [];
      let r = Og(e);
      return [
        new br(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top),
      ];
    } else return Gx(e, t, n);
  }
}
function Og(i) {
  let e = i.scrollDOM.getBoundingClientRect();
  return {
    left:
      (i.textDirection == Se.LTR
        ? e.left
        : e.right - i.scrollDOM.clientWidth * i.scaleX) -
      i.scrollDOM.scrollLeft * i.scaleX,
    top: e.top - i.scrollDOM.scrollTop * i.scaleY,
  };
}
function ku(i, e, t, n) {
  let s = i.coordsAtPos(e, t * 2);
  if (!s) return n;
  let r = i.dom.getBoundingClientRect(),
    o = (s.top + s.bottom) / 2,
    l = i.posAtCoords({ x: r.left + 1, y: o }),
    a = i.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null
    ? n
    : {
        from: Math.max(n.from, Math.min(l, a)),
        to: Math.min(n.to, Math.max(l, a)),
      };
}
function Gx(i, e, t) {
  if (t.to <= i.viewport.from || t.from >= i.viewport.to) return [];
  let n = Math.max(t.from, i.viewport.from),
    s = Math.min(t.to, i.viewport.to),
    r = i.textDirection == Se.LTR,
    o = i.contentDOM,
    l = o.getBoundingClientRect(),
    a = Og(i),
    h = o.querySelector(".cm-line"),
    c = h && window.getComputedStyle(h),
    f =
      l.left +
      (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0),
    u = l.right - (c ? parseInt(c.paddingRight) : 0),
    d = fh(i, n),
    p = fh(i, s),
    O = d.type == at.Text ? d : null,
    m = p.type == at.Text ? p : null;
  if (
    (O && (i.lineWrapping || d.widgetLineBreaks) && (O = ku(i, n, 1, O)),
    m && (i.lineWrapping || p.widgetLineBreaks) && (m = ku(i, s, -1, m)),
    O && m && O.from == m.from && O.to == m.to)
  )
    return S(P(t.from, t.to, O));
  {
    let Q = O ? P(t.from, null, O) : x(d, !1),
      $ = m ? P(null, t.to, m) : x(p, !0),
      C = [];
    return (
      (O || d).to < (m || p).from - (O && m ? 1 : 0) ||
      (d.widgetLineBreaks > 1 && Q.bottom + i.defaultLineHeight / 2 < $.top)
        ? C.push(b(f, Q.bottom, u, $.top))
        : Q.bottom < $.top &&
          i.elementAtHeight((Q.bottom + $.top) / 2).type == at.Text &&
          (Q.bottom = $.top = (Q.bottom + $.top) / 2),
      S(Q).concat(C).concat(S($))
    );
  }
  function b(Q, $, C, j) {
    return new br(e, Q - a.left, $ - a.top - 0.01, C - Q, j - $ + 0.01);
  }
  function S({ top: Q, bottom: $, horizontal: C }) {
    let j = [];
    for (let _ = 0; _ < C.length; _ += 2) j.push(b(C[_], Q, C[_ + 1], $));
    return j;
  }
  function P(Q, $, C) {
    let j = 1e9,
      _ = -1e9,
      D = [];
    function U(H, re, oe, ie, te) {
      let Ce = i.coordsAtPos(H, H == C.to ? -2 : 2),
        Qe = i.coordsAtPos(oe, oe == C.from ? 2 : -2);
      !Ce ||
        !Qe ||
        ((j = Math.min(Ce.top, Qe.top, j)),
        (_ = Math.max(Ce.bottom, Qe.bottom, _)),
        te == Se.LTR
          ? D.push(r && re ? f : Ce.left, r && ie ? u : Qe.right)
          : D.push(!r && ie ? f : Qe.left, !r && re ? u : Ce.right));
    }
    let R = eval('Q ?? C.from'),
      B = eval('$ ?? C.to');
    for (let H of i.visibleRanges)
      if (H.to > R && H.from < B)
        for (let re = Math.max(H.from, R), oe = Math.min(H.to, B); ; ) {
          let ie = i.state.doc.lineAt(re);
          for (let te of i.bidiSpans(ie)) {
            let Ce = te.from + ie.from,
              Qe = te.to + ie.from;
            if (Ce >= oe) break;
            Qe > re &&
              U(
                Math.max(Ce, re),
                Q == null && Ce <= R,
                Math.min(Qe, oe),
                $ == null && Qe >= B,
                te.dir
              );
          }
          if (((re = ie.to + 1), re >= oe)) break;
        }
    return (
      D.length == 0 && U(R, Q == null, B, $ == null, i.textDirection),
      { top: j, bottom: _, horizontal: D }
    );
  }
  function x(Q, $) {
    let C = l.top + ($ ? Q.top : Q.bottom);
    return { top: C, bottom: C, horizontal: [] };
  }
}
function Fx(i, e) {
  return i.constructor == e.constructor && i.eq(e);
}
class Hx {
  constructor(e, t) {
    (this.view = e),
      (this.layer = t),
      (this.drawn = []),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.measureReq = {
        read: this.measure.bind(this),
        write: this.draw.bind(this),
      }),
      (this.dom = e.scrollDOM.appendChild(document.createElement("div"))),
      this.dom.classList.add("cm-layer"),
      t.above && this.dom.classList.add("cm-layer-above"),
      t.class && this.dom.classList.add(t.class),
      this.scale(),
      this.dom.setAttribute("aria-hidden", "true"),
      this.setOrder(e.state),
      e.requestMeasure(this.measureReq),
      t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(co) != e.state.facet(co) && this.setOrder(e.state),
      (this.layer.update(e, this.dom) || e.geometryChanged) &&
        (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 &&
      e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0,
      n = e.facet(co);
    for (; t < n.length && n[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) &&
      ((this.scaleX = e),
      (this.scaleY = t),
      (this.dom.style.transform = `scale(${1 / e}, ${1 / t})`));
  }
  draw(e) {
    if (
      e.length != this.drawn.length ||
      e.some((t, n) => !Fx(t, this.drawn[n]))
    ) {
      let t = this.dom.firstChild,
        n = 0;
      for (let s of e)
        s.update &&
        t &&
        s.constructor &&
        this.drawn[n].constructor &&
        s.update(t, this.drawn[n])
          ? ((t = t.nextSibling), n++)
          : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), (t = s);
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view),
      this.dom.remove();
  }
}
const co = z.define();
function gg(i) {
  return [Me.define((e) => new Hx(e, i)), co.of(i)];
}
const mg = !V.ios,
  Hs = z.define({
    combine(i) {
      return ri(
        i,
        { cursorBlinkRate: 1200, drawRangeCursor: !0 },
        {
          cursorBlinkRate: (e, t) => Math.min(e, t),
          drawRangeCursor: (e, t) => e || t,
        }
      );
    },
  });
function O$(i = {}) {
  return [Hs.of(i), Kx, Jx, eS, UO.of(!0)];
}
function bg(i) {
  return i.startState.facet(Hs) != i.state.facet(Hs);
}
const Kx = gg({
  above: !0,
  markers(i) {
    let { state: e } = i,
      t = e.facet(Hs),
      n = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty ? !r || mg : t.drawRangeCursor) {
        let o = r
            ? "cm-cursor cm-cursor-primary"
            : "cm-cursor cm-cursor-secondary",
          l = s.empty ? s : v.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of br.forRange(i, o, l)) n.push(a);
      }
    }
    return n;
  },
  update(i, e) {
    i.transactions.some((n) => n.selection) &&
      (e.style.animationName =
        e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = bg(i);
    return t && vu(i.state, e), i.docChanged || i.selectionSet || t;
  },
  mount(i, e) {
    vu(e.state, i);
  },
  class: "cm-cursorLayer",
});
function vu(i, e) {
  e.style.animationDuration = i.facet(Hs).cursorBlinkRate + "ms";
}
const Jx = gg({
    above: !1,
    markers(i) {
      return i.state.selection.ranges
        .map((e) =>
          e.empty ? [] : br.forRange(i, "cm-selectionBackground", e)
        )
        .reduce((e, t) => e.concat(t));
    },
    update(i, e) {
      return i.docChanged || i.selectionSet || i.viewportChanged || bg(i);
    },
    class: "cm-selectionLayer",
  }),
  mh = {
    ".cm-line": {
      "& ::selection, &::selection": {
        backgroundColor: "transparent !important",
      },
    },
    ".cm-content": {
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": {
          backgroundColor: "Highlight !important",
        },
      },
    },
  };
mg &&
  (mh[".cm-line"].caretColor = mh[".cm-content"].caretColor =
    "transparent !important");
const eS = Hi.highest(q.theme(mh)),
  yg = ee.define({
    map(i, e) {
      return i == null ? null : e.mapPos(i);
    },
  }),
  xs = Le.define({
    create() {
      return null;
    },
    update(i, e) {
      return (
        i != null && (i = e.changes.mapPos(i)),
        e.effects.reduce((t, n) => (n.is(yg) ? n.value : t), i)
      );
    },
  }),
  tS = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i),
          (this.cursor = null),
          (this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this),
          });
      }
      update(i) {
        var e;
        let t = i.state.field(xs);
        t == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(),
            (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(
                document.createElement("div")
              )),
              (this.cursor.className = "cm-dropCursor")),
            (i.startState.field(xs) != t ||
              i.docChanged ||
              i.geometryChanged) &&
              this.view.requestMeasure(this.measureReq));
      }
      readPos() {
        let { view: i } = this,
          e = i.state.field(xs),
          t = e != null && i.coordsAtPos(e);
        if (!t) return null;
        let n = i.scrollDOM.getBoundingClientRect();
        return {
          left: t.left - n.left + i.scrollDOM.scrollLeft * i.scaleX,
          top: t.top - n.top + i.scrollDOM.scrollTop * i.scaleY,
          height: t.bottom - t.top,
        };
      }
      drawCursor(i) {
        if (this.cursor) {
          let { scaleX: e, scaleY: t } = this.view;
          i
            ? ((this.cursor.style.left = i.left / e + "px"),
              (this.cursor.style.top = i.top / t + "px"),
              (this.cursor.style.height = i.height / t + "px"))
            : (this.cursor.style.left = "-100000px");
        }
      }
      destroy() {
        this.cursor && this.cursor.remove();
      }
      setDropPos(i) {
        this.view.state.field(xs) != i &&
          this.view.dispatch({ effects: yg.of(i) });
      }
    },
    {
      eventObservers: {
        dragover(i) {
          this.setDropPos(
            this.view.posAtCoords({ x: i.clientX, y: i.clientY })
          );
        },
        dragleave(i) {
          (i.target == this.view.contentDOM ||
            !this.view.contentDOM.contains(i.relatedTarget)) &&
            this.setDropPos(null);
        },
        dragend() {
          this.setDropPos(null);
        },
        drop() {
          this.setDropPos(null);
        },
      },
    }
  );
function g$() {
  return [xs, tS];
}
function $u(i, e, t, n, s) {
  e.lastIndex = 0;
  for (let r = i.iterRange(t, n), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak) for (; (l = e.exec(r.value)); ) s(o + l.index, l);
}
function iS(i, e) {
  let t = i.visibleRanges;
  if (t.length == 1 && t[0].from == i.viewport.from && t[0].to == i.viewport.to)
    return t;
  let n = [];
  for (let { from: s, to: r } of t)
    (s = Math.max(i.state.doc.lineAt(s).from, s - e)),
      (r = Math.min(i.state.doc.lineAt(r).to, r + e)),
      n.length && n[n.length - 1].to >= s
        ? (n[n.length - 1].to = r)
        : n.push({ from: s, to: r });
  return n;
}
class nS {
  constructor(e) {
    const {
      regexp: t,
      decoration: n,
      decorate: s,
      boundary: r,
      maxLength: o = 1e3,
    } = e;
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set"
      );
    if (((this.regexp = t), s))
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof n == "function")
      this.addMatch = (l, a, h, c) => {
        let f = n(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (n) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, n);
    else
      throw new RangeError(
        "Either 'decorate' or 'decoration' should be provided to MatchDecorator"
      );
    (this.boundary = r), (this.maxLength = o);
  }
  createDeco(e) {
    let t = new Ui(),
      n = t.add.bind(t);
    for (let { from: s, to: r } of iS(e, this.maxLength))
      $u(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, n));
    return t.finish();
  }
  updateDeco(e, t) {
    let n = 1e9,
      s = -1;
    return (
      e.docChanged &&
        e.changes.iterChanges((r, o, l, a) => {
          a > e.view.viewport.from &&
            l < e.view.viewport.to &&
            ((n = Math.min(l, n)), (s = Math.max(a, s)));
        }),
      e.viewportChanged || s - n > 1e3
        ? this.createDeco(e.view)
        : s > -1
        ? this.updateRange(e.view, t.map(e.changes), n, s)
        : t
    );
  }
  updateRange(e, t, n, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, n),
        l = Math.min(r.to, s);
      if (l > o) {
        let a = e.state.doc.lineAt(o),
          h = a.to < l ? e.state.doc.lineAt(l) : a,
          c = Math.max(r.from, a.from),
          f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [],
          d,
          p = (O, m, b) => u.push(b.range(O, m));
        if (a == h)
          for (
            this.regexp.lastIndex = c - a.from;
            (d = this.regexp.exec(a.text)) && d.index < f - a.from;

          )
            this.addMatch(d, e, d.index + a.from, p);
        else
          $u(e.state.doc, this.regexp, c, f, (O, m) =>
            this.addMatch(m, e, O, p)
          );
        t = t.update({
          filterFrom: c,
          filterTo: f,
          filter: (O, m) => O < c || m > f,
          add: u,
        });
      }
    }
    return t;
  }
}
const bh = /x/.unicode != null ? "gu" : "g",
  sS = new RegExp(
    "\n".join([`[\0-\b`, `--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`]),
    bh
  ),
  rS = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement",
  };
let ia = null;
function oS() {
  var i;
  if (ia == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    ia = ((i = e.tabSize) !== null && i !== void 0 ? i : e.MozTabSize) != null;
  }
  return ia || !1;
}
const fo = z.define({
  combine(i) {
    let e = ri(i, { render: null, specialChars: sS, addSpecialChars: null });
    return (
      (e.replaceTabs = !oS()) &&
        (e.specialChars = new RegExp("	|" + e.specialChars.source, bh)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(
          e.specialChars.source + "|" + e.addSpecialChars.source,
          bh
        )),
      e
    );
  },
});
function m$(i = {}) {
  return [fo.of(i), lS()];
}
let Cu = null;
function lS() {
  return (
    Cu ||
    (Cu = Me.fromClass(
      class {
        constructor(i) {
          (this.view = i),
            (this.decorations = N.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(i.state.facet(fo))),
            (this.decorations = this.decorator.createDeco(i));
        }
        makeDecorator(i) {
          return new nS({
            regexp: i.specialChars,
            decoration: (e, t, n) => {
              let { doc: s } = t.state,
                r = Ve(e[0], 0);
              if (r == 9) {
                let o = s.lineAt(n),
                  l = t.state.tabSize,
                  a = Kn(o.text, l, n - o.from);
                return N.replace({
                  widget: new fS(
                    ((l - (a % l)) * this.view.defaultCharacterWidth) /
                      this.view.scaleX
                  ),
                });
              }
              return (
                this.decorationCache[r] ||
                (this.decorationCache[r] = N.replace({ widget: new cS(i, r) }))
              );
            },
            boundary: i.replaceTabs ? void 0 : /[^]/,
          });
        }
        update(i) {
          let e = i.state.facet(fo);
          i.startState.facet(fo) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(i.view)))
            : (this.decorations = this.decorator.updateDeco(
                i,
                this.decorations
              ));
        }
      },
      { decorations: (i) => i.decorations }
    ))
  );
}
const aS = "•";
function hS(i) {
  return i >= 32 ? aS : i == 10 ? "␤" : String.fromCharCode(9216 + i);
}
class cS extends xi {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t);
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = hS(this.code),
      n =
        e.state.phrase("Control character") +
        " " +
        (rS[this.code] || "0x" + this.code.toString(16)),
      s = this.options.render && this.options.render(this.code, n, t);
    if (s) return s;
    let r = document.createElement("span");
    return (
      (r.textContent = t),
      (r.title = n),
      r.setAttribute("aria-label", n),
      (r.className = "cm-specialChar"),
      r
    );
  }
  ignoreEvent() {
    return !1;
  }
}
class fS extends xi {
  constructor(e) {
    super(), (this.width = e);
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return (
      (e.textContent = "	"),
      (e.className = "cm-tab"),
      (e.style.width = this.width + "px"),
      e
    );
  }
  ignoreEvent() {
    return !1;
  }
}
function b$() {
  return dS;
}
const uS = N.line({ class: "cm-activeLine" }),
  dS = Me.fromClass(
    class {
      constructor(i) {
        this.decorations = this.getDeco(i);
      }
      update(i) {
        (i.docChanged || i.selectionSet) &&
          (this.decorations = this.getDeco(i.view));
      }
      getDeco(i) {
        let e = -1,
          t = [];
        for (let n of i.state.selection.ranges) {
          let s = i.lineBlockAt(n.head);
          s.from > e && (t.push(uS.range(s.from)), (e = s.from));
        }
        return N.set(t);
      }
    },
    { decorations: (i) => i.decorations }
  ),
  yh = 2e3;
function pS(i, e, t) {
  let n = Math.min(e.line, t.line),
    s = Math.max(e.line, t.line),
    r = [];
  if (e.off > yh || t.off > yh || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off),
      l = Math.max(e.off, t.off);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a);
      h.length <= l && r.push(v.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col),
      l = Math.max(e.col, t.col);
    for (let a = n; a <= s; a++) {
      let h = i.doc.line(a),
        c = Fa(h.text, o, i.tabSize, !0);
      if (c < 0) r.push(v.cursor(h.to));
      else {
        let f = Fa(h.text, l, i.tabSize);
        r.push(v.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function OS(i, e) {
  let t = i.coordsAtPos(i.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / i.defaultCharacterWidth)) : -1;
}
function Zu(i, e) {
  let t = i.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    n = i.state.doc.lineAt(t),
    s = t - n.from,
    r =
      s > yh
        ? -1
        : s == n.length
        ? OS(i, e.clientX)
        : Kn(n.text, i.state.tabSize, t - n.from);
  return { line: n.number, col: r, off: s };
}
function gS(i, e) {
  let t = Zu(i, e),
    n = i.state.selection;
  return t
    ? {
        update(s) {
          if (s.docChanged) {
            let r = s.changes.mapPos(s.startState.doc.line(t.line).from),
              o = s.state.doc.lineAt(r);
            (t = {
              line: o.number,
              col: t.col,
              off: Math.min(t.off, o.length),
            }),
              (n = n.map(s.changes));
          }
        },
        get(s, r, o) {
          let l = Zu(i, s);
          if (!l) return n;
          let a = pS(i.state, t, l);
          return a.length
            ? o
              ? v.create(a.concat(n.ranges))
              : v.create(a)
            : n;
        },
      }
    : null;
}
function y$(i) {
  let e = (t) => t.altKey && t.button == 0;
  return q.mouseSelectionStyle.of((t, n) => (e(n) ? gS(t, n) : null));
}
const mS = {
    Alt: [18, (i) => !!i.altKey],
    Control: [17, (i) => !!i.ctrlKey],
    Shift: [16, (i) => !!i.shiftKey],
    Meta: [91, (i) => !!i.metaKey],
  },
  bS = { style: "cursor: crosshair" };
function x$(i = {}) {
  let [e, t] = mS[i.key || "Alt"],
    n = Me.fromClass(
      class {
        constructor(s) {
          (this.view = s), (this.isDown = !1);
        }
        set(s) {
          this.isDown != s && ((this.isDown = s), this.view.update([]));
        }
      },
      {
        eventObservers: {
          keydown(s) {
            this.set(s.keyCode == e || t(s));
          },
          keyup(s) {
            (s.keyCode == e || !t(s)) && this.set(!1);
          },
          mousemove(s) {
            this.set(t(s));
          },
        },
      }
    );
  return [
    n,
    q.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(n)) === null || r === void 0) && r.isDown
        ? bS
        : null;
    }),
  ];
}
const hs = "-10000px";
class xg {
  constructor(e, t, n, s) {
    (this.facet = t),
      (this.createTooltipView = n),
      (this.removeTooltipView = s),
      (this.input = e.state.facet(t)),
      (this.tooltips = this.input.filter((o) => o));
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => (r = n(o, r)));
  }
  update(e, t) {
    var n;
    let s = e.state.facet(this.facet),
      r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return !1;
    }
    let o = [],
      l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a],
        c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          (o[a] = this.createTooltipView(h, a ? o[a - 1] : null)),
            l && (l[a] = !!h.above);
        else {
          let f = (o[a] = this.tooltipViews[c]);
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 &&
        (this.removeTooltipView(a),
        (n = a.destroy) === null || n === void 0 || n.call(a));
    return (
      t && (l.forEach((a, h) => (t[h] = a)), (t.length = l.length)),
      (this.input = s),
      (this.tooltips = r),
      (this.tooltipViews = o),
      !0
    );
  }
}
function yS(i) {
  let { win: e } = i;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const na = z.define({
    combine: (i) => {
      var e, t, n;
      return {
        position: V.ios
          ? "absolute"
          : ((e = i.find((s) => s.position)) === null || e === void 0
              ? void 0
              : e.position) || "fixed",
        parent:
          ((t = i.find((s) => s.parent)) === null || t === void 0
            ? void 0
            : t.parent) || null,
        tooltipSpace:
          ((n = i.find((s) => s.tooltipSpace)) === null || n === void 0
            ? void 0
            : n.tooltipSpace) || yS,
      };
    },
  }),
  Ru = new WeakMap(),
  xc = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i),
          (this.above = []),
          (this.inView = !0),
          (this.madeAbsolute = !1),
          (this.lastTransaction = 0),
          (this.measureTimeout = -1);
        let e = i.state.facet(na);
        (this.position = e.position),
          (this.parent = e.parent),
          (this.classes = i.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this,
          }),
          (this.resizeObserver =
            typeof ResizeObserver == "function"
              ? new ResizeObserver(() => this.measureSoon())
              : null),
          (this.manager = new xg(
            i,
            Sc,
            (t, n) => this.createTooltip(t, n),
            (t) => {
              this.resizeObserver && this.resizeObserver.unobserve(t.dom),
                t.dom.remove();
            }
          )),
          (this.above = this.manager.tooltips.map((t) => !!t.above)),
          (this.intersectionObserver =
            typeof IntersectionObserver == "function"
              ? new IntersectionObserver(
                  (t) => {
                    Date.now() > this.lastTransaction - 50 &&
                      t.length > 0 &&
                      t[t.length - 1].intersectionRatio < 1 &&
                      this.measureSoon();
                  },
                  { threshold: [1] }
                )
              : null),
          this.observeIntersection(),
          i.win.addEventListener(
            "resize",
            (this.measureSoon = this.measureSoon.bind(this))
          ),
          this.maybeMeasure();
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement("div")),
            (this.container.style.position = "relative"),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom);
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          for (let i of this.manager.tooltipViews)
            this.intersectionObserver.observe(i.dom);
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            (this.measureTimeout = -1), this.maybeMeasure();
          }, 50));
      }
      update(i) {
        i.transactions.length && (this.lastTransaction = Date.now());
        let e = this.manager.update(i, this.above);
        e && this.observeIntersection();
        let t = e || i.geometryChanged,
          n = i.state.facet(na);
        if (n.position != this.position && !this.madeAbsolute) {
          this.position = n.position;
          for (let s of this.manager.tooltipViews)
            s.dom.style.position = this.position;
          t = !0;
        }
        if (n.parent != this.parent) {
          this.parent && this.container.remove(),
            (this.parent = n.parent),
            this.createContainer();
          for (let s of this.manager.tooltipViews)
            this.container.appendChild(s.dom);
          t = !0;
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses);
        t && this.maybeMeasure();
      }
      createTooltip(i, e) {
        let t = i.create(this.view),
          n = e ? e.dom : null;
        if (
          (t.dom.classList.add("cm-tooltip"),
          i.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow"))
        ) {
          let s = document.createElement("div");
          (s.className = "cm-tooltip-arrow"), t.dom.appendChild(s);
        }
        return (
          (t.dom.style.position = this.position),
          (t.dom.style.top = hs),
          (t.dom.style.left = "0px"),
          this.container.insertBefore(t.dom, n),
          t.mount && t.mount(this.view),
          this.resizeObserver && this.resizeObserver.observe(t.dom),
          t
        );
      }
      destroy() {
        var i, e, t;
        this.view.win.removeEventListener("resize", this.measureSoon);
        for (let n of this.manager.tooltipViews)
          n.dom.remove(), (i = n.destroy) === null || i === void 0 || i.call(n);
        this.parent && this.container.remove(),
          (e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
          (t = this.intersectionObserver) === null ||
            t === void 0 ||
            t.disconnect(),
          clearTimeout(this.measureTimeout);
      }
      readMeasure() {
        let i = this.view.dom.getBoundingClientRect(),
          e = 1,
          t = 1,
          n = !1;
        if (this.position == "fixed" && this.manager.tooltipViews.length) {
          let { dom: s } = this.manager.tooltipViews[0];
          if (V.gecko) n = s.offsetParent != this.container.ownerDocument.body;
          else if (s.style.top == hs && s.style.left == "0px") {
            let r = s.getBoundingClientRect();
            n = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
          }
        }
        if (n || this.position == "absolute")
          if (this.parent) {
            let s = this.parent.getBoundingClientRect();
            s.width &&
              s.height &&
              ((e = s.width / this.parent.offsetWidth),
              (t = s.height / this.parent.offsetHeight));
          } else ({ scaleX: e, scaleY: t } = this.view.viewState);
        return {
          editor: i,
          parent: this.parent ? this.container.getBoundingClientRect() : i,
          pos: this.manager.tooltips.map((s, r) => {
            let o = this.manager.tooltipViews[r];
            return o.getCoords
              ? o.getCoords(s.pos)
              : this.view.coordsAtPos(s.pos);
          }),
          size: this.manager.tooltipViews.map(({ dom: s }) =>
            s.getBoundingClientRect()
          ),
          space: this.view.state.facet(na).tooltipSpace(this.view),
          scaleX: e,
          scaleY: t,
          makeAbsolute: n,
        };
      }
      writeMeasure(i) {
        var e;
        if (i.makeAbsolute) {
          (this.madeAbsolute = !0), (this.position = "absolute");
          for (let l of this.manager.tooltipViews)
            l.dom.style.position = "absolute";
        }
        let { editor: t, space: n, scaleX: s, scaleY: r } = i,
          o = [];
        for (let l = 0; l < this.manager.tooltips.length; l++) {
          let a = this.manager.tooltips[l],
            h = this.manager.tooltipViews[l],
            { dom: c } = h,
            f = i.pos[l],
            u = i.size[l];
          if (
            !f ||
            f.bottom <= Math.max(t.top, n.top) ||
            f.top >= Math.min(t.bottom, n.bottom) ||
            f.right < Math.max(t.left, n.left) - 0.1 ||
            f.left > Math.min(t.right, n.right) + 0.1
          ) {
            c.style.top = hs;
            continue;
          }
          let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null,
            p = d ? 7 : 0,
            O = u.right - u.left,
            m = (e = Ru.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top,
            b = h.offset || SS,
            S = this.view.textDirection == Se.LTR,
            P =
              u.width > n.right - n.left
                ? S
                  ? n.left
                  : n.right - u.width
                : S
                ? Math.min(f.left - (d ? 14 : 0) + b.x, n.right - O)
                : Math.max(n.left, f.left - O + (d ? 14 : 0) - b.x),
            x = this.above[l];
          !a.strictSide &&
            (x
              ? f.top - (u.bottom - u.top) - b.y < n.top
              : f.bottom + (u.bottom - u.top) + b.y > n.bottom) &&
            x == n.bottom - f.bottom > f.top - n.top &&
            (x = this.above[l] = !x);
          let Q = (x ? f.top - n.top : n.bottom - f.bottom) - p;
          if (Q < m && h.resize !== !1) {
            if (Q < this.view.defaultLineHeight) {
              c.style.top = hs;
              continue;
            }
            Ru.set(h, m), (c.style.height = (m = Q) / r + "px");
          } else c.style.height && (c.style.height = "");
          let $ = x ? f.top - m - p - b.y : f.bottom + p + b.y,
            C = P + O;
          if (h.overlap !== !0)
            for (let j of o)
              j.left < C &&
                j.right > P &&
                j.top < $ + m &&
                j.bottom > $ &&
                ($ = x ? j.top - m - 2 - p : j.bottom + p + 2);
          if (
            (this.position == "absolute"
              ? ((c.style.top = ($ - i.parent.top) / r + "px"),
                (c.style.left = (P - i.parent.left) / s + "px"))
              : ((c.style.top = $ / r + "px"), (c.style.left = P / s + "px")),
            d)
          ) {
            let j = f.left + (S ? b.x : -b.x) - (P + 14 - 7);
            d.style.left = j / s + "px";
          }
          h.overlap !== !0 &&
            o.push({ left: P, top: $, right: C, bottom: $ + m }),
            c.classList.toggle("cm-tooltip-above", x),
            c.classList.toggle("cm-tooltip-below", !x),
            h.positioned && h.positioned(i.space);
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView &&
            ((this.inView = this.view.inView), !this.inView))
        )
          for (let i of this.manager.tooltipViews) i.dom.style.top = hs;
      }
    },
    {
      eventObservers: {
        scroll() {
          this.maybeMeasure();
        },
      },
    }
  ),
  xS = q.baseTheme({
    ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" },
    "&light .cm-tooltip": {
      border: "1px solid #bbb",
      backgroundColor: "#f5f5f5",
    },
    "&light .cm-tooltip-section:not(:first-child)": {
      borderTop: "1px solid #bbb",
    },
    "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: `${7 * 2}px`,
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": { borderTop: "7px solid #bbb" },
        "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" },
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": { borderBottom: "7px solid #bbb" },
        "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" },
      },
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" },
      "&:after": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      },
    },
  }),
  SS = { x: 0, y: 0 },
  Sc = z.define({ enables: [xc, xS] }),
  Wo = z.define({ combine: (i) => i.reduce((e, t) => e.concat(t), []) });
class wl {
  static create(e) {
    return new wl(e);
  }
  constructor(e) {
    (this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement("div")),
      this.dom.classList.add("cm-tooltip-hover"),
      (this.manager = new xg(
        e,
        Wo,
        (t, n) => this.createHostedView(t, n),
        (t) => t.dom.remove()
      ));
  }
  createHostedView(e, t) {
    let n = e.create(this.view);
    return (
      n.dom.classList.add("cm-tooltip-section"),
      this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild),
      this.mounted && n.mount && n.mount(this.view),
      n
    );
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let n of this.manager.tooltipViews) {
      let s = n[e];
      if (s !== void 0) {
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const wS = Sc.compute([Wo], (i) => {
  let e = i.facet(Wo);
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map((t) => t.pos)),
        end: Math.max(
          ...e.map((t) => {
            var n;
            return (n = t.end) !== null && n !== void 0 ? n : t.pos;
          })
        ),
        create: wl.create,
        above: e[0].above,
        arrow: e.some((t) => t.arrow),
      };
});
class QS {
  constructor(e, t, n, s, r) {
    (this.view = e),
      (this.source = t),
      (this.field = n),
      (this.setHover = s),
      (this.hoverTime = r),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener(
        "mouseleave",
        (this.mouseleave = this.mouseleave.bind(this))
      ),
      e.dom.addEventListener(
        "mousemove",
        (this.mousemove = this.mousemove.bind(this))
      );
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active.length)) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this,
      n = e.docView.nearest(t.target);
    if (!n) return;
    let s,
      r = 1;
    if (n instanceof Ei) s = n.posAtStart;
    else {
      if (((s = e.posAtCoords(t)), s == null)) return;
      let l = e.coordsAtPos(s);
      if (
        !l ||
        t.y < l.top ||
        t.y > l.bottom ||
        t.x < l.left - e.defaultCharacterWidth ||
        t.x > l.right + e.defaultCharacterWidth
      )
        return;
      let a = e
          .bidiSpans(e.state.doc.lineAt(s))
          .find((c) => c.from <= s && c.to >= s),
        h = a && a.dir == Se.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = (this.pending = { pos: s });
      o.then(
        (a) => {
          this.pending == l &&
            ((this.pending = null),
            a &&
              !(Array.isArray(a) && !a.length) &&
              e.dispatch({
                effects: this.setHover.of(Array.isArray(a) ? a : [a]),
              }));
        },
        (a) => dt(e.state, a, "hover tooltip")
      );
    } else
      o &&
        !(Array.isArray(o) && !o.length) &&
        e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(xc),
      t = e ? e.manager.tooltips.findIndex((n) => n.create == wl.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, n;
    (this.lastMove = {
      x: e.clientX,
      y: e.clientY,
      target: e.target,
      time: Date.now(),
    }),
      this.hoverTimeout < 0 &&
        (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if ((s.length && r && !PS(r.dom, e)) || this.pending) {
      let { pos: o } = s[0] || this.pending,
        l =
          (n = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null &&
          n !== void 0
            ? n
            : o;
      (o == l
        ? this.view.posAtCoords(this.lastMove) != o
        : !kS(this.view, o, l, e.clientX, e.clientY)) &&
        (this.view.dispatch({ effects: this.setHover.of([]) }),
        (this.pending = null));
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), (this.hoverTimeout = -1);
    let { active: t } = this;
    if (t.length) {
      let { tooltip: n } = this;
      n && n.dom.contains(e.relatedTarget)
        ? this.watchTooltipLeave(n.dom)
        : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (n) => {
      e.removeEventListener("mouseleave", t),
        this.active.length &&
          !this.view.dom.contains(n.relatedTarget) &&
          this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener("mouseleave", this.mouseleave),
      this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Vr = 4;
function PS(i, e) {
  let t = i.getBoundingClientRect();
  return (
    e.clientX >= t.left - Vr &&
    e.clientX <= t.right + Vr &&
    e.clientY >= t.top - Vr &&
    e.clientY <= t.bottom + Vr
  );
}
function kS(i, e, t, n, s, r) {
  let o = i.scrollDOM.getBoundingClientRect(),
    l = i.documentTop + i.documentPadding.top + i.contentHeight;
  if (o.left > n || o.right < n || o.top > s || Math.min(o.bottom, l) < s)
    return !1;
  let a = i.posAtCoords({ x: n, y: s }, !1);
  return a >= e && a <= t;
}
function vS(i, e = {}) {
  let t = ee.define(),
    n = Le.define({
      create() {
        return [];
      },
      update(s, r) {
        if (
          s.length &&
          (e.hideOnChange && (r.docChanged || r.selection)
            ? (s = [])
            : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))),
          r.docChanged)
        ) {
          let o = [];
          for (let l of s) {
            let a = r.changes.mapPos(l.pos, -1, Ie.TrackDel);
            if (a != null) {
              let h = Object.assign(Object.create(null), l);
              (h.pos = a),
                h.end != null && (h.end = r.changes.mapPos(h.end)),
                o.push(h);
            }
          }
          s = o;
        }
        for (let o of r.effects) o.is(t) && (s = o.value), o.is($S) && (s = []);
        return s;
      },
      provide: (s) => Wo.from(s),
    });
  return [n, Me.define((s) => new QS(s, i, n, t, e.hoverTime || 300)), wS];
}
function Sg(i, e) {
  let t = i.plugin(xc);
  if (!t) return null;
  let n = t.manager.tooltips.indexOf(e);
  return n < 0 ? null : t.manager.tooltipViews[n];
}
const $S = ee.define(),
  Tu = z.define({
    combine(i) {
      let e, t;
      for (let n of i) (e = e || n.topContainer), (t = t || n.bottomContainer);
      return { topContainer: e, bottomContainer: t };
    },
  });
function Ks(i, e) {
  let t = i.plugin(wg),
    n = t ? t.specs.indexOf(e) : -1;
  return n > -1 ? t.panels[n] : null;
}
const wg = Me.fromClass(
  class {
    constructor(i) {
      (this.input = i.state.facet(Js)),
        (this.specs = this.input.filter((t) => t)),
        (this.panels = this.specs.map((t) => t(i)));
      let e = i.state.facet(Tu);
      (this.top = new qr(i, !0, e.topContainer)),
        (this.bottom = new qr(i, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter((t) => t.top)),
        this.bottom.sync(this.panels.filter((t) => !t.top));
      for (let t of this.panels)
        t.dom.classList.add("cm-panel"), t.mount && t.mount();
    }
    update(i) {
      let e = i.state.facet(Tu);
      this.top.container != e.topContainer &&
        (this.top.sync([]), (this.top = new qr(i.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]),
          (this.bottom = new qr(i.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses();
      let t = i.state.facet(Js);
      if (t != this.input) {
        let n = t.filter((a) => a),
          s = [],
          r = [],
          o = [],
          l = [];
        for (let a of n) {
          let h = this.specs.indexOf(a),
            c;
          h < 0
            ? ((c = a(i.view)), l.push(c))
            : ((c = this.panels[h]), c.update && c.update(i)),
            s.push(c),
            (c.top ? r : o).push(c);
        }
        (this.specs = n),
          (this.panels = s),
          this.top.sync(r),
          this.bottom.sync(o);
        for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
      } else for (let n of this.panels) n.update && n.update(i);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  },
  {
    provide: (i) =>
      q.scrollMargins.of((e) => {
        let t = e.plugin(i);
        return (
          t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() }
        );
      }),
  }
);
class qr {
  constructor(e, t, n) {
    (this.view = e),
      (this.top = t),
      (this.container = n),
      (this.dom = void 0),
      (this.classes = ""),
      (this.panels = []),
      this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    (this.panels = e), this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0));
      return;
    }
    if (!this.dom) {
      (this.dom = document.createElement("div")),
        (this.dom.className = this.top
          ? "cm-panels cm-panels-top"
          : "cm-panels cm-panels-bottom"),
        (this.dom.style[this.top ? "top" : "bottom"] = "0");
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; ) e = Au(e);
        e = e.nextSibling;
      } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = Au(e);
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(
                innerHeight,
                this.view.scrollDOM.getBoundingClientRect().bottom
              ) - this.dom.getBoundingClientRect().top
        );
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function Au(i) {
  let e = i.nextSibling;
  return i.remove(), e;
}
const Js = z.define({ enables: wg });
class gi extends On {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
gi.prototype.elementClass = "";
gi.prototype.toDOM = void 0;
gi.prototype.mapMode = Ie.TrackBefore;
gi.prototype.startSide = gi.prototype.endSide = -1;
gi.prototype.point = !0;
const uo = z.define(),
  CS = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: () => ae.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
  },
  Es = z.define();
function ZS(i) {
  return [Qg(), Es.of(Object.assign(Object.assign({}, CS), i))];
}
const Mu = z.define({ combine: (i) => i.some((e) => e) });
function Qg(i) {
  return [RS];
}
const RS = Me.fromClass(
  class {
    constructor(i) {
      (this.view = i),
        (this.prevViewport = i.viewport),
        (this.dom = document.createElement("div")),
        (this.dom.className = "cm-gutters"),
        this.dom.setAttribute("aria-hidden", "true"),
        (this.dom.style.minHeight =
          this.view.contentHeight / this.view.scaleY + "px"),
        (this.gutters = i.state.facet(Es).map((e) => new Eu(i, e)));
      for (let e of this.gutters) this.dom.appendChild(e.dom);
      (this.fixed = !i.state.facet(Mu)),
        this.fixed && (this.dom.style.position = "sticky"),
        this.syncGutters(!1),
        i.scrollDOM.insertBefore(this.dom, i.contentDOM);
    }
    update(i) {
      if (this.updateGutters(i)) {
        let e = this.prevViewport,
          t = i.view.viewport,
          n = Math.min(e.to, t.to) - Math.max(e.from, t.from);
        this.syncGutters(n < (t.to - t.from) * 0.8);
      }
      i.geometryChanged &&
        (this.dom.style.minHeight =
          this.view.contentHeight / this.view.scaleY + "px"),
        this.view.state.facet(Mu) != !this.fixed &&
          ((this.fixed = !this.fixed),
          (this.dom.style.position = this.fixed ? "sticky" : "")),
        (this.prevViewport = i.view.viewport);
    }
    syncGutters(i) {
      let e = this.dom.nextSibling;
      i && this.dom.remove();
      let t = ae.iter(this.view.state.facet(uo), this.view.viewport.from),
        n = [],
        s = this.gutters.map(
          (r) => new TS(r, this.view.viewport, -this.view.documentPadding.top)
        );
      for (let r of this.view.viewportLineBlocks)
        if ((n.length && (n = []), Array.isArray(r.type))) {
          let o = !0;
          for (let l of r.type)
            if (l.type == at.Text && o) {
              xh(t, n, l.from);
              for (let a of s) a.line(this.view, l, n);
              o = !1;
            } else if (l.widget) for (let a of s) a.widget(this.view, l);
        } else if (r.type == at.Text) {
          xh(t, n, r.from);
          for (let o of s) o.line(this.view, r, n);
        } else if (r.widget) for (let o of s) o.widget(this.view, r);
      for (let r of s) r.finish();
      i && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(i) {
      let e = i.startState.facet(Es),
        t = i.state.facet(Es),
        n =
          i.docChanged ||
          i.heightChanged ||
          i.viewportChanged ||
          !ae.eq(
            i.startState.facet(uo),
            i.state.facet(uo),
            i.view.viewport.from,
            i.view.viewport.to
          );
      if (e == t) for (let s of this.gutters) s.update(i) && (n = !0);
      else {
        n = !0;
        let s = [];
        for (let r of t) {
          let o = e.indexOf(r);
          o < 0
            ? s.push(new Eu(this.view, r))
            : (this.gutters[o].update(i), s.push(this.gutters[o]));
        }
        for (let r of this.gutters)
          r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
        for (let r of s) this.dom.appendChild(r.dom);
        this.gutters = s;
      }
      return n;
    }
    destroy() {
      for (let i of this.gutters) i.destroy();
      this.dom.remove();
    }
  },
  {
    provide: (i) =>
      q.scrollMargins.of((e) => {
        let t = e.plugin(i);
        return !t || t.gutters.length == 0 || !t.fixed
          ? null
          : e.textDirection == Se.LTR
          ? { left: t.dom.offsetWidth * e.scaleX }
          : { right: t.dom.offsetWidth * e.scaleX };
      }),
  }
);
function _u(i) {
  return Array.isArray(i) ? i : [i];
}
function xh(i, e, t) {
  for (; i.value && i.from <= t; ) i.from == t && e.push(i.value), i.next();
}
class TS {
  constructor(e, t, n) {
    (this.gutter = e),
      (this.height = n),
      (this.i = 0),
      (this.cursor = ae.iter(e.markers, t.from));
  }
  addElement(e, t, n) {
    let { gutter: s } = this,
      r = (t.top - this.height) / e.scaleY,
      o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Pg(e, o, r, n);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else s.elements[this.i].update(e, o, r, n);
    (this.height = t.bottom), this.i++;
  }
  line(e, t, n) {
    let s = [];
    xh(this.cursor, s, t.from), n.length && (s = s.concat(n));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    (s.length == 0 && !o.config.renderEmptyElements) ||
      this.addElement(e, t, s);
  }
  widget(e, t) {
    let n = this.gutter.config.widgetMarker(e, t.widget, t);
    n && this.addElement(e, t, [n]);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Eu {
  constructor(e, t) {
    (this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement("div")),
      (this.dom.className =
        "cm-gutter" + (this.config.class ? " " + this.config.class : ""));
    for (let n in t.domEventHandlers)
      this.dom.addEventListener(n, (s) => {
        let r = s.target,
          o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; ) r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[n](e, l, s) && s.preventDefault();
      });
    (this.markers = _u(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new Pg(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText +=
          "visibility: hidden; pointer-events: none"));
  }
  update(e) {
    let t = this.markers;
    if (
      ((this.markers = _u(this.config.markers(e.view))),
      this.spacer && this.config.updateSpacer)
    ) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let n = e.view.viewport;
    return (
      !ae.eq(this.markers, t, n.from, n.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    );
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class Pg {
  constructor(e, t, n, s) {
    (this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-gutterElement"),
      this.update(e, t, n, s);
  }
  update(e, t, n, s) {
    this.height != t && ((this.height = t), (this.dom.style.height = t + "px")),
      this.above != n &&
        (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""),
      AS(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let n = "cm-gutterElement",
      s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o,
        a = r < t.length ? t[r++] : null,
        h = !1;
      if (a) {
        let c = a.elementClass;
        c && (n += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            (l = f), (h = !0);
            break;
          }
      } else l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), (s = f);
        }
      }
      if (!a) break;
      a.toDOM &&
        (h ? (s = s.nextSibling) : this.dom.insertBefore(a.toDOM(e), s)),
        h && o++;
    }
    (this.dom.className = n), (this.markers = t);
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function AS(i, e) {
  if (i.length != e.length) return !1;
  for (let t = 0; t < i.length; t++) if (!i[t].compare(e[t])) return !1;
  return !0;
}
const MS = z.define(),
  $n = z.define({
    combine(i) {
      return ri(
        i,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let n = Object.assign({}, e);
            for (let s in t) {
              let r = n[s],
                o = t[s];
              n[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
            }
            return n;
          },
        }
      );
    },
  });
class sa extends gi {
  constructor(e) {
    super(), (this.number = e);
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function ra(i, e) {
  return i.state.facet($n).formatNumber(e, i.state);
}
const _S = Es.compute([$n], (i) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(MS);
  },
  lineMarker(e, t, n) {
    return n.some((s) => s.toDOM)
      ? null
      : new sa(ra(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: () => null,
  lineMarkerChange: (e) => e.startState.facet($n) != e.state.facet($n),
  initialSpacer(e) {
    return new sa(ra(e, Wu(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let n = ra(t.view, Wu(t.view.state.doc.lines));
    return n == e.number ? e : new sa(n);
  },
  domEventHandlers: i.facet($n).domEventHandlers,
}));
function S$(i = {}) {
  return [$n.of(i), Qg(), _S];
}
function Wu(i) {
  let e = 9;
  for (; e < i; ) e = e * 10 + 9;
  return e;
}
const ES = new (class extends gi {
    constructor() {
      super(...arguments), (this.elementClass = "cm-activeLineGutter");
    }
  })(),
  WS = uo.compute(["selection"], (i) => {
    let e = [],
      t = -1;
    for (let n of i.selection.ranges) {
      let s = i.doc.lineAt(n.head).from;
      s > t && ((t = s), e.push(ES.range(s)));
    }
    return ae.of(e);
  });
function w$() {
  return WS;
}
// END @codemirror/view


// BEGIN @codemirror/highlight
let XS = 0;
class Ht {
  constructor(e, t, n) {
    (this.set = e), (this.base = t), (this.modified = n), (this.id = XS++);
  }
  static define(e) {
    if (e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let t = new Ht([], null, []);
    if ((t.set.push(t), e)) for (let n of e.set) t.set.push(n);
    return t;
  }
  static defineModifier() {
    let e = new Xo();
    return (t) =>
      t.modified.indexOf(e) > -1
        ? t
        : Xo.get(
            t.base || t,
            t.modified.concat(e).sort((n, s) => n.id - s.id)
          );
  }
}
let DS = 0;
class Xo {
  constructor() {
    (this.instances = []), (this.id = DS++);
  }
  static get(e, t) {
    if (!t.length) return e;
    let n = t[0].instances.find((l) => l.base == e && YS(t, l.modified));
    if (n) return n;
    let s = [],
      r = new Ht(s, e, t);
    for (let l of t) l.instances.push(r);
    let o = jS(t);
    for (let l of e.set)
      if (!l.modified.length) for (let a of o) s.push(Xo.get(l, a));
    return r;
  }
}
function YS(i, e) {
  return i.length == e.length && i.every((t, n) => t == e[n]);
}
function jS(i) {
  let e = [[]];
  for (let t = 0; t < i.length; t++)
    for (let n = 0, s = e.length; n < s; n++) e.push(e[n].concat(i[t]));
  return e.sort((t, n) => n.length - t.length);
}
function wc(i) {
  let e = Object.create(null);
  for (let t in i) {
    let n = i[t];
    Array.isArray(n) || (n = [n]);
    for (let s of t.split(" "))
      if (s) {
        let r = [],
          o = 2,
          l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u) throw new RangeError("Invalid path: " + s);
          if (
            (r.push(
              u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]
            ),
            (f += u[0].length),
            f == s.length)
          )
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/") throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = r.length - 1,
          h = r[a];
        if (!h) throw new RangeError("Invalid path: " + s);
        let c = new Do(n, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return kg.add(e);
}
const kg = new ne();
class Do {
  constructor(e, t, n, s) {
    (this.tags = e), (this.mode = t), (this.context = n), (this.next = s);
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth
      ? ((this.next = e), this)
      : ((e.next = this.sort(e.next)), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Do.empty = new Do([], 2, null);
function vg(i, e) {
  let t = Object.create(null);
  for (let r of i)
    if (!Array.isArray(r.tag)) t[r.tag.id] = r.class;
    else for (let o of r.tag) t[o.id] = r.class;
  let { scope: n, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: n,
  };
}
function LS(i, e) {
  let t = null;
  for (let n of i) {
    let s = n.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function US(i, e, t, n = 0, s = i.length) {
  let r = new VS(n, Array.isArray(e) ? e : [e], t);
  r.highlightRange(i.cursor(), n, s, "", r.highlighters), r.flush(s);
}
class VS {
  constructor(e, t, n) {
    (this.at = e), (this.highlighters = t), (this.span = n), (this.class = "");
  }
  startSpan(e, t) {
    t != this.class &&
      (this.flush(e), e > this.at && (this.at = e), (this.class = t));
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, n, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= n || a <= t) return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s,
      c = qS(e) || Do.empty,
      f = LS(r, c.tags);
    if (
      (f &&
        (h && (h += " "), (h += f), c.mode == 1 && (s += (s ? " " : "") + f)),
      this.startSpan(Math.max(t, l), h),
      c.opaque)
    )
      return;
    let u = e.tree && e.tree.prop(ne.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1),
        p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)),
        O = e.firstChild();
      for (let m = 0, b = l; ; m++) {
        let S = m < u.overlay.length ? u.overlay[m] : null,
          P = S ? S.from + l : a,
          x = Math.max(t, b),
          Q = Math.min(n, P);
        if (x < Q && O)
          for (
            ;
            e.from < Q &&
            (this.highlightRange(e, x, Q, s, r),
            this.startSpan(Math.min(Q, e.to), h),
            !(e.to >= P || !e.nextSibling()));

          );
        if (!S || P > n) break;
        (b = S.to + l),
          b > t &&
            (this.highlightRange(
              d.cursor(),
              Math.max(t, S.from + l),
              Math.min(n, b),
              "",
              p
            ),
            this.startSpan(Math.min(n, b), h));
      }
      O && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= n) break;
          this.highlightRange(e, t, n, s, r),
            this.startSpan(Math.min(n, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function qS(i) {
  let e = i.type.prop(kg);
  for (; e && e.context && !i.matchContext(e.context); ) e = e.next;
  return e || null;
}
const X = Ht.define,
  zr = X(),
  Zi = X(),
  Xu = X(Zi),
  Du = X(Zi),
  Ri = X(),
  Ir = X(Ri),
  oa = X(Ri),
  Bt = X(),
  nn = X(Bt),
  zt = X(),
  It = X(),
  Sh = X(),
  cs = X(Sh),
  Nr = X(),
  w = {
    comment: zr,
    lineComment: X(zr),
    blockComment: X(zr),
    docComment: X(zr),
    name: Zi,
    variableName: X(Zi),
    typeName: Xu,
    tagName: X(Xu),
    propertyName: Du,
    attributeName: X(Du),
    className: X(Zi),
    labelName: X(Zi),
    namespace: X(Zi),
    macroName: X(Zi),
    literal: Ri,
    string: Ir,
    docString: X(Ir),
    character: X(Ir),
    attributeValue: X(Ir),
    number: oa,
    integer: X(oa),
    float: X(oa),
    bool: X(Ri),
    regexp: X(Ri),
    escape: X(Ri),
    color: X(Ri),
    url: X(Ri),
    keyword: zt,
    self: X(zt),
    null: X(zt),
    atom: X(zt),
    unit: X(zt),
    modifier: X(zt),
    operatorKeyword: X(zt),
    controlKeyword: X(zt),
    definitionKeyword: X(zt),
    moduleKeyword: X(zt),
    operator: It,
    derefOperator: X(It),
    arithmeticOperator: X(It),
    logicOperator: X(It),
    bitwiseOperator: X(It),
    compareOperator: X(It),
    updateOperator: X(It),
    definitionOperator: X(It),
    typeOperator: X(It),
    controlOperator: X(It),
    punctuation: Sh,
    separator: X(Sh),
    bracket: cs,
    angleBracket: X(cs),
    squareBracket: X(cs),
    paren: X(cs),
    brace: X(cs),
    content: Bt,
    heading: nn,
    heading1: X(nn),
    heading2: X(nn),
    heading3: X(nn),
    heading4: X(nn),
    heading5: X(nn),
    heading6: X(nn),
    contentSeparator: X(Bt),
    list: X(Bt),
    quote: X(Bt),
    emphasis: X(Bt),
    strong: X(Bt),
    link: X(Bt),
    monospace: X(Bt),
    strikethrough: X(Bt),
    inserted: X(),
    deleted: X(),
    changed: X(),
    invalid: X(),
    meta: Nr,
    documentMeta: X(Nr),
    annotation: X(Nr),
    processingInstruction: X(Nr),
    definition: Ht.defineModifier(),
    constant: Ht.defineModifier(),
    function: Ht.defineModifier(),
    standard: Ht.defineModifier(),
    local: Ht.defineModifier(),
    special: Ht.defineModifier(),
  };
vg([
  { tag: w.link, class: "tok-link" },
  { tag: w.heading, class: "tok-heading" },
  { tag: w.emphasis, class: "tok-emphasis" },
  { tag: w.strong, class: "tok-strong" },
  { tag: w.keyword, class: "tok-keyword" },
  { tag: w.atom, class: "tok-atom" },
  { tag: w.bool, class: "tok-bool" },
  { tag: w.url, class: "tok-url" },
  { tag: w.labelName, class: "tok-labelName" },
  { tag: w.inserted, class: "tok-inserted" },
  { tag: w.deleted, class: "tok-deleted" },
  { tag: w.literal, class: "tok-literal" },
  { tag: w.string, class: "tok-string" },
  { tag: w.number, class: "tok-number" },
  { tag: [w.regexp, w.escape, w.special(w.string)], class: "tok-string2" },
  { tag: w.variableName, class: "tok-variableName" },
  { tag: w.local(w.variableName), class: "tok-variableName tok-local" },
  {
    tag: w.definition(w.variableName),
    class: "tok-variableName tok-definition",
  },
  { tag: w.special(w.variableName), class: "tok-variableName2" },
  {
    tag: w.definition(w.propertyName),
    class: "tok-propertyName tok-definition",
  },
  { tag: w.typeName, class: "tok-typeName" },
  { tag: w.namespace, class: "tok-namespace" },
  { tag: w.className, class: "tok-className" },
  { tag: w.macroName, class: "tok-macroName" },
  { tag: w.propertyName, class: "tok-propertyName" },
  { tag: w.operator, class: "tok-operator" },
  { tag: w.comment, class: "tok-comment" },
  { tag: w.meta, class: "tok-meta" },
  { tag: w.invalid, class: "tok-invalid" },
  { tag: w.punctuation, class: "tok-punctuation" },
]);
// END @codemirror/highlight


// BEGIN @codemirror/language
var la;
const Cn = new ne();
function $g(i) {
  return z.define({ combine: i ? (e) => e.concat(i) : void 0 });
}
const Qc = new ne();
class Et {
  constructor(e, t, n = [], s = "") {
    (this.data = e),
      (this.name = s),
      ce.prototype.hasOwnProperty("tree") ||
        Object.defineProperty(ce.prototype, "tree", {
          get() {
            return _e(this);
          },
        }),
      (this.parser = t),
      (this.extension = [
        Ii.of(this),
        ce.languageData.of((r, o, l) => {
          let a = Yu(r, o, l),
            h = a.type.prop(Cn);
          if (!h) return [];
          let c = r.facet(h),
            f = a.type.prop(Qc);
          if (f) {
            let u = a.resolve(o - a.from, l);
            for (let d of f)
              if (d.test(u, r)) {
                let p = r.facet(d.facet);
                return d.type == "replace" ? p : p.concat(c);
              }
          }
          return c;
        }),
      ].concat(n));
  }
  isActiveAt(e, t, n = -1) {
    return Yu(e, t, n).type.prop(Cn) == this.data;
  }
  findRegions(e) {
    let t = e.facet(Ii);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let n = [],
      s = (r, o) => {
        if (r.prop(Cn) == this.data) {
          n.push({ from: o, to: o + r.length });
          return;
        }
        let l = r.prop(ne.mounted);
        if (l) {
          if (l.tree.prop(Cn) == this.data) {
            if (l.overlay)
              for (let a of l.overlay)
                n.push({ from: a.from + o, to: a.to + o });
            else n.push({ from: o, to: o + r.length });
            return;
          } else if (l.overlay) {
            let a = n.length;
            if ((s(l.tree, l.overlay[0].from + o), n.length > a)) return;
          }
        }
        for (let a = 0; a < r.children.length; a++) {
          let h = r.children[a];
          h instanceof Te && s(h, r.positions[a] + o);
        }
      };
    return s(_e(e), 0), n;
  }
  get allowsNesting() {
    return !0;
  }
}
Et.setState = ee.define();
function Yu(i, e, t) {
  let n = i.facet(Ii),
    s = _e(i).topNode;
  if (!n || n.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, De.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
class er extends Et {
  constructor(e, t, n) {
    super(e, t, [], n), (this.parser = t);
  }
  static define(e) {
    let t = $g(e.languageData);
    return new er(
      t,
      e.parser.configure({ props: [Cn.add((n) => (n.isTop ? t : void 0))] }),
      e.name
    );
  }
  configure(e, t) {
    return new er(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function _e(i) {
  let e = i.field(Et.state, !1);
  return e ? e.tree : Te.empty;
}
class zS {
  constructor(e) {
    (this.doc = e),
      (this.cursorPos = 0),
      (this.string = ""),
      (this.cursor = e.iter());
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    );
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let n = this.cursorPos - this.string.length;
    return e < n || t >= this.cursorPos
      ? this.doc.sliceString(e, t)
      : this.string.slice(e - n, t - n);
  }
}
let fs = null;
class Yo {
  constructor(e, t, n = [], s, r, o, l, a) {
    (this.parser = e),
      (this.state = t),
      (this.fragments = n),
      (this.tree = s),
      (this.treeLen = r),
      (this.viewport = o),
      (this.skipped = l),
      (this.scheduleOn = a),
      (this.parse = null),
      (this.tempSkipped = []);
  }
  static create(e, t, n) {
    return new Yo(e, t, [], Te.empty, 0, n, [], null);
  }
  startParse() {
    return this.parser.startParse(new zS(this.state.doc), this.fragments);
  }
  work(e, t) {
    return (
      t != null && t >= this.state.doc.length && (t = void 0),
      this.tree != Te.empty && this.isDone(eval('t ?? this.state.doc.length'))
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var n;
            if (typeof e == "number") {
              let s = Date.now() + e;
              e = () => Date.now() > s;
            }
            for (
              this.parse || (this.parse = this.startParse()),
                t != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
                  t < this.state.doc.length &&
                  this.parse.stopAt(t);
              ;

            ) {
              let s = this.parse.advance();
              if (s)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    un.addTree(s, this.fragments, this.parse.stoppedAt != null)
                  )),
                  (this.treeLen =
                    (n = this.parse.stoppedAt) !== null && n !== void 0
                      ? n
                      : this.state.doc.length),
                  (this.tree = s),
                  (this.parse = null),
                  this.treeLen < (eval('t ?? this.state.doc.length')))
                )
                  this.parse = this.startParse();
                else return !0;
              if (e()) return !1;
            }
          })
    );
  }
  takeTree() {
    let e, t;
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) &&
        this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(t = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = t),
      (this.fragments = this.withoutTempSkipped(
        un.addTree(this.tree, this.fragments, !0)
      )),
      (this.parse = null));
  }
  withContext(e) {
    let t = fs;
    fs = this;
    try {
      return e();
    } finally {
      fs = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; (t = this.tempSkipped.pop()); ) e = ju(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: n, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if ((this.takeTree(), !e.empty)) {
      let a = [];
      if (
        (e.iterChangedRanges((h, c, f, u) =>
          a.push({ fromA: h, toA: c, fromB: f, toB: u })
        ),
        (n = un.applyChanges(n, a)),
        (s = Te.empty),
        (r = 0),
        (o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
        this.skipped.length)
      ) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1),
            f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Yo(this.parser, t, n, s, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let n = 0; n < this.skipped.length; n++) {
      let { from: s, to: r } = this.skipped[n];
      s < e.to &&
        r > e.from &&
        ((this.fragments = ju(this.fragments, s, r)),
        this.skipped.splice(n--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null));
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new (class extends Hp {
      createParse(t, n, s) {
        let r = s[0].from,
          o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = fs;
            if (a) {
              for (let h of s) a.tempSkipped.push(h);
              e &&
                (a.scheduleOn = a.scheduleOn
                  ? Promise.all([a.scheduleOn, e])
                  : e);
            }
            return (this.parsedPos = o), new Te(gt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {},
        };
      }
    })();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return fs;
  }
}
function ju(i, e, t) {
  return un.applyChanges(i, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Nn {
  constructor(e) {
    (this.context = e), (this.tree = e.tree);
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state),
      n =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, n) || t.takeTree(), new Nn(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length),
      n = Yo.create(e.facet(Ii).parser, e, { from: 0, to: t });
    return n.work(20, t) || n.takeTree(), new Nn(n);
  }
}
Et.state = Le.define({
  create: Nn.init,
  update(i, e) {
    for (let t of e.effects) if (t.is(Et.setState)) return t.value;
    return e.startState.facet(Ii) != e.state.facet(Ii)
      ? Nn.init(e.state)
      : i.apply(e);
  },
});
let Cg = (i) => {
  let e = setTimeout(() => i(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" &&
  (Cg = (i) => {
    let e = -1,
      t = setTimeout(() => {
        e = requestIdleCallback(i, { timeout: 400 });
      }, 100);
    return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
  });
const aa =
    typeof navigator < "u" &&
    !((la = navigator.scheduling) === null || la === void 0) &&
    la.isInputPending
      ? () => navigator.scheduling.isInputPending()
      : null,
  IS = Me.fromClass(
    class {
      constructor(e) {
        (this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork();
      }
      update(e) {
        let t = this.view.state.field(Et.state).context;
        (t.updateViewport(e.view.viewport) ||
          this.view.viewport.to > t.treeLen) &&
          this.scheduleWork(),
          (e.docChanged || e.selectionSet) &&
            (this.view.hasFocus && (this.chunkBudget += 50),
            this.scheduleWork()),
          this.checkAsyncSchedule(t);
      }
      scheduleWork() {
        if (this.working) return;
        let { state: e } = this.view,
          t = e.field(Et.state);
        (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
          (this.working = Cg(this.work));
      }
      work(e) {
        this.working = null;
        let t = Date.now();
        if (
          (this.chunkEnd < t &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return;
        let {
            state: n,
            viewport: { to: s },
          } = this.view,
          r = n.field(Et.state);
        if (r.tree == r.context.tree && r.context.isDone(s + 1e5)) return;
        let o =
            Date.now() +
            Math.min(
              this.chunkBudget,
              100,
              e && !aa ? Math.max(25, e.timeRemaining() - 5) : 1e9
            ),
          l = r.context.treeLen < s && n.doc.length > s + 1e3,
          a = r.context.work(
            () => (aa && aa()) || Date.now() > o,
            s + (l ? 0 : 1e5)
          );
        (this.chunkBudget -= Date.now() - t),
          (a || this.chunkBudget <= 0) &&
            (r.context.takeTree(),
            this.view.dispatch({ effects: Et.setState.of(new Nn(r.context)) })),
          this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
          this.checkAsyncSchedule(r.context);
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch((t) => dt(this.view.state, t))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null));
      }
      destroy() {
        this.working && this.working();
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0);
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork();
        },
      },
    }
  ),
  Ii = z.define({
    combine(i) {
      return i.length ? i[0] : null;
    },
    enables: (i) => [
      Et.state,
      IS,
      q.contentAttributes.compute([i], (e) => {
        let t = e.facet(i);
        return t && t.name ? { "data-language": t.name } : {};
      }),
    ],
  });
class Zg {
  constructor(e, t = []) {
    (this.language = e), (this.support = t), (this.extension = [e, t]);
  }
}
const NS = z.define(),
  Ql = z.define({
    combine: (i) => {
      if (!i.length) return "  ";
      let e = i[0];
      if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
        throw new Error("Invalid indent unit: " + JSON.stringify(i[0]));
      return e;
    },
  });
function jo(i) {
  let e = i.facet(Ql);
  return e.charCodeAt(0) == 9 ? i.tabSize * e.length : e.length;
}
function tr(i, e) {
  let t = "",
    n = i.tabSize,
    s = i.facet(Ql)[0];
  if (s == "	") {
    for (; e >= n; ) (t += "	"), (e -= n);
    s = " ";
  }
  for (let r = 0; r < e; r++) t += s;
  return t;
}
function Pc(i, e) {
  i instanceof ce && (i = new Pl(i));
  for (let n of i.state.facet(NS)) {
    let s = n(i, e);
    if (s !== void 0) return s;
  }
  let t = _e(i.state);
  return t.length >= e ? BS(i, t, e) : null;
}
class Pl {
  constructor(e, t = {}) {
    (this.state = e), (this.options = t), (this.unit = jo(e));
  }
  lineAt(e, t = 1) {
    let n = this.state.doc.lineAt(e),
      { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= n.from && s <= n.to
      ? r && s == e
        ? { text: "", from: e }
        : (t < 0 ? s < e : s <= e)
        ? { text: n.text.slice(s - n.from), from: s }
        : { text: n.text.slice(0, s - n.from), from: n.from }
      : n;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: n, from: s } = this.lineAt(e, t);
    return n.slice(e - s, Math.min(n.length, e + 100 - s));
  }
  column(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t),
      r = this.countColumn(n, e - s),
      o = this.options.overrideIndentation
        ? this.options.overrideIndentation(s)
        : -1;
    return o > -1 && (r += o - this.countColumn(n, n.search(/\S|$/))), r;
  }
  countColumn(e, t = e.length) {
    return Kn(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: n, from: s } = this.lineAt(e, t),
      r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1) return o;
    }
    return this.countColumn(n, n.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const kc = new ne();
function BS(i, e, t) {
  let n = e.resolveStack(t),
    s = n.node.enterUnfinishedNodesBefore(t);
  if (s != n.node) {
    let r = [];
    for (let o = s; o != n.node; o = o.parent) r.push(o);
    for (let o = r.length - 1; o >= 0; o--) n = { node: r[o], next: n };
  }
  return Rg(n, i, t);
}
function Rg(i, e, t) {
  for (let n = i; n; n = n.next) {
    let s = FS(n.node);
    if (s) return s(vc.create(e, t, n));
  }
  return 0;
}
function GS(i) {
  return i.pos == i.options.simulateBreak && i.options.simulateDoubleBreak;
}
function FS(i) {
  let e = i.type.prop(kc);
  if (e) return e;
  let t = i.firstChild,
    n;
  if (t && (n = t.type.prop(ne.closedBy))) {
    let s = i.lastChild,
      r = s && n.indexOf(s.name) > -1;
    return (o) => Tg(o, !0, 1, void 0, r && !GS(o) ? s.from : void 0);
  }
  return i.parent == null ? HS : null;
}
function HS() {
  return 0;
}
class vc extends Pl {
  constructor(e, t, n) {
    super(e.state, e.options),
      (this.base = e),
      (this.pos = t),
      (this.context = n);
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, n) {
    return new vc(e, t, n);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (;;) {
      let n = e.resolve(t.from);
      for (; n.parent && n.parent.from == n.from; ) n = n.parent;
      if (KS(n, e)) break;
      t = this.state.doc.lineAt(n.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Rg(this.context.next, this.base, this.pos);
  }
}
function KS(i, e) {
  for (let t = e; t; t = t.parent) if (i == t) return !0;
  return !1;
}
function JS(i) {
  let e = i.node,
    t = e.childAfter(e.from),
    n = e.lastChild;
  if (!t) return null;
  let s = i.options.simulateBreak,
    r = i.state.doc.lineAt(t.from),
    o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == n) return null;
    if (!a.type.isSkipped) return a.from < o ? t : null;
    l = a.to;
  }
}
function ew({ closing: i, align: e = !0, units: t = 1 }) {
  return (n) => Tg(n, e, t, i);
}
function Tg(i, e, t, n, s) {
  let r = i.textAfter,
    o = r.match(/^\s*/)[0].length,
    l = (n && r.slice(o, o + n.length) == n) || s == i.pos + o,
    a = e ? JS(i) : null;
  return a
    ? l
      ? i.column(a.from)
      : i.column(a.to)
    : i.baseIndent + (l ? 0 : i.unit * t);
}
const tw = (i) => i.baseIndent;
function Ws({ except: i, units: e = 1 } = {}) {
  return (t) => {
    let n = i && i.test(t.textAfter);
    return t.baseIndent + (n ? 0 : e * t.unit);
  };
}
const iw = 200;
function P$() {
  return ce.transactionFilter.of((i) => {
    if (
      !i.docChanged ||
      (!i.isUserEvent("input.type") && !i.isUserEvent("input.complete"))
    )
      return i;
    let e = i.startState.languageDataAt(
      "indentOnInput",
      i.startState.selection.main.head
    );
    if (!e.length) return i;
    let t = i.newDoc,
      { head: n } = i.newSelection.main,
      s = t.lineAt(n);
    if (n > s.from + iw) return i;
    let r = t.sliceString(s.from, n);
    if (!e.some((h) => h.test(r))) return i;
    let { state: o } = i,
      l = -1,
      a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l) continue;
      l = c.from;
      let f = Pc(o, c.from);
      if (f == null) continue;
      let u = /^\s*/.exec(c.text)[0],
        d = tr(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [i, { changes: a, sequential: !0 }] : i;
  });
}
const nw = z.define(),
  $c = new ne();
function Ag(i) {
  let e = i.firstChild,
    t = i.lastChild;
  return e && e.to < t.from
    ? { from: e.to, to: t.type.isError ? i.to : t.from }
    : null;
}
function sw(i, e, t) {
  let n = _e(i);
  if (n.length < t) return null;
  let s = n.resolveStack(t, 1),
    r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (r && l.from < e) break;
    let a = l.type.prop($c);
    if (a && (l.to < n.length - 50 || n.length == i.doc.length || !rw(l))) {
      let h = a(l, i);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function rw(i) {
  let e = i.lastChild;
  return e && e.to == i.to && e.type.isError;
}
function Lo(i, e, t) {
  for (let n of i.facet(nw)) {
    let s = n(i, e, t);
    if (s) return s;
  }
  return sw(i, e, t);
}
function Mg(i, e) {
  let t = e.mapPos(i.from, 1),
    n = e.mapPos(i.to, -1);
  return t >= n ? void 0 : { from: t, to: n };
}
const kl = ee.define({ map: Mg }),
  yr = ee.define({ map: Mg });
function _g(i) {
  let e = [];
  for (let { head: t } of i.state.selection.ranges)
    e.some((n) => n.from <= t && n.to >= t) || e.push(i.lineBlockAt(t));
  return e;
}
const yn = Le.define({
  create() {
    return N.none;
  },
  update(i, e) {
    i = i.map(e.changes);
    for (let t of e.effects)
      if (t.is(kl) && !ow(i, t.value.from, t.value.to)) {
        let { preparePlaceholder: n } = e.state.facet(Xg),
          s = n ? N.replace({ widget: new uw(n(e.state, t.value)) }) : Lu;
        i = i.update({ add: [s.range(t.value.from, t.value.to)] });
      } else
        t.is(yr) &&
          (i = i.update({
            filter: (n, s) => t.value.from != n || t.value.to != s,
            filterFrom: t.value.from,
            filterTo: t.value.to,
          }));
    if (e.selection) {
      let t = !1,
        { head: n } = e.selection.main;
      i.between(n, n, (s, r) => {
        s < n && r > n && (t = !0);
      }),
        t &&
          (i = i.update({
            filterFrom: n,
            filterTo: n,
            filter: (s, r) => r <= n || s >= n,
          }));
    }
    return i;
  },
  provide: (i) => q.decorations.from(i),
  toJSON(i, e) {
    let t = [];
    return (
      i.between(0, e.doc.length, (n, s) => {
        t.push(n, s);
      }),
      t
    );
  },
  fromJSON(i) {
    if (!Array.isArray(i) || i.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < i.length; ) {
      let n = i[t++],
        s = i[t++];
      if (typeof n != "number" || typeof s != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Lu.range(n, s));
    }
    return N.set(e, !0);
  },
});
function Uo(i, e, t) {
  var n;
  let s = null;
  return (
    (n = i.field(yn, !1)) === null ||
      n === void 0 ||
      n.between(e, t, (r, o) => {
        (!s || s.from > r) && (s = { from: r, to: o });
      }),
    s
  );
}
function ow(i, e, t) {
  let n = !1;
  return (
    i.between(e, e, (s, r) => {
      s == e && r == t && (n = !0);
    }),
    n
  );
}
function Eg(i, e) {
  return i.field(yn, !1) ? e : e.concat(ee.appendConfig.of(Dg()));
}
const lw = (i) => {
    for (let e of _g(i)) {
      let t = Lo(i.state, e.from, e.to);
      if (t)
        return i.dispatch({ effects: Eg(i.state, [kl.of(t), Wg(i, t)]) }), !0;
    }
    return !1;
  },
  aw = (i) => {
    if (!i.state.field(yn, !1)) return !1;
    let e = [];
    for (let t of _g(i)) {
      let n = Uo(i.state, t.from, t.to);
      n && e.push(yr.of(n), Wg(i, n, !1));
    }
    return e.length && i.dispatch({ effects: e }), e.length > 0;
  };
function Wg(i, e, t = !0) {
  let n = i.state.doc.lineAt(e.from).number,
    s = i.state.doc.lineAt(e.to).number;
  return q.announce.of(
    `${i.state.phrase(
      t ? "Folded lines" : "Unfolded lines"
    )} ${n} ${i.state.phrase("to")} ${s}.`
  );
}
const hw = (i) => {
    let { state: e } = i,
      t = [];
    for (let n = 0; n < e.doc.length; ) {
      let s = i.lineBlockAt(n),
        r = Lo(e, s.from, s.to);
      r && t.push(kl.of(r)), (n = (r ? i.lineBlockAt(r.to) : s).to + 1);
    }
    return t.length && i.dispatch({ effects: Eg(i.state, t) }), !!t.length;
  },
  cw = (i) => {
    let e = i.state.field(yn, !1);
    if (!e || !e.size) return !1;
    let t = [];
    return (
      e.between(0, i.state.doc.length, (n, s) => {
        t.push(yr.of({ from: n, to: s }));
      }),
      i.dispatch({ effects: t }),
      !0
    );
  },
  k$ = [
    { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: lw },
    { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: aw },
    { key: "Ctrl-Alt-[", run: hw },
    { key: "Ctrl-Alt-]", run: cw },
  ],
  fw = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" },
  Xg = z.define({
    combine(i) {
      return ri(i, fw);
    },
  });
function Dg(i) {
  return [yn, pw];
}
function Yg(i, e) {
  let { state: t } = i,
    n = t.facet(Xg),
    s = (o) => {
      let l = i.lineBlockAt(i.posAtDOM(o.target)),
        a = Uo(i.state, l.from, l.to);
      a && i.dispatch({ effects: yr.of(a) }), o.preventDefault();
    };
  if (n.placeholderDOM) return n.placeholderDOM(i, s, e);
  let r = document.createElement("span");
  return (
    (r.textContent = n.placeholderText),
    r.setAttribute("aria-label", t.phrase("folded code")),
    (r.title = t.phrase("unfold")),
    (r.className = "cm-foldPlaceholder"),
    (r.onclick = s),
    r
  );
}
const Lu = N.replace({
  widget: new (class extends xi {
    toDOM(i) {
      return Yg(i, null);
    }
  })(),
});
class uw extends xi {
  constructor(e) {
    super(), (this.value = e);
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Yg(e, this.value);
  }
}
const dw = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1,
};
class ha extends gi {
  constructor(e, t) {
    super(), (this.config = e), (this.open = t);
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return (
      (t.textContent = this.open
        ? this.config.openText
        : this.config.closedText),
      (t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line")),
      t
    );
  }
}
function v$(i = {}) {
  let e = Object.assign(Object.assign({}, dw), i),
    t = new ha(e, !0),
    n = new ha(e, !1),
    s = Me.fromClass(
      class {
        constructor(o) {
          (this.from = o.viewport.from), (this.markers = this.buildMarkers(o));
        }
        update(o) {
          (o.docChanged ||
            o.viewportChanged ||
            o.startState.facet(Ii) != o.state.facet(Ii) ||
            o.startState.field(yn, !1) != o.state.field(yn, !1) ||
            _e(o.startState) != _e(o.state) ||
            e.foldingChanged(o)) &&
            (this.markers = this.buildMarkers(o.view));
        }
        buildMarkers(o) {
          let l = new Ui();
          for (let a of o.viewportLineBlocks) {
            let h = Uo(o.state, a.from, a.to)
              ? n
              : Lo(o.state, a.from, a.to)
              ? t
              : null;
            h && l.add(a.from, a.from, h);
          }
          return l.finish();
        }
      }
    ),
    { domEventHandlers: r } = e;
  return [
    s,
    ZS({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return (
          ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) ||
          ae.empty
        );
      },
      initialSpacer() {
        return new ha(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), {
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a)) return !0;
          let h = Uo(o.state, l.from, l.to);
          if (h) return o.dispatch({ effects: yr.of(h) }), !0;
          let c = Lo(o.state, l.from, l.to);
          return c ? (o.dispatch({ effects: kl.of(c) }), !0) : !1;
        },
      }),
    }),
    Dg(),
  ];
}
const pw = q.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer",
  },
  ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" },
});
class vl {
  constructor(e, t) {
    this.specs = e;
    let n;
    function s(l) {
      let a = Vi.newName();
      return ((n || (n = Object.create(null)))["." + a] = l), a;
    }
    const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0,
      o = t.scope;
    (this.scope =
      o instanceof Et
        ? (l) => l.prop(Cn) == o.data
        : o
        ? (l) => l == o
        : void 0),
      (this.style = vg(
        e.map((l) => ({
          tag: l.tag,
          class: l.class || s(Object.assign({}, l, { tag: null })),
        })),
        { all: r }
      ).style),
      (this.module = n ? new Vi(n) : null),
      (this.themeType = t.themeType);
  }
  static define(e, t) {
    return new vl(e, t || {});
  }
}
const wh = z.define(),
  jg = z.define({
    combine(i) {
      return i.length ? [i[0]] : null;
    },
  });
function ca(i) {
  let e = i.facet(wh);
  return e.length ? e : i.facet(jg);
}
function $$(i, e) {
  let t = [gw],
    n;
  return (
    i instanceof vl &&
      (i.module && t.push(q.styleModule.of(i.module)), (n = i.themeType)),
    e != null && e.fallback
      ? t.push(jg.of(i))
      : n
      ? t.push(
          wh.computeN([q.darkTheme], (s) =>
            s.facet(q.darkTheme) == (n == "dark") ? [i] : []
          )
        )
      : t.push(wh.of(i)),
    t
  );
}
class Ow {
  constructor(e) {
    (this.markCache = Object.create(null)),
      (this.tree = _e(e.state)),
      (this.decorations = this.buildDeco(e, ca(e.state))),
      (this.decoratedTo = e.viewport.to);
  }
  update(e) {
    let t = _e(e.state),
      n = ca(e.state),
      s = n != ca(e.startState),
      { viewport: r } = e.view,
      o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to
      ? ((this.decorations = this.decorations.map(e.changes)),
        (this.decoratedTo = o))
      : (t != this.tree || e.viewportChanged || s) &&
        ((this.tree = t),
        (this.decorations = this.buildDeco(e.view, n)),
        (this.decoratedTo = r.to));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return N.none;
    let n = new Ui();
    for (let { from: s, to: r } of e.visibleRanges)
      US(
        this.tree,
        t,
        (o, l, a) => {
          n.add(
            o,
            l,
            this.markCache[a] || (this.markCache[a] = N.mark({ class: a }))
          );
        },
        s,
        r
      );
    return n.finish();
  }
}
const gw = Hi.high(Me.fromClass(Ow, { decorations: (i) => i.decorations })),
  C$ = vl.define([
    { tag: w.meta, color: "#404740" },
    { tag: w.link, textDecoration: "underline" },
    { tag: w.heading, textDecoration: "underline", fontWeight: "bold" },
    { tag: w.emphasis, fontStyle: "italic" },
    { tag: w.strong, fontWeight: "bold" },
    { tag: w.strikethrough, textDecoration: "line-through" },
    { tag: w.keyword, color: "#708" },
    {
      tag: [w.atom, w.bool, w.url, w.contentSeparator, w.labelName],
      color: "#219",
    },
    { tag: [w.literal, w.inserted], color: "#164" },
    { tag: [w.string, w.deleted], color: "#a11" },
    { tag: [w.regexp, w.escape, w.special(w.string)], color: "#e40" },
    { tag: w.definition(w.variableName), color: "#00f" },
    { tag: w.local(w.variableName), color: "#30a" },
    { tag: [w.typeName, w.namespace], color: "#085" },
    { tag: w.className, color: "#167" },
    { tag: [w.special(w.variableName), w.macroName], color: "#256" },
    { tag: w.definition(w.propertyName), color: "#00c" },
    { tag: w.comment, color: "#940" },
    { tag: w.invalid, color: "#f00" },
  ]),
  mw = q.baseTheme({
    "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
    "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" },
  }),
  Lg = 1e4,
  Ug = "()[]{}",
  Vg = z.define({
    combine(i) {
      return ri(i, {
        afterCursor: !0,
        brackets: Ug,
        maxScanDistance: Lg,
        renderMatch: xw,
      });
    },
  }),
  bw = N.mark({ class: "cm-matchingBracket" }),
  yw = N.mark({ class: "cm-nonmatchingBracket" });
function xw(i) {
  let e = [],
    t = i.matched ? bw : yw;
  return (
    e.push(t.range(i.start.from, i.start.to)),
    i.end && e.push(t.range(i.end.from, i.end.to)),
    e
  );
}
const Sw = Le.define({
    create() {
      return N.none;
    },
    update(i, e) {
      if (!e.docChanged && !e.selection) return i;
      let t = [],
        n = e.state.facet(Vg);
      for (let s of e.state.selection.ranges) {
        if (!s.empty) continue;
        let r =
          ti(e.state, s.head, -1, n) ||
          (s.head > 0 && ti(e.state, s.head - 1, 1, n)) ||
          (n.afterCursor &&
            (ti(e.state, s.head, 1, n) ||
              (s.head < e.state.doc.length && ti(e.state, s.head + 1, -1, n))));
        r && (t = t.concat(n.renderMatch(r, e.state)));
      }
      return N.set(t, !0);
    },
    provide: (i) => q.decorations.from(i),
  }),
  ww = [Sw, mw];
function Z$(i = {}) {
  return [Vg.of(i), ww];
}
const Qw = new ne();
function Qh(i, e, t) {
  let n = i.prop(e < 0 ? ne.openedBy : ne.closedBy);
  if (n) return n;
  if (i.name.length == 1) {
    let s = t.indexOf(i.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]];
  }
  return null;
}
function Ph(i) {
  let e = i.type.prop(Qw);
  return e ? e(i.node) : i;
}
function ti(i, e, t, n = {}) {
  let s = n.maxScanDistance || Lg,
    r = n.brackets || Ug,
    o = _e(i),
    l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Qh(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Ph(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return Pw(i, e, t, a, c, h, r);
    }
  }
  return kw(i, e, t, o, l.type, s, r);
}
function Pw(i, e, t, n, s, r, o) {
  let l = n.parent,
    a = { from: s.from, to: s.to },
    h = 0,
    c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
    do
      if (t < 0 ? c.to <= n.from : c.from >= n.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Ph(c);
          return {
            start: a,
            end: f ? { from: f.from, to: f.to } : void 0,
            matched: !0,
          };
        } else if (Qh(c.type, t, o)) h++;
        else if (Qh(c.type, -t, o)) {
          if (h == 0) {
            let f = Ph(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1,
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function kw(i, e, t, n, s, r, o) {
  let l = t < 0 ? i.sliceDoc(e - 1, e) : i.sliceDoc(e, e + 1),
    a = o.indexOf(l);
  if (a < 0 || (a % 2 == 0) != t > 0) return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
    c = i.doc.iterRange(e, t > 0 ? i.doc.length : 0),
    f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (
      let O = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1;
      O != m;
      O += t
    ) {
      let b = o.indexOf(d[O]);
      if (!(b < 0 || n.resolveInner(p + O, 1).type != s))
        if ((b % 2 == 0) == t > 0) f++;
        else {
          if (f == 1)
            return {
              start: h,
              end: { from: p + O, to: p + O + 1 },
              matched: b >> 1 == a >> 1,
            };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const vw = Object.create(null),
  Uu = [gt.none],
  Vu = [],
  qu = Object.create(null),
  $w = Object.create(null);
for (let [i, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"],
])
  $w[i] = Cw(vw, e);
function fa(i, e) {
  Vu.indexOf(i) > -1 || (Vu.push(i), console.warn(e));
}
function Cw(i, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = i[h] || w[h];
      c
        ? typeof c == "function"
          ? a.length
            ? (a = a.map(c))
            : fa(h, `Modifier ${h} used at start of tag`)
          : a.length
          ? fa(h, `Tag ${h} used as modifier`)
          : (a = Array.isArray(c) ? c : [c])
        : fa(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a) t.push(h);
  }
  if (!t.length) return 0;
  let n = e.replace(/ /g, "_"),
    s = n + " " + t.map((l) => l.id),
    r = qu[s];
  if (r) return r.id;
  let o = (qu[s] = gt.define({
    id: Uu.length,
    name: n,
    props: [wc({ [n]: t })],
  }));
  return Uu.push(o), o.id;
}
Se.RTL, Se.LTR;
// END @codemirror/language


// BEGIN @codemirror/autocomplete
class qg {
  constructor(e, t, n) {
    (this.state = e),
      (this.pos = t),
      (this.explicit = n),
      (this.abortListeners = []);
  }
  tokenBefore(e) {
    let t = _e(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t
      ? {
          from: t.from,
          to: this.pos,
          text: this.state.sliceDoc(t.from, this.pos),
          type: t.type,
        }
      : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos),
      n = Math.max(t.from, this.pos - 250),
      s = t.text.slice(n - t.from, this.pos - t.from),
      r = s.search(Ig(e, !1));
    return r < 0 ? null : { from: n + r, to: this.pos, text: s.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t) {
    e == "abort" && this.abortListeners && this.abortListeners.push(t);
  }
}
function zu(i) {
  let e = Object.keys(i).join(""),
    t = /\w/.test(e);
  return (
    t && (e = e.replace(/\w/g, "")),
    `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`
  );
}
function Zw(i) {
  let e = Object.create(null),
    t = Object.create(null);
  for (let { label: s } of i) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++) t[s[r]] = !0;
  }
  let n = zu(e) + zu(t) + "*$";
  return [new RegExp("^" + n), new RegExp(n)];
}
function zg(i) {
  let e = i.map((s) => (typeof s == "string" ? { label: s } : s)),
    [t, n] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : Zw(e);
  return (s) => {
    let r = s.matchBefore(n);
    return r || s.explicit
      ? { from: r ? r.from : s.pos, options: e, validFor: t }
      : null;
  };
}
function Rw(i, e) {
  return (t) => {
    for (let n = _e(t.state).resolveInner(t.pos, -1); n; n = n.parent) {
      if (i.indexOf(n.name) > -1) return null;
      if (n.type.isTop) break;
    }
    return e(t);
  };
}
class Iu {
  constructor(e, t, n, s) {
    (this.completion = e),
      (this.source = t),
      (this.match = n),
      (this.score = s);
  }
}
function Di(i) {
  return i.selection.main.from;
}
function Ig(i, e) {
  var t;
  let { source: n } = i,
    s = e && n[0] != "^",
    r = n[n.length - 1] != "$";
  return !s && !r
    ? i
    : new RegExp(
        `${s ? "^" : ""}(?:${n})${r ? "$" : ""}`,
        (t = i.flags) !== null && t !== void 0 ? t : i.ignoreCase ? "i" : ""
      );
}
const Cc = yi.define();
function Tw(i, e, t, n) {
  let { main: s } = i.selection,
    r = t - s.from,
    o = n - s.from;
  return Object.assign(
    Object.assign(
      {},
      i.changeByRange((l) =>
        l != s &&
        t != n &&
        i.sliceDoc(l.from + r, l.from + o) != i.sliceDoc(t, n)
          ? { range: l }
          : {
              changes: {
                from: l.from + r,
                to: n == s.from ? l.to : l.from + o,
                insert: e,
              },
              range: v.cursor(l.from + r + e.length),
            }
      )
    ),
    { scrollIntoView: !0, userEvent: "input.complete" }
  );
}
const Nu = new WeakMap();
function Aw(i) {
  if (!Array.isArray(i)) return i;
  let e = Nu.get(i);
  return e || Nu.set(i, (e = zg(i))), e;
}
const Vo = ee.define(),
  ir = ee.define();
class Mw {
  constructor(e) {
    (this.pattern = e),
      (this.chars = []),
      (this.folded = []),
      (this.any = []),
      (this.precise = []),
      (this.byWord = []),
      (this.score = 0),
      (this.matched = []);
    for (let t = 0; t < e.length; ) {
      let n = Ve(e, t),
        s = $t(n);
      this.chars.push(n);
      let r = e.slice(t, t + s),
        o = r.toUpperCase();
      this.folded.push(Ve(o == r ? r.toLowerCase() : o, 0)), (t += s);
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return (this.score = e), (this.matched = t), this;
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let { chars: t, folded: n, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let S = Ve(e, 0),
        P = $t(S),
        x = P == e.length ? 0 : -100;
      if (S != t[0])
        if (S == n[0]) x += -200;
        else return null;
      return this.ret(x, [0, P]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [
        0,
        this.pattern.length,
      ]);
    let a = t.length,
      h = 0;
    if (l < 0) {
      for (let S = 0, P = Math.min(e.length, 200); S < P && h < a; ) {
        let x = Ve(e, S);
        (x == t[h] || x == n[h]) && (s[h++] = S), (S += $t(x));
      }
      if (h < a) return null;
    }
    let c = 0,
      f = 0,
      u = !1,
      d = 0,
      p = -1,
      O = -1,
      m = /[a-z]/.test(e),
      b = !0;
    for (let S = 0, P = Math.min(e.length, 200), x = 0; S < P && f < a; ) {
      let Q = Ve(e, S);
      l < 0 &&
        (c < a && Q == t[c] && (r[c++] = S),
        d < a &&
          (Q == t[d] || Q == n[d]
            ? (d == 0 && (p = S), (O = S + 1), d++)
            : (d = 0)));
      let $,
        C =
          Q < 255
            ? (Q >= 48 && Q <= 57) || (Q >= 97 && Q <= 122)
              ? 2
              : Q >= 65 && Q <= 90
              ? 1
              : 0
            : ($ = ac(Q)) != $.toLowerCase()
            ? 1
            : $ != $.toUpperCase()
            ? 2
            : 0;
      (!S || (C == 1 && m) || (x == 0 && C != 0)) &&
        (t[f] == Q || (n[f] == Q && (u = !0))
          ? (o[f++] = S)
          : o.length && (b = !1)),
        (x = C),
        (S += $t(Q));
    }
    return f == a && o[0] == 0 && b
      ? this.result(-100 + (u ? -200 : 0), o, e)
      : d == a && p == 0
      ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O])
      : l > -1
      ? this.ret(-700 - e.length, [l, l + this.pattern.length])
      : d == a
      ? this.ret(-900 - e.length, [p, O])
      : f == a
      ? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e)
      : t.length == 2
      ? null
      : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, n) {
    let s = [],
      r = 0;
    for (let o of t) {
      let l = o + (this.astral ? $t(Ve(n, o)) : 1);
      r && s[r - 1] == o ? (s[r - 1] = l) : ((s[r++] = o), (s[r++] = l));
    }
    return this.ret(e - n.length, s);
  }
}
class _w {
  constructor(e) {
    (this.pattern = e),
      (this.matched = []),
      (this.score = 0),
      (this.folded = e.toLowerCase());
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length),
      n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return n == null
      ? null
      : ((this.matched = [0, t.length]),
        (this.score = n + (e.length == this.pattern.length ? 0 : -100)),
        this);
  }
}
const Ne = z.define({
  combine(i) {
    return ri(
      i,
      {
        activateOnTyping: !0,
        activateOnCompletion: () => !1,
        activateOnTypingDelay: 100,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: Ew,
        filterStrict: !1,
        compareCompletions: (e, t) => e.label.localeCompare(t.label),
        interactionDelay: 75,
        updateSyncTime: 100,
      },
      {
        defaultKeymap: (e, t) => e && t,
        closeOnBlur: (e, t) => e && t,
        icons: (e, t) => e && t,
        tooltipClass: (e, t) => (n) => Bu(e(n), t(n)),
        optionClass: (e, t) => (n) => Bu(e(n), t(n)),
        addToOptions: (e, t) => e.concat(t),
        filterStrict: (e, t) => e || t,
      }
    );
  },
});
function Bu(i, e) {
  return i ? (e ? i + " " + e : i) : e;
}
function Ew(i, e, t, n, s, r) {
  let o = i.textDirection == Se.RTL,
    l = o,
    a = !1,
    h = "top",
    c,
    f,
    u = e.left - s.left,
    d = s.right - e.right,
    p = n.right - n.left,
    O = n.bottom - n.top;
  if (
    (l && u < Math.min(p, d) ? (l = !1) : !l && d < Math.min(p, u) && (l = !0),
    p <= (l ? u : d))
  )
    (c = Math.max(s.top, Math.min(t.top, s.bottom - O)) - e.top),
      (f = Math.min(400, l ? u : d));
  else {
    (a = !0), (f = Math.min(400, (o ? e.right : s.right - e.left) - 30));
    let S = s.bottom - e.bottom;
    S >= O || S > e.top
      ? (c = t.bottom - e.top)
      : ((h = "bottom"), (c = e.bottom - t.top));
  }
  let m = (e.bottom - e.top) / r.offsetHeight,
    b = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / m}px; max-width: ${f / b}px`,
    class:
      "cm-completionInfo-" +
      (a ? (o ? "left-narrow" : "right-narrow") : l ? "left" : "right"),
  };
}
function Ww(i) {
  let e = i.addToOptions.slice();
  return (
    i.icons &&
      e.push({
        render(t) {
          let n = document.createElement("div");
          return (
            n.classList.add("cm-completionIcon"),
            t.type &&
              n.classList.add(
                ...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)
              ),
            n.setAttribute("aria-hidden", "true"),
            n
          );
        },
        position: 20,
      }),
    e.push(
      {
        render(t, n, s, r) {
          let o = document.createElement("span");
          o.className = "cm-completionLabel";
          let l = t.displayLabel || t.label,
            a = 0;
          for (let h = 0; h < r.length; ) {
            let c = r[h++],
              f = r[h++];
            c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
            let u = o.appendChild(document.createElement("span"));
            u.appendChild(document.createTextNode(l.slice(c, f))),
              (u.className = "cm-completionMatchedText"),
              (a = f);
          }
          return (
            a < l.length && o.appendChild(document.createTextNode(l.slice(a))),
            o
          );
        },
        position: 50,
      },
      {
        render(t) {
          if (!t.detail) return null;
          let n = document.createElement("span");
          return (
            (n.className = "cm-completionDetail"), (n.textContent = t.detail), n
          );
        },
        position: 80,
      }
    ),
    e.sort((t, n) => t.position - n.position).map((t) => t.render)
  );
}
function ua(i, e, t) {
  if (i <= t) return { from: 0, to: i };
  if ((e < 0 && (e = 0), e <= i >> 1)) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let n = Math.floor((i - e) / t);
  return { from: i - (n + 1) * t, to: i - n * t };
}
class Xw {
  constructor(e, t, n) {
    (this.view = e),
      (this.stateField = t),
      (this.applyCompletion = n),
      (this.info = null),
      (this.infoDestroy = null),
      (this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (a) => this.placeInfo(a),
        key: this,
      }),
      (this.space = null),
      (this.currentClass = "");
    let s = e.state.field(t),
      { options: r, selected: o } = s.open,
      l = e.state.facet(Ne);
    (this.optionContent = Ww(l)),
      (this.optionClass = l.optionClass),
      (this.tooltipClass = l.tooltipClass),
      (this.range = ua(r.length, o, l.maxRenderedOptions)),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-tooltip-autocomplete"),
      this.updateTooltipClass(e.state),
      this.dom.addEventListener("mousedown", (a) => {
        let { options: h } = e.state.field(t).open;
        for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
          if (
            c.nodeName == "LI" &&
            (f = /-(\d+)$/.exec(c.id)) &&
            +f[1] < h.length
          ) {
            this.applyCompletion(e, h[+f[1]]), a.preventDefault();
            return;
          }
      }),
      this.dom.addEventListener("focusout", (a) => {
        let h = e.state.field(this.stateField, !1);
        h &&
          h.tooltip &&
          e.state.facet(Ne).closeOnBlur &&
          a.relatedTarget != e.contentDOM &&
          e.dispatch({ effects: ir.of(null) });
      }),
      this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(),
      (this.list = this.dom.appendChild(this.createListBox(e, t, this.range))),
      this.list.addEventListener("scroll", () => {
        this.info && this.view.requestMeasure(this.placeInfoReq);
      });
  }
  update(e) {
    var t;
    let n = e.state.field(this.stateField),
      s = e.startState.field(this.stateField);
    if ((this.updateTooltipClass(e.state), n != s)) {
      let { options: r, selected: o, disabled: l } = n.open;
      (!s.open || s.open.options != r) &&
        ((this.range = ua(r.length, o, e.state.facet(Ne).maxRenderedOptions)),
        this.showOptions(r, n.id)),
        this.updateSel(),
        l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) &&
          this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let n of this.currentClass.split(" "))
        n && this.dom.classList.remove(n);
      for (let n of t.split(" ")) n && this.dom.classList.add(n);
      this.currentClass = t;
    }
  }
  positioned(e) {
    (this.space = e), this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      t = e.open;
    if (
      (((t.selected > -1 && t.selected < this.range.from) ||
        t.selected >= this.range.to) &&
        ((this.range = ua(
          t.options.length,
          t.selected,
          this.view.state.facet(Ne).maxRenderedOptions
        )),
        this.showOptions(t.options, e.id)),
      this.updateSelectedOption(t.selected))
    ) {
      this.destroyInfo();
      let { completion: n } = t.options[t.selected],
        { info: s } = n;
      if (!s) return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(n);
      if (!r) return;
      "then" in r
        ? r
            .then((o) => {
              o &&
                this.view.state.field(this.stateField, !1) == e &&
                this.addInfoPane(o, n);
            })
            .catch((o) => dt(this.view.state, o, "completion info"))
        : this.addInfoPane(r, n);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let n = (this.info = document.createElement("div"));
    if (((n.className = "cm-tooltip cm-completionInfo"), e.nodeType != null))
      n.appendChild(e), (this.infoDestroy = null);
    else {
      let { dom: s, destroy: r } = e;
      n.appendChild(s), (this.infoDestroy = r || null);
    }
    this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (
      let n = this.list.firstChild, s = this.range.from;
      n;
      n = n.nextSibling, s++
    )
      n.nodeName != "LI" || !n.id
        ? s--
        : s == e
        ? n.hasAttribute("aria-selected") ||
          (n.setAttribute("aria-selected", "true"), (t = n))
        : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected");
    return t && Yw(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(),
      n = this.info.getBoundingClientRect(),
      s = e.getBoundingClientRect(),
      r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.defaultView || window;
      r = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 ||
      s.bottom < Math.max(r.top, t.top) + 10
      ? null
      : this.view.state.facet(Ne).positionInfo(this.view, t, s, n, r, this.dom);
  }
  placeInfo(e) {
    this.info &&
      (e
        ? (e.style && (this.info.style.cssText = e.style),
          (this.info.className =
            "cm-tooltip cm-completionInfo " + (e.class || "")))
        : (this.info.style.cssText = "top: -1e6px"));
  }
  createListBox(e, t, n) {
    const s = document.createElement("ul");
    (s.id = t),
      s.setAttribute("role", "listbox"),
      s.setAttribute("aria-expanded", "true"),
      s.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let r = null;
    for (let o = n.from; o < n.to; o++) {
      let { completion: l, match: a } = e[o],
        { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > n.from || n.from == 0))
          if (((r = u), typeof h != "string" && h.header))
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      (c.id = t + "-" + o), c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return (
      n.from && s.classList.add("cm-completionListIncompleteTop"),
      n.to < e.length && s.classList.add("cm-completionListIncompleteBottom"),
      s
    );
  }
  destroyInfo() {
    this.info &&
      (this.infoDestroy && this.infoDestroy(),
      this.info.remove(),
      (this.info = null));
  }
  destroy() {
    this.destroyInfo();
  }
}
function Dw(i, e) {
  return (t) => new Xw(t, i, e);
}
function Yw(i, e) {
  let t = i.getBoundingClientRect(),
    n = e.getBoundingClientRect(),
    s = t.height / i.offsetHeight;
  n.top < t.top
    ? (i.scrollTop -= (t.top - n.top) / s)
    : n.bottom > t.bottom && (i.scrollTop += (n.bottom - t.bottom) / s);
}
function Gu(i) {
  return (
    (i.boost || 0) * 100 +
    (i.apply ? 10 : 0) +
    (i.info ? 5 : 0) +
    (i.type ? 1 : 0)
  );
}
function jw(i, e) {
  let t = [],
    n = null,
    s = (h) => {
      t.push(h);
      let { section: c } = h.completion;
      if (c) {
        n || (n = []);
        let f = typeof c == "string" ? c : c.name;
        n.some((u) => u.name == f) ||
          n.push(typeof c == "string" ? { name: f } : c);
      }
    },
    r = e.facet(Ne);
  for (let h of i)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === !1)
        for (let f of h.result.options)
          s(new Iu(f, h.source, c ? c(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(h.from, h.to),
          u,
          d = r.filterStrict ? new _w(f) : new Mw(f);
        for (let p of h.result.options)
          if ((u = d.match(p.label))) {
            let O = p.displayLabel ? (c ? c(p, u.matched) : []) : u.matched;
            s(new Iu(p, h.source, O, u.score + (p.boost || 0)));
          }
      }
    }
  if (n) {
    let h = Object.create(null),
      c = 0,
      f = (u, d) => {
        var p, O;
        return (
          ((p = u.rank) !== null && p !== void 0 ? p : 1e9) -
            ((O = d.rank) !== null && O !== void 0 ? O : 1e9) ||
          (u.name < d.name ? -1 : 1)
        );
      };
    for (let u of n.sort(f)) (c -= 1e5), (h[u.name] = c);
    for (let u of t) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [],
    l = null,
    a = r.compareCompletions;
  for (let h of t.sort(
    (c, f) => f.score - c.score || a(c.completion, f.completion)
  )) {
    let c = h.completion;
    !l ||
    l.label != c.label ||
    l.detail != c.detail ||
    (l.type != null && c.type != null && l.type != c.type) ||
    l.apply != c.apply ||
    l.boost != c.boost
      ? o.push(h)
      : Gu(h.completion) > Gu(l) && (o[o.length - 1] = h),
      (l = h.completion);
  }
  return o;
}
class Zn {
  constructor(e, t, n, s, r, o) {
    (this.options = e),
      (this.attrs = t),
      (this.tooltip = n),
      (this.timestamp = s),
      (this.selected = r),
      (this.disabled = o);
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length
      ? this
      : new Zn(
          this.options,
          Fu(t, e),
          this.tooltip,
          this.timestamp,
          e,
          this.disabled
        );
  }
  static build(e, t, n, s, r) {
    let o = jw(e, t);
    if (!o.length)
      return s && e.some((a) => a.state == 1)
        ? new Zn(s.options, s.attrs, s.tooltip, s.timestamp, s.selected, !0)
        : null;
    let l = t.facet(Ne).selectOnOpen ? 0 : -1;
    if (s && s.selected != l && s.selected != -1) {
      let a = s.options[s.selected].completion;
      for (let h = 0; h < o.length; h++)
        if (o[h].completion == a) {
          l = h;
          break;
        }
    }
    return new Zn(
      o,
      Fu(n, l),
      {
        pos: e.reduce((a, h) => (h.hasResult() ? Math.min(a, h.from) : a), 1e8),
        create: Iw,
        above: r.aboveCursor,
      },
      s ? s.timestamp : Date.now(),
      l,
      !1
    );
  }
  map(e) {
    return new Zn(
      this.options,
      this.attrs,
      Object.assign(Object.assign({}, this.tooltip), {
        pos: e.mapPos(this.tooltip.pos),
      }),
      this.timestamp,
      this.selected,
      this.disabled
    );
  }
}
class qo {
  constructor(e, t, n) {
    (this.active = e), (this.id = t), (this.open = n);
  }
  static start() {
    return new qo(
      qw,
      "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36),
      null
    );
  }
  update(e) {
    let { state: t } = e,
      n = t.facet(Ne),
      r = (n.override || t.languageDataAt("autocomplete", Di(t)).map(Aw)).map(
        (l) =>
          (
            this.active.find((h) => h.source == l) ||
            new lt(l, this.active.some((h) => h.state != 0) ? 1 : 0)
          ).update(e, n)
      );
    r.length == this.active.length &&
      r.every((l, a) => l == this.active[a]) &&
      (r = this.active);
    let o = this.open;
    o && e.docChanged && (o = o.map(e.changes)),
      e.selection ||
      r.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) ||
      !Lw(r, this.active)
        ? (o = Zn.build(r, t, this.id, o, n))
        : o && o.disabled && !r.some((l) => l.state == 1) && (o = null),
      !o &&
        r.every((l) => l.state != 1) &&
        r.some((l) => l.hasResult()) &&
        (r = r.map((l) => (l.hasResult() ? new lt(l.source, 0) : l)));
    for (let l of e.effects)
      l.is(Bg) && (o = o && o.setSelected(l.value, this.id));
    return r == this.active && o == this.open ? this : new qo(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Uw : Vw;
  }
}
function Lw(i, e) {
  if (i == e) return !0;
  for (let t = 0, n = 0; ; ) {
    for (; t < i.length && !i[t].hasResult; ) t++;
    for (; n < e.length && !e[n].hasResult; ) n++;
    let s = t == i.length,
      r = n == e.length;
    if (s || r) return s == r;
    if (i[t++].result != e[n++].result) return !1;
  }
}
const Uw = { "aria-autocomplete": "list" },
  Vw = {};
function Fu(i, e) {
  let t = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": i,
  };
  return e > -1 && (t["aria-activedescendant"] = i + "-" + e), t;
}
const qw = [];
function kh(i, e) {
  if (i.isUserEvent("input.complete")) {
    let t = i.annotation(Cc);
    if (t && e.activateOnCompletion(t)) return "input";
  }
  return i.isUserEvent("input.type")
    ? "input"
    : i.isUserEvent("delete.backward")
    ? "delete"
    : null;
}
class lt {
  constructor(e, t, n = -1) {
    (this.source = e), (this.state = t), (this.explicitPos = n);
  }
  hasResult() {
    return !1;
  }
  update(e, t) {
    let n = kh(e, t),
      s = this;
    n
      ? (s = s.handleUserEvent(e, n, t))
      : e.docChanged
      ? (s = s.handleChange(e))
      : e.selection && s.state != 0 && (s = new lt(s.source, 0));
    for (let r of e.effects)
      if (r.is(Vo)) s = new lt(s.source, 1, r.value ? Di(e.state) : -1);
      else if (r.is(ir)) s = new lt(s.source, 0);
      else if (r.is(Ng)) for (let o of r.value) o.source == s.source && (s = o);
    return s;
  }
  handleUserEvent(e, t, n) {
    return t == "delete" || !n.activateOnTyping
      ? this.map(e.changes)
      : new lt(this.source, 1);
  }
  handleChange(e) {
    return e.changes.touchesRange(Di(e.startState))
      ? new lt(this.source, 0)
      : this.map(e.changes);
  }
  map(e) {
    return e.empty || this.explicitPos < 0
      ? this
      : new lt(this.source, this.state, e.mapPos(this.explicitPos));
  }
}
class Yn extends lt {
  constructor(e, t, n, s, r) {
    super(e, 2, t), (this.result = n), (this.from = s), (this.to = r);
  }
  hasResult() {
    return !0;
  }
  handleUserEvent(e, t, n) {
    var s;
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let o = e.changes.mapPos(this.from),
      l = e.changes.mapPos(this.to, 1),
      a = Di(e.state);
    if (
      (this.explicitPos < 0 ? a <= o : a < this.from) ||
      a > l ||
      !r ||
      (t == "delete" && Di(e.startState) == this.from)
    )
      return new lt(this.source, t == "input" && n.activateOnTyping ? 1 : 0);
    let h = this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos);
    return zw(r.validFor, e.state, o, l)
      ? new Yn(this.source, h, r, o, l)
      : r.update && (r = r.update(r, o, l, new qg(e.state, a, h >= 0)))
      ? new Yn(
          this.source,
          h,
          r,
          r.from,
          (s = r.to) !== null && s !== void 0 ? s : Di(e.state)
        )
      : new lt(this.source, 1, h);
  }
  handleChange(e) {
    return e.changes.touchesRange(this.from, this.to)
      ? new lt(this.source, 0)
      : this.map(e.changes);
  }
  map(e) {
    return e.empty
      ? this
      : (this.result.map ? this.result.map(this.result, e) : this.result)
      ? new Yn(
          this.source,
          this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
          this.result,
          e.mapPos(this.from),
          e.mapPos(this.to, 1)
        )
      : new lt(this.source, 0);
  }
}
function zw(i, e, t, n) {
  if (!i) return !1;
  let s = e.sliceDoc(t, n);
  return typeof i == "function" ? i(s, t, n, e) : Ig(i, !0).test(s);
}
const Ng = ee.define({
    map(i, e) {
      return i.map((t) => t.map(e));
    },
  }),
  Bg = ee.define(),
  ut = Le.define({
    create() {
      return qo.start();
    },
    update(i, e) {
      return i.update(e);
    },
    provide: (i) => [
      Sc.from(i, (e) => e.tooltip),
      q.contentAttributes.from(i, (e) => e.attrs),
    ],
  });
function Zc(i, e) {
  const t = e.completion.apply || e.completion.label;
  let n = i.state.field(ut).active.find((s) => s.source == e.source);
  return n instanceof Yn
    ? (typeof t == "string"
        ? i.dispatch(
            Object.assign(Object.assign({}, Tw(i.state, t, n.from, n.to)), {
              annotations: Cc.of(e.completion),
            })
          )
        : t(i, e.completion, n.from, n.to),
      !0)
    : !1;
}
const Iw = Dw(ut, Zc);
function Br(i, e = "option") {
  return (t) => {
    let n = t.state.field(ut, !1);
    if (
      !n ||
      !n.open ||
      n.open.disabled ||
      Date.now() - n.open.timestamp < t.state.facet(Ne).interactionDelay
    )
      return !1;
    let s = 1,
      r;
    e == "page" &&
      (r = Sg(t, n.open.tooltip)) &&
      (s = Math.max(
        2,
        Math.floor(
          r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight
        ) - 1
      ));
    let { length: o } = n.open.options,
      l =
        n.open.selected > -1
          ? n.open.selected + s * (i ? 1 : -1)
          : i
          ? 0
          : o - 1;
    return (
      l < 0
        ? (l = e == "page" ? 0 : o - 1)
        : l >= o && (l = e == "page" ? o - 1 : 0),
      t.dispatch({ effects: Bg.of(l) }),
      !0
    );
  };
}
const Nw = (i) => {
    let e = i.state.field(ut, !1);
    return i.state.readOnly ||
      !e ||
      !e.open ||
      e.open.selected < 0 ||
      e.open.disabled ||
      Date.now() - e.open.timestamp < i.state.facet(Ne).interactionDelay
      ? !1
      : Zc(i, e.open.options[e.open.selected]);
  },
  Bw = (i) =>
    i.state.field(ut, !1) ? (i.dispatch({ effects: Vo.of(!0) }), !0) : !1,
  Gw = (i) => {
    let e = i.state.field(ut, !1);
    return !e || !e.active.some((t) => t.state != 0)
      ? !1
      : (i.dispatch({ effects: ir.of(null) }), !0);
  };
class Fw {
  constructor(e, t) {
    (this.active = e),
      (this.context = t),
      (this.time = Date.now()),
      (this.updates = []),
      (this.done = void 0);
  }
}
const Hw = 50,
  Kw = 1e3,
  Jw = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i),
          (this.debounceUpdate = -1),
          (this.running = []),
          (this.debounceAccept = -1),
          (this.pendingStart = !1),
          (this.composing = 0);
        for (let e of i.state.field(ut).active)
          e.state == 1 && this.startQuery(e);
      }
      update(i) {
        let e = i.state.field(ut),
          t = i.state.facet(Ne);
        if (!i.selectionSet && !i.docChanged && i.startState.field(ut) == e)
          return;
        let n = i.transactions.some(
          (r) => (r.selection || r.docChanged) && !kh(r, t)
        );
        for (let r = 0; r < this.running.length; r++) {
          let o = this.running[r];
          if (
            n ||
            (o.updates.length + i.transactions.length > Hw &&
              Date.now() - o.time > Kw)
          ) {
            for (let l of o.context.abortListeners)
              try {
                l();
              } catch (a) {
                dt(this.view.state, a);
              }
            (o.context.abortListeners = null), this.running.splice(r--, 1);
          } else o.updates.push(...i.transactions);
        }
        this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
          i.transactions.some((r) => r.effects.some((o) => o.is(Vo))) &&
            (this.pendingStart = !0);
        let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
        if (
          ((this.debounceUpdate = e.active.some(
            (r) =>
              r.state == 1 &&
              !this.running.some((o) => o.active.source == r.source)
          )
            ? setTimeout(() => this.startUpdate(), s)
            : -1),
          this.composing != 0)
        )
          for (let r of i.transactions)
            kh(r, t) == "input"
              ? (this.composing = 2)
              : this.composing == 2 && r.selection && (this.composing = 3);
      }
      startUpdate() {
        (this.debounceUpdate = -1), (this.pendingStart = !1);
        let { state: i } = this.view,
          e = i.field(ut);
        for (let t of e.active)
          t.state == 1 &&
            !this.running.some((n) => n.active.source == t.source) &&
            this.startQuery(t);
      }
      startQuery(i) {
        let { state: e } = this.view,
          t = Di(e),
          n = new qg(e, t, i.explicitPos == t),
          s = new Fw(i, n);
        this.running.push(s),
          Promise.resolve(i.source(n)).then(
            (r) => {
              s.context.aborted ||
                ((s.done = r || null), this.scheduleAccept());
            },
            (r) => {
              this.view.dispatch({ effects: ir.of(null) }),
                dt(this.view.state, r);
            }
          );
      }
      scheduleAccept() {
        this.running.every((i) => i.done !== void 0)
          ? this.accept()
          : this.debounceAccept < 0 &&
            (this.debounceAccept = setTimeout(
              () => this.accept(),
              this.view.state.facet(Ne).updateSyncTime
            ));
      }
      accept() {
        var i;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept),
          (this.debounceAccept = -1);
        let e = [],
          t = this.view.state.facet(Ne);
        for (let n = 0; n < this.running.length; n++) {
          let s = this.running[n];
          if (s.done === void 0) continue;
          if ((this.running.splice(n--, 1), s.done)) {
            let o = new Yn(
              s.active.source,
              s.active.explicitPos,
              s.done,
              s.done.from,
              (i = s.done.to) !== null && i !== void 0
                ? i
                : Di(
                    s.updates.length ? s.updates[0].startState : this.view.state
                  )
            );
            for (let l of s.updates) o = o.update(l, t);
            if (o.hasResult()) {
              e.push(o);
              continue;
            }
          }
          let r = this.view.state
            .field(ut)
            .active.find((o) => o.source == s.active.source);
          if (r && r.state == 1)
            if (s.done == null) {
              let o = new lt(s.active.source, 0);
              for (let l of s.updates) o = o.update(l, t);
              o.state != 1 && e.push(o);
            } else this.startQuery(r);
        }
        e.length && this.view.dispatch({ effects: Ng.of(e) });
      }
    },
    {
      eventHandlers: {
        blur(i) {
          let e = this.view.state.field(ut, !1);
          if (e && e.tooltip && this.view.state.facet(Ne).closeOnBlur) {
            let t = e.open && Sg(this.view, e.open.tooltip);
            (!t || !t.dom.contains(i.relatedTarget)) &&
              setTimeout(
                () => this.view.dispatch({ effects: ir.of(null) }),
                10
              );
          }
        },
        compositionstart() {
          this.composing = 1;
        },
        compositionend() {
          this.composing == 3 &&
            setTimeout(() => this.view.dispatch({ effects: Vo.of(!1) }), 20),
            (this.composing = 0);
        },
      },
    }
  ),
  eQ = typeof navigator == "object" && /Win/.test(navigator.platform),
  tQ = Hi.highest(
    q.domEventHandlers({
      keydown(i, e) {
        let t = e.state.field(ut, !1);
        if (
          !t ||
          !t.open ||
          t.open.disabled ||
          t.open.selected < 0 ||
          i.key.length > 1 ||
          (i.ctrlKey && !(eQ && i.altKey)) ||
          i.metaKey
        )
          return !1;
        let n = t.open.options[t.open.selected],
          s = t.active.find((o) => o.source == n.source),
          r = n.completion.commitCharacters || s.result.commitCharacters;
        return r && r.indexOf(i.key) > -1 && Zc(e, n), !1;
      },
    })
  ),
  Gg = q.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: "1px 3px",
          lineHeight: 1.2,
        },
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
        },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7,
        },
      },
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white",
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#777",
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white",
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#444",
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":
      { content: '"···"', opacity: 0.5, display: "block", textAlign: "center" },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
    },
    ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
    ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
    ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
    ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
    "&light .cm-snippetField": { backgroundColor: "#00000022" },
    "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888",
    },
    ".cm-completionMatchedText": { textDecoration: "underline" },
    ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box",
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": { content: "'ƒ'" },
    },
    ".cm-completionIcon-class": { "&:after": { content: "'○'" } },
    ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
    ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
    ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
    ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
    ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
    ".cm-completionIcon-property": { "&:after": { content: "'□'" } },
    ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
    ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
    ".cm-completionIcon-text": {
      "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" },
    },
  });
class iQ {
  constructor(e, t, n, s) {
    (this.field = e), (this.line = t), (this.from = n), (this.to = s);
  }
}
class Rc {
  constructor(e, t, n) {
    (this.field = e), (this.from = t), (this.to = n);
  }
  map(e) {
    let t = e.mapPos(this.from, -1, Ie.TrackDel),
      n = e.mapPos(this.to, 1, Ie.TrackDel);
    return t == null || n == null ? null : new Rc(this.field, t, n);
  }
}
class Tc {
  constructor(e, t) {
    (this.lines = e), (this.fieldPositions = t);
  }
  instantiate(e, t) {
    let n = [],
      s = [t],
      r = e.doc.lineAt(t),
      o = /^\s*/.exec(r.text)[0];
    for (let a of this.lines) {
      if (n.length) {
        let h = o,
          c = /^\t*/.exec(a)[0].length;
        for (let f = 0; f < c; f++) h += e.facet(Ql);
        s.push(t + h.length - c), (a = h + a.slice(c));
      }
      n.push(a), (t += a.length + 1);
    }
    let l = this.fieldPositions.map(
      (a) => new Rc(a.field, s[a.line] + a.from, s[a.line] + a.to)
    );
    return { text: n, ranges: l };
  }
  static parse(e) {
    let t = [],
      n = [],
      s = [],
      r;
    for (let o of e.split(/\r\n?|\n/)) {
      for (
        ;
        (r = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o));

      ) {
        let l = r[1] ? +r[1] : null,
          a = r[2] || r[3] || "",
          h = -1,
          c = a.replace(/\\[{}]/g, (f) => f[1]);
        for (let f = 0; f < t.length; f++)
          (l != null ? t[f].seq == l : c && t[f].name == c) && (h = f);
        if (h < 0) {
          let f = 0;
          for (
            ;
            f < t.length && (l == null || (t[f].seq != null && t[f].seq < l));

          )
            f++;
          t.splice(f, 0, { seq: l, name: c }), (h = f);
          for (let u of s) u.field >= h && u.field++;
        }
        s.push(new iQ(h, n.length, r.index, r.index + c.length)),
          (o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length));
      }
      (o = o.replace(/\\([{}])/g, (l, a, h) => {
        for (let c of s) c.line == n.length && c.from > h && (c.from--, c.to--);
        return a;
      })),
        n.push(o);
    }
    return new Tc(n, s);
  }
}
let nQ = N.widget({
    widget: new (class extends xi {
      toDOM() {
        let i = document.createElement("span");
        return (i.className = "cm-snippetFieldPosition"), i;
      }
      ignoreEvent() {
        return !1;
      }
    })(),
  }),
  sQ = N.mark({ class: "cm-snippetField" });
class Jn {
  constructor(e, t) {
    (this.ranges = e),
      (this.active = t),
      (this.deco = N.set(
        e.map((n) => (n.from == n.to ? nQ : sQ).range(n.from, n.to))
      ));
  }
  map(e) {
    let t = [];
    for (let n of this.ranges) {
      let s = n.map(e);
      if (!s) return null;
      t.push(s);
    }
    return new Jn(t, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every((t) =>
      this.ranges.some(
        (n) => n.field == this.active && n.from <= t.from && n.to >= t.to
      )
    );
  }
}
const xr = ee.define({
    map(i, e) {
      return i && i.map(e);
    },
  }),
  rQ = ee.define(),
  nr = Le.define({
    create() {
      return null;
    },
    update(i, e) {
      for (let t of e.effects) {
        if (t.is(xr)) return t.value;
        if (t.is(rQ) && i) return new Jn(i.ranges, t.value);
      }
      return (
        i && e.docChanged && (i = i.map(e.changes)),
        i && e.selection && !i.selectionInsideField(e.selection) && (i = null),
        i
      );
    },
    provide: (i) => q.decorations.from(i, (e) => (e ? e.deco : N.none)),
  });
function Ac(i, e) {
  return v.create(
    i.filter((t) => t.field == e).map((t) => v.range(t.from, t.to))
  );
}
function oQ(i) {
  let e = Tc.parse(i);
  return (t, n, s, r) => {
    let { text: o, ranges: l } = e.instantiate(t.state, s),
      a = {
        changes: { from: s, to: r, insert: he.of(o) },
        scrollIntoView: !0,
        annotations: n ? [Cc.of(n), Ae.userEvent.of("input.complete")] : void 0,
      };
    if ((l.length && (a.selection = Ac(l, 0)), l.some((h) => h.field > 0))) {
      let h = new Jn(l, 0),
        c = (a.effects = [xr.of(h)]);
      t.state.field(nr, !1) === void 0 &&
        c.push(ee.appendConfig.of([nr, fQ, uQ, Gg]));
    }
    t.dispatch(t.state.update(a));
  };
}
function Fg(i) {
  return ({ state: e, dispatch: t }) => {
    let n = e.field(nr, !1);
    if (!n || (i < 0 && n.active == 0)) return !1;
    let s = n.active + i,
      r = i > 0 && !n.ranges.some((o) => o.field == s + i);
    return (
      t(
        e.update({
          selection: Ac(n.ranges, s),
          effects: xr.of(r ? null : new Jn(n.ranges, s)),
          scrollIntoView: !0,
        })
      ),
      !0
    );
  };
}
const lQ = ({ state: i, dispatch: e }) =>
    i.field(nr, !1) ? (e(i.update({ effects: xr.of(null) })), !0) : !1,
  aQ = Fg(1),
  hQ = Fg(-1),
  cQ = [
    { key: "Tab", run: aQ, shift: hQ },
    { key: "Escape", run: lQ },
  ],
  Hu = z.define({
    combine(i) {
      return i.length ? i[0] : cQ;
    },
  }),
  fQ = Hi.highest(yc.compute([Hu], (i) => i.facet(Hu)));
function ct(i, e) {
  return Object.assign(Object.assign({}, e), { apply: oQ(i) });
}
const uQ = q.domEventHandlers({
    mousedown(i, e) {
      let t = e.state.field(nr, !1),
        n;
      if (!t || (n = e.posAtCoords({ x: i.clientX, y: i.clientY })) == null)
        return !1;
      let s = t.ranges.find((r) => r.from <= n && r.to >= n);
      return !s || s.field == t.active
        ? !1
        : (e.dispatch({
            selection: Ac(t.ranges, s.field),
            effects: xr.of(
              t.ranges.some((r) => r.field > s.field)
                ? new Jn(t.ranges, s.field)
                : null
            ),
            scrollIntoView: !0,
          }),
          !0);
    },
  }),
  sr = {
    brackets: ["(", "[", "{", "'", '"'],
    before: ")]}:;>",
    stringPrefixes: [],
  },
  hn = ee.define({
    map(i, e) {
      let t = e.mapPos(i, -1, Ie.TrackAfter);
      return eval('t ?? void 0');
    },
  }),
  Mc = new (class extends On {})();
Mc.startSide = 1;
Mc.endSide = -1;
const Hg = Le.define({
  create() {
    return ae.empty;
  },
  update(i, e) {
    if (((i = i.map(e.changes)), e.selection)) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      i = i.update({ filter: (n) => n >= t.from && n <= t.to });
    }
    for (let t of e.effects)
      t.is(hn) && (i = i.update({ add: [Mc.range(t.value, t.value + 1)] }));
    return i;
  },
});
function R$() {
  return [pQ, Hg];
}
const da = "()[]{}<>";
function Kg(i) {
  for (let e = 0; e < da.length; e += 2)
    if (da.charCodeAt(e) == i) return da.charAt(e + 1);
  return ac(i < 128 ? i : i + 1);
}
function Jg(i, e) {
  return i.languageDataAt("closeBrackets", e)[0] || sr;
}
const dQ =
    typeof navigator == "object" && /Android\b/.test(navigator.userAgent),
  pQ = q.inputHandler.of((i, e, t, n) => {
    if ((dQ ? i.composing : i.compositionStarted) || i.state.readOnly)
      return !1;
    let s = i.state.selection.main;
    if (
      n.length > 2 ||
      (n.length == 2 && $t(Ve(n, 0)) == 1) ||
      e != s.from ||
      t != s.to
    )
      return !1;
    let r = gQ(i.state, n);
    return r ? (i.dispatch(r), !0) : !1;
  }),
  OQ = ({ state: i, dispatch: e }) => {
    if (i.readOnly) return !1;
    let n = Jg(i, i.selection.main.head).brackets || sr.brackets,
      s = null,
      r = i.changeByRange((o) => {
        if (o.empty) {
          let l = mQ(i.doc, o.head);
          for (let a of n)
            if (a == l && $l(i.doc, o.head) == Kg(Ve(a, 0)))
              return {
                changes: { from: o.head - a.length, to: o.head + a.length },
                range: v.cursor(o.head - a.length),
              };
        }
        return { range: (s = o) };
      });
    return (
      s || e(i.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })),
      !s
    );
  },
  T$ = [{ key: "Backspace", run: OQ }];
function gQ(i, e) {
  let t = Jg(i, i.selection.main.head),
    n = t.brackets || sr.brackets;
  for (let s of n) {
    let r = Kg(Ve(s, 0));
    if (e == s)
      return r == s
        ? xQ(i, s, n.indexOf(s + s + s) > -1, t)
        : bQ(i, s, r, t.before || sr.before);
    if (e == r && em(i, i.selection.main.from)) return yQ(i, s, r);
  }
  return null;
}
function em(i, e) {
  let t = !1;
  return (
    i.field(Hg).between(0, i.doc.length, (n) => {
      n == e && (t = !0);
    }),
    t
  );
}
function $l(i, e) {
  let t = i.sliceString(e, e + 2);
  return t.slice(0, $t(Ve(t, 0)));
}
function mQ(i, e) {
  let t = i.sliceString(e - 2, e);
  return $t(Ve(t, 0)) == t.length ? t : t.slice(1);
}
function bQ(i, e, t, n) {
  let s = null,
    r = i.changeByRange((o) => {
      if (!o.empty)
        return {
          changes: [
            { insert: e, from: o.from },
            { insert: t, from: o.to },
          ],
          effects: hn.of(o.to + e.length),
          range: v.range(o.anchor + e.length, o.head + e.length),
        };
      let l = $l(i.doc, o.head);
      return !l || /\s/.test(l) || n.indexOf(l) > -1
        ? {
            changes: { insert: e + t, from: o.head },
            effects: hn.of(o.head + e.length),
            range: v.cursor(o.head + e.length),
          }
        : { range: (s = o) };
    });
  return s
    ? null
    : i.update(r, { scrollIntoView: !0, userEvent: "input.type" });
}
function yQ(i, e, t) {
  let n = null,
    s = i.changeByRange((r) =>
      r.empty && $l(i.doc, r.head) == t
        ? {
            changes: { from: r.head, to: r.head + t.length, insert: t },
            range: v.cursor(r.head + t.length),
          }
        : (n = { range: r })
    );
  return n
    ? null
    : i.update(s, { scrollIntoView: !0, userEvent: "input.type" });
}
function xQ(i, e, t, n) {
  let s = n.stringPrefixes || sr.stringPrefixes,
    r = null,
    o = i.changeByRange((l) => {
      if (!l.empty)
        return {
          changes: [
            { insert: e, from: l.from },
            { insert: e, from: l.to },
          ],
          effects: hn.of(l.to + e.length),
          range: v.range(l.anchor + e.length, l.head + e.length),
        };
      let a = l.head,
        h = $l(i.doc, a),
        c;
      if (h == e) {
        if (Ku(i, a))
          return {
            changes: { insert: e + e, from: a },
            effects: hn.of(a + e.length),
            range: v.cursor(a + e.length),
          };
        if (em(i, a)) {
          let u =
            t && i.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
          return {
            changes: { from: a, to: a + u.length, insert: u },
            range: v.cursor(a + u.length),
          };
        }
      } else {
        if (
          t &&
          i.sliceDoc(a - 2 * e.length, a) == e + e &&
          (c = Ju(i, a - 2 * e.length, s)) > -1 &&
          Ku(i, c)
        )
          return {
            changes: { insert: e + e + e + e, from: a },
            effects: hn.of(a + e.length),
            range: v.cursor(a + e.length),
          };
        if (
          i.charCategorizer(a)(h) != Pe.Word &&
          Ju(i, a, s) > -1 &&
          !SQ(i, a, e, s)
        )
          return {
            changes: { insert: e + e, from: a },
            effects: hn.of(a + e.length),
            range: v.cursor(a + e.length),
          };
      }
      return { range: (r = l) };
    });
  return r
    ? null
    : i.update(o, { scrollIntoView: !0, userEvent: "input.type" });
}
function Ku(i, e) {
  let t = _e(i).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function SQ(i, e, t, n) {
  let s = _e(i).resolveInner(e, -1),
    r = n.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = i.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)),
      a = l.indexOf(t);
    if (!a || (a > -1 && n.indexOf(l.slice(0, a)) > -1)) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (i.sliceDoc(c.to - t.length, c.to) == t) return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = s.to == e && s.parent;
    if (!h) break;
    s = h;
  }
  return !1;
}
function Ju(i, e, t) {
  let n = i.charCategorizer(e);
  if (n(i.sliceDoc(e - 1, e)) != Pe.Word) return e;
  for (let s of t) {
    let r = e - s.length;
    if (i.sliceDoc(r, e) == s && n(i.sliceDoc(r - 1, r)) != Pe.Word) return r;
  }
  return -1;
}
function A$(i = {}) {
  return [tQ, ut, Ne.of(i), Jw, QQ, Gg];
}
const wQ = [
    { key: "Ctrl-Space", run: Bw },
    { key: "Escape", run: Gw },
    { key: "ArrowDown", run: Br(!0) },
    { key: "ArrowUp", run: Br(!1) },
    { key: "PageDown", run: Br(!0, "page") },
    { key: "PageUp", run: Br(!1, "page") },
    { key: "Enter", run: Nw },
  ],
  QQ = Hi.highest(
    yc.computeN([Ne], (i) => (i.facet(Ne).defaultKeymap ? [wQ] : []))
  ),
// END @codemirror/autocomplete


// BEGIN @codemirror/commands
  PQ = (i) => {
    let { state: e } = i,
      t = e.doc.lineAt(e.selection.main.from),
      n = Ec(i.state, t.from);
    return n.line ? kQ(i) : n.block ? $Q(i) : !1;
  };
function _c(i, e) {
  return ({ state: t, dispatch: n }) => {
    if (t.readOnly) return !1;
    let s = i(e, t);
    return s ? (n(t.update(s)), !0) : !1;
  };
}
const kQ = _c(RQ, 0),
  vQ = _c(tm, 0),
  $Q = _c((i, e) => tm(i, e, ZQ(e)), 0);
function Ec(i, e) {
  let t = i.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const us = 50;
function CQ(i, { open: e, close: t }, n, s) {
  let r = i.sliceDoc(n - us, n),
    o = i.sliceDoc(s, s + us),
    l = /\s*$/.exec(r)[0].length,
    a = /^\s*/.exec(o)[0].length,
    h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return {
      open: { pos: n - l, margin: l && 1 },
      close: { pos: s + a, margin: a && 1 },
    };
  let c, f;
  s - n <= 2 * us
    ? (c = f = i.sliceDoc(n, s))
    : ((c = i.sliceDoc(n, n + us)), (f = i.sliceDoc(s - us, s)));
  let u = /^\s*/.exec(c)[0].length,
    d = /\s*$/.exec(f)[0].length,
    p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t
    ? {
        open: {
          pos: n + u + e.length,
          margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0,
        },
        close: {
          pos: s - d - t.length,
          margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0,
        },
      }
    : null;
}
function ZQ(i) {
  let e = [];
  for (let t of i.selection.ranges) {
    let n = i.doc.lineAt(t.from),
      s = t.to <= n.to ? n : i.doc.lineAt(t.to),
      r = e.length - 1;
    r >= 0 && e[r].to > n.from
      ? (e[r].to = s.to)
      : e.push({ from: n.from + /^\s*/.exec(n.text)[0].length, to: s.to });
  }
  return e;
}
function tm(i, e, t = e.selection.ranges) {
  let n = t.map((r) => Ec(e, r.from).block);
  if (!n.every((r) => r)) return null;
  let s = t.map((r, o) => CQ(e, n[o], r.from, r.to));
  if (i != 2 && !s.every((r) => r))
    return {
      changes: e.changes(
        t.map((r, o) =>
          s[o]
            ? []
            : [
                { from: r.from, insert: n[o].open + " " },
                { from: r.to, insert: " " + n[o].close },
              ]
        )
      ),
    };
  if (i != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if ((l = s[o])) {
        let a = n[o],
          { open: h, close: c } = l;
        r.push(
          { from: h.pos - a.open.length, to: h.pos + h.margin },
          { from: c.pos - c.margin, to: c.pos + a.close.length }
        );
      }
    return { changes: r };
  }
  return null;
}
function RQ(i, e, t = e.selection.ranges) {
  let n = [],
    s = -1;
  for (let { from: r, to: o } of t) {
    let l = n.length,
      a = 1e9,
      h = Ec(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length,
            d = u == f.length,
            p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u),
            n.push({
              line: f,
              comment: p,
              token: h,
              indent: u,
              empty: d,
              single: !1,
            });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < n.length; c++)
          n[c].indent < n[c].line.text.length && (n[c].indent = a);
      n.length == l + 1 && (n[l].single = !0);
    }
  }
  if (i != 2 && n.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of n)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (i != 1 && n.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of n)
      if (l >= 0) {
        let h = o.from + l,
          c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const vh = yi.define(),
  TQ = yi.define(),
  AQ = z.define(),
  im = z.define({
    combine(i) {
      return ri(
        i,
        { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
        {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (e, t) => (n, s) => e(n, s) || t(n, s),
        }
      );
    },
  }),
  nm = Le.define({
    create() {
      return ii.empty;
    },
    update(i, e) {
      let t = e.state.facet(im),
        n = e.annotation(vh);
      if (n) {
        let a = pt.fromTransaction(e, n.selection),
          h = n.side,
          c = h == 0 ? i.undone : i.done;
        return (
          a
            ? (c = zo(c, c.length, t.minDepth, a))
            : (c = om(c, e.startState.selection)),
          new ii(h == 0 ? n.rest : c, h == 0 ? c : n.rest)
        );
      }
      let s = e.annotation(TQ);
      if (
        ((s == "full" || s == "before") && (i = i.isolate()),
        e.annotation(Ae.addToHistory) === !1)
      )
        return e.changes.empty ? i : i.addMapping(e.changes.desc);
      let r = pt.fromTransaction(e),
        o = e.annotation(Ae.time),
        l = e.annotation(Ae.userEvent);
      return (
        r
          ? (i = i.addChanges(r, o, l, t, e))
          : e.selection &&
            (i = i.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
        (s == "full" || s == "after") && (i = i.isolate()),
        i
      );
    },
    toJSON(i) {
      return {
        done: i.done.map((e) => e.toJSON()),
        undone: i.undone.map((e) => e.toJSON()),
      };
    },
    fromJSON(i) {
      return new ii(i.done.map(pt.fromJSON), i.undone.map(pt.fromJSON));
    },
  });
function M$(i = {}) {
  return [
    nm,
    im.of(i),
    q.domEventHandlers({
      beforeinput(e, t) {
        let n =
          e.inputType == "historyUndo"
            ? sm
            : e.inputType == "historyRedo"
            ? $h
            : null;
        return n ? (e.preventDefault(), n(t)) : !1;
      },
    }),
  ];
}
function Cl(i, e) {
  return function ({ state: t, dispatch: n }) {
    if (!e && t.readOnly) return !1;
    let s = t.field(nm, !1);
    if (!s) return !1;
    let r = s.pop(i, t, e);
    return r ? (n(r), !0) : !1;
  };
}
const sm = Cl(0, !1),
  $h = Cl(1, !1),
  MQ = Cl(0, !0),
  _Q = Cl(1, !0);
class pt {
  constructor(e, t, n, s, r) {
    (this.changes = e),
      (this.effects = t),
      (this.mapped = n),
      (this.startSelection = s),
      (this.selectionsAfter = r);
  }
  setSelAfter(e) {
    return new pt(
      this.changes,
      this.effects,
      this.mapped,
      this.startSelection,
      e
    );
  }
  toJSON() {
    var e, t, n;
    return {
      changes:
        (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection:
        (n = this.startSelection) === null || n === void 0
          ? void 0
          : n.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()),
    };
  }
  static fromJSON(e) {
    return new pt(
      e.changes && Xe.fromJSON(e.changes),
      [],
      e.mapped && ni.fromJSON(e.mapped),
      e.startSelection && v.fromJSON(e.startSelection),
      e.selectionsAfter.map(v.fromJSON)
    );
  }
  static fromTransaction(e, t) {
    let n = Ct;
    for (let s of e.startState.facet(AQ)) {
      let r = s(e);
      r.length && (n = n.concat(r));
    }
    return !n.length && e.changes.empty
      ? null
      : new pt(
          e.changes.invert(e.startState.doc),
          n,
          void 0,
          t || e.startState.selection,
          Ct
        );
  }
  static selection(e) {
    return new pt(void 0, Ct, void 0, void 0, e);
  }
}
function zo(i, e, t, n) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0,
    r = i.slice(s, e);
  return r.push(n), r;
}
function EQ(i, e) {
  let t = [],
    n = !1;
  return (
    i.iterChangedRanges((s, r) => t.push(s, r)),
    e.iterChangedRanges((s, r, o, l) => {
      for (let a = 0; a < t.length; ) {
        let h = t[a++],
          c = t[a++];
        l >= h && o <= c && (n = !0);
      }
    }),
    n
  );
}
function WQ(i, e) {
  return (
    i.ranges.length == e.ranges.length &&
    i.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length === 0
  );
}
function rm(i, e) {
  return i.length ? (e.length ? i.concat(e) : i) : e;
}
const Ct = [],
  XQ = 200;
function om(i, e) {
  if (i.length) {
    let t = i[i.length - 1],
      n = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - XQ));
    return n.length && n[n.length - 1].eq(e)
      ? i
      : (n.push(e), zo(i, i.length - 1, 1e9, t.setSelAfter(n)));
  } else return [pt.selection([e])];
}
function DQ(i) {
  let e = i[i.length - 1],
    t = i.slice();
  return (
    (t[i.length - 1] = e.setSelAfter(
      e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)
    )),
    t
  );
}
function pa(i, e) {
  if (!i.length) return i;
  let t = i.length,
    n = Ct;
  for (; t; ) {
    let s = YQ(i[t - 1], e, n);
    if ((s.changes && !s.changes.empty) || s.effects.length) {
      let r = i.slice(0, t);
      return (r[t - 1] = s), r;
    } else (e = s.mapped), t--, (n = s.selectionsAfter);
  }
  return n.length ? [pt.selection(n)] : Ct;
}
function YQ(i, e, t) {
  let n = rm(
    i.selectionsAfter.length ? i.selectionsAfter.map((l) => l.map(e)) : Ct,
    t
  );
  if (!i.changes) return pt.selection(n);
  let s = i.changes.map(e),
    r = e.mapDesc(i.changes, !0),
    o = i.mapped ? i.mapped.composeDesc(r) : r;
  return new pt(s, ee.mapEffects(i.effects, e), o, i.startSelection.map(r), n);
}
const jQ = /^(input\.type|delete)($|\.)/;
class ii {
  constructor(e, t, n = 0, s = void 0) {
    (this.done = e),
      (this.undone = t),
      (this.prevTime = n),
      (this.prevUserEvent = s);
  }
  isolate() {
    return this.prevTime ? new ii(this.done, this.undone) : this;
  }
  addChanges(e, t, n, s, r) {
    let o = this.done,
      l = o[o.length - 1];
    return (
      l &&
      l.changes &&
      !l.changes.empty &&
      e.changes &&
      (!n || jQ.test(n)) &&
      ((!l.selectionsAfter.length &&
        t - this.prevTime < s.newGroupDelay &&
        s.joinToEvent(r, EQ(l.changes, e.changes))) ||
        n == "input.type.compose")
        ? (o = zo(
            o,
            o.length - 1,
            s.minDepth,
            new pt(
              e.changes.compose(l.changes),
              rm(e.effects, l.effects),
              l.mapped,
              l.startSelection,
              Ct
            )
          ))
        : (o = zo(o, o.length, s.minDepth, e)),
      new ii(o, Ct, t, n)
    );
  }
  addSelection(e, t, n, s) {
    let r = this.done.length
      ? this.done[this.done.length - 1].selectionsAfter
      : Ct;
    return r.length > 0 &&
      t - this.prevTime < s &&
      n == this.prevUserEvent &&
      n &&
      /^select($|\.)/.test(n) &&
      WQ(r[r.length - 1], e)
      ? this
      : new ii(om(this.done, e), this.undone, t, n);
  }
  addMapping(e) {
    return new ii(
      pa(this.done, e),
      pa(this.undone, e),
      this.prevTime,
      this.prevUserEvent
    );
  }
  pop(e, t, n) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0) return null;
    let r = s[s.length - 1],
      o = r.selectionsAfter[0] || t.selection;
    if (n && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: vh.of({ side: e, rest: DQ(s), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0,
      });
    if (r.changes) {
      let l = s.length == 1 ? Ct : s.slice(0, s.length - 1);
      return (
        r.mapped && (l = pa(l, r.mapped)),
        t.update({
          changes: r.changes,
          selection: r.startSelection,
          effects: r.effects,
          annotations: vh.of({ side: e, rest: l, selection: o }),
          filter: !1,
          userEvent: e == 0 ? "undo" : "redo",
          scrollIntoView: !0,
        })
      );
    } else return null;
  }
}
ii.empty = new ii(Ct, Ct);
const _$ = [
  { key: "Mod-z", run: sm, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: $h, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: $h, preventDefault: !0 },
  { key: "Mod-u", run: MQ, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: _Q, preventDefault: !0 },
];
function es(i, e) {
  return v.create(i.ranges.map(e), i.mainIndex);
}
function oi(i, e) {
  return i.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Lt({ state: i, dispatch: e }, t) {
  let n = es(i.selection, t);
  return n.eq(i.selection, !0) ? !1 : (e(oi(i, n)), !0);
}
function Zl(i, e) {
  return v.cursor(e ? i.to : i.from);
}
function lm(i, e) {
  return Lt(i, (t) => (t.empty ? i.moveByChar(t, e) : Zl(t, e)));
}
function it(i) {
  return i.textDirectionAt(i.state.selection.main.head) == Se.LTR;
}
const am = (i) => lm(i, !it(i)),
  hm = (i) => lm(i, it(i));
function cm(i, e) {
  return Lt(i, (t) => (t.empty ? i.moveByGroup(t, e) : Zl(t, e)));
}
const LQ = (i) => cm(i, !it(i)),
  UQ = (i) => cm(i, it(i));
function VQ(i, e, t) {
  if (e.type.prop(t)) return !0;
  let n = e.to - e.from;
  return (
    (n && (n > 2 || /[^\s,.;:]/.test(i.sliceDoc(e.from, e.to)))) || e.firstChild
  );
}
function Rl(i, e, t) {
  let n = _e(i).resolveInner(e.head),
    s = t ? ne.closedBy : ne.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? n.childAfter(a) : n.childBefore(a);
    if (!h) break;
    VQ(i, h, s) ? (n = h) : (a = t ? h.to : h.from);
  }
  let r = n.type.prop(s),
    o,
    l;
  return (
    r && (o = t ? ti(i, n.from, 1) : ti(i, n.to, -1)) && o.matched
      ? (l = t ? o.end.to : o.end.from)
      : (l = t ? n.to : n.from),
    v.cursor(l, t ? -1 : 1)
  );
}
const qQ = (i) => Lt(i, (e) => Rl(i.state, e, !it(i))),
  zQ = (i) => Lt(i, (e) => Rl(i.state, e, it(i)));
function fm(i, e) {
  return Lt(i, (t) => {
    if (!t.empty) return Zl(t, e);
    let n = i.moveVertically(t, e);
    return n.head != t.head ? n : i.moveToLineBoundary(t, e);
  });
}
const um = (i) => fm(i, !1),
  dm = (i) => fm(i, !0);
function pm(i) {
  let e = i.scrollDOM.clientHeight < i.scrollDOM.scrollHeight - 2,
    t = 0,
    n = 0,
    s;
  if (e) {
    for (let r of i.state.facet(q.scrollMargins)) {
      let o = r(i);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)),
        o != null &&
          o.bottom &&
          (n = Math.max(o == null ? void 0 : o.bottom, n));
    }
    s = i.scrollDOM.clientHeight - t - n;
  } else s = (i.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: n,
    selfScroll: e,
    height: Math.max(i.defaultLineHeight, s - 5),
  };
}
function Om(i, e) {
  let t = pm(i),
    { state: n } = i,
    s = es(n.selection, (o) =>
      o.empty ? i.moveVertically(o, e, t.height) : Zl(o, e)
    );
  if (s.eq(n.selection)) return !1;
  let r;
  if (t.selfScroll) {
    let o = i.coordsAtPos(n.selection.main.head),
      l = i.scrollDOM.getBoundingClientRect(),
      a = l.top + t.marginTop,
      h = l.bottom - t.marginBottom;
    o &&
      o.top > a &&
      o.bottom < h &&
      (r = q.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return i.dispatch(oi(n, s), { effects: r }), !0;
}
const ed = (i) => Om(i, !1),
  Ch = (i) => Om(i, !0);
function Ki(i, e, t) {
  let n = i.lineBlockAt(e.head),
    s = i.moveToLineBoundary(e, t);
  if (
    (s.head == e.head &&
      s.head != (t ? n.to : n.from) &&
      (s = i.moveToLineBoundary(e, t, !1)),
    !t && s.head == n.from && n.length)
  ) {
    let r = /^\s*/.exec(
      i.state.sliceDoc(n.from, Math.min(n.from + 100, n.to))
    )[0].length;
    r && e.head != n.from + r && (s = v.cursor(n.from + r));
  }
  return s;
}
const IQ = (i) => Lt(i, (e) => Ki(i, e, !0)),
  NQ = (i) => Lt(i, (e) => Ki(i, e, !1)),
  BQ = (i) => Lt(i, (e) => Ki(i, e, !it(i))),
  GQ = (i) => Lt(i, (e) => Ki(i, e, it(i))),
  FQ = (i) => Lt(i, (e) => v.cursor(i.lineBlockAt(e.head).from, 1)),
  HQ = (i) => Lt(i, (e) => v.cursor(i.lineBlockAt(e.head).to, -1));
function KQ(i, e, t) {
  let n = !1,
    s = es(i.selection, (r) => {
      let o =
        ti(i, r.head, -1) ||
        ti(i, r.head, 1) ||
        (r.head > 0 && ti(i, r.head - 1, 1)) ||
        (r.head < i.doc.length && ti(i, r.head + 1, -1));
      if (!o || !o.end) return r;
      n = !0;
      let l = o.start.from == r.head ? o.end.to : o.end.from;
      return v.cursor(l);
    });
  return n ? (e(oi(i, s)), !0) : !1;
}
const JQ = ({ state: i, dispatch: e }) => KQ(i, e);
function Mt(i, e) {
  let t = es(i.state.selection, (n) => {
    let s = e(n);
    return v.range(n.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(i.state.selection) ? !1 : (i.dispatch(oi(i.state, t)), !0);
}
function gm(i, e) {
  return Mt(i, (t) => i.moveByChar(t, e));
}
const mm = (i) => gm(i, !it(i)),
  bm = (i) => gm(i, it(i));
function ym(i, e) {
  return Mt(i, (t) => i.moveByGroup(t, e));
}
const eP = (i) => ym(i, !it(i)),
  tP = (i) => ym(i, it(i)),
  iP = (i) => Mt(i, (e) => Rl(i.state, e, !it(i))),
  nP = (i) => Mt(i, (e) => Rl(i.state, e, it(i)));
function xm(i, e) {
  return Mt(i, (t) => i.moveVertically(t, e));
}
const Sm = (i) => xm(i, !1),
  wm = (i) => xm(i, !0);
function Qm(i, e) {
  return Mt(i, (t) => i.moveVertically(t, e, pm(i).height));
}
const td = (i) => Qm(i, !1),
  id = (i) => Qm(i, !0),
  sP = (i) => Mt(i, (e) => Ki(i, e, !0)),
  rP = (i) => Mt(i, (e) => Ki(i, e, !1)),
  oP = (i) => Mt(i, (e) => Ki(i, e, !it(i))),
  lP = (i) => Mt(i, (e) => Ki(i, e, it(i))),
  aP = (i) => Mt(i, (e) => v.cursor(i.lineBlockAt(e.head).from)),
  hP = (i) => Mt(i, (e) => v.cursor(i.lineBlockAt(e.head).to)),
  nd = ({ state: i, dispatch: e }) => (e(oi(i, { anchor: 0 })), !0),
  sd = ({ state: i, dispatch: e }) => (e(oi(i, { anchor: i.doc.length })), !0),
  rd = ({ state: i, dispatch: e }) => (
    e(oi(i, { anchor: i.selection.main.anchor, head: 0 })), !0
  ),
  od = ({ state: i, dispatch: e }) => (
    e(oi(i, { anchor: i.selection.main.anchor, head: i.doc.length })), !0
  ),
  cP = ({ state: i, dispatch: e }) => (
    e(
      i.update({
        selection: { anchor: 0, head: i.doc.length },
        userEvent: "select",
      })
    ),
    !0
  ),
  fP = ({ state: i, dispatch: e }) => {
    let t = Tl(i).map(({ from: n, to: s }) =>
      v.range(n, Math.min(s + 1, i.doc.length))
    );
    return e(i.update({ selection: v.create(t), userEvent: "select" })), !0;
  },
  uP = ({ state: i, dispatch: e }) => {
    let t = es(i.selection, (n) => {
      var s;
      let r = _e(i).resolveStack(n.from, 1);
      for (let o = r; o; o = o.next) {
        let { node: l } = o;
        if (
          ((l.from < n.from && l.to >= n.to) ||
            (l.to > n.to && l.from <= n.from)) &&
          !((s = l.parent) === null || s === void 0) &&
          s.parent
        )
          return v.range(l.to, l.from);
      }
      return n;
    });
    return e(oi(i, t)), !0;
  },
  dP = ({ state: i, dispatch: e }) => {
    let t = i.selection,
      n = null;
    return (
      t.ranges.length > 1
        ? (n = v.create([t.main]))
        : t.main.empty || (n = v.create([v.cursor(t.main.head)])),
      n ? (e(oi(i, n)), !0) : !1
    );
  };
function Sr(i, e) {
  if (i.state.readOnly) return !1;
  let t = "delete.selection",
    { state: n } = i,
    s = n.changeByRange((r) => {
      let { from: o, to: l } = r;
      if (o == l) {
        let a = e(r);
        a < o
          ? ((t = "delete.backward"), (a = Gr(i, a, !1)))
          : a > o && ((t = "delete.forward"), (a = Gr(i, a, !0))),
          (o = Math.min(o, a)),
          (l = Math.max(l, a));
      } else (o = Gr(i, o, !1)), (l = Gr(i, l, !0));
      return o == l
        ? { range: r }
        : {
            changes: { from: o, to: l },
            range: v.cursor(o, o < r.head ? -1 : 1),
          };
    });
  return s.changes.empty
    ? !1
    : (i.dispatch(
        n.update(s, {
          scrollIntoView: !0,
          userEvent: t,
          effects:
            t == "delete.selection"
              ? q.announce.of(n.phrase("Selection deleted"))
              : void 0,
        })
      ),
      !0);
}
function Gr(i, e, t) {
  if (i instanceof q)
    for (let n of i.state.facet(q.atomicRanges).map((s) => s(i)))
      n.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const Pm = (i, e, t) =>
    Sr(i, (n) => {
      let s = n.from,
        { state: r } = i,
        o = r.doc.lineAt(s),
        l,
        a;
      if (
        t &&
        !e &&
        s > o.from &&
        s < o.from + 200 &&
        !/[^ \t]/.test((l = o.text.slice(0, s - o.from)))
      ) {
        if (l[l.length - 1] == "	") return s - 1;
        let h = Kn(l, r.tabSize),
          c = h % jo(r) || jo(r);
        for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++) s--;
        a = s;
      } else
        (a = Be(o.text, s - o.from, e, e) + o.from),
          a == s && o.number != (e ? r.doc.lines : 1)
            ? (a += e ? 1 : -1)
            : !e &&
              /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) &&
              (a = Be(o.text, a - o.from, !1, !1) + o.from);
      return a;
    }),
  Zh = (i) => Pm(i, !1, !0),
  km = (i) => Pm(i, !0, !1),
  vm = (i, e) =>
    Sr(i, (t) => {
      let n = t.head,
        { state: s } = i,
        r = s.doc.lineAt(n),
        o = s.charCategorizer(n);
      for (let l = null; ; ) {
        if (n == (e ? r.to : r.from)) {
          n == t.head && r.number != (e ? s.doc.lines : 1) && (n += e ? 1 : -1);
          break;
        }
        let a = Be(r.text, n - r.from, e) + r.from,
          h = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from),
          c = o(h);
        if (l != null && c != l) break;
        (h != " " || n != t.head) && (l = c), (n = a);
      }
      return n;
    }),
  $m = (i) => vm(i, !1),
  pP = (i) => vm(i, !0),
  OP = (i) =>
    Sr(i, (e) => {
      let t = i.lineBlockAt(e.head).to;
      return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
    }),
  gP = (i) =>
    Sr(i, (e) => {
      let t = i.moveToLineBoundary(e, !1).head;
      return e.head > t ? t : Math.max(0, e.head - 1);
    }),
  mP = (i) =>
    Sr(i, (e) => {
      let t = i.moveToLineBoundary(e, !0).head;
      return e.head < t ? t : Math.min(i.state.doc.length, e.head + 1);
    }),
  bP = ({ state: i, dispatch: e }) => {
    if (i.readOnly) return !1;
    let t = i.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: he.of(["", ""]) },
      range: v.cursor(n.from),
    }));
    return e(i.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
  },
  yP = ({ state: i, dispatch: e }) => {
    if (i.readOnly) return !1;
    let t = i.changeByRange((n) => {
      if (!n.empty || n.from == 0 || n.from == i.doc.length)
        return { range: n };
      let s = n.from,
        r = i.doc.lineAt(s),
        o = s == r.from ? s - 1 : Be(r.text, s - r.from, !1) + r.from,
        l = s == r.to ? s + 1 : Be(r.text, s - r.from, !0) + r.from;
      return {
        changes: {
          from: o,
          to: l,
          insert: i.doc.slice(s, l).append(i.doc.slice(o, s)),
        },
        range: v.cursor(l),
      };
    });
    return t.changes.empty
      ? !1
      : (e(i.update(t, { scrollIntoView: !0, userEvent: "move.character" })),
        !0);
  };
function Tl(i) {
  let e = [],
    t = -1;
  for (let n of i.selection.ranges) {
    let s = i.doc.lineAt(n.from),
      r = i.doc.lineAt(n.to);
    if (
      (!n.empty && n.to == r.from && (r = i.doc.lineAt(n.to - 1)),
      t >= s.number)
    ) {
      let o = e[e.length - 1];
      (o.to = r.to), o.ranges.push(n);
    } else e.push({ from: s.from, to: r.to, ranges: [n] });
    t = r.number + 1;
  }
  return e;
}
function Cm(i, e, t) {
  if (i.readOnly) return !1;
  let n = [],
    s = [];
  for (let r of Tl(i)) {
    if (t ? r.to == i.doc.length : r.from == 0) continue;
    let o = i.doc.lineAt(t ? r.to + 1 : r.from - 1),
      l = o.length + 1;
    if (t) {
      n.push(
        { from: r.to, to: o.to },
        { from: r.from, insert: o.text + i.lineBreak }
      );
      for (let a of r.ranges)
        s.push(
          v.range(
            Math.min(i.doc.length, a.anchor + l),
            Math.min(i.doc.length, a.head + l)
          )
        );
    } else {
      n.push(
        { from: o.from, to: r.from },
        { from: r.to, insert: i.lineBreak + o.text }
      );
      for (let a of r.ranges) s.push(v.range(a.anchor - l, a.head - l));
    }
  }
  return n.length
    ? (e(
        i.update({
          changes: n,
          scrollIntoView: !0,
          selection: v.create(s, i.selection.mainIndex),
          userEvent: "move.line",
        })
      ),
      !0)
    : !1;
}
const xP = ({ state: i, dispatch: e }) => Cm(i, e, !1),
  SP = ({ state: i, dispatch: e }) => Cm(i, e, !0);
function Zm(i, e, t) {
  if (i.readOnly) return !1;
  let n = [];
  for (let s of Tl(i))
    t
      ? n.push({
          from: s.from,
          insert: i.doc.slice(s.from, s.to) + i.lineBreak,
        })
      : n.push({ from: s.to, insert: i.lineBreak + i.doc.slice(s.from, s.to) });
  return (
    e(
      i.update({ changes: n, scrollIntoView: !0, userEvent: "input.copyline" })
    ),
    !0
  );
}
const wP = ({ state: i, dispatch: e }) => Zm(i, e, !1),
  QP = ({ state: i, dispatch: e }) => Zm(i, e, !0),
  PP = (i) => {
    if (i.state.readOnly) return !1;
    let { state: e } = i,
      t = e.changes(
        Tl(e).map(
          ({ from: s, to: r }) => (
            s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }
          )
        )
      ),
      n = es(e.selection, (s) => {
        let r;
        if (i.lineWrapping) {
          let o = i.lineBlockAt(s.head),
            l = i.coordsAtPos(s.head, s.assoc || 1);
          l &&
            (r = o.bottom + i.documentTop - l.bottom + i.defaultLineHeight / 2);
        }
        return i.moveVertically(s, !0, r);
      }).map(t);
    return (
      i.dispatch({
        changes: t,
        selection: n,
        scrollIntoView: !0,
        userEvent: "delete.line",
      }),
      !0
    );
  };
function kP(i, e) {
  if (/\(\)|\[\]|\{\}/.test(i.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = _e(i).resolveInner(e),
    n = t.childBefore(e),
    s = t.childAfter(e),
    r;
  return n &&
    s &&
    n.to <= e &&
    s.from >= e &&
    (r = n.type.prop(ne.closedBy)) &&
    r.indexOf(s.name) > -1 &&
    i.doc.lineAt(n.to).from == i.doc.lineAt(s.from).from &&
    !/\S/.test(i.sliceDoc(n.to, s.from))
    ? { from: n.to, to: s.from }
    : null;
}
const vP = Rm(!1),
  $P = Rm(!0);
function Rm(i) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return !1;
    let n = e.changeByRange((s) => {
      let { from: r, to: o } = s,
        l = e.doc.lineAt(r),
        a = !i && r == o && kP(e, r);
      i && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new Pl(e, { simulateBreak: r, simulateDoubleBreak: !!a }),
        c = Pc(h, r);
      for (
        c == null && (c = Kn(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize));
        o < l.to && /\s/.test(l.text[o - l.from]);

      )
        o++;
      a
        ? ({ from: r, to: o } = a)
        : r > l.from &&
          r < l.from + 100 &&
          !/\S/.test(l.text.slice(0, r)) &&
          (r = l.from);
      let f = ["", tr(e, c)];
      return (
        a && f.push(tr(e, h.lineIndent(l.from, -1))),
        {
          changes: { from: r, to: o, insert: he.of(f) },
          range: v.cursor(r + 1 + f[1].length),
        }
      );
    });
    return t(e.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Wc(i, e) {
  let t = -1;
  return i.changeByRange((n) => {
    let s = [];
    for (let o = n.from; o <= n.to; ) {
      let l = i.doc.lineAt(o);
      l.number > t &&
        (n.empty || n.to > l.from) &&
        (e(l, s, n), (t = l.number)),
        (o = l.to + 1);
    }
    let r = i.changes(s);
    return {
      changes: s,
      range: v.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1)),
    };
  });
}
const CP = ({ state: i, dispatch: e }) => {
    if (i.readOnly) return !1;
    let t = Object.create(null),
      n = new Pl(i, {
        overrideIndentation: (r) => {
          let o = t[r];
          return eval('o ?? -1');
        },
      }),
      s = Wc(i, (r, o, l) => {
        let a = Pc(n, r.from);
        if (a == null) return;
        /\S/.test(r.text) || (a = 0);
        let h = /^\s*/.exec(r.text)[0],
          c = tr(i, a);
        (h != c || l.from < r.from + h.length) &&
          ((t[r.from] = a),
          o.push({ from: r.from, to: r.from + h.length, insert: c }));
      });
    return s.changes.empty || e(i.update(s, { userEvent: "indent" })), !0;
  },
  Tm = ({ state: i, dispatch: e }) =>
    i.readOnly
      ? !1
      : (e(
          i.update(
            Wc(i, (t, n) => {
              n.push({ from: t.from, insert: i.facet(Ql) });
            }),
            { userEvent: "input.indent" }
          )
        ),
        !0),
  Am = ({ state: i, dispatch: e }) =>
    i.readOnly
      ? !1
      : (e(
          i.update(
            Wc(i, (t, n) => {
              let s = /^\s*/.exec(t.text)[0];
              if (!s) return;
              let r = Kn(s, i.tabSize),
                o = 0,
                l = tr(i, Math.max(0, r - jo(i)));
              for (
                ;
                o < s.length &&
                o < l.length &&
                s.charCodeAt(o) == l.charCodeAt(o);

              )
                o++;
              n.push({
                from: t.from + o,
                to: t.from + s.length,
                insert: l.slice(o),
              });
            }),
            { userEvent: "delete.dedent" }
          )
        ),
        !0),
  ZP = (i) => (i.setTabFocusMode(), !0),
  RP = [
    { key: "Ctrl-b", run: am, shift: mm, preventDefault: !0 },
    { key: "Ctrl-f", run: hm, shift: bm },
    { key: "Ctrl-p", run: um, shift: Sm },
    { key: "Ctrl-n", run: dm, shift: wm },
    { key: "Ctrl-a", run: FQ, shift: aP },
    { key: "Ctrl-e", run: HQ, shift: hP },
    { key: "Ctrl-d", run: km },
    { key: "Ctrl-h", run: Zh },
    { key: "Ctrl-k", run: OP },
    { key: "Ctrl-Alt-h", run: $m },
    { key: "Ctrl-o", run: bP },
    { key: "Ctrl-t", run: yP },
    { key: "Ctrl-v", run: Ch },
  ],
  TP = [
    { key: "ArrowLeft", run: am, shift: mm, preventDefault: !0 },
    {
      key: "Mod-ArrowLeft",
      mac: "Alt-ArrowLeft",
      run: LQ,
      shift: eP,
      preventDefault: !0,
    },
    { mac: "Cmd-ArrowLeft", run: BQ, shift: oP, preventDefault: !0 },
    { key: "ArrowRight", run: hm, shift: bm, preventDefault: !0 },
    {
      key: "Mod-ArrowRight",
      mac: "Alt-ArrowRight",
      run: UQ,
      shift: tP,
      preventDefault: !0,
    },
    { mac: "Cmd-ArrowRight", run: GQ, shift: lP, preventDefault: !0 },
    { key: "ArrowUp", run: um, shift: Sm, preventDefault: !0 },
    { mac: "Cmd-ArrowUp", run: nd, shift: rd },
    { mac: "Ctrl-ArrowUp", run: ed, shift: td },
    { key: "ArrowDown", run: dm, shift: wm, preventDefault: !0 },
    { mac: "Cmd-ArrowDown", run: sd, shift: od },
    { mac: "Ctrl-ArrowDown", run: Ch, shift: id },
    { key: "PageUp", run: ed, shift: td },
    { key: "PageDown", run: Ch, shift: id },
    { key: "Home", run: NQ, shift: rP, preventDefault: !0 },
    { key: "Mod-Home", run: nd, shift: rd },
    { key: "End", run: IQ, shift: sP, preventDefault: !0 },
    { key: "Mod-End", run: sd, shift: od },
    { key: "Enter", run: vP },
    { key: "Mod-a", run: cP },
    { key: "Backspace", run: Zh, shift: Zh },
    { key: "Delete", run: km },
    { key: "Mod-Backspace", mac: "Alt-Backspace", run: $m },
    { key: "Mod-Delete", mac: "Alt-Delete", run: pP },
    { mac: "Mod-Backspace", run: gP },
    { mac: "Mod-Delete", run: mP },
  ].concat(RP.map((i) => ({ mac: i.key, run: i.run, shift: i.shift }))),
  E$ = [
    { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: qQ, shift: iP },
    { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: zQ, shift: nP },
    { key: "Alt-ArrowUp", run: xP },
    { key: "Shift-Alt-ArrowUp", run: wP },
    { key: "Alt-ArrowDown", run: SP },
    { key: "Shift-Alt-ArrowDown", run: QP },
    { key: "Escape", run: dP },
    { key: "Mod-Enter", run: $P },
    { key: "Alt-l", mac: "Ctrl-l", run: fP },
    { key: "Mod-i", run: uP, preventDefault: !0 },
    { key: "Mod-[", run: Am },
    { key: "Mod-]", run: Tm },
    { key: "Mod-Alt-\\", run: CP },
    { key: "Shift-Mod-k", run: PP },
    { key: "Shift-Mod-\\", run: JQ },
    { key: "Mod-/", run: PQ },
    { key: "Alt-A", run: vQ },
    { key: "Ctrl-m", mac: "Shift-Alt-m", run: ZP },
  ].concat(TP),
  W$ = { key: "Tab", run: Tm, shift: Am };
// END @codemirror/commands


// BEGIN @lezer/lr
var ld = {};
class Io {
  constructor(e, t, n, s, r, o, l, a, h, c = 0, f) {
    (this.p = e),
      (this.stack = t),
      (this.state = n),
      (this.reducePos = s),
      (this.pos = r),
      (this.score = o),
      (this.buffer = l),
      (this.bufferBase = a),
      (this.curContext = h),
      (this.lookAhead = c),
      (this.parent = f);
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${
      this.pos
    }${this.score ? "!" + this.score : ""}`;
  }
  static start(e, t, n = 0) {
    let s = e.parser.context;
    return new Io(
      e,
      [],
      t,
      n,
      n,
      0,
      [],
      0,
      s ? new ad(s, s.start) : null,
      0,
      null
    );
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length),
      (this.state = e);
  }
  reduce(e) {
    var t;
    let n = e >> 19,
      s = e & 65535,
      { parser: r } = this.p;
    this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
    let o = r.dynamicPrecedence(s);
    if ((o && (this.score += o), n == 0)) {
      this.pushState(r.getGoto(this.state, s, !0), this.reducePos),
        s < r.minRepeatTerm &&
          this.storeNode(s, this.reducePos, this.reducePos, 4, !0),
        this.reduceContext(s, this.reducePos);
      return;
    }
    let l = this.stack.length - (n - 1) * 3 - (e & 262144 ? 6 : 0),
      a = l ? this.stack[l - 2] : this.p.ranges[0].from,
      h = this.reducePos - a;
    h >= 2e3 &&
      !(
        !((t = this.p.parser.nodeSet.types[s]) === null || t === void 0) &&
        t.isAnonymous
      ) &&
      (a == this.p.lastBigReductionStart
        ? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = h))
        : this.p.lastBigReductionSize < h &&
          ((this.p.bigReductionCount = 1),
          (this.p.lastBigReductionStart = a),
          (this.p.lastBigReductionSize = h)));
    let c = l ? this.stack[l - 1] : 0,
      f = this.bufferBase + this.buffer.length - c;
    if (s < r.minRepeatTerm || e & 131072) {
      let u = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(s, a, u, f + 4, !0);
    }
    if (e & 262144) this.state = this.stack[l];
    else {
      let u = this.stack[l - 3];
      this.state = r.getGoto(u, s, !0);
    }
    for (; this.stack.length > l; ) this.stack.pop();
    this.reduceContext(s, a);
  }
  storeNode(e, t, n, s = 4, r = !1) {
    if (
      e == 0 &&
      (!this.stack.length ||
        this.stack[this.stack.length - 1] <
          this.buffer.length + this.bufferBase)
    ) {
      let o = this,
        l = this.buffer.length;
      if (
        (l == 0 &&
          o.parent &&
          ((l = o.bufferBase - o.parent.bufferBase), (o = o.parent)),
        l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1)
      ) {
        if (t == n) return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = n;
          return;
        }
      }
    }
    if (!r || this.pos == n) this.buffer.push(e, t, n, s);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0)
        for (; o > 0 && this.buffer[o - 2] > n; )
          (this.buffer[o] = this.buffer[o - 4]),
            (this.buffer[o + 1] = this.buffer[o - 3]),
            (this.buffer[o + 2] = this.buffer[o - 2]),
            (this.buffer[o + 3] = this.buffer[o - 1]),
            (o -= 4),
            s > 4 && (s -= 4);
      (this.buffer[o] = e),
        (this.buffer[o + 1] = t),
        (this.buffer[o + 2] = n),
        (this.buffer[o + 3] = s);
    }
  }
  shift(e, t, n, s) {
    if (e & 131072) this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      (this.pos = s),
        this.shiftContext(t, n),
        t <= this.p.parser.maxNode && this.buffer.push(t, n, s, 4);
    else {
      let r = e,
        { parser: o } = this.p;
      (s > this.pos || t <= o.maxNode) &&
        ((this.pos = s), o.stateFlag(r, 1) || (this.reducePos = s)),
        this.pushState(r, n),
        this.shiftContext(t, n),
        t <= o.maxNode && this.buffer.push(t, n, s, 4);
    }
  }
  apply(e, t, n, s) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, n, s);
  }
  useNode(e, t) {
    let n = this.p.reused.length - 1;
    (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
    let s = this.pos;
    (this.reducePos = this.pos = s + e.length),
      this.pushState(t, s),
      this.buffer.push(n, s, this.reducePos, -1),
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reuse(
            this.curContext.context,
            e,
            this,
            this.p.stream.reset(this.pos - e.length)
          )
        );
  }
  split() {
    let e = this,
      t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
    let n = e.buffer.slice(t),
      s = e.bufferBase + t;
    for (; e && s == e.bufferBase; ) e = e.parent;
    return new Io(
      this.p,
      this.stack.slice(),
      this.state,
      this.reducePos,
      this.pos,
      this.score,
      n,
      s,
      this.curContext,
      this.lookAhead,
      e
    );
  }
  recoverByDelete(e, t) {
    let n = e <= this.p.parser.maxNode;
    n && this.storeNode(e, this.pos, t, 4),
      this.storeNode(0, this.pos, t, n ? 8 : 4),
      (this.pos = this.reducePos = t),
      (this.score -= 190);
  }
  canShift(e) {
    for (let t = new AP(this); ; ) {
      let n =
        this.p.parser.stateSlot(t.state, 4) ||
        this.p.parser.hasAction(t.state, e);
      if (n == 0) return !1;
      if (!(n & 65536)) return !0;
      t.reduce(n);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let s = [];
      for (let r = 0, o; r < t.length; r += 2)
        (o = t[r + 1]) != this.state &&
          this.p.parser.hasAction(o, e) &&
          s.push(t[r], o);
      if (this.stack.length < 120)
        for (let r = 0; s.length < 8 && r < t.length; r += 2) {
          let o = t[r + 1];
          s.some((l, a) => a & 1 && l == o) || s.push(t[r], o);
        }
      t = s;
    }
    let n = [];
    for (let s = 0; s < t.length && n.length < 4; s += 2) {
      let r = t[s + 1];
      if (r == this.state) continue;
      let o = this.split();
      o.pushState(r, this.pos),
        o.storeNode(0, o.pos, o.pos, 4, !0),
        o.shiftContext(t[s], this.pos),
        (o.reducePos = this.pos),
        (o.score -= 200),
        n.push(o);
    }
    return n;
  }
  forceReduce() {
    let { parser: e } = this.p,
      t = e.stateSlot(this.state, 5);
    if (!(t & 65536)) return !1;
    if (!e.validAction(this.state, t)) {
      let n = t >> 19,
        s = t & 65535,
        r = this.stack.length - n * 3;
      if (r < 0 || e.getGoto(this.stack[r], s, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null) return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100);
    }
    return (this.reducePos = this.pos), this.reduce(t), !0;
  }
  findForcedReduction() {
    let { parser: e } = this.p,
      t = [],
      n = (s, r) => {
        if (!t.includes(s))
          return (
            t.push(s),
            e.allActions(s, (o) => {
              if (!(o & 393216))
                if (o & 65536) {
                  let l = (o >> 19) - r;
                  if (l > 1) {
                    let a = o & 65535,
                      h = this.stack.length - l * 3;
                    if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                      return (l << 19) | 65536 | a;
                  }
                } else {
                  let l = n(o, r + 1);
                  if (l != null) return l;
                }
            })
          );
      };
    return n(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return !1;
    let { parser: e } = this.p;
    return (
      e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4)
    );
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0),
      (this.state = this.stack[0]),
      (this.stack.length = 0);
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
    for (let t = 0; t < this.stack.length; t += 3)
      if (this.stack[t] != e.stack[t]) return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.shift(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t)
        )
      );
  }
  reduceContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.reduce(
          this.curContext.context,
          e,
          this,
          this.p.stream.reset(t)
        )
      );
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) &&
      this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) &&
      this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ad(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(),
        (this.curContext = t);
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(),
      this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ad {
  constructor(e, t) {
    (this.tracker = e),
      (this.context = t),
      (this.hash = e.strict ? e.hash(t) : 0);
  }
}
class AP {
  constructor(e) {
    (this.start = e),
      (this.state = e.state),
      (this.stack = e.stack),
      (this.base = this.stack.length);
  }
  reduce(e) {
    let t = e & 65535,
      n = e >> 19;
    n == 0
      ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
        this.stack.push(this.state, 0, 0),
        (this.base += 3))
      : (this.base -= (n - 1) * 3);
    let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = s;
  }
}
class No {
  constructor(e, t, n) {
    (this.stack = e),
      (this.pos = t),
      (this.index = n),
      (this.buffer = e.buffer),
      this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new No(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null &&
      ((this.index = this.stack.bufferBase - e.bufferBase),
      (this.stack = e),
      (this.buffer = e.buffer));
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    (this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext();
  }
  fork() {
    return new No(this.stack, this.pos, this.index);
  }
}
function Ss(i, e = Uint16Array) {
  if (typeof i != "string") return i;
  let t = null;
  for (let n = 0, s = 0; n < i.length; ) {
    let r = 0;
    for (;;) {
      let o = i.charCodeAt(n++),
        l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if ((a >= 46 && ((a -= 46), (l = !0)), (r += a), l)) break;
      r *= 46;
    }
    t ? (t[s++] = r) : (t = new e(r));
  }
  return t;
}
class po {
  constructor() {
    (this.start = -1),
      (this.value = -1),
      (this.end = -1),
      (this.extended = -1),
      (this.lookAhead = 0),
      (this.mask = 0),
      (this.context = 0);
  }
}
const hd = new po();
class MP {
  constructor(e, t) {
    (this.input = e),
      (this.ranges = t),
      (this.chunk = ""),
      (this.chunkOff = 0),
      (this.chunk2 = ""),
      (this.chunk2Pos = 0),
      (this.next = -1),
      (this.token = hd),
      (this.rangeIndex = 0),
      (this.pos = this.chunkPos = t[0].from),
      (this.range = t[0]),
      (this.end = t[t.length - 1].to),
      this.readNext();
  }
  resolveOffset(e, t) {
    let n = this.range,
      s = this.rangeIndex,
      r = this.pos + e;
    for (; r < n.from; ) {
      if (!s) return null;
      let o = this.ranges[--s];
      (r -= n.from - o.to), (n = o);
    }
    for (; t < 0 ? r > n.to : r >= n.to; ) {
      if (s == this.ranges.length - 1) return null;
      let o = this.ranges[++s];
      (r += o.from - n.to), (n = o);
    }
    return r;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) return e;
    for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
    return this.end;
  }
  peek(e) {
    let t = this.chunkOff + e,
      n,
      s;
    if (t >= 0 && t < this.chunk.length)
      (n = this.pos + e), (s = this.chunk.charCodeAt(t));
    else {
      let r = this.resolveOffset(e, 1);
      if (r == null) return -1;
      if (
        ((n = r),
        n >= this.chunk2Pos && n < this.chunk2Pos + this.chunk2.length)
      )
        s = this.chunk2.charCodeAt(n - this.chunk2Pos);
      else {
        let o = this.rangeIndex,
          l = this.range;
        for (; l.to <= n; ) l = this.ranges[++o];
        (this.chunk2 = this.input.chunk((this.chunk2Pos = n))),
          n + this.chunk2.length > l.to &&
            (this.chunk2 = this.chunk2.slice(0, l.to - n)),
          (s = this.chunk2.charCodeAt(0));
      }
    }
    return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), s;
  }
  acceptToken(e, t = 0) {
    let n = t ? this.resolveOffset(t, -1) : this.pos;
    if (n == null || n < this.token.start)
      throw new RangeError("Token end out of bounds");
    (this.token.value = e), (this.token.end = n);
  }
  acceptTokenTo(e, t) {
    (this.token.value = e), (this.token.end = t);
  }
  getChunk() {
    if (
      this.pos >= this.chunk2Pos &&
      this.pos < this.chunk2Pos + this.chunk2.length
    ) {
      let { chunk: e, chunkPos: t } = this;
      (this.chunk = this.chunk2),
        (this.chunkPos = this.chunk2Pos),
        (this.chunk2 = e),
        (this.chunk2Pos = t),
        (this.chunkOff = this.pos - this.chunkPos);
    } else {
      (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
      let e = this.input.chunk(this.pos),
        t = this.pos + e.length;
      (this.chunk =
        t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
        (this.chunkPos = this.pos),
        (this.chunkOff = 0);
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length &&
      (this.getChunk(), this.chunkOff == this.chunk.length)
      ? (this.next = -1)
      : (this.next = this.chunk.charCodeAt(this.chunkOff));
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      (e -= this.range.to - this.pos),
        (this.range = this.ranges[++this.rangeIndex]),
        (this.pos = this.range.from);
    }
    return (
      (this.pos += e),
      this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
      this.readNext()
    );
  }
  setDone() {
    return (
      (this.pos = this.chunkPos = this.end),
      (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
      (this.chunk = ""),
      (this.next = -1)
    );
  }
  reset(e, t) {
    if (
      (t
        ? ((this.token = t),
          (t.start = e),
          (t.lookAhead = e + 1),
          (t.value = t.extended = -1))
        : (this.token = hd),
      this.pos != e)
    ) {
      if (((this.pos = e), e == this.end)) return this.setDone(), this;
      for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length
        ? (this.chunkOff = e - this.chunkPos)
        : ((this.chunk = ""), (this.chunkOff = 0)),
        this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to)
      return this.input.read(e, t);
    let n = "";
    for (let s of this.ranges) {
      if (s.from >= t) break;
      s.to > e &&
        (n += this.input.read(Math.max(s.from, e), Math.min(s.to, t)));
    }
    return n;
  }
}
class jn {
  constructor(e, t) {
    (this.data = e), (this.id = t);
  }
  token(e, t) {
    let { parser: n } = t.p;
    Mm(this.data, e, t, this.id, n.data, n.tokenPrecTable);
  }
}
jn.prototype.contextual = jn.prototype.fallback = jn.prototype.extend = !1;
class Rh {
  constructor(e, t, n) {
    (this.precTable = t),
      (this.elseToken = n),
      (this.data = typeof e == "string" ? Ss(e) : e);
  }
  token(e, t) {
    let n = e.pos,
      s = 0;
    for (;;) {
      let r = e.next < 0,
        o = e.resolveOffset(1, 1);
      if (
        (Mm(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)
      )
        break;
      if (this.elseToken == null) return;
      if ((r || s++, o == null)) break;
      e.reset(o, e.token);
    }
    s && (e.reset(n, e.token), e.acceptToken(this.elseToken, s));
  }
}
Rh.prototype.contextual = jn.prototype.fallback = jn.prototype.extend = !1;
class Al {
  constructor(e, t = {}) {
    (this.token = e),
      (this.contextual = !!t.contextual),
      (this.fallback = !!t.fallback),
      (this.extend = !!t.extend);
  }
}
function Mm(i, e, t, n, s, r) {
  let o = 0,
    l = 1 << n,
    { dialect: a } = t.p.parser;
  e: for (; l & i[o]; ) {
    let h = i[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((i[d + 1] & l) > 0) {
        let p = i[d];
        if (
          a.allows(p) &&
          (e.token.value == -1 ||
            e.token.value == p ||
            _P(p, e.token.value, s, r))
        ) {
          e.acceptToken(p);
          break;
        }
      }
    let c = e.next,
      f = 0,
      u = i[o + 2];
    if (e.next < 0 && u > f && i[h + u * 3 - 3] == 65535) {
      o = i[h + u * 3 - 1];
      continue e;
    }
    for (; f < u; ) {
      let d = (f + u) >> 1,
        p = h + d + (d << 1),
        O = i[p],
        m = i[p + 1] || 65536;
      if (c < O) u = d;
      else if (c >= m) f = d + 1;
      else {
        (o = i[p + 2]), e.advance();
        continue e;
      }
    }
    break;
  }
}
function cd(i, e, t) {
  for (let n = e, s; (s = i[n]) != 65535; n++) if (s == t) return n - e;
  return -1;
}
function _P(i, e, t, n) {
  let s = cd(t, n, e);
  return s < 0 || cd(t, n, i) < s;
}
const xt = typeof process < "u" && ld && /\bparse\b/.test(ld.LOG);
let Oa = null;
function fd(i, e, t) {
  let n = i.cursor(De.IncludeAnonymous);
  for (n.moveTo(e); ; )
    if (!(t < 0 ? n.childBefore(e) : n.childAfter(e)))
      for (;;) {
        if ((t < 0 ? n.to < e : n.from > e) && !n.type.isError)
          return t < 0
            ? Math.max(0, Math.min(n.to - 1, e - 25))
            : Math.min(i.length, Math.max(n.from + 1, e + 25));
        if (t < 0 ? n.prevSibling() : n.nextSibling()) break;
        if (!n.parent()) return t < 0 ? 0 : i.length;
      }
}
class EP {
  constructor(e, t) {
    (this.fragments = e),
      (this.nodeSet = t),
      (this.i = 0),
      (this.fragment = null),
      (this.safeFrom = -1),
      (this.safeTo = -1),
      (this.trees = []),
      (this.start = []),
      (this.index = []),
      this.nextFragment();
  }
  nextFragment() {
    let e = (this.fragment =
      this.i == this.fragments.length ? null : this.fragments[this.i++]);
    if (e) {
      for (
        this.safeFrom = e.openStart
          ? fd(e.tree, e.from + e.offset, 1) - e.offset
          : e.from,
          this.safeTo = e.openEnd
            ? fd(e.tree, e.to + e.offset, -1) - e.offset
            : e.to;
        this.trees.length;

      )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree),
        this.start.push(-e.offset),
        this.index.push(0),
        (this.nextStart = this.safeFrom);
    } else this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
    if (!this.fragment) return null;
    for (;;) {
      let t = this.trees.length - 1;
      if (t < 0) return this.nextFragment(), null;
      let n = this.trees[t],
        s = this.index[t];
      if (s == n.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = n.children[s],
        o = this.start[t] + n.positions[s];
      if (o > e) return (this.nextStart = o), null;
      if (r instanceof Te) {
        if (o == e) {
          if (o < this.safeFrom) return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(ne.lookAhead);
            if (!a || l + a < this.fragment.to) return r;
          }
        }
        this.index[t]++,
          o + r.length >= Math.max(this.safeFrom, e) &&
            (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else this.index[t]++, (this.nextStart = o + r.length);
    }
  }
}
class WP {
  constructor(e, t) {
    (this.stream = t),
      (this.tokens = []),
      (this.mainToken = null),
      (this.actions = []),
      (this.tokens = e.tokenizers.map((n) => new po()));
  }
  getActions(e) {
    let t = 0,
      n = null,
      { parser: s } = e.p,
      { tokenizers: r } = s,
      o = s.stateSlot(e.state, 3),
      l = e.curContext ? e.curContext.hash : 0,
      a = 0;
    for (let h = 0; h < r.length; h++) {
      if (!((1 << h) & o)) continue;
      let c = r[h],
        f = this.tokens[h];
      if (
        !(n && !c.fallback) &&
        ((c.contextual || f.start != e.pos || f.mask != o || f.context != l) &&
          (this.updateCachedToken(f, c, e), (f.mask = o), (f.context = l)),
        f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)),
        f.value != 0)
      ) {
        let u = t;
        if (
          (f.extended > -1 && (t = this.addActions(e, f.extended, f.end, t)),
          (t = this.addActions(e, f.value, f.end, t)),
          !c.extend && ((n = f), t > u))
        )
          break;
      }
    }
    for (; this.actions.length > t; ) this.actions.pop();
    return (
      a && e.setLookAhead(a),
      !n &&
        e.pos == this.stream.end &&
        ((n = new po()),
        (n.value = e.p.parser.eofTerm),
        (n.start = n.end = e.pos),
        (t = this.addActions(e, n.value, n.end, t))),
      (this.mainToken = n),
      this.actions
    );
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken;
    let t = new po(),
      { pos: n, p: s } = e;
    return (
      (t.start = n),
      (t.end = Math.min(n + 1, s.stream.end)),
      (t.value = n == s.stream.end ? s.parser.eofTerm : 0),
      t
    );
  }
  updateCachedToken(e, t, n) {
    let s = this.stream.clipPos(n.pos);
    if ((t.token(this.stream.reset(s, e), n), e.value > -1)) {
      let { parser: r } = n.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == e.value) {
          let l = r.specializers[o](this.stream.read(e.start, e.end), n);
          if (l >= 0 && n.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? (e.extended = l >> 1) : (e.value = l >> 1);
            break;
          }
        }
    } else (e.value = 0), (e.end = this.stream.clipPos(s + 1));
  }
  putAction(e, t, n, s) {
    for (let r = 0; r < s; r += 3) if (this.actions[r] == e) return s;
    return (
      (this.actions[s++] = e),
      (this.actions[s++] = t),
      (this.actions[s++] = n),
      s
    );
  }
  addActions(e, t, n, s) {
    let { state: r } = e,
      { parser: o } = e.p,
      { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(r, a ? 2 : 1); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1) h = hi(l, h + 2);
          else {
            s == 0 &&
              l[h + 1] == 2 &&
              (s = this.putAction(hi(l, h + 2), t, n, s));
            break;
          }
        l[h] == t && (s = this.putAction(hi(l, h + 1), t, n, s));
      }
    return s;
  }
}
class XP {
  constructor(e, t, n, s) {
    (this.parser = e),
      (this.input = t),
      (this.ranges = s),
      (this.recovering = 0),
      (this.nextStackID = 9812),
      (this.minStackPos = 0),
      (this.reused = []),
      (this.stoppedAt = null),
      (this.lastBigReductionStart = -1),
      (this.lastBigReductionSize = 0),
      (this.bigReductionCount = 0),
      (this.stream = new MP(t, s)),
      (this.tokens = new WP(e, this.stream)),
      (this.topTerm = e.top[1]);
    let { from: r } = s[0];
    (this.stacks = [Io.start(this, e.top[0], r)]),
      (this.fragments =
        n.length && this.stream.end - r > e.bufferLength * 4
          ? new EP(n, e.nodeSet)
          : null);
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks,
      t = this.minStackPos,
      n = (this.stacks = []),
      s,
      r;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (
        ;
        o.forceReduce() &&
        o.stack.length &&
        o.stack[o.stack.length - 2] >= this.lastBigReductionStart;

      );
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (;;) {
        if (((this.tokens.mainToken = null), l.pos > t)) n.push(l);
        else {
          if (this.advanceStack(l, n, e)) continue;
          {
            s || ((s = []), (r = [])), s.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!n.length) {
      let o = s && jP(s);
      if (o)
        return (
          xt && console.log("Finish with " + this.stackID(o)),
          this.stackToTree(o)
        );
      if (this.parser.strict)
        throw (
          (xt &&
            s &&
            console.log(
              "Stuck with token " +
                (this.tokens.mainToken
                  ? this.parser.getName(this.tokens.mainToken.value)
                  : "none")
            ),
          new SyntaxError("No parse at " + t))
        );
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && s) {
      let o =
        this.stoppedAt != null && s[0].pos > this.stoppedAt
          ? s[0]
          : this.runRecovery(s, r, n);
      if (o)
        return (
          xt && console.log("Force-finish " + this.stackID(o)),
          this.stackToTree(o.forceAll())
        );
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (n.length > o)
        for (n.sort((l, a) => a.score - l.score); n.length > o; ) n.pop();
      n.some((l) => l.reducePos > t) && this.recovering--;
    } else if (n.length > 1) {
      e: for (let o = 0; o < n.length - 1; o++) {
        let l = n[o];
        for (let a = o + 1; a < n.length; a++) {
          let h = n[a];
          if (
            l.sameState(h) ||
            (l.buffer.length > 500 && h.buffer.length > 500)
          )
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              n.splice(a--, 1);
            else {
              n.splice(o--, 1);
              continue e;
            }
        }
      }
      n.length > 12 && n.splice(12, n.length - 12);
    }
    this.minStackPos = n[0].pos;
    for (let o = 1; o < n.length; o++)
      n[o].pos < this.minStackPos && (this.minStackPos = n[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, t, n) {
    let s = e.pos,
      { parser: r } = this,
      o = xt ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && s > this.stoppedAt)
      return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict,
        c = h ? e.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(s); f; ) {
        let u =
          this.parser.nodeSet.types[f.type.id] == f.type
            ? r.getGoto(e.state, f.type.id)
            : -1;
        if (u > -1 && f.length && (!h || (f.prop(ne.contextHash) || 0) == c))
          return (
            e.useNode(f, u),
            xt &&
              console.log(
                o + this.stackID(e) + ` (via reuse of ${r.getName(f.type.id)})`
              ),
            !0
          );
        if (!(f instanceof Te) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof Te && f.positions[0] == 0) f = d;
        else break;
      }
    }
    let l = r.stateSlot(e.state, 4);
    if (l > 0)
      return (
        e.reduce(l),
        xt &&
          console.log(
            o + this.stackID(e) + ` (via always-reduce ${r.getName(l & 65535)})`
          ),
        !0
      );
    if (e.stack.length >= 8400)
      for (; e.stack.length > 6e3 && e.forceReduce(); );
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let c = a[h++],
        f = a[h++],
        u = a[h++],
        d = h == a.length || !n,
        p = d ? e : e.split(),
        O = this.tokens.mainToken;
      if (
        (p.apply(c, f, O ? O.start : p.pos, u),
        xt &&
          console.log(
            o +
              this.stackID(p) +
              ` (via ${
                c & 65536 ? `reduce of ${r.getName(c & 65535)}` : "shift"
              } for ${r.getName(f)} @ ${s}${p == e ? "" : ", split"})`
          ),
        d)
      )
        return !0;
      p.pos > s ? t.push(p) : n.push(p);
    }
    return !1;
  }
  advanceFully(e, t) {
    let n = e.pos;
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1;
      if (e.pos > n) return ud(e, t), !0;
    }
  }
  runRecovery(e, t, n) {
    let s = null,
      r = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = t[o << 1],
        h = t[(o << 1) + 1],
        c = xt ? this.stackID(l) + " -> " : "";
      if (
        l.deadEnd &&
        (r ||
          ((r = !0),
          l.restart(),
          xt && console.log(c + this.stackID(l) + " (restarted)"),
          this.advanceFully(l, n)))
      )
        continue;
      let f = l.split(),
        u = c;
      for (
        let d = 0;
        f.forceReduce() &&
        d < 10 &&
        (xt && console.log(u + this.stackID(f) + " (via force-reduce)"),
        !this.advanceFully(f, n));
        d++
      )
        xt && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        xt && console.log(c + this.stackID(d) + " (via recover-insert)"),
          this.advanceFully(d, n);
      this.stream.end > l.pos
        ? (h == l.pos && (h++, (a = 0)),
          l.recoverByDelete(a, h),
          xt &&
            console.log(
              c +
                this.stackID(l) +
                ` (via recover-delete ${this.parser.getName(a)})`
            ),
          ud(l, n))
        : (!s || s.score < l.score) && (s = l);
    }
    return s;
  }
  stackToTree(e) {
    return (
      e.close(),
      Te.build({
        buffer: No.create(e),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: e.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm,
      })
    );
  }
  stackID(e) {
    let t = (Oa || (Oa = new WeakMap())).get(e);
    return (
      t || Oa.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e
    );
  }
}
function ud(i, e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n.pos == i.pos && n.sameState(i)) {
      e[t].score < i.score && (e[t] = i);
      return;
    }
  }
  e.push(i);
}
class DP {
  constructor(e, t, n) {
    (this.source = e), (this.flags = t), (this.disabled = n);
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const ga = (i) => i;
class YP {
  constructor(e) {
    (this.start = e.start),
      (this.shift = e.shift || ga),
      (this.reduce = e.reduce || ga),
      (this.reuse = e.reuse || ga),
      (this.hash = e.hash || (() => 0)),
      (this.strict = e.strict !== !1);
  }
}
class rr extends Hp {
  constructor(e) {
    if ((super(), (this.wrappers = []), e.version != 14))
      throw new RangeError(
        `Parser version (${e.version}) doesn't match runtime version (14)`
      );
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++) t.push("");
    let n = Object.keys(e.topRules).map((l) => e.topRules[l][1]),
      s = [];
    for (let l = 0; l < t.length; l++) s.push([]);
    function r(l, a, h) {
      s[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = ne[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0) r(c, a, l[h++]);
          else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--) r(l[h++], a, f);
            h++;
          }
        }
      }
    (this.nodeSet = new sc(
      t.map((l, a) =>
        gt.define({
          name: a >= this.minRepeatTerm ? void 0 : l,
          id: a,
          props: s[a],
          top: n.indexOf(a) > -1,
          error: a == 0,
          skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1,
        })
      )
    )),
      e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
      (this.strict = !1),
      (this.bufferLength = Np);
    let o = Ss(e.tokenData);
    (this.context = e.context),
      (this.specializerSpecs = e.specialized || []),
      (this.specialized = new Uint16Array(this.specializerSpecs.length));
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    (this.specializers = this.specializerSpecs.map(dd)),
      (this.states = Ss(e.states, Uint32Array)),
      (this.data = Ss(e.stateData)),
      (this.goto = Ss(e.goto)),
      (this.maxTerm = e.maxTerm),
      (this.tokenizers = e.tokenizers.map((l) =>
        typeof l == "number" ? new jn(o, l) : l
      )),
      (this.topRules = e.topRules),
      (this.dialects = e.dialects || {}),
      (this.dynamicPrecedences = e.dynamicPrecedences || null),
      (this.tokenPrecTable = e.tokenPrec),
      (this.termNames = e.termNames || null),
      (this.maxNode = this.nodeSet.types.length - 1),
      (this.dialect = this.parseDialect()),
      (this.top = this.topRules[Object.keys(this.topRules)[0]]);
  }
  createParse(e, t, n) {
    let s = new XP(this, e, t, n);
    for (let r of this.wrappers) s = r(s, e, t, n);
    return s;
  }
  getGoto(e, t, n = !1) {
    let s = this.goto;
    if (t >= s[0]) return -1;
    for (let r = s[t + 1]; ; ) {
      let o = s[r++],
        l = o & 1,
        a = s[r++];
      if (l && n) return a;
      for (let h = r + (o >> 1); r < h; r++) if (s[r] == e) return a;
      if (l) return -1;
    }
  }
  hasAction(e, t) {
    let n = this.data;
    for (let s = 0; s < 2; s++)
      for (let r = this.stateSlot(e, s ? 2 : 1), o; ; r += 3) {
        if ((o = n[r]) == 65535)
          if (n[r + 1] == 1) o = n[(r = hi(n, r + 2))];
          else {
            if (n[r + 1] == 2) return hi(n, r + 2);
            break;
          }
        if (o == t || o == 0) return hi(n, r + 1);
      }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    return !!this.allActions(e, (n) => (n == t ? !0 : null));
  }
  allActions(e, t) {
    let n = this.stateSlot(e, 4),
      s = n ? t(n) : void 0;
    for (let r = this.stateSlot(e, 1); s == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1) r = hi(this.data, r + 2);
        else break;
      s = t(hi(this.data, r + 1));
    }
    return s;
  }
  nextStates(e) {
    let t = [];
    for (let n = this.stateSlot(e, 1); ; n += 3) {
      if (this.data[n] == 65535)
        if (this.data[n + 1] == 1) n = hi(this.data, n + 2);
        else break;
      if (!(this.data[n + 2] & 1)) {
        let s = this.data[n + 1];
        t.some((r, o) => o & 1 && r == s) || t.push(this.data[n], s);
      }
    }
    return t;
  }
  configure(e) {
    let t = Object.assign(Object.create(rr.prototype), this);
    if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
      let n = this.topRules[e.top];
      if (!n) throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = n;
    }
    return (
      e.tokenizers &&
        (t.tokenizers = this.tokenizers.map((n) => {
          let s = e.tokenizers.find((r) => r.from == n);
          return s ? s.to : n;
        })),
      e.specializers &&
        ((t.specializers = this.specializers.slice()),
        (t.specializerSpecs = this.specializerSpecs.map((n, s) => {
          let r = e.specializers.find((l) => l.from == n.external);
          if (!r) return n;
          let o = Object.assign(Object.assign({}, n), { external: r.to });
          return (t.specializers[s] = dd(o)), o;
        }))),
      e.contextTracker && (t.context = e.contextTracker),
      e.dialect && (t.dialect = this.parseDialect(e.dialect)),
      e.strict != null && (t.strict = e.strict),
      e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
      e.bufferLength != null && (t.bufferLength = e.bufferLength),
      t
    );
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    return this.termNames
      ? this.termNames[e]
      : String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects),
      n = t.map(() => !1);
    if (e)
      for (let r of e.split(" ")) {
        let o = t.indexOf(r);
        o >= 0 && (n[o] = !0);
      }
    let s = null;
    for (let r = 0; r < t.length; r++)
      if (!n[r])
        for (let o = this.dialects[t[r]], l; (l = this.data[o++]) != 65535; )
          (s || (s = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new DP(e, n, s);
  }
  static deserialize(e) {
    return new rr(e);
  }
}
function hi(i, e) {
  return i[e] | (i[e + 1] << 16);
}
function jP(i) {
  let e = null;
  for (let t of i) {
    let n = t.p.stoppedAt;
    (t.pos == t.p.stream.end || (n != null && t.pos > n)) &&
      t.p.parser.stateFlag(t.state, 2) &&
      (!e || e.score < t.score) &&
      (e = t);
  }
  return e;
}
function dd(i) {
  if (i.external) {
    let e = i.extend ? 1 : 0;
    return (t, n) => (i.external(t, n) << 1) | e;
  }
  return i.get;
}
// END @lezer/lr


// BEGIN lezer generated from .grammar?
const LP = 312,
  pd = 1,
  UP = 2,
  VP = 3,
  qP = 4,
  zP = 313,
  IP = 315,
  NP = 316,
  BP = 5,
  GP = 6,
  FP = 0,
  Th = [
    9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197,
    8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
  ],
  _m = 125,
  HP = 59,
  Ah = 47,
  KP = 42,
  JP = 43,
  ek = 45,
  tk = 60,
  ik = 44,
  nk = 63,
  sk = 46,
  rk = new YP({
    start: !1,
    shift(i, e) {
      return e == BP || e == GP || e == IP ? i : e == NP;
    },
    strict: !1,
  }),
  ok = new Al(
    (i, e) => {
      let { next: t } = i;
      (t == _m || t == -1 || e.context) && i.acceptToken(zP);
    },
    { contextual: !0, fallback: !0 }
  ),
  lk = new Al(
    (i, e) => {
      let { next: t } = i,
        n;
      Th.indexOf(t) > -1 ||
        (t == Ah && ((n = i.peek(1)) == Ah || n == KP)) ||
        (t != _m && t != HP && t != -1 && !e.context && i.acceptToken(LP));
    },
    { contextual: !0 }
  ),
  ak = new Al(
    (i, e) => {
      let { next: t } = i;
      if (t == JP || t == ek) {
        if ((i.advance(), t == i.next)) {
          i.advance();
          let n = !e.context && e.canShift(pd);
          i.acceptToken(n ? pd : UP);
        }
      } else
        t == nk &&
          i.peek(1) == sk &&
          (i.advance(),
          i.advance(),
          (i.next < 48 || i.next > 57) && i.acceptToken(VP));
    },
    { contextual: !0 }
  );
function ma(i, e) {
  return (
    (i >= 65 && i <= 90) ||
    (i >= 97 && i <= 122) ||
    i == 95 ||
    i >= 192 ||
    (!e && i >= 48 && i <= 57)
  );
}
const hk = new Al((i, e) => {
    if (i.next != tk || !e.dialectEnabled(FP) || (i.advance(), i.next == Ah))
      return;
    let t = 0;
    for (; Th.indexOf(i.next) > -1; ) i.advance(), t++;
    if (ma(i.next, !0)) {
      for (i.advance(), t++; ma(i.next, !1); ) i.advance(), t++;
      for (; Th.indexOf(i.next) > -1; ) i.advance(), t++;
      if (i.next == ik) return;
      for (let n = 0; ; n++) {
        if (n == 7) {
          if (!ma(i.next, !0)) return;
          break;
        }
        if (i.next != "extends".charCodeAt(n)) break;
        i.advance(), t++;
      }
    }
    i.acceptToken(qP, -t);
  }),
  ck = wc({
    "get set async static": w.modifier,
    "for while do if else switch try catch finally return throw break continue default case":
      w.controlKeyword,
    "in of await yield void typeof delete instanceof": w.operatorKeyword,
    "let var const using function class extends": w.definitionKeyword,
    "import export from": w.moduleKeyword,
    "with debugger as new": w.keyword,
    TemplateString: w.special(w.string),
    super: w.atom,
    BooleanLiteral: w.bool,
    this: w.self,
    null: w.null,
    Star: w.modifier,
    VariableName: w.variableName,
    "CallExpression/VariableName TaggedTemplateExpression/VariableName":
      w.function(w.variableName),
    VariableDefinition: w.definition(w.variableName),
    Label: w.labelName,
    PropertyName: w.propertyName,
    PrivatePropertyName: w.special(w.propertyName),
    "CallExpression/MemberExpression/PropertyName": w.function(w.propertyName),
    "FunctionDeclaration/VariableDefinition": w.function(
      w.definition(w.variableName)
    ),
    "ClassDeclaration/VariableDefinition": w.definition(w.className),
    PropertyDefinition: w.definition(w.propertyName),
    PrivatePropertyDefinition: w.definition(w.special(w.propertyName)),
    UpdateOp: w.updateOperator,
    "LineComment Hashbang": w.lineComment,
    BlockComment: w.blockComment,
    Number: w.number,
    String: w.string,
    Escape: w.escape,
    ArithOp: w.arithmeticOperator,
    LogicOp: w.logicOperator,
    BitOp: w.bitwiseOperator,
    CompareOp: w.compareOperator,
    RegExp: w.regexp,
    Equals: w.definitionOperator,
    Arrow: w.function(w.punctuation),
    ": Spread": w.punctuation,
    "( )": w.paren,
    "[ ]": w.squareBracket,
    "{ }": w.brace,
    "InterpolationStart InterpolationEnd": w.special(w.brace),
    ".": w.derefOperator,
    ", ;": w.separator,
    "@": w.meta,
    TypeName: w.typeName,
    TypeDefinition: w.definition(w.typeName),
    "type enum interface implements namespace module declare":
      w.definitionKeyword,
    "abstract global Privacy readonly override": w.modifier,
    "is keyof unique infer": w.operatorKeyword,
    JSXAttributeValue: w.attributeValue,
    JSXText: w.content,
    "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": w.angleBracket,
    "JSXIdentifier JSXNameSpacedName": w.tagName,
    "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName":
      w.attributeName,
    "JSXBuiltin/JSXIdentifier": w.standard(w.tagName),
  }),
  fk = {
    __proto__: null,
    export: 20,
    as: 25,
    from: 33,
    default: 36,
    async: 41,
    function: 42,
    extends: 54,
    this: 58,
    true: 66,
    false: 66,
    null: 78,
    void: 82,
    typeof: 86,
    super: 102,
    new: 136,
    delete: 148,
    yield: 157,
    await: 161,
    class: 166,
    public: 229,
    private: 229,
    protected: 229,
    readonly: 231,
    instanceof: 250,
    satisfies: 253,
    in: 254,
    const: 256,
    import: 290,
    keyof: 345,
    unique: 349,
    infer: 355,
    is: 391,
    abstract: 411,
    implements: 413,
    type: 415,
    let: 418,
    var: 420,
    using: 423,
    interface: 429,
    enum: 433,
    namespace: 439,
    module: 441,
    declare: 445,
    global: 449,
    for: 468,
    of: 477,
    while: 480,
    with: 484,
    do: 488,
    if: 492,
    else: 494,
    switch: 498,
    case: 504,
    try: 510,
    catch: 514,
    finally: 518,
    return: 522,
    throw: 526,
    break: 530,
    continue: 534,
    debugger: 538,
  },
  uk = {
    __proto__: null,
    async: 123,
    get: 125,
    set: 127,
    declare: 189,
    public: 191,
    private: 191,
    protected: 191,
    static: 193,
    abstract: 195,
    override: 197,
    readonly: 203,
    accessor: 205,
    new: 395,
  },
  dk = { __proto__: null, "<": 187 },
  pk = rr.deserialize({
    version: 14,
    states:
      "$@QO%TQ^OOO%[Q^OOO'_Q`OOP(lOWOOO*zQ?NdO'#CiO+RO!bO'#CjO+aO#tO'#CjO+oO!0LbO'#D^O.QQ^O'#DdO.bQ^O'#DoO%[Q^O'#DwO0fQ^O'#EPOOQ?Mr'#EX'#EXO1PQWO'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQWO'#GpO1dQWO'#ElO1iQWO'#ElO3hQ?NdO'#JmO6[Q?NdO'#JnO6uQWO'#F[O6zQ&jO'#FsOOQ?Mr'#Fe'#FeO7VO,YO'#FeO7eQ7[O'#FzO9RQWO'#FyOOQ?Mr'#Jn'#JnOOQ?Mp'#Jm'#JmO9WQWO'#GtOOQU'#KZ'#KZO9cQWO'#IUO9hQ?MxO'#IVOOQU'#JZ'#JZOOQU'#IZ'#IZQ`Q^OOO`Q^OOO9pQMnO'#DsO9wQ^O'#D{O:OQ^O'#D}O9^QWO'#GpO:VQ7[O'#CoO:eQWO'#EkO:pQWO'#EvO:uQ7[O'#FdO;dQWO'#GpOOQO'#K['#K[O;iQWO'#K[O;wQWO'#GxO;wQWO'#GyO;wQWO'#G{O9^QWO'#HOO<nQWO'#HRO>VQWO'#CeO>gQWO'#H_O>oQWO'#HeO>oQWO'#HgO`Q^O'#HiO>oQWO'#HkO>oQWO'#HnO>tQWO'#HtO>yQ?MyO'#HzO%[Q^O'#H|O?UQ?MyO'#IOO?aQ?MyO'#IQO9hQ?MxO'#ISO?lQ?NdO'#CiO@nQ`O'#DiQOQWOOO%[Q^O'#D}OAUQWO'#EQO:VQ7[O'#EkOAaQWO'#EkOAlQpO'#FdOOQU'#Cg'#CgOOQ?Mp'#Dn'#DnOOQ?Mp'#Jq'#JqO%[Q^O'#JqOOQO'#Jt'#JtOOQO'#Id'#IdOBlQ`O'#EdOOQ?Mp'#Ec'#EcOOQ?Mp'#Jx'#JxOChQ?NQO'#EdOCrQ`O'#ETOOQO'#Js'#JsODWQ`O'#JtOEeQ`O'#ETOCrQ`O'#EdPErO#@ItO'#CbPOOO)CDx)CDxOOOO'#I['#I[OE}O!bO,59UOOQ?Mr,59U,59UOOOO'#I]'#I]OF]O#tO,59UO%[Q^O'#D`OOOO'#I_'#I_OFkO!0LbO,59xOOQ?Mr,59x,59xOFyQ^O'#I`OG^QWO'#JoOI]QrO'#JoO+}Q^O'#JoOIdQWO,5:OOIzQWO'#EmOJXQWO'#KOOJdQWO'#J}OJdQWO'#J}OJlQWO,5;ZOJqQWO'#J|OOQ?Mv,5:Z,5:ZOJxQ^O,5:ZOLvQ?NdO,5:cOMgQWO,5:kONQQ?MxO'#J{ONXQWO'#JzO9WQWO'#JzONmQWO'#JzONuQWO,5;YONzQWO'#JzO!#PQrO'#JnOOQ?Mr'#Ci'#CiO%[Q^O'#EPO!#oQrO,5:pOOQQ'#Ju'#JuOOQO-E<f-E<fO9^QWO,5=[O!$VQWO,5=[O!$[Q^O,5;WO!&_Q7[O'#EhO!'xQWO,5;WO!'}Q^O'#DvO!(XQ`O,5;aO!(aQ`O,5;aO%[Q^O,5;aOOQU'#FS'#FSOOQU'#FU'#FUO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bO%[Q^O,5;bOOQU'#FY'#FYO!(oQ^O,5;sOOQ?Mr,5;x,5;xOOQ?Mr,5;y,5;yOOQ?Mr,5;{,5;{O%[Q^O'#IlO!*rQ?MxO,5<gO%[Q^O,5;bO!&_Q7[O,5;bO!+aQ7[O,5;bO!-RQ7[O'#EZO%[Q^O,5;vOOQ?Mr,5;z,5;zO!-YQ&jO'#FiO!.VQ&jO'#KSO!-qQ&jO'#KSO!.^Q&jO'#KSOOQO'#KS'#KSO!.rQ&jO,5<ROOOS,5<_,5<_O!/TQ^O'#FuOOOS'#Ik'#IkO7VO,YO,5<PO!/[Q&jO'#FwOOQ?Mr,5<P,5<PO!/{Q!LQO'#CvOOQ?Mr'#Cz'#CzO!0`O!0LbO'#DOO!0|Q7[O,5<dO!1TQWO,5<fO!2pQ$ISO'#GVO!2}QWO'#GWO!3SQWO'#GWO!4rQ$ISO'#G[O!5nQ`O'#G`OOQO'#Gk'#GkO!+hQ7[O'#GjOOQO'#Gm'#GmO!+hQ7[O'#GlO!6aQ!LQO'#JgOOQ?Mr'#Jg'#JgO!6kQWO'#JfO!6yQWO'#JeO!7RQWO'#CuOOQ?Mr'#Cx'#CxO!7ZQWO'#CzOOQ?Mr'#DS'#DSOOQ?Mr'#DU'#DUO1SQWO'#DWO!+hQ7[O'#F}O!+hQ7[O'#GPO!7`QWO'#GRO!7eQWO'#GSO!3SQWO'#GYO!+hQ7[O'#G_O!7jQWO'#EnO!8XQWO,5<eOOQ?Mp'#Cr'#CrO!8aQWO'#EoO!9ZQ`O'#EpOOQ?Mp'#J|'#J|O!9bQ?MxO'#K]O9hQ?MxO,5=`O`Q^O,5>pOOQU'#Jc'#JcOOQU,5>q,5>qOOQU-E<X-E<XO!;aQ?NdO,5:_O!9UQ`O,5:]O!=zQ?NdO,5:gO%[Q^O,5:gO!@bQ?NdO,5:iOOQO,5@v,5@vO!ARQ7[O,5=[O!AaQ?MxO'#JdO9RQWO'#JdO!ArQ?MxO,59ZO!A}Q`O,59ZO!BVQ7[O,59ZO:VQ7[O,59ZO!BbQWO,5;WO!BjQWO'#H^O!COQWO'#K`O%[Q^O,5;|O!9UQ`O,5<OO!CWQWO,5=wO!C]QWO,5=wO!CbQWO,5=wO9hQ?MxO,5=wO;wQWO,5=gOOQO'#Cv'#CvO!CpQ`O,5=dO!CxQ7[O,5=eO!DTQWO,5=gO!DYQpO,5=jO!DbQWO'#K[O>tQWO'#HTO9^QWO'#HVO!DgQWO'#HVO:VQ7[O'#HXO!DlQWO'#HXOOQU,5=m,5=mO!DqQWO'#HYO!ESQWO'#CoO!EXQWO,59PO!EcQWO,59PO!GhQ^O,59POOQU,59P,59PO!GxQ?MxO,59PO%[Q^O,59PO!JTQ^O'#HaOOQU'#Hb'#HbOOQU'#Hc'#HcO`Q^O,5=yO!JkQWO,5=yO`Q^O,5>PO`Q^O,5>RO!JpQWO,5>TO`Q^O,5>VO!JuQWO,5>YO!JzQ^O,5>`OOQU,5>f,5>fO%[Q^O,5>fO9hQ?MxO,5>hOOQU,5>j,5>jO# UQWO,5>jOOQU,5>l,5>lO# UQWO,5>lOOQU,5>n,5>nO# rQ`O'#D[O%[Q^O'#JqO# |Q`O'#JqO#!kQ`O'#DjO#!|Q`O'#DjO#%_Q^O'#DjO#%fQWO'#JpO#%nQWO,5:TO#%sQWO'#EqO#&RQWO'#KPO#&ZQWO,5;[O#&`Q`O'#DjO#&mQ`O'#ESOOQ?Mr,5:l,5:lO%[Q^O,5:lO#&tQWO,5:lO>tQWO,5;VO!A}Q`O,5;VO!BVQ7[O,5;VO:VQ7[O,5;VO#&|QWO,5@]O#'RQ(CYO,5:pOOQO-E<b-E<bO#(XQ?NQO,5;OOCrQ`O,5:oO#(cQ`O,5:oOCrQ`O,5;OO!ArQ?MxO,5:oOOQ?Mp'#Eg'#EgOOQO,5;O,5;OO%[Q^O,5;OO#(pQ?MxO,5;OO#({Q?MxO,5;OO!A}Q`O,5:oOOQO,5;U,5;UO#)ZQ?MxO,5;OPOOO'#IY'#IYP#)oO#@ItO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ?Mr1G.p1G.pOOOO-E<Z-E<ZO#)zQpO,59zOOOO-E<]-E<]OOQ?Mr1G/d1G/dO#*PQrO,5>zO+}Q^O,5>zOOQO,5?Q,5?QO#*ZQ^O'#I`OOQO-E<^-E<^O#*hQWO,5@ZO#*pQrO,5@ZO#*wQWO,5@iOOQ?Mr1G/j1G/jO%[Q^O,5@jO#+PQWO'#IfOOQO-E<d-E<dO#*wQWO,5@iOOQ?Mp1G0u1G0uOOQ?Mv1G/u1G/uOOQ?Mv1G0V1G0VO%[Q^O,5@gO#+eQ?MxO,5@gO#+vQ?MxO,5@gO#+}QWO,5@fO9WQWO,5@fO#,VQWO,5@fO#,eQWO'#IiO#+}QWO,5@fOOQ?Mp1G0t1G0tO!(XQ`O,5:rO!(dQ`O,5:rOOQQ,5:t,5:tO#-VQYO,5:tO#-_Q7[O1G2vO9^QWO1G2vOOQ?Mr1G0r1G0rO#-mQ?NdO1G0rO#.rQ?NbO,5;SOOQ?Mr'#GU'#GUO#/`Q?NdO'#JgO!$[Q^O1G0rO#1hQrO'#JrO%[Q^O'#JrO#1rQWO,5:bOOQ?Mr'#D['#D[OOQ?Mr1G0{1G0{O%[Q^O1G0{OOQ?Mr1G1e1G1eO#1wQWO1G0{O#4]Q?NdO1G0|O#4dQ?NdO1G0|O#6zQ?NdO1G0|O#7RQ?NdO1G0|O#9iQ?NdO1G0|O#<PQ?NdO1G0|O#<WQ?NdO1G0|O#<_Q?NdO1G0|O#>uQ?NdO1G0|O#>|Q?NdO1G0|O#AZQ07bO'#CiO#CUQ07bO1G1_O#C]Q07bO'#JnO#CpQ?NdO,5?WOOQ?Mp-E<j-E<jO#E}Q?NdO1G0|O#FzQ?NdO1G0|OOQ?Mr1G0|1G0|O#GzQ7[O'#JwO#HUQWO,5:uO#HZQ?NdO1G1bO#H}Q&jO,5<VO#IVQ&jO,5<WO#I_Q&jO'#FnO#IvQWO'#FmOOQO'#KT'#KTOOQO'#Ij'#IjO#I{Q&jO1G1mOOQ?Mr1G1m1G1mOOOS1G1x1G1xO#J^Q07bO'#JmO#JhQWO,5<aO!(oQ^O,5<aOOOS-E<i-E<iOOQ?Mr1G1k1G1kO#JmQ`O'#KSOOQ?Mr,5<c,5<cO#JuQ`O,5<cO!&_Q7[O'#DQOOOO'#I^'#I^O#JzO!0LbO,59jOOQ?Mr,59j,59jO%[Q^O1G2OO!7eQWO'#InO#KVQ7[O,5<xOOQ?Mr,5<u,5<uO!+hQ7[O'#IqO#KuQ7[O,5=UO!+hQ7[O'#IsO#LhQ7[O,5=WO!&_Q7[O,5=YOOQO1G2Q1G2QO#LrQpO'#CrO#MVQ$ISO'#EoO#NUQ`O'#G`O#NrQpO,5<qO#NyQWO'#KWO9WQWO'#KWO$ XQWO,5<sO!+hQ7[O,5<rO$ ^QWO'#GXO$ oQWO,5<rO$ tQpO'#GUO$!RQpO'#KXO$!]QWO'#KXO!&_Q7[O'#KXO$!bQWO,5<vO$!gQ`O'#GaO!5iQ`O'#GaO$!xQWO'#GcO$!}QWO'#GeO!3SQWO'#GhO$#SQ?MxO'#IpO$#_Q`O,5<zOOQ?Mv,5<z,5<zO$#fQ`O'#GaO$#tQ`O'#GbO$#|Q`O'#GbO$$RQ7[O,5=UO$$cQ7[O,5=WOOQ?Mr,5=Z,5=ZO!+hQ7[O,5@QO!+hQ7[O,5@QO$$sQWO'#IuO$%OQWO,5@PO$%WQWO,59aOOQ?Mr,59f,59fO$%zQ!LSO,59rOOQ?Mr'#Jk'#JkO$&mQ7[O,5<iO$'`Q7[O,5<kO@fQWO,5<mOOQ?Mr,5<n,5<nO$'jQWO,5<tO$'oQ7[O,5<yO$(PQWO'#JzO!$[Q^O1G2PO$(UQWO1G2PO9WQWO'#J}O9WQWO'#EqO%[Q^O'#EqO9WQWO'#IwO$(ZQ?MxO,5@wOOQU1G2z1G2zOOQU1G4[1G4[OOQ?Mr1G/y1G/yOOQ?Mr1G/w1G/wO$*]Q?NdO1G0ROOQU1G2v1G2vO!&_Q7[O1G2vO%[Q^O1G2vO#-bQWO1G2vO$,aQ7[O'#EhOOQ?Mp,5@O,5@OO$,kQ?MxO,5@OOOQU1G.u1G.uO!ArQ?MxO1G.uO!A}Q`O1G.uO!BVQ7[O1G.uO$,|QWO1G0rO$-RQWO'#CiO$-^QWO'#KaO$-fQWO,5=xO$-kQWO'#KaO$-pQWO'#KaO$.OQWO'#I}O$.^QWO,5@zO$.fQrO1G1hOOQ?Mr1G1j1G1jO9^QWO1G3cO@fQWO1G3cO$.mQWO1G3cO$.rQWO1G3cOOQU1G3c1G3cO!DTQWO1G3RO!&_Q7[O1G3OO$.wQWO1G3OOOQU1G3P1G3PO!&_Q7[O1G3PO$.|QWO1G3PO$/UQ`O'#G}OOQU1G3R1G3RO!5iQ`O'#IyO!DYQpO1G3UOOQU1G3U1G3UOOQU,5=o,5=oO$/^Q7[O,5=qO9^QWO,5=qO$!}QWO,5=sO9RQWO,5=sO!A}Q`O,5=sO!BVQ7[O,5=sO:VQ7[O,5=sO$/lQWO'#K_O$/wQWO,5=tOOQU1G.k1G.kO$/|Q?MxO1G.kO@fQWO1G.kO$0XQWO1G.kO9hQ?MxO1G.kO$2aQrO,5@|O$2nQWO,5@|O9WQWO,5@|O$2yQ^O,5={O$3QQWO,5={OOQU1G3e1G3eO`Q^O1G3eOOQU1G3k1G3kOOQU1G3m1G3mO>oQWO1G3oO$3VQ^O1G3qO$7ZQ^O'#HpOOQU1G3t1G3tO$7hQWO'#HvO>tQWO'#HxOOQU1G3z1G3zO$7pQ^O1G3zO9hQ?MxO1G4QOOQU1G4S1G4SOOQ?Mp'#G]'#G]O9hQ?MxO1G4UO9hQ?MxO1G4WO$;wQWO,5@]O!(oQ^O,5;]O9WQWO,5;]O>tQWO,5:UO!(oQ^O,5:UO!A}Q`O,5:UO$;|Q07bO,5:UOOQO,5;],5;]O$<WQ`O'#IaO$<nQWO,5@[OOQ?Mr1G/o1G/oO$<vQ`O'#IgO$=QQWO,5@kOOQ?Mp1G0v1G0vO#!|Q`O,5:UOOQO'#Ic'#IcO$=YQ`O,5:nOOQ?Mv,5:n,5:nO#&wQWO1G0WOOQ?Mr1G0W1G0WO%[Q^O1G0WOOQ?Mr1G0q1G0qO>tQWO1G0qO!A}Q`O1G0qO!BVQ7[O1G0qOOQ?Mp1G5w1G5wO!ArQ?MxO1G0ZOOQO1G0j1G0jO%[Q^O1G0jO$=aQ?MxO1G0jO$=lQ?MxO1G0jO!A}Q`O1G0ZOCrQ`O1G0ZO$=zQ?MxO1G0jOOQO1G0Z1G0ZO$>`Q?NdO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$>jQpO,5<gO$>rQrO1G4fOOQO1G4l1G4lO%[Q^O,5>zO$>|QWO1G5uO$?UQWO1G6TO$?^QrO1G6UO9WQWO,5?QO$?hQ?NdO1G6RO%[Q^O1G6RO$?xQ?MxO1G6RO$@ZQWO1G6QO$@ZQWO1G6QO9WQWO1G6QO$@cQWO,5?TO9WQWO,5?TOOQO,5?T,5?TO$@wQWO,5?TO$(PQWO,5?TOOQO-E<g-E<gOOQQ1G0^1G0^OOQQ1G0`1G0`O#-YQWO1G0`OOQU7+(b7+(bO!&_Q7[O7+(bO%[Q^O7+(bO$AVQWO7+(bO$AbQ7[O7+(bO$ApQ?NdO,5=UO$CxQ?NdO,5=WO$FQQ?NdO,5=UO$H`Q?NdO,5=WO$JnQ?NdO,59rO$LsQ?NdO,5<iO$N{Q?NdO,5<kO%#TQ?NdO,5<yOOQ?Mr7+&^7+&^O%%cQ?NdO7+&^O%&VQ^O'#IbO%&dQWO,5@^O%&lQrO,5@^OOQ?Mr1G/|1G/|O%&vQWO7+&gOOQ?Mr7+&g7+&gO%&{Q07bO,5:cO%[Q^O7+&yO%'VQ07bO,5:_O%'dQ07bO,5:gO%'nQ07bO,5:iO%'xQ7[O'#IeO%(SQWO,5@cOOQ?Mr1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%([QtO,5<YO!(oQ^O,5<XOOQO-E<h-E<hOOQ?Mr7+'X7+'XOOOS7+'d7+'dOOOS1G1{1G1{O%(gQWO1G1{OOQ?Mr1G1}1G1}O%(lQpO,59lOOOO-E<[-E<[OOQ?Mr1G/U1G/UO%(sQ?NdO7+'jOOQ?Mr,5?Y,5?YO%)gQpO,5?YOOQ?Mr1G2d1G2dP!&_Q7[O'#InPOQ?Mr-E<l-E<lO%*VQ7[O,5?]OOQ?Mr-E<o-E<oO%*xQ7[O,5?_OOQ?Mr-E<q-E<qO%+SQpO1G2tO%+ZQpO'#CrO%+qQ7[O'#J}O%+xQ^O'#EqOOQ?Mr1G2]1G2]O%,SQWO'#ImO%,hQWO,5@rO%,hQWO,5@rO%,pQWO,5@rO%,{QWO,5@rOOQO1G2_1G2_O%-ZQ7[O1G2^O!+hQ7[O1G2^O%-kQ$ISO'#IoO%-xQWO,5@sO!&_Q7[O,5@sO%.QQpO,5@sOOQ?Mr1G2b1G2bOOQ?Mp,5<{,5<{OOQ?Mp,5<|,5<|O$(PQWO,5<|OCcQWO,5<|O!A}Q`O,5<{OOQO'#Gd'#GdO%.[QWO,5<}OOQ?Mp,5=P,5=PO$(PQWO,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ?Mv1G2f1G2fO!5iQ`O,5<{O%.dQWO,5<|O$!xQWO,5<}O%.oQ`O,5<|O!+hQ7[O'#IqO%/`Q7[O1G2pO!+hQ7[O'#IsO%0RQ7[O1G2rO%0]Q7[O1G5lO%0gQ7[O1G5lOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9UQ`O,59tO%[Q^O,59tOOQ?Mr,5<h,5<hO%0tQWO1G2XO!+hQ7[O1G2`O%0yQ?NdO7+'kOOQ?Mr7+'k7+'kO!$[Q^O7+'kO%1mQWO,5;]OOQ?Mp,5?c,5?cOOQ?Mp-E<u-E<uO%1rQpO'#KYO#&wQWO7+(bO4UQrO7+(bO$AYQWO7+(bO%1|Q?NbO'#CiO%2aQ?NbO,5=QO%3RQWO,5=QOOQ?Mp1G5j1G5jOOQU7+$a7+$aO!ArQ?MxO7+$aO!A}Q`O7+$aO!$[Q^O7+&^O%3WQWO'#I|O%3oQWO,5@{OOQO1G3d1G3dO9^QWO,5@{O%3oQWO,5@{O%3wQWO,5@{OOQO,5?i,5?iOOQO-E<{-E<{OOQ?Mr7+'S7+'SO%3|QWO7+(}O9hQ?MxO7+(}O9^QWO7+(}O@fQWO7+(}OOQU7+(m7+(mO%4RQ?NbO7+(jO!&_Q7[O7+(jO%4]QpO7+(kOOQU7+(k7+(kO!&_Q7[O7+(kO%4dQWO'#K^O%4oQWO,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQU7+(p7+(pO%6RQ`O'#HWOOQU1G3]1G3]O!&_Q7[O1G3]O%[Q^O1G3]O%6YQWO1G3]O%6eQ7[O1G3]O9hQ?MxO1G3_O$!}QWO1G3_O9RQWO1G3_O!A}Q`O1G3_O!BVQ7[O1G3_O%6sQWO'#I{O%7XQWO,5@yO%7aQ`O,5@yOOQ?Mp1G3`1G3`OOQU7+$V7+$VO@fQWO7+$VO9hQ?MxO7+$VO%7lQWO7+$VO%[Q^O1G6hO%[Q^O1G6iO%7qQ?MxO1G6hO%7{Q^O1G3gO%8SQWO1G3gO%8XQ^O1G3gOOQU7+)P7+)PO9hQ?MxO7+)ZO`Q^O7+)]OOQU'#Kd'#KdOOQU'#JO'#JOO%8`Q^O,5>[OOQU,5>[,5>[O%[Q^O'#HqO%8mQWO'#HsOOQU,5>b,5>bO9WQWO,5>bOOQU,5>d,5>dOOQU7+)f7+)fOOQU7+)l7+)lOOQU7+)p7+)pOOQU7+)r7+)rO%8rQ`O1G5wO%9WQ07bO1G0wO%9bQWO1G0wOOQO1G/p1G/pO%9mQ07bO1G/pO>tQWO1G/pO!(oQ^O'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!A}Q`O1G/pOOQO-E<a-E<aOOQ?Mv1G0Y1G0YOOQ?Mr7+%r7+%rO#&wQWO7+%rOOQ?Mr7+&]7+&]O>tQWO7+&]O!A}Q`O7+&]OOQO7+%u7+%uO$>`Q?NdO7+&UOOQO7+&U7+&UO%[Q^O7+&UO%9wQ?MxO7+&UO!ArQ?MxO7+%uO!A}Q`O7+%uO%:SQ?MxO7+&UO%:bQ?NdO7++mO%[Q^O7++mO%:rQWO7++lO%:rQWO7++lOOQO1G4o1G4oO9WQWO1G4oO%:zQWO1G4oOOQQ7+%z7+%zO#&wQWO<<K|O4UQrO<<K|O%;YQWO<<K|OOQU<<K|<<K|O!&_Q7[O<<K|O%[Q^O<<K|O%;bQWO<<K|O%;mQ?NdO,5?]O%=uQ?NdO,5?_O%?}Q?NdO1G2^O%B]Q?NdO1G2pO%DeQ?NdO1G2rO%FmQrO,5>|O%[Q^O,5>|OOQO-E<`-E<`O%FwQWO1G5xOOQ?Mr<<JR<<JRO%GPQ07bO1G0rO%IWQ07bO1G0|O%I_Q07bO1G0|O%K`Q07bO1G0|O%KgQ07bO1G0|O%MhQ07bO1G0|O& iQ07bO1G0|O& pQ07bO1G0|O& wQ07bO1G0|O&#xQ07bO1G0|O&$PQ07bO1G0|O&$WQ?NdO<<JeO&&OQ07bO1G0|O&&{Q07bO1G0|O&'{Q07bO'#JgO&*OQ07bO1G1bO&*]Q07bO1G0RO&*gQ7[O,5?POOQO-E<c-E<cO!(oQ^O'#FpOOQO'#KU'#KUOOQO1G1t1G1tO&*qQWO1G1sO&*vQ07bO,5?WOOOS7+'g7+'gOOOO1G/W1G/WOOQ?Mr1G4t1G4tO!+hQ7[O7+(`O&-WQrO'#CiO&-bQWO,5?XO9WQWO,5?XOOQO-E<k-E<kO&-pQWO1G6^O&-pQWO1G6^O&-xQWO1G6^O&.TQ7[O7+'xO&.eQpO,5?ZO&.oQWO,5?ZO!&_Q7[O,5?ZOOQO-E<m-E<mO&.tQpO1G6_O&/OQWO1G6_OOQ?Mp1G2h1G2hO$(PQWO1G2hOOQ?Mp1G2g1G2gO&/WQWO1G2iO!&_Q7[O1G2iOOQ?Mp1G2n1G2nO!A}Q`O1G2gOCcQWO1G2hO&/]QWO1G2iO&/eQWO1G2hO$!xQWO1G2iO&0XQ7[O,5?]OOQ?Mr-E<p-E<pO&0zQ7[O,5?_OOQ?Mr-E<r-E<rO!+hQ7[O7++WOOQ?Mr1G/`1G/`O&1UQWO1G/`OOQ?Mr7+'s7+'sO&1ZQ7[O7+'zO&1kQ?NdO<<KVOOQ?Mr<<KV<<KVO&2_QWO1G0wO!&_Q7[O'#IvO&2dQWO,5@tO&4fQrO<<K|O!&_Q7[O1G2lOOQU<<G{<<G{O!ArQ?MxO<<G{O&4mQ?NdO<<IxOOQ?Mr<<Ix<<IxOOQO,5?h,5?hO&5aQWO,5?hO&5fQWO,5?hOOQO-E<z-E<zO&5tQWO1G6gO&5tQWO1G6gO9^QWO1G6gO@fQWO<<LiOOQU<<Li<<LiO&5|QWO<<LiO9hQ?MxO<<LiOOQU<<LU<<LUO%4RQ?NbO<<LUOOQU<<LV<<LVO%4]QpO<<LVO&6RQ`O'#IxO&6^QWO,5@xO!(oQ^O,5@xOOQU1G3T1G3TO%+xQ^O'#JqOOQO'#Iz'#IzO9hQ?MxO'#IzO&6fQ`O,5=rOOQU,5=r,5=rO&6mQ`O'#EdO&7RQ`O'#GcO&7WQWO7+(wO&7]QWO7+(wOOQU7+(w7+(wO!&_Q7[O7+(wO%[Q^O7+(wO&7eQWO7+(wOOQU7+(y7+(yO9hQ?MxO7+(yO$!}QWO7+(yO9RQWO7+(yO!A}Q`O7+(yO&7pQWO,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&7{QWO1G6eO9hQ?MxO<<GqOOQU<<Gq<<GqO@fQWO<<GqO&8TQWO7+,SO&8YQWO7+,TO%[Q^O7+,SO%[Q^O7+,TOOQU7+)R7+)RO&8_QWO7+)RO&8dQ^O7+)RO&8kQWO7+)ROOQU<<Lu<<LuOOQU<<Lw<<LwOOQU-E<|-E<|OOQU1G3v1G3vO&8pQWO,5>]OOQU,5>_,5>_O&8uQWO1G3|O9WQWO7+&cO!(oQ^O7+&cOOQO7+%[7+%[O&8zQ07bO1G6UO>tQWO7+%[OOQ?Mr<<I^<<I^OOQ?Mr<<Iw<<IwO>tQWO<<IwOOQO<<Ip<<IpO$>`Q?NdO<<IpO%[Q^O<<IpOOQO<<Ia<<IaO!ArQ?MxO<<IaO&9UQ?MxO<<IpO&9aQ?NdO<= XO&9qQWO<= WOOQO7+*Z7+*ZO9WQWO7+*ZOOQUANAhANAhO&9yQrOANAhO!&_Q7[OANAhO#&wQWOANAhO4UQrOANAhO&:QQWOANAhO%[Q^OANAhO&:YQ?NdO7+'xO&<hQ?NdO,5?]O&>pQ?NdO,5?_O&@xQ?NdO7+'zO&CWQrO1G4hO&CbQ07bO7+&^O&EcQ07bO,5=UO&GgQ07bO,5=WO&GwQ07bO,5=UO&HXQ07bO,5=WO&HiQ07bO,59rO&JlQ07bO,5<iO&LlQ07bO,5<kO&N}Q07bO,5<yO'!pQ07bO7+'jO'!}Q07bO7+'kO'#[QWO,5<[OOQO7+'_7+'_O'#aQ7[O<<KzOOQO1G4s1G4sO'#hQWO1G4sO'#sQWO1G4sO'$RQWO7++xO'$RQWO7++xO!&_Q7[O1G4uO'$ZQpO1G4uO'$eQWO7++yOOQ?Mp7+(S7+(SO'$mQWO7+(TO'$xQpO7+(TOOQ?Mp7+(R7+(RO$(PQWO7+(SO'%PQWO7+(TO!&_Q7[O7+(TOCcQWO7+(SO'%UQWO7+(TO'%^Q7[O<<NrOOQ?Mr7+$z7+$zO'%hQpO,5?bOOQO-E<t-E<tO'%rQ?NbO7+(WOOQUAN=gAN=gO9^QWO1G5SOOQO1G5S1G5SO'&SQWO1G5SO'&XQWO7+,RO'&XQWO7+,RO9hQ?MxOANBTO@fQWOANBTOOQUANBTANBTOOQUANApANApOOQUANAqANAqO'&aQWO,5?dOOQO-E<v-E<vO'&lQ07bO1G6dOOQO,5?f,5?fOOQO-E<x-E<xOOQU1G3^1G3^O%+xQ^O,5<}O'&vQWO,5<}OOQU<<Lc<<LcO!&_Q7[O<<LcO&7WQWO<<LcO'&{QWO<<LcO%[Q^O<<LcOOQU<<Le<<LeO9hQ?MxO<<LeO$!}QWO<<LeO9RQWO<<LeO''TQ`O1G5RO''`QWO7+,POOQUAN=]AN=]O9hQ?MxOAN=]OOQU<= n<= nOOQU<= o<= oO''hQWO<= nO''mQWO<= oOOQU<<Lm<<LmO''rQWO<<LmO''wQ^O<<LmOOQU1G3w1G3wO>tQWO7+)hO'(OQWO<<I}O'(ZQ07bO<<I}OOQO<<Hv<<HvOOQ?MrAN?cAN?cOOQOAN?[AN?[O$>`Q?NdOAN?[OOQOAN>{AN>{O%[Q^OAN?[OOQO<<Mu<<MuOOQUG27SG27SO!&_Q7[OG27SO#&wQWOG27SO'(eQrOG27SO4UQrOG27SO'(lQWOG27SO'(tQ07bO<<JeO')RQ07bO1G2^O'*tQ07bO,5?]O',tQ07bO,5?_O'.tQ07bO1G2pO'0tQ07bO1G2rO'2tQ07bO<<KVO'3RQ07bO<<IxOOQO1G1v1G1vO!+hQ7[OANAfOOQO7+*_7+*_O'3`QWO7+*_O'3kQWO<= dO'3sQpO7+*aOOQ?Mp<<Ko<<KoO$(PQWO<<KoOCcQWO<<KoO'3}QWO<<KoOOQ?Mp<<Kn<<KnO'4YQpO<<KoO$(PQWO<<KnO'4aQWO<<KoO!&_Q7[O<<KoOOQO7+*n7+*nO9^QWO7+*nO'4fQWO<= mOOQUG27oG27oO9hQ?MxOG27oO!(oQ^O1G5OO'4nQWO7+,OO&7WQWOANA}OOQUANA}ANA}O!&_Q7[OANA}O'4vQWOANA}OOQUANBPANBPO9hQ?MxOANBPO$!}QWOANBPOOQO'#H['#H[OOQO7+*m7+*mOOQUG22wG22wOOQUANEYANEYOOQUANEZANEZOOQUANBXANBXO'5OQWOANBXOOQU<<MS<<MSO!(oQ^OAN?iOOQOG24vG24vO$>`Q?NdOG24vO#&wQWOLD,nOOQULD,nLD,nO!&_Q7[OLD,nO'5TQrOLD,nO'5[Q07bO7+'xO'6}Q07bO,5?]O'8}Q07bO,5?_O':}Q07bO7+'zO'<pQ7[OG27QOOQO<<My<<MyOOQ?MpANAZANAZO$(PQWOANAZOCcQWOANAZO'=QQWOANAZOOQ?MpANAYANAYO'=]QpOANAZOOQO<<NY<<NYOOQULD-ZLD-ZO'=dQ07bO7+*jOOQUG27iG27iO&7WQWOG27iO!&_Q7[OG27iOOQUG27kG27kO9hQ?MxOG27kOOQUG27sG27sO'=nQ07bOG25TOOQOLD*bLD*bOOQU!$(!Y!$(!YO#&wQWO!$(!YO!&_Q7[O!$(!YO'=xQ?NdOG27QOOQ?MpG26uG26uO$(PQWOG26uOCcQWOG26uO'@WQWOG26uOOQULD-TLD-TO&7WQWOLD-TOOQULD-VLD-VOOQU!)9Et!)9EtO#&wQWO!)9EtOOQ?MpLD,aLD,aO$(PQWOLD,aOCcQWOLD,aOOQU!$(!o!$(!oOOQU!.K;`!.K;`O'@cQ07bOG27QOOQ?Mp!$( {!$( {O$(PQWO!$( {OOQ?Mp!)9Eg!)9EgO!(oQ^O'#DwO1PQWO'#EUO'BUQrO'#JmO'B]QMnO'#DsO'BdQ^O'#D{O'BkQrO'#CiO'ERQrO'#CiO!(oQ^O'#D}O'EcQ^O,5;WO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O,5;bO!(oQ^O'#IlO'GfQWO,5<gO!(oQ^O,5;bO'GnQ7[O,5;bO'IXQ7[O,5;bO!(oQ^O,5;vO!&_Q7[O'#GjO'GnQ7[O'#GjO!&_Q7[O'#GlO'GnQ7[O'#GlO1SQWO'#DWO1SQWO'#DWO!&_Q7[O'#F}O'GnQ7[O'#F}O!&_Q7[O'#GPO'GnQ7[O'#GPO!&_Q7[O'#G_O'GnQ7[O'#G_O!(oQ^O,5:gO'I`Q`O'#D[O!(oQ^O,5@jO'EcQ^O1G0rO'IjQ07bO'#CiO!(oQ^O1G2OO!&_Q7[O'#IqO'GnQ7[O'#IqO!&_Q7[O'#IsO'GnQ7[O'#IsO'ItQpO'#CrO!&_Q7[O,5<rO'GnQ7[O,5<rO'EcQ^O1G2PO!(oQ^O7+&yO!&_Q7[O1G2^O'GnQ7[O1G2^O!&_Q7[O'#IqO'GnQ7[O'#IqO!&_Q7[O'#IsO'GnQ7[O'#IsO!&_Q7[O1G2`O'GnQ7[O1G2`O'EcQ^O7+'kO'EcQ^O7+&^O!&_Q7[OANAfO'GnQ7[OANAfO'JXQWO'#ElO'J^QWO'#ElO'JfQWO'#F[O'JkQWO'#EvO'JpQWO'#KOO'J{QWO'#J|O'KWQWO,5;WO'K]Q7[O,5<dO'KdQWO'#GWO'KiQWO'#GWO'KnQWO,5<eO'KvQWO,5;WO'LOQ07bO1G1_O'LVQWO,5<rO'L[QWO,5<rO'LaQWO,5<tO'LfQWO,5<tO'LkQWO1G2PO'LpQWO1G0rO'LuQ7[O<<KzO'L|Q7[O<<KzO7eQ7[O'#FzO9RQWO'#FyOAaQWO'#EkO!(oQ^O,5;sO!3SQWO'#GWO!3SQWO'#GWO!3SQWO'#GYO!3SQWO'#GYO!+hQ7[O7+(`O!+hQ7[O7+(`O%+SQpO1G2tO%+SQpO1G2tO!&_Q7[O,5=YO!&_Q7[O,5=Y",
    stateData:
      "'NQ~O'wOS'xOSTOS'yRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(OSO(QTO(TUO([VO(j[O(yiO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y;QO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O'y!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'u]X([]X(m]X(t]X(u]X~O!d%PX~P(qO_!}O(Q#PO(R!}O(S#PO~O_#QO(S#PO(T#PO(U#QO~Ou#SO!R#TO(]#TO(^#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O;UO(QTO(TUO([VO(j[O(yiO~O!X#ZO!Y#WO!V(cP!V(qP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(QTO(TUO([VO(j[O(yiO~Om#mO!X#iO!y]O#f#lO#g#iO(O;VO!h(nP~P.iO!i#oO(O#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y$_O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~Oa(aX'u(aX's(aX!h(aX!V(aX![(aX%f(aX!d(aX~P1qO#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX![(bX%f(bX~Oa(bX'u(bX's(bX!V(bX!h(bXs(bX!d(bX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(O$sO(QTO(TUO([$uO(t$}O(u%POg(XP~O!i%cO~O!P%fO![%gO(O%eO~O!d%kO~Oa%lO'u%lO~O}%pO~P%[O(P!lO~P%[O%k%tO~P%[Oh%VO!i%cO(O%eO(P!lO~Oe%{O!i%cO(O%eO~O#s$RO~O}&QO![%}O!i&PO%g&TO(O%eO(P!lO(QTO(TUO`)SP~O!u#sO~O%p&VO!P)OX![)OX(O)OX~O(O&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(P!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'u%lO~Oa%lO't&{O'u%lO~Oa%lO't&}O'u%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(P!lO(QTO(TUO~Op'RO!P'QO!X'UO(`'PO!Z(dP!Z(sP~P@YOk'_O![']O(O%eO~Oe'dO!i%cO(O%eO~O}&QO!i&PO~Op!nO!P!oO!y;QO#Q!pO#R!pO#T!pO#U!pO(P!lO(QTO(TUO(`!mO(j!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%VO!d#vO!i%cO'u%lO(m'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(QTO(TUO(`!mO(j!sO~O![XOp(hX!P(hX!_(hX!`(hX!a(hX!y(hX#Q(hX#R(hX#S(hX#T(hX#U(hX#X(hX#Y(hX(P(hX(Q(hX(T(hX(`(hX(j(hX~O!`'iO!a'iO(P!lO~PCrO'z'uO'{'uO'|'wO~O_!}O(Q'yO(R!}O(S'yO~O_#QO(S'yO(T'yO(U#QO~Ou#SO!R#TO(]#TO(^'}O~O!X(PO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(RO!V(cX~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y(RO!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~O!V(cX~PGfO!V(WO~O!V(pX!Y(pX!d(pX!h(pX(m(pX~O#](pX#h#aX!Z(pX~PIiO#](XO!V(rX!Y(rX~O!Y(YO!V(qX~O!V(]O~O#]$eO~PIiO!Z(^O~P`OR#zO}#yO!P#{O!i#xO([VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(m!ka(t!ka(u!ka~Oa!ka'u!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKPO!h(_O~O!d#vO#](`O(m'mO!Y(oXa(oX'u(oX~O!h(oX~PMlO!P%fO![%gO!y]O#f(eO#g(dO(O%eO~O!Y(fO!h(nX~O!h(hO~O!P%fO![%gO#g(dO(O%eO~OP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#s(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O!d#vO!h(bX~P! YOR(jO}(iO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(O!xa~P!#ZO!u(nO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~O#h(tO~O!X(vO!h(fP~P%[O(`(xO(j[O~O!P(zO!i#xO(`(xO(j[O~OP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![!eO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(O)XO(QTO(TUO([VO(j[O(y<xO~O!Y$_Oa$oa'u$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)`O~P!&_Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~Og(kP~P!+hO})eO!d)dO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)dO![(vX$Y(vX$[(vX$^(vX$e(vX~O})eO~P!-qO})eO![(vX$Y(vX$[(vX$^(vX$e(vX~O![)gO$Y)kO$[)fO$^)fO$e)lO~O!X)oO~P!(oO$[$hO$^$gO$e)sO~Ok$xX}$xX!P$xX#P$xX(t$xX(u$xX~OgjXg$xXkjX!YjX#]jX~P!/gOu)uO(])vO(^)xO~Ok*RO})zO!P){O(t$}O(u%PO~Og)yO~P!0kOg*SO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P*UO![*VO!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(QTO(TUO([$uO(t$}O(u%PO~O!X*YO(O*TO!h(zP~P!1YO#h*[O~O!i*]O~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(O*_O(QTO(TUO([$uO(t$}O(u%PO~O!X*bO!V({P~P!3XOo*nO!P*fO!_*lO!`*eO!a*eO!i*]O#X*mO%]*hO(P!lO(`!mO~O!Z*kO~P!4|O#P$dOk(ZX}(ZX!P(ZX(t(ZX(u(ZX!Y(ZX#](ZX~Og(ZX#}(ZX~P!5uOk*sO#]*rOg(YX!Y(YX~O!Y*tOg(XX~O(O&WOg(XP~Op*wO~O!i*|O~O(O(rO~Om+QO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(O%eO!h(nP~O!d#vO#h+RO~O!P%fO!X+TO!Y(YO![%gO(O%eO!V(qP~Op'XO!P+VO!X+UO(QTO(TUO(`(xO~O!Z(sP~P!8uO!Y+WOa)PX'u)PX~OP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO([VO(m$YO(t#|O(u#}O~Oa!ga!Y!ga'u!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9mOR#zO}#yO!P#{O!i#xO([VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(m!oa(t!oa(u!oa~Oa!oa'u!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<TOR#zO}#yO!P#{O!i#xO([VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(m!qa(t!qa(u!qa~Oa!qa'u!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>kOh%VOk+aO![']O%f+`O~O!d+cOa(WX![(WX'u(WX!Y(WX~Oa%lO![XO'u%lO~Oh%VO!i%cO~Oh%VO!i%cO(O%eO~O!d#vO#h(tO~Ob+nO%g+oO(O+kO(QTO(TUO!Z)TP~O!Y+pO`)SX~O[+tO~O`+uO~O![%}O(O%eO(P!lO`)SP~Oh%VO#]+zO~Oh%VOk+}O![$|O~O![,PO~O},RO![XO~O%k%tO~O!u,WO~Oe,]O~Ob,^O(O#nO(QTO(TUO!Z)RP~Oe%{O~O%g!QO(O&WO~P=RO[,cO`,bO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(QTO(TUO([VO(j[O(yiO~O![!eO!r!gO$V!kO(O!dO~P!EkO`,bOa%lO'u%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(O!dO(QTO(TUO([VO(j[O(yiO~Oa,hO!rwO#t!OO%i!OO%j!OO%k!OO~P!HTO!i&lO~O&Y,nO~O![,pO~O&k,rO&m,sOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(O&ha(Q&ha(T&ha([&ha(j&ha(y&ha!Z&ha&a&hab&ha&f&ha~O(O,xO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# ZO!d,}O#],|Oh(eX!Y#eX!Y(eX!Z#eX!Z(eX!d(eX!i(eX~Oh%VO!d-PO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(QTO(TUO(`!mO~OP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![!eO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(QTO(TUO([VO(j[O(y<xO~O(O;zO~P##_O!Y-TO!Z(dX~O!Z-VO~O!d,}O#],|O!Y#eX!Z#eX~O!Y-WO!Z(sX~O!Z-YO~O!`-ZO!a-ZO(P!lO~P#!|O!Z-^O~P'_Ok-aO![']O~O!V-fO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(P!xa(Q!xa(T!xa(`!xa(j!xa~P!#ZO!m-kO#]-iO~PCSO!`-mO!a-mO(P!lO~PCrOa%lO#]-iO'u%lO~Oa%lO!d#vO#]-iO'u%lO~Oa%lO!d#vO!m-kO#]-iO'u%lO(m'mO~O'z'uO'{'uO'|-rO~Os-sO~O!V'Sa!Y'Sa~P!9mO!X-wO!V'SX!Y'SX~P%[O!Y(RO!V(ca~O!V(ca~PGfO!Y(YO!V(qa~O!P%fO!X-{O![%gO(O%eO!V'YX!Y'YX~O#]-}O!Y(oa!h(oaa(oa'u(oa~O!d#vO~P#+eO!Y(fO!h(na~O!P%fO![%gO#g.RO(O%eO~Om.WO!P%fO!X.TO![%gO!y]O#f.VO#g.TO(O%eO!Y']X!h']X~OR.[O!i#xO~Oh%VOk._O![']O%f.^O~Oa#`i!Y#`i'u#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9mOk=UO})zO!P){O(t$}O(u%PO~O#h#[aa#[a#]#[a'u#[a!Y#[a!h#[a![#[a!V#[a~P#.aO#h(ZXP(ZXR(ZX[(ZXa(ZXo(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX'u(ZX([(ZX(m(ZX!h(ZX!V(ZX's(ZXs(ZX![(ZX%f(ZX!d(ZX~P!5uO!Y.lO!h(fX~P!9mO!h.oO~O!V.qO~OP$[OR#zO}#yO!P#{O!i#xO!m$[O([VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#1|O#k$OO~P#1|OP$[OR#zOo$aO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO([VO[#jia#ji!Y#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#o#ji~P#4kO#o$QO~P#4kOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO([VOa#ji!Y#ji#w#ji#y#ji#z#ji'u#ji(m#ji(t#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#u#ji~P#7YOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO([VO(u#}Oa#ji!Y#ji#y#ji#z#ji'u#ji(m#ji(t#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$UO~P#9pO#w#ji~P#9pO#u$SO~P#7YOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO([VO(t#|O(u#}Oa#ji!Y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#y#ji~P#<fO#y$WO~P#<fOP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X!Y]X!Z]X~O#}]X~P#?TOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O#w;`O#y;bO#z;cO([VO(m$YO(t#|O(u#}O~O#}.sO~P#AbO#P$dO#];iO$P;iO#}(bX!Z(bX~P! YOa'`a!Y'`a'u'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9mO[#jia#jio#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'u#ji(m#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO([VO(t#ji(u#ji~P#DdOk=UO})zO!P){O(t$}O(u%POP#jiR#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji([#ji~P#DdO!Y.wOg(kX~P!0kOg.yO~Oa$Oi!Y$Oi'u$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9mO$[.zO$^.zO~O$[.{O$^.{O~O!d)dO#].|O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X.}O~O![)gO$Y/PO$[)fO$^)fO$e/QO~O!Y;dO!Z(aX~P#AbO!Z/RO~O!d)dO$e(vX~O$e/TO~Ou)uO(])vO(^/WO~O!V/[O~P!&_O(t$}Ok%^a}%^a!P%^a(u%^a!Y%^a#]%^a~Og%^a#}%^a~P#K^O(u%POk%`a}%`a!P%`a(t%`a!Y%`a#]%`a~Og%`a#}%`a~P#LPO!YfX!dfX!hfX!h$xX(mfX~P!/gO!X/eO!Y(YO(O/dO!V(qP!V({P~P!1YOo*nO!_*lO!`*eO!a*eO!i*]O#X*mO%]*hO(P!lO~Op'XO!P/fO!X+UO!Z*kO(QTO(TUO(`;wO!Z(sP~P#MjO!h/gO~P#.aO!Y/hO!d#vO(m'mO!h(zX~O!h/mO~O!P%fO!X*YO![%gO(O%eO!h(zP~O#h/oO~O!V$xX!Y$xX!d%PX~P!/gO!Y/pO!V({X~P#.aO!d/rO~O!V/tO~Oh%VOo/xO!d#vO!i%cO(m'mO~O(O/zO~O!d+cO~Oa%lO!Y0OO'u%lO~O!Z0QO~P!4|O!`0RO!a0RO(P!lO(`!mO~O!P0TO(`!mO~O#X0UO~Og%^a!Y%^a#]%^a#}%^a~P!0kOg%`a!Y%`a#]%`a#}%`a~P!0kO(O&WOg'iX!Y'iX~O!Y*tOg(Xa~Og0_O~OR0`O}0`O!P0aO#P$dOkza(tza(uza!Yza#]za~Ogza#}za~P$%]O})zO!P){Ok$qa(t$qa(u$qa!Y$qa#]$qa~Og$qa#}$qa~P$&UO})zO!P){Ok$sa(t$sa(u$sa!Y$sa#]$sa~Og$sa#}$sa~P$&wO#h0dO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0kO!d#vO~O#h0gO~O!Y+WOa)Pa'u)Pa~OR#zO}#yO!P#{O!i#xO([VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(m!oi(t!oi(u!oi~Oa!oi'u!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$(fOh%VOo%XOp$tOq$tOw%YOy%ZO{;nO!P${O![$|O!f=OO!i$xO#g;tO$V%_O$r;pO$t;rO$w%`O(QTO(TUO([$uO(t$}O(u%PO~Om0pO(O0oO~P$*|O!d+cOa(Wa![(Wa'u(Wa!Y(Wa~O#h0vO~O[]X!YfX!ZfX~O!Y0wO!Z)TX~O!Z0yO~O[0zO~Ob0|O(O+kO(QTO(TUO~O![%}O(O%eO`'qX!Y'qX~O!Y+pO`)Sa~O!h1PO~P!9mO[1SO~O`1TO~O#]1WO~Ok1ZO![$|O~O(`(xO!Z)QP~Oh%VOk1dO![1aO%f1cO~O[1nO!Y1lO!Z)RX~O!Z1oO~O`1qOa%lO'u%lO~O(O#nO(QTO(TUO~O#P$dO#]$eO$P$eOP(bXR(bX[(bXo(bX}(bX!P(bX!Y(bX!i(bX!m(bX#O(bX#k(bX#l(bX#m(bX#n(bX#o(bX#p(bX#q(bX#r(bX#u(bX#w(bX#y(bX#z(bX([(bX(m(bX(t(bX(u(bX~O#s1tO&W1uOa(bX~P$0dO#]$eO#s1tO&W1uO~Oa1wO~P%[Oa1yO~O&a1|OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(O&_i(Q&_i(T&_i([&_i(j&_i(y&_i!Z&_ib&_i&f&_i~Ob2SO!Z2QO&f2RO~P`O![XO!i2UO~O&m,sOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(O&hi(Q&hi(T&hi([&hi(j&hi(y&hi!Z&hi&a&hib&hi&f&hi~O!V2[O~O!Y!^a!Z!^a~P#AbOp!nO!P!oO!X2bO(`!mO!Y'TX!Z'TX~P@YO!Y-TO!Z(da~O!Y'ZX!Z'ZX~P!8uO!Y-WO!Z(sa~O!Z2iO~P'_Oa%lO#]2rO'u%lO~Oa%lO!d#vO#]2rO'u%lO~Oa%lO!d#vO!m2vO#]2rO'u%lO(m'mO~Oa%lO'u%lO~P!9mO!Y$_Os$oa~O!V'Si!Y'Si~P!9mO!Y(RO!V(ci~O!Y(YO!V(qi~O!V(ri!Y(ri~P!9mO!Y(oi!h(oia(oi'u(oi~P!9mO#]2xO!Y(oi!h(oia(oi'u(oi~O!Y(fO!h(ni~O!P%fO![%gO!y]O#f2}O#g2|O(O%eO~O!P%fO![%gO#g2|O(O%eO~Ok3UO![']O%f3TO~Oh%VOk3UO![']O%f3TO~O#h%^aP%^aR%^a[%^aa%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#K^O#h%`aP%`aR%`a[%`aa%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#LPO#h%^aP%^aR%^a[%^aa%^ao%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'u%^a([%^a(m%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.aO#h%`aP%`aR%`a[%`aa%`ao%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'u%`a([%`a(m%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.aO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'uza([za(mza!hza!Vza'szasza![za%fza!dza~P$%]O#h$qaP$qaR$qa[$qaa$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'u$qa([$qa(m$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$&UO#h$saP$saR$sa[$saa$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'u$sa([$sa(m$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$&wO#h%RaP%RaR%Ra[%Raa%Rao%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'u%Ra([%Ra(m%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.aOa#`q!Y#`q'u#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9mO!X3^O!Y'UX!h'UX~P%[O!Y.lO!h(fa~O!Y.lO!h(fa~P!9mO!V3aO~O#}!ka!Z!ka~PKPO#}!ga!Y!ga!Z!ga~P#AbO#}!oa!Z!oa~P!<TO#}!qa!Z!qa~P!>kOg'XX!Y'XX~P!+hO!Y.wOg(ka~OSfO![3uO$c3vO~O!Z3zO~Os3{O~P#.aOa$lq!Y$lq'u$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9mO!V3|O~P#.aO})zO!P){O(u%POk'ea(t'ea!Y'ea#]'ea~Og'ea#}'ea~P%)nO})zO!P){Ok'ga(t'ga(u'ga!Y'ga#]'ga~Og'ga#}'ga~P%*aO(m$YO~P#.aO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/gO(O<QO~P!1YOmkO(O4OO~P.iO!P%fO!X4QO![%gO(O%eO!Y'aX!h'aX~O!Y/hO!h(za~O!Y/hO!d#vO!h(za~O!Y/hO!d#vO(m'mO!h(za~Og$zi!Y$zi#]$zi#}$zi~P!0kO!X4YO!V'cX!Y'cX~P!3XO!Y/pO!V({a~O!Y/pO!V({a~P#.aO!d#vO#s4bO~Oo4eO!d#vO(m'mO~O!P4hO(`!mO~O(t$}Ok%^i}%^i!P%^i(u%^i!Y%^i#]%^i~Og%^i#}%^i~P%.wO(u%POk%`i}%`i!P%`i(t%`i!Y%`i#]%`i~Og%`i#}%`i~P%/jOg(Yi!Y(Yi~P!0kO#]4mOg(Yi!Y(Yi~P!0kO!h4pO~Oa$mq!Y$mq'u$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9mO!V4tO~O!Y4uO![(|X~P#.aOa$xX![$xX%Z]X'u$xX!Y$xX~P!/gO%Z4xOalXklX}lX!PlX![lX'ulX(tlX(ulX!YlX~O%Z4xO~Ob5OO%g5PO(O+kO(QTO(TUO!Y'pX!Z'pX~O!Y0wO!Z)Ta~O[5TO~O`5UO~Oa%lO'u%lO~P#.aO![$|O~P#.aO!Y5^O#]5`O!Z)QX~O!Z5aO~Oo5hOp!nO!P5bO!_!yO!`!vO!a!vO!y;QO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5gO#Y!zO(P!lO(QTO(TUO(`!mO(j!sO~O!Z5fO~P%4tOk5mO![1aO%f5lO~Oh%VOk5mO![1aO%f5lO~Ob5tO(O#nO(QTO(TUO!Y'oX!Z'oX~O!Y1lO!Z)Ra~O(QTO(TUO(`5vO~O`5zO~O#s5}O&W6OO~PMlO!h6PO~P%[Oa6RO~Oa6RO~P%[Ob2SO!Z6WO&f2RO~P`O!d6YO~O!d6[Oh(ei!Y(ei!Z(ei!d(ei!i(ei~O!Y#ei!Z#ei~P#AbO#]6]O!Y#ei!Z#ei~O!Y!^i!Z!^i~P#AbOa%lO#]6fO'u%lO~Oa%lO!d#vO#]6fO'u%lO~O!Y(oq!h(oqa(oq'u(oq~P!9mO!Y(fO!h(nq~O!P%fO![%gO#g6mO(O%eO~O![']O%f6pO~Ok6tO![']O%f6pO~O#h'eaP'eaR'ea['eaa'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'u'ea(['ea(m'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%)nO#h'gaP'gaR'ga['gaa'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'u'ga(['ga(m'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%*aO#h$ziP$ziR$zi[$zia$zio$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'u$zi([$zi(m$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.aO#h%^iP%^iR%^i[%^ia%^io%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'u%^i([%^i(m%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%.wO#h%`iP%`iR%`i[%`ia%`io%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'u%`i([%`i(m%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%/jO!Y'Ua!h'Ua~P!9mO!Y.lO!h(fi~O#}#`i!Y#`i!Z#`i~P#AbOP$[OR#zO}#yO!P#{O!i#xO!m$[O([VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#k#ji~P%G^O#k;YO~P%G^OP$[OR#zOo;fO}#yO!P#{O!i#xO!m$[O#k;YO#l;ZO#m;ZO#n;ZO([VO[#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#o#ji~P%IfO#o;[O~P%IfOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O([VO#w#ji#y#ji#z#ji#}#ji(m#ji(t#ji(u#ji!Y#ji!Z#ji~O#u#ji~P%KnOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O([VO(u#}O#y#ji#z#ji#}#ji(m#ji(t#ji!Y#ji!Z#ji~O#w;`O~P%MoO#w#ji~P%MoO#u;^O~P%KnOP$[OR#zO[;hOo;fO}#yO!P#{O!i#xO!m$[O#O;]O#k;YO#l;ZO#m;ZO#n;ZO#o;[O#p;]O#q;]O#r;gO#s;]O#u;^O#w;`O([VO(t#|O(u#}O#z#ji#}#ji(m#ji!Y#ji!Z#ji~O#y#ji~P&!OO#y;bO~P&!OOa#{y!Y#{y'u#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9mO[#jio#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(m#ji!Y#ji!Z#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k;YO#l;ZO#m;ZO#n;ZO([VO(t#ji(u#ji~P&$zOk=VO})zO!P){O(t$}O(u%POP#jiR#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji([#ji~P&$zO#P$dOP(ZXR(ZX[(ZXk(ZXo(ZX}(ZX!P(ZX!i(ZX!m(ZX#O(ZX#k(ZX#l(ZX#m(ZX#n(ZX#o(ZX#p(ZX#q(ZX#r(ZX#s(ZX#u(ZX#w(ZX#y(ZX#z(ZX#}(ZX([(ZX(m(ZX(t(ZX(u(ZX!Y(ZX!Z(ZX~O#}$Oi!Y$Oi!Z$Oi~P#AbO#}!oi!Z!oi~P$(fOg'Xa!Y'Xa~P!0kO!Z7WO~O!Y'`a!Z'`a~P#AbOP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!d%WX#s%WX~P&+QO!d#vO(m'mO!Y'aa!h'aa~O!Y/hO!h(zi~O!Y/hO!d#vO!h(zi~Og$zq!Y$zq#]$zq#}$zq~P!0kO!V'ca!Y'ca~P#.aO!d7_O~O!Y/pO!V({i~P#.aO!Y/pO!V({i~O!V7cO~O!d#vO#s7hO~Oo7iO!d#vO(m'mO~O})zO!P){O(u%POk'fa(t'fa!Y'fa#]'fa~Og'fa#}'fa~P&/pO})zO!P){Ok'ha(t'ha(u'ha!Y'ha#]'ha~Og'ha#}'ha~P&0cO!V7lO~Og$|q!Y$|q#]$|q#}$|q~P!0kOa$my!Y$my'u$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9mO!d6[O~O!Y4uO![(|a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa([$Sa(m$Sa(t$Sa(u$Sa~O%f6pO~P&2lOa#`y!Y#`y'u#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9mO[7qO~Ob7sO(O+kO(QTO(TUO~O!Y0wO!Z)Ti~O`7wO~O(`(xO!Y'lX!Z'lX~O!Y5^O!Z)Qa~O!Z8QO~P%4tOp!nO!P8RO(QTO(TUO(`!mO(j!sO~O#X8SO~O![1aO~O![1aO%f8UO~Ok8XO![1aO%f8UO~O[8^O!Y'oa!Z'oa~O!Y1lO!Z)Ri~O!h8bO~O!h8cO~O!h8fO~O!h8fO~P%[Oa8hO~O!d8iO~O!h8jO~O!Y(ri!Z(ri~P#AbOa%lO#]8rO'u%lO~O!Y(oy!h(oya(oy'u(oy~P!9mO!Y(fO!h(ny~O%f8uO~P&2lO![']O%f8uO~O#h$zqP$zqR$zq[$zqa$zqo$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'u$zq([$zq(m$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.aO#h'faP'faR'fa['faa'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'u'fa(['fa(m'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&/pO#h'haP'haR'ha['haa'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'u'ha(['ha(m'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&0cO#h$|qP$|qR$|q[$|qa$|qo$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'u$|q([$|q(m$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.aO!Y'Ui!h'Ui~P!9mO#}#`q!Y#`q!Z#`q~P#AbO(t$}OP%^aR%^a[%^ao%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a([%^a(m%^a!Y%^a!Z%^a~Ok%^a}%^a!P%^a(u%^a~P&CoO(u%POP%`aR%`a[%`ao%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a([%`a(m%`a!Y%`a!Z%`a~Ok%`a}%`a!P%`a(t%`a~P&EsOk=VO})zO!P){O(u%PO~P&CoOk=VO})zO!P){O(t$}O~P&EsOR0`O}0`O!P0aO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za([za(mza(tza(uza!Yza!Zza~O})zO!P){OP$qaR$qa[$qak$qao$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa([$qa(m$qa(t$qa(u$qa!Y$qa!Z$qa~O})zO!P){OP$saR$sa[$sak$sao$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa([$sa(m$sa(t$sa(u$sa!Y$sa!Z$sa~Ok=VO})zO!P){O(t$}O(u%PO~OP%RaR%Ra[%Rao%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra([%Ra(m%Ra!Y%Ra!Z%Ra~P&NlO#}$lq!Y$lq!Z$lq~P#AbO#}$mq!Y$mq!Z$mq~P#AbO!Z9SO~O#}9TO~P!0kO!d#vO!Y'ai!h'ai~O!d#vO(m'mO!Y'ai!h'ai~O!Y/hO!h(zq~O!V'ci!Y'ci~P#.aO!Y/pO!V({q~Oo9[O!d#vO(m'mO~O!V9]O~P#.aO!V9]O~O!d#vO#s9bO~Og(Yy!Y(Yy~P!0kO!Y'ja!['ja~P#.aOa%Yq![%Yq'u%Yq!Y%Yq~P#.aO[9dO~O!Y0wO!Z)Tq~O#]9hO!Y'la!Z'la~O!Y5^O!Z)Qi~P#AbO!P4hO~O![1aO%f9lO~O(QTO(TUO(`9qO~O!Y1lO!Z)Rq~O!h9tO~O!h9uO~O!h9vO~O!h9vO~P%[O#]9yO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#AbO%f:OO~P&2lO![']O%f:OO~O#}#{y!Y#{y!Z#{y~P#AbOP$ziR$zi[$zio$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi([$zi(m$zi!Y$zi!Z$zi~P&NlO})zO!P){O(u%POP'eaR'ea['eak'eao'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(['ea(m'ea(t'ea!Y'ea!Z'ea~O})zO!P){OP'gaR'ga['gak'gao'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(['ga(m'ga(t'ga(u'ga!Y'ga!Z'ga~O(t$}OP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i([%^i(m%^i(u%^i!Y%^i!Z%^i~O(u%POP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i([%`i(m%`i(t%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#AbO#}#`y!Y#`y!Z#`y~P#AbO!d#vO!Y'aq!h'aq~O!Y/hO!h(zy~O!V'cq!Y'cq~P#.aOo:YO!d#vO(m'mO~O!V:ZO~P#.aO!V:ZO~O!Y0wO!Z)Ty~O!Y5^O!Z)Qq~O![1aO%f:cO~O!h:fO~O%f:kO~P&2lOP$zqR$zq[$zqo$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq([$zq(m$zq!Y$zq!Z$zq~P&NlO})zO!P){O(u%POP'faR'fa['fak'fao'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(['fa(m'fa(t'fa!Y'fa!Z'fa~O})zO!P){OP'haR'ha['hak'hao'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(['ha(m'ha(t'ha(u'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q([$|q(m$|q!Y$|q!Z$|q~P&NlOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0kOo:oO!d#vO(m'mO~O!V:pO~P#.aO!Y'lq!Z'lq~P#AbO!Y#e!Z!Z#e!Z~P#AbO#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'u%b!Z([%b!Z(m%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.aOo:xO!d#vO(m'mO~OP%b!ZR%b!Z[%b!Zo%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z([%b!Z(m%b!Z!Y%b!Z!Z%b!Z~P&NlOs(aX~P1qO}%pO~P!(oO(P!lO~P!(oO!VfX!YfX#]fX~P&+QOP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X([]X(m]X(t]X(u]X~O!dfX!h]X!hfX(mfX~P'BxOP;POQ;POSfOd<zOe!iOmkOo;POpkOqkOwkOy;PO{;PO!PWO!TkO!UkO![XO!f;SO!iZO!l;PO!m;PO!n;PO!p;TO!r;WO!u!hO$V!kO(O)XO(QTO(TUO([VO(j[O(y<xO~O!Y;dO!Z$oa~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{;oO!P${O![$|O!f=PO!i$xO#g;uO$V%_O$r;qO$t;sO$w%`O(O(rO(QTO(TUO([$uO(t$}O(u%PO~O#t)`O~P'GnOo!bX(m!bX~P# ZO!Z]X!ZfX~P'BxO!VfX!V$xX!YfX!Y$xX#]fX~P!/gO#h;XO~O!d#vO#h;XO~O#];iO~O#s;]O~O#];xO!Y(rX!Z(rX~O#];iO!Y(pX!Z(pX~O#h;yO~Og;{O~P!0kO#h<RO~O#h<SO~O!d#vO#h<TO~O!d#vO#h;yO~O#}<UO~P#AbO#h<VO~O#h<WO~O#h<]O~O#h<^O~O#h<_O~O#h<`O~O#}<aO~P!0kO#}<bO~P!0kO#P#Q#R#T#U#X#f#g#r(y$r$t$w%Z%e%f%g%n%p%s%t%v%x~'yT#l!U'w(P#mp#k#no}'x$['x(O$^(`~",
    goto: "$4Q)XPPPPPP)YPP)]P)nP+O/PPPPP5xPP6`PP<V?mP@QP@QPPP@QPBRP@QP@QP@QPBVPB[PByPGrPPPGvPPPPGvJxPPPKOKzPGvPGvPPNYGvPPPGvPGvP!!aGvP!%v!&{!'UP!'x!'|!'x!+YPPPPPPP!+y!&{PP!,Z!-gP!0jGvGv!0o!3z!8b!8b!<`PPP!<hGvPPPPPPPPPPP!?vP!ATPPGv!BfPGvPGvGvGvGvGvPGv!CxP!GRP!JWP!J[!Jf!Jj!JjP!GOP!Jn!JnP!MsP!MwGvGv!M}##RBV@QP@QP@Q@QP#$_@Q@Q#&j@Q#)Z@Q#+`@Q@Q#,O#.]#.]#.b#.k#.]#.wP#.]P@Q#/a@Q#3S@Q@Q5xPPP#6{PPP#7f#7fP#7fP#7|#7fPP#8SP#7yP#7y#8g#7y#9R#9X5u)]#9[)]P#9c#9c#9cP)]P)]P)]P)]PP)]P#9i#9lP#9l)]P#9pP#9sP)]P)]P)]P)]P)]P)])]PP#9y#:P#:[#:b#:h#:n#:t#;S#;Y#;d#;j#;t#;z#<[#<b#=S#=f#=l#=r#>Q#>g#@V#@e#@l#BR#Ba#C|#D[#Db#Dh#Dn#Dx#EO#EU#E`#Er#ExPPPPPPPPPP#FOPPPPPPP#Fs#Iz#KZ#Kb#KjPPP$!sP$!|$%t$,^$,a$,d$-P$-S$-Z$-cP$-i$-lP$.Y$.^$/U$0d$0i$1PPP$1U$1[$1`P$1c$1g$1k$2a$2x$3a$3e$3h$3k$3q$3t$3x$3|R!|RoqOXst!Z#d%k&o&q&r&t,k,p1|2PY!vQ']-]1a5eQ%rvQ%zyQ&R|Q&g!VS'T!e-TQ'c!iS'i!r!yU*e$|*V*jQ+i%{Q+v&TQ,[&aQ-Z'[Q-e'dQ-m'jQ0R*lQ1k,]R;v;T%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5b5m5}6O6R6f8R8X8h8rS#q];Q!r)Z$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{U*y%[;n;oQ+n%}Q,^&dQ,e&lQ0m+aQ0q+cQ0|+oQ1s,cQ3Q._Q5O0wQ5t1lQ6r3UQ7s5PR8x6t'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{t!nQ!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5e5g$|$ti#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VQ&U|Q'R!eU'X%g*V-WQ+n%}Q,^&dQ0c*|Q0|+oQ1R+uQ1r,bQ1s,cQ5O0wQ5X1TQ5t1lQ5w1nQ5x1qQ7s5PQ7v5UQ8a5zQ9g7wR9r8^rnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR,`&h&x^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<z<{[#]WZ#W#Z'U(P!b%hm#h#i#l$x%c%f(Y(d(e(f*U*Y*]+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6[6mQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(m#sS+h%z%{Q+l%}Q,V&_Q,Z&aS-d'c'dQ.a(nQ0u+iQ0{+oQ0}+pQ1Q+tQ1f,WS1j,[,]Q2n-eQ4}0wQ5R0zQ5W1SQ5s1kQ7r5PQ7u5TQ9c7qR:^9d!O$zi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R!S%wy!i!u%y%z%{'S'b'c'd'h'r*d+h+i-Q-d-e-l/y0u2g2n2u4dQ+b%uQ+{&XQ,O&YQ,Y&aQ.`(mQ1e,VU1i,Z,[,]Q3V.aQ5n1fS5r1j1kQ8]5s#^<|#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vo<};g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bW%Ti%V*t<xS&X!Q&fQ&Y!RQ&Z!SR+y&V$}%Si#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VT)v$u)wV*y%[;n;oW'X!e%g*V-WS(y#y#zQ+]%pQ+s&QS.Y(i(jQ1[,PQ4n0`R7{5^'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{$i$^c#Y#e%o%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)Y)[)^)c)m+^+r-R-p-u-z-|.k.n.r.t.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4r4{6_6e6j6y6z7T7U7}8l8p8z9Q9R9{:`:g;R<oT#TV#U'PkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q'V!eR2c-Tv!nQ!e!r!v!y!z'T'[']'i'j'k-T-Z-]-m1a5e5gU*d$|*V*jS/y*e*lQ0S*mQ1^,RQ4d0RR4g0UnqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&v!^Q's!xS(o#u;XQ+f%xQ,T&[Q,U&^Q-b'aQ-o'lS.j(t;yS0f+R<TQ0s+gQ1`,SQ2T,rQ2V,sQ2_-OQ2l-cQ2o-gS4s0g<_Q4y0tS4|0v<`Q6^2aQ6b2mQ6g2tQ7p4zQ8m6`Q8n6cQ8q6hR9x8j$d$]c#Y#e%q%s(O(U(p(u(})O)P)Q)R)S)T)U)V)W)Y)[)^)c)m+^+r-R-p-u-z-|.k.n.r.u.v/X0e2]2`2p2w3]3b3c3d3e3f3g3h3i3j3k3l3m3n3q3r3y4r4{6_6e6j6y6z7T7U7}8l8p8z9Q9R9{:`:g;R<oS(k#p'fQ({#zS+[%o.tS.Z(j(lR3O.['OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{S#q];QQ&q!XQ&r!YQ&t![Q&u!]R1{,nQ'^!hQ+_%uQ-`'`S.](m+bQ2j-_W3S.`.a0l0nQ6a2kW6n3P3R3V4wU8t6o6q6sU9}8v8w8yS:i9|:PQ:t:jR:z:uU!wQ']-]T5c1a5e!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(f,k,p.S1|2P]!pQ!r']-]1a5eT#q];Q%[{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rS(y#y#zS.Y(i(j!s<f$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{U$fd)Z,eS(l#p'fU*q%R(s3pU0b*x.f7PQ4w0mQ6o3QQ8w6rR:P8xm!tQ!r!v!y!z']'i'j'k-]-m1a5e5gQ'q!uS(b#g1vS-k'h'tQ/k*XQ/w*dQ2v-nQ4U/lS4_/x0SQ7Z4PS7f4e4gQ9V7[Q9Z7cQ9`7iS:X9[9]S:n:Y:ZS:w:o:pR:}:xQ#wbQ'p!uS(a#g1vS(c#m+QQ+S%dQ+d%vQ+j%|U-j'h'q'tQ.O(bQ/j*XQ/v*dQ/|*gQ0r+eQ1g,XS2s-k-nQ2{.WS4T/k/lS4^/w0SQ4a/{Q4c/}Q5p1hQ6i2vQ7Y4PQ7^4US7b4_4gQ7g4fQ8Z5qS9U7Z7[Q9Y7cQ9^7fQ9a7jQ9o8[Q:V9VS:W9Z9]Q:[9`Q:e9pS:m:X:ZS:v:n:pQ:|:wQ;O:}Q<i<dQ<t<mR<u<nV!wQ']-]%[aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rS#wz!j!r<c$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{R<i<z%[bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rQ%dj!S%vy!i!u%y%z%{'S'b'c'd'h'r*d+h+i-Q-d-e-l/y0u2g2n2u4dS%|z!jQ+e%wQ,X&aW1h,Y,Z,[,]U5q1i1j1kS8[5r5sQ9p8]!r<d$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q<m<yR<n<z%OeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8rY#bWZ#W#Z(P!b%hm#h#i#l$x%c%f(Y(d(e(f*U*Y*]+T+U+W,g,}-{.R.S.T.V/e/h2U2|2}4Q6[6mQ,f&l!p<e$Z$n)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{R<h'UU'Y!e%g*VR2e-W%QdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V,h,k,p-a-i-w-}.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3^5b5m5}6O6R6f8R8X8h8r!r)Z$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{Q,e&lQ0m+aQ3Q._Q6r3UR8x6t!b$Tc#Y%o(O(U(p(u)V)W)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;R!P;_)Y)m-R.t2]2`3b3k3l3q3y6_6z7T7U7}8l8z9Q9R:`:g<o!f$Vc#Y%o(O(U(p(u)S)T)V)W)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;R!T;a)Y)m-R.t2]2`3b3h3i3k3l3q3y6_6z7T7U7}8l8z9Q9R:`:g<o!^$Zc#Y%o(O(U(p(u)[)c+r-p-u-z-|.k.n/X0e2p2w3]3m4r4{6e6j6y8p9{;RQ3}/cz<{)Y)m-R.t2]2`3b3q3y6_6z7T7U7}8l8z9Q9R:`:g<oQ=Q=SR=R=T'OkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{S$oh$pR3v.|'VgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{T$kf$qQ$ifS)f$l)jR)r$qT$jf$qT)h$l)j'VhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(P(R(X(`(t(v(z)o)y+R+V+a,h,k,p,|-P-a-i-w-}._.l.s.|.}/f0a0g0v1d1t1u1w1y1|2P2R2b2r2x3U3^3u5`5b5m5}6O6R6]6f6t8R8X8h8r9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{T$oh$pQ$rhR)q$p%[jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(P(R(X(`(t(v(z)y+R+V+a,h,k,p-a-i-w-}._.l.s/f0a0g0v1d1t1u1w1y1|2P2R2r2x3U3^5b5m5}6O6R6f6t8R8X8h8r!s<y$Z$n'U)o,|-P.}2b3u5`6]9h9y;P;S;T;W;X;Y;Z;[;];^;_;`;a;b;c;d;f;i;v;x;y;{<T<U<_<`<{#elOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_(z)o+V+a,h,k,p-a._.}/f0a1d1t1u1w1y1|2P2R3U3u5b5m5}6O6R6t8R8X8h!O%Ri$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R#^(s#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=VQ*}%`Q/Y)zo3p;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!O$yi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=RQ*^$zU*g$|*V*jQ+O%aQ/}*h#^<k#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn<l;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bQ<p<|Q<q<}Q<r=OR<s=P!O%Ri$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=R#^(s#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vo3p;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<bnoOXst!Z#d%k&o&q&r&t,k,p1|2PS*a${*UQ,y&{Q,z&}R4X/p$|%Si#v$b$c$d$x${%O%Q%]%^%b)u){)}*P*R*U*[*b*r*s+`+c+z+}.^.w/]/e/o/p/r0V0X0d1W1Z1c3T3}4Y4b4m4u4x5l6p7_7h8U8u9T9b9l:O:c:k;g;h;j;k;l;m;p;q;r;s;t;u;|;}<O<P<R<S<V<W<X<Y<Z<[<]<^<a<b<x=Q=R=U=VQ+|&YQ1Y,OQ5[1XR7z5]V*i$|*V*jU*i$|*V*jT5d1a5eU/{*f/f5bS4f0T8RR7j4hQ+d%vQ/|*gQ0r+eQ1g,XQ5p1hQ8Z5qQ9o8[R:e9p!O%Oi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=Rr)}$v)a*O*p+P/n0Z0[3s4V4q7X7k:U<j<v<wS0V*o0W#^;j#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn;k;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!`;|(q)_*W*`.b.e.i/U/Z/c/s0k1V1X3Y4W4[5Z5]6u6x7`7d7m7o9X9_:]:l=S=T`;}3o6{7O7S8{:Q:T:{S<X.d3ZT<Y6}9O!O%Qi$d%O%Q%]%^%b)}*P*[*r*s.w/o0V0X0d3}4m9T<x=Q=Rv*P$v)a*Q*o+P/_/n0Z0[3s4V4i4q7X7k:U<j<v<wS0X*p0Y#^;l#v$b$c$x${)u){*R*U*b+`+c+z+}.^/]/e/p/r1W1Z1c3T4Y4b4u4x5l6p7_7h8U8u9b9l:O:c:k;j;l;p;r;t;|<O<R<V<X<Z<]<a=U=Vn;m;g;h;k;m;q;s;u;}<P<S<W<Y<[<^<b!d<O(q)_*W*`.c.d.i/U/Z/c/s0k1V1X3W3Y4W4[5Z5]6u6v6x7`7d7m7o9X9_:]:l=S=Td<P3o6|6}7S8{8|:Q:R:T:{S<Z.e3[T<[7O9PrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ&c!UR,h&lrnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PR&c!UQ,Q&ZR1U+ysnOXst!V!Z#d%k&f&o&q&r&t,k,p1|2PQ1b,VS5k1e1fU8T5i5j5nS9k8V8WS:a9j9mQ:q:bR:y:rQ&j!VR,a&fR5w1nS&O|&TR0}+pQ&o!WR,k&pR,q&uT1},p2PR,u&vQ,t&vR2W,uQ'v!{R-q'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)w$uR/V)wQ#UVR'|#UQ#XWU(S#X(T-xQ(T#YR-x(UQ-U'VR2d-UQ.m(uS3_.m3`R3`.nQ-]']R2h-]Y!rQ']-]1a5eR'g!rQ.x)aR3t.xU#_W%f*UU(Z#_([-yQ([#`R-y(VQ-X'YR2f-Xt`OXst!V!Z#d%k&f&h&o&q&r&t,k,p1|2PS#hZ%cU#r`#h.SR.S(fQ(g#jQ.P(cW.X(g.P2y6kQ2y.QR6k2zQ)j$lR/O)jQ$phR)p$pQ$`cU)]$`-t;eQ-t;RR;e)mQ/i*XW4R/i4S7]9WU4S/j/k/lS7]4T4UR9W7^$Z)|$v(q)_)a*W*`*o*p*z*{+P.d.e.g.h.i/U/Z/_/a/c/n/s0Z0[0k1V1X3W3X3Y3o3s4V4W4[4i4k4q5Z5]6u6v6w6x6}7O7Q7R7S7X7`7d7k7m7o8{8|8}9X9_:Q:R:S:T:U:]:l:{<j<v<w=S=TQ/q*`U4Z/q4]7aQ4]/sR7a4[S*j$|*VR0P*jr*O$v)a*o*p+P/n0Z0[3s4V4q7X7k:U<j<v<w!`.b(q)_*W*`.d.e.i/U/Z/c/s0k1V1X3Y4W4[5Z5]6u6x7`7d7m7o9X9_:]:l=S=TU/`*O.b6{a6{3o6}7O7S8{:Q:T:{Q0W*oQ3Z.dU4j0W3Z9OR9O6}v*Q$v)a*o*p+P/_/n0Z0[3s4V4i4q7X7k:U<j<v<w!d.c(q)_*W*`.d.e.i/U/Z/c/s0k1V1X3W3Y4W4[5Z5]6u6v6x7`7d7m7o9X9_:]:l=S=TU/b*Q.c6|e6|3o6}7O7S8{8|:Q:R:T:{Q0Y*pQ3[.eU4l0Y3[9PR9P7OQ*u%UR0^*uQ4v0kR7n4vQ+X%iR0j+XQ5_1[S7|5_9iR9i7}Q,S&[R1_,SQ5e1aR8P5eQ1m,^S5u1m8_R8_5wQ0x+lW5Q0x5S7t9eQ5S0{Q7t5RR9e7uQ+q&OR1O+qQ2P,pR6V2PYrOXst#dQ&s!ZQ+Z%kQ,j&oQ,l&qQ,m&rQ,o&tQ1z,kS1},p2PR6U1|Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Y%jQ+f%xQ+x&UQ,`&jQ,w&yW-h'h'p'q'tQ-o'lQ0O*iQ0s+gS1p,a,dQ2X,vQ2Y,yQ2Z,zQ2o-gW2q-j-k-n-pQ4y0tQ5V1RQ5Y1VQ5o1gQ5y1rQ6T1{U6d2p2s2vQ6g2tQ7p4zQ7x5XQ7y5ZQ8O5dQ8Y5pQ8`5xS8o6e6iQ8q6hQ9f7vQ9n8ZQ9s8aQ9z8pQ:_9gQ:d9oQ:h9{R:s:eQ%xyQ'a!iQ'l!uU+g%y%z%{Q-O'SU-c'b'c'dS-g'h'rQ/u*dS0t+h+iQ2a-QS2m-d-eQ2t-lQ4`/yQ4z0uQ6`2gQ6c2nQ6h2uR7e4dS$wi<xR*v%VU%Ui%V<xR0]*tQ$viS(q#v+cS)_$b$cQ)a$dQ*W$xS*`${*UQ*o%OQ*p%QQ*z%]Q*{%^Q+P%bQ.d;jQ.e;lQ.g;pQ.h;rQ.i;tQ/U)uS/Z){/]Q/_)}Q/a*PQ/c*RQ/n*[S/s*b/eQ0Z*rQ0[*sh0k+`.^1c3T5l6p8U8u9l:O:c:kQ1V+zQ1X+}Q3W;|Q3X<OQ3Y<RS3o;g;hQ3s.wQ4V/oQ4W/pQ4[/rQ4i0VQ4k0XQ4q0dQ5Z1WQ5]1ZQ6u<VQ6v<XQ6w<ZQ6x<]Q6};kQ7O;mQ7Q;qQ7R;sQ7S;uQ7X3}Q7`4YQ7d4bQ7k4mQ7m4uQ7o4xQ8{<SQ8|;}Q8}<PQ9X7_Q9_7hQ:Q<WQ:R<YQ:S<[Q:T<^Q:U9TQ:]9bQ:l<aQ:{<bQ<j<xQ<v=QQ<w=RQ=S=UR=T=VQ*x%[Q.f;nR7P;onpOXst!Z#d%k&o&q&r&t,k,p1|2PQ!fPS#fZ#oQ&y!`U'e!o5b8RQ'{#SQ(|#{Q)n$nS,d&h&kQ,i&lQ,v&xQ,{'QQ-_'_Q.p(zQ/S)oS0h+V/fQ0n+aQ1x,hQ2k-aQ3R._Q3x.}Q4o0aQ5j1dQ5{1tQ5|1uQ6Q1wQ6S1yQ6X2RQ6s3UQ7V3uQ8W5mQ8d5}Q8e6OQ8g6RQ8y6tQ9m8XR9w8h#YcOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_(z+V+a,h,k,p-a._/f0a1d1t1u1w1y1|2P2R3U5b5m5}6O6R6t8R8X8hQ#YWQ#eYQ%ouQ%qvS%sw!gS(O#W(RQ(U#ZQ(p#uQ(u#xQ(}$OQ)O$PQ)P$QQ)Q$RQ)R$SQ)S$TQ)T$UQ)U$VQ)V$WQ)W$XQ)Y$ZQ)[$_Q)^$aQ)c$eW)m$n)o.}3uQ+^%rQ+r&PS-R'U2bQ-p'oS-u(P-wQ-z(XQ-|(`Q.k(tQ.n(vQ.r;PQ.t;SQ.u;TQ.v;WQ/X)yQ0e+RQ2],|Q2`-PQ2p-iQ2w-}Q3].lQ3b;XQ3c;YQ3d;ZQ3e;[Q3f;]Q3g;^Q3h;_Q3i;`Q3j;aQ3k;bQ3l;cQ3m.sQ3n;fQ3q;iQ3r;vQ3y;dQ4r0gQ4{0vQ6_;xQ6e2rQ6j2xQ6y3^Q6z;yQ7T;{Q7U<TQ7}5`Q8l6]Q8p6fQ8z<UQ9Q<_Q9R<`Q9{8rQ:`9hQ:g9yQ;R#SR<o<{R#[WR'W!el!tQ!r!v!y!z']'i'j'k-]-m1a5e5gS'S!e-TS-Q'T'[R2g-ZR(w#xQ!fQT-[']-]]!qQ!r']-]1a5eQ#p]R'f;QR)b$dY!uQ']-]1a5eQ'h!rS'r!v!yS't!z5gS-l'i'jQ-n'kR2u-mT#kZ%cS#jZ%cS%im,gU(c#h#i#lS.Q(d(eQ.U(fQ0i+WQ2z.RU2{.S.T.VS6l2|2}R8s6md#^W#W#Z%f(P(Y*U+T-{/er#gZm#h#i#l%c(d(e(f+W.R.S.T.V2|2}6mS*X$x*]Q/l*YQ1v,gQ2^,}Q4P/hQ6Z2UQ7[4QQ8k6[T<g'U+UV#aW%f*UU#`W%f*US(Q#W(YU(V#Z+T/eS-S'U+UT-v(P-{V'Z!e%g*VQ$lfR)t$qT)i$l)jR3w.|T*Z$x*]T*c${*UQ0l+`Q3P.^Q5i1cQ6q3TQ8V5lQ8v6pQ9j8UQ9|8uQ:b9lQ:j:OQ:r:cR:u:knqOXst!Z#d%k&o&q&r&t,k,p1|2PQ&i!VR,`&ftmOXst!U!V!Z#d%k&f&o&q&r&t,k,p1|2PR,g&lT%jm,gR1],PR,_&dQ&S|R+w&TR+m%}T&m!W&pT&n!W&pT2O,p2P",
    nodeNames:
      "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
    maxTerm: 376,
    context: rk,
    nodeProps: [
      ["isolate", -8, 5, 6, 14, 34, 36, 48, 50, 52, ""],
      [
        "group",
        -26,
        9,
        17,
        19,
        65,
        204,
        208,
        212,
        213,
        215,
        218,
        221,
        231,
        233,
        239,
        241,
        243,
        245,
        248,
        254,
        260,
        262,
        264,
        266,
        268,
        270,
        271,
        "Statement",
        -34,
        13,
        14,
        29,
        32,
        33,
        39,
        48,
        51,
        52,
        54,
        59,
        67,
        69,
        73,
        77,
        79,
        81,
        82,
        107,
        108,
        117,
        118,
        135,
        138,
        140,
        141,
        142,
        143,
        144,
        146,
        147,
        166,
        167,
        169,
        "Expression",
        -23,
        28,
        30,
        34,
        38,
        40,
        42,
        171,
        173,
        175,
        176,
        178,
        179,
        180,
        182,
        183,
        184,
        186,
        187,
        188,
        198,
        200,
        202,
        203,
        "Type",
        -3,
        85,
        100,
        106,
        "ClassItem",
      ],
      [
        "openedBy",
        23,
        "<",
        35,
        "InterpolationStart",
        53,
        "[",
        57,
        "{",
        70,
        "(",
        159,
        "JSXStartCloseTag",
      ],
      [
        "closedBy",
        24,
        ">",
        37,
        "InterpolationEnd",
        47,
        "]",
        58,
        "}",
        71,
        ")",
        164,
        "JSXEndTag",
      ],
    ],
    propSources: [ck],
    skippedNodes: [0, 5, 6, 274],
    repeatNodeCount: 37,
    tokenData:
      "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Rp(U!b'w0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(S#S$h&j'x0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Rp(U!b'x0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(Q':f$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(U!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(U!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(U!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(U!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Rp(U!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Rp(U!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(U!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(U!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(RpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(RpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Rp(U!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(j%1l(Rp(U!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Rp(U!b$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Rp(U!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Rp(U!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(u+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(T';W$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(RpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(RpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(RpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(RpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Rp(U!b(P%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Rp(U!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Rp(U!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Rp(U!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Rp(U!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(U!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(U!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(U!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(U!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(U!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(U!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Rp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Rp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Rp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Rp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(RpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(RpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Rp(U!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Rp(U!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Rp(U!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Rp(U!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Rp(U!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Rp(U!b'y0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Rp(U!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(U!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(U!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(RpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(RpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Rp(U!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Rp(U!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Rp(U!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Rp(U!b(y7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(m(Ct$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Rp(U!b([+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Rp(U!b(O,2j$^#t(`$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Rp(U!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Rp(U!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(t+JY$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z(Kd$?V_!Z(Cds`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Rp(U!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Rp(U!b'w0/l$[#t(O,2j(`$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Rp(U!b'x0/l$[#t(O,2j(`$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
    tokenizers: [
      lk,
      ak,
      hk,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      ok,
      new Rh(
        "$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(^~~",
        141,
        335
      ),
      new Rh("j~RQYZXz{^~^O'{~~aP!P!Qd~iO'|~~", 25, 318),
    ],
    topRules: {
      Script: [0, 7],
      SingleExpression: [1, 272],
      SingleClassItem: [2, 273],
    },
    dialects: { jsx: 0, ts: 14725 },
    dynamicPrecedences: { 77: 1, 79: 1, 91: 1, 167: 1, 196: 1 },
    specialized: [
      { term: 322, get: (i) => fk[i] || -1 },
      { term: 338, get: (i) => uk[i] || -1 },
      { term: 92, get: (i) => dk[i] || -1 },
    ],
    tokenPrec: 14749,
  }),
  Em = [
    ct("function ${name}(${params}) {\n	${}\n}", {
      label: "function",
      detail: "definition",
      type: "keyword",
    }),
    ct("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}", {
      label: "for",
      detail: "loop",
      type: "keyword",
    }),
    ct("for (let ${name} of ${collection}) {\n	${}\n}", {
      label: "for",
      detail: "of loop",
      type: "keyword",
    }),
    ct("do {\n	${}\n} while (${})", {
      label: "do",
      detail: "loop",
      type: "keyword",
    }),
    ct("while (${}) {\n	${}\n}", {
      label: "while",
      detail: "loop",
      type: "keyword",
    }),
    ct(
      "\n".join([
        `try {
	\${}
} catch (\${error}) {
	\${}`,
        `}`,
      ]),
      { label: "try", detail: "/ catch block", type: "keyword" }
    ),
    ct("if (${}) {\n	${}\n}", { label: "if", detail: "block", type: "keyword" }),
    ct(
      "\n".join([
        `if (\${}) {
	\${}
} else {
	\${}`,
        `}`,
      ]),
      { label: "if", detail: "/ else block", type: "keyword" }
    ),
    ct(
      "\n".join([
        `class \${name} {
	constructor(\${params}) {
		\${}
	}`,
        `}`,
      ]),
      { label: "class", detail: "definition", type: "keyword" }
    ),
    ct('import {${names}} from "${module}"\n${}', {
      label: "import",
      detail: "named",
      type: "keyword",
    }),
    ct('import ${name} from "${module}"\n${}', {
      label: "import",
      detail: "default",
      type: "keyword",
    }),
  ],
  Ok = Em.concat([
    ct("interface ${name} {\n	${}\n}", {
      label: "interface",
      detail: "definition",
      type: "keyword",
    }),
    ct("type ${name} = ${type}", {
      label: "type",
      detail: "definition",
      type: "keyword",
    }),
    ct("enum ${name} {\n	${}\n}", {
      label: "enum",
      detail: "definition",
      type: "keyword",
    }),
  ]),
  Od = new H1(),
  Wm = new Set([
    "Script",
    "Block",
    "FunctionExpression",
    "FunctionDeclaration",
    "ArrowFunction",
    "MethodDeclaration",
    "ForStatement",
  ]);
function ds(i) {
  return (e, t) => {
    let n = e.node.getChild("VariableDefinition");
    return n && t(n, i), !0;
  };
}
const gk = ["FunctionDeclaration"],
  mk = {
    FunctionDeclaration: ds("function"),
    ClassDeclaration: ds("class"),
    ClassExpression: () => !0,
    EnumDeclaration: ds("constant"),
    TypeAliasDeclaration: ds("type"),
    NamespaceDeclaration: ds("namespace"),
    VariableDefinition(i, e) {
      i.matchContext(gk) || e(i, "variable");
    },
    TypeDefinition(i, e) {
      e(i, "type");
    },
    __proto__: null,
  };
function Xm(i, e) {
  let t = Od.get(e);
  if (t) return t;
  let n = [],
    s = !0;
  function r(o, l) {
    let a = i.sliceString(o.from, o.to);
    n.push({ label: a, type: l });
  }
  return (
    e.cursor(De.IncludeAnonymous).iterate((o) => {
      if (s) s = !1;
      else if (o.name) {
        let l = mk[o.name];
        if ((l && l(o, r)) || Wm.has(o.name)) return !1;
      } else if (o.to - o.from > 8192) {
        for (let l of Xm(i, o.node)) n.push(l);
        return !1;
      }
    }),
    Od.set(e, n),
    n
  );
}
const Bo = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
  Xc = [
    "TemplateString",
    "String",
    "RegExp",
    "LineComment",
    "BlockComment",
    "VariableDefinition",
    "TypeDefinition",
    "Label",
    "PropertyDefinition",
    "PropertyName",
    "PrivatePropertyDefinition",
    "PrivatePropertyName",
    ".",
    "?.",
  ];
function bk(i) {
  let e = _e(i.state).resolveInner(i.pos, -1);
  if (Xc.indexOf(e.name) > -1) return null;
  let t =
    e.name == "VariableName" ||
    (e.to - e.from < 20 && Bo.test(i.state.sliceDoc(e.from, e.to)));
  if (!t && !i.explicit) return null;
  let n = [];
  for (let s = e; s; s = s.parent)
    Wm.has(s.name) && (n = n.concat(Xm(i.state.doc, s)));
  return { options: n, from: t ? e.from : i.pos, validFor: Bo };
}
function ba(i, e, t) {
  var n;
  let s = [];
  for (;;) {
    let r = e.firstChild,
      o;
    if ((r == null ? void 0 : r.name) == "VariableName")
      return s.push(i(r)), { path: s.reverse(), name: t };
    if (
      (r == null ? void 0 : r.name) == "MemberExpression" &&
      ((n = o = r.lastChild) === null || n === void 0 ? void 0 : n.name) ==
        "PropertyName"
    )
      s.push(i(o)), (e = r);
    else return null;
  }
}
function yk(i) {
  let e = (n) => i.state.doc.sliceString(n.from, n.to),
    t = _e(i.state).resolveInner(i.pos, -1);
  return t.name == "PropertyName"
    ? ba(e, t.parent, e(t))
    : (t.name == "." || t.name == "?.") && t.parent.name == "MemberExpression"
    ? ba(e, t.parent, "")
    : Xc.indexOf(t.name) > -1
    ? null
    : t.name == "VariableName" || (t.to - t.from < 20 && Bo.test(e(t)))
    ? { path: [], name: e(t) }
    : t.name == "MemberExpression"
    ? ba(e, t, "")
    : i.explicit
    ? { path: [], name: "" }
    : null;
}
function xk(i, e) {
  let t = [],
    n = new Set();
  for (let s = 0; ; s++) {
    for (let o of (Object.getOwnPropertyNames || Object.keys)(i)) {
      if (!/^[a-zA-Z_$\xaa-\uffdc][\w$\xaa-\uffdc]*$/.test(o) || n.has(o))
        continue;
      n.add(o);
      let l;
      try {
        l = i[o];
      } catch {
        continue;
      }
      t.push({
        label: o,
        type:
          typeof l == "function"
            ? /^[A-Z]/.test(o)
              ? "class"
              : e
              ? "function"
              : "method"
            : e
            ? "variable"
            : "property",
        boost: -s,
      });
    }
    let r = Object.getPrototypeOf(i);
    if (!r) return t;
    i = r;
  }
}
function X$(i) {
  let e = new Map();
  return (t) => {
    let n = yk(t);
    if (!n) return null;
    let s = i;
    for (let o of n.path) if (((s = s[o]), !s)) return null;
    let r = e.get(s);
    return (
      r || e.set(s, (r = xk(s, !n.path.length))),
      { from: t.pos - n.name.length, options: r, validFor: Bo }
    );
  };
}
const dn = er.define({
    name: "javascript",
    parser: pk.configure({
      props: [
        kc.add({
          IfStatement: Ws({ except: /^\s*({|else\b)/ }),
          TryStatement: Ws({ except: /^\s*({|catch\b|finally\b)/ }),
          LabeledStatement: tw,
          SwitchBody: (i) => {
            let e = i.textAfter,
              t = /^\s*\}/.test(e),
              n = /^\s*(case|default)\b/.test(e);
            return i.baseIndent + (t ? 0 : n ? 1 : 2) * i.unit;
          },
          Block: ew({ closing: "}" }),
          ArrowFunction: (i) => i.baseIndent + i.unit,
          "TemplateString BlockComment": () => null,
          "Statement Property": Ws({ except: /^{/ }),
          JSXElement(i) {
            let e = /^\s*<\//.test(i.textAfter);
            return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
          },
          JSXEscape(i) {
            let e = /\s*\}/.test(i.textAfter);
            return i.lineIndent(i.node.from) + (e ? 0 : i.unit);
          },
          "JSXOpenTag JSXSelfClosingTag"(i) {
            return i.column(i.node.from) + i.unit;
          },
        }),
        $c.add({
          "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType":
            Ag,
          BlockComment(i) {
            return { from: i.from + 2, to: i.to - 2 };
          },
        }),
      ],
    }),
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "'", '"', decodeURIComponent("%60")],
      },
      commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: "$",
    },
  }),
  Dm = {
    test: (i) => /^JSX/.test(i.name),
    facet: $g({ commentTokens: { block: { open: "{/*", close: "*/}" } } }),
  },
  Sk = dn.configure({ dialect: "ts" }, "typescript"),
  wk = dn.configure({
    dialect: "jsx",
    props: [Qc.add((i) => (i.isTop ? [Dm] : void 0))],
  }),
  Qk = dn.configure(
    { dialect: "jsx ts", props: [Qc.add((i) => (i.isTop ? [Dm] : void 0))] },
    "typescript"
  );
let Ym = (i) => ({ label: i, type: "keyword" });
const jm =
    "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield"
      .split(" ")
      .map(Ym),
  Pk = jm.concat(
    ["declare", "implements", "private", "protected", "public"].map(Ym)
  );
function D$(i = {}) {
  let e = i.jsx ? (i.typescript ? Qk : wk) : i.typescript ? Sk : dn,
    t = i.typescript ? Ok.concat(Pk) : Em.concat(jm);
  return new Zg(e, [
    dn.data.of({ autocomplete: Rw(Xc, zg(t)) }),
    dn.data.of({ autocomplete: bk }),
    i.jsx ? $k : [],
  ]);
}
function kk(i) {
  for (;;) {
    if (
      i.name == "JSXOpenTag" ||
      i.name == "JSXSelfClosingTag" ||
      i.name == "JSXFragmentTag"
    )
      return i;
    if (i.name == "JSXEscape" || !i.parent) return null;
    i = i.parent;
  }
}
function gd(i, e, t = i.length) {
  for (let n = e == null ? void 0 : e.firstChild; n; n = n.nextSibling)
    if (
      n.name == "JSXIdentifier" ||
      n.name == "JSXBuiltin" ||
      n.name == "JSXNamespacedName" ||
      n.name == "JSXMemberExpression"
    )
      return i.sliceString(n.from, Math.min(n.to, t));
  return "";
}
const vk =
    typeof navigator == "object" && /Android\b/.test(navigator.userAgent),
  $k = q.inputHandler.of((i, e, t, n, s) => {
    if (
      (vk ? i.composing : i.compositionStarted) ||
      i.state.readOnly ||
      e != t ||
      (n != ">" && n != "/") ||
      !dn.isActiveAt(i.state, e, -1)
    )
      return !1;
    let r = s(),
      { state: o } = r,
      l = o.changeByRange((a) => {
        var h;
        let { head: c } = a,
          f = _e(o).resolveInner(c - 1, -1),
          u;
        if (
          (f.name == "JSXStartTag" && (f = f.parent),
          !(
            o.doc.sliceString(c - 1, c) != n ||
            (f.name == "JSXAttributeValue" && f.to > c)
          ))
        ) {
          if (n == ">" && f.name == "JSXFragmentTag")
            return { range: a, changes: { from: c, insert: "</>" } };
          if (n == "/" && f.name == "JSXStartCloseTag") {
            let d = f.parent,
              p = d.parent;
            if (
              p &&
              d.from == c - 2 &&
              ((u = gd(o.doc, p.firstChild, c)) ||
                ((h = p.firstChild) === null || h === void 0
                  ? void 0
                  : h.name) == "JSXFragmentTag")
            ) {
              let O = `${u}>`;
              return {
                range: v.cursor(c + O.length, -1),
                changes: { from: c, insert: O },
              };
            }
          } else if (n == ">") {
            let d = kk(f);
            if (
              d &&
              d.name == "JSXOpenTag" &&
              !/^\/?>|^<\//.test(o.doc.sliceString(c, c + 2)) &&
              (u = gd(o.doc, d, c))
            )
              return { range: a, changes: { from: c, insert: `</${u}>` } };
          }
        }
        return { range: a };
      });
    return l.changes.empty
      ? !1
      : (i.dispatch([
          r,
          o.update(l, { userEvent: "input.complete", scrollIntoView: !0 }),
        ]),
        !0);
  }),
  Ck = wc({
    String: w.string,
    Number: w.number,
    "True False": w.bool,
    PropertyName: w.propertyName,
    Null: w.null,
    ", :": w.separator,
    "[ ]": w.squareBracket,
    "{ }": w.brace,
  }),
  Zk = rr.deserialize({
    version: 14,
    states:
      "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",
    stateData:
      "#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",
    goto: "!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
    nodeNames:
      "⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",
    maxTerm: 25,
    nodeProps: [
      ["isolate", -2, 6, 11, ""],
      ["openedBy", 7, "{", 14, "["],
      ["closedBy", 8, "}", 15, "]"],
    ],
    propSources: [Ck],
    skippedNodes: [0],
    repeatNodeCount: 2,
    tokenData:
      "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
    tokenizers: [0],
    topRules: { JsonText: [0, 1] },
    tokenPrec: 0,
  }),
  Rk = er.define({
    name: "json",
    parser: Zk.configure({
      props: [
        kc.add({
          Object: Ws({ except: /^\s*\}/ }),
          Array: Ws({ except: /^\s*\]/ }),
        }),
        $c.add({ "Object Array": Ag }),
      ],
    }),
    languageData: {
      closeBrackets: { brackets: ["[", "{", '"'] },
      indentOnInput: /^\s*[\}\]]$/,
    },
  });
function Y$() {
  return new Zg(Rk);
}
// END lezer generated from .grammar?


// BEGIN crelt.js
function be() {
  var i = arguments[0];
  typeof i == "string" && (i = document.createElement(i));
  var e = 1,
    t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var s = t[n];
        typeof s == "string" ? i.setAttribute(n, s) : s != null && (i[n] = s);
      }
    e++;
  }
  for (; e < arguments.length; e++) Lm(i, arguments[e]);
  return i;
}
function Lm(i, e) {
  if (typeof e == "string") i.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null) i.appendChild(e);
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Lm(i, e[t]);
    else throw new RangeError("Unsupported child node: " + e);
}
// END crelt.js


// BEGIN codemirror-lint.js
class Tk {
  constructor(e, t, n) {
    (this.from = e), (this.to = t), (this.diagnostic = n);
  }
}
class on {
  constructor(e, t, n) {
    (this.diagnostics = e), (this.panel = t), (this.selected = n);
  }
  static init(e, t, n) {
    let s = e,
      r = n.facet(or).markerFilter;
    r && (s = r(s, n));
    let o = N.set(
      s.map((l) =>
        l.from == l.to ||
        (l.from == l.to - 1 && n.doc.lineAt(l.from).to == l.from)
          ? N.widget({ widget: new Yk(l), diagnostic: l }).range(l.from)
          : N.mark({
              attributes: {
                class:
                  "cm-lintRange cm-lintRange-" +
                  l.severity +
                  (l.markClass ? " " + l.markClass : ""),
              },
              diagnostic: l,
            }).range(l.from, l.to)
      ),
      !0
    );
    return new on(o, t, Bn(o));
  }
}
function Bn(i, e = null, t = 0) {
  let n = null;
  return (
    i.between(t, 1e9, (s, r, { spec: o }) => {
      if (!(e && o.diagnostic != e))
        return (n = new Tk(s, r, o.diagnostic)), !1;
    }),
    n
  );
}
function Ak(i, e) {
  let t = e.pos,
    n = e.end || t,
    s = i.state.facet(or).hideOn(i, t, n);
  if (s != null) return s;
  let r = i.startState.doc.lineAt(e.pos);
  return !!(
    i.effects.some((o) => o.is(Um)) ||
    i.changes.touchesRange(r.from, Math.max(r.to, n))
  );
}
function Mk(i, e) {
  return i.field(Pt, !1) ? e : e.concat(ee.appendConfig.of(Uk));
}
const Um = ee.define(),
  Dc = ee.define(),
  Vm = ee.define(),
  Pt = Le.define({
    create() {
      return new on(N.none, null, null);
    },
    update(i, e) {
      if (e.docChanged && i.diagnostics.size) {
        let t = i.diagnostics.map(e.changes),
          n = null,
          s = i.panel;
        if (i.selected) {
          let r = e.changes.mapPos(i.selected.from, 1);
          n = Bn(t, i.selected.diagnostic, r) || Bn(t, null, r);
        }
        !t.size && s && e.state.facet(or).autoPanel && (s = null),
          (i = new on(t, s, n));
      }
      for (let t of e.effects)
        if (t.is(Um)) {
          let n = e.state.facet(or).autoPanel
            ? t.value.length
              ? lr.open
              : null
            : i.panel;
          i = on.init(t.value, n, e.state);
        } else
          t.is(Dc)
            ? (i = new on(i.diagnostics, t.value ? lr.open : null, i.selected))
            : t.is(Vm) && (i = new on(i.diagnostics, i.panel, t.value));
      return i;
    },
    provide: (i) => [
      Js.from(i, (e) => e.panel),
      q.decorations.from(i, (e) => e.diagnostics),
    ],
  }),
  _k = N.mark({ class: "cm-lintRange cm-lintRange-active" });
function Ek(i, e, t) {
  let { diagnostics: n } = i.state.field(Pt),
    s = [],
    r = 2e8,
    o = 0;
  n.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    e >= a &&
      e <= h &&
      (a == h || ((e > a || t > 0) && (e < h || t < 0))) &&
      (s.push(c.diagnostic), (r = Math.min(a, r)), (o = Math.max(h, o)));
  });
  let l = i.state.facet(or).tooltipFilter;
  return (
    l && (s = l(s, i.state)),
    s.length
      ? {
          pos: r,
          end: o,
          above: i.state.doc.lineAt(r).to < o,
          create() {
            return { dom: Wk(i, s) };
          },
        }
      : null
  );
}
function Wk(i, e) {
  return be(
    "ul",
    { class: "cm-tooltip-lint" },
    e.map((t) => zm(i, t, !1))
  );
}
const Xk = (i) => {
    let e = i.state.field(Pt, !1);
    (!e || !e.panel) && i.dispatch({ effects: Mk(i.state, [Dc.of(!0)]) });
    let t = Ks(i, lr.open);
    return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
  },
  md = (i) => {
    let e = i.state.field(Pt, !1);
    return !e || !e.panel ? !1 : (i.dispatch({ effects: Dc.of(!1) }), !0);
  },
  Dk = (i) => {
    let e = i.state.field(Pt, !1);
    if (!e) return !1;
    let t = i.state.selection.main,
      n = e.diagnostics.iter(t.to + 1);
    return !n.value &&
      ((n = e.diagnostics.iter(0)),
      !n.value || (n.from == t.from && n.to == t.to))
      ? !1
      : (i.dispatch({
          selection: { anchor: n.from, head: n.to },
          scrollIntoView: !0,
        }),
        !0);
  },
  j$ = [
    { key: "Mod-Shift-m", run: Xk, preventDefault: !0 },
    { key: "F8", run: Dk },
  ],
  or = z.define({
    combine(i) {
      return Object.assign(
        { sources: i.map((e) => e.source).filter((e) => e != null) },
        ri(
          i.map((e) => e.config),
          {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null,
            hideOn: () => null,
          },
          { needsRefresh: (e, t) => (e ? (t ? (n) => e(n) || t(n) : e) : t) }
        )
      );
    },
  });
function qm(i) {
  let e = [];
  if (i)
    e: for (let { name: t } of i) {
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        if (
          /[a-zA-Z]/.test(s) &&
          !e.some((r) => r.toLowerCase() == s.toLowerCase())
        ) {
          e.push(s);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function zm(i, e, t) {
  var n;
  let s = t ? qm(e.actions) : [];
  return be(
    "li",
    { class: "cm-diagnostic cm-diagnostic-" + e.severity },
    be(
      "span",
      { class: "cm-diagnosticText" },
      e.renderMessage ? e.renderMessage(i) : e.message
    ),
    (n = e.actions) === null || n === void 0
      ? void 0
      : n.map((r, o) => {
          let l = !1,
            a = (u) => {
              if ((u.preventDefault(), l)) return;
              l = !0;
              let d = Bn(i.state.field(Pt).diagnostics, e);
              d && r.apply(i, d.from, d.to);
            },
            { name: h } = r,
            c = s[o] ? h.indexOf(s[o]) : -1,
            f =
              c < 0
                ? h
                : [h.slice(0, c), be("u", h.slice(c, c + 1)), h.slice(c + 1)];
          return be(
            "button",
            {
              type: "button",
              class: "cm-diagnosticAction",
              onclick: a,
              onmousedown: a,
              "aria-label": ` Action: ${h}${
                c < 0 ? "" : ` (access key "${s[o]})"`
              }.`,
            },
            f
          );
        }),
    e.source && be("div", { class: "cm-diagnosticSource" }, e.source)
  );
}
class Yk extends xi {
  constructor(e) {
    super(), (this.diagnostic = e);
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return be("span", {
      class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity,
    });
  }
}
class bd {
  constructor(e, t) {
    (this.diagnostic = t),
      (this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16)),
      (this.dom = zm(e, t, !0)),
      (this.dom.id = this.id),
      this.dom.setAttribute("role", "option");
  }
}
class lr {
  constructor(e) {
    (this.view = e), (this.items = []);
    let t = (s) => {
        if (s.keyCode == 27) md(this.view), this.view.focus();
        else if (s.keyCode == 38 || s.keyCode == 33)
          this.moveSelection(
            (this.selectedIndex - 1 + this.items.length) % this.items.length
          );
        else if (s.keyCode == 40 || s.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (s.keyCode == 36) this.moveSelection(0);
        else if (s.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (s.keyCode == 13) this.view.focus();
        else if (
          s.keyCode >= 65 &&
          s.keyCode <= 90 &&
          this.selectedIndex >= 0
        ) {
          let { diagnostic: r } = this.items[this.selectedIndex],
            o = qm(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = Bn(this.view.state.field(Pt).diagnostics, r);
              a && r.actions[l].apply(e, a.from, a.to);
            }
        } else return;
        s.preventDefault();
      },
      n = (s) => {
        for (let r = 0; r < this.items.length; r++)
          this.items[r].dom.contains(s.target) && this.moveSelection(r);
      };
    (this.list = be("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: n,
    })),
      (this.dom = be(
        "div",
        { class: "cm-panel-lint" },
        this.list,
        be(
          "button",
          {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: () => md(this.view),
          },
          "×"
        )
      )),
      this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Pt).selected;
    if (!e) return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic) return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Pt),
      n = 0,
      s = !1,
      r = null;
    for (
      e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
        let h = -1,
          c;
        for (let f = n; f < this.items.length; f++)
          if (this.items[f].diagnostic == a.diagnostic) {
            h = f;
            break;
          }
        h < 0
          ? ((c = new bd(this.view, a.diagnostic)),
            this.items.splice(n, 0, c),
            (s = !0))
          : ((c = this.items[h]),
            h > n && (this.items.splice(n, h - n), (s = !0))),
          t && c.diagnostic == t.diagnostic
            ? c.dom.hasAttribute("aria-selected") ||
              (c.dom.setAttribute("aria-selected", "true"), (r = c))
            : c.dom.hasAttribute("aria-selected") &&
              c.dom.removeAttribute("aria-selected"),
          n++;
      });
      n < this.items.length &&
      !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

    )
      (s = !0), this.items.pop();
    this.items.length == 0 &&
      (this.items.push(
        new bd(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics"),
        })
      ),
      (s = !0)),
      r
        ? (this.list.setAttribute("aria-activedescendant", r.id),
          this.view.requestMeasure({
            key: this,
            read: () => ({
              sel: r.dom.getBoundingClientRect(),
              panel: this.list.getBoundingClientRect(),
            }),
            write: ({ sel: o, panel: l }) => {
              let a = l.height / this.list.offsetHeight;
              o.top < l.top
                ? (this.list.scrollTop -= (l.top - o.top) / a)
                : o.bottom > l.bottom &&
                  (this.list.scrollTop += (o.bottom - l.bottom) / a);
            },
          }))
        : this.selectedIndex < 0 &&
          this.list.removeAttribute("aria-activedescendant"),
      s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let n = e;
      (e = n.nextSibling), n.remove();
    }
    for (let n of this.items)
      if (n.dom.parentNode == this.list) {
        for (; e != n.dom; ) t();
        e = n.dom.nextSibling;
      } else this.list.insertBefore(n.dom, e);
    for (; e; ) t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let t = this.view.state.field(Pt),
      n = Bn(t.diagnostics, this.items[e].diagnostic);
    n &&
      this.view.dispatch({
        selection: { anchor: n.from, head: n.to },
        scrollIntoView: !0,
        effects: Vm.of(n),
      });
  }
  static open(e) {
    return new lr(e);
  }
}
function jk(i, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(
    i
  )}</svg>')`;
}
function Fr(i) {
  return jk(
    `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${i}" fill="none" stroke-width=".7"/>`,
    'width="6" height="3"'
  );
}
const Lk = q.baseTheme({
    ".cm-diagnostic": {
      padding: "3px 6px 3px 8px",
      marginLeft: "-1px",
      display: "block",
      whiteSpace: "pre-wrap",
    },
    ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
    ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
    ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
    ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
    ".cm-diagnosticAction": {
      font: "inherit",
      border: "none",
      padding: "2px 4px",
      backgroundColor: "#444",
      color: "white",
      borderRadius: "3px",
      marginLeft: "8px",
      cursor: "pointer",
    },
    ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 },
    ".cm-lintRange": {
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      paddingBottom: "0.7px",
    },
    ".cm-lintRange-error": { backgroundImage: Fr("#d11") },
    ".cm-lintRange-warning": { backgroundImage: Fr("orange") },
    ".cm-lintRange-info": { backgroundImage: Fr("#999") },
    ".cm-lintRange-hint": { backgroundImage: Fr("#66d") },
    ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
    ".cm-tooltip-lint": { padding: 0, margin: 0 },
    ".cm-lintPoint": {
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-2px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "4px solid #d11",
      },
    },
    ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
    ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
    ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } },
    ".cm-panel.cm-panel-lint": {
      position: "relative",
      "& ul": {
        maxHeight: "100px",
        overflowY: "auto",
        "& [aria-selected]": {
          backgroundColor: "#ddd",
          "& u": { textDecoration: "underline" },
        },
        "&:focus [aria-selected]": {
          background_fallback: "#bdf",
          backgroundColor: "Highlight",
          color_fallback: "white",
          color: "HighlightText",
        },
        "& u": { textDecoration: "none" },
        padding: 0,
        margin: 0,
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "2px",
        background: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0,
      },
    },
  }),
  Uk = [
    Pt,
    q.decorations.compute([Pt], (i) => {
      let { selected: e, panel: t } = i.field(Pt);
      return !e || !t || e.from == e.to
        ? N.none
        : N.set([_k.range(e.from, e.to)]);
    }),
    vS(Ek, { hideOn: Ak }),
    Lk,
  ],
// END codemirror-lint.js


// BEGIN codemirror-search.js
  yd =
    typeof String.prototype.normalize == "function"
      ? (i) => i.normalize("NFKD")
      : (i) => i;
class Gn {
  constructor(e, t, n = 0, s = e.length, r, o) {
    (this.test = o),
      (this.value = { from: 0, to: 0 }),
      (this.done = !1),
      (this.matches = []),
      (this.buffer = ""),
      (this.bufferPos = 0),
      (this.iter = e.iterRange(n, s)),
      (this.bufferStart = n),
      (this.normalize = r ? (l) => r(yd(l)) : yd),
      (this.query = this.normalize(t));
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (
        ((this.bufferStart += this.buffer.length),
        this.iter.next(),
        this.iter.done)
      )
        return -1;
      (this.bufferPos = 0), (this.buffer = this.iter.value);
    }
    return Ve(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek();
      if (e < 0) return (this.done = !0), this;
      let t = ac(e),
        n = this.bufferStart + this.bufferPos;
      this.bufferPos += $t(e);
      let s = this.normalize(t);
      for (let r = 0, o = n; ; r++) {
        let l = s.charCodeAt(r),
          a = this.match(l, o, this.bufferPos + this.bufferStart);
        if (r == s.length - 1) {
          if (a) return (this.value = a), this;
          break;
        }
        o == n && r < t.length && t.charCodeAt(r) == l && o++;
      }
    }
  }
  match(e, t, n) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r],
        l = !1;
      this.query.charCodeAt(o) == e &&
        (o == this.query.length - 1
          ? (s = { from: this.matches[r + 1], to: n })
          : (this.matches[r]++, (l = !0))),
        l || (this.matches.splice(r, 2), (r -= 2));
    }
    return (
      this.query.charCodeAt(0) == e &&
        (this.query.length == 1
          ? (s = { from: t, to: n })
          : this.matches.push(1, t)),
      s &&
        this.test &&
        !this.test(s.from, s.to, this.buffer, this.bufferStart) &&
        (s = null),
      s
    );
  }
}
typeof Symbol < "u" &&
  (Gn.prototype[Symbol.iterator] = function () {
    return this;
  });
const Im = { from: -1, to: -1, match: /.*/.exec("") },
  Yc = "gm" + (/x/.unicode == null ? "" : "u");
class Nm {
  constructor(e, t, n, s = 0, r = e.length) {
    if (
      ((this.text = e),
      (this.to = r),
      (this.curLine = ""),
      (this.done = !1),
      (this.value = Im),
      /\\[sWDnr]|\n|\r|\[\^/.test(t))
    )
      return new Bm(e, t, n, s, r);
    (this.re = new RegExp(t, Yc + (n != null && n.ignoreCase ? "i" : ""))),
      (this.test = n == null ? void 0 : n.test),
      (this.iter = e.iter());
    let o = e.lineAt(s);
    (this.curLineStart = o.from),
      (this.matchPos = Go(e, s)),
      this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e),
      this.iter.lineBreak
        ? (this.curLine = "")
        : ((this.curLine = this.iter.value),
          this.curLineStart + this.curLine.length > this.to &&
            (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
          this.iter.next());
  }
  nextLine() {
    (this.curLineStart = this.curLineStart + this.curLine.length + 1),
      this.curLineStart > this.to ? (this.curLine = "") : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let n = this.curLineStart + t.index,
          s = n + t[0].length;
        if (
          ((this.matchPos = Go(this.text, s + (n == s ? 1 : 0))),
          n == this.curLineStart + this.curLine.length && this.nextLine(),
          (n < s || n > this.value.to) && (!this.test || this.test(n, s, t)))
        )
          return (this.value = { from: n, to: s, match: t }), this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), (e = 0);
      else return (this.done = !0), this;
    }
  }
}
const ya = new WeakMap();
class Ln {
  constructor(e, t) {
    (this.from = e), (this.text = t);
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, n) {
    let s = ya.get(e);
    if (!s || s.from >= n || s.to <= t) {
      let l = new Ln(t, e.sliceString(t, n));
      return ya.set(e, l), l;
    }
    if (s.from == t && s.to == n) return s;
    let { text: r, from: o } = s;
    return (
      o > t && ((r = e.sliceString(t, o) + r), (o = t)),
      s.to < n && (r += e.sliceString(s.to, n)),
      ya.set(e, new Ln(o, r)),
      new Ln(t, r.slice(t - o, n - o))
    );
  }
}
class Bm {
  constructor(e, t, n, s, r) {
    (this.text = e),
      (this.to = r),
      (this.done = !1),
      (this.value = Im),
      (this.matchPos = Go(e, s)),
      (this.re = new RegExp(t, Yc + (n != null && n.ignoreCase ? "i" : ""))),
      (this.test = n == null ? void 0 : n.test),
      (this.flat = Ln.get(e, s, this.chunkEnd(s + 5e3)));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (;;) {
      let e = (this.re.lastIndex = this.matchPos - this.flat.from),
        t = this.re.exec(this.flat.text);
      if (
        (t &&
          !t[0] &&
          t.index == e &&
          ((this.re.lastIndex = e + 1), (t = this.re.exec(this.flat.text))),
        t)
      ) {
        let n = this.flat.from + t.index,
          s = n + t[0].length;
        if (
          (this.flat.to >= this.to ||
            t.index + t[0].length <= this.flat.text.length - 10) &&
          (!this.test || this.test(n, s, t))
        )
          return (
            (this.value = { from: n, to: s, match: t }),
            (this.matchPos = Go(this.text, s + (n == s ? 1 : 0))),
            this
          );
      }
      if (this.flat.to == this.to) return (this.done = !0), this;
      this.flat = Ln.get(
        this.text,
        this.flat.from,
        this.chunkEnd(this.flat.from + this.flat.text.length * 2)
      );
    }
  }
}
typeof Symbol < "u" &&
  (Nm.prototype[Symbol.iterator] = Bm.prototype[Symbol.iterator] =
    function () {
      return this;
    });
function Vk(i) {
  try {
    return new RegExp(i, Yc), !0;
  } catch {
    return !1;
  }
}
function Go(i, e) {
  if (e >= i.length) return e;
  let t = i.lineAt(e),
    n;
  for (
    ;
    e < t.to && (n = t.text.charCodeAt(e - t.from)) >= 56320 && n < 57344;

  )
    e++;
  return e;
}
function Mh(i) {
  let e = String(i.state.doc.lineAt(i.state.selection.main.head).number),
    t = be("input", { class: "cm-textfield", name: "line", value: e }),
    n = be(
      "form",
      {
        class: "cm-gotoLine",
        onkeydown: (r) => {
          r.keyCode == 27
            ? (r.preventDefault(),
              i.dispatch({ effects: Fo.of(!1) }),
              i.focus())
            : r.keyCode == 13 && (r.preventDefault(), s());
        },
        onsubmit: (r) => {
          r.preventDefault(), s();
        },
      },
      be("label", i.state.phrase("Go to line"), ": ", t),
      " ",
      be("button", { class: "cm-button", type: "submit" }, i.state.phrase("go"))
    );
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r) return;
    let { state: o } = i,
      l = o.doc.lineAt(o.selection.main.head),
      [, a, h, c, f] = r,
      u = c ? +c.slice(1) : 0,
      d = h ? +h : l.number;
    if (h && f) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / o.doc.lines),
        (d = Math.round(o.doc.lines * m));
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))),
      O = v.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    i.dispatch({
      effects: [Fo.of(!1), q.scrollIntoView(O.from, { y: "center" })],
      selection: O,
    }),
      i.focus();
  }
  return { dom: n };
}
const Fo = ee.define(),
  xd = Le.define({
    create() {
      return !0;
    },
    update(i, e) {
      for (let t of e.effects) t.is(Fo) && (i = t.value);
      return i;
    },
    provide: (i) => Js.from(i, (e) => (e ? Mh : null)),
  }),
  qk = (i) => {
    let e = Ks(i, Mh);
    if (!e) {
      let t = [Fo.of(!0)];
      i.state.field(xd, !1) == null && t.push(ee.appendConfig.of([xd, zk])),
        i.dispatch({ effects: t }),
        (e = Ks(i, Mh));
    }
    return e && e.dom.querySelector("input").select(), !0;
  },
  zk = q.baseTheme({
    ".cm-panel.cm-gotoLine": {
      padding: "2px 6px 4px",
      "& label": { fontSize: "80%" },
    },
  }),
  Ik = {
    highlightWordAroundCursor: !1,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: !1,
  },
  Nk = z.define({
    combine(i) {
      return ri(i, Ik, {
        highlightWordAroundCursor: (e, t) => e || t,
        minSelectionLength: Math.min,
        maxMatches: Math.min,
      });
    },
  });
function L$(i) {
  return [Kk, Hk];
}
const Bk = N.mark({ class: "cm-selectionMatch" }),
  Gk = N.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Sd(i, e, t, n) {
  return (
    (t == 0 || i(e.sliceDoc(t - 1, t)) != Pe.Word) &&
    (n == e.doc.length || i(e.sliceDoc(n, n + 1)) != Pe.Word)
  );
}
function Fk(i, e, t, n) {
  return (
    i(e.sliceDoc(t, t + 1)) == Pe.Word && i(e.sliceDoc(n - 1, n)) == Pe.Word
  );
}
const Hk = Me.fromClass(
    class {
      constructor(i) {
        this.decorations = this.getDeco(i);
      }
      update(i) {
        (i.selectionSet || i.docChanged || i.viewportChanged) &&
          (this.decorations = this.getDeco(i.view));
      }
      getDeco(i) {
        let e = i.state.facet(Nk),
          { state: t } = i,
          n = t.selection;
        if (n.ranges.length > 1) return N.none;
        let s = n.main,
          r,
          o = null;
        if (s.empty) {
          if (!e.highlightWordAroundCursor) return N.none;
          let a = t.wordAt(s.head);
          if (!a) return N.none;
          (o = t.charCategorizer(s.head)), (r = t.sliceDoc(a.from, a.to));
        } else {
          let a = s.to - s.from;
          if (a < e.minSelectionLength || a > 200) return N.none;
          if (e.wholeWords) {
            if (
              ((r = t.sliceDoc(s.from, s.to)),
              (o = t.charCategorizer(s.head)),
              !(Sd(o, t, s.from, s.to) && Fk(o, t, s.from, s.to)))
            )
              return N.none;
          } else if (((r = t.sliceDoc(s.from, s.to)), !r)) return N.none;
        }
        let l = [];
        for (let a of i.visibleRanges) {
          let h = new Gn(t.doc, r, a.from, a.to);
          for (; !h.next().done; ) {
            let { from: c, to: f } = h.value;
            if (
              (!o || Sd(o, t, c, f)) &&
              (s.empty && c <= s.from && f >= s.to
                ? l.push(Gk.range(c, f))
                : (c >= s.to || f <= s.from) && l.push(Bk.range(c, f)),
              l.length > e.maxMatches)
            )
              return N.none;
          }
        }
        return N.set(l);
      }
    },
    { decorations: (i) => i.decorations }
  ),
  Kk = q.baseTheme({
    ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
    ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" },
  }),
  Jk = ({ state: i, dispatch: e }) => {
    let { selection: t } = i,
      n = v.create(
        t.ranges.map((s) => i.wordAt(s.head) || v.cursor(s.head)),
        t.mainIndex
      );
    return n.eq(t) ? !1 : (e(i.update({ selection: n })), !0);
  };
function ev(i, e) {
  let { main: t, ranges: n } = i.selection,
    s = i.wordAt(t.head),
    r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new Gn(i.doc, e, n[n.length - 1].to); ; )
    if ((l.next(), l.done)) {
      if (o) return null;
      (l = new Gn(i.doc, e, 0, Math.max(0, n[n.length - 1].from - 1))),
        (o = !0);
    } else {
      if (o && n.some((a) => a.from == l.value.from)) continue;
      if (r) {
        let a = i.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to) continue;
      }
      return l.value;
    }
}
const tv = ({ state: i, dispatch: e }) => {
    let { ranges: t } = i.selection;
    if (t.some((r) => r.from === r.to)) return Jk({ state: i, dispatch: e });
    let n = i.sliceDoc(t[0].from, t[0].to);
    if (i.selection.ranges.some((r) => i.sliceDoc(r.from, r.to) != n))
      return !1;
    let s = ev(i, n);
    return s
      ? (e(
          i.update({
            selection: i.selection.addRange(v.range(s.from, s.to), !1),
            effects: q.scrollIntoView(s.to),
          })
        ),
        !0)
      : !1;
  },
  ts = z.define({
    combine(i) {
      return ri(i, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: (e) => new uv(e),
        scrollToMatch: (e) => q.scrollIntoView(e),
      });
    },
  });
class Gm {
  constructor(e) {
    (this.search = e.search),
      (this.caseSensitive = !!e.caseSensitive),
      (this.literal = !!e.literal),
      (this.regexp = !!e.regexp),
      (this.replace = e.replace || ""),
      (this.valid = !!this.search && (!this.regexp || Vk(this.search))),
      (this.unquoted = this.unquote(this.search)),
      (this.wholeWord = !!e.wholeWord);
  }
  unquote(e) {
    return this.literal
      ? e
      : e.replace(/\\([nrt\\])/g, (t, n) =>
          n == "n" ? "\n" : n == "r" ? "\r" : n == "t" ? "	" : "\\"
        );
  }
  eq(e) {
    return (
      this.search == e.search &&
      this.replace == e.replace &&
      this.caseSensitive == e.caseSensitive &&
      this.regexp == e.regexp &&
      this.wholeWord == e.wholeWord
    );
  }
  create() {
    return this.regexp ? new rv(this) : new nv(this);
  }
  getCursor(e, t = 0, n) {
    let s = e.doc ? e : ce.create({ doc: e });
    return (
      n == null && (n = s.doc.length),
      this.regexp ? kn(this, s, t, n) : Pn(this, s, t, n)
    );
  }
}
class Fm {
  constructor(e) {
    this.spec = e;
  }
}
function Pn(i, e, t, n) {
  return new Gn(
    e.doc,
    i.unquoted,
    t,
    n,
    i.caseSensitive ? void 0 : (s) => s.toLowerCase(),
    i.wholeWord ? iv(e.doc, e.charCategorizer(e.selection.main.head)) : void 0
  );
}
function iv(i, e) {
  return (t, n, s, r) => (
    (r > t || r + s.length < n) &&
      ((r = Math.max(0, t - 2)),
      (s = i.sliceString(r, Math.min(i.length, n + 2)))),
    (e(Ho(s, t - r)) != Pe.Word || e(Ko(s, t - r)) != Pe.Word) &&
      (e(Ko(s, n - r)) != Pe.Word || e(Ho(s, n - r)) != Pe.Word)
  );
}
class nv extends Fm {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, n) {
    let s = Pn(this.spec, e, n, e.doc.length).nextOverlapping();
    return (
      s.done && (s = Pn(this.spec, e, 0, t).nextOverlapping()),
      s.done ? null : s.value
    );
  }
  prevMatchInRange(e, t, n) {
    for (let s = n; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length),
        o = Pn(this.spec, e, r, s),
        l = null;
      for (; !o.nextOverlapping().done; ) l = o.value;
      if (l) return l;
      if (r == t) return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, n) {
    return (
      this.prevMatchInRange(e, 0, t) ||
      this.prevMatchInRange(e, n, e.doc.length)
    );
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let n = Pn(this.spec, e, 0, e.doc.length),
      s = [];
    for (; !n.next().done; ) {
      if (s.length >= t) return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = Pn(
      this.spec,
      e,
      Math.max(0, t - this.spec.unquoted.length),
      Math.min(n + this.spec.unquoted.length, e.doc.length)
    );
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
function kn(i, e, t, n) {
  return new Nm(
    e.doc,
    i.search,
    {
      ignoreCase: !i.caseSensitive,
      test: i.wholeWord ? sv(e.charCategorizer(e.selection.main.head)) : void 0,
    },
    t,
    n
  );
}
function Ho(i, e) {
  return i.slice(Be(i, e, !1), e);
}
function Ko(i, e) {
  return i.slice(e, Be(i, e));
}
function sv(i) {
  return (e, t, n) =>
    !n[0].length ||
    ((i(Ho(n.input, n.index)) != Pe.Word ||
      i(Ko(n.input, n.index)) != Pe.Word) &&
      (i(Ko(n.input, n.index + n[0].length)) != Pe.Word ||
        i(Ho(n.input, n.index + n[0].length)) != Pe.Word));
}
class rv extends Fm {
  nextMatch(e, t, n) {
    let s = kn(this.spec, e, n, e.doc.length).next();
    return (
      s.done && (s = kn(this.spec, e, 0, t).next()), s.done ? null : s.value
    );
  }
  prevMatchInRange(e, t, n) {
    for (let s = 1; ; s++) {
      let r = Math.max(t, n - s * 1e4),
        o = kn(this.spec, e, r, n),
        l = null;
      for (; !o.next().done; ) l = o.value;
      if (l && (r == t || l.from > r + 10)) return l;
      if (r == t) return null;
    }
  }
  prevMatch(e, t, n) {
    return (
      this.prevMatchInRange(e, 0, t) ||
      this.prevMatchInRange(e, n, e.doc.length)
    );
  }
  getReplacement(e) {
    return this.spec
      .unquote(this.spec.replace)
      .replace(/\$([$&\d+])/g, (t, n) =>
        n == "$"
          ? "$"
          : n == "&"
          ? e.match[0]
          : n != "0" && +n < e.match.length
          ? e.match[n]
          : t
      );
  }
  matchAll(e, t) {
    let n = kn(this.spec, e, 0, e.doc.length),
      s = [];
    for (; !n.next().done; ) {
      if (s.length >= t) return null;
      s.push(n.value);
    }
    return s;
  }
  highlight(e, t, n, s) {
    let r = kn(
      this.spec,
      e,
      Math.max(0, t - 250),
      Math.min(n + 250, e.doc.length)
    );
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
const ar = ee.define(),
  jc = ee.define(),
  Yi = Le.define({
    create(i) {
      return new xa(_h(i).create(), null);
    },
    update(i, e) {
      for (let t of e.effects)
        t.is(ar)
          ? (i = new xa(t.value.create(), i.panel))
          : t.is(jc) && (i = new xa(i.query, t.value ? Lc : null));
      return i;
    },
    provide: (i) => Js.from(i, (e) => e.panel),
  });
class xa {
  constructor(e, t) {
    (this.query = e), (this.panel = t);
  }
}
const ov = N.mark({ class: "cm-searchMatch" }),
  lv = N.mark({ class: "cm-searchMatch cm-searchMatch-selected" }),
  av = Me.fromClass(
    class {
      constructor(i) {
        (this.view = i), (this.decorations = this.highlight(i.state.field(Yi)));
      }
      update(i) {
        let e = i.state.field(Yi);
        (e != i.startState.field(Yi) ||
          i.docChanged ||
          i.selectionSet ||
          i.viewportChanged) &&
          (this.decorations = this.highlight(e));
      }
      highlight({ query: i, panel: e }) {
        if (!e || !i.spec.valid) return N.none;
        let { view: t } = this,
          n = new Ui();
        for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
          let { from: l, to: a } = r[s];
          for (; s < o - 1 && a > r[s + 1].from - 2 * 250; ) a = r[++s].to;
          i.highlight(t.state, l, a, (h, c) => {
            let f = t.state.selection.ranges.some(
              (u) => u.from == h && u.to == c
            );
            n.add(h, c, f ? lv : ov);
          });
        }
        return n.finish();
      }
    },
    { decorations: (i) => i.decorations }
  );
function wr(i) {
  return (e) => {
    let t = e.state.field(Yi, !1);
    return t && t.query.spec.valid ? i(e, t) : Jm(e);
  };
}
const Jo = wr((i, { query: e }) => {
    let { to: t } = i.state.selection.main,
      n = e.nextMatch(i.state, t, t);
    if (!n) return !1;
    let s = v.single(n.from, n.to),
      r = i.state.facet(ts);
    return (
      i.dispatch({
        selection: s,
        effects: [Uc(i, n), r.scrollToMatch(s.main, i)],
        userEvent: "select.search",
      }),
      Km(i),
      !0
    );
  }),
  el = wr((i, { query: e }) => {
    let { state: t } = i,
      { from: n } = t.selection.main,
      s = e.prevMatch(t, n, n);
    if (!s) return !1;
    let r = v.single(s.from, s.to),
      o = i.state.facet(ts);
    return (
      i.dispatch({
        selection: r,
        effects: [Uc(i, s), o.scrollToMatch(r.main, i)],
        userEvent: "select.search",
      }),
      Km(i),
      !0
    );
  }),
  hv = wr((i, { query: e }) => {
    let t = e.matchAll(i.state, 1e3);
    return !t || !t.length
      ? !1
      : (i.dispatch({
          selection: v.create(t.map((n) => v.range(n.from, n.to))),
          userEvent: "select.search.matches",
        }),
        !0);
  }),
  cv = ({ state: i, dispatch: e }) => {
    let t = i.selection;
    if (t.ranges.length > 1 || t.main.empty) return !1;
    let { from: n, to: s } = t.main,
      r = [],
      o = 0;
    for (let l = new Gn(i.doc, i.sliceDoc(n, s)); !l.next().done; ) {
      if (r.length > 1e3) return !1;
      l.value.from == n && (o = r.length),
        r.push(v.range(l.value.from, l.value.to));
    }
    return (
      e(
        i.update({
          selection: v.create(r, o),
          userEvent: "select.search.matches",
        })
      ),
      !0
    );
  },
  wd = wr((i, { query: e }) => {
    let { state: t } = i,
      { from: n, to: s } = t.selection.main;
    if (t.readOnly) return !1;
    let r = e.nextMatch(t, n, n);
    if (!r) return !1;
    let o = [],
      l,
      a,
      h = [];
    if (
      (r.from == n &&
        r.to == s &&
        ((a = t.toText(e.getReplacement(r))),
        o.push({ from: r.from, to: r.to, insert: a }),
        (r = e.nextMatch(t, r.from, r.to)),
        h.push(
          q.announce.of(
            t.phrase("replaced match on line $", t.doc.lineAt(n).number) + "."
          )
        )),
      r)
    ) {
      let c = o.length == 0 || o[0].from >= r.to ? 0 : r.to - r.from - a.length;
      (l = v.single(r.from - c, r.to - c)),
        h.push(Uc(i, r)),
        h.push(t.facet(ts).scrollToMatch(l.main, i));
    }
    return (
      i.dispatch({
        changes: o,
        selection: l,
        effects: h,
        userEvent: "input.replace",
      }),
      !0
    );
  }),
  fv = wr((i, { query: e }) => {
    if (i.state.readOnly) return !1;
    let t = e.matchAll(i.state, 1e9).map((s) => {
      let { from: r, to: o } = s;
      return { from: r, to: o, insert: e.getReplacement(s) };
    });
    if (!t.length) return !1;
    let n = i.state.phrase("replaced $ matches", t.length) + ".";
    return (
      i.dispatch({
        changes: t,
        effects: q.announce.of(n),
        userEvent: "input.replace.all",
      }),
      !0
    );
  });
function Lc(i) {
  return i.state.facet(ts).createPanel(i);
}
function _h(i, e) {
  var t, n, s, r, o;
  let l = i.selection.main,
    a = l.empty || l.to > l.from + 100 ? "" : i.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let h = i.facet(ts);
  return new Gm({
    search: (
      (t = e == null ? void 0 : e.literal) !== null && t !== void 0
        ? t
        : h.literal
    )
      ? a
      : a.replace(/\n/g, "\\n"),
    caseSensitive:
      (n = e == null ? void 0 : e.caseSensitive) !== null && n !== void 0
        ? n
        : h.caseSensitive,
    literal:
      (s = e == null ? void 0 : e.literal) !== null && s !== void 0
        ? s
        : h.literal,
    regexp:
      (r = e == null ? void 0 : e.regexp) !== null && r !== void 0
        ? r
        : h.regexp,
    wholeWord:
      (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0
        ? o
        : h.wholeWord,
  });
}
function Hm(i) {
  let e = Ks(i, Lc);
  return e && e.dom.querySelector("[main-field]");
}
function Km(i) {
  let e = Hm(i);
  e && e == i.root.activeElement && e.select();
}
const Jm = (i) => {
    let e = i.state.field(Yi, !1);
    if (e && e.panel) {
      let t = Hm(i);
      if (t && t != i.root.activeElement) {
        let n = _h(i.state, e.query.spec);
        n.valid && i.dispatch({ effects: ar.of(n) }), t.focus(), t.select();
      }
    } else
      i.dispatch({
        effects: [
          jc.of(!0),
          e ? ar.of(_h(i.state, e.query.spec)) : ee.appendConfig.of(pv),
        ],
      });
    return !0;
  },
  e0 = (i) => {
    let e = i.state.field(Yi, !1);
    if (!e || !e.panel) return !1;
    let t = Ks(i, Lc);
    return (
      t && t.dom.contains(i.root.activeElement) && i.focus(),
      i.dispatch({ effects: jc.of(!1) }),
      !0
    );
  },
  U$ = [
    { key: "Mod-f", run: Jm, scope: "editor search-panel" },
    {
      key: "F3",
      run: Jo,
      shift: el,
      scope: "editor search-panel",
      preventDefault: !0,
    },
    {
      key: "Mod-g",
      run: Jo,
      shift: el,
      scope: "editor search-panel",
      preventDefault: !0,
    },
    { key: "Escape", run: e0, scope: "editor search-panel" },
    { key: "Mod-Shift-l", run: cv },
    { key: "Mod-Alt-g", run: qk },
    { key: "Mod-d", run: tv, preventDefault: !0 },
  ];
class uv {
  constructor(e) {
    this.view = e;
    let t = (this.query = e.state.field(Yi).query.spec);
    (this.commit = this.commit.bind(this)),
      (this.searchField = be("input", {
        value: t.search,
        placeholder: St(e, "Find"),
        "aria-label": St(e, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.replaceField = be("input", {
        value: t.replace,
        placeholder: St(e, "Replace"),
        "aria-label": St(e, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.caseField = be("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: t.caseSensitive,
        onchange: this.commit,
      })),
      (this.reField = be("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: t.regexp,
        onchange: this.commit,
      })),
      (this.wordField = be("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: t.wholeWord,
        onchange: this.commit,
      }));
    function n(s, r, o) {
      return be(
        "button",
        { class: "cm-button", name: s, onclick: r, type: "button" },
        o
      );
    }
    this.dom = be(
      "div",
      { onkeydown: (s) => this.keydown(s), class: "cm-search" },
      [
        this.searchField,
        n("next", () => Jo(e), [St(e, "next")]),
        n("prev", () => el(e), [St(e, "previous")]),
        n("select", () => hv(e), [St(e, "all")]),
        be("label", null, [this.caseField, St(e, "match case")]),
        be("label", null, [this.reField, St(e, "regexp")]),
        be("label", null, [this.wordField, St(e, "by word")]),
        ...(e.state.readOnly
          ? []
          : [
              be("br"),
              this.replaceField,
              n("replace", () => wd(e), [St(e, "replace")]),
              n("replaceAll", () => fv(e), [St(e, "replace all")]),
            ]),
        be(
          "button",
          {
            name: "close",
            onclick: () => e0(e),
            "aria-label": St(e, "close"),
            type: "button",
          },
          ["×"]
        ),
      ]
    );
  }
  commit() {
    let e = new Gm({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value,
    });
    e.eq(this.query) ||
      ((this.query = e), this.view.dispatch({ effects: ar.of(e) }));
  }
  keydown(e) {
    Ix(this.view, e, "search-panel")
      ? e.preventDefault()
      : e.keyCode == 13 && e.target == this.searchField
      ? (e.preventDefault(), (e.shiftKey ? el : Jo)(this.view))
      : e.keyCode == 13 &&
        e.target == this.replaceField &&
        (e.preventDefault(), wd(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let n of t.effects)
        n.is(ar) && !n.value.eq(this.query) && this.setQuery(n.value);
  }
  setQuery(e) {
    (this.query = e),
      (this.searchField.value = e.search),
      (this.replaceField.value = e.replace),
      (this.caseField.checked = e.caseSensitive),
      (this.reField.checked = e.regexp),
      (this.wordField.checked = e.wholeWord);
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(ts).top;
  }
}
function St(i, e) {
  return i.state.phrase(e);
}
const Hr = 30,
  Kr = /[\s\.,:;?!]/;
function Uc(i, { from: e, to: t }) {
  let n = i.state.doc.lineAt(e),
    s = i.state.doc.lineAt(t).to,
    r = Math.max(n.from, e - Hr),
    o = Math.min(s, t + Hr),
    l = i.state.sliceDoc(r, o);
  if (r != n.from) {
    for (let a = 0; a < Hr; a++)
      if (!Kr.test(l[a + 1]) && Kr.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Hr; a--)
      if (!Kr.test(l[a - 1]) && Kr.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return q.announce.of(
    `${i.state.phrase("current match")}. ${l} ${i.state.phrase("on line")} ${
      n.number
    }.`
  );
}
const dv = q.baseTheme({
    ".cm-panel.cm-search": {
      padding: "2px 6px 4px",
      position: "relative",
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0,
      },
      "& input, & button, & label": { margin: ".2em .6em .2em 0" },
      "& input[type=checkbox]": { marginRight: ".2em" },
      "& label": { fontSize: "80%", whiteSpace: "pre" },
    },
    "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
    "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
    "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
    "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" },
  }),
  pv = [Yi, Hi.low(av), dv];
// END codemirror-search.js


// BEGIN simple-runtypes.js
function hr(i, e) {
  e === void 0 && (e = 512);
  var t;
  if (i === void 0) return "undefined";
  if (typeof i == "function") return i.toString();
  try {
    t = JSON.stringify(i);
  } catch {
    t = "" + i;
  }
  return t.length > e ? t.slice(0, e - 1) + "…" : t;
}
function t0(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    cr(i, e);
}
function Eh(i) {
  return (
    (Eh = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Eh(i)
  );
}
function cr(i, e) {
  return (
    (cr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, s) {
          return (n.__proto__ = s), n;
        }),
    cr(i, e)
  );
}
function Ov() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Oo(i, e, t) {
  return (
    Ov()
      ? (Oo = Reflect.construct.bind())
      : (Oo = function (s, r, o) {
          var l = [null];
          l.push.apply(l, r);
          var a = Function.bind.apply(s, l),
            h = new a();
          return o && cr(h, o.prototype), h;
        }),
    Oo.apply(null, arguments)
  );
}
function gv(i) {
  return Function.toString.call(i).indexOf("[native code]") !== -1;
}
function tl(i) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (tl = function (n) {
      if (n === null || !gv(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, s);
      }
      function s() {
        return Oo(n, arguments, Eh(this).constructor);
      }
      return (
        (s.prototype = Object.create(n.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        cr(s, n)
      );
    }),
    tl(i)
  );
}
var i0 = (function (i) {
    t0(e, i);
    function e(t, n, s) {
      var r;
      return (
        (r = i.call(this, t) || this),
        (r.name = "RuntypeError"),
        (r.reason = t),
        (r.path = s),
        (r.value = n),
        r
      );
    }
    return e;
  })(tl(Error)),
  Fn = (function (i) {
    t0(e, i);
    function e() {
      return i.apply(this, arguments) || this;
    }
    return e;
  })(tl(Error)),
  Ni = Symbol("SimpleRuntypesFail");
function si(i, e, t) {
  if (i === void 0) throw new i0(e, t, []);
  if (i === Ni) {
    var n;
    return (
      (n = {}),
      (n[Ni] = !0),
      (n.reason = e),
      (n.path = []),
      (n.value = void 0),
      n
    );
  } else
    throw new Fn(
      "failOrThrow must be undefined or the failSymbol, not " +
        JSON.stringify(i)
    );
}
function fr(i, e, t, n) {
  if ((n !== void 0 && e.path.push(n), i === void 0))
    throw new i0(e.reason, t, e.path);
  if (i === Ni) return e;
  throw new Fn(
    "failOrThrow must be undefined or the failSymbol, not " + JSON.stringify(i)
  );
}
var mv = Symbol("isPure");
function Si(i, e) {
  if (e === !0) return Object.assign(i, { isPure: mv });
  if (e === void 0 || e === !1) return i;
  throw new Fn('expected "isPure" or undefined as the second argument');
}
function Qr(i) {
  return !!i.isPure;
}
function Hn(i) {
  return typeof i != "object" || !i ? !1 : i[Ni];
}
function V$(i, e) {
  var t = i(e, Ni);
  return Hn(t) ? ((t.value = e), { ok: !1, error: t }) : { ok: !0, result: t };
}
var bv = Si(function (i, e) {
    return typeof i == "object" && !Array.isArray(i) && i !== null
      ? i
      : si(e, "expected an object", i);
  }, !0),
  yv = Si(function (i, e) {
    return typeof i == "string" ? i : si(e, "expected a string", i);
  }, !0);
function q$(i) {
  return yv;
}
function z$(i) {
  var e = Si(function (t, n) {
    return t === i ? i : si(n, "expected a literal: " + hr(i), t);
  }, !0);
  return (e.literal = i), e;
}
function I$(i) {
  var e = Qr(i),
    t = Si(function (n, s) {
      if (n !== void 0) return i(n, s);
    }, e);
  return t;
}
var xv = Si(function (i, e) {
  return Array.isArray(i) ? i : si(e, "expected an Array", i);
}, !0);
function N$(i, e) {
  var t = {},
    n = t.maxLength,
    s = t.minLength,
    r = Qr(i);
  return Si(function (o, l) {
    var a = xv(o, l);
    if (Hn(a)) return fr(l, a, o);
    if (n !== void 0 && a.length > n)
      return si(
        l,
        "expected the array to contain at most " + n + " elements",
        o
      );
    if (s !== void 0 && a.length < s)
      return si(
        l,
        "expected the array to contain at least " + s + " elements",
        o
      );
    for (var h = r ? a : new Array(a.length), c = 0; c < a.length; c++) {
      var f = i(a[c], Ni);
      if (Hn(f)) return fr(l, f, o, c);
      r || (h[c] = f);
    }
    return h;
  }, r);
}
function Sv(i) {
  for (var e in i)
    if (Object.prototype.hasOwnProperty.call(i, e) && !Qr(i[e])) return !1;
  return !0;
}
function wv(i, e) {
  var t = Sv(i),
    n = [].concat(Object.keys(i)),
    s = [].concat(Object.values(i)),
    r = Si(function (a, h) {
      if (typeof a != "object" || Array.isArray(a) || a === null)
        return si(h, "expected an object", a);
      for (var c = a, f = t ? c : {}, u = 0; u < n.length; u++) {
        var d = n[u],
          p = s[u],
          O = p(c[d], Ni);
        if (Hn(O))
          return d in c
            ? fr(h, O, a, d)
            : si(h, "missing key in record: " + hr(d));
        t || (f[d] = O);
      }
      {
        var m = [];
        for (var b in c)
          Object.prototype.hasOwnProperty.call(i, b) || m.push(b);
        if (m.length) return si(h, "invalid keys in record: " + hr(m), a);
      }
      return f;
    }, t),
    o = {};
  for (var l in i) o[l] = i[l];
  return (r.fields = o), r;
}
function Qv(i) {
  var e = i;
  if (e.fields) return e.fields;
}
function B$(i) {
  return wv(i);
}
function Pv(i, e) {
  var t = new Map();
  e.forEach(function (r) {
    var o = r.fields[i],
      l = o.literal;
    if (l === void 0)
      throw new Fn(
        "broken record type definition, " + r + "[" + i + "] is not a literal"
      );
    if (!(typeof l == "string" || typeof l == "number"))
      throw new Fn(
        "broken record type definition, " +
          r +
          "[" +
          i +
          "] must be a string or number, not " +
          hr(l)
      );
    t.set(l, r);
  });
  var n = e.every(function (r) {
      return Qr(r);
    }),
    s = Si(function (r, o) {
      var l = bv(r, o);
      if (Hn(l)) return fr(o, l, r);
      var a = l[i],
        h = t.get(a);
      return h === void 0
        ? si(
            o,
            "no Runtype found for discriminated union tag " + i + ": " + hr(a),
            r
          )
        : h(r, o);
    }, n);
  return (s.unions = e), s;
}
function kv(i) {
  for (var e = new Map(), t = 0; t < i.length; t++) {
    var n = i[t],
      s = Qv(n);
    if (!s) return;
    for (var r in s) {
      var o = s[r],
        l = o.literal;
      if (l !== void 0) {
        var a;
        e.has(r) || e.set(r, new Set()),
          (a = e.get(r)) === null || a === void 0 || a.add(l);
      }
    }
  }
  var h = [];
  if (
    (e.forEach(function (c, f) {
      c.size === i.length && h.push(f);
    }),
    !!h.length)
  )
    return h[0];
}
function G$() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  if (!e.length) throw new Fn("no runtypes given to union");
  var n = kv(e);
  if (n !== void 0) return Pv(n, e);
  var s = e.every(function (r) {
    return Qr(r);
  });
  return Si(function (r, o) {
    for (var l, a = 0; a < e.length; a++) {
      var h = e[a](r, Ni);
      if (Hn(h)) l = h;
      else return h;
    }
    return fr(o, l, r);
  }, s);
}
// END simple-runtypes.js


// BEGIN md5
class We {
  constructor() {
    (this._dataLength = 0),
      (this._bufferLength = 0),
      (this._state = new Int32Array(4)),
      (this._buffer = new ArrayBuffer(68)),
      (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
      (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
      this.start();
  }
  static hashStr(e, t = !1) {
    return this.onePassHasher.start().appendStr(e).end(t);
  }
  static hashAsciiStr(e, t = !1) {
    return this.onePassHasher.start().appendAsciiStr(e).end(t);
  }
  static _hex(e) {
    const t = We.hexChars,
      n = We.hexOut;
    let s, r, o, l;
    for (l = 0; l < 4; l += 1)
      for (r = l * 8, s = e[l], o = 0; o < 8; o += 2)
        (n[r + 1 + o] = t.charAt(s & 15)),
          (s >>>= 4),
          (n[r + 0 + o] = t.charAt(s & 15)),
          (s >>>= 4);
    return n.join("");
  }
  static _md5cycle(e, t) {
    let n = e[0],
      s = e[1],
      r = e[2],
      o = e[3];
    (n += (((s & r) | (~s & o)) + t[0] - 680876936) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[1] - 389564586) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[2] + 606105819) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[3] - 1044525330) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[4] - 176418897) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[5] + 1200080426) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[6] - 1473231341) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[7] - 45705983) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[8] + 1770035416) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[9] - 1958414417) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[10] - 42063) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[11] - 1990404162) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & r) | (~s & o)) + t[12] + 1804603682) | 0),
      (n = (((n << 7) | (n >>> 25)) + s) | 0),
      (o += (((n & s) | (~n & r)) + t[13] - 40341101) | 0),
      (o = (((o << 12) | (o >>> 20)) + n) | 0),
      (r += (((o & n) | (~o & s)) + t[14] - 1502002290) | 0),
      (r = (((r << 17) | (r >>> 15)) + o) | 0),
      (s += (((r & o) | (~r & n)) + t[15] + 1236535329) | 0),
      (s = (((s << 22) | (s >>> 10)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[1] - 165796510) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[6] - 1069501632) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[11] + 643717713) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[0] - 373897302) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[5] - 701558691) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[10] + 38016083) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[15] - 660478335) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[4] - 405537848) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[9] + 568446438) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[14] - 1019803690) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[3] - 187363961) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[8] + 1163531501) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += (((s & o) | (r & ~o)) + t[13] - 1444681467) | 0),
      (n = (((n << 5) | (n >>> 27)) + s) | 0),
      (o += (((n & r) | (s & ~r)) + t[2] - 51403784) | 0),
      (o = (((o << 9) | (o >>> 23)) + n) | 0),
      (r += (((o & s) | (n & ~s)) + t[7] + 1735328473) | 0),
      (r = (((r << 14) | (r >>> 18)) + o) | 0),
      (s += (((r & n) | (o & ~n)) + t[12] - 1926607734) | 0),
      (s = (((s << 20) | (s >>> 12)) + r) | 0),
      (n += ((s ^ r ^ o) + t[5] - 378558) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[8] - 2022574463) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[11] + 1839030562) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[14] - 35309556) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[1] - 1530992060) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[4] + 1272893353) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[7] - 155497632) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[10] - 1094730640) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[13] + 681279174) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[0] - 358537222) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[3] - 722521979) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[6] + 76029189) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((s ^ r ^ o) + t[9] - 640364487) | 0),
      (n = (((n << 4) | (n >>> 28)) + s) | 0),
      (o += ((n ^ s ^ r) + t[12] - 421815835) | 0),
      (o = (((o << 11) | (o >>> 21)) + n) | 0),
      (r += ((o ^ n ^ s) + t[15] + 530742520) | 0),
      (r = (((r << 16) | (r >>> 16)) + o) | 0),
      (s += ((r ^ o ^ n) + t[2] - 995338651) | 0),
      (s = (((s << 23) | (s >>> 9)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[0] - 198630844) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[7] + 1126891415) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[14] - 1416354905) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[5] - 57434055) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[12] + 1700485571) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[3] - 1894986606) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[10] - 1051523) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[1] - 2054922799) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[8] + 1873313359) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[15] - 30611744) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[6] - 1560198380) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[13] + 1309151649) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (n += ((r ^ (s | ~o)) + t[4] - 145523070) | 0),
      (n = (((n << 6) | (n >>> 26)) + s) | 0),
      (o += ((s ^ (n | ~r)) + t[11] - 1120210379) | 0),
      (o = (((o << 10) | (o >>> 22)) + n) | 0),
      (r += ((n ^ (o | ~s)) + t[2] + 718787259) | 0),
      (r = (((r << 15) | (r >>> 17)) + o) | 0),
      (s += ((o ^ (r | ~n)) + t[9] - 343485551) | 0),
      (s = (((s << 21) | (s >>> 11)) + r) | 0),
      (e[0] = (n + e[0]) | 0),
      (e[1] = (s + e[1]) | 0),
      (e[2] = (r + e[2]) | 0),
      (e[3] = (o + e[3]) | 0);
  }
  start() {
    return (
      (this._dataLength = 0),
      (this._bufferLength = 0),
      this._state.set(We.stateIdentity),
      this
    );
  }
  appendStr(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o;
    for (o = 0; o < e.length; o += 1) {
      if (((r = e.charCodeAt(o)), r < 128)) t[s++] = r;
      else if (r < 2048) (t[s++] = (r >>> 6) + 192), (t[s++] = (r & 63) | 128);
      else if (r < 55296 || r > 56319)
        (t[s++] = (r >>> 12) + 224),
          (t[s++] = ((r >>> 6) & 63) | 128),
          (t[s++] = (r & 63) | 128);
      else {
        if (
          ((r = (r - 55296) * 1024 + (e.charCodeAt(++o) - 56320) + 65536),
          r > 1114111)
        )
          throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
        (t[s++] = (r >>> 18) + 240),
          (t[s++] = ((r >>> 12) & 63) | 128),
          (t[s++] = ((r >>> 6) & 63) | 128),
          (t[s++] = (r & 63) | 128);
      }
      s >= 64 &&
        ((this._dataLength += 64),
        We._md5cycle(this._state, n),
        (s -= 64),
        (n[0] = n[16]));
    }
    return (this._bufferLength = s), this;
  }
  appendAsciiStr(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o = 0;
    for (;;) {
      for (r = Math.min(e.length - o, 64 - s); r--; )
        t[s++] = e.charCodeAt(o++);
      if (s < 64) break;
      (this._dataLength += 64), We._md5cycle(this._state, n), (s = 0);
    }
    return (this._bufferLength = s), this;
  }
  appendByteArray(e) {
    const t = this._buffer8,
      n = this._buffer32;
    let s = this._bufferLength,
      r,
      o = 0;
    for (;;) {
      for (r = Math.min(e.length - o, 64 - s); r--; ) t[s++] = e[o++];
      if (s < 64) break;
      (this._dataLength += 64), We._md5cycle(this._state, n), (s = 0);
    }
    return (this._bufferLength = s), this;
  }
  getState() {
    const e = this._state;
    return {
      buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
      buflen: this._bufferLength,
      length: this._dataLength,
      state: [e[0], e[1], e[2], e[3]],
    };
  }
  setState(e) {
    const t = e.buffer,
      n = e.state,
      s = this._state;
    let r;
    for (
      this._dataLength = e.length,
        this._bufferLength = e.buflen,
        s[0] = n[0],
        s[1] = n[1],
        s[2] = n[2],
        s[3] = n[3],
        r = 0;
      r < t.length;
      r += 1
    )
      this._buffer8[r] = t.charCodeAt(r);
  }
  end(e = !1) {
    const t = this._bufferLength,
      n = this._buffer8,
      s = this._buffer32,
      r = (t >> 2) + 1;
    this._dataLength += t;
    const o = this._dataLength * 8;
    if (
      ((n[t] = 128),
      (n[t + 1] = n[t + 2] = n[t + 3] = 0),
      s.set(We.buffer32Identity.subarray(r), r),
      t > 55 && (We._md5cycle(this._state, s), s.set(We.buffer32Identity)),
      o <= 4294967295)
    )
      s[14] = o;
    else {
      const l = o.toString(16).match(/(.*?)(.{0,8})$/);
      if (l === null) return;
      const a = parseInt(l[2], 16),
        h = parseInt(l[1], 16) || 0;
      (s[14] = a), (s[15] = h);
    }
    return We._md5cycle(this._state, s), e ? this._state : We._hex(this._state);
  }
}
We.stateIdentity = new Int32Array([
  1732584193, -271733879, -1732584194, 271733878,
]);
We.buffer32Identity = new Int32Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);
We.hexChars = "0123456789abcdef";
We.hexOut = [];
We.onePassHasher = new We();
if (We.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592")
  throw new Error("Md5 self test failed.");
// END md5


// BEGIN comlink.mjs
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ const n0 = Symbol("Comlink.proxy"),
  vv = Symbol("Comlink.endpoint"),
  $v = Symbol("Comlink.releaseProxy"),
  Sa = Symbol("Comlink.finalizer"),
  go = Symbol("Comlink.thrown"),
  s0 = (i) => (typeof i == "object" && i !== null) || typeof i == "function",
  Cv = {
    canHandle: (i) => s0(i) && i[n0],
    serialize(i) {
      const { port1: e, port2: t } = new MessageChannel();
      return o0(i, e), [t, [t]];
    },
    deserialize(i) {
      return i.start(), Av(i);
    },
  },
  Zv = {
    canHandle: (i) => s0(i) && go in i,
    serialize({ value: i }) {
      let e;
      return (
        i instanceof Error
          ? (e = {
              isError: !0,
              value: { message: i.message, name: i.name, stack: i.stack },
            })
          : (e = { isError: !1, value: i }),
        [e, []]
      );
    },
    deserialize(i) {
      throw i.isError
        ? Object.assign(new Error(i.value.message), i.value)
        : i.value;
    },
  },
  r0 = new Map([
    ["proxy", Cv],
    ["throw", Zv],
  ]);
function Rv(i, e) {
  for (const t of i)
    if (e === t || t === "*" || (t instanceof RegExp && t.test(e))) return !0;
  return !1;
}
function o0(i, e = globalThis, t = ["*"]) {
  e.addEventListener("message", function n(s) {
    if (!s || !s.data) return;
    if (!Rv(t, s.origin)) {
      console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: o, path: l } = Object.assign({ path: [] }, s.data),
      a = (s.data.argumentList || []).map(ln);
    let h;
    try {
      const c = l.slice(0, -1).reduce((u, d) => u[d], i),
        f = l.reduce((u, d) => u[d], i);
      switch (o) {
        case "GET":
          h = f;
          break;
        case "SET":
          (c[l.slice(-1)[0]] = ln(s.data.value)), (h = !0);
          break;
        case "APPLY":
          h = f.apply(c, a);
          break;
        case "CONSTRUCT":
          {
            const u = new f(...a);
            h = Xv(u);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: u, port2: d } = new MessageChannel();
            o0(i, d), (h = Wv(u, [u]));
          }
          break;
        case "RELEASE":
          h = void 0;
          break;
        default:
          return;
      }
    } catch (c) {
      h = { value: c, [go]: 0 };
    }
    Promise.resolve(h)
      .catch((c) => ({ value: c, [go]: 0 }))
      .then((c) => {
        const [f, u] = sl(c);
        e.postMessage(Object.assign(Object.assign({}, f), { id: r }), u),
          o === "RELEASE" &&
            (e.removeEventListener("message", n),
            l0(e),
            Sa in i && typeof i[Sa] == "function" && i[Sa]());
      })
      .catch((c) => {
        const [f, u] = sl({
          value: new TypeError("Unserializable return value"),
          [go]: 0,
        });
        e.postMessage(Object.assign(Object.assign({}, f), { id: r }), u);
      });
  }),
    e.start && e.start();
}
function Tv(i) {
  return i.constructor.name === "MessagePort";
}
function l0(i) {
  Tv(i) && i.close();
}
function Av(i, e) {
  return Wh(i, [], e);
}
function Jr(i) {
  if (i) throw new Error("Proxy has been released and is not useable");
}
function a0(i) {
  return vn(i, { type: "RELEASE" }).then(() => {
    l0(i);
  });
}
const il = new WeakMap(),
  nl =
    "FinalizationRegistry" in globalThis &&
    new FinalizationRegistry((i) => {
      const e = (il.get(i) || 0) - 1;
      il.set(i, e), e === 0 && a0(i);
    });
function Mv(i, e) {
  const t = (il.get(e) || 0) + 1;
  il.set(e, t), nl && nl.register(i, e, i);
}
function _v(i) {
  nl && nl.unregister(i);
}
function Wh(i, e = [], t = function () {}) {
  let n = !1;
  const s = new Proxy(t, {
    get(r, o) {
      if ((Jr(n), o === $v))
        return () => {
          _v(s), a0(i), (n = !0);
        };
      if (o === "then") {
        if (e.length === 0) return { then: () => s };
        const l = vn(i, { type: "GET", path: e.map((a) => a.toString()) }).then(
          ln
        );
        return l.then.bind(l);
      }
      return Wh(i, [...e, o]);
    },
    set(r, o, l) {
      Jr(n);
      const [a, h] = sl(l);
      return vn(
        i,
        { type: "SET", path: [...e, o].map((c) => c.toString()), value: a },
        h
      ).then(ln);
    },
    apply(r, o, l) {
      Jr(n);
      const a = e[e.length - 1];
      if (a === vv) return vn(i, { type: "ENDPOINT" }).then(ln);
      if (a === "bind") return Wh(i, e.slice(0, -1));
      const [h, c] = Qd(l);
      return vn(
        i,
        { type: "APPLY", path: e.map((f) => f.toString()), argumentList: h },
        c
      ).then(ln);
    },
    construct(r, o) {
      Jr(n);
      const [l, a] = Qd(o);
      return vn(
        i,
        {
          type: "CONSTRUCT",
          path: e.map((h) => h.toString()),
          argumentList: l,
        },
        a
      ).then(ln);
    },
  });
  return Mv(s, i), s;
}
function Ev(i) {
  return Array.prototype.concat.apply([], i);
}
function Qd(i) {
  const e = i.map(sl);
  return [e.map((t) => t[0]), Ev(e.map((t) => t[1]))];
}
const h0 = new WeakMap();
function Wv(i, e) {
  return h0.set(i, e), i;
}
function Xv(i) {
  return Object.assign(i, { [n0]: !0 });
}
function sl(i) {
  for (const [e, t] of r0)
    if (t.canHandle(i)) {
      const [n, s] = t.serialize(i);
      return [{ type: "HANDLER", name: e, value: n }, s];
    }
  return [{ type: "RAW", value: i }, h0.get(i) || []];
}
function ln(i) {
  switch (i.type) {
    case "HANDLER":
      return r0.get(i.name).deserialize(i.value);
    case "RAW":
      return i.value;
  }
}
function vn(i, e, t) {
  return new Promise((n) => {
    const s = Dv();
    i.addEventListener("message", function r(o) {
      !o.data ||
        !o.data.id ||
        o.data.id !== s ||
        (i.removeEventListener("message", r), n(o.data));
    }),
      i.start && i.start(),
      i.postMessage(Object.assign({ id: s }, e), t);
  });
}
function Dv() {
  return new Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
    .join("-");
}
// END comlink.mjs


// BEGIN exports
export {
  Y$ as $,
  w$ as A,
  m$ as B,
  M$ as C,
  v$ as D,
  O$ as E,
  ot as F,
  g$ as G,
  vl as H,
  ce as I,
  P$ as J,
  Z$ as K,
  R$ as L,
  A$ as M,
  y$ as N,
  x$ as O,
  b$ as P,
  L$ as Q,
  yc as R,
  T$ as S,
  E$ as T,
  U$ as U,
  _$ as V,
  k$ as W,
  wQ as X,
  j$ as Y,
  W$ as Z,
  D$ as _,
  e$ as a,
  q as a0,
  $$ as a1,
  Lv as a2,
  gl as a3,
  dn as a4,
  X$ as a5,
  Hh as a6,
  xl as a7,
  o$ as a8,
  Iv as a9,
  Uv as aA,
  Av as aB,
  le as aC,
  Yv as aD,
  h$ as aE,
  xb as aF,
  Fh as aG,
  Gv as aH,
  t$ as aI,
  Jv as aJ,
  s$ as aK,
  Un as aL,
  zv as aM,
  Jb as aN,
  u$ as aO,
  Bd as aa,
  r$ as ab,
  c$ as ac,
  e1 as ad,
  B$ as ae,
  z$ as af,
  q$ as ag,
  I$ as ah,
  N$ as ai,
  G$ as aj,
  V$ as ak,
  Kh as al,
  hl as am,
  Nv as an,
  l$ as ao,
  ob as ap,
  Hv as aq,
  f$ as ar,
  je as as,
  t1 as at,
  to as au,
  pr as av,
  Rb as aw,
  We as ax,
  qv as ay,
  Vv as az,
  Aa as b,
  n$ as c,
  Bv as d,
  ab as e,
  _p as f,
  B0 as g,
  h1 as h,
  Kv as i,
  c1 as j,
  Id as k,
  i$ as l,
  N0 as m,
  cl as n,
  Ta as o,
  tt as p,
  Fv as q,
  zh as r,
  jv as s,
  P0 as t,
  a$ as u,
  I0 as v,
  Cs as w,
  w as x,
  C$ as y,
  S$ as z,
};
// END exports
