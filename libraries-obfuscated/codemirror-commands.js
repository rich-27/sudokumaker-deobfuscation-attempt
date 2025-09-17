// 🠋 From codemirror-autocomplete 🠋
const /**wQ = [
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
  ),**/
// 🠉 From codemirror-autocomplete 🠉
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