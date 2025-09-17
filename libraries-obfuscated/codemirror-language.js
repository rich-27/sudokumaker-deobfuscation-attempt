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