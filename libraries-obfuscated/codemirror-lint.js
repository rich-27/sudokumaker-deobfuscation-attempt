
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
  ];