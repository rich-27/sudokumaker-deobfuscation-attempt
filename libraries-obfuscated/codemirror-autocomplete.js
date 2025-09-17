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
// 🠋 From codemirror-commands 🠋
  )/**,
  PQ = (i) => {
    let { state: e } = i,
      t = e.doc.lineAt(e.selection.main.from),
      n = Ec(i.state, t.from);
    return n.line ? kQ(i) : n.block ? $Q(i) : !1;
  }*/;
// 🠉 From codemirror-commands 🠉