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