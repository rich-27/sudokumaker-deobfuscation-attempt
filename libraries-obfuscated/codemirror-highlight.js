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