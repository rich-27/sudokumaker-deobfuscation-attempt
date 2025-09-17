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