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