const yd =
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